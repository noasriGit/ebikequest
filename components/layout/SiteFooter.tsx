import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  footerExploreNav,
  footerLegalNav,
  footerTrustNav,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getPublicJurisdictions } from "@/lib/content";

export async function SiteFooter() {
  const jurisdictions = await getPublicJurisdictions();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-zinc-900">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-zinc-600">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-zinc-500">{siteConfig.description}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Explore
            </h2>
            <ul className="mt-3 space-y-2">
              {footerExploreNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-600 hover:text-emerald-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Trust
            </h2>
            <ul className="mt-3 space-y-2">
              {footerTrustNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-600 hover:text-emerald-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Coverage
            </h2>
            <ul className="mt-3 space-y-2">
              {jurisdictions.map((j) => (
                <li key={j.slug}>
                  <Link
                    href={`/trails/${j.slug}`}
                    className="text-sm text-zinc-600 hover:text-emerald-700"
                  >
                    {j.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-zinc-500 hover:text-emerald-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
