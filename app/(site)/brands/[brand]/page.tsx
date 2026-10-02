import Link from "next/link";
import { notFound } from "next/navigation";
import { AmazonAssociateDisclosure, AffiliateDisclosure } from "@/components/affiliate";
import { OutboundRetailerLink } from "@/components/affiliate/OutboundRetailerLink";
import { AuthorByline, ReviewerByline } from "@/components/seo/AuthorByline";
import { EditorialImage } from "@/components/editorial/frames";
import { StickySpread } from "@/components/editorial/StickySpread";
import { Container } from "@/components/layout/Container";
import { editorialImage, editorialImageAt, roleForBikeTypes } from "@/config/editorial-images";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { DiscoveryLinks } from "@/components/research/DiscoveryLinks";
import { SafetyNotices, SafetyReviewNote } from "@/components/research/SafetyNotices";
import { SectionSources } from "@/components/research/SectionSources";
import { SourceList } from "@/components/research/SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { EDITORIAL_TEAM, withReviewDate } from "@/config/authors";
import { getBrandContextLinks, getBrandModelLinks } from "@/lib/commerce/relationships";
import { brandResearchSources, brandRetailerLinksForDisplay, noticesPurchasePolicy } from "@/lib/commerce/publish";
import { getBrand, getBrands, getModelsForBrand } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebPageSchema,
} from "@/lib/seo/structured-data";

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
    title: brand.seo?.title ?? `${brand.name} buyer guide`,
    description: brand.description,
    path: `/brands/${brand.slug}`,
    noIndex: Boolean(brand.seo?.noIndex),
    follow: true,
    type: "article",
  });
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = await getBrand(slug);
  if (!brand?.description || !brand.lastVerifiedAt || !brand.publishedAt) notFound();

  const [models, modelLinks, contextLinks] = await Promise.all([
    getModelsForBrand(brand.slug),
    getBrandModelLinks(brand.slug),
    getBrandContextLinks(brand.slug),
  ]);
  const path = `/brands/${brand.slug}`;
  const comparable = (
    await Promise.all((brand.comparableBrandSlugs ?? []).map(async (entry) => getBrand(entry)))
  ).filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const researchSources = brandResearchSources(brand);
  const warrantySource = researchSources.find((source) => source.id === brand.warrantySourceId);
  const policy = noticesPurchasePolicy(brand.safetyNotices);
  const retailerLinks = brandRetailerLinksForDisplay(brand);
  const hasAffiliate = retailerLinks.some((link) => link.isAffiliate);
  const hasAmazonAffiliate = retailerLinks.some((link) => link.isAffiliate && link.retailer === "amazon");
  const materialNotices = (brand.safetyNotices ?? []).filter((notice) => notice.severity !== "info");
  const reviewer = withReviewDate(brand.lastVerifiedAt);
  const pageTitle = brand.seo?.title ?? brand.name;
  const publicModelSlugs = new Set(models.map((model) => model.slug));

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            title: pageTitle,
            description: brand.description,
            path,
            dateModified: brand.lastVerifiedAt,
          }),
          buildArticleSchema({
            title: pageTitle,
            description: brand.description,
            path,
            publishedAt: brand.publishedAt,
            updatedAt: brand.lastVerifiedAt,
            author: EDITORIAL_TEAM,
            reviewedBy: reviewer,
            about: { name: brand.name, url: brand.website },
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path },
          ]),
          ...(brand.faq?.length ? [buildFaqSchema(brand.faq)] : []),
        ]}
      />
      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]">
        <Container className="py-12 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Brands", href: "/brands" },
              { label: brand.name },
            ]}
          />
          <p className="text-meta text-text-muted">Buyer guide</p>
          <h1 className="mt-3 max-w-6xl text-display-hero text-text-primary">{brand.name}</h1>
          <p className="mt-5 text-meta text-text-secondary">
            {[
              brand.researchStatus.replaceAll("-", " "),
              brand.categories?.length ? brand.categories.join(" + ") : null,
              "Source checked",
              brand.lastVerifiedAt ? `Verified ${brand.lastVerifiedAt}` : null,
            ]
              .filter(Boolean)
              .join(" / ")}
          </p>
          {brand.description ? (
            <p className="mt-6 max-w-xl font-reading text-xl leading-snug text-text-secondary">{brand.description}</p>
          ) : null}
        </Container>
      </section>
      <Container className="py-10 md:py-14">
        <div className="flex flex-col gap-2">
          <AuthorByline author={EDITORIAL_TEAM} />
          <ReviewerByline reviewer={reviewer} />
        </div>

        <dl className="mt-8 grid gap-4 border-y border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] py-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-text-muted">Research status</dt>
            <dd className="mt-1 text-text-primary">{brand.researchStatus.replaceAll("-", " ")}</dd>
          </div>
          <div>
            <dt className="text-text-muted">First published</dt>
            <dd className="mt-1 text-text-primary">{brand.publishedAt}</dd>
          </div>
          <div>
            <dt className="text-text-muted">Last verified</dt>
            <dd className="mt-1 text-text-primary">{brand.lastVerifiedAt}</dd>
          </div>
          <div>
            <dt className="text-text-muted">Ride testing</dt>
            <dd className="mt-1 text-text-primary">Not ridden or measured by eBikeQuest</dd>
          </div>
          <div>
            <dt className="text-text-muted">Headquarters</dt>
            <dd className="mt-1 text-text-primary">{brand.headquarters ?? "Not published on the sources checked"}</dd>
          </div>
          {brand.supportContact ? (
            <div className="sm:col-span-2">
              <dt className="text-text-muted">Support</dt>
              <dd className="mt-1 text-text-primary">{brand.supportContact}</dd>
            </div>
          ) : null}
        </dl>

        {brand.suitedFor ? (
          <StickySpread
            className="mt-16"
            media={
              <EditorialImage
                {...editorialImage(roleForBikeTypes(brand.categories), brand.name)}
                caption="Category atmosphere. Not a photograph of this brand's bike."
              />
            }
          >
            <p className="text-meta text-text-muted">Introduction</p>
            <p className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.9] text-text-primary">
              {brand.suitedFor}
            </p>
          </StickySpread>
        ) : null}

        {materialNotices.length ? (
          <SafetyNotices
            notices={materialNotices}
            sources={researchSources}
            heading={policy === "suppress" ? "Current safety warning" : "Read this before a retailer link"}
            headingId="safety-banner"
            compact
          />
        ) : null}

        {(brand.sections ?? []).length ? (
          <nav className="mt-8" aria-label="On this page">
            <h2 className="text-sm font-medium text-text-muted">On this page</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
              {brand.sections?.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="link-editorial">
                    {section.heading}
                  </a>
                </li>
              ))}
              {brand.lineup?.length ? (
                <li>
                  <a href="#lineup" className="link-editorial">
                    Model lineup
                  </a>
                </li>
              ) : null}
              <li>
                <a href="#retailers" className="link-editorial">
                  Where to check it
                </a>
              </li>
              <li>
                <a href="#brand-sources" className="link-editorial">
                  Research sources
                </a>
              </li>
            </ul>
          </nav>
        ) : null}

        <article className="mt-16">
          {(brand.sections ?? []).map((section, index) => (
            <section
              key={section.id}
              className="grid items-start gap-8 border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] py-12 lg:grid-cols-12"
            >
              <div className={index % 2 === 0 ? "prose-editorial lg:col-span-6" : "prose-editorial lg:col-span-6 lg:col-start-7"}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <SectionSources sourceIds={section.sourceIds} sources={researchSources} />
              </div>
              <div className={index % 2 === 0 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1 lg:row-start-1"}>
                <EditorialImage {...editorialImageAt(index, brand.name)} />
              </div>
            </section>
          ))}
        </article>

        {brand.lineup?.length ? (
          <section className="mt-10" aria-labelledby="lineup">
            <h2 id="lineup" className="text-heading-md text-text-primary">
              Model lineup
            </h2>
            {brand.lineupNotes ? (
              <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.lineupNotes}</p>
            ) : null}
            <ul className="mt-4 border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] md:hidden">
              {brand.lineup.map((row) => {
                const href =
                  row.modelSlug && publicModelSlugs.has(row.modelSlug)
                    ? `/ebikes/${brand.slug}/${row.modelSlug}`
                    : undefined;
                return (
                  <li key={row.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] py-4">
                    <h3 className="font-medium text-text-primary">
                      {href ? (
                        <Link href={href} className="link-editorial">
                          {row.name}
                        </Link>
                      ) : (
                        row.name
                      )}
                    </h3>
                    <p className="mt-1 text-body-sm text-text-secondary">{row.riderFit}</p>
                    <p className="mt-1 text-body-sm text-text-secondary">{row.distinction}</p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 hidden overflow-x-auto md:block">
              <table className="research-table">
                <caption className="sr-only">{`${brand.name} model lineup`}</caption>
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Who it is for</th>
                    <th scope="col">Distinction</th>
                  </tr>
                </thead>
                <tbody>
                  {brand.lineup.map((row) => {
                    const href =
                      row.modelSlug && publicModelSlugs.has(row.modelSlug)
                        ? `/ebikes/${brand.slug}/${row.modelSlug}`
                        : undefined;
                    return (
                      <tr key={row.id}>
                        <th scope="row">
                          {href ? (
                            <Link href={href} className="link-editorial">
                              {row.name}
                            </Link>
                          ) : (
                            row.name
                          )}
                        </th>
                        <td>{row.riderFit}</td>
                        <td>{row.distinction}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {brand.classConsiderations ? (
          <section className="mt-10" aria-labelledby="class-considerations">
            <h2 id="class-considerations" className="text-heading-md text-text-primary">
              Class and speed
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.classConsiderations}</p>
            <SectionSources sourceIds={brand.classSourceIds} sources={researchSources} />
          </section>
        ) : null}

        {brand.limitations?.length ? (
          <section className="mt-10" aria-labelledby="limitations">
            <h2 id="limitations" className="text-heading-md text-text-primary">
              Limitations
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-text-secondary">
              {brand.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {brand.certificationNotes ? (
          <section className="mt-10" aria-labelledby="certification">
            <h2 id="certification" className="text-heading-md text-text-primary">
              Battery and certification
            </h2>
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.certificationNotes}</p>
          </section>
        ) : null}

        {brand.warrantySummary ? (
          <section className="mt-10" aria-labelledby="warranty">
            <h2 id="warranty" className="text-heading-md text-text-primary">
              Warranty and support
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

        <SafetyNotices notices={brand.safetyNotices ?? []} sources={researchSources} />
        <SafetyReviewNote review={brand.safetyReview} sources={researchSources} />

        <section className="mt-10" aria-labelledby="retailers">
          <h2 id="retailers" className="text-heading-md text-text-primary">
            Where to check it
          </h2>
          {brand.retailerAvailability ? (
            <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{brand.retailerAvailability}</p>
          ) : null}
          {policy === "suppress" ? (
            <p className="mt-4 max-w-2xl text-body-sm text-text-primary">
              Retailer links are withheld while a stop-use or do-not-promote notice applies.
            </p>
          ) : null}
          {retailerLinks.length ? (
            <>
              {policy === "caution" ? (
                <p className="mt-4 max-w-2xl text-body-sm text-text-primary">
                  A safety note above applies to this brand. Read it before opening a retailer link.
                </p>
              ) : null}
              <p className="mt-3 max-w-2xl text-body-sm text-text-secondary">
                eBikeQuest is not the seller. Links leave this site.
                {hasAffiliate ? "" : " None of the links on this page is an Amazon Associates link."}
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
                        retailer: link.retailerName,
                        position: "brand-retailer-list",
                      }}
                    >
                      {link.label ?? `View at ${link.retailerName}`}
                    </OutboundRetailerLink>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>

        {brand.faq?.length ? (
          <section className="mt-10" aria-labelledby="brand-faq">
            <h2 id="brand-faq" className="text-heading-md text-text-primary">
              Questions
            </h2>
            <dl className="mt-4 max-w-3xl space-y-5">
              {brand.faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-body-sm font-medium text-text-primary">{item.question}</dt>
                  <dd className="mt-1 text-body-sm text-text-secondary">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {comparable.length ? (
          <section className="mt-10" aria-labelledby="comparable-brands">
            <h2 id="comparable-brands" className="text-heading-md text-text-primary">
              Comparable brands in this catalog
            </h2>
            <ul className="mt-4 space-y-2 text-body-sm">
              {comparable.map((entry) => (
                <li key={entry.id}>
                  <Link href={`/brands/${entry.slug}`} className="link-editorial">
                    {entry.name}
                  </Link>
                  {entry.description ? <span className="text-text-secondary"> — {entry.description}</span> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="mt-10 max-w-3xl text-body-sm text-text-secondary">
            No other brand in this catalog is the same kind of product. The other researched brands are linked below
            so the difference is easy to see.
          </p>
        )}

        {brand.editorialNotes ? (
          <p className="mt-10 max-w-3xl text-body-sm text-text-secondary">{brand.editorialNotes}</p>
        ) : null}

        <SourceList
          sources={researchSources}
          heading="Research sources"
          headingId="brand-sources"
        />

        <DiscoveryLinks
          title="Model guides"
          intro="A model page exists only where one official spec sheet was specific enough to cite on its own."
          links={modelLinks}
        />
        {modelLinks.length === 0 ? (
          <p className="mt-8 text-body-sm text-text-secondary">
            No single-model page is published for this brand. The lineup table is the model record.{" "}
            <Link href="/ebikes" className="link-editorial">
              E-bike research
            </Link>
            .
          </p>
        ) : null}

        <DiscoveryLinks
          title="Class, laws, and trails"
          intro="These pages stay on eBikeQuest. They are the access rules a buyer should read with the speed figures above."
          links={contextLinks}
        />
      </Container>
    </>
  );
}
