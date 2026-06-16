import type { Jurisdiction, JurisdictionSlug } from "@/types/jurisdiction";

const PUBLIC_SLUGS: JurisdictionSlug[] = [
  "virginia",
  "maryland",
  "washington-dc",
];

function j(
  slug: JurisdictionSlug,
  name: string,
  abbreviation: string,
  type: "state" | "district",
  region: Jurisdiction["region"],
): Jurisdiction {
  return {
    slug,
    name,
    abbreviation,
    type,
    region,
    isPublic: PUBLIC_SLUGS.includes(slug),
  };
}

export const JURISDICTIONS: Jurisdiction[] = [
  j("alabama", "Alabama", "AL", "state", "Southeast"),
  j("alaska", "Alaska", "AK", "state", "Pacific"),
  j("arizona", "Arizona", "AZ", "state", "Southwest"),
  j("arkansas", "Arkansas", "AR", "state", "Southeast"),
  j("california", "California", "CA", "state", "Pacific"),
  j("colorado", "Colorado", "CO", "state", "Mountain"),
  j("connecticut", "Connecticut", "CT", "state", "Northeast"),
  j("delaware", "Delaware", "DE", "state", "Mid-Atlantic"),
  j("florida", "Florida", "FL", "state", "Southeast"),
  j("georgia", "Georgia", "GA", "state", "Southeast"),
  j("hawaii", "Hawaii", "HI", "state", "Pacific"),
  j("idaho", "Idaho", "ID", "state", "Mountain"),
  j("illinois", "Illinois", "IL", "state", "Midwest"),
  j("indiana", "Indiana", "IN", "state", "Midwest"),
  j("iowa", "Iowa", "IA", "state", "Midwest"),
  j("kansas", "Kansas", "KS", "state", "Midwest"),
  j("kentucky", "Kentucky", "KY", "state", "Southeast"),
  j("louisiana", "Louisiana", "LA", "state", "Southeast"),
  j("maine", "Maine", "ME", "state", "Northeast"),
  j("maryland", "Maryland", "MD", "state", "Mid-Atlantic"),
  j("massachusetts", "Massachusetts", "MA", "state", "Northeast"),
  j("michigan", "Michigan", "MI", "state", "Midwest"),
  j("minnesota", "Minnesota", "MN", "state", "Midwest"),
  j("mississippi", "Mississippi", "MS", "state", "Southeast"),
  j("missouri", "Missouri", "MO", "state", "Midwest"),
  j("montana", "Montana", "MT", "state", "Mountain"),
  j("nebraska", "Nebraska", "NE", "state", "Midwest"),
  j("nevada", "Nevada", "NV", "state", "Mountain"),
  j("new-hampshire", "New Hampshire", "NH", "state", "Northeast"),
  j("new-jersey", "New Jersey", "NJ", "state", "Mid-Atlantic"),
  j("new-mexico", "New Mexico", "NM", "state", "Southwest"),
  j("new-york", "New York", "NY", "state", "Northeast"),
  j("north-carolina", "North Carolina", "NC", "state", "Southeast"),
  j("north-dakota", "North Dakota", "ND", "state", "Midwest"),
  j("ohio", "Ohio", "OH", "state", "Midwest"),
  j("oklahoma", "Oklahoma", "OK", "state", "Southwest"),
  j("oregon", "Oregon", "OR", "state", "Pacific"),
  j("pennsylvania", "Pennsylvania", "PA", "state", "Mid-Atlantic"),
  j("rhode-island", "Rhode Island", "RI", "state", "Northeast"),
  j("south-carolina", "South Carolina", "SC", "state", "Southeast"),
  j("south-dakota", "South Dakota", "SD", "state", "Midwest"),
  j("tennessee", "Tennessee", "TN", "state", "Southeast"),
  j("texas", "Texas", "TX", "state", "Southwest"),
  j("utah", "Utah", "UT", "state", "Mountain"),
  j("vermont", "Vermont", "VT", "state", "Northeast"),
  j("virginia", "Virginia", "VA", "state", "Mid-Atlantic"),
  j("washington", "Washington", "WA", "state", "Pacific"),
  j("washington-dc", "District of Columbia", "DC", "district", "Mid-Atlantic"),
  j("west-virginia", "West Virginia", "WV", "state", "Mid-Atlantic"),
  j("wisconsin", "Wisconsin", "WI", "state", "Midwest"),
  j("wyoming", "Wyoming", "WY", "state", "Mountain"),
];

export const JURISDICTION_BY_SLUG = Object.fromEntries(
  JURISDICTIONS.map((item) => [item.slug, item]),
) as Record<JurisdictionSlug, Jurisdiction>;

export function getPublicJurisdictions(): Jurisdiction[] {
  return JURISDICTIONS.filter((item) => item.isPublic);
}

export function getJurisdiction(slug: string): Jurisdiction | undefined {
  return JURISDICTION_BY_SLUG[slug as JurisdictionSlug];
}

export function isPublicJurisdiction(slug: string): boolean {
  const jurisdiction = getJurisdiction(slug);
  return jurisdiction?.isPublic ?? false;
}
