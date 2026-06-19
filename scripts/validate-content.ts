import fs from "node:fs";
import path from "node:path";
import { allTrails } from "../content/trails";
import { getTrailGeometry } from "../content/trails/geometry";
import {
  getGeometryCenter,
  getPathPointCount,
  haversineMiles,
  isValidTrailPathGeometry,
} from "../lib/maps/trail-map-utils";
import length from "@turf/length";
import { lineString, multiLineString } from "@turf/helpers";
import { guides } from "../content/guides";
import { hubPages } from "../content/hubs";
import { jurisdictionLaws } from "../content/laws/jurisdictions";
import { nationalLawHub } from "../content/laws/national-comparison";
import { JURISDICTIONS } from "../config/jurisdictions";
import { getAllImageLocalPaths, getImageAssetByPath } from "../content/images/manifest";
import { marketingImages, trailPlaceholderImages } from "../config/images";

const root = path.join(process.cwd());
const publicDir = path.join(root, "public");

let hasErrors = false;

function error(message: string) {
  hasErrors = true;
  console.error(`ERROR: ${message}`);
}

function warn(message: string) {
  console.warn(`WARN: ${message}`);
}

function isPublishedTrail(trail: (typeof allTrails)[number]): boolean {
  return trail.status === "published" && !trail.seo?.noIndex;
}

function validateUniqueSlugs(items: { slug: string; id: string }[], label: string) {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) {
      error(`Duplicate slug "${item.slug}" in ${label}`);
    }
    seen.add(item.slug);
  }
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function countSectionWords(
  sections: { paragraphs: string[]; listItems?: string[] }[],
): number {
  let total = 0;
  for (const section of sections) {
    for (const paragraph of section.paragraphs) {
      total += countWords(paragraph);
    }
    if (section.listItems) {
      for (const item of section.listItems) {
        total += countWords(item);
      }
    }
  }
  return total;
}

function validateDescriptionLength(description: string, label: string) {
  const length = description.length;
  if (length < 120 || length > 160) {
    error(`${label}: description length ${length} chars (expected 120–160)`);
  }
}

function validateTrails() {
  validateUniqueSlugs(allTrails, "trails (global)");
  for (const trail of allTrails) {
    if (!trail.author?.id) error(`Trail "${trail.slug}" missing author`);
    if (!trail.reviewedBy?.reviewedAt) error(`Trail "${trail.slug}" missing reviewer`);
    const jurisdiction = JURISDICTIONS.find((j) => j.slug === trail.jurisdiction);
    if (!jurisdiction) error(`Trail "${trail.slug}" has invalid jurisdiction`);
    if (!jurisdiction?.isPublic) {
      error(`Trail "${trail.slug}" references non-public jurisdiction "${trail.jurisdiction}"`);
    }

    const cover = trail.images?.[0];
    if (!cover?.src) {
      error(`Trail "${trail.slug}" missing images[0].src`);
      continue;
    }
    if (cover.src.endsWith(".svg")) {
      error(`Trail "${trail.slug}" uses SVG placeholder: ${cover.src}`);
    }
    if (!cover.alt || cover.alt.length < 20) {
      error(`Trail "${trail.slug}" cover alt text must be at least 20 characters`);
    }

    validateLocalImage(cover.src, `Trail "${trail.slug}" cover`);
    if (!getImageAssetByPath(cover.src)) {
      error(`Trail "${trail.slug}" cover missing manifest entry: ${cover.src}`);
    }

    validateDescriptionLength(trail.description, `Trail "${trail.slug}"`);

    if (trail.sections?.length) {
      if (trail.sections.length < 4) {
        error(
          `Trail "${trail.slug}" has ${trail.sections.length} sections (expected at least 4 when sections are present)`,
        );
      }
      const wordCount = countSectionWords(trail.sections);
      if (wordCount < 800) {
        error(
          `Trail "${trail.slug}" section word count ${wordCount} (expected at least 800 when sections are present)`,
        );
      }
      if (!trail.faq || trail.faq.length < 4) {
        error(
          `Trail "${trail.slug}" has ${trail.faq?.length ?? 0} FAQ items (expected at least 4 when sections are present)`,
        );
      }
    }
  }
}

function validateTrailGeometry() {
  for (const trail of allTrails) {
    if (!isPublishedTrail(trail)) continue;

    const geometryFeature = getTrailGeometry(trail.jurisdiction, trail.slug);
    if (!geometryFeature) {
      error(
        `Trail "${trail.slug}" (${trail.jurisdiction}) missing geometry file at content/trails/geometry/${trail.jurisdiction}/${trail.slug}.geojson`,
      );
      continue;
    }

    const { geometry, properties } = geometryFeature;

    if (!isValidTrailPathGeometry(geometry)) {
      error(`Trail "${trail.slug}" geometry must be a valid LineString or MultiLineString`);
      continue;
    }

    if (!properties.source) {
      error(`Trail "${trail.slug}" geometry missing properties.source`);
    }
    if (!properties.fetchedAt) {
      error(`Trail "${trail.slug}" geometry missing properties.fetchedAt`);
    }

    const pathLengthMiles = length(
      geometry.type === "LineString"
        ? lineString(geometry.coordinates)
        : multiLineString(geometry.coordinates),
      { units: "miles" },
    );

    if (trail.stats.distanceMiles) {
      const delta =
        Math.abs(pathLengthMiles - trail.stats.distanceMiles) / trail.stats.distanceMiles;
      if (delta > 0.35) {
        warn(
          `Trail "${trail.slug}" geometry length ${pathLengthMiles.toFixed(1)} mi differs from stats.distanceMiles ${trail.stats.distanceMiles} mi by ${(delta * 100).toFixed(0)}% (threshold 35%)`,
        );
      }
    }

    if (trail.stats.distanceMiles && trail.stats.distanceMiles > 10) {
      const pointCount = getPathPointCount(geometry);
      if (pointCount < 50) {
        warn(
          `Trail "${trail.slug}" geometry has ${pointCount} points for a ${trail.stats.distanceMiles} mi trail (expected at least 50)`,
        );
      }
    }

    const coords = trail.location.coordinates;
    if (!coords) continue;

    const center = getGeometryCenter(geometry);
    const centerDistance = haversineMiles(coords, center);

    if (centerDistance > 15) {
      warn(
        `Trail "${trail.slug}" geometry center is ${centerDistance.toFixed(1)} mi from location.coordinates (threshold 15 mi)`,
      );
    }
  }
}

