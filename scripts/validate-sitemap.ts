import { brands } from "../content/commerce/brands";
import { buyingGuides } from "../content/commerce/buying-guides";
import { comparisons } from "../content/commerce/comparisons";
import { ebikeModels, withheldModelResearch } from "../content/commerce/models";
import { getBrands, getBuyingGuides, getComparisons, getModels } from "../lib/content/commerce";
import { assertPublicationFixtures } from "../lib/commerce/publication-fixtures";
import { allTrails } from "../content/trails";
import { guides } from "../content/guides";
import { jurisdictionLaws } from "../content/laws/jurisdictions";
import { siteConfig } from "../config/site";
import {
  assignSitemapGroup,
  buildPublishedSitemapGroups,
  buildSitemapEntries,
  buildSitemapPageData,
  canonicalLoc,
  resolveLastMod,
} from "../lib/sitemap";
import { buildSitemapIndexXml, buildUrlSetXml } from "../lib/sitemap/xml";
import { XMLParser } from "fast-xml-parser";

let hasErrors = false;

function error(message: string) {
  hasErrors = true;
  console.error(`ERROR: ${message}`);
}

function warn(message: string) {
  console.warn(`WARN: ${message}`);
}

function isValidPath(path: string): boolean {
  if (path === "/") return true;
  if (!path.startsWith("/")) return false;
  if (path.endsWith("/")) return false;
  if (path.includes("?")) return false;
  if (path.includes("#")) return false;
  return /^\/[a-z0-9\-\/]+$/.test(path);
}

function asArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function expectedGroup(path: string): string {
  return assignSitemapGroup(path);
}

