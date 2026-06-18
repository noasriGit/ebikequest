import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("content/_draft-laws.json", "utf8"));

function serialize(value, indent = 2) {
  const pad = " ".repeat(indent);
  const padIn = " ".repeat(indent + 2);
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((v) => `${padIn}${serialize(v, indent + 2)}`).join(",\n")}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    return `{\n${Object.entries(value)
      .map(([k, v]) => `${padIn}${k}: ${serialize(v, indent + 2)}`)
      .join(",\n")}\n${pad}}`;
  }
  return String(value);
}

const configs = {
  virginia: {
    id: "law-virginia",
    slug: "virginia",
    title: "Virginia E-Bike Laws",
    description:
      "Virginia e-bike laws for Class 1, 2, and 3 bikes: trail access, helmet rules, age limits, sidewalk riding, and registration requirements explained.",
    jurisdiction: "virginia",
    comparisonFields: {
      jurisdiction: "virginia",
      jurisdictionName: "Virginia",
      class1Allowed: "Yes",
      class2Allowed: "Yes",
      class3Allowed: "Yes (age 14+)",
      helmetRequired: "Class 3 all ages; under 14 local",
      registrationRequired: "No",
      trailAccessSummary: "Allowed where bikes permitted unless posted",
      lastVerified: "2026-06-18",
    },
  },
  maryland: {
    id: "law-maryland",
    slug: "maryland",
    title: "Maryland E-Bike Laws",
    description:
      "Maryland e-bike rules for Class 1, 2, and 3 bikes: trail access on paths and parks, helmet and age limits, sidewalk riding, and registration.",
    jurisdiction: "maryland",
    comparisonFields: {
      jurisdiction: "maryland",
      jurisdictionName: "Maryland",
      class1Allowed: "Yes",
      class2Allowed: "Yes",
      class3Allowed: "Yes (age 16+)",
      helmetRequired: "Under 16",
      registrationRequired: "No",
      trailAccessSummary: "Class 3 restricted on most bike paths",
      lastVerified: "2026-06-18",
    },
  },
  washingtonDc: {
    id: "law-washington-dc",
    slug: "washington-dc",
    title: "Washington DC E-Bike Laws",
    description:
      "Washington DC motorized bicycle rules: 20 mph cap, trail and sidewalk access, age limits, helmets, and how DC differs from Virginia and Maryland.",
    jurisdiction: "washington-dc",
    comparisonFields: {
      jurisdiction: "washington-dc",
      jurisdictionName: "District of Columbia",
      class1Allowed: "Yes (20 mph cap)",
      class2Allowed: "Yes (20 mph cap)",
      class3Allowed: "Not as motorized bicycle",
      helmetRequired: "Under 16",
      registrationRequired: "No (motorized bicycle)",
      trailAccessSummary: "DDOT trails OK; sidewalks banned",
      lastVerified: "2026-06-18",
    },
  },
};

let out = `import type { JurisdictionLaw } from "@/types/law";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

`;

for (const key of ["virginia", "maryland", "washingtonDc"]) {
  const cfg = configs[key];
  const law = data[key];
  delete law.classifications?.class3_fix;
  out += `export const ${key === "washingtonDc" ? "washingtonDcLaw" : key + "Law"}: JurisdictionLaw = {\n`;
  out += `  id: "${cfg.id}",\n`;
  out += `  slug: "${cfg.slug}",\n`;
  out += `  title: "${cfg.title}",\n`;
  out += `  description: "${cfg.description}",\n`;
  out += `  ...EDITORIAL_DEFAULTS,\n`;
  out += `  updatedAt: "2026-06-18",\n`;
  out += `  jurisdiction: "${cfg.jurisdiction}",\n`;
  out += `  lastVerified: "2026-06-18",\n`;
  out += `  sources: ${serialize(law.sources, 2)},\n`;
  out += `  summary: ${JSON.stringify(law.summary)},\n`;
  out += `  classifications: ${serialize(law.classifications, 2)},\n`;
  out += `  trailAccess: ${JSON.stringify(law.trailAccess)},\n`;
  out += `  helmetRequirements: ${JSON.stringify(law.helmetRequirements)},\n`;
  out += `  ageRequirements: ${JSON.stringify(law.ageRequirements)},\n`;
  out += `  registrationRequired: ${law.registrationRequired},\n`;
  out += `  insuranceRequired: ${law.insuranceRequired},\n`;
  if (law.penalties) out += `  penalties: ${JSON.stringify(law.penalties)},\n`;
  out += `  faq: ${serialize(law.faq, 2)},\n`;
  out += `  comparisonFields: ${serialize({ ...cfg.comparisonFields }, 2)},\n`;
  out += `};\n\n`;
}

out += `export const jurisdictionLaws: JurisdictionLaw[] = [\n  virginiaLaw,\n  marylandLaw,\n  washingtonDcLaw,\n];\n`;
fs.writeFileSync("content/laws/jurisdictions.ts", out);
console.log("Written jurisdictions.ts");
