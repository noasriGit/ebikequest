/**
 * Commercial research records. Publish a record only after the facts
 * are sourced. Empty arrays are valid: do not invent brands or models
 * to fill a page.
 */

export type ResearchStatus =
  | "unverified"
  | "source-checked"
  | "editorially-reviewed"
  | "hands-on-tested";

export type PublicationStatus = "draft" | "published";

export type RetailerType = "amazon" | "manufacturer" | "retailer" | "brand";

export type BikeType =
  | "commuter"
  | "city"
  | "cargo"
  | "mountain"
  | "gravel"
  | "folding"
  | "cruiser"
  | "road"
  | "hybrid"
  | "other";

/** Legal classification when it can be determined from a cited source. */
export type EbikeClassDesignation =
  | "class-1"
  | "class-2"
  | "class-3"
  | "unclassified"
  | "out-of-class";

export interface EvidenceSource {
  id: string;
  title: string;
  url: string;
  publisher?: string;
  /** ISO date (YYYY-MM-DD) when the source was checked. */
  accessedAt?: string;
  note?: string;
}

export interface ProductSource {
  id: string;
  kind: "manufacturer" | "regulator" | "certification" | "editorial" | "retailer";
  title: string;
  url: string;
  accessedAt?: string;
}

export interface Specification {
  id: string;
  label: string;
  value: string;
  unit?: string;
  /** EvidenceSource.id or ProductSource.id that supports this value. */
  sourceId?: string;
  note?: string;
}

export interface SafetyNotice {
  id: string;
  summary: string;
  severity?: "info" | "caution" | "warning";
  sourceId?: string;
  effectiveDate?: string;
}

/**
 * Direct outbound link. Never store a cloaked redirect (/go, /out, amzn.to).
 * Do not invent an Amazon Associate tag.
 */
export interface AffiliateLink {
  href: string;
  retailer: RetailerType;
  isAffiliate: boolean;
  label?: string;
  associateTag?: string;
}

export interface RetailerLink {
  id: string;
  retailer: RetailerType;
  retailerName: string;
  href: string;
  isAffiliate: boolean;
  label?: string;
  sourceId?: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  description?: string;
  website?: string;
  headquarters?: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  officialSources?: EvidenceSource[];
  lastVerifiedAt?: string;
  seo?: { title?: string; noIndex?: boolean };
}

export interface EbikeModel {
  id: string;
  brandSlug: string;
  slug: string;
  name: string;
  description?: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  bikeType?: BikeType;
  motor?: string;
  battery?: string;
  advertisedAssistedSpeedMph?: number;
  ebikeClass?: EbikeClassDesignation;
  /** False when the class cannot be determined from cited sources. */
  classDeterminable?: boolean;
  weight?: string;
  wheelSize?: string;
  tireSize?: string;
  brakes?: string;
  suspension?: string;
  warranty?: string;
  certification?: string;
  specifications?: Specification[];
  officialSources?: EvidenceSource[];
  productSources?: ProductSource[];
  safetyNotices?: SafetyNotice[];
  retailerLinks?: RetailerLink[];
  /** Direct Amazon URL only. Leave unset until a real product URL exists. */
  amazonLink?: RetailerLink;
  /** Local site image only. Do not store remote Amazon image URLs. */
  imagePath?: string;
  lastVerifiedAt?: string;
  /**
   * Must stay false unless eBikeQuest has actually ridden or measured the bike.
   * A manufacturer spec sheet is not hands-on testing.
   */
  handsOnTested: boolean;
  relatedGuideSlugs?: string[];
  relatedTrailIds?: string[];
  seo?: { title?: string; noIndex?: boolean };
}

export interface BuyingGuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  publishedAt?: string;
  updatedAt?: string;
  sections?: BuyingGuideSection[];
  relatedBrandSlugs?: string[];
  relatedModelIds?: string[];
  /** Existing /guides/[slug] articles that give this guide its context. */
  relatedGuideSlugs?: string[];
  jurisdictions?: string[];
  handsOnTested?: boolean;
  seo?: { title?: string; noIndex?: boolean };
}

export interface Comparison {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  /** At least two public model ids before the page can be indexed. */
  modelIds: string[];
  publishedAt?: string;
  updatedAt?: string;
  summary?: string;
  handsOnTested?: boolean;
  seo?: { title?: string; noIndex?: boolean };
}
