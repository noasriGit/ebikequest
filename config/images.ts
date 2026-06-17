import type { GuideCategory } from "@/types/guide";
import type { JurisdictionSlug } from "@/types/jurisdiction";

export const marketingImages = {
  hero: "/images/marketing/hero.jpg",
  hubs: {
    trails: "/images/marketing/hubs/trails.jpg",
    guides: "/images/trails/_placeholders/gallery.jpg",
    laws: "/images/trails/_placeholders/cover.jpg",
  },
} as const;

export const guideImages = {
  default: "/images/trails/_placeholders/gallery.jpg",
  byCategory: {
    "getting-started": "/images/trails/_placeholders/cover.jpg",
    maintenance: "/images/trails/_placeholders/gallery.jpg",
    regulations: "/images/trails/_placeholders/maryland.jpg",
    "riding-skills": "/images/trails/_placeholders/gallery.jpg",
    "buying-guide": "/images/trails/_placeholders/cover.jpg",
    "local-riding": "/images/trails/_placeholders/virginia.jpg",
  } satisfies Record<GuideCategory, string>,
} as const;

export const trailPlaceholderImages = {
  default: "/images/trails/_placeholders/cover.jpg",
  gallery: "/images/trails/_placeholders/gallery.jpg",
  byJurisdiction: {
    virginia: "/images/trails/_placeholders/virginia.jpg",
    maryland: "/images/trails/_placeholders/maryland.jpg",
    "washington-dc": "/images/trails/_placeholders/washington-dc.jpg",
  } satisfies Partial<Record<JurisdictionSlug, string>>,
} as const;

export function getHubImage(hub: keyof typeof marketingImages.hubs): string {
  return marketingImages.hubs[hub];
}

export function getGuideImage(category?: GuideCategory): string {
  if (category) {
    return guideImages.byCategory[category] ?? guideImages.default;
  }
  return guideImages.default;
}

export function getJurisdictionImage(slug: JurisdictionSlug): string {
  return (
    trailPlaceholderImages.byJurisdiction[slug as keyof typeof trailPlaceholderImages.byJurisdiction] ??
    trailPlaceholderImages.default
  );
}
