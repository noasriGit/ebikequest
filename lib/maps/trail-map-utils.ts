import type { JurisdictionSlug } from "@/types/jurisdiction";
import type { TrailDifficulty } from "@/types/trail";
import type { LineString } from "geojson";

export type LngLatBounds = [west: number, south: number, east: number, north: number];

export interface TrailMapFeature {
  id: string;
  title: string;
  description: string;
  jurisdiction: JurisdictionSlug;
  slug: string;
  href: string;
  difficulty: TrailDifficulty;
  distanceMiles?: number;
  ebikeAllowed: boolean;
  center: { lat: number; lng: number };
  geometry: LineString;
}

/** Default viewport covering Virginia, Maryland, and Washington DC. */
export const DMV_DEFAULT_BOUNDS: LngLatBounds = [-81.05, 36.45, -75.05, 39.55];

export function getTrailBounds(
  geometry: LineString | { lat: number; lng: number },
): LngLatBounds {
  if ("coordinates" in geometry) {
    let west = Infinity;
    let south = Infinity;
    let east = -Infinity;
    let north = -Infinity;

    for (const [lng, lat] of geometry.coordinates) {
      west = Math.min(west, lng);
      south = Math.min(south, lat);
      east = Math.max(east, lng);
      north = Math.max(north, lat);
    }

    return [west, south, east, north];
  }

  const pad = 0.02;
  return [
    geometry.lng - pad,
    geometry.lat - pad,
    geometry.lng + pad,
    geometry.lat + pad,
  ];
}

export function boundsCenter(bounds: LngLatBounds): { lat: number; lng: number } {
  const [west, south, east, north] = bounds;
  return {
    lat: (south + north) / 2,
    lng: (west + east) / 2,
  };
}

export function haversineMiles(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export function buildTrailFeatureCollection(trails: TrailMapFeature[]) {
  return {
    type: "FeatureCollection" as const,
    features: trails.map((trail) => ({
      type: "Feature" as const,
      id: trail.id,
      properties: {
        id: trail.id,
        title: trail.title,
        jurisdiction: trail.jurisdiction,
        slug: trail.slug,
      },
      geometry: trail.geometry,
    })),
  };
}

export function getCombinedBounds(trails: TrailMapFeature[]): LngLatBounds {
  if (!trails.length) return DMV_DEFAULT_BOUNDS;

  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;

  for (const trail of trails) {
    const [w, s, e, n] = getTrailBounds(trail.geometry);
    west = Math.min(west, w);
    south = Math.min(south, s);
    east = Math.max(east, e);
    north = Math.max(north, n);
  }

  return [west, south, east, north];
}
