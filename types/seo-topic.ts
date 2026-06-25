import type { GuideCategory } from "./guide";

export type SearchIntent = "informational" | "commercial" | "navigational";

export type TopicStatus = "queued" | "in-progress" | "published" | "rejected";

export type TopicJurisdiction = "virginia" | "maryland" | "washington-dc";

export type PrimaryUrlOwnerLiteral = "new-guide" | "law-page" | "trail-page";

/** Guide slug when deferring to an existing guide, or a literal owner type. */
export type PrimaryUrlOwner = PrimaryUrlOwnerLiteral | string;

export interface TopicInternalLinks {
  guides: string[];
  trails: { jurisdiction: TopicJurisdiction; slug: string }[];
  laws: TopicJurisdiction[];
}

export interface TopicQueueItem {
  id: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  searchIntent: SearchIntent;
  proposedTitle: string;
  proposedSlug: string;
  category: GuideCategory;
  jurisdictions: TopicJurisdiction[];
  priority: number;
  status: TopicStatus;
  rationale: string;
  primaryUrlOwner: PrimaryUrlOwner;
  internalLinks: TopicInternalLinks;
  competingUrlsOnSite: string[];
  sourceHints: string[];
  addedAt: string;
  scheduledFor: string | null;
}

export interface TopicQueueFile {
  version: number;
  updatedAt: string;
  topics: TopicQueueItem[];
}

export interface PublishedKeyword {
  targetKeyword: string;
  slug: string;
  title: string;
  category: GuideCategory;
  publishedAt: string;
  source: "guide";
}

export interface PublishedKeywordsFile {
  version: number;
  updatedAt: string;
  keywords: PublishedKeyword[];
}

export const TOPIC_STATUSES: TopicStatus[] = [
  "queued",
  "in-progress",
  "published",
  "rejected",
];

export const SEARCH_INTENTS: SearchIntent[] = [
  "informational",
  "commercial",
  "navigational",
];

export const TOPIC_JURISDICTIONS: TopicJurisdiction[] = [
  "virginia",
  "maryland",
  "washington-dc",
];

export const PRIMARY_URL_OWNER_LITERALS: PrimaryUrlOwnerLiteral[] = [
  "new-guide",
  "law-page",
  "trail-page",
];

export const GUIDE_CATEGORIES: GuideCategory[] = [
  "getting-started",
  "maintenance",
  "regulations",
  "riding-skills",
  "buying-guide",
  "local-riding",
];
