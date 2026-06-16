import {
  getPublicJurisdictions as getPublicJurisdictionsSync,
  getJurisdiction,
  isPublicJurisdiction,
} from "@/config/jurisdictions";
import type { Jurisdiction } from "@/types/jurisdiction";

export { getJurisdiction, isPublicJurisdiction };

export async function getPublicJurisdictions(): Promise<Jurisdiction[]> {
  return getPublicJurisdictionsSync();
}

export function assertPublicJurisdiction(slug: string): boolean {
  return isPublicJurisdiction(slug);
}

export function getJurisdictionName(slug: string): string {
  return getJurisdiction(slug)?.name ?? slug;
}
