import type { ContentBase } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";

export type RepairSpecialty =
  | "motor"
  | "battery"
  | "brakes"
  | "tune-up"
  | "conversion";

export interface Repair extends ContentBase {
  jurisdiction: JurisdictionSlug;
  location: {
    name: string;
    address: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: {
    phone?: string;
    website?: string;
  };
  specialties: RepairSpecialty[];
  brandsServiced?: string[];
  mobileService?: boolean;
}

export interface RepairFilter {
  jurisdiction?: JurisdictionSlug;
  specialty?: RepairSpecialty;
}
