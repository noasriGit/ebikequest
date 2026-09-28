import {
  getAllHubs,
  getGuides,
  getPublicJurisdictions,
  getPublishedLaws,
  getTrails,
  GUIDE_CATEGORY_LABELS,
} from "@/lib/content";
import {
  getBrand,
  getBrands,
  getBuyingGuides,
  getComparisons,
  getModels,
  isBrandHubIndexable,
  isBuyingGuideHubIndexable,
  isCompareHubIndexable,
  isModelHubIndexable,
} from "@/lib/content/commerce";
import { safetyPage } from "@/content/research/safety";
import { getJurisdictionName } from "@/lib/content/jurisdictions";
import type { GuideCategory } from "@/types/guide";
import { STATIC_SITEMAP_PAGES, staticPageToSitemapEntry } from "./static-pages";
import type { SitemapEntry } from "./types";
import { groupSitemapEntries, type SitemapGroupDocument } from "./xml";

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

  entries.push({
    id: "safety",
    title: safetyPage.title,
    path: "/safety",
    description: safetyPage.description,
    contentType: "safety",
    category: "Research",
    indexable: true,
    parentPath: "/",
    sortPriority: 86,
    updatedAt: safetyPage.lastVerifiedAt,
  });

  if (await isBrandHubIndexable()) {
    entries.push({
      id: "hub-brands",
      title: "E-Bike Brands",
      path: "/brands",
      description: "Manufacturer profiles with official sources and the models researched under each brand.",
      contentType: "brand",
      category: "Research",
      indexable: true,
      parentPath: "/",
      sortPriority: 84,
    });
  }

  for (const brand of await getBrands()) {
    entries.push({
      id: brand.id,
      title: brand.name,
      path: `/brands/${brand.slug}`,
      description: brand.description,
      contentType: "brand",
      category: "Research",
      subcategory: "Brands",
      updatedAt: brand.lastVerifiedAt,
      indexable: true,
      parentPath: "/brands",
      sortPriority: 72,
    });
  }

  if (await isModelHubIndexable()) {
    entries.push({
      id: "hub-ebikes",
      title: "E-Bike Research",
      path: "/ebikes",
      description: "Individual e-bike profiles with sourced specifications, class, and where that class can ride.",
      contentType: "model",
      category: "Research",
      indexable: true,
      parentPath: "/",
      sortPriority: 85,
    });
  }

  for (const model of await getModels()) {
    const brand = await getBrand(model.brandSlug);
    entries.push({
      id: model.id,
      title: brand ? `${brand.name} ${model.name}` : model.name,
      path: `/ebikes/${model.brandSlug}/${model.slug}`,
      description: model.description,
      contentType: "model",
      category: "Research",
      subcategory: brand?.name,
      updatedAt: model.lastVerifiedAt,
      indexable: true,
      parentPath: `/brands/${model.brandSlug}`,
      sortPriority: 68,
    });
  }

  if (await isBuyingGuideHubIndexable()) {
    entries.push({
      id: "hub-buying-guides",
      title: "E-Bike Buying Guides",
      path: "/buying-guides",
      description: "Buying guides that connect a purchase decision to class, law, and trail access.",
      contentType: "buying-guide",
      category: "Research",
      indexable: true,
      parentPath: "/",
      sortPriority: 83,
    });
  }

  for (const guide of await getBuyingGuides()) {
    entries.push({
      id: guide.id,
      title: guide.title,
      path: `/buying-guides/${guide.slug}`,
      description: guide.description,
      contentType: "buying-guide",
      category: "Research",
      subcategory: "Buying guides",
      publishedAt: guide.publishedAt,
      updatedAt: guide.updatedAt,
      indexable: true,
      parentPath: "/buying-guides",
      sortPriority: 66,
    });
  }

  if (await isCompareHubIndexable()) {
    entries.push({
      id: "hub-compare",
      title: "E-Bike Comparisons",
      path: "/compare",
      description: "Side-by-side comparisons of verified e-bike models on sourced attributes.",
      contentType: "comparison",
      category: "Research",
      indexable: true,
      parentPath: "/",
      sortPriority: 82,
    });
  }

  for (const comparison of await getComparisons()) {
    entries.push({
      id: comparison.id,
      title: comparison.title,
      path: `/compare/${comparison.slug}`,
      description: comparison.description,
      contentType: "comparison",
      category: "Research",
      publishedAt: comparison.publishedAt,
      updatedAt: comparison.updatedAt,
      indexable: true,
      parentPath: "/compare",
      sortPriority: 64,
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

export async function buildPublishedSitemapGroups(): Promise<SitemapGroupDocument[]> {
  return groupSitemapEntries(await buildSitemapEntries());
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
