import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { EntityMeta } from "@/components/content/EntityMeta";
import {
  ClassRulesGrid,
  EditorialStandardsCallout,
  JurisdictionLawFaq,
  LegalDisclaimer,
  SourceCitationList,
} from "@/components/laws/LawComponents";
import { getJurisdictionImage } from "@/config/images";
import {
  assertPublicJurisdiction,
  getJurisdictionName,
  getLaw,
  getLawStaticParams,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo/structured-data";
import type { JurisdictionSlug } from "@/types/jurisdiction";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getLawStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}) {
  const { jurisdiction } = await params;
  if (!assertPublicJurisdiction(jurisdiction)) return {};
  const name = getJurisdictionName(jurisdiction);
  return buildPageMetadata({
    title: `${name} E-Bike Laws, Classes, Trails & Rules`,
    description: `Comprehensive ${name} e-bike law guide with Class 1, 2, and 3 rules, trail access, and FAQ.`,
    path: `/laws/${jurisdiction}`,
  });
}

export default async function JurisdictionLawPage({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}) {
  const { jurisdiction } = await params;
  if (!assertPublicJurisdiction(jurisdiction)) notFound();

  const law = await getLaw(jurisdiction);
  if (!law) notFound();

  const name = getJurisdictionName(jurisdiction);
  const path = `/laws/${jurisdiction}`;
  const slug = jurisdiction as JurisdictionSlug;

  return (
    <>
      <PageHero
        variant="laws"
        title={law.title}
        description={law.summary}
        kicker={name}
        align="split"
        image={getJurisdictionImage(slug)}
        imageAlt={`${name} e-bike laws`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Laws", href: "/laws" },
          { label: name },
        ]}
      />
      <JsonLd
        data={[
          buildArticleSchema({
            title: law.title,
            description: law.description,
            path,
            publishedAt: law.publishedAt,
            updatedAt: law.updatedAt,
            author: law.author,
            reviewedBy: law.reviewedBy,
          }),
          buildFaqSchema(law.faq),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Laws", path: "/laws" },
            { name: name, path },
          ]),
        ]}
      />
      <Container className="space-y-10 py-10">
        <EntityMeta
          author={law.author}
          reviewedBy={law.reviewedBy}
          publishedAt={law.publishedAt}
          updatedAt={law.updatedAt}
          lastVerified={law.lastVerified}
        />
        <LegalDisclaimer />
        <section className="prose-editorial max-w-none">
          <h2 className="text-heading-editorial">Summary</h2>
          <p className="mt-4">{law.summary}</p>
        </section>
        <section>
          <h2 className="text-heading-editorial">Classifications</h2>
          <div className="mt-6">
            <ClassRulesGrid classifications={law.classifications} />
          </div>
        </section>
        <section className="prose-editorial max-w-none">
          <h2 className="text-heading-editorial">Trail access</h2>
          <p className="mt-4">{law.trailAccess}</p>
        </section>
        <section>
          <h2 className="text-heading-editorial">Requirements</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {law.helmetRequirements ? (
              <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-4 shadow-[var(--shadow-xs)]">
                <dt className="font-medium text-text-primary">Helmets</dt>
                <dd className="mt-1 text-text-secondary">{law.helmetRequirements}</dd>
              </div>
            ) : null}
            {law.ageRequirements ? (
              <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-4 shadow-[var(--shadow-xs)]">
                <dt className="font-medium text-text-primary">Age</dt>
                <dd className="mt-1 text-text-secondary">{law.ageRequirements}</dd>
              </div>
            ) : null}
            <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-4 shadow-[var(--shadow-xs)]">
              <dt className="font-medium text-text-primary">Registration</dt>
              <dd className="mt-1 text-text-secondary">
                {law.registrationRequired ? "Required" : "Not required"}
              </dd>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-4 shadow-[var(--shadow-xs)]">
              <dt className="font-medium text-text-primary">Insurance</dt>
              <dd className="mt-1 text-text-secondary">
                {law.insuranceRequired ? "Required" : "Not required"}
              </dd>
            </div>
          </dl>
        </section>
        <section>
          <h2 className="text-heading-editorial">FAQ</h2>
          <div className="mt-6">
            <JurisdictionLawFaq faq={law.faq} />
          </div>
        </section>
        <SourceCitationList sources={law.sources} />
        <EditorialStandardsCallout />
      </Container>
    </>
  );
}
