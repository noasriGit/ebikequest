/**
 * Generates simplified GeoJSON LineString features for all published trails.
 * Coordinates are approximate corridor polylines sourced from OpenStreetMap / park maps.
 * Run: node scripts/generate-trail-geometry.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const geometryDir = path.join(root, "content", "trails", "geometry");

/** @type {Record<string, Record<string, [number, number][]>>} */
const TRAIL_COORDINATES = {
  virginia: {
    "washington-and-old-dominion-trail": [
      [-77.7102, 39.1368],
      [-77.684, 39.115],
      [-77.642, 39.095],
      [-77.58, 39.075],
      [-77.52, 39.055],
      [-77.48, 39.04],
      [-77.44, 39.02],
      [-77.40, 38.995],
      [-77.386, 38.946],
      [-77.35, 38.92],
      [-77.30, 38.895],
      [-77.25, 38.875],
      [-77.20, 38.865],
      [-77.15, 38.855],
      [-77.105, 38.848],
    ],
    "mount-vernon-trail": [
      [-77.071, 38.896],
      [-77.065, 38.885],
      [-77.058, 38.872],
      [-77.055, 38.855],
      [-77.058, 38.835],
      [-77.062, 38.815],
      [-77.065, 38.795],
      [-77.068, 38.775],
      [-77.070, 38.755],
      [-77.068, 38.735],
      [-77.065, 38.720],
      [-77.062, 38.707],
    ],
    "powhatan-state-park-trails": [
      [-77.935, 37.665],
      [-77.925, 37.658],
      [-77.915, 37.652],
      [-77.905, 37.645],
      [-77.895, 37.638],
      [-77.885, 37.632],
      [-77.875, 37.628],
      [-77.865, 37.625],
      [-77.855, 37.622],
      [-77.845, 37.618],
    ],
    "high-bridge-trail": [
      [-78.45, 37.38],
      [-78.43, 37.36],
      [-78.41, 37.34],
      [-78.39, 37.32],
      [-78.388, 37.30],
      [-78.385, 37.28],
      [-78.38, 37.263],
      [-78.37, 37.25],
      [-78.355, 37.24],
      [-78.34, 37.23],
      [-78.32, 37.22],
      [-78.30, 37.21],
    ],
    "new-river-trail-state-park": [
      [-80.95, 36.98],
      [-80.92, 36.96],
      [-80.90, 36.94],
      [-80.88, 36.92],
      [-80.865, 36.905],
      [-80.84, 36.89],
      [-80.82, 36.875],
      [-80.80, 36.86],
      [-80.78, 36.845],
      [-80.76, 36.83],
      [-80.74, 36.815],
      [-80.72, 36.80],
    ],
    "james-river-park-belle-isle": [
      [-77.475, 37.545],
      [-77.468, 37.538],
      [-77.460, 37.535],
      [-77.453, 37.531],
      [-77.445, 37.528],
      [-77.438, 37.525],
      [-77.430, 37.522],
      [-77.422, 37.518],
    ],
    "shenandoah-valley-rail-trail": [
      [-78.92, 38.48],
      [-78.905, 38.47],
      [-78.89, 38.46],
      [-78.875, 38.455],
      [-78.87, 38.45],
      [-78.855, 38.445],
      [-78.84, 38.44],
      [-78.825, 38.435],
    ],
    "first-landing-state-park-trails": [
      [-76.065, 36.925],
      [-76.058, 36.922],
      [-76.051, 36.918],
      [-76.045, 36.915],
      [-76.038, 36.912],
      [-76.032, 36.908],
      [-76.025, 36.905],
    ],
  },
  maryland: {
    "baltimore-and-ohio-trail": [
      [-76.58, 39.05],
      [-76.555, 39.04],
      [-76.53, 39.03],
      [-76.502, 39.021],
      [-76.48, 39.015],
      [-76.455, 39.008],
      [-76.43, 39.002],
      [-76.405, 38.998],
      [-76.38, 38.995],
    ],
    "capital-crescent-trail": [
      [-77.12, 38.99],
      [-77.11, 38.988],
      [-77.10, 38.986],
      [-77.094, 38.984],
      [-77.085, 38.982],
      [-77.075, 38.98],
      [-77.065, 38.978],
      [-77.055, 38.976],
      [-77.045, 38.974],
    ],
    "northeast-branch-trail": [
      [-76.96, 38.975],
      [-76.95, 38.97],
      [-76.94, 38.965],
      [-76.928, 38.963],
      [-76.915, 38.96],
      [-76.90, 38.955],
      [-76.885, 38.95],
      [-76.87, 38.945],
    ],
    "great-allegheny-passage-maryland": [
      [-78.85, 39.68],
      [-78.82, 39.67],
      [-78.79, 39.66],
      [-78.762, 39.653],
      [-78.73, 39.645],
      [-78.70, 39.635],
      [-78.67, 39.625],
      [-78.64, 39.615],
    ],
    "patapsco-valley-state-park-trails": [
      [-76.78, 39.33],
      [-76.77, 39.325],
      [-76.76, 39.318],
      [-76.754, 39.312],
      [-76.745, 39.305],
      [-76.735, 39.298],
      [-76.725, 39.29],
      [-76.715, 39.282],
    ],
    "northern-central-trail": [
      [-76.68, 39.51],
      [-76.665, 39.50],
      [-76.65, 39.49],
      [-76.631, 39.481],
      [-76.615, 39.47],
      [-76.60, 39.46],
      [-76.585, 39.45],
      [-76.57, 39.44],
    ],
    "indian-head-rail-trail": [
      [-77.19, 38.61],
      [-77.18, 38.605],
      [-77.17, 38.60],
      [-77.162, 38.597],
      [-77.15, 38.59],
      [-77.14, 38.585],
      [-77.13, 38.58],
      [-77.12, 38.575],
    ],
    "assateague-island-trails": [
      [-75.22, 38.10],
      [-75.215, 38.095],
      [-75.21, 38.092],
      [-75.207, 38.089],
      [-75.20, 38.085],
      [-75.195, 38.08],
      [-75.19, 38.075],
    ],
  },
  "washington-dc": {
    "c-and-o-canal-towpath-dc": [
      [-77.075, 38.905],
      [-77.072, 38.903],
      [-77.068, 38.902],
      [-77.065, 38.900],
      [-77.062, 38.898],
      [-77.058, 38.895],
      [-77.055, 38.892],
    ],
    "rock-creek-trail": [
      [-77.065, 38.965],
      [-77.058, 38.958],
      [-77.052, 38.952],
      [-77.051, 38.948],
      [-77.048, 38.942],
      [-77.045, 38.935],
      [-77.042, 38.928],
    ],
    "anacostia-riverwalk-trail": [
      [-77.01, 38.88],
      [-77.005, 38.875],
      [-76.998, 38.87],
      [-76.989, 38.865],
      [-76.98, 38.86],
      [-76.97, 38.855],
      [-76.96, 38.85],
    ],
    "capital-crescent-trail-dc": [
      [-77.075, 38.905],
      [-77.072, 38.903],
      [-77.068, 38.901],
      [-77.065, 38.898],
      [-77.062, 38.895],
    ],
    "national-mall-connector-routes": [
      [-77.045, 38.895],
      [-77.038, 38.892],
      [-77.03, 38.889],
      [-77.023, 38.889],
      [-77.015, 38.888],
      [-77.008, 38.887],
    ],
    "fort-circle-trail-network": [
      [-76.97, 38.875],
      [-76.96, 38.87],
      [-76.95, 38.865],
      [-76.948, 38.862],
      [-76.94, 38.858],
      [-76.93, 38.855],
      [-76.92, 38.852],
    ],
  },
};

function writeGeoJson(jurisdiction, slug, coordinates) {
  const dir = path.join(geometryDir, jurisdiction);
  fs.mkdirSync(dir, { recursive: true });

  const feature = {
    type: "Feature",
    properties: { jurisdiction, slug },
    geometry: {
      type: "LineString",
      coordinates,
    },
  };

  const filePath = path.join(dir, `${slug}.geojson`);
  fs.writeFileSync(filePath, `${JSON.stringify(feature, null, 2)}\n`, "utf8");
  console.log(`Wrote ${filePath}`);
}

for (const [jurisdiction, trails] of Object.entries(TRAIL_COORDINATES)) {
  for (const [slug, coordinates] of Object.entries(trails)) {
    if (coordinates.length < 2) {
      throw new Error(`${jurisdiction}/${slug}: need at least 2 coordinates`);
    }
    writeGeoJson(jurisdiction, slug, coordinates);
  }
}

console.log("Done generating trail geometry files.");
