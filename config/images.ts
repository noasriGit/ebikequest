import type { JurisdictionSlug } from "@/types/jurisdiction";

export const marketingImages = {
  hero: "/images/marketing/hero.svg",
  hubs: {
    trails: "/images/marketing/hubs/trails.svg",
  },
} as const;

export const trailPlaceholderImages = {
  default: "/images/trails/_placeholders/cover.svg",
  gallery: "/images/trails/_placeholders/gallery.svg",
  byJurisdiction: {
    virginia: "/images/trails/_placeholders/virginia.svg",
    maryland: "/images/trails/_placeholders/maryland.svg",
    "washington-dc": "/images/trails/_placeholders/washington-dc.svg",
  } satisfies Partial<Record<JurisdictionSlug, string>>,
} as const;

/**
 * Replace placeholder paths with your own photos:
 * - Homepage hero: public/images/marketing/hero.jpg
 * - Trails hub banner: public/images/marketing/hubs/trails.jpg
 * - Per trail: add images[] in content/trails/{jurisdiction}.ts
 *   e.g. /images/trails/virginia/washington-and-old-dominion-trail/cover.jpg
 */
