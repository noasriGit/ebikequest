import { getPublicJurisdictions } from "@/lib/content";
import { getJurisdictionName } from "@/lib/content/jurisdictions";
import type { GuideCategory } from "@/types/guide";
import {
  buildSitemapEntries,
  getFeaturedEntries,
  getGuideCategoryLabel,
  getGuideCategoryOrder,
  getRecentEntries,
} from "./build";
import type { SitemapEntry, SitemapPageData, SitemapSection, SitemapSubsection } from "./types";

function sortEntries(entries: SitemapEntry[]): SitemapEntry[] {
  return [...entries].sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));
}

function buildTrailSubsections(entries: SitemapEntry[]): SitemapSubsection[] {
  const trailEntries = entries.filter((entry) => entry.contentType === "trail");
  const hubEntries = entries.filter(
    (entry) =>
      entry.contentType === "hub" &&
      entry.path.startsWith("/trails/") &&
      entry.path.split("/").length === 3,
  );
  const jurisdictionSlugs = [...new Set(trailEntries.map((entry) => entry.path.split("/")[2]))];

  return jurisdictionSlugs
    .sort((a, b) => getJurisdictionName(a).localeCompare(getJurisdictionName(b), "en"))
    .map((slug) => {
      const hubEntry = hubEntries.find((entry) => entry.path === `/trails/${slug}`);
      const trailPages = sortEntries(
        trailEntries.filter((entry) => entry.path.startsWith(`/trails/${slug}/`)),
      );

      return {
        id: `trails-${slug}`,
        title: getJurisdictionName(slug),
        hubPath: `/trails/${slug}`,
        entries: hubEntry ? [hubEntry, ...trailPages] : trailPages,
      };
    })
    .filter((subsection) => subsection.entries.length > 0);
}

function buildGuideSubsections(entries: SitemapEntry[]): SitemapSubsection[] {
  const guideEntries = entries.filter((entry) => entry.contentType === "guide");

  return getGuideCategoryOrder()
    .map((category: GuideCategory) => ({
      id: `guides-${category}`,
      title: getGuideCategoryLabel(category),
      entries: sortEntries(
        guideEntries.filter((entry) => entry.subcategory === category),
      ),
    }))
    .filter((subsection) => subsection.entries.length > 0);
}

function buildPolicyEntries(entries: SitemapEntry[]): SitemapEntry[] {
  return sortEntries(
    entries.filter(
      (entry) =>
        entry.contentType === "static" &&
        entry.id !== "static-sitemap" &&
        (entry.category === "About & trust" || entry.category === "Legal & policies"),
    ),
  );
}

export async function buildSitemapPageData(): Promise<SitemapPageData> {
  const entries = await buildSitemapEntries();
  const featuredEntries = getFeaturedEntries(entries);
  const recentEntries = getRecentEntries(entries);
  const trailSubsections = buildTrailSubsections(entries);
  const guideSubsections = buildGuideSubsections(entries);
  const lawEntries = sortEntries(entries.filter((entry) => entry.contentType === "law"));
  const policyEntries = buildPolicyEntries(entries);

  const sections: SitemapSection[] = [];

  if (featuredEntries.length > 0) {
    sections.push({
      id: "featured",
      title: "Start here",
      description: "Primary hubs and reference pages for exploring eBikeQuest.",
      entries: featuredEntries,
    });
  }

  if (recentEntries.length > 0) {
    sections.push({
      id: "recent",
      title: "Recently published",
      description: "Newest trail listings and rider guides, sorted by publication date.",
      entries: recentEntries,
    });
  }

  if (trailSubsections.length > 0) {
    sections.push({
      id: "trails",
      title: "Trails",
      description: "Verified e-bike trail listings across Virginia, Maryland, and Washington DC.",
      hubPath: "/trails",
      subsections: trailSubsections,
    });
  }

  if (guideSubsections.length > 0) {
    sections.push({
      id: "guides",
      title: "Guides",
      description: "Reference articles on classes, maintenance, regulations, and regional riding.",
      hubPath: "/guides",
      subsections: guideSubsections,
    });
  }

  if (lawEntries.length > 0) {
    sections.push({
      id: "laws",
      title: "E-bike laws",
      description: "State and local e-bike regulations for launch jurisdictions.",
      hubPath: "/laws",
      entries: lawEntries,
    });
  }

  if (policyEntries.length > 0) {
    sections.push({
      id: "policies",
      title: "About & policies",
      description: "Editorial standards, company information, and legal pages.",
      entries: policyEntries,
    });
  }

  await getPublicJurisdictions();

  return {
    entries,
    sections,
    recentEntries,
    featuredEntries,
    totalIndexablePages: entries.length,
  };
}
