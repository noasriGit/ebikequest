/**
 * Fetches accurate trail geometry from OpenStreetMap (Overpass API) or official URLs.
 * Run: npm run fetch:trail-geometry
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import bbox from "@turf/bbox";
import bboxClip from "@turf/bbox-clip";
import distance from "@turf/distance";
import { feature, featureCollection, lineString, multiLineString } from "@turf/helpers";
import length from "@turf/length";
import simplify from "@turf/simplify";
import { XMLParser } from "fast-xml-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const geometryDir = path.join(root, "content", "trails", "geometry");
const sourcesPath = path.join(geometryDir, "sources.json");
const cacheDir = path.join(__dirname, ".cache", "osm");

const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];
const SIMPLIFY_TOLERANCE = 0.00005;
const SIMPLIFY_TOLERANCE_M = 5;
const COORD_PRECISION = 6;
const REQUEST_DELAY_MS = 6000;
const MAX_RETRIES = 6;

const forceRefresh = process.argv.includes("--force");
const onlyArg = process.argv.find((arg) => arg.startsWith("--only="));
const onlyKeys = onlyArg ? onlyArg.slice("--only=".length).split(",") : null;

const USER_AGENT = "eBikeQuest/1.0 (https://ebikequest.com; trail-geometry-fetch)";
const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  isArray: (name) => ["node", "way", "nd", "member", "tag"].includes(name),
});

fs.mkdirSync(cacheDir, { recursive: true });

/** @type {Record<string, object>} */
const sources = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));

function roundCoord(coord) {
  const lng = Number(coord[0]);
  const lat = Number(coord[1]);
  return [
    Number(lng.toFixed(COORD_PRECISION)),
    Number(lat.toFixed(COORD_PRECISION)),
  ];
}

function roundGeometry(geometry) {
  if (geometry.type === "LineString") {
    return {
      type: "LineString",
      coordinates: geometry.coordinates.map(roundCoord),
    };
  }
  return {
    type: "MultiLineString",
    coordinates: geometry.coordinates.map((line) => line.map(roundCoord)),
  };
}

function endpointKey([lng, lat]) {
  return `${lng.toFixed(5)},${lat.toFixed(5)}`;
}

function endpointsMatch(a, b, toleranceDeg = 0.00015) {
  return Math.abs(a[0] - b[0]) <= toleranceDeg && Math.abs(a[1] - b[1]) <= toleranceDeg;
}

/** @param {number[][][]} segments */
function mergeSegments(segments) {
  const remaining = segments.filter((seg) => seg.length >= 2).map((seg) => [...seg]);
  const merged = [];

  while (remaining.length) {
    let current = remaining.shift();
    if (!current) break;

    let extended = true;
    while (extended) {
      extended = false;
      for (let i = 0; i < remaining.length; i++) {
        const seg = remaining[i];
        const curStart = current[0];
        const curEnd = current[current.length - 1];
        const segStart = seg[0];
        const segEnd = seg[seg.length - 1];

        if (endpointsMatch(curEnd, segStart)) {
          current = current.concat(seg.slice(1));
          remaining.splice(i, 1);
          extended = true;
          break;
        }
        if (endpointsMatch(curEnd, segEnd)) {
          current = current.concat([...seg].reverse().slice(1));
          remaining.splice(i, 1);
          extended = true;
          break;
        }
        if (endpointsMatch(curStart, segEnd)) {
          current = [...seg].slice(0, -1).concat(current);
          remaining.splice(i, 1);
          extended = true;
          break;
        }
        if (endpointsMatch(curStart, segStart)) {
          current = [...seg].reverse().slice(0, -1).concat(current);
          remaining.splice(i, 1);
          extended = true;
          break;
        }
      }
    }

    merged.push(current);
  }

  return merged;
}

function waysToGeometry(ways) {
  const segments = ways
    .filter((way) => way.geometry?.length >= 2)
    .map((way) => way.geometry.map(([lng, lat]) => [lng, lat]));

  const merged = mergeSegments(segments);
  if (!merged.length) return null;
  if (merged.length === 1) {
    return { type: "LineString", coordinates: merged[0] };
  }
  return { type: "MultiLineString", coordinates: merged };
}

