import type { JurisdictionSlug } from "@/types/jurisdiction";
import type { Trail } from "@/types/trail";
import { getImageAssetByPath } from "@/content/images/manifest";
import { marketingImages, trailPlaceholderImages } from "@/config/images";

export interface ContentImageRef {
  src: string;
  alt: string;
}

function refFromPath(localPath: string, fallbackAlt: string): ContentImageRef {
  const asset = getImageAssetByPath(localPath);
  return {
    src: localPath,
    alt: asset?.alt ?? fallbackAlt,
  };
}

export function getTrailCoverImage(trail: Trail): ContentImageRef {
  const cover = trail.images?.[0];
  if (cover) return cover;

  const jurisdictionPlaceholder =
    trailPlaceholderImages.byJurisdiction[
      trail.jurisdiction as keyof typeof trailPlaceholderImages.byJurisdiction
    ];

  return refFromPath(
    jurisdictionPlaceholder ?? trailPlaceholderImages.default,
    `${trail.title} trail photo`,
  );
}

export function getTrailGalleryImages(trail: Trail): ContentImageRef[] {
  if (trail.images && trail.images.length > 1) {
    return trail.images.slice(1);
  }

  if (trail.images?.length === 1) {
    return [];
  }

  return [refFromPath(trailPlaceholderImages.gallery, `${trail.title} additional trail view`)];
}

export function getTrailHubImage(): ContentImageRef {
  return refFromPath(marketingImages.hubs.trails, "E-bike riders on a Mid-Atlantic trail");
}

export function getJurisdictionHubImage(jurisdiction: JurisdictionSlug): ContentImageRef {
  const src =
    trailPlaceholderImages.byJurisdiction[
      jurisdiction as keyof typeof trailPlaceholderImages.byJurisdiction
    ] ?? trailPlaceholderImages.default;

  return refFromPath(src, `Scenic trail landscape in ${jurisdiction.replace("-", " ")}`);
}

export function getHomeHeroImage(): ContentImageRef {
  return refFromPath(
    marketingImages.hero,
    "E-bike rider exploring a trail in the Mid-Atlantic",
  );
}
