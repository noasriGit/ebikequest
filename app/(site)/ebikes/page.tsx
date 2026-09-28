import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ClassReferenceTable } from "@/components/research/ClassReferenceTable";
import { getModels, isModelHubIndexable } from "@/lib/content/commerce";
import { getBrand } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const indexable = await isModelHubIndexable();
  return buildPageMetadata({
    title: "E-Bike Research",
    description:
      "Sourced e-bike model profiles, with class and the laws and trails that decide where each bike can ride.",
    path: "/ebikes",
    noIndex: !indexable,
    follow: true,
  });
}

export default async function EbikesPage() {
  const models = await getModels();

  return (
    <>
      <PageHero
        kicker="E-bikes"
        title="E-bike research"
        description="Profiles are published after specifications are checked against a manufacturer or regulator source. Class stays open when the source does not settle it."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "E-Bikes" },
        ]}
      />
      <Container className="py-10 md:py-14">
        {models.length === 0 ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="max-w-xl text-body-md text-text-secondary">
              <p>
                There are no public model profiles yet. Publishing an empty catalog would look like a review site without the research behind it.
              </p>
              <p className="mt-4">
                Start with the class decision, then the places that class can ride.{" "}
                <Link href="/guides/ebike-classes-explained" className="link-editorial">
                  Classes explained
                </Link>
                ,{" "}
                <Link href="/safety" className="link-editorial">
                  safety and classification
                </Link>
                ,{" "}
                <Link href="/laws" className="link-editorial">
                  laws
                </Link>
                , and{" "}
                <Link href="/trails" className="link-editorial">
                  trails
                </Link>
                .
              </p>
            </div>
            <ClassReferenceTable />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="research-table">
              <caption className="sr-only">Published e-bike model profiles</caption>
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">Class</th>
                  <th scope="col">Type</th>
                  <th scope="col">Verified</th>
                </tr>
              </thead>
              <tbody>
                {await Promise.all(
                  models.map(async (model) => {
                    const brand = await getBrand(model.brandSlug);
                    return (
                      <tr key={model.id}>
                        <th scope="row">
                          <Link href={`/ebikes/${model.brandSlug}/${model.slug}`} className="link-editorial">
                            {brand ? `${brand.name} ${model.name}` : model.name}
                          </Link>
                        </th>
                        <td>{model.ebikeClass ?? "Unclassified"}</td>
                        <td>{model.bikeType ?? "—"}</td>
                        <td>{model.lastVerifiedAt ?? "—"}</td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  );
}