function appendClippedLines(clipped, lines) {
  const { type, coordinates } = clipped.geometry;
  if (type === "LineString") {
    if (coordinates.length >= 2) lines.push(coordinates);
    return;
  }
  if (type === "MultiLineString") {
    for (const line of coordinates) {
      if (line.length >= 2) lines.push(line);
    }
  }
}

function clipGeometry(geometry, clipBbox) {
  const [west, south, east, north] = clipBbox;
  const clipBox = [west, south, east, north];
  const lines = [];

  if (geometry.type === "LineString") {
    appendClippedLines(bboxClip(lineString(geometry.coordinates), clipBox), lines);
  } else {
    for (const coords of geometry.coordinates) {
      appendClippedLines(bboxClip(lineString(coords), clipBox), lines);
    }
  }

  if (!lines.length) return null;
  if (lines.length === 1) return { type: "LineString", coordinates: lines[0] };
  return { type: "MultiLineString", coordinates: lines };
}

function simplifyGeometry(geometry) {
  const feat =
    geometry.type === "LineString"
      ? lineString(geometry.coordinates)
      : multiLineString(geometry.coordinates);

  const simplified = simplify(feat, {
    tolerance: SIMPLIFY_TOLERANCE,
    highQuality: true,
  });

  return simplified.geometry;
}

function geometryLengthMiles(geometry) {
  const feat =
    geometry.type === "LineString"
      ? lineString(geometry.coordinates)
      : multiLineString(geometry.coordinates);
  return length(feat, { units: "miles" });
}

function wayLengthMeters(coords) {
  let total = 0;
  for (let i = 1; i < coords.length; i++) {
    total += distance(coords[i - 1], coords[i], { units: "meters" });
  }
  return total;
}

async function queryOverpass(query, cacheKey) {
  const cachePath = path.join(cacheDir, `${cacheKey}.json`);
  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, "utf8"));
  }

  let lastError = null;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    for (const endpoint of OVERPASS_ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept: "application/json",
          "User-Agent": USER_AGENT,
        },
          body: `data=${encodeURIComponent(query)}`,
        });

        if (response.status === 429 || response.status === 504) {
          lastError = new Error(`Overpass ${response.status} from ${endpoint}`);
          continue;
        }

        if (!response.ok) {
          lastError = new Error(`Overpass error ${response.status} from ${endpoint}`);
          continue;
        }

        const data = await response.json();
        fs.writeFileSync(cachePath, JSON.stringify(data), "utf8");
        await sleep(REQUEST_DELAY_MS);
        return data;
      } catch (error) {
        lastError = error;
      }
    }

    const backoffMs = 15000 * (attempt + 1);
    console.warn(`Overpass retry ${attempt + 1}/${MAX_RETRIES} in ${backoffMs / 1000}s...`);
    await sleep(backoffMs);
  }

  throw lastError ?? new Error("Overpass query failed");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseWayElements(elements) {
  return elements
    .filter((el) => el.type === "way" && el.geometry?.length >= 2)
    .map((el) => ({
      id: el.id,
      tags: el.tags ?? {},
      geometry: el.geometry.map((node) => [node.lon, node.lat]),
    }));
}

function filterWaysBySource(ways, source) {
  let filtered = ways;

  if (source.nameIncludes?.length) {
    const named = filtered.filter((way) => {
      const name = way.tags?.name ?? "";
      return source.nameIncludes.some((fragment) =>
        name.toLowerCase().includes(fragment.toLowerCase()),
      );
    });
    if (named.length) filtered = named;
  }

  if (source.names?.length) {
    const named = filtered.filter((way) => {
      const name = way.tags?.name ?? "";
      return source.names.some((candidate) =>
        name.toLowerCase().includes(candidate.toLowerCase()),
      );
    });
    if (named.length) filtered = named;
  }

  return filtered;
}

