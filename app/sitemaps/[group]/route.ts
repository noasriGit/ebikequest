import { NextResponse } from "next/server";
import { buildPublishedSitemapGroups } from "@/lib/sitemap";
import { SITEMAP_GROUP_ORDER, buildUrlSetXml } from "@/lib/sitemap/xml";
import type { SitemapGroup } from "@/lib/sitemap/types";

function isSitemapGroup(value: string): value is SitemapGroup {
  return (SITEMAP_GROUP_ORDER as readonly string[]).includes(value);
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ group: string }> },
) {
  const { group } = await context.params;
  if (!isSitemapGroup(group)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const groups = await buildPublishedSitemapGroups();
  const match = groups.find((entry) => entry.id === group);
  if (!match || match.entries.length === 0) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(buildUrlSetXml(match.entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
