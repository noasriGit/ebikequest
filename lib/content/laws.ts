import { jurisdictionLaws } from "@/content/laws/jurisdictions";
import { nationalLawHub } from "@/content/laws/national-comparison";
import type { JurisdictionLaw } from "@/types/law";

function isPublished(law: JurisdictionLaw): boolean {
  return law.status === "published" && !law.seo?.noIndex;
}

export async function getLaw(jurisdiction: string): Promise<JurisdictionLaw | null> {
  const law = jurisdictionLaws.find(
    (l) => l.jurisdiction === jurisdiction && isPublished(l),
  );
  return law ?? null;
}

export async function getNationalLawHub() {
  return nationalLawHub;
}

export async function getLawStaticParams(): Promise<{ jurisdiction: string }[]> {
  const { getPublicJurisdictions } = await import("./jurisdictions");
  const jurisdictions = await getPublicJurisdictions();
  return jurisdictions.map((j) => ({ jurisdiction: j.slug }));
}

export async function getPublishedLaws(): Promise<JurisdictionLaw[]> {
  return jurisdictionLaws.filter(isPublished);
}
