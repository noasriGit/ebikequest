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
        title={guide.title}
        description={guide.description}
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
                <h2 className="text-2xl font-semibold text-zinc-900">FAQ</h2>
                <div className="mt-4">
                  <FAQAccordion items={guide.faq} />
                </div>
              </section>
            ) : null}
          </div>
        </div>
        {related.length ? (
          <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-xl font-semibold text-zinc-900">Related guides</h2>
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
