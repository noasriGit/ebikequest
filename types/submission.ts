import type { JurisdictionSlug } from "./jurisdiction";

export interface SuggestTrailPayload {
  trailName: string;
  location: string;
  jurisdiction?: JurisdictionSlug;
  notes?: string;
  submitterEmail: string;
}
