import { NextResponse } from "next/server";
import { buildPublishedSitemapGroups } from "@/lib/sitemap";
import { buildSitemapIndexXml } from "@/lib/sitemap/xml";

export async function GET() {
  const groups = await buildPublishedSitemapGroups();
  const xml = buildSitemapIndexXml(groups);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