function validateLocalImage(src: string, label: string) {
  if (!src.startsWith("/images/")) {
    error(`${label}: src must be a local /images/ path, got ${src}`);
    return;
  }
  const filePath = path.join(publicDir, src.replace(/^\//, ""));
  if (!fs.existsSync(filePath)) {
    error(`${label}: file not found at public${src}`);
  }
}

function validateMarketingAndFallbackImages() {
  const configPaths = [
    marketingImages.hero,
    marketingImages.hubs.trails,
    trailPlaceholderImages.default,
    trailPlaceholderImages.gallery,
    ...Object.values(trailPlaceholderImages.byJurisdiction),
  ];

  for (const src of configPaths) {
    if (src.endsWith(".svg")) {
      error(`Config image still uses SVG: ${src}`);
    }
    validateLocalImage(src, `Config image ${src}`);
    if (!getImageAssetByPath(src)) {
      error(`Config image missing manifest entry: ${src}`);
    }
  }

  const manifestPaths = getAllImageLocalPaths();
  for (const src of manifestPaths) {
    validateLocalImage(src, `Manifest asset ${src}`);
  }
}

function validateGuides() {
  validateUniqueSlugs(guides, "guides");
  for (const guide of guides) {
    if (!guide.author?.id) error(`Guide "${guide.slug}" missing author`);
    if (!guide.reviewedBy?.reviewedAt) error(`Guide "${guide.slug}" missing reviewer`);
    if (!guide.sections.length) error(`Guide "${guide.slug}" has no sections`);
    if (guide.sections.length < 6) {
      error(`Guide "${guide.slug}" has ${guide.sections.length} sections (expected at least 6)`);
    }
    const wordCount = countSectionWords(guide.sections);
    if (wordCount < 1000) {
      error(`Guide "${guide.slug}" section word count ${wordCount} (expected at least 1000)`);
    }
    if (!guide.faq || guide.faq.length < 4) {
      error(`Guide "${guide.slug}" has ${guide.faq?.length ?? 0} FAQ items (expected at least 4)`);
    }
    validateDescriptionLength(guide.description, `Guide "${guide.slug}"`);
  }
}

function validateLaws() {
  for (const law of jurisdictionLaws) {
    if (!law.author?.id) error(`Law "${law.jurisdiction}" missing author`);
    if (law.faq.length < 8) {
      error(`Law "${law.jurisdiction}" has fewer than 8 FAQ items (${law.faq.length})`);
    }
    if (countWords(law.summary) < 80) {
      error(`Law "${law.jurisdiction}" summary too short (${countWords(law.summary)} words)`);
    }
    if (countWords(law.trailAccess) < 80) {
      error(`Law "${law.jurisdiction}" trailAccess too short (${countWords(law.trailAccess)} words)`);
    }
    validateDescriptionLength(law.description, `Law "${law.jurisdiction}"`);
    const jurisdiction = JURISDICTIONS.find((j) => j.slug === law.jurisdiction);
    if (!jurisdiction?.isPublic) {
      error(`Law "${law.jurisdiction}" references non-public jurisdiction`);
    }
  }

  if (nationalLawHub.faq.length < 8) {
    error(`National law hub has fewer than 8 FAQ items (${nationalLawHub.faq.length})`);
  }
  if (countWords(nationalLawHub.methodology) < 100) {
    error(`National law hub methodology too short (${countWords(nationalLawHub.methodology)} words)`);
  }
}

function validateHubs() {
  for (const hub of hubPages) {
    validateDescriptionLength(hub.description, `Hub "${hub.slug}"`);
    if (hub.intro.length < 2) {
      error(`Hub "${hub.slug}" has fewer than 2 intro paragraphs`);
    }
  }
}

function validateJurisdictions() {
  const publicCount = JURISDICTIONS.filter((j) => j.isPublic).length;
  if (publicCount !== 3) {
    error(`Expected 3 public jurisdictions, found ${publicCount}`);
  }
  if (JURISDICTIONS.length !== 51) {
    error(`Expected 51 jurisdictions (50 states + DC), found ${JURISDICTIONS.length}`);
  }
}

validateJurisdictions();
validateTrails();
validateTrailGeometry();
validateGuides();
validateLaws();
validateHubs();
validateMarketingAndFallbackImages();

if (hasErrors) {
  console.error("\nContent validation failed.");
  process.exit(1);
}

console.log("Content validation passed.");
console.log(`  Trails: ${allTrails.length}`);
console.log(`  Guides: ${guides.length}`);
console.log(`  Laws: ${jurisdictionLaws.length}`);
console.log(`  Jurisdictions: ${JURISDICTIONS.length} (${JURISDICTIONS.filter((j) => j.isPublic).length} public)`);
console.log(`  Image assets: ${getAllImageLocalPaths().length}`);