async function fetchRelationFromOsmApi(relationId) {
  const cachePath = path.join(cacheDir, `osm-api-relation-${relationId}.xml`);
  let xml;

  if (fs.existsSync(cachePath)) {
    xml = fs.readFileSync(cachePath, "utf8");
  } else {
    const response = await fetch(
      `https://api.openstreetmap.org/api/0.6/relation/${relationId}/full`,
      { headers: { "User-Agent": USER_AGENT } },
    );

    if (!response.ok) {
      throw new Error(`OSM API error ${response.status} for relation ${relationId}`);
    }

    xml = await response.text();
    fs.writeFileSync(cachePath, xml, "utf8");
    await sleep(1100);
  }

  const doc = xmlParser.parse(xml);
  const nodes = new Map();
  const ways = [];

  for (const node of doc.osm?.node ?? []) {
    nodes.set(Number(node.id), [Number(node.lon), Number(node.lat)]);
  }

  for (const way of doc.osm?.way ?? []) {
    const coords = (way.nd ?? [])
      .map((nd) => nodes.get(Number(nd.ref)))
      .filter(Boolean);
    if (coords.length >= 2) {
      ways.push({ id: Number(way.id), geometry: coords });
    }
  }

  return waysToGeometry(ways);
}

async function fetchRelationGeometry(relationId) {
  try {
    return await fetchRelationFromOsmApi(relationId);
  } catch (error) {
    console.warn(`OSM API failed for relation ${relationId}, trying Overpass: ${error.message}`);
    const query = `[out:json][timeout:180];relation(${relationId});way(r);out geom;`;
    const data = await queryOverpass(query, `relation-${relationId}`);
    return waysToGeometry(parseWayElements(data.elements));
  }
}

async function fetchWayQueryGeometry(source) {
  const [west, south, east, north] = source.bbox;
  const highwayFilter = source.tags?.highway
    ? `["highway"~"${source.tags.highway.join("|")}"]`
    : "";
  const towpathFilter = source.tags?.towpath
    ? `["towpath"~"${source.tags.towpath.join("|")}"]`
    : "";

  const nameQueries = (source.names ?? [])
    .map((name) => `way["name"~"${escapeRegex(name)}",i]${highwayFilter}${towpathFilter}(${south},${west},${north},${east});`)
    .join("");

  const query = `[out:json][timeout:120];(${nameQueries});out geom;`;
  const cacheKey = `way-query-${source.names?.join("-")}-${source.bbox.join(",")}`;
  const data = await queryOverpass(query, cacheKey);
  let ways = parseWayElements(data.elements);
  ways = filterWaysBySource(ways, source);

  if (!ways.length && source.names?.length) {
    const fallbackQuery = `[out:json][timeout:120];way${highwayFilter}${towpathFilter}(${south},${west},${north},${east});out geom;`;
    const fallbackData = await queryOverpass(fallbackQuery, `${cacheKey}-fallback`);
    ways = filterWaysBySource(parseWayElements(fallbackData.elements), source);
  }

  return waysToGeometry(ways);
}

async function fetchAreaNetworkGeometry(source) {
  const [west, south, east, north] = source.bbox;
  const highwayFilter = source.tags?.highway
    ? `["highway"~"${source.tags.highway.join("|")}"]`
    : `["highway"~"path|footway|cycleway|track"]`;
  const towpathFilter = source.tags?.towpath
    ? `["towpath"~"${source.tags.towpath.join("|")}"]`
    : "";
  const minLengthM = source.minLengthM ?? 150;

  const query = `[out:json][timeout:120];way${highwayFilter}${towpathFilter}(${south},${west},${north},${east});out geom;`;
  const cacheKey = `area-${source.bbox.join(",")}`;
  const data = await queryOverpass(query, cacheKey);

  const ways = filterWaysBySource(
    parseWayElements(data.elements).filter(
      (way) => wayLengthMeters(way.geometry) >= minLengthM,
    ),
    source,
  );

  return waysToGeometry(ways);
}

