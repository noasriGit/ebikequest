import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import {
  footerLegalNav,
  footerResearchNav,
  footerRideNav,
  footerTrustNav,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getPublicJurisdictions } from "@/lib/content";

function FooterColumn({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={label}>
      <h2 className="text-meta text-text-muted">{label}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-text-primary hover:underline hover:decoration-brand-accent">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export async function SiteFooter() {
  const jurisdictions = await getPublicJurisdictions();

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)] bg-surface-base">
      <Container className="pt-16 md:pt-24">
        <div className="grid gap-12 border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-meta text-text-muted">Research</p>
            <p className="mt-4 max-w-xl font-reading text-2xl leading-snug text-text-primary md:text-3xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-md text-body-sm text-text-secondary">{siteConfig.description}</p>
            <p className="mt-4 text-body-sm">
              <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                {siteConfig.helpEmail}
              </a>
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <h2 className="text-meta text-text-primary">Research notes</h2>
            <p className="mt-3 text-body-sm text-text-secondary">
              Occasional notes when a law, trail policy, or model record changes. No selling of the list.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn label="Research" items={footerResearchNav} />
          <FooterColumn label="Ride" items={footerRideNav} />
          <FooterColumn label="Trust" items={footerTrustNav} />
          <div>
            <h2 className="text-meta text-text-muted">Trail coverage</h2>
            <ul className="mt-4 space-y-4">
              {jurisdictions.map((jurisdiction) => (
                <li key={jurisdiction.slug} className="text-sm">
                  <span className="text-text-primary">{jurisdiction.name}</span>
                  <span className="mt-1 flex gap-4">
                    <Link
                      href={`/trails/${jurisdiction.slug}`}
                      className="text-text-secondary underline decoration-brand-accent"
                      aria-label={`${jurisdiction.name} trails`}
                    >
                      Trails
                    </Link>
                    <Link
                      href={`/laws/${jurisdiction.slug}`}
                      className="text-text-secondary underline decoration-brand-accent"
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

        <p className="font-display text-[clamp(4.5rem,18vw,13rem)] uppercase leading-[0.78] tracking-[-0.04em] text-text-primary">
          eBikeQuest
        </p>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] py-8">
          <p className="font-display text-4xl uppercase leading-none text-text-primary md:text-6xl">Ride informed.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-meta text-text-muted">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            {footerLegalNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-meta text-text-muted hover:text-text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
