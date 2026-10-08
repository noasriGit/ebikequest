import { notFound } from "next/navigation";
import {
  AffiliateDisclosure,
  AmazonAssociateDisclosure,
} from "@/components/affiliate";
import { OutboundRetailerLink } from "@/components/affiliate/OutboundRetailerLink";
import { DetailImage } from "@/components/editorial/frames";
import { Container } from "@/components/layout/Container";
import { editorialImage, roleForBikeTypes } from "@/config/editorial-images";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { RideAccess } from "@/components/research/RideAccess";
import { SafetyNotices, SafetyReviewNote } from "@/components/research/SafetyNotices";
import { SourceList } from "@/components/research/SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBrand, getModel, getModels } from "@/lib/content/commerce";
import { getTrails } from "@/lib/content/trails";
import { rideAccessForModel } from "@/lib/commerce/ride-access";
import { getModelBrandLink, getModelRegulatoryLinks } from "@/lib/commerce/relationships";
import {
  classificationStatement,
  collectModelSources,
  formatSpecValue,
  purchaseLinkPolicy,
  retailerLinksForDisplay,
  sourceById,
  visibleSpecifications,
} from "@/lib/commerce/publish";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildProductSchema } from "@/lib/seo/structured-data";

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
  const modelSources = collectModelSources(model).map((source) => ({
    id: source.id,
    title: source.title,
    url: source.url,
  }));
  const specs = visibleSpecifications(model);
  const classSources = (model.classification?.sourceIds ?? [])
    .map((sourceId) => sourceById(model, sourceId))
    .filter((source): source is NonNullable<typeof source> => Boolean(source));
  const rideAccess = rideAccessForModel(model, await getTrails());
  const productSchema = buildProductSchema({
    name: `${brand.name} ${model.name}`,
    description: model.description,
    path,
    brandName: brand.name,
    brandUrl: brand.website,
    imagePath: model.imagePath,
    additionalProperties: [
      { name: "E-bike class", value: classificationStatement(model) },
      ...specs.map(({ spec }) => ({ name: spec.label, value: formatSpecValue(spec) })),
    ],
    mentions: rideAccess.lawLinks.map((link) => ({ name: link.label, path: link.href })),
  });

  const policy = purchaseLinkPolicy(model);
  const retailerLinks = retailerLinksForDisplay(model);
  const hasAffiliate = retailerLinks.some((link) => link.isAffiliate);
  const hasAmazonAffiliate = retailerLinks.some((link) => link.isAffiliate && link.retailer === "amazon");
  const brandLink = await getModelBrandLink(model);
  const regulatoryLinks = getModelRegulatoryLinks(model);
  const category = specs.some(({ spec }) => spec.key === "bike-type") ? undefined : model.bikeType;
  const figureSpecs = specs
    .filter(({ spec }) => /speed|battery|motor/i.test(spec.label))
    .slice(0, 3);
  const atmosphere = editorialImage(roleForBikeTypes(model.bikeType ? [model.bikeType] : brand.categories), `${brand.name} ${model.name}`);

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
      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]">
        <Container className="grid items-end gap-10 py-12 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "E-Bikes", href: "/ebikes" },
                { label: brand.name, href: `/brands/${brand.slug}` },
                { label: model.name },
              ]}
            />
            <p className="text-meta text-text-muted">{brand.name}</p>
            <h1 className="mt-3 text-display-lg text-text-primary">{model.name}</h1>
            <p className="mt-4 text-meta text-text-secondary">
              {model.researchStatus.replaceAll("-", " ")}
              {model.lastVerifiedAt ? ` / Verified ${model.lastVerifiedAt}` : ""} / Source checked
            </p>
            <p className="mt-6 max-w-xl font-reading text-xl leading-snug text-text-secondary">{model.description}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <DetailImage {...atmosphere} caption="Category atmosphere. Not a photograph of this model." />
          </div>
        </Container>
      </section>
      <Container className="py-10 md:py-14">
        <p className="text-body-sm text-text-secondary">
          {model.handsOnTested
            ? "eBikeQuest has ridden or measured this bike."
            : "eBikeQuest has not ridden or measured this bike."}{" "}
          Research status: {model.researchStatus.replaceAll("-", " ")}.
          {model.lastVerifiedAt ? ` Last verified ${model.lastVerifiedAt}.` : ""} {brand.name} makes the {model.name}.
        </p>

        <section className="mt-14 border-y border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)] py-10" aria-labelledby="classification">
          <div className="mb-6 h-1 w-16 bg-brand-accent" aria-hidden />
          <h2 id="classification" className="text-meta text-text-muted">
            Classification
          </h2>
          <p className="classification-mark mt-3 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.84] text-text-primary">
            {classificationStatement(model)}
          </p>
          {model.classification?.reasoning ? (
            <p className="mt-6 max-w-2xl font-reading text-lg leading-relaxed text-text-secondary">{model.classification.reasoning}</p>
          ) : null}
          {model.classification?.manufacturerLabel ? (
            <p className="mt-4 max-w-2xl text-body-sm text-text-secondary">
              Manufacturer label: {model.classification.manufacturerLabel}. That label is the maker&apos;s wording.
            </p>
          ) : null}
          {classSources.length ? (
            <ul className="mt-6 space-y-1 text-body-sm">
              <li className="text-meta text-text-muted">View evidence</li>
              {classSources.map((source) => (
                <li key={source.id}>
                  <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <RideAccess report={rideAccess} />

        {figureSpecs.length ? (
          <ul className="mt-12 grid gap-8 border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] pt-8 sm:grid-cols-3">
            {figureSpecs.map(({ spec }) => (
              <li key={spec.id}>
                <p className="spec-figure text-text-primary">{formatSpecValue(spec)}</p>
                <p className="mt-2 text-meta text-text-muted">{spec.label}</p>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 overflow-x-auto">
          <table className="research-table">
            <caption className="sr-only">{`${brand.name} ${model.name} specifications`}</caption>
            <tbody>
              {category ? (
                <tr>
                  <th scope="row">Category</th>
                  <td>{category}</td>
                </tr>
              ) : null}
              {specs.map(({ spec, source }) => (
                <tr key={spec.id}>
                  <th scope="row">{spec.label}</th>
                  <td>
                    {formatSpecValue(spec)}
                    {spec.note ? <span className="text-text-muted"> — {spec.note}</span> : null}{" "}
                    <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                      {source.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SafetyNotices notices={model.safetyNotices ?? []} sources={modelSources} />
        <SafetyReviewNote review={model.safetyReview} sources={modelSources} />

        <SourceList sources={collectModelSources(model)} />

        {policy === "suppress" ? (
          <p className="mt-10 max-w-2xl text-body-sm text-text-secondary">
            Purchase links are withheld while a stop-use or do-not-promote safety notice applies.
          </p>
        ) : null}

        {retailerLinks.length ? (
          <section className="mt-10" aria-labelledby="where-to-buy">
            <h2 id="where-to-buy" className="text-heading-md text-text-primary">
              Where to check it
            </h2>
            <p className="mt-2 max-w-2xl text-body-sm text-text-secondary">
              Links leave eBikeQuest. We do not set the price, and we do not display a retailer rating.
            </p>
            {policy === "caution" ? (
              <p className="mt-3 max-w-2xl text-body-sm text-text-primary">
                A safety notice applies to this model. Read it before following a retailer link.
              </p>
            ) : null}
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
