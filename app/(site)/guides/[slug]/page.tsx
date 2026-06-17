import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { EntityMeta } from "@/components/content/EntityMeta";
import {
  GuideCard,
  GuideSectionRenderer,
  GuideToc,
} from "@/components/guides/GuideCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getGuideImage } from "@/config/images";
import { getGuide, getGuideStaticParams, getGuides } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo/structured-data";

export async function generateStaticParams() {
  return getGuideStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${slug}`,
    type: "article",
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${slug}`;
  const related = guide.relatedGuides?.length
    ? (await getGuides()).filter((g) => guide.relatedGuides?.includes(g.slug))
    : [];

  return (
    <>
      <PageHero
        variant="guides"
        title={guide.title}
        description={guide.description}
        kicker="Guide"
        align="split"
        image={getGuideImage(guide.category)}
        imageAlt={guide.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.title },
        ]}
      />
      <JsonLd
        data={[
          buildArticleSchema({
            title: guide.title,
            description: guide.description,
            path,
            publishedAt: guide.publishedAt,
            updatedAt: guide.updatedAt,
            author: guide.author,
            reviewedBy: guide.reviewedBy,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path },
          ]),
          ...(guide.faq?.length ? [buildFaqSchema(guide.faq)] : []),
        ]}
      />
      <Container className="py-10">
        <EntityMeta
          author={guide.author}
          reviewedBy={guide.reviewedBy}
          publishedAt={guide.publishedAt}
          updatedAt={guide.updatedAt}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
          <GuideToc sections={guide.sections} />
          <div>
            <GuideSectionRenderer sections={guide.sections} />
            {guide.faq?.length ? (
              <section className="mt-12">
                <h2 className="text-heading-editorial">FAQ</h2>
                <div className="mt-4">
                  <FAQAccordion items={guide.faq} />
                </div>
              </section>
            ) : null}
          </div>
        </div>
        {related.length ? (
          <section className="mt-14 border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pt-10">
            <p className="text-kicker mb-4">Related</p>
            <h2 className="text-heading-md text-text-primary">Related guides</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((g) => (
                <GuideCard key={g.id} guide={g} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
}
