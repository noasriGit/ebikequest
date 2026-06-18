import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { HubIntro } from "@/components/hubs/HubIntro";
import { FilterBar } from "@/components/content/FilterBar";
import { Button } from "@/components/design-system/Button/Button";
import { parseTrailFilters } from "@/lib/content/trail-filters";
import { DirectoryGrid, TrailCard } from "@/components/trails/TrailCard";
import { getHubImage } from "@/config/images";
import { getFeaturedTrails, getHub, getPublicJurisdictions, getTrails } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildItemListSchema } from "@/lib/seo/structured-data";

export async function generateMetadata() {
  const hub = await getHub("trails");
  if (!hub) return {};
  return buildPageMetadata({
    title: hub.title,
    description: hub.description,
    path: hub.path,
  });
}

async function TrailsResults({
  searchParams,
}: {
  searchParams: Promise<{ jurisdiction?: string; difficulty?: string; class?: string }>;
}) {
  const params = await searchParams;
  const filters = parseTrailFilters(params);
  const trails = await getTrails(filters);

  if (!trails.length) {
    const featured = await getFeaturedTrails(3);
    return (
      <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-8 text-center">
        <h2 className="text-heading-md text-text-primary">No trails match your filters</h2>
        <p className="mt-2 text-text-secondary">
          Try adjusting jurisdiction, difficulty, or e-bike class — or browse featured trails below.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {featured.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
        <Button href="/trails" variant="ghost" className="mt-8">
          Clear filters
        </Button>
      </div>
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
  const allTrails = await getTrails();
  const hub = await getHub("trails");

  return (
    <>
      <PageHero
        variant="trails"
        title={hub?.title ?? "E-Bike Trails Directory"}
        description={hub?.description ?? "Browse verified e-bike trail listings."}
        kicker={hub?.kicker ?? "Directory"}
        image={getHubImage("trails")}
        imageAlt="E-bike trails in the Mid-Atlantic"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Trails" }]}
      />
      <JsonLd
        data={buildItemListSchema(
          allTrails.map((t) => ({
            name: t.title,
            path: `/trails/${t.jurisdiction}/${t.slug}`,
          })),
        )}
      />
      <Container className="py-10">
        {hub?.intro.length ? <HubIntro paragraphs={hub.intro} /> : null}
        <p className="mb-6 font-mono text-sm text-text-muted">
          {allTrails.length} verified trails across {jurisdictions.length} jurisdictions
        </p>
        <div className="mb-8">
          <Suspense fallback={<div className="h-16 animate-pulse rounded-[var(--radius-md)] bg-surface-sunken" />}>
            <FilterBar jurisdictions={jurisdictions} basePath="/trails" />
          </Suspense>
        </div>
        <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--radius-md)] bg-surface-sunken" />}>
          <TrailsResults searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}
