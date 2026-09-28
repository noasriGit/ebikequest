import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ClassReferenceTable } from "@/components/research/ClassReferenceTable";
import { JsonLd } from "@/components/seo/JsonLd";
import { safetyPage } from "@/content/research/safety";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = buildPageMetadata({
  title: safetyPage.title,
  description: safetyPage.description,
  path: "/safety",
});

export default function SafetyPage() {
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
        <article className="prose-editorial">
          {safetyPage.sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {"listItems" in section && section.listItems ? (
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
            </section>
          ))}
          <h2 id="further-reading">Further reading</h2>
          <ul>
            {safetyPage.furtherReading.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  );
}
