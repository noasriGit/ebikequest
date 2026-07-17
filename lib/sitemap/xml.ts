import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import type { SitemapEntry } from "./types";

export function pathPriority(path: string): number {
  if (path === "/") return 1;
  if (path === "/laws") return 0.95;
  if (path === "/trails") return 0.9;
  if (path.startsWith("/laws/")) return 0.9;
  if (path.startsWith("/trails/") && path.split("/").length === 3) return 0.85;
  if (path === "/guides") return 0.8;
  if (path.startsWith("/trails/")) return 0.8;
  if (path === "/editorial-standards") return 0.7;
  if (path.startsWith("/guides/")) return 0.7;
  if (path === "/sitemap") return 0.5;
  if (path === "/about") return 0.5;
  if (path === "/accessibility" || path === "/affiliate-disclosure" || path === "/suggest-trail") {
    return 0.4;
  }
  if (path === "/privacy" || path === "/terms" || path === "/image-credits") return 0.3;
  return 0.5;
}

export function pathChangeFrequency(
  path: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/" || path === "/trails" || path === "/guides" || path === "/laws") {
    return "weekly";
  }
  if (path.startsWith("/trails/") || path.startsWith("/guides/") || path.startsWith("/laws/")) {
    return path.split("/").length > 3 ? "monthly" : "weekly";
  }
  if (path === "/privacy" || path === "/terms") return "yearly";
  return "monthly";
}

export function pathLastModified(entry: {
  path: string;
  updatedAt?: string;
  publishedAt?: string;
}): Date {
  const date = entry.updatedAt ?? entry.publishedAt;
  return date ? new Date(`${date}T00:00:00.000Z`) : new Date();
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildXmlSitemap(entries: SitemapEntry[]): string {
  const base = siteConfig.url.replace(/\/$/, "");

  const urlNodes = entries
    .map((entry) => {
      const loc = `${base}${entry.path === "/" ? "/" : entry.path}`;
      const lastmod = pathLastModified(entry).toISOString();
      const changefreq = pathChangeFrequency(entry.path);
      const priority = pathPriority(entry.path).toFixed(1);

      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>\n`;
}
