import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
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
        </dl>

        {brand.website ? (
          <p className="mt-6 text-body-sm">
            <a href={brand.website} className="link-editorial" target="_blank" rel="noopener noreferrer">
              Manufacturer site
            </a>
          </p>
        ) : null}

        {brand.officialSources?.length ? (
          <section className="mt-10" aria-labelledby="brand-sources">
            <h2 id="brand-sources" className="text-heading-md text-text-primary">
              Official sources
            </h2>
            <ul className="mt-4 space-y-2 text-body-sm">
              {brand.officialSources.map((source) => (
                <li key={source.id}>
                  <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

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
