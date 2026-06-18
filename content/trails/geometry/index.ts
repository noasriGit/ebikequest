import fs from "node:fs";
import path from "node:path";
import type { Feature, LineString } from "geojson";
import type { JurisdictionSlug } from "@/types/jurisdiction";

const GEOMETRY_ROOT = path.join(process.cwd(), "content", "trails", "geometry");

export type TrailGeometryFeature = Feature<
  LineString,
  { jurisdiction: JurisdictionSlug; slug: string }
>;

function geometryPath(jurisdiction: JurisdictionSlug, slug: string): string {
  return path.join(GEOMETRY_ROOT, jurisdiction, `${slug}.geojson`);
}

export function getTrailGeometry(
  jurisdiction: JurisdictionSlug,
  slug: string,
): TrailGeometryFeature | null {
  const filePath = geometryPath(jurisdiction, slug);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const feature = JSON.parse(raw) as TrailGeometryFeature;

  if (feature.geometry?.type !== "LineString") {
    throw new Error(`Invalid geometry type for ${jurisdiction}/${slug}`);
  }

  return feature;
}

export function getAllTrailGeometries(): TrailGeometryFeature[] {
  const results: TrailGeometryFeature[] = [];

  for (const jurisdiction of fs.readdirSync(GEOMETRY_ROOT)) {
    const jurisdictionPath = path.join(GEOMETRY_ROOT, jurisdiction);
    if (!fs.statSync(jurisdictionPath).isDirectory()) continue;

    for (const file of fs.readdirSync(jurisdictionPath)) {
      if (!file.endsWith(".geojson")) continue;
      const slug = file.replace(/\.geojson$/, "");
      const feature = getTrailGeometry(jurisdiction as JurisdictionSlug, slug);
      if (feature) results.push(feature);
    }
  }

  return results;
}

export function getTrailGeometryKey(jurisdiction: JurisdictionSlug, slug: string): string {
  return `${jurisdiction}/${slug}`;
}
