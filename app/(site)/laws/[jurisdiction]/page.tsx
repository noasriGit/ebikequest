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

  return (
    <>
      <PageHero
        title={law.title}
        description={law.summary}
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
      <Container className="py-10 space-y-10">
        <EntityMeta
          author={law.author}
          reviewedBy={law.reviewedBy}
          publishedAt={law.publishedAt}
          updatedAt={law.updatedAt}
          lastVerified={law.lastVerified}
        />
        <LegalDisclaimer />
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">Summary</h2>
          <p className="mt-4 text-zinc-600">{law.summary}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">Classifications</h2>
          <div className="mt-6">
            <ClassRulesGrid classifications={law.classifications} />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">Trail access</h2>
          <p className="mt-4 text-zinc-600">{law.trailAccess}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">Requirements</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {law.helmetRequirements ? (
              <div className="rounded-xl border border-zinc-200 p-4">
                <dt className="font-medium text-zinc-900">Helmets</dt>
                <dd className="mt-1 text-zinc-600">{law.helmetRequirements}</dd>
              </div>
            ) : null}
            {law.ageRequirements ? (
              <div className="rounded-xl border border-zinc-200 p-4">
                <dt className="font-medium text-zinc-900">Age</dt>
                <dd className="mt-1 text-zinc-600">{law.ageRequirements}</dd>
              </div>
            ) : null}
            <div className="rounded-xl border border-zinc-200 p-4">
              <dt className="font-medium text-zinc-900">Registration</dt>
              <dd className="mt-1 text-zinc-600">
                {law.registrationRequired ? "Required" : "Not required"}
              </dd>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <dt className="font-medium text-zinc-900">Insurance</dt>
              <dd className="mt-1 text-zinc-600">
                {law.insuranceRequired ? "Required" : "Not required"}
              </dd>
            </div>
          </dl>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">FAQ</h2>
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
