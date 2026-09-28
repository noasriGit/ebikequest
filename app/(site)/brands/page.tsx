import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { getBrands, getModels, isBrandHubIndexable } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const indexable = await isBrandHubIndexable();
  return buildPageMetadata({
    title: "E-Bike Brands",
    description:
      "E-bike manufacturers with official sources and the model profiles researched under each brand.",
    path: "/brands",
    noIndex: !indexable,
    follow: true,
  });
}

export default async function BrandsPage() {
  const [brands, models] = await Promise.all([getBrands(), getModels()]);

  return (
    <>
      <PageHero
        kicker="Brands"
        title="E-bike brands"
        description="A brand page is published when we can cite the manufacturer's own materials. Ratings and prices are not estimated."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Brands" },
        ]}
      />
      <Container className="py-10 md:py-14">
        {brands.length === 0 ? (
          <div className="max-w-2xl text-body-md text-text-secondary">
            <p>No brand profiles are public yet.</p>
            <p className="mt-4">
              Use the{" "}
              <Link href="/guides/buying-your-first-ebike" className="link-editorial">
                first e-bike buying guide
              </Link>{" "}
              and the{" "}
              <Link href="/safety" className="link-editorial">
                classification notes
              </Link>{" "}
              while the catalog is in research. The method is on the{" "}
              <Link href="/editorial-standards" className="link-editorial">
                editorial standards
              </Link>{" "}
              page.
            </p>
          </div>
        ) : (
          <ul className="max-w-3xl border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
            {brands.map((brand) => {
              const count = models.filter((model) => model.brandSlug === brand.slug).length;
              return (
                <li key={brand.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
                  <Link href={`/brands/${brand.slug}`} className="block py-4">
                    <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-medium text-text-primary">{brand.name}</span>
                      <span className="text-sm text-text-muted">
                        {count} {count === 1 ? "model guide" : "model guides"}
                      </span>
                    </span>
                    {brand.description ? (
                      <span className="mt-1 block text-body-sm text-text-secondary">{brand.description}</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </>
  );
}
