import type { JurisdictionSlug } from "@/types/jurisdiction";
import type { Trail } from "@/types/trail";
import { marketingImages, trailPlaceholderImages } from "@/config/images";

export interface ContentImageRef {
  src: string;
  alt: string;
}

export function getTrailCoverImage(trail: Trail): ContentImageRef {
  const cover = trail.images?.[0];
  if (cover) return cover;

  const jurisdictionPlaceholder =
    trailPlaceholderImages.byJurisdiction[
      trail.jurisdiction as keyof typeof trailPlaceholderImages.byJurisdiction
    ];

  return {
    src: jurisdictionPlaceholder ?? trailPlaceholderImages.default,
    alt: `${trail.title} trail photo placeholder`,
  };
}

export function getTrailGalleryImages(trail: Trail): ContentImageRef[] {
  if (trail.images && trail.images.length > 1) {
    return trail.images.slice(1);
  }

  if (trail.images?.length === 1) {
    return [];
  }

  return [
    {
      src: trailPlaceholderImages.gallery,
      alt: `${trail.title} additional trail view placeholder`,
    },
  ];
}

export function getTrailHubImage(): ContentImageRef {
  return {
    src: marketingImages.hubs.trails,
    alt: "E-bike riders on a Mid-Atlantic trail",
  };
}

export function getJurisdictionHubImage(jurisdiction: JurisdictionSlug): ContentImageRef {
  const src =
    trailPlaceholderImages.byJurisdiction[
      jurisdiction as keyof typeof trailPlaceholderImages.byJurisdiction
    ] ?? trailPlaceholderImages.default;

  return {
    src,
    alt: `Scenic trail landscape placeholder`,
  };
}

export function getHomeHeroImage(): ContentImageRef {
  return {
    src: marketingImages.hero,
    alt: "E-bike rider exploring a trail in the Mid-Atlantic",
  };
}
