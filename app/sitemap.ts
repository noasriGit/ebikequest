import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import {
  getGuideStaticParams,
  getPublicJurisdictions,
  getTrailStaticParams,
} from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/trails`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/laws`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    {
      url: `${base}/editorial-standards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/suggest-trail`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const jurisdictions = await getPublicJurisdictions();
  const jurisdictionPages: MetadataRoute.Sitemap = jurisdictions.flatMap((j) => [
    {
      url: `${base}/trails/${j.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/laws/${j.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]);

  const trailParams = await getTrailStaticParams();
  const trailPages: MetadataRoute.Sitemap = trailParams.map(({ jurisdiction, slug }) => ({
    url: `${base}/trails/${jurisdiction}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guideParams = await getGuideStaticParams();
  const guidePages: MetadataRoute.Sitemap = guideParams.map(({ slug }) => ({
    url: `${base}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...jurisdictionPages, ...trailPages, ...guidePages];
}
