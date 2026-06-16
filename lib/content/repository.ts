import type { Guide, GuideFilter } from "@/types/guide";
import type { JurisdictionLaw, NationalLawHub } from "@/types/law";
import type { Jurisdiction } from "@/types/jurisdiction";
import type { Rental, RentalFilter } from "@/types/rental";
import type { Repair, RepairFilter } from "@/types/repair";
import type { Shop, ShopFilter } from "@/types/shop";
import type { Trail, TrailFilter } from "@/types/trail";

export interface ContentRepository {
  getTrails(filter?: TrailFilter): Promise<Trail[]>;
  getTrail(jurisdiction: string, slug: string): Promise<Trail | null>;
  getGuides(filter?: GuideFilter): Promise<Guide[]>;
  getGuide(slug: string): Promise<Guide | null>;
  getLaw(jurisdiction: string): Promise<JurisdictionLaw | null>;
  getNationalLawHub(): Promise<NationalLawHub>;
  getPublicJurisdictions(): Promise<Jurisdiction[]>;
  getShops(filter?: ShopFilter): Promise<Shop[]>;
  getShop(jurisdiction: string, slug: string): Promise<Shop | null>;
  getRentals(filter?: RentalFilter): Promise<Rental[]>;
  getRental(jurisdiction: string, slug: string): Promise<Rental | null>;
  getRepairs(filter?: RepairFilter): Promise<Repair[]>;
  getRepair(jurisdiction: string, slug: string): Promise<Repair | null>;
}
