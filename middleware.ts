import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { abbreviationToSlug, manualRedirects } from "@/config/redirects";
import { isPublicJurisdiction } from "@/config/jurisdictions";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (manualRedirects[pathname]) {
    const target = manualRedirects[pathname];
    if (target.includes("/trails/") || target.includes("/laws/")) {
      const slug = target.split("/").pop()!;
      if (!isPublicJurisdiction(slug)) {
        return NextResponse.next();
      }
    }
    return NextResponse.redirect(new URL(target, request.url), 301);
  }

  const trailMatch = pathname.match(/^\/trails\/([a-z]{2})$/);
  if (trailMatch) {
    const slug = abbreviationToSlug[trailMatch[1]];
    if (slug && isPublicJurisdiction(slug)) {
      return NextResponse.redirect(new URL(`/trails/${slug}`, request.url), 301);
    }
  }

  const lawMatch = pathname.match(/^\/laws\/([a-z]{2})$/);
  if (lawMatch) {
    const slug = abbreviationToSlug[lawMatch[1]];
    if (slug && isPublicJurisdiction(slug)) {
      return NextResponse.redirect(new URL(`/laws/${slug}`, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/trails/:path*", "/laws/:path*"],
};
