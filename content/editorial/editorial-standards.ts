import type { GuideSection } from "@/types/guide";
import { EDITORIAL_TEAM, withReviewDate } from "@/config/authors";
import { siteConfig } from "@/config/site";

export interface EditorialStandardsContent {
  title: string;
  description: string;
  author: typeof EDITORIAL_TEAM;
  reviewedBy: ReturnType<typeof withReviewDate>;
  updatedAt: string;
  sections: GuideSection[];
}

export const editorialStandards: EditorialStandardsContent = {
  title: "Editorial Standards",
  description:
    "How eBikeQuest researches, verifies, updates, and corrects trail and law information, our commitment to accuracy and transparency.",
  author: EDITORIAL_TEAM,
  reviewedBy: withReviewDate("2026-06-01"),
  updatedAt: "2026-06-01",
  sections: [
    {
      id: "mission",
      heading: "Our mission",
      paragraphs: [
        "eBikeQuest is a national e-bike discovery platform built to help riders find trails, understand laws, and access reliable information. We serve commuters, recreational riders, and travelers who need verified, jurisdiction-aware guidance.",
        "We are a platform first, our product is structured, searchable directory data, not opinion journalism.",
      ],
    },
    {
      id: "research",
      heading: "How we research content",
      paragraphs: [
        "We start with primary sources: state statutes, municipal codes, land manager websites, and official park publications.",
        "Secondary sources such as news articles or forums are used only to identify leads, never as sole verification for trail policies or legal claims.",
      ],
    },
    {
      id: "trail-verification",
      heading: "Trail verification process",
      paragraphs: [
        "Each trail listing documents an e-bike policy with a lastVerified date. We confirm policies by reviewing land manager publications and, where possible, contacting park offices.",
        "When policies are ambiguous, we state uncertainty explicitly rather than assuming access.",
      ],
      listItems: [
        "Identify the land manager and governing jurisdiction",
        "Review official trail or park e-bike policy documents",
        "Record allowed e-bike classes and any posted restrictions",
        "Set a lastVerified date and schedule re-verification",
      ],
    },
    {
      id: "law-sourcing",
      heading: "Law sourcing methodology",
      paragraphs: [
        "Law pages cite specific statutes and regulatory sources with access dates. We summarize plain-language interpretations but link to authoritative legal texts.",
        "Complex legal questions may be reviewed by subject-matter experts before publication.",
      ],
    },
    {
      id: "updates",
      heading: "Update policy",
      paragraphs: [
        "Law pages: reviewed quarterly and within 5 business days of verified legislative changes.",
        "Trail pages: reviewed at least annually and after known policy changes.",
        "All pages display published and updated dates.",
      ],
    },
    {
      id: "corrections",
      heading: "Correction policy",
      paragraphs: [
        `Report errors to ${siteConfig.helpEmail} with the page URL and a supporting source.`,
        "We aim to acknowledge corrections within 2 business days and publish verified fixes within 5 business days.",
        "Significant corrections are noted in page changelogs where applicable.",
      ],
    },
    {
      id: "author-standards",
      heading: "Author and reviewer standards",
      paragraphs: [
        "Content is authored and reviewed by the eBikeQuest Editorial Team. As we grow, guest experts and regional contributors will be identified by name with relevant credentials.",
        "Contributors must disclose conflicts of interest. We do not accept payment for favorable trail or business listings.",
      ],
    },
    {
      id: "ai-policy",
      heading: "AI and automated content policy",
      paragraphs: [
        "AI tools may assist with research organization and draft outlines. All published content is verified, edited, and approved by our editorial team before publication.",
        "We do not publish unreviewed AI-generated legal or safety guidance.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      paragraphs: [
        `Email ${siteConfig.helpEmail} to suggest a trail or report a correction.`,
        "We welcome source-backed corrections from riders, land managers, and legal professionals.",
      ],
    },
  ],
};
