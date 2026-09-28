import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBuyingGuideDiscoveryLinks } from "@/lib/commerce/relationships";
import { getBuyingGuide, getBuyingGuides } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

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
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Buying Guides", path: "/buying-guides" },
          { name: guide.title, path },
        ])}
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
          Hands-on tested: {guide.handsOnTested ? "Yes" : "No"}.
        </p>
        <article className="prose-editorial mt-8">
          {(guide.sections ?? []).map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
        <DiscoveryLinks
          title="Related research"
          intro="Models, brands, and rider guides this piece actually depends on."
          links={links}
        />
      </Container>
    </>
  );
}
