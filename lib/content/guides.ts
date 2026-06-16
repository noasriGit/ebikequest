import { guides } from "@/content/guides";
import type { Guide, GuideFilter } from "@/types/guide";

function isPublished(guide: Guide): boolean {
  return guide.status === "published" && !guide.seo?.noIndex;
}

export async function getGuides(filter?: GuideFilter): Promise<Guide[]> {
  let results = guides.filter(isPublished);

  if (filter?.category) {
    results = results.filter((g) => g.category === filter.category);
  }
  if (filter?.jurisdiction) {
    results = results.filter(
      (g) =>
        !g.jurisdictions?.length ||
        g.jurisdictions.includes(filter.jurisdiction!),
    );
  }

  return results;
}

export async function getGuide(slug: string): Promise<Guide | null> {
  const guide = guides.find((g) => g.slug === slug && isPublished(g));
  return guide ?? null;
}

export async function getGuideStaticParams(): Promise<{ slug: string }[]> {
  const all = await getGuides();
  return all.map((g) => ({ slug: g.slug }));
}

export const GUIDE_CATEGORY_LABELS: Record<
  import("@/types/guide").GuideCategory,
  string
> = {
  "getting-started": "Getting Started",
  maintenance: "Maintenance",
  regulations: "Regulations",
  "riding-skills": "Riding Skills",
  "buying-guide": "Buying Guide",
  "local-riding": "Local Riding",
};
