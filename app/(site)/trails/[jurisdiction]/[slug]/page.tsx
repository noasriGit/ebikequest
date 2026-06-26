import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { EntityMeta } from "@/components/content/EntityMeta";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { GuideCard, GuideSectionRenderer, GuideToc } from "@/components/guides/GuideCard";
import { EditorialStandardsCallout } from "@/components/laws/LawComponents";
import {
  TrailHero,
  TrailImageGallery,
  TrailMapLink,
} from "@/components/trails/TrailImageGallery";
import { TrailMapDynamic } from "@/components/trails/map/TrailMapDynamic";
import { getTrailMapFeatures } from "@/lib/maps/trail-map-data";
import { TrailCard } from "@/components/trails/TrailCard";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/config/site";
import {
  assertPublicJurisdiction,
  getGuide,
  getJurisdictionName,
  getTrail,
  getTrailStaticParams,
  getTrails,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getTrailCoverImage, getTrailGalleryImages } from "@/lib/utils/images";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildTrailSchema,
} from "@/lib/seo/structured-data";
import type { JurisdictionSlug } from "@/types/jurisdiction";

export async function generateStaticParams() {
  return getTrailStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jurisdiction: string; slug: string }>;
}) {
  const { jurisdiction, slug } = await params;
  if (!assertPublicJurisdiction(jurisdiction)) return {};
  const trail = await getTrail(jurisdiction, slug);
  if (!trail) return {};
  const name = getJurisdictionName(jurisdiction);
  return buildPageMetadata({
    title: trail.seo?.title ?? `${trail.title} E-Bike Trail, ${name}`,
    description: trail.description,
    path: `/trails/${jurisdiction}/${slug}`,
    type: trail.sections?.length ? "article" : "website",
  });
}

