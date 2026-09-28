import { notFound } from "next/navigation";
import {
  AffiliateDisclosure,
  AmazonAssociateDisclosure,
} from "@/components/affiliate";
import { OutboundRetailerLink } from "@/components/affiliate/OutboundRetailerLink";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBrand, getModel, getModels } from "@/lib/content/commerce";
import { getModelBrandLink, getModelRegulatoryLinks } from "@/lib/commerce/relationships";
import { sourceById } from "@/lib/commerce/publish";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildProductSchema } from "@/lib/seo/structured-data";
import type { EbikeModel } from "@/types/commerce";

export const dynamicParams = false;

export async function generateStaticParams() {
  const models = await getModels();
  return models.map((model) => ({ brand: model.brandSlug, model: model.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: brandSlug, model: modelSlug } = await params;
  const model = await getModel(brandSlug, modelSlug);
  const brand = model ? await getBrand(brandSlug) : null;
  if (!model || !brand || !model.description) return {};

  return buildPageMetadata({
    title: `${brand.name} ${model.name}`,
    description: model.description,
    path: `/ebikes/${brand.slug}/${model.slug}`,
    noIndex: Boolean(model.seo?.noIndex),
    follow: true,
    type: "article",
  });
}

function looseSpecs(model: EbikeModel): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];
  const add = (label: string, value?: string | number) => {
    if (value === undefined || value === "") return;
    rows.push({ label, value: String(value) });
  };
  add("Bike type", model.bikeType);
  add("Motor", model.motor);
  add("Battery", model.battery);
  add(
    "Advertised assisted speed",
    model.advertisedAssistedSpeedMph != null ? `${model.advertisedAssistedSpeedMph} mph` : undefined,
  );
  add("Class", model.classDeterminable === false ? "Not determined" : model.ebikeClass);
  add("Weight", model.weight);
  add("Wheel size", model.wheelSize);
  add("Tire size", model.tireSize);
  add("Brakes", model.brakes);
  add("Suspension", model.suspension);
  add("Warranty", model.warranty);
  add("Certification", model.certification);
  return rows;
}

export default async function EbikeModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: brandSlug, model: modelSlug } = await params;
  const model = await getModel(brandSlug, modelSlug);
  const brand = model ? await getBrand(brandSlug) : null;
  if (!model || !brand || !model.description) notFound();

  const path = `/ebikes/${brand.slug}/${model.slug}`;
  const sourcedSpecs = (model.specifications ?? []).filter((spec) => spec.sourceId && sourceById(model, spec.sourceId));
  const productSchema = buildProductSchema({
    name: `${brand.name} ${model.name}`,
    description: model.description,
    path,
    brandName: brand.name,
    imagePath: model.imagePath,
    additionalProperties: [
      ...(model.ebikeClass && model.classDeterminable !== false && model.ebikeClass !== "unclassified"
        ? [{ name: "E-bike class", value: model.ebikeClass }]
        : []),
      ...sourcedSpecs.map((spec) => ({
        name: spec.label,
        value: spec.unit ? `${spec.value} ${spec.unit}` : spec.value,
      })),
    ],
  });

  const retailerLinks = [
    ...(model.amazonLink ? [model.amazonLink] : []),
    ...(model.retailerLinks ?? []).filter((link) => link.href !== model.amazonLink?.href),
  ];
  const hasAffiliate = retailerLinks.some((link) => link.isAffiliate);
  const hasAmazonAffiliate = retailerLinks.some((link) => link.isAffiliate && link.retailer === "amazon");
  const brandLink = await getModelBrandLink(model);
  const regulatoryLinks = getModelRegulatoryLinks(model);
  const sources = [...(model.officialSources ?? []), ...(model.productSources ?? [])];

  return (
    <>
      <JsonLd
        data={[
          ...(productSchema ? [productSchema] : []),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "E-Bikes", path: "/ebikes" },
            { name: brand.name, path: `/brands/${brand.slug}` },
            { name: model.name, path },
          ]),
        ]}
      />
      <PageHero
        kicker={brand.name}
        title={model.name}
        description={model.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "E-Bikes", href: "/ebikes" },
          { label: brand.name, href: `/brands/${brand.slug}` },
          { label: model.name },
        ]}
      />
      <Container className="py-10 md:py-14">
        <p className="text-body-sm text-text-secondary">
          Hands-on tested: {model.handsOnTested ? "Yes" : "No"}. Research status: {model.researchStatus.replaceAll("-", " ")}.
          {model.lastVerifiedAt ? ` Last verified ${model.lastVerifiedAt}.` : ""}
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="research-table">
            <caption className="sr-only">{`${brand.name} ${model.name} specifications`}</caption>
            <tbody>
              {looseSpecs(model).map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
              {sourcedSpecs.map((spec) => {
                const source = sourceById(model, spec.sourceId!);
                return (
                  <tr key={spec.id}>
                    <th scope="row">{spec.label}</th>
                    <td>
                      {spec.unit ? `${spec.value} ${spec.unit}` : spec.value}
                      {source ? (
                        <>
                          {" "}
                          <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                            Source
                          </a>
                        </>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {model.safetyNotices?.length ? (
          <section className="mt-10" aria-labelledby="safety-notices">
            <h2 id="safety-notices" className="text-heading-md text-text-primary">
              Safety notices
            </h2>
            <ul className="mt-4 space-y-3 text-body-sm text-text-secondary">
              {model.safetyNotices.map((notice) => (
                <li key={notice.id}>{notice.summary}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {sources.length ? (
          <section className="mt-10" aria-labelledby="model-sources">
            <h2 id="model-sources" className="text-heading-md text-text-primary">
              Sources
            </h2>
            <ul className="mt-4 space-y-2 text-body-sm">
              {sources.map((source) => (
                <li key={source.id}>
                  <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                  {source.accessedAt ? <span className="text-text-muted"> · accessed {source.accessedAt}</span> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {retailerLinks.length ? (
          <section className="mt-10" aria-labelledby="where-to-buy">
            <h2 id="where-to-buy" className="text-heading-md text-text-primary">
              Where to check it
            </h2>
            <p className="mt-2 max-w-2xl text-body-sm text-text-secondary">
              Links leave eBikeQuest. We do not set the price, and we do not display a retailer rating.
            </p>
            {hasAffiliate ? <AffiliateDisclosure variant="compact" className="mt-4" /> : null}
            {hasAmazonAffiliate ? <AmazonAssociateDisclosure variant="inline" className="mt-3" /> : null}
            <ul className="mt-4 space-y-2">
              {retailerLinks.map((link) => (
                <li key={link.id}>
                  <OutboundRetailerLink
                    href={link.href}
                    isAffiliate={link.isAffiliate}
                    analytics={{
                      brand: brand.name,
                      model: model.name,
                      retailer: link.retailerName,
                      position: "model-retailer-list",
                    }}
                  >
                    {link.label ?? `View at ${link.retailerName}`}
                  </OutboundRetailerLink>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <DiscoveryLinks
          title="Brand, class, and where to ride"
          intro="These links stay on eBikeQuest. They explain the brand and the access rules that apply to this bike's class."
          links={[...(brandLink ? [brandLink] : []), ...regulatoryLinks]}
        />
      </Container>
    </>
  );
}
