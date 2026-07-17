import { aboutPageContent, suggestTrailPageContent } from "@/content/static/marketing";
import { siteConfig } from "@/config/site";
import type { SitemapEntry } from "./types";

export interface StaticSitemapPageConfig {
  id: string;
  path: string;
  title: string;
  description: string;
  featured?: boolean;
  sortPriority: number;
  group: "home" | "trust" | "legal" | "utility";
}

export const STATIC_SITEMAP_PAGES: StaticSitemapPageConfig[] = [
  {
    id: "home",
    path: "/",
    title: `${siteConfig.name}, ${siteConfig.tagline}`,
    description: siteConfig.description,
    featured: true,
    sortPriority: 100,
    group: "home",
  },
  {
    id: "static-about",
    path: "/about",
    title: aboutPageContent.title,
    description: aboutPageContent.description,
    sortPriority: 45,
    group: "trust",
  },
  {
    id: "static-suggest-trail",
    path: "/suggest-trail",
    title: suggestTrailPageContent.title,
    description: suggestTrailPageContent.description,
    sortPriority: 40,
    group: "trust",
  },
  {
    id: "static-editorial-standards",
    path: "/editorial-standards",
    title: "Editorial Standards",
    description:
      "How eBikeQuest researches, verifies, and publishes trail listings, law summaries, and rider guides.",
    featured: true,
    sortPriority: 75,
    group: "trust",
  },
  {
    id: "static-image-credits",
    path: "/image-credits",
    title: "Image Credits",
    description:
      "Attribution and licensing for photography and illustrations used across eBikeQuest.",
    sortPriority: 35,
    group: "trust",
  },
  {
    id: "static-accessibility",
    path: "/accessibility",
    title: "Accessibility",
    description:
      "How eBikeQuest works to improve website accessibility and how to report barriers or request assistance.",
    sortPriority: 30,
    group: "legal",
  },
  {
    id: "static-affiliate-disclosure",
    path: "/affiliate-disclosure",
    title: "Affiliate Disclosure",
    description:
      "How affiliate relationships may appear on eBikeQuest and how they affect editorial independence.",
    sortPriority: 28,
    group: "legal",
  },
  {
    id: "static-privacy",
    path: "/privacy",
    title: "Privacy Policy",
    description: "How eBikeQuest collects, uses, and protects your personal information.",
    sortPriority: 25,
    group: "legal",
  },
  {
    id: "static-terms",
    path: "/terms",
    title: "Terms of Use",
    description: "Terms governing your use of the eBikeQuest website and services.",
    sortPriority: 22,
    group: "legal",
  },
  {
    id: "static-sitemap",
    path: "/sitemap",
    title: "Sitemap",
    description:
      "Browse all public pages on eBikeQuest, organized by trails, guides, laws, and site policies.",
    sortPriority: 20,
    group: "utility",
  },
];

export function staticPageToSitemapEntry(page: StaticSitemapPageConfig): SitemapEntry {
  return {
    id: page.id,
    title: page.title,
    path: page.path,
    description: page.description,
    contentType: page.path === "/" ? "home" : "static",
    category:
      page.group === "home"
        ? "Home"
        : page.group === "trust"
          ? "About & trust"
          : page.group === "legal"
            ? "Legal & policies"
            : "Site",
    indexable: true,
    featured: page.featured,
    sortPriority: page.sortPriority,
  };
}
