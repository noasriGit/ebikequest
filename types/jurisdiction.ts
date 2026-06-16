export type USRegion =
  | "Northeast"
  | "Mid-Atlantic"
  | "Southeast"
  | "Midwest"
  | "Southwest"
  | "West"
  | "Mountain"
  | "Pacific";

export type JurisdictionSlug =
  | "alabama"
  | "alaska"
  | "arizona"
  | "arkansas"
  | "california"
  | "colorado"
  | "connecticut"
  | "delaware"
  | "florida"
  | "georgia"
  | "hawaii"
  | "idaho"
  | "illinois"
  | "indiana"
  | "iowa"
  | "kansas"
  | "kentucky"
  | "louisiana"
  | "maine"
  | "maryland"
  | "massachusetts"
  | "michigan"
  | "minnesota"
  | "mississippi"
  | "missouri"
  | "montana"
  | "nebraska"
  | "nevada"
  | "new-hampshire"
  | "new-jersey"
  | "new-mexico"
  | "new-york"
  | "north-carolina"
  | "north-dakota"
  | "ohio"
  | "oklahoma"
  | "oregon"
  | "pennsylvania"
  | "rhode-island"
  | "south-carolina"
  | "south-dakota"
  | "tennessee"
  | "texas"
  | "utah"
  | "vermont"
  | "virginia"
  | "washington"
  | "washington-dc"
  | "west-virginia"
  | "wisconsin"
  | "wyoming";

export interface Jurisdiction {
  slug: JurisdictionSlug;
  name: string;
  abbreviation: string;
  type: "state" | "district";
  isPublic: boolean;
  region: USRegion;
}
