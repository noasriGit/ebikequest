/**
 * Commercial research records. A record can sit in the catalog as a draft.
 * It becomes a public page only after the publication gates in
 * lib/commerce/publish.ts pass. Do not invent brands or models to fill a page.
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

/** Legal classification when evidence supports a determination. */
export type EbikeClassDesignation =
  | "class-1"
  | "class-2"
  | "class-3"
  | "unclassified"
  | "out-of-class";

export type SourceRole =
  | "manufacturer"
  | "regulator"
  | "certification"
  | "government"
  | "editorial"
  | "retailer";

export interface EvidenceSource {
  id: string;
  title: string;
  url: string;
  publisher?: string;
  role?: SourceRole;
  /** ISO date (YYYY-MM-DD) when the source was checked. */
  accessedAt?: string;
  note?: string;
}

export interface ProductSource {
  id: string;
  kind: SourceRole;
  title: string;
  url: string;
  accessedAt?: string;
}

/** Keys used when a spec drives logic. Other sourced facts use "other". */
export type ModelSpecificationKey =
  | "motor"
  | "battery"
  | "assisted-speed"
  | "weight"
  | "wheel-size"
  | "tire-size"
  | "brakes"
  | "suspension"
  | "warranty"
  | "certification"
  | "bike-type"
  | "other";

/**
 * A factual spec that can be shown on a model page.
 * sourceId is required and must resolve to a source on the same model.
 */
export interface Specification {
  id: string;
  key?: ModelSpecificationKey;
  label: string;
  value: string;
  unit?: string;
  sourceId: string;
  note?: string;
}

export type SafetySeverity = "info" | "caution" | "warning" | "stop-use";

/** How retailer and affiliate calls to action should behave. */
export type CommerceRestriction = "none" | "caution" | "do-not-promote";

export interface SafetyNotice {
  id: string;
  summary: string;
  severity: SafetySeverity;
  /** EvidenceSource.id or ProductSource.id. Required for every notice. */
  sourceId: string;
  /** ISO date when the notice was published or became effective, if known. */
  effectiveDate?: string;
  /**
   * stop-use implies do-not-promote even when this field is omitted.
   * Phase 2 can suppress purchase links without brand-specific code.
   */
  commerceRestriction?: CommerceRestriction;
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

export interface BrandResearchSection {
  id: string;
  heading: string;
  paragraphs: string[];
  sourceIds?: string[];
}

/** A sourced lineup row. modelSlug is set only when a public model page exists. */
export interface BrandLineupRow {
  id: string;
  name: string;
  modelSlug?: string;
  riderFit: string;
  distinction: string;
  sourceId: string;
}

export interface BrandFaq {
  question: string;
  answer: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  /** Overview / quick answer shown in the page hero. */
  description?: string;
  /** Who the brand appears suited for, in original editorial language. */
  suitedFor?: string;
  website?: string;
  headquarters?: string;
  supportContact?: string;
  warrantySummary?: string;
  warrantySourceId?: string;
  categories?: BikeType[];
  lineupNotes?: string;
  classConsiderations?: string;
  certificationNotes?: string;
  limitations?: string[];
  retailerAvailability?: string;
  comparableBrandSlugs?: string[];
  editorialNotes?: string;
  sections?: BrandResearchSection[];
  /** Sourced model differences. Do not add a row to create a URL. */
  lineup?: BrandLineupRow[];
  faq?: BrandFaq[];
  safetyNotices?: SafetyNotice[];
  /** Direct retailer URLs. Leave Amazon affiliate links unset until a real Associates Special Link exists. */
  retailerLinks?: RetailerLink[];
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  officialSources?: EvidenceSource[];
  lastVerifiedAt?: string;
  seo?: { title?: string; noIndex?: boolean };
}

export interface ModelClassification {
  /**
   * True only when the designation is supported by cited sources.
   * False means the class is explicitly undetermined. Do not guess.
   */
  determinable: boolean;
  designation?: EbikeClassDesignation;
  sourceIds: string[];
  /** Short original synthesis: what the sources say, and why the class follows. */
  reasoning?: string;
}

export interface EbikeModel {
  id: string;
  brandSlug: string;
  slug: string;
  name: string;
  description?: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  /** Editorial category. Measured facts belong in specifications. */
  bikeType?: BikeType;
  classification?: ModelClassification;
  /**
   * True after a researcher has looked for regulator and manufacturer
   * safety notices, including the case where none exist.
   */
  safetyReviewed?: boolean;
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

export interface SourcedClaim {
  id: string;
  statement: string;
  sourceId: string;
}

export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** The buyer decision this guide is written to answer. */
  decision?: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  publishedAt?: string;
  updatedAt?: string;
  lastVerifiedAt?: string;
  sections?: BuyingGuideSection[];
  sources?: EvidenceSource[];
  /** Factual product statements. Each one must resolve to sources. */
  productClaims?: SourcedClaim[];
  relatedBrandSlugs?: string[];
  relatedModelIds?: string[];
  /** Existing /guides/[slug] articles that give this guide its context. */
  relatedGuideSlugs?: string[];
  jurisdictions?: string[];
  handsOnTested?: boolean;
  seo?: { title?: string; noIndex?: boolean };
}

export interface ComparisonSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface Comparison {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** The question a rider is trying to answer. */
  intent?: string;
  status: PublicationStatus;
  researchStatus: ResearchStatus;
  /** Public model ids. Duplicates and non-public ids block publication. */
  modelIds: string[];
  publishedAt?: string;
  updatedAt?: string;
  lastVerifiedAt?: string;
  summary?: string;
  /** Shared questions, such as assisted speed or brake type. */
  dimensions?: string[];
  dimensionKeys?: ModelSpecificationKey[];
  sections?: ComparisonSection[];
  differences?: string[];
  tradeoffs?: string[];
  /** Buyer-fit conclusion. Not a ranking and not a winner. */
  buyerFit?: string;
  sources?: EvidenceSource[];
  handsOnTested?: boolean;
  seo?: { title?: string; noIndex?: boolean };
}
