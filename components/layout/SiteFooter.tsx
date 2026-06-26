import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { LogoMark } from "@/components/navigation/LogoMark";
import {
  footerExploreNav,
  footerLegalNav,
  footerTrustNav,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getPublicJurisdictions } from "@/lib/content";

export async function SiteFooter() {
  const jurisdictions = await getPublicJurisdictions();
  const month = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    new Date(),
  );

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] bg-surface-sunken">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark size={28} />
              <span className="font-display text-xl text-text-primary">{siteConfig.name}</span>
            </div>
            <p className="mt-3 max-w-md text-body-sm text-text-secondary">{siteConfig.description}</p>
            <p className="mt-4 text-body-sm text-text-muted">
              Content last reviewed {month}. Help:{" "}
              <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                {siteConfig.helpEmail}
              </a>
            </p>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-6 shadow-[var(--shadow-xs)]">
            <p className="text-kicker mb-4">Stay updated</p>
            <p className="text-body-sm text-text-secondary">
              Trail and law updates for Virginia, Maryland, and DC.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <hr className="editorial-rule mx-auto my-12 w-16" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-label text-text-primary">Explore</h2>
            <ul className="mt-3 space-y-2">
              {footerExploreNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-label text-text-primary">Trust</h2>
            <ul className="mt-3 space-y-2">
              {footerTrustNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-label text-text-primary">Coverage</h2>
            <ul className="mt-3 space-y-3">
              {jurisdictions.map((j) => (
                <li key={j.slug} className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <span className="min-w-[120px] font-medium text-text-primary">{j.name}</span>
                  <Link
                    href={`/trails/${j.slug}`}
                    className="text-text-secondary hover:text-brand"
                    aria-label={`${j.name} trails`}
                  >
                    Trails
                  </Link>
                  <Link
                    href={`/laws/${j.slug}`}
                    className="text-text-secondary hover:text-brand"
                    aria-label={`${j.name} e-bike laws`}
                  >
                    Laws
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pt-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-text-muted hover:text-brand">
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
