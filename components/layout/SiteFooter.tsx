import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { LogoMark } from "@/components/navigation/LogoMark";
import {
  footerLegalNav,
  footerResearchNav,
  footerRideNav,
  footerTrustNav,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getPublicJurisdictions } from "@/lib/content";

export async function SiteFooter() {
  const jurisdictions = await getPublicJurisdictions();

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pb-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark size={28} />
              <span className="font-display text-2xl text-text-primary">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xl font-display text-2xl leading-snug text-text-primary">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-md text-body-sm text-text-secondary">{siteConfig.description}</p>
            <p className="mt-4 text-body-sm text-text-muted">
              <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                {siteConfig.helpEmail}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-label text-text-primary">Research notes</h2>
            <p className="mt-3 text-body-sm text-text-secondary">
              Occasional notes when a law, trail policy, or model record changes. No selling of the list.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Research">
            <h2 className="text-label text-text-primary">Research</h2>
            <ul className="mt-3 space-y-2">
              {footerResearchNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Ride">
            <h2 className="text-label text-text-primary">Ride</h2>
            <ul className="mt-3 space-y-2">
              {footerRideNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Trust">
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
          </nav>
          <div>
            <h2 className="text-label text-text-primary">Trail coverage</h2>
            <ul className="mt-3 space-y-3">
              {jurisdictions.map((jurisdiction) => (
                <li key={jurisdiction.slug} className="text-sm">
                  <span className="font-medium text-text-primary">{jurisdiction.name}</span>
                  <span className="mt-1 flex gap-4">
                    <Link
                      href={`/trails/${jurisdiction.slug}`}
                      className="text-text-secondary hover:text-brand"
                      aria-label={`${jurisdiction.name} trails`}
                    >
                      Trails
                    </Link>
                    <Link
                      href={`/laws/${jurisdiction.slug}`}
                      className="text-text-secondary hover:text-brand"
                      aria-label={`${jurisdiction.name} e-bike laws`}
                    >
                      Laws
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pt-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <ul className="flex flex-wrap gap-4">
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
