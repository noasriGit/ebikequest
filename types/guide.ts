import type { ContentBase, FAQItem } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";

export type GuideCategory =
  | "getting-started"
  | "maintenance"
  | "regulations"
  | "riding-skills"
  | "buying-guide"
  | "local-riding";

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface Guide extends ContentBase {
  category: GuideCategory;
  jurisdictions?: JurisdictionSlug[];
  readingTimeMinutes: number;
  sections: GuideSection[];
  faq?: FAQItem[];
  relatedTrails?: string[];
  relatedGuides?: string[];
}

export interface GuideFilter {
  category?: GuideCategory;
  jurisdiction?: JurisdictionSlug;
}
