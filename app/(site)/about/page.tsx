import Link from "next/link";
import { ContentImage } from "@/components/content/ContentImage";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PullQuote } from "@/components/editorial/PullQuote";
import { getJurisdictionImage, marketingImages } from "@/config/images";
import { siteConfig } from "@/config/site";
import { getAboutPageContent, getPublicJurisdictions } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const content = await getAboutPageContent();
  return buildPageMetadata({
    title: content.title,
    description: content.description,
    path: "/about",
  });
}

export default async function AboutPage() {
  const jurisdictions = await getPublicJurisdictions();
  const content = await getAboutPageContent();

  return (
    <>
      <PageHero
        title={content.title}
        description={content.heroDescription}
        kicker="Our story"
        align="split"
        image={marketingImages.hero}
        imageAlt="E-bike rider on a Mid-Atlantic trail"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Container className="py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="prose-editorial max-w-none space-y-10">
            {content.sections.map((section) => (
              <section key={section.id}>
                <h2 className="text-heading-editorial">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 text-body-md text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <PullQuote cite="Editorial mission">
              We are a platform first and a content website second — structured, searchable
              directory data designed for discovery.
            </PullQuote>
            <p className="text-body-md text-text-secondary">
              Questions or corrections? Email{" "}
              <a href={`mailto:${siteConfig.correctionsEmail}`} className="link-editorial">
                {siteConfig.correctionsEmail}
              </a>
              . Read our{" "}
              <Link href="/editorial-standards" className="link-editorial">
                editorial standards
              </Link>{" "}
              for the full verification workflow.
            </p>
          </div>

          <aside>
            <p className="text-kicker mb-4">Coverage</p>
            <ul className="space-y-4">
              {jurisdictions.map((j) => (
                <li
                  key={j.slug}
                  className="overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised shadow-[var(--shadow-xs)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-sunken">
                    <ContentImage
                      src={getJurisdictionImage(j.slug)}
                      alt={j.name}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-display text-lg text-text-primary">{j.name}</p>
                    <div className="mt-2 flex gap-3 text-sm">
                      <Link href={`/trails/${j.slug}`} className="link-editorial">
                        Trails
                      </Link>
                      <Link href={`/laws/${j.slug}`} className="link-editorial">
                        Laws
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </>
  );
}
