import type { Author, ContentBase, FAQItem, Reviewer } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";

export interface ClassRules {
  definition: string;
  allowedOnRoads: boolean;
  allowedOnTrails: string;
  maxSpeedMph?: number;
  notes?: string;
}

export interface LawComparisonRow {
  jurisdiction: JurisdictionSlug;
  jurisdictionName: string;
  class1Allowed: string;
  class2Allowed: string;
  class3Allowed: string;
  helmetRequired: string;
  registrationRequired: string;
  trailAccessSummary: string;
  lastVerified: string;
}

export interface JurisdictionLaw extends ContentBase {
  jurisdiction: JurisdictionSlug;
  lastVerified: string;
  sources: { label: string; url: string; accessedAt?: string }[];
  summary: string;
  classifications: {
    class1: ClassRules;
    class2: ClassRules;
    class3: ClassRules;
  };
  trailAccess: string;
  helmetRequirements?: string;
  ageRequirements?: string;
  registrationRequired?: boolean;
  insuranceRequired?: boolean;
  penalties?: string;
  faq: FAQItem[];
  changelog?: { date: string; note: string }[];
  comparisonFields: LawComparisonRow;
}

export interface NationalLawHub {
  title: string;
  description: string;
  lastUpdated: string;
  methodology: string;
  faq: FAQItem[];
  comparisonMatrix: LawComparisonRow[];
  author: Author;
  reviewedBy: Reviewer;
}
