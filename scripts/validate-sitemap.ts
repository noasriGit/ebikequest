import { allTrails } from "../content/trails";
import { guides } from "../content/guides";
import { jurisdictionLaws } from "../content/laws/jurisdictions";
import { buildSitemapEntries, buildSitemapPageData } from "../lib/sitemap";

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

async function main() {
  const [entries, pageData] = await Promise.all([buildSitemapEntries(), buildSitemapPageData()]);

  const ids = new Set<string>();
  const paths = new Set<string>();

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
  }

  const draftTrails = allTrails.filter((trail) => trail.status !== "published" || trail.seo?.noIndex);
  const draftGuides = guides.filter((guide) => guide.status !== "published" || guide.seo?.noIndex);
  const draftLaws = jurisdictionLaws.filter((law) => law.status !== "published" || law.seo?.noIndex);

  for (const trail of draftTrails) {
    const path = `/trails/${trail.jurisdiction}/${trail.slug}`;
    if (paths.has(path)) {
      error(`Draft or noindex trail leaked into sitemap: ${path}`);
    }
  }

  for (const guide of draftGuides) {
    const path = `/guides/${guide.slug}`;
    if (paths.has(path)) {
      error(`Draft or noindex guide leaked into sitemap: ${path}`);
    }
  }

  for (const law of draftLaws) {
    const path = `/laws/${law.jurisdiction}`;
    if (paths.has(path)) {
      error(`Draft or noindex law leaked into sitemap: ${path}`);
    }
  }

  const excludedPatterns = ["/api/", "/404", "/_next/"];
  for (const path of paths) {
    if (excludedPatterns.some((pattern) => path.includes(pattern))) {
      error(`Excluded route pattern leaked into sitemap: ${path}`);
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
  if (featuredCount === 0) {
    warn("No featured sitemap entries configured");
  }

  const recentCount = pageData.recentEntries.length;
  if (recentCount === 0) {
    warn("No recent sitemap entries available");
  }

  console.log(`Validated ${entries.length} indexable sitemap entries across ${pageData.sections.length} sections.`);

  if (hasErrors) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
