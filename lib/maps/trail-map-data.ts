import { getTrailGeometry } from "@/content/trails/geometry";
import { getTrails } from "@/lib/content/trails";
import type { Trail } from "@/types/trail";
import {
  getGeometryCenter,
  isValidTrailPathGeometry,
  type TrailMapFeature,
} from "./trail-map-utils";

export type { LngLatBounds, TrailMapFeature, TrailPathGeometry } from "./trail-map-utils";
export {
  buildTrailFeatureCollection,
  boundsCenter,
  DMV_DEFAULT_BOUNDS,
  getCombinedBounds,
  getGeometryCenter,
  getPathPointCount,
  getTrailBounds,
  haversineMiles,
  isValidTrailPathGeometry,
  iteratePathCoordinates,
} from "./trail-map-utils";

export function toTrailMapFeature(trail: Trail): TrailMapFeature | null {
  const geometryFeature = getTrailGeometry(trail.jurisdiction, trail.slug);
  const geometry = geometryFeature?.geometry;

  if (!geometry || !isValidTrailPathGeometry(geometry)) {
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
