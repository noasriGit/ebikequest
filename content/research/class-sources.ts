import type { EvidenceSource } from "@/types/commerce";

const accessedAt = "2026-09-28";

/**
 * Shared legal sources for class conclusions.
 * A definite eBikeQuest class designation must cite one of the three-class
 * definition statutes plus a manufacturer specification. § 46.2-904.1 covers
 * where an electric power-assisted bicycle may be ridden. It does not define
 * the wattage or class speed cutoffs.
 */
export const VA_CLASS_DEFINITION_ID = "va-46-2-100";
export const MD_CLASS_DEFINITION_ID = "md-11-117-1";
export const DC_MOTORIZED_BICYCLE_ID = "dc-50-2201-02";
export const VA_PATH_RULES_ID = "va-46-2-904-1";

export const THREE_CLASS_DEFINITION_IDS = [VA_CLASS_DEFINITION_ID, MD_CLASS_DEFINITION_ID] as const;

export const CLASS_FRAMEWORK_SOURCES: EvidenceSource[] = [
  {
    id: VA_CLASS_DEFINITION_ID,
    title: "Virginia Code § 46.2-100 — Electric power-assisted bicycle",
    url: "https://law.lis.virginia.gov/vacode/title46.2/chapter1/section46.2-100/",
    publisher: "Virginia Legislative Information System",
    role: "government",
    accessedAt,
    note: "Motor input of no more than 750 watts. Class one and class two assistance ceases at 20 mph. Class three pedal assistance ceases at 28 mph.",
  },
  {
    id: MD_CLASS_DEFINITION_ID,
    title: "Maryland Transportation Article § 11-117.1 — Electric bicycle",
    url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=11-117.1",
    publisher: "Maryland General Assembly",
    role: "government",
    accessedAt,
    note: "Motor rating of 750 watts or less. Class 1 and Class 2 assistance ceases at 20 mph. Class 3 pedal assistance ceases at 28 mph.",
  },
  {
    id: DC_MOTORIZED_BICYCLE_ID,
    title: "DC Code § 50-2201.02 — Motorized bicycle definition",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2201.02",
    publisher: "Council of the District of Columbia",
    role: "government",
    accessedAt,
    note: "A motorized bicycle's motor cannot propel the device faster than 20 mph on level ground. DC does not use Class 1, 2, and 3 labels.",
  },
  {
    id: VA_PATH_RULES_ID,
    title: "Virginia Code § 46.2-904.1 — Electric power-assisted bicycles",
    url: "https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-904.1/",
    publisher: "Virginia Legislative Information System",
    role: "government",
    accessedAt,
    note: "Where an electric power-assisted bicycle may be ridden, and local authority to restrict class three bikes on paths. Not the class or wattage definition.",
  },
];

export function classFrameworkSourceById(sourceId: string): EvidenceSource | undefined {
  return CLASS_FRAMEWORK_SOURCES.find((source) => source.id === sourceId);
}

export function isThreeClassDefinitionSource(source: { id: string; url: string }): boolean {
  return CLASS_FRAMEWORK_SOURCES.some(
    (entry) =>
      (entry.id === VA_CLASS_DEFINITION_ID || entry.id === MD_CLASS_DEFINITION_ID) &&
      (entry.id === source.id || entry.url === source.url),
  );
}
