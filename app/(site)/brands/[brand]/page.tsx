import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { SourceList } from "@/components/research/SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBrandModelLinks } from "@/lib/commerce/relationships";
import { getBrand, getBrands } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  const brands = await getBrands();
  return brands.map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = await getBrand(slug);
  if (!brand?.description) return {};
  return buildPageMetadata({
    title: brand.seo?.title ?? brand.name,
    description: brand.description,
    path: `/brands/${brand.slug}`,
    noIndex: Boolean(brand.seo?.noIndex),
    follow: true,
  });
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = await getBrand(slug);
  if (!brand?.description) notFound();

  const models = await getBrandModelLinks(brand.slug);
  const path = `/brands/${brand.slug}`;
  const comparable = (
    await Promise.all((brand.comparableBrandSlugs ?? []).map(async (slug) => getBrand(slug)))
  ).filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const warrantySource = brand.officialSources?.find((source) => source.id === brand.warrantySourceId);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: brand.name, path },
        ])}
      />
      <PageHero
        kicker="Brand"
        title={brand.name}
        description={brand.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />
      <Container className="py-10 md:py-14">
        <dl className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-text-muted">Research status</dt>
            <dd className="mt-1 text-text-primary">{brand.researchStatus.replaceAll("-", " ")}</dd>
          </div>
          <div>
            <dt className="text-text-muted">Last verified</dt>
            <dd className="mt-1 text-text-primary">{brand.lastVerifiedAt ?? "Not recorded"}</dd>
          </div>
          <div>
            <dt className="text-text-muted">Headquarters</dt>
            <dd className="mt-1 text-text-primary">{brand.headquarters ?? "Not recorded"}</dd>
          </div>
          {brand.supportContact ? (
            <div>
              <dt className="text-text-muted">Support</dt>
              <dd className="mt-1 text-text-primary">{brand.supportContact}</dd>
            </div>
          ) : null}
        </dl>

        {brand.suitedFor ? (
          <p className="mt-8 max-w-3xl text-body-md text-text-secondary">{brand.suitedFor}</p>
        ) : null}

        {brand.website ? (
          <p className="mt-6 text-body-sm">
            <a href={brand.website} className="link-editorial" target="_blank" rel="noopener noreferrer">
              Manufacturer site
            </a>
          </p>
        ) : null}

        <article className="prose-editorial mt-10">
          {(brand.sections ?? []).map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        {brand.categories?.length ? (
          <p className="mt-8 text-body-sm text-text-secondary">
            Categories: {brand.categories.join(", ")}.
          </p>
        ) : null}

        {brand.lineupNotes ? (
          <p className="mt-4 max-w-3xl text-body-sm text-text-secondary">{brand.lineupNotes}</p>
        ) : null}

        {brand.classConsiderations ? (
          <section className="mt-10" aria-labelledby="class-considerations">
            <h2 id="class-considerations" className="text-heading-md text-text-primary">
              Class and speed
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.classConsiderations}</p>
          </section>
        ) : null}

        {brand.limitations?.length ? (
          <section className="mt-10" aria-labelledby="limitations">
            <h2 id="limitations" className="text-heading-md text-text-primary">
              Known limitations
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-text-secondary">
              {brand.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {brand.warrantySummary ? (
          <section className="mt-10" aria-labelledby="warranty">
            <h2 id="warranty" className="text-heading-md text-text-primary">
              Warranty
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">
              {brand.warrantySummary}{" "}
              {warrantySource ? (
                <a href={warrantySource.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                  {warrantySource.title}
                </a>
              ) : null}
            </p>
          </section>
        ) : null}

        {brand.certificationNotes ? (
          <section className="mt-10" aria-labelledby="certification">
            <h2 id="certification" className="text-heading-md text-text-primary">
              Certification
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.certificationNotes}</p>
          </section>
        ) : null}

        {brand.retailerAvailability ? (
          <section className="mt-10" aria-labelledby="retailers">
            <h2 id="retailers" className="text-heading-md text-text-primary">
              Where it is sold
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.retailerAvailability}</p>
          </section>
        ) : null}

        {brand.safetyNotices?.length ? (
          <section className="mt-10" aria-labelledby="brand-safety">
            <h2 id="brand-safety" className="text-heading-md text-text-primary">
              Safety notices
            </h2>
            <ul className="mt-4 space-y-4 text-body-sm text-text-secondary">
              {brand.safetyNotices.map((notice) => {
                const source = brand.officialSources?.find((entry) => entry.id === notice.sourceId);
                return (
                  <li key={notice.id}>
                    <p className="text-text-primary">{notice.summary}</p>
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

        {brand.faq?.length ? (
          <section className="mt-10" aria-labelledby="brand-faq">
            <h2 id="brand-faq" className="text-heading-md text-text-primary">
              Questions
            </h2>
            <dl className="mt-4 space-y-4">
              {brand.faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-body-sm font-medium text-text-primary">{item.question}</dt>
                  <dd className="mt-1 text-body-sm text-text-secondary">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {brand.editorialNotes ? (
          <p className="mt-10 max-w-3xl text-body-sm text-text-secondary">{brand.editorialNotes}</p>
        ) : null}

        {comparable.length ? (
          <section className="mt-10" aria-labelledby="comparable-brands">
            <h2 id="comparable-brands" className="text-heading-md text-text-primary">
              Comparable brands
            </h2>
            <ul className="mt-4 space-y-2 text-body-sm">
              {comparable.map((entry) => (
                <li key={entry.id}>
                  <Link href={`/brands/${entry.slug}`} className="link-editorial">
                    {entry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <SourceList
          sources={brand.officialSources ?? []}
          heading="Official sources"
          headingId="brand-sources"
        />

        <DiscoveryLinks
          title="Models"
          intro="Profiles under this brand. Each one links back to the class and trail rules that apply."
          links={models}
        />
        {models.length === 0 ? (
          <p className="mt-8 text-body-sm text-text-secondary">
            No model profiles are published for this brand yet.{" "}
            <Link href="/ebikes" className="link-editorial">
              E-bike research
            </Link>
            .
          </p>
        ) : null}
      </Container>
    </>
  );
}
