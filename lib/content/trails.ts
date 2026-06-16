import { allTrails } from "@/content/trails";
import type { Trail, TrailFilter } from "@/types/trail";

function isPublished(trail: Trail): boolean {
  return trail.status === "published" && !trail.seo?.noIndex;
}

export async function getTrails(filter?: TrailFilter): Promise<Trail[]> {
  let results = allTrails.filter(isPublished);

  if (filter?.jurisdiction) {
    results = results.filter((t) => t.jurisdiction === filter.jurisdiction);
  }
  if (filter?.difficulty) {
    results = results.filter((t) => t.stats.difficulty === filter.difficulty);
  }
  if (filter?.classAllowed) {
    results = results.filter((t) =>
      t.ebikePolicy.classesAllowed.includes(filter.classAllowed!),
    );
  }

  return results;
}

export async function getTrail(
  jurisdiction: string,
  slug: string,
): Promise<import("@/types/trail").Trail | null> {
  const trail = allTrails.find(
    (t) => t.jurisdiction === jurisdiction && t.slug === slug && isPublished(t),
  );
  return trail ?? null;
}

export async function getFeaturedTrails(limit = 6): Promise<Trail[]> {
  const trails = await getTrails();
  return trails.slice(0, limit);
}

export async function getTrailStaticParams(): Promise<
  { jurisdiction: string; slug: string }[]
> {
  const trails = await getTrails();
  return trails.map((t) => ({ jurisdiction: t.jurisdiction, slug: t.slug }));
}

export async function getJurisdictionTrailParams(): Promise<
  { jurisdiction: string }[]
> {
  const { getPublicJurisdictions } = await import("./jurisdictions");
  const jurisdictions = await getPublicJurisdictions();
  return jurisdictions.map((j) => ({ jurisdiction: j.slug }));
}
