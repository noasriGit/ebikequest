import { siteConfig } from "@/config/site";
import type { SitemapEntry, SitemapGroup } from "./types";

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})/;

export const SITEMAP_GROUP_ORDER: SitemapGroup[] = [
  "core",
  "brands",
  "ebikes",
  "buying-guides",
  "guides",
  "trails",
  "laws",
  "compare",
];

export function assignSitemapGroup(path: string): SitemapGroup {
  if (path === "/brands" || path.startsWith("/brands/")) return "brands";
  if (path === "/ebikes" || path.startsWith("/ebikes/")) return "ebikes";
  if (path === "/buying-guides" || path.startsWith("/buying-guides/")) return "buying-guides";
  if (path === "/compare" || path.startsWith("/compare/")) return "compare";
  if (path === "/guides" || path.startsWith("/guides/")) return "guides";
  if (path === "/trails" || path.startsWith("/trails/")) return "trails";
  if (path === "/laws" || path.startsWith("/laws/")) return "laws";
  return "core";
}

/**
 * lastmod is emitted only for a real content date. Missing dates stay omitted.
 * The current clock is never used as a fallback.
 */
export function resolveLastMod(entry: {
  updatedAt?: string;
  publishedAt?: string;
}): string | undefined {
  const raw = entry.updatedAt ?? entry.publishedAt;
  if (!raw) return undefined;

  const match = DATE_RE.exec(raw.trim());
  if (!match) return undefined;

  const [, year, month, day] = match;
  const iso = `${year}-${month}-${day}T00:00:00.000Z`;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return undefined;
  if (date.toISOString().slice(0, 10) !== `${year}-${month}-${day}`) return undefined;
  return date.toISOString();
}

export function canonicalLoc(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${path === "/" ? "/" : path}`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildUrlSetXml(entries: SitemapEntry[]): string {
  const urlNodes = entries
    .map((entry) => {
      const lines = ["  <url>", `    <loc>${escapeXml(canonicalLoc(entry.path))}</loc>`];
      const lastmod = resolveLastMod(entry);
      if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
      lines.push("  </url>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>\n`;
}

export interface SitemapGroupDocument {
  id: SitemapGroup;
  entries: SitemapEntry[];
}

function latestLastMod(entries: SitemapEntry[]): string | undefined {
  const dates = entries
    .map((entry) => resolveLastMod(entry))
    .filter((value): value is string => Boolean(value))
    .sort();
  return dates.at(-1);
}

export function buildSitemapIndexXml(groups: SitemapGroupDocument[]): string {
  const nodes = groups
    .map((group) => {
      const lines = ["  <sitemap>", `    <loc>${escapeXml(`${canonicalLoc(`/sitemaps/${group.id}.xml`)}`)}</loc>`];
      const lastmod = latestLastMod(group.entries);
      if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
      lines.push("  </sitemap>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${nodes}\n</sitemapindex>\n`;
}

export function groupSitemapEntries(entries: SitemapEntry[]): SitemapGroupDocument[] {
  const buckets = new Map<SitemapGroup, SitemapEntry[]>();

  for (const entry of entries) {
    if (!entry.indexable) continue;
    const group = assignSitemapGroup(entry.path);
    const list = buckets.get(group) ?? [];
    list.push(entry);
    buckets.set(group, list);
  }

  return SITEMAP_GROUP_ORDER.filter((id) => (buckets.get(id)?.length ?? 0) > 0).map((id) => ({
    id,
    entries: buckets.get(id) ?? [],
  }));
}
