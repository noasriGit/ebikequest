import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { HubIntro } from "@/components/hubs/HubIntro";
import {
  LawComparisonMatrix,
  LawMethodologyBanner,
  LegalDisclaimer,
  NationalLawFaq,
} from "@/components/laws/LawComponents";
import { getHubImage } from "@/config/images";
import { getHub, getNationalLawHub } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLawDatasetSchema,
} from "@/lib/seo/structured-data";
import { EntityMeta } from "@/components/content/EntityMeta";

export async function generateMetadata() {
  const hub = await getHub("laws");
  if (!hub) return {};
  return buildPageMetadata({
    title: hub.title,
    description: hub.description,
    path: hub.path,
  });
}

export default async function LawsHubPage() {
  const hub = await getHub("laws");
  const lawHub = await getNationalLawHub();

  return (
    <>
      <PageHero
        variant="laws"
        title={hub?.title ?? lawHub.title}
        description={hub?.description ?? lawHub.description}
        kicker={hub?.kicker ?? "Regulations"}
        align="split"
        image={getHubImage("laws")}
        imageAlt="Mid-Atlantic trail and road cycling"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Laws" }]}
      />
      <JsonLd
        data={[
          buildLawDatasetSchema({
            title: lawHub.title,
            description: lawHub.description,
            path: "/laws",
            lastUpdated: lawHub.lastUpdated,
          }),
          buildFaqSchema(lawHub.faq),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Laws", path: "/laws" },
          ]),
        ]}
      />
      <Container className="space-y-10 py-10">
        {hub?.intro.length ? <HubIntro paragraphs={hub.intro} /> : null}
        <EntityMeta
          author={lawHub.author}
          reviewedBy={lawHub.reviewedBy}
          publishedAt={lawHub.lastUpdated}
          updatedAt={lawHub.lastUpdated}
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
            <LawComparisonMatrix rows={lawHub.comparisonMatrix} />
          </div>
        </section>
        <LawMethodologyBanner methodology={lawHub.methodology} />
        <section>
          <p className="text-kicker mb-4">FAQ</p>
          <h2 className="text-heading-lg text-text-primary">Frequently asked questions</h2>
          <div className="mt-6">
            <NationalLawFaq faq={lawHub.faq} />
          </div>
        </section>
      </Container>
    </>
  );
}
