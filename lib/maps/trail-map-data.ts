import { getTrailGeometry } from "@/content/trails/geometry";
import { getTrails } from "@/lib/content/trails";
import type { Trail } from "@/types/trail";
import type { LineString } from "geojson";
import {
  type TrailMapFeature,
} from "./trail-map-utils";

export type { LngLatBounds, TrailMapFeature } from "./trail-map-utils";
export {
  buildTrailFeatureCollection,
  boundsCenter,
  DMV_DEFAULT_BOUNDS,
  getCombinedBounds,
  getTrailBounds,
  haversineMiles,
} from "./trail-map-utils";

function getGeometryCenter(geometry: LineString): { lat: number; lng: number } {
  const mid = geometry.coordinates[Math.floor(geometry.coordinates.length / 2)];
  return { lat: mid[1], lng: mid[0] };
}

export function toTrailMapFeature(trail: Trail): TrailMapFeature | null {
  const geometryFeature = getTrailGeometry(trail.jurisdiction, trail.slug);
  const geometry = geometryFeature?.geometry;

  if (!geometry || geometry.coordinates.length < 2) {
    const point = trail.location.coordinates;
    if (!point) return null;

    return {
      id: trail.id,
      title: trail.title,
      description: trail.description,
      jurisdiction: trail.jurisdiction,
      slug: trail.slug,
      href: `/trails/${trail.jurisdiction}/${trail.slug}`,
      difficulty: trail.stats.difficulty,
      distanceMiles: trail.stats.distanceMiles,
      ebikeAllowed: trail.ebikePolicy.allowed,
      center: point,
      geometry: {
        type: "LineString",
        coordinates: [
          [point.lng, point.lat],
          [point.lng + 0.001, point.lat + 0.001],
        ],
      },
    };
  }

  const center = trail.location.coordinates ?? getGeometryCenter(geometry);

  return {
    id: trail.id,
    title: trail.title,
    description: trail.description,
    jurisdiction: trail.jurisdiction,
    slug: trail.slug,
    href: `/trails/${trail.jurisdiction}/${trail.slug}`,
    difficulty: trail.stats.difficulty,
    distanceMiles: trail.stats.distanceMiles,
    ebikeAllowed: trail.ebikePolicy.allowed,
    center,
    geometry,
  };
}

export async function getTrailMapFeatures(): Promise<TrailMapFeature[]> {
  const trails = await getTrails();
  return trails
    .map(toTrailMapFeature)
    .filter((feature): feature is TrailMapFeature => feature !== null);
}