async function main() {
  const [entries, pageData, groups] = await Promise.all([
    buildSitemapEntries(),
    buildSitemapPageData(),
    buildPublishedSitemapGroups(),
  ]);

  const ids = new Set<string>();
  const paths = new Set<string>();
  const canonicalHost = new URL(siteConfig.url).hostname;

  if (canonicalHost !== "www.ebikequest.com") {
    error(`Canonical hostname must be www.ebikequest.com, received ${canonicalHost}`);
  }

  for (const entry of entries) {
    if (!entry.id) error("Sitemap entry missing id");
    if (!entry.title?.trim()) error(`Sitemap entry ${entry.id} missing title`);
    if (!entry.path) error(`Sitemap entry ${entry.id} missing path`);
    if (!isValidPath(entry.path)) error(`Sitemap entry ${entry.id} has invalid path: ${entry.path}`);
    if (!entry.indexable) error(`Sitemap entry ${entry.id} is not indexable`);

    if (ids.has(entry.id)) error(`Duplicate sitemap id: ${entry.id}`);
    ids.add(entry.id);

    if (paths.has(entry.path)) error(`Duplicate sitemap path: ${entry.path}`);
    paths.add(entry.path);

    const loc = canonicalLoc(entry.path);
    const parsed = new URL(loc);
    if (parsed.hostname !== "www.ebikequest.com") {
      error(`Non-canonical sitemap URL: ${loc}`);
    }
    if (parsed.search || parsed.hash) {
      error(`Sitemap URL includes a query or hash: ${loc}`);
    }
    if (/amazon\.|amzn\.to|\/go\/|\/out\/|[?&]tag=/i.test(loc)) {
      error(`Affiliate or retailer URL leaked into sitemap: ${loc}`);
    }
  }

  const draftTrails = allTrails.filter((trail) => trail.status !== "published" || trail.seo?.noIndex);
  const draftGuides = guides.filter((guide) => guide.status !== "published" || guide.seo?.noIndex);
  const draftLaws = jurisdictionLaws.filter((law) => law.status !== "published" || law.seo?.noIndex);

  for (const trail of draftTrails) {
    const path = `/trails/${trail.jurisdiction}/${trail.slug}`;
    if (paths.has(path)) error(`Draft or noindex trail leaked into sitemap: ${path}`);
  }

  for (const guide of draftGuides) {
    const path = `/guides/${guide.slug}`;
    if (paths.has(path)) error(`Draft or noindex guide leaked into sitemap: ${path}`);
  }

  for (const law of draftLaws) {
    const path = `/laws/${law.jurisdiction}`;
    if (paths.has(path)) error(`Draft or noindex law leaked into sitemap: ${path}`);
  }

  const [publicBrands, publicModels, publicGuides, publicComparisons] = await Promise.all([
    getBrands(),
    getModels(),
    getBuyingGuides(),
    getComparisons(),
  ]);

  const publicBrandPaths = new Set(publicBrands.map((brand) => `/brands/${brand.slug}`));
  const publicModelPaths = new Set(publicModels.map((model) => `/ebikes/${model.brandSlug}/${model.slug}`));
  const publicGuidePaths = new Set(publicGuides.map((guide) => `/buying-guides/${guide.slug}`));
  const publicComparisonPaths = new Set(publicComparisons.map((comparison) => `/compare/${comparison.slug}`));

  for (const brand of brands) {
    const path = `/brands/${brand.slug}`;
    if (paths.has(path) !== publicBrandPaths.has(path)) {
      error(`Brand sitemap membership does not match the public brand predicate: ${path}`);
    }
  }
  for (const model of withheldModelResearch) {
    const path = `/ebikes/${model.brandSlug}/${model.slug}`;
    if (paths.has(path) || publicModelPaths.has(path)) {
      error(`Withheld model leaked into the public e-bike catalog or sitemap: ${path}`);
    }
  }
  for (const model of ebikeModels) {
    const path = `/ebikes/${model.brandSlug}/${model.slug}`;
    if (paths.has(path) !== publicModelPaths.has(path)) {
      error(`Model sitemap membership does not match the public model predicate: ${path}`);
    }
  }
  for (const guide of buyingGuides) {
    const path = `/buying-guides/${guide.slug}`;
    if (paths.has(path) !== publicGuidePaths.has(path)) {
      error(`Buying guide sitemap membership does not match the public guide predicate: ${path}`);
    }
  }
  for (const comparison of comparisons) {
    const path = `/compare/${comparison.slug}`;
    if (paths.has(path) !== publicComparisonPaths.has(path)) {
      error(`Comparison sitemap membership does not match the public comparison predicate: ${path}`);
    }
  }

  if (publicModels.length === 0 && paths.has("/ebikes")) error("Empty e-bike catalog was marked indexable");
  if (publicBrands.length === 0 && paths.has("/brands")) error("Empty brand catalog was marked indexable");
  if (publicGuides.length === 0 && paths.has("/buying-guides")) error("Empty buying-guide catalog was marked indexable");
  if (publicComparisons.length === 0 && paths.has("/compare")) error("Empty comparison catalog was marked indexable");
  if (publicBrands.length > 0 && !paths.has("/brands")) error("Public brand hub missing from sitemap");
  if (publicModels.length > 0 && !paths.has("/ebikes")) error("Public e-bike hub missing from sitemap");
  if (publicGuides.length > 0 && !paths.has("/buying-guides")) error("Public buying-guide hub missing from sitemap");
  if (publicComparisons.length > 0 && !paths.has("/compare")) error("Public comparison hub missing from sitemap");

  for (const message of assertPublicationFixtures()) error(message);

  const excludedPatterns = ["/api/", "/404", "/_next/"];
  for (const path of paths) {
    if (excludedPatterns.some((pattern) => path.includes(pattern))) {
      error(`Excluded route pattern leaked into sitemap: ${path}`);
    }
  }

  if (groups.length === 0) error("Sitemap index has no child sitemaps");

  const groupedPaths = new Set<string>();
  for (const group of groups) {
    if (group.entries.length === 0) error(`Empty sitemap group emitted: ${group.id}`);

    for (const entry of group.entries) {
      if (groupedPaths.has(entry.path)) {
        error(`Duplicate path across sitemap groups: ${entry.path}`);
      }
      groupedPaths.add(entry.path);

      const assigned = expectedGroup(entry.path);
      if (assigned !== group.id) {
        error(`${entry.path} assigned to ${group.id}, expected ${assigned}`);
      }
    }
  }

  for (const path of paths) {
    if (!groupedPaths.has(path)) error(`Indexable path missing from sitemap groups: ${path}`);
  }

  const parser = new XMLParser({ ignoreAttributes: false });
  const indexXml = buildSitemapIndexXml(groups);
  if (indexXml.includes("<priority>") || indexXml.includes("<changefreq>")) {
    error("Sitemap index still emits priority or changefreq");
  }
  if (!indexXml.includes("<sitemapindex")) error("Root sitemap is not a sitemap index");

  const indexDoc = parser.parse(indexXml) as {
    sitemapindex?: { sitemap?: { loc?: string; lastmod?: string } | Array<{ loc?: string; lastmod?: string }> };
  };
  const indexNodes = asArray(indexDoc.sitemapindex?.sitemap);
  if (indexNodes.length !== groups.length) {
    error(`Sitemap index lists ${indexNodes.length} children, expected ${groups.length}`);
  }

  for (const group of groups) {
    const xml = buildUrlSetXml(group.entries);
    if (xml.includes("<priority>") || xml.includes("<changefreq>")) {
      error(`${group.id}.xml still emits priority or changefreq`);
    }
    if (!xml.includes("<urlset")) error(`${group.id}.xml is not a urlset`);
    if (group.entries.length === 0) error(`${group.id}.xml is empty`);

    const doc = parser.parse(xml) as {
      urlset?: { url?: { loc?: string; lastmod?: string } | Array<{ loc?: string; lastmod?: string }> };
    };
    const urls = asArray(doc.urlset?.url);
    if (urls.length !== group.entries.length) {
      error(`${group.id}.xml has ${urls.length} URLs, expected ${group.entries.length}`);
    }

    for (const url of urls) {
      if (!url.loc?.startsWith("https://www.ebikequest.com")) {
        error(`Child sitemap URL is not canonical: ${url.loc}`);
      }
      if (url.loc?.includes("?") || /amazon\.|amzn\.to/i.test(url.loc ?? "")) {
        error(`Child sitemap URL is not a clean canonical path: ${url.loc}`);
      }
    }

    for (const entry of group.entries) {
      const expected = resolveLastMod(entry);
      const node = urls.find((url) => url.loc === canonicalLoc(entry.path));
      if (!node) {
        error(`${group.id}.xml missing ${entry.path}`);
        continue;
      }
      if (!expected && node.lastmod) {
        error(`Fabricated lastmod on ${entry.path}: ${node.lastmod}`);
      }
      if (expected && node.lastmod !== expected) {
        error(`lastmod mismatch on ${entry.path}: ${node.lastmod} !== ${expected}`);
      }
    }
  }

  for (const section of pageData.sections) {
    const sectionEntries = [
      ...(section.entries ?? []),
      ...(section.subsections?.flatMap((subsection) => subsection.entries) ?? []),
    ];

    if (sectionEntries.length === 0) {
      error(`Empty sitemap section: ${section.id}`);
    }

    for (const entry of sectionEntries) {
      if (!paths.has(entry.path)) {
        error(`Section ${section.id} references unknown path: ${entry.path}`);
      }
    }
  }

  const sectionPaths = new Set(
    pageData.sections.flatMap((section) => [
      ...(section.entries ?? []).map((entry) => entry.path),
      ...(section.subsections?.flatMap((subsection) => subsection.entries.map((entry) => entry.path)) ??
        []),
    ]),
  );

  for (const entry of entries) {
    if (entry.id === "static-sitemap") continue;
    if (!sectionPaths.has(entry.path)) {
      warn(`Sitemap entry not surfaced in any section: ${entry.path}`);
    }
  }

  const featuredCount = pageData.featuredEntries.length;
  if (featuredCount === 0) warn("No featured sitemap entries configured");

  const recentCount = pageData.recentEntries.length;
  if (recentCount === 0) warn("No recent sitemap entries available");

  console.log(
    `Validated ${entries.length} indexable sitemap entries across ${groups.length} child sitemaps and ${pageData.sections.length} HTML sections.`,
  );

  if (hasErrors) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
