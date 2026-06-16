import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import {
  LawComparisonMatrix,
  LawMethodologyBanner,
  LegalDisclaimer,
  NationalLawFaq,
} from "@/components/laws/LawComponents";
import { getNationalLawHub } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLawDatasetSchema,
} from "@/lib/seo/structured-data";
import { EntityMeta } from "@/components/content/EntityMeta";

export const metadata = buildPageMetadata({
  title: "E-Bike Laws by State (2026 Guide)",
  description:
    "Authoritative comparison of e-bike laws in Virginia, Maryland, and Washington DC. Class rules, helmets, registration, and trail access.",
  path: "/laws",
});

export default async function LawsHubPage() {
  const hub = await getNationalLawHub();

  return (
    <>
      <PageHero
        title={hub.title}
        description={hub.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Laws" }]}
      />
      <JsonLd
        data={[
          buildLawDatasetSchema({
            title: hub.title,
            description: hub.description,
            path: "/laws",
            lastUpdated: hub.lastUpdated,
          }),
          buildFaqSchema(hub.faq),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Laws", path: "/laws" },
          ]),
        ]}
      />
      <Container className="py-10 space-y-10">
        <EntityMeta
          author={hub.author}
          reviewedBy={hub.reviewedBy}
          publishedAt={hub.lastUpdated}
          updatedAt={hub.lastUpdated}
        />
        <LegalDisclaimer />
        <section>
          <h2 className="text-2xl font-bold text-zinc-900">State-by-state comparison</h2>
          <p className="mt-2 text-zinc-600">
            Compare Class 1, 2, and 3 rules, helmet requirements, registration, and trail access
            across our launch jurisdictions.
          </p>
          <div className="mt-6">
            <LawComparisonMatrix rows={hub.comparisonMatrix} />
          </div>
        </section>
        <LawMethodologyBanner methodology={hub.methodology} />
        <section>
          <h2 className="text-2xl font-bold text-zinc-900">Frequently asked questions</h2>
          <div className="mt-6">
            <NationalLawFaq faq={hub.faq} />
          </div>
        </section>
      </Container>
    </>
  );
}
