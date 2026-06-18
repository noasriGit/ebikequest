import { hubPages, getHubBySlug, getHubByJurisdiction } from "@/content/hubs";
import type { HubPage, HubSlug } from "@/types/hub";
import type { JurisdictionSlug } from "@/types/jurisdiction";

export async function getHub(slug: HubSlug): Promise<HubPage | null> {
  const hub = getHubBySlug(slug);
  return hub ?? null;
}

export async function getJurisdictionTrailHub(
  jurisdiction: JurisdictionSlug,
): Promise<HubPage | null> {
  const hub = getHubByJurisdiction(jurisdiction);
  return hub ?? null;
}

export async function getAllHubs(): Promise<HubPage[]> {
  return hubPages;
}
