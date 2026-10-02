import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { SectionSources } from "@/components/research/SectionSources";
import { SourceList } from "@/components/research/SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { EDITORIAL_TEAM, withReviewDate } from "@/config/authors";
import { getBuyingGuideDiscoveryLinks } from "@/lib/commerce/relationships";
import { getBuyingGuide, getBuyingGuides } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  const guides = await getBuyingGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = await getBuyingGuide(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.seo?.title ?? guide.title,
    description: guide.description,
    path: `/buying-guides/${guide.slug}`,
    noIndex: Boolean(guide.seo?.noIndex),
    follow: true,
    type: "article",
  });
}

export default async function BuyingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = await getBuyingGuide(slug);
  if (!guide) notFound();

  const links = await getBuyingGuideDiscoveryLinks(guide);
  const path = `/buying-guides/${guide.slug}`;

  return (
    <>
      <JsonLd
        data={[
          buildArticleSchema({
            title: guide.seo?.title ?? guide.title,
            description: guide.description,
            path,
            publishedAt: guide.publishedAt ?? guide.lastVerifiedAt ?? guide.updatedAt ?? "",
            updatedAt: guide.lastVerifiedAt ?? guide.updatedAt ?? guide.publishedAt ?? "",
            author: EDITORIAL_TEAM,
            reviewedBy: withReviewDate(guide.lastVerifiedAt ?? guide.updatedAt ?? guide.publishedAt ?? ""),
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Buying Guides", path: "/buying-guides" },
            { name: guide.title, path },
          ]),
        ]}
      />
      <PageHero
        kicker="Buying guide"
        title={guide.title}
        description={guide.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Buying Guides", href: "/buying-guides" },
          { label: guide.title },
        ]}
      />
      <Container className="py-10 md:py-14">
        <p className="text-body-sm text-text-secondary">
          {guide.publishedAt ? `First published ${guide.publishedAt}. ` : ""}
          Hands-on tested: {guide.handsOnTested ? "Yes" : "No"}.
          {guide.lastVerifiedAt ? ` Last verified ${guide.lastVerifiedAt}.` : ""}
        </p>
        {guide.decision ? <p className="mt-4 max-w-3xl text-body-md text-text-primary">{guide.decision}</p> : null}
        <article className="prose-editorial mt-8">
          {(guide.sections ?? []).map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <SectionSources sourceIds={section.sourceIds} sources={guide.sources ?? []} />
            </section>
          ))}
        </article>
        {guide.productClaims?.length ? (
          <section className="mt-10" aria-labelledby="product-claims">
            <h2 id="product-claims" className="text-heading-md text-text-primary">
              Sourced product notes
            </h2>
            <ul className="mt-4 space-y-3 text-body-sm text-text-secondary">
              {guide.productClaims.map((claim) => {
                const source = guide.sources?.find((entry) => entry.id === claim.sourceId);
                return (
                  <li key={claim.id}>
                    {claim.statement}{" "}
                    {source ? (
                      <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}
        <SourceList sources={guide.sources ?? []} heading="Guide sources" headingId="guide-sources" />
        <DiscoveryLinks
          title="Related research"
          intro="Models, brands, and rider guides this piece actually depends on."
          links={links}
        />
      </Container>
    </>
  );
}
