import { allTrails } from "../content/trails";
import { guides } from "../content/guides";
import { jurisdictionLaws } from "../content/laws/jurisdictions";
import { JURISDICTIONS } from "../config/jurisdictions";

let hasErrors = false;

function error(message: string) {
  hasErrors = true;
  console.error(`ERROR: ${message}`);
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
  }
}

function validateGuides() {
  validateUniqueSlugs(guides, "guides");
  for (const guide of guides) {
    if (!guide.author?.id) error(`Guide "${guide.slug}" missing author`);
    if (!guide.reviewedBy?.reviewedAt) error(`Guide "${guide.slug}" missing reviewer`);
    if (!guide.sections.length) error(`Guide "${guide.slug}" has no sections`);
  }
}

function validateLaws() {
  for (const law of jurisdictionLaws) {
    if (!law.author?.id) error(`Law "${law.jurisdiction}" missing author`);
    if (law.faq.length < 5) {
      error(`Law "${law.jurisdiction}" has fewer than 5 FAQ items (${law.faq.length})`);
    }
    const jurisdiction = JURISDICTIONS.find((j) => j.slug === law.jurisdiction);
    if (!jurisdiction?.isPublic) {
      error(`Law "${law.jurisdiction}" references non-public jurisdiction`);
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
validateGuides();
validateLaws();

if (hasErrors) {
  console.error("\nContent validation failed.");
  process.exit(1);
}

console.log("Content validation passed.");
console.log(`  Trails: ${allTrails.length}`);
console.log(`  Guides: ${guides.length}`);
console.log(`  Laws: ${jurisdictionLaws.length}`);
console.log(`  Jurisdictions: ${JURISDICTIONS.length} (${JURISDICTIONS.filter((j) => j.isPublic).length} public)`);
