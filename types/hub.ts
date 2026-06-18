import type { FAQItem } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";

export type HubSlug =
  | "trails"
  | "guides"
  | "laws"
  | "trails-virginia"
  | "trails-maryland"
  | "trails-washington-dc";

export interface HubPage {
  slug: HubSlug;
  path: string;
  title: string;
  description: string;
  kicker?: string;
  intro: string[];
  faq?: FAQItem[];
  jurisdiction?: JurisdictionSlug;
}
