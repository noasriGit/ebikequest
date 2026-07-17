import {
  getAllHubs,
  getGuides,
  getPublicJurisdictions,
  getPublishedLaws,
  getTrails,
  GUIDE_CATEGORY_LABELS,
} from "@/lib/content";
import { getJurisdictionName } from "@/lib/content/jurisdictions";
import type { GuideCategory } from "@/types/guide";
import { STATIC_SITEMAP_PAGES, staticPageToSitemapEntry } from "./static-pages";
import type { SitemapEntry } from "./types";

const GUIDE_CATEGORY_ORDER: GuideCategory[] = [
  "getting-started",
  "maintenance",
  "regulations",
  "riding-skills",
  "buying-guide",
  "local-riding",
];

function normalizePath(path: string): string {
  if (path === "/") return path;
  return path.replace(/\/$/, "");
}

function compareByTitle(a: SitemapEntry, b: SitemapEntry): number {
  return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
}

function compareByPublishedDesc(a: SitemapEntry, b: SitemapEntry): number {
  const aDate = a.publishedAt ?? "";
  const bDate = b.publishedAt ?? "";
  if (aDate !== bDate) return bDate.localeCompare(aDate);
  return compareByTitle(a, b);
}

export async function buildSitemapEntries(): Promise<SitemapEntry[]> {
  const [trails, guides, laws, jurisdictions, hubs] = await Promise.all([
    getTrails(),
    getGuides(),
    getPublishedLaws(),
    getPublicJurisdictions(),
    getAllHubs(),
  ]);

  const entries: SitemapEntry[] = STATIC_SITEMAP_PAGES.map(staticPageToSitemapEntry);

  for (const hub of hubs) {
    const isMainHub = hub.slug === "trails" || hub.slug === "guides" || hub.slug === "laws";
    entries.push({
      id: `hub-${hub.slug}`,
      title: hub.title,
      path: normalizePath(hub.path),
      description: hub.description,
      contentType: "hub",
      category: isMainHub ? "Key resources" : "Trails",
      subcategory: hub.jurisdiction ? getJurisdictionName(hub.jurisdiction) : hub.slug,
      indexable: true,
      featured: isMainHub,
      parentPath: isMainHub ? "/" : "/trails",
      sortPriority: isMainHub ? 90 : 82,
    });
  }

  for (const trail of trails) {
    const jurisdictionName = getJurisdictionName(trail.jurisdiction);
    entries.push({
      id: trail.id,
      title: trail.title,
      path: `/trails/${trail.jurisdiction}/${trail.slug}`,
      description: trail.description,
      contentType: "trail",
      category: jurisdictionName,
      subcategory: "Trails",
      publishedAt: trail.publishedAt,
      updatedAt: trail.updatedAt,
      indexable: true,
      parentPath: `/trails/${trail.jurisdiction}`,
      sortPriority: 70,
    });
  }

  for (const guide of guides) {
    entries.push({
      id: guide.id,
      title: guide.title,
      path: `/guides/${guide.slug}`,
      description: guide.description,
      contentType: "guide",
      category: GUIDE_CATEGORY_LABELS[guide.category],
      subcategory: guide.category,
      publishedAt: guide.publishedAt,
      updatedAt: guide.updatedAt,
      indexable: true,
      parentPath: "/guides",
      sortPriority: 65,
    });
  }

  for (const law of laws) {
    const jurisdictionName = getJurisdictionName(law.jurisdiction);
    entries.push({
      id: law.id,
      title: `${jurisdictionName} E-Bike Laws`,
      path: `/laws/${law.jurisdiction}`,
      description: law.description,
      contentType: "law",
      category: "E-bike laws",
      subcategory: jurisdictionName,
      publishedAt: law.publishedAt,
      updatedAt: law.updatedAt,
      indexable: true,
      parentPath: "/laws",
      sortPriority: 80,
    });
  }

  const jurisdictionSlugs = new Set(jurisdictions.map((j) => j.slug));
  return entries
    .filter((entry) => entry.indexable)
    .filter((entry) => {
      const match = entry.path.match(/^\/laws\/([^/]+)$/);
      if (!match) return true;
      return jurisdictionSlugs.has(match[1] as (typeof jurisdictions)[number]["slug"]);
    })
    .sort((a, b) => b.sortPriority - a.sortPriority || compareByTitle(a, b));
}

export function getFeaturedEntries(entries: SitemapEntry[]): SitemapEntry[] {
  return entries
    .filter((entry) => entry.featured)
    .sort((a, b) => b.sortPriority - a.sortPriority || compareByTitle(a, b));
}

export function getRecentEntries(entries: SitemapEntry[], limit = 15): SitemapEntry[] {
  return entries
    .filter(
      (entry) =>
        (entry.contentType === "trail" || entry.contentType === "guide") && entry.publishedAt,
    )
    .sort(compareByPublishedDesc)
    .slice(0, limit);
}

export function getGuideCategoryOrder(): GuideCategory[] {
  return GUIDE_CATEGORY_ORDER;
}

export function getGuideCategoryLabel(category: GuideCategory): string {
  return GUIDE_CATEGORY_LABELS[category];
}
