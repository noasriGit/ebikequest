import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { getComparison, getComparisons, getModels } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  const comparisons = await getComparisons();
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = await getComparison(slug);
  if (!comparison) return {};
  return buildPageMetadata({
    title: comparison.seo?.title ?? comparison.title,
    description: comparison.description,
    path: `/compare/${comparison.slug}`,
    noIndex: Boolean(comparison.seo?.noIndex),
    follow: true,
  });
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = await getComparison(slug);
  if (!comparison) notFound();

  const models = (await getModels()).filter((model) => comparison.modelIds.includes(model.id));
  const path = `/compare/${comparison.slug}`;
  const labels = [
    "Bike type",
    "Motor",
    "Battery",
    "Advertised assisted speed",
    "Class",
    "Weight",
    "Brakes",
    "Suspension",
  ] as const;

  function cell(model: (typeof models)[number], label: (typeof labels)[number]): string {
    switch (label) {
      case "Bike type":
        return model.bikeType ?? "—";
      case "Motor":
        return model.motor ?? "—";
      case "Battery":
        return model.battery ?? "—";
      case "Advertised assisted speed":
        return model.advertisedAssistedSpeedMph != null ? `${model.advertisedAssistedSpeedMph} mph` : "—";
      case "Class":
        return model.classDeterminable === false ? "Not determined" : (model.ebikeClass ?? "—");
      case "Weight":
        return model.weight ?? "—";
      case "Brakes":
        return model.brakes ?? "—";
      case "Suspension":
        return model.suspension ?? "—";
      default:
        return "—";
    }
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: comparison.title, path },
        ])}
      />
      <PageHero
        kicker="Comparison"
        title={comparison.title}
        description={comparison.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: comparison.title },
        ]}
      />
      <Container className="py-10 md:py-14">
        {comparison.summary ? <p className="max-w-3xl text-body-md text-text-secondary">{comparison.summary}</p> : null}
        <p className="mt-4 text-body-sm text-text-secondary">
          Hands-on tested: {comparison.handsOnTested ? "Yes" : "No"}. Values below come from each model profile and its sources.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="research-table">
            <caption className="sr-only">{comparison.title}</caption>
            <thead>
              <tr>
                <th scope="col">Attribute</th>
                {models.map((model) => (
                  <th key={model.id} scope="col">
                    <Link href={`/ebikes/${model.brandSlug}/${model.slug}`} className="link-editorial">
                      {model.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {labels.map((label) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {models.map((model) => (
                    <td key={model.id}>{cell(model, label)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
