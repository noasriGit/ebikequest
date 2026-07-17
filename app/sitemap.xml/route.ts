import { NextResponse } from "next/server";
import { buildSitemapEntries } from "@/lib/sitemap";
import { buildXmlSitemap } from "@/lib/sitemap/xml";

export async function GET() {
  const entries = await buildSitemapEntries();
  const xml = buildXmlSitemap(entries);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
