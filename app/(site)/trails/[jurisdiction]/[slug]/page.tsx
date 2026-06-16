import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { EntityMeta } from "@/components/content/EntityMeta";
import { EditorialStandardsCallout } from "@/components/laws/LawComponents";
import { TrailCoverHero, TrailImageGallery } from "@/components/trails/TrailImageGallery";
import { Badge } from "@/components/ui/Badge";
import {
  assertPublicJurisdiction,
  getJurisdictionName,
  getTrail,
  getTrailStaticParams,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getTrailCoverImage, getTrailGalleryImages } from "@/lib/utils/images";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildTrailSchema,
} from "@/lib/seo/structured-data";

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
    title: `${trail.title} E-Bike Trail, ${name}`,
    description: trail.description,
    path: `/trails/${jurisdiction}/${slug}`,
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

  return (
    <>
      <PageHero
        title={trail.title}
        description={trail.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trails", href: "/trails" },
          { label: jurisdictionName, href: `/trails/${jurisdiction}` },
          { label: trail.title },
        ]}
      />
      <JsonLd
        data={[
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
        ]}
      />
      <Container className="py-10">
        <TrailCoverHero image={coverImage} />
        <EntityMeta
          author={trail.author}
          reviewedBy={trail.reviewedBy}
          publishedAt={trail.publishedAt}
          updatedAt={trail.updatedAt}
          lastVerified={trail.ebikePolicy.lastVerified}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <TrailImageGallery images={galleryImages} />

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">Trail overview</h2>
              <p className="mt-3 text-zinc-600">{trail.location.name}</p>
              {trail.location.address ? (
                <p className="mt-1 text-sm text-zinc-500">{trail.location.address}</p>
              ) : null}
            </section>

            <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <h2 className="text-lg font-semibold text-emerald-900">E-bike policy</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {trail.ebikePolicy.classesAllowed.map((c) => (
                  <Badge key={c} variant="success">
                    {c.replace("class", "Class ")}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-emerald-900">{trail.ebikePolicy.notes}</p>
              {trail.ebikePolicy.sourceUrl ? (
                <a
                  href={trail.ebikePolicy.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-800 underline"
                >
                  View official source
                </a>
              ) : null}
            </section>

            {trail.tags?.length ? (
              <section>
                <h2 className="text-lg font-semibold text-zinc-900">Tags</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {trail.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </section>
            ) : null}

            <EditorialStandardsCallout />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h2 className="font-semibold text-zinc-900">Trail stats</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-zinc-500">Difficulty</dt>
                  <dd className="font-medium capitalize text-zinc-900">{trail.stats.difficulty}</dd>
                </div>
                {trail.stats.distanceMiles ? (
                  <div>
                    <dt className="text-zinc-500">Distance</dt>
                    <dd className="font-medium text-zinc-900">{trail.stats.distanceMiles} miles</dd>
                  </div>
                ) : null}
                {trail.stats.elevationFeet ? (
                  <div>
                    <dt className="text-zinc-500">Elevation</dt>
                    <dd className="font-medium text-zinc-900">{trail.stats.elevationFeet} ft</dd>
                  </div>
                ) : null}
                {trail.stats.surface?.length ? (
                  <div>
                    <dt className="text-zinc-500">Surface</dt>
                    <dd className="font-medium text-zinc-900">{trail.stats.surface.join(", ")}</dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <Link
                href={`/laws/${jurisdiction}`}
                className="text-sm font-semibold text-emerald-700 hover:underline"
              >
                View {jurisdictionName} e-bike laws →
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
