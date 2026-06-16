import type { ContentBase } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";

export type ShopService = "sales" | "service" | "rentals" | "accessories";

export interface Shop extends ContentBase {
  jurisdiction: JurisdictionSlug;
  location: {
    name: string;
    address: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: Record<string, string>;
  services: ShopService[];
  brandsCarried?: string[];
  images?: { src: string; alt: string }[];
}

export interface ShopFilter {
  jurisdiction?: JurisdictionSlug;
  service?: ShopService;
}
