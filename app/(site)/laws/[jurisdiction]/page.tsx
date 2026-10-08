import Link from "next/link";
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
import { getLawDiscoveryLinks } from "@/lib/commerce/relationships";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { JURISDICTIONS } from "@/config/jurisdictions";
import { getJurisdictionImage } from "@/config/images";
import { RouteDraw } from "@/components/motion/RouteDraw";
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
  const law = await getLaw(jurisdiction);
  if (!law) return {};
  const name = getJurisdictionName(jurisdiction);
  return buildPageMetadata({
    title: `${name} E-Bike Laws, Classes, Trails & Rules`,
    description: law.description,
    path: `/laws/${jurisdiction}`,
    ogImage: getJurisdictionImage(jurisdiction as JurisdictionSlug),
    ogImageAlt: `${name} e-bike laws`,
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
  const discoveryLinks = await getLawDiscoveryLinks(law.jurisdiction);

  const name = getJurisdictionName(jurisdiction);
  const path = `/laws/${jurisdiction}`;
  const slug = jurisdiction as JurisdictionSlug;
  const abbreviation = JURISDICTIONS.find((entry) => entry.slug === slug)?.abbreviation ?? name;

  return (
    <>
      <PageHero
        variant="laws"
        title={law.title}
        description={law.summary}
        kicker={name}
        mark={abbreviation}
        align="split"
        image={getJurisdictionImage(slug)}
        imageAlt={`${name} e-bike laws`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Laws", href: "/laws" },
          { label: name },
        ]}
      >
        {jurisdiction === "washington-dc" ? (
          <Link
            href="/guides/riding-ebikes-in-washington-dc"
            className="text-sm font-semibold link-editorial"
          >
            Washington DC e-bike riding tips →
          </Link>
        ) : jurisdiction === "virginia" ? (
          <Link
            href="/guides/riding-ebikes-in-northern-virginia"
            className="text-sm font-semibold link-editorial"
          >
            Northern Virginia e-bike riding guide →
          </Link>
        ) : jurisdiction === "maryland" ? (
          <Link
            href="/guides/riding-ebikes-in-bethesda"
            className="text-sm font-semibold link-editorial"
          >
            Bethesda & Montgomery County riding tips →
          </Link>
        ) : null}
      </PageHero>
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
            imagePath: getJurisdictionImage(slug),
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
          <h2 className="text-heading-editorial">Related regulatory guides</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
            <li>
              <Link href="/guides/where-can-you-ride-an-ebike" className="link-editorial">
                Where e-bikes are allowed to ride
              </Link>
            </li>
            <li>
              <Link href="/guides/do-you-need-a-license-for-an-ebike" className="link-editorial">
                Whether e-bikes need a license
              </Link>
            </li>
            <li>
              <Link href="/guides/are-class-3-ebikes-allowed-on-trails" className="link-editorial">
                Class 3 e-bike trail access
              </Link>
            </li>
            <li>
              <Link href="/guides/can-you-ride-an-ebike-on-the-sidewalk" className="link-editorial">
                E-bike sidewalk rules
              </Link>
            </li>
            <li>
              <Link
                href="/guides/do-ebikes-need-insurance-or-registration"
                className="link-editorial"
              >
                E-bike insurance and registration
              </Link>
            </li>
          </ul>
        </section>
        <section className="prose-editorial max-w-none">
          <h2 className="text-heading-editorial">Summary</h2>
          <p className="mt-4">{law.summary}</p>
        </section>
        <section>
          <h2 className="text-heading-editorial">Classifications</h2>
          <RouteDraw className="mt-4 h-6 w-40 text-brand-accent" />
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
              <div className="border-t border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)] py-4">
                <dt className="text-meta text-text-muted">Helmets</dt>
                <dd className="mt-2 font-reading text-text-secondary">{law.helmetRequirements}</dd>
              </div>
            ) : null}
            {law.ageRequirements ? (
              <div className="border-t border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)] py-4">
                <dt className="text-meta text-text-muted">Age</dt>
                <dd className="mt-1 text-text-secondary">{law.ageRequirements}</dd>
              </div>
            ) : null}
            <div className="border-t border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)] py-4">
              <dt className="text-meta text-text-muted">Registration</dt>
              <dd className="mt-2 font-display text-3xl uppercase text-text-primary">
                {law.registrationRequired ? "Required" : "Not required"}
              </dd>
            </div>
            <div className="border-t border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)] py-4">
              <dt className="text-meta text-text-muted">Insurance</dt>
              <dd className="mt-2 font-display text-3xl uppercase text-text-primary">
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
        <DiscoveryLinks
          title="Buying context"
          intro="Shown only when a buying guide cites this jurisdiction. General product links are not added to law pages."
          links={discoveryLinks}
        />
        <EditorialStandardsCallout />
      </Container>
    </>
  );
}
