import fs from "node:fs";
import path from "node:path";

const d1 = JSON.parse(fs.readFileSync("content/_draft-guides.json", "utf8"));
const d2 = JSON.parse(fs.readFileSync("scripts/_draft-guides-output.json", "utf8"));
const all = [...d1, ...d2];

const meta = {
  "ebike-classes-explained": {
    id: "guide-ebike-classes",
    title: "E-Bike Classes Explained: Class 1, 2, and 3",
    category: "getting-started",
    description:
      "Learn Class 1, 2, and 3 e-bike definitions, Virginia and Maryland rules, and how DC differs—so you pick the right bike and trail access.",
  },
  "mid-atlantic-trail-etiquette": {
    id: "guide-trail-etiquette",
    title: "E-Bike Trail Etiquette in the Mid-Atlantic",
    category: "riding-skills",
    description:
      "E-bike trail etiquette for Virginia, Maryland, and DC shared paths: speed, passing, yielding, and battery safety on crowded routes.",
  },
  "buying-your-first-ebike": {
    id: "guide-buying-first",
    title: "Buying Your First E-Bike",
    category: "buying-guide",
    description:
      "Mid-Atlantic first e-bike buyer guide: motor types, battery range, class choice, test-ride checklist, and how VA, MD, and DC laws fit in.",
  },
  "ebike-battery-care": {
    id: "guide-battery-care",
    title: "E-Bike Battery Care and Storage",
    category: "maintenance",
    description:
      "Charging, storage, and winter care tips to extend lithium e-bike battery life through humid Mid-Atlantic summers and cold winters.",
  },
  "riding-ebikes-in-virginia": {
    id: "guide-va-local",
    title: "Riding E-Bikes in Virginia: Local Tips",
    category: "local-riding",
    description:
      "Virginia rail-trails, state parks, and urban paths: where each e-bike class is allowed and how to verify rules before you ride.",
    jurisdictions: ["virginia"],
  },
  "riding-ebikes-in-maryland": {
    id: "guide-md-local",
    title: "Riding E-Bikes in Maryland: Local Tips",
    category: "local-riding",
    description:
      "Maryland rail-trails, DNR lands, and county paths: e-bike access by class, evolving park policies, and how to check rules before each ride.",
    jurisdictions: ["maryland"],
  },
  "ebike-regulations-overview": {
    id: "guide-regulations-overview",
    title: "E-Bike Regulations Overview",
    category: "regulations",
    description:
      "How federal, state, and local e-bike rules interact in the Mid-Atlantic—and which authority wins when trail and street policies conflict.",
  },
};

function slugToExportName(slug) {
  return slug
    .split("-")
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join("");
}

function serialize(value, indent = 4) {
  const pad = " ".repeat(indent);
  const padIn = " ".repeat(indent + 2);
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((v) => `${padIn}${serialize(v, indent + 2)}`).join(",\n")}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    return `{\n${entries
      .map(([k, v]) => `${padIn}${k}: ${serialize(v, indent + 2)}`)
      .join(",\n")}\n${pad}}`;
  }
  return String(value);
}

const guides = all.map((g) => {
  const m = meta[g.slug];
  return {
    ...m,
    slug: g.slug,
    readingTimeMinutes: g.readingTimeMinutes,
    sections: g.sections,
    faq: g.faq,
    relatedGuides: g.relatedGuides ?? [],
  };
});

const entriesDir = path.join("content/guides/entries");
fs.mkdirSync(entriesDir, { recursive: true });

const imports = [];
const arrayItems = [];

for (const g of guides) {
  const exportName = slugToExportName(g.slug);
  let entry = `import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ${exportName}: Guide = {
  ...EDITORIAL_DEFAULTS,
`;
  const { jurisdictions, ...rest } = g;
  for (const [key, value] of Object.entries(rest)) {
    entry += `  ${key}: ${serialize(value, 2)},\n`;
  }
  if (jurisdictions) {
    entry += `  jurisdictions: ${serialize(jurisdictions, 2)},\n`;
  }
  entry += "};\n";

  const entryPath = path.join(entriesDir, `${g.slug}.ts`);
  fs.writeFileSync(entryPath, entry);
  imports.push(`import { ${exportName} } from "./entries/${g.slug}";`);
  arrayItems.push(`  ${exportName},`);
}

const indexSource = `${imports.join("\n")}

export const guides = [
${arrayItems.join("\n")}
];
`;

fs.writeFileSync("content/guides/index.ts", indexSource);
console.log("Written", guides.length, "guide entries");
