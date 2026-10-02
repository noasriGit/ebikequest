import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { getGuides, GUIDE_CATEGORY_LABELS } from "@/lib/content";
import { getBuyingGuides, isBuyingGuideHubIndexable } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const indexable = await isBuyingGuideHubIndexable();
  return buildPageMetadata({
    title: "E-Bike Buying Guides",
    description:
      "Buying guides that connect an e-bike purchase to class, state law, and trail access. Existing rider guides stay at their original URLs.",
    path: "/buying-guides",
    noIndex: !indexable,
    follow: true,
  });
}

export default async function BuyingGuidesPage() {
  const [commerceGuides, riderGuides] = await Promise.all([
    getBuyingGuides(),
    getGuides({ category: "buying-guide" }),
  ]);

  return (
    <>
      <PageHero
        kicker="Buying guides"
        title="Buying guides"
        description="A buying guide belongs here when it can point at sourced models or brands. The rider reference already published stays on its original URL."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Buying Guides" },
        ]}
      />
      <Container className="py-10 md:py-14">
        {commerceGuides.length > 0 ? (
          <section aria-labelledby="model-buying-guides">
            <h2 id="model-buying-guides" className="text-heading-md text-text-primary">
              Model-aware guides
            </h2>
            <ul className="mt-4 max-w-3xl border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
              {commerceGuides.map((guide) => (
                <li key={guide.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
                  <Link href={`/buying-guides/${guide.slug}`} className="block py-4 font-medium text-text-primary hover:text-brand">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="max-w-2xl text-body-md text-text-secondary">
            No model-specific buying guides are public yet. They will be added when a guide can say something a class page does not already say.
          </p>
        )}

        <section className="mt-12" aria-labelledby="rider-buying-guides">
          <h2 id="rider-buying-guides" className="text-heading-md text-text-primary">
            Rider reference
          </h2>
          <p className="mt-2 max-w-2xl text-body-sm text-text-secondary">
            These articles already live under Guides. This list points at them. It does not republish them.
          </p>
          <ul className="mt-4 max-w-3xl border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
            {riderGuides.map((guide) => (
              <li key={guide.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
                <Link href={`/guides/${guide.slug}`} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-display text-3xl uppercase leading-none text-text-primary">{guide.title}</span>
                  <span className="text-meta text-text-muted">{GUIDE_CATEGORY_LABELS[guide.category]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
