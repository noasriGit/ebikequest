import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { HubBanner } from "@/components/layout/HubBanner";
import { PageHero } from "@/components/layout/PageHero";
import { FilterBar } from "@/components/content/FilterBar";
import { parseTrailFilters } from "@/lib/content/trail-filters";
import { DirectoryGrid, TrailCard } from "@/components/trails/TrailCard";
import { getPublicJurisdictions, getTrails } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildItemListSchema } from "@/lib/seo/structured-data";
import { getTrailHubImage } from "@/lib/utils/images";

export const metadata = buildPageMetadata({
  title: "E-Bike Trails Directory",
  description:
    "Discover e-bike-friendly trails in Virginia, Maryland, and Washington DC with verified access policies.",
  path: "/trails",
});

async function TrailsResults({
  searchParams,
}: {
  searchParams: Promise<{ jurisdiction?: string; difficulty?: string; class?: string }>;
}) {
  const params = await searchParams;
  const filters = parseTrailFilters(params);
  const trails = await getTrails(filters);

  if (!trails.length) {
    return (
      <p className="rounded-xl border border-zinc-200 bg-white p-8 text-zinc-600">
        No trails match your filters. Try adjusting jurisdiction, difficulty, or e-bike class.
      </p>
    );
  }

  return (
    <DirectoryGrid>
      {trails.map((trail) => (
        <TrailCard key={trail.id} trail={trail} />
      ))}
    </DirectoryGrid>
  );
}

export default async function TrailsPage({
  searchParams,
}: {
  searchParams: Promise<{ jurisdiction?: string; difficulty?: string; class?: string }>;
}) {
  const jurisdictions = await getPublicJurisdictions();
  const trails = await getTrails();

  return (
    <>
      <PageHero
        title="E-Bike Trails Directory"
        description="Browse verified e-bike trail listings with access policies, difficulty, and jurisdiction filters."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Trails" }]}
      />
      <JsonLd
        data={buildItemListSchema(
          trails.map((t) => ({
            name: t.title,
            path: `/trails/${t.jurisdiction}/${t.slug}`,
          })),
        )}
      />
      <Container className="py-10">
        <HubBanner image={getTrailHubImage()} title="Verified trails in Virginia, Maryland, and DC" />
        <div className="mb-8">
          <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-zinc-100" />}>
            <FilterBar jurisdictions={jurisdictions} basePath="/trails" />
          </Suspense>
        </div>
        <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-zinc-100" />}>
          <TrailsResults searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}
