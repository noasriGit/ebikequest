import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ClassReferenceTable } from "@/components/research/ClassReferenceTable";
import { SourceList } from "@/components/research/SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { SafetyNotices } from "@/components/research/SafetyNotices";
import { safetyPage } from "@/content/research/safety";
import { getBrands } from "@/lib/content/commerce";
import { brandResearchSources } from "@/lib/commerce/publish";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = buildPageMetadata({
  title: safetyPage.title,
  description: safetyPage.description,
  path: "/safety",
});

export default async function SafetyPage() {
  const agencyBrands = (await getBrands()).filter((brand) =>
    (brand.safetyNotices ?? []).some((notice) => notice.agency || notice.severity === "stop-use"),
  );

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: safetyPage.title,
            description: safetyPage.description,
            url: `${siteConfig.url}/safety`,
            isPartOf: {
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
            },
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Safety", path: "/safety" },
          ]),
        ]}
      />
      <PageHero
        kicker="Safety"
        title={safetyPage.title}
        description={safetyPage.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Safety" },
        ]}
      />
      <Container className="py-10 md:py-14">
        {agencyBrands.length ? (
          <section aria-labelledby="regulator-notices">
            <h2 id="regulator-notices" className="text-heading-md text-text-primary">
              Current regulator notices
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">
              Each entry summarizes an agency notice and links to the primary source. A search that returned no notice is not listed here, and it is not a finding that a product is safe.
            </p>
            {agencyBrands.map((brand) => (
              <div key={brand.id}>
                <p className="mt-6 text-body-sm">
                  <Link href={`/brands/${brand.slug}`} className="link-editorial">
                    {brand.name} safety guide
                  </Link>
                </p>
                <SafetyNotices
                  notices={(brand.safetyNotices ?? []).filter((notice) => notice.agency || notice.severity === "stop-use")}
                  sources={brandResearchSources(brand)}
                  heading={brand.name}
                  headingId={`safety-${brand.slug}`}
                />
              </div>
            ))}
          </section>
        ) : null}
        <p className="mt-8 text-body-sm text-text-secondary">Last verified {safetyPage.lastVerifiedAt}.</p>
        <article className="prose-editorial mt-8">
          {safetyPage.sections.map((section) => {
            const sectionSources = safetyPage.sources.filter((source) => section.sourceIds?.includes(source.id));
            return (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.listItems ? (
                <ul>
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.id === "three-class" ? (
                <div className="not-prose mt-6">
                  <ClassReferenceTable />
                </div>
              ) : null}
              {sectionSources.length ? (
                <p>
                  Sources:{" "}
                  {sectionSources.map((source, index) => (
                    <span key={source.id}>
                      {index > 0 ? "; " : ""}
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                    </span>
                  ))}
                  .
                </p>
              ) : null}
            </section>
            );
          })}
          <h2 id="further-reading">Further reading</h2>
          <ul>
            {safetyPage.furtherReading.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </article>
        <SourceList sources={safetyPage.sources} heading="Sources checked" headingId="safety-sources" />
      </Container>
    </>
  );
}
