import { getJurisdiction } from "@/config/jurisdictions";

const BRAND_SUFFIX_LENGTH = " | eBikeQuest".length;
/** Target max rendered title length including brand suffix. */
export const SEO_TITLE_MAX_LENGTH = 65;

function seoLocationLabel(jurisdictionSlug: string): string {
  if (jurisdictionSlug === "washington-dc") return "DC";
  const jurisdiction = getJurisdiction(jurisdictionSlug);
  if (!jurisdiction) return jurisdictionSlug;
  return jurisdiction.abbreviation;
}

function trailNameIncludesTrail(trailTitle: string): boolean {
  return /\btrail\b/i.test(trailTitle);
}

/**
 * Builds a compact trail page title (without the site brand suffix).
 * Rendered title becomes "{result} | eBikeQuest" via the root metadata template.
 */
export function buildTrailPageTitle(trailTitle: string, jurisdictionSlug: string): string {
  const location = seoLocationLabel(jurisdictionSlug);
  const typeLabel = trailNameIncludesTrail(trailTitle) ? "E-Bike Guide" : "E-Bike Trail";
  const maxContentLength = SEO_TITLE_MAX_LENGTH - BRAND_SUFFIX_LENGTH;

  const candidates = [
    `${trailTitle} ${typeLabel}`,
    `${trailTitle} in ${location}`,
    `${trailTitle} ${typeLabel}, ${location}`,
    `${trailTitle}, ${location}`,
  ];

  for (const candidate of candidates) {
    if (candidate.length <= maxContentLength) {
      return candidate;
    }
  }

  const shortest = `${trailTitle} in ${location}`;
  if (shortest.length <= maxContentLength) {
    return shortest;
  }

  const trimmedTitle = trailTitle.slice(0, maxContentLength - location.length - 4).trimEnd();
  return `${trimmedTitle} in ${location}`;
}