async function fetchOfficialUrlGeometry(source) {
  const response = await fetch(source.url);
  if (!response.ok) {
    throw new Error(`Failed to download ${source.url}: ${response.status}`);
  }
  const geojson = await response.json();
  const featureData = geojson.type === "FeatureCollection"
    ? geojson.features[0]
    : geojson.type === "Feature"
      ? geojson
      : null;

  if (!featureData?.geometry) {
    throw new Error(`Invalid GeoJSON from ${source.url}`);
  }

  return featureData.geometry;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function fetchTrailGeometry(key, source) {
  const [jurisdiction, slug] = key.split("/");
  const outPath = path.join(geometryDir, jurisdiction, `${slug}.geojson`);

  if (!forceRefresh && fs.existsSync(outPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, "utf8"));
      if (
        existing.properties?.source === "openstreetmap" ||
        existing.properties?.source === "official_gis"
      ) {
        console.log(`SKIP (exists): ${key}`);
        return existing;
      }
    } catch {
      // continue with fetch
    }
  }

  if (source.strategy === "manual") {
    console.log(`SKIP (manual): ${key}`);
    return null;
  }

  let geometry = null;
  let sourceMeta = { source: "openstreetmap", osmRelationIds: [], osmWayIds: [] };

  switch (source.strategy) {
    case "osm_relation":
      geometry = await fetchRelationGeometry(source.relationId);
      sourceMeta = {
        source: "openstreetmap",
        osmRelationIds: [source.relationId],
        osmWayIds: [],
      };
      break;
    case "osm_way_query":
      geometry = await fetchWayQueryGeometry(source);
      sourceMeta = { source: "openstreetmap", osmRelationIds: [], osmWayIds: [] };
      break;
    case "osm_area_network":
      geometry = await fetchAreaNetworkGeometry(source);
      sourceMeta = { source: "openstreetmap", osmRelationIds: [], osmWayIds: [] };
      break;
    case "official_url":
      geometry = await fetchOfficialUrlGeometry(source);
      sourceMeta = { source: "official_gis", url: source.url };
      break;
    default:
      throw new Error(`Unknown strategy "${source.strategy}" for ${key}`);
  }

  if (!geometry) {
    throw new Error(`No geometry returned for ${key}`);
  }

  if (source.clipBbox) {
    geometry = clipGeometry(geometry, source.clipBbox);
    if (!geometry) {
      throw new Error(`Geometry empty after clip for ${key}`);
    }
  } else if (source.strategy === "osm_area_network" && source.bbox) {
    geometry = clipGeometry(geometry, source.bbox);
    if (!geometry) {
      throw new Error(`Geometry empty after bbox clip for ${key}`);
    }
  }

  geometry = simplifyGeometry(geometry);
  geometry = roundGeometry(geometry);

  const lengthMiles = geometryLengthMiles(geometry);
  const fetchedAt = new Date().toISOString().slice(0, 10);

  const featureOut = {
    type: "Feature",
    properties: {
      jurisdiction,
      slug,
      ...sourceMeta,
      fetchedAt,
      simplifyToleranceM: SIMPLIFY_TOLERANCE_M,
      lengthMiles: Number(lengthMiles.toFixed(2)),
      notes: source.notes ?? undefined,
    },
    geometry,
  };

  const outDir = path.join(geometryDir, jurisdiction);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(featureOut, null, 2)}\n`, "utf8");

  const pointCount =
    geometry.type === "LineString"
      ? geometry.coordinates.length
      : geometry.coordinates.reduce((sum, line) => sum + line.length, 0);

  console.log(
    `OK ${key}: ${geometry.type}, ${pointCount} points, ${lengthMiles.toFixed(1)} mi`,
  );

  return featureOut;
}

async function main() {
  const keys = Object.keys(sources);
  let failed = 0;

  for (const key of keys) {
    if (onlyKeys && !onlyKeys.includes(key)) continue;
    try {
      await fetchTrailGeometry(key, sources[key]);
    } catch (error) {
      failed += 1;
      console.error(`FAIL ${key}: ${error.message}`);
    }
  }

  if (failed) {
    console.error(`\n${failed} trail(s) failed.`);
    process.exit(1);
  }

  console.log(`\nDone. Wrote ${keys.length} geometry files.`);
}

main();
