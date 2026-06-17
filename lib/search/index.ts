import type { SearchDocument } from "@/types/content";
import { getGuides, getNationalLawHub, getPublicJurisdictions, getTrails } from "@/lib/content";

export async function buildSearchIndex(): Promise<SearchDocument[]> {
  const [trails, guides, lawHub, jurisdictions] = await Promise.all([
    getTrails(),
    getGuides(),
    getNationalLawHub(),
    getPublicJurisdictions(),
  ]);

  const trailDocs: SearchDocument[] = trails.map((trail) => ({
    entityType: "trail",
    id: trail.id,
    slug: trail.slug,
    title: trail.title,
    description: trail.description,
    jurisdiction: trail.jurisdiction,
    tags: trail.tags,
    coordinates: trail.location.coordinates,
  }));

  const guideDocs: SearchDocument[] = guides.map((guide) => ({
    entityType: "guide",
    id: guide.id,
    slug: guide.slug,
    title: guide.title,
    description: guide.description,
    tags: [guide.category],
  }));

  const lawDocs: SearchDocument[] = jurisdictions.map((j) => ({
    entityType: "law",
    id: j.slug,
    slug: j.slug,
    title: `${j.name} E-Bike Laws`,
    description: `E-bike regulations and trail access rules for ${j.name}.`,
    jurisdiction: j.slug,
  }));

  lawDocs.push({
    entityType: "law",
    id: "national",
    slug: "",
    title: lawHub.title,
    description: lawHub.description,
    jurisdiction: undefined,
  });

  return [...trailDocs, ...guideDocs, ...lawDocs];
}

export function searchDocuments(docs: SearchDocument[], query: string): SearchDocument[] {
  const q = query.trim().toLowerCase();
  if (!q) return docs.slice(0, 8);

  return docs
    .map((doc) => {
      const haystack = [doc.title, doc.description, ...(doc.tags ?? []), doc.jurisdiction ?? ""]
        .join(" ")
        .toLowerCase();
      const idx = haystack.indexOf(q);
      const score = idx === 0 ? 3 : idx > 0 ? 2 : haystack.split(" ").some((w) => w.startsWith(q)) ? 1 : 0;
      return { doc, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(({ doc }) => doc);
}

export function getSearchResultHref(doc: SearchDocument): string {
  switch (doc.entityType) {
    case "trail":
      return `/trails/${doc.jurisdiction}/${doc.slug}`;
    case "guide":
      return `/guides/${doc.slug}`;
    case "law":
      return doc.slug ? `/laws/${doc.slug}` : "/laws";
    default:
      return "/";
  }
}

export function getSearchResultLabel(type: SearchDocument["entityType"]): string {
  switch (type) {
    case "trail":
      return "Trail";
    case "guide":
      return "Guide";
    case "law":
      return "Law";
    default:
      return type;
  }
}
