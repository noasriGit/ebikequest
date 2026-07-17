import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SitemapSectionBlock } from "@/components/sitemap/SitemapSection";
import { siteConfig } from "@/config/site";
import { buildSitemapPageData } from "@/lib/sitemap";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
} from "@/lib/seo/structured-data";

export const metadata = buildPageMetadata({
  title: "Sitemap",
  description:
    "Browse all public pages on eBikeQuest — trails, guides, e-bike laws, and site policies for Virginia, Maryland, and Washington DC.",
  path: "/sitemap",
});

export default async function SitemapPage() {
  const { sections, entries, totalIndexablePages } = await buildSitemapPageData();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  const itemListItems = entries.map((entry) => ({
    name: entry.title,
    path: entry.path,
  }));

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Sitemap",
            description:
              "Complete index of public pages on eBikeQuest, organized by trails, guides, laws, and policies.",
            url: `${siteConfig.url}/sitemap`,
            isPartOf: {
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            numberOfItems: totalIndexablePages,
          },
          buildBreadcrumbSchema(breadcrumbItems),
          buildItemListSchema(itemListItems),
        ]}
      />

      <PageHero
        title="Sitemap"
        description="A complete index of public pages on eBikeQuest, organized by content type and topic. All links are updated automatically when trails, guides, or laws are added or removed."
        kicker="Site index"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <Container className="py-10 md:py-14">
        <nav aria-label="Sitemap sections" className="mb-10 rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-4 md:p-6">
          <p className="text-kicker mb-3">Jump to section</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#sitemap-${section.id}`} className="link-editorial">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-muted">
            {totalIndexablePages} indexable pages
          </p>
        </nav>

        <div className="space-y-14">
          {sections.map((section) => (
            <SitemapSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </Container>
    </>
  );
}
