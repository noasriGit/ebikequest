import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import {
  LawComparisonMatrix,
  LawMethodologyBanner,
  LegalDisclaimer,
  NationalLawFaq,
} from "@/components/laws/LawComponents";
import { getHubImage } from "@/config/images";
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
        variant="laws"
        title={hub.title}
        description={hub.description}
        kicker="Regulations"
        align="split"
        image={getHubImage("laws")}
        imageAlt="Mid-Atlantic trail and road cycling"
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
      <Container className="space-y-10 py-10">
        <EntityMeta
          author={hub.author}
          reviewedBy={hub.reviewedBy}
          publishedAt={hub.lastUpdated}
          updatedAt={hub.lastUpdated}
        />
        <LegalDisclaimer />
        <section>
          <p className="text-kicker mb-4">Comparison</p>
          <h2 className="text-heading-lg text-text-primary">State-by-state comparison</h2>
          <p className="mt-2 text-body-md text-text-secondary">
            Compare Class 1, 2, and 3 rules, helmet requirements, registration, and trail access
            across our launch jurisdictions.
          </p>
          <div className="mt-6">
            <LawComparisonMatrix rows={hub.comparisonMatrix} />
          </div>
        </section>
        <LawMethodologyBanner methodology={hub.methodology} />
        <section>
          <p className="text-kicker mb-4">FAQ</p>
          <h2 className="text-heading-lg text-text-primary">Frequently asked questions</h2>
          <div className="mt-6">
            <NationalLawFaq faq={hub.faq} />
          </div>
        </section>
      </Container>
    </>
  );
}
