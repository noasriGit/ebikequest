import type { Trail } from "@/types/trail";
import type { EbikeClassDesignation, EbikeModel } from "@/types/commerce";
import { publicClassDesignation } from "@/lib/commerce/publish";

export interface RideAccessLink {
  href: string;
  label: string;
  note?: string;
}

const THREE_CLASS_JURISDICTIONS = ["virginia", "maryland"] as const;

const JURISDICTION_NAME: Record<string, string> = {
  virginia: "Virginia",
  maryland: "Maryland",
  "washington-dc": "Washington, DC",
};

const CLASS_TO_TRAIL: Partial<Record<EbikeClassDesignation, Trail["ebikePolicy"]["classesAllowed"][number]>> = {
  "class-1": "class1",
  "class-2": "class2",
  "class-3": "class3",
};

const CLASS_LABEL: Partial<Record<EbikeClassDesignation, string>> = {
  "class-1": "Class 1",
  "class-2": "Class 2",
  "class-3": "Class 3",
};

export interface RideAccessTrail {
  href: string;
  title: string;
  note: string;
}

export interface RideAccessGroup {
  jurisdiction: string;
  jurisdictionName: string;
  trails: RideAccessTrail[];
  moreHref: string;
  hiddenCount: number;
}

export interface RideAccessReport {
  status: "matched" | "undetermined" | "out-of-class";
  summary: string;
  lawLinks: RideAccessLink[];
  groups: RideAccessGroup[];
}

const LAW_LINKS: RideAccessLink[] = [
  { href: "/laws/virginia", label: "Virginia e-bike laws", note: "Three-class definition and path rules" },
  { href: "/laws/maryland", label: "Maryland e-bike laws", note: "Three-class definition and path rules" },
  {
    href: "/laws/washington-dc",
    label: "Washington, DC e-bike laws",
    note: "20 mph motorized bicycle, not three classes",
  },
  { href: "/guides/ebike-classes-explained", label: "E-bike classes explained" },
  { href: "/safety", label: "Safety and classification" },
];

function trailMatches(trail: Trail, trailClass: Trail["ebikePolicy"]["classesAllowed"][number]): boolean {
  return (
    trail.ebikePolicy.allowed &&
    trail.ebikePolicy.classesAllowed.includes(trailClass) &&
    (THREE_CLASS_JURISDICTIONS as readonly string[]).includes(trail.jurisdiction)
  );
}

export function rideAccessForModel(model: EbikeModel, trails: Trail[]): RideAccessReport {
  const designation = publicClassDesignation(model);
  const lawLinks = LAW_LINKS;

  if (!designation || designation === "unclassified") {
    return {
      status: "undetermined",
      summary:
        "The class is not determined from the cited sources, so this page does not list trails as compatible. A class label on a product page is not trail permission.",
      lawLinks,
      groups: [],
    };
  }

  if (designation === "out-of-class") {
    return {
      status: "out-of-class",
      summary:
        "This model is out of class under the Virginia and Maryland definitions cited on this page. Trail policies written for Class 1, Class 2, or Class 3 are not treated as permission to ride it.",
      lawLinks,
      groups: [],
    };
  }

  const trailClass = CLASS_TO_TRAIL[designation];
  const classLabel = CLASS_LABEL[designation] ?? "this class";
  if (!trailClass) {
    return {
      status: "undetermined",
      summary: "This page does not list trails as compatible.",
      lawLinks,
      groups: [],
    };
  }

  const groups: RideAccessGroup[] = [];
  for (const jurisdiction of THREE_CLASS_JURISDICTIONS) {
    const matches = trails
      .filter((trail) => trail.jurisdiction === jurisdiction && trailMatches(trail, trailClass))
      .sort((a, b) => a.title.localeCompare(b.title));
    const shown = matches.slice(0, 4);
    groups.push({
      jurisdiction,
      jurisdictionName: JURISDICTION_NAME[jurisdiction] ?? jurisdiction,
      moreHref: `/trails/${jurisdiction}`,
      hiddenCount: Math.max(0, matches.length - shown.length),
      trails: shown.map((trail) => ({
        href: `/trails/${trail.jurisdiction}/${trail.slug}`,
        title: trail.title,
        note: `Documented policy includes ${classLabel}. Checked ${trail.ebikePolicy.lastVerified}.`,
      })),
    });
  }

  return {
    status: "matched",
    summary: `eBikeQuest's verified class for this model is ${classLabel}. The trails below are ones in Virginia or Maryland whose documented policy lists ${classLabel}. A land manager can still restrict a path, and a posted sign controls the ride. Washington, DC does not use the three-class system, so DC trails are not matched from this label.`,
    lawLinks,
    groups,
  };
}