export default async function TrailDetailPage({
  params,
}: {
  params: Promise<{ jurisdiction: string; slug: string }>;
}) {
  const { jurisdiction, slug } = await params;
  if (!assertPublicJurisdiction(jurisdiction)) notFound();

  const trail = await getTrail(jurisdiction, slug);
  if (!trail) notFound();

  const jurisdictionName = getJurisdictionName(jurisdiction);
  const path = `/trails/${jurisdiction}/${slug}`;
  const coverImage = getTrailCoverImage(trail);
  const galleryImages = getTrailGalleryImages(trail);
  const [relatedTrails, trailMapFeatures] = await Promise.all([
    getTrails({ jurisdiction: jurisdiction as JurisdictionSlug }).then((trails) =>
      trails.filter((t) => t.slug !== slug).slice(0, 3),
    ),
    getTrailMapFeatures(),
  ]);

  const relatedGuides = trail.relatedGuideSlugs?.length
    ? (
        await Promise.all(trail.relatedGuideSlugs.map((guideSlug) => getGuide(guideSlug)))
      ).filter((g) => g !== null)
    : [];

  const jsonLd = [
    buildTrailSchema({
      title: trail.title,
      description: trail.description,
      path,
      lat: trail.location.coordinates?.lat,
      lng: trail.location.coordinates?.lng,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Trails", path: "/trails" },
      { name: jurisdictionName, path: `/trails/${jurisdiction}` },
      { name: trail.title, path },
    ]),
    ...(trail.sections?.length
      ? [
          buildArticleSchema({
            title: trail.title,
            description: trail.description,
            path,
            publishedAt: trail.publishedAt,
            updatedAt: trail.updatedAt,
            author: trail.author,
            reviewedBy: trail.reviewedBy,
          }),
        ]
      : []),
    ...(trail.faq?.length ? [buildFaqSchema(trail.faq)] : []),
  ];

  return (
    <>
      <TrailHero
        image={coverImage}
        title={trail.title}
        description={trail.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trails", href: "/trails" },
          { label: jurisdictionName, href: `/trails/${jurisdiction}` },
          { label: trail.title },
        ]}
        badges={
          <>
            <Badge className="bg-white/95 text-text-primary">{jurisdictionName}</Badge>
            <Badge className="bg-white/95 capitalize text-text-primary">
              {trail.stats.difficulty}
            </Badge>
            {trail.ebikePolicy.allowed ? (
              <Badge variant="success" className="bg-white/95">
                E-bike allowed
              </Badge>
            ) : (
              <Badge variant="warning" className="bg-white/95">
                Restricted
              </Badge>
            )}
          </>
        }
      />
      <JsonLd data={jsonLd} />
      <Container className="py-10">
        <div className="flex flex-wrap gap-6 border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pb-6 font-mono text-sm">
          {trail.stats.distanceMiles ? (
            <div>
              <span className="text-text-muted">Distance </span>
              <span className="font-semibold text-text-primary">{trail.stats.distanceMiles} mi</span>
            </div>
          ) : null}
          <div>
            <span className="text-text-muted">Difficulty </span>
            <span className="font-semibold capitalize text-text-primary">{trail.stats.difficulty}</span>
          </div>
          {trail.stats.elevationFeet ? (
            <div>
              <span className="text-text-muted">Elevation </span>
              <span className="font-semibold text-text-primary">{trail.stats.elevationFeet} ft</span>
            </div>
          ) : null}
          {trail.ebikePolicy.lastVerified ? (
            <div>
              <span className="text-text-muted">Verified </span>
              <span className="font-semibold text-text-primary">{trail.ebikePolicy.lastVerified}</span>
            </div>
          ) : null}
        </div>

        <EntityMeta
          author={trail.author}
          reviewedBy={trail.reviewedBy}
          publishedAt={trail.publishedAt}
          updatedAt={trail.updatedAt}
          lastVerified={trail.ebikePolicy.lastVerified}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <article className="space-y-8 lg:col-span-2">
            <TrailImageGallery images={galleryImages} />

            {trail.highlights?.length ? (
              <section>
                <h2 className="text-heading-editorial">Trail highlights</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
                  {trail.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {trail.sections?.length ? (
              <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
                <GuideToc sections={trail.sections} />
                <GuideSectionRenderer sections={trail.sections} />
              </div>
            ) : (
              <section>
                <h2 className="text-xl font-semibold text-text-primary">Trail overview</h2>
                <p className="mt-3 text-text-secondary">{trail.location.name}</p>
                {trail.location.address ? (
                  <p className="mt-1 text-sm text-text-muted">{trail.location.address}</p>
                ) : null}
              </section>
            )}

            <section className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--brand)_25%,transparent)] bg-brand-light p-5">
              <h2 className="text-lg font-semibold text-text-primary">E-bike policy</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {trail.ebikePolicy.classesAllowed.map((c) => (
                  <Badge key={c} variant="success">
                    {c.replace("class", "Class ")}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-text-primary">{trail.ebikePolicy.notes}</p>
              {trail.ebikePolicy.sourceUrl ? (
                <ExternalLink
                  href={trail.ebikePolicy.sourceUrl}
                  className="mt-3 inline-block text-sm font-semibold text-brand underline"
                >
                  View official source
                </ExternalLink>
              ) : null}
            </section>

            {trail.accessPoints?.length ? (
              <section>
                <h2 className="text-heading-editorial">Access points</h2>
                <ul className="mt-4 space-y-3">
                  {trail.accessPoints.map((point) => (
                    <li key={point.name} className="text-text-secondary">
                      <span className="font-medium text-text-primary">{point.name}</span>
                      {point.notes ? <span> — {point.notes}</span> : null}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {trail.seasonalNotes ? (
              <section>
                <h2 className="text-heading-editorial">Seasonal notes</h2>
                <p className="mt-4 text-body-md text-text-secondary">{trail.seasonalNotes}</p>
              </section>
            ) : null}

            {trail.faq?.length ? (
              <section>
                <h2 className="text-heading-editorial">FAQ</h2>
                <div className="mt-4">
                  <FAQAccordion items={trail.faq} />
                </div>
              </section>
            ) : null}

            {trail.tags?.length ? (
              <section>
                <h2 className="text-lg font-semibold text-text-primary">Tags</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {trail.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </section>
            ) : null}

            <EditorialStandardsCallout />
          </article>

          <aside className="space-y-6">
            <div className="overflow-hidden lg:sticky lg:top-20">
              <TrailMapDynamic
                trails={trailMapFeatures}
                mode="focus"
                focusedTrailId={trail.id}
                height={320}
              />
            </div>
            <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-5 shadow-[var(--shadow-xs)] lg:sticky lg:top-[calc(5rem+320px+1.5rem)]">
              <h2 className="font-semibold text-text-primary">Trail stats</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-text-muted">Location</dt>
                  <dd className="font-medium text-text-primary">{trail.location.name}</dd>
                </div>
                <div>
                  <dt className="text-text-muted">Difficulty</dt>
                  <dd className="font-medium capitalize text-text-primary">{trail.stats.difficulty}</dd>
                </div>
                {trail.stats.distanceMiles ? (
                  <div>
                    <dt className="text-text-muted">Distance</dt>
                    <dd className="font-medium text-text-primary">{trail.stats.distanceMiles} miles</dd>
                  </div>
                ) : null}
                {trail.stats.elevationFeet ? (
                  <div>
                    <dt className="text-text-muted">Elevation</dt>
                    <dd className="font-medium text-text-primary">{trail.stats.elevationFeet} ft</dd>
                  </div>
                ) : null}
                {trail.stats.surface?.length ? (
                  <div>
                    <dt className="text-text-muted">Surface</dt>
                    <dd className="font-medium text-text-primary">{trail.stats.surface.join(", ")}</dd>
                  </div>
                ) : null}
              </dl>
              <div className="mt-5 space-y-3 border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pt-5">
                <Link
                  href={`/laws/${jurisdiction}`}
                  className="block text-sm font-semibold text-brand hover:underline"
                >
                  View {jurisdictionName} e-bike laws →
                </Link>
                <TrailMapLink
                  lat={trail.location.coordinates?.lat}
                  lng={trail.location.coordinates?.lng}
                  name={trail.location.name}
                />
                <a
                  href={`mailto:${siteConfig.helpEmail}?subject=${encodeURIComponent(`Trail correction: ${trail.title}`)}&body=${encodeURIComponent(`Page URL:\nIssue:\nSupporting source:\n`)}`}
                  className="block text-sm text-text-muted hover:text-brand"
                >
                  Report incorrect info
                </a>
              </div>
            </div>
          </aside>
        </div>

        {relatedGuides.length ? (
          <section className="mt-16 border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pt-12">
            <p className="text-kicker mb-4">Related</p>
            <h2 className="text-heading-md text-text-primary">Related guides</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        ) : null}

        {relatedTrails.length ? (
          <section className="mt-16 border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pt-12">
            <h2 className="text-heading-md font-semibold text-text-primary">More trails in {jurisdictionName}</h2>
            <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTrails.map((t) => (
                <TrailCard key={t.id} trail={t} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
}
