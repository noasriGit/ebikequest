import type { ContentBase } from "./content";
import type { JurisdictionSlug } from "./jurisdiction";

export type TrailDifficulty = "easy" | "moderate" | "hard";
export type EbikeClass = "class1" | "class2" | "class3";

export interface Trail extends ContentBase {
  jurisdiction: JurisdictionSlug;
  location: {
    name: string;
    coordinates?: { lat: number; lng: number };
    address?: string;
  };
  stats: {
    distanceMiles?: number;
    elevationFeet?: number;
    difficulty: TrailDifficulty;
    surface?: string[];
    estimatedTimeMinutes?: number;
  };
  ebikePolicy: {
    allowed: boolean;
    classesAllowed: EbikeClass[];
    notes: string;
    sourceUrl?: string;
    lastVerified: string;
  };
  amenities?: string[];
  images?: { src: string; alt: string }[];
  tags?: string[];
  relatedGuideSlugs?: string[];
}

export interface TrailFilter {
  jurisdiction?: JurisdictionSlug;
  difficulty?: TrailDifficulty;
  classAllowed?: EbikeClass;
}
