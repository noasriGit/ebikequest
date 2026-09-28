import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SourceList } from "@/components/research/SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { getComparison, getComparisons, getModels } from "@/lib/content/commerce";
import { classificationStatement, formatSpecValue, visibleSpecifications } from "@/lib/commerce/publish";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";
import type { EbikeModel, ModelSpecificationKey } from "@/types/commerce";

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

function specValue(model: EbikeModel, key: ModelSpecificationKey): string {
  const match = visibleSpecifications(model).find(({ spec }) => spec.key === key);
  return match ? formatSpecValue(match.spec) : "Not in sources";
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = await getComparison(slug);
  if (!comparison) notFound();

  const models = (await getModels()).filter((model) => comparison.modelIds.includes(model.id));
  const path = `/compare/${comparison.slug}`;
  const keys = comparison.dimensionKeys ?? [];

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
        {comparison.intent ? (
          <p className="max-w-3xl text-body-md text-text-primary">{comparison.intent}</p>
        ) : null}
        {comparison.summary ? (
          <p className="mt-4 max-w-3xl text-body-md text-text-secondary">{comparison.summary}</p>
        ) : null}
        <p className="mt-4 text-body-sm text-text-secondary">
          Hands-on tested: {comparison.handsOnTested ? "Yes" : "No"}.
          {comparison.lastVerifiedAt ? ` Last verified ${comparison.lastVerifiedAt}.` : ""} Specification cells
          come from each model profile and only appear when that profile cites a source.
        </p>

        <article className="prose-editorial mt-8">
          {(comparison.sections ?? []).map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        {comparison.differences?.length ? (
          <section className="mt-10" aria-labelledby="differences">
            <h2 id="differences" className="text-heading-md text-text-primary">
              Differences
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-text-secondary">
              {comparison.differences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {comparison.tradeoffs?.length ? (
          <section className="mt-10" aria-labelledby="tradeoffs">
            <h2 id="tradeoffs" className="text-heading-md text-text-primary">
              Tradeoffs
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-text-secondary">
              {comparison.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {comparison.buyerFit ? (
          <section className="mt-10" aria-labelledby="buyer-fit">
            <h2 id="buyer-fit" className="text-heading-md text-text-primary">
              Who it fits
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{comparison.buyerFit}</p>
          </section>
        ) : null}

        {comparison.dimensions?.length ? (
          <section className="mt-10" aria-labelledby="dimensions">
            <h2 id="dimensions" className="text-heading-md text-text-primary">
              Compared on
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-text-secondary">
              {comparison.dimensions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {keys.length ? (
          <div className="mt-10 overflow-x-auto">
            <table className="research-table">
              <caption className="sr-only">{comparison.title}</caption>
              <thead>
                <tr>
                  <th scope="col">Sourced specification</th>
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
                <tr>
                  <th scope="row">Class</th>
                  {models.map((model) => (
                    <td key={model.id}>{classificationStatement(model)}</td>
                  ))}
                </tr>
                {keys.map((key) => (
                  <tr key={key}>
                    <th scope="row">{key.replaceAll("-", " ")}</th>
                    {models.map((model) => (
                      <td key={model.id}>{specValue(model, key)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        <SourceList sources={comparison.sources ?? []} heading="Comparison sources" headingId="comparison-sources" />
      </Container>
    </>
  );
}
