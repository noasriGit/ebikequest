import type { ContentBase } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";
import type { EbikeClass } from "./trail";

export interface Rental extends ContentBase {
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
  fleet: {
    classes: EbikeClass[];
    models?: string[];
  };
  pricing?: {
    hourly?: number;
    daily?: number;
    notes?: string;
  };
  deliveryAvailable?: boolean;
}

export interface RentalFilter {
  jurisdiction?: JurisdictionSlug;
  class?: EbikeClass;
}
