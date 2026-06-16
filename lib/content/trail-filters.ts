import type { JurisdictionSlug } from "@/types/jurisdiction";
import type { EbikeClass, TrailDifficulty } from "@/types/trail";

export function parseTrailFilters(searchParams: {
  jurisdiction?: string;
  difficulty?: string;
  class?: string;
}) {
  return {
    jurisdiction: searchParams.jurisdiction as JurisdictionSlug | undefined,
    difficulty: searchParams.difficulty as TrailDifficulty | undefined,
    classAllowed: searchParams.class as EbikeClass | undefined,
  };
}
