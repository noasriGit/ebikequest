import fs from "node:fs";
import { virginiaTrails } from "../content/trails/virginia.ts";
import { marylandTrails } from "../content/trails/maryland.ts";
import { washingtonDcTrails } from "../content/trails/washington-dc.ts";

const drafts = {
  virginia: JSON.parse(fs.readFileSync("content/_draft-trails-virginia.json", "utf8")),
  maryland: JSON.parse(fs.readFileSync("content/_draft-trails-maryland.json", "utf8")),
  washingtonDc: JSON.parse(fs.readFileSync("content/_draft-trails-dc.json", "utf8")),
};

const exports = {
  virginia: { trails: virginiaTrails, exportName: "virginiaTrails", file: "virginia.ts" },
  maryland: { trails: marylandTrails, exportName: "marylandTrails", file: "maryland.ts" },
  washingtonDc: {
    trails: washingtonDcTrails,
    exportName: "washingtonDcTrails",
    file: "washington-dc.ts",
  },
};

function serialize(value, indent = 2) {
  const pad = " ".repeat(indent);
  const padIn = " ".repeat(indent + 2);
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean" || typeof value === "number") return String(value);
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

function mergeTrail(existing, draft) {
  const merged = {
    ...existing,
    description: draft.description,
    updatedAt: "2026-06-18",
    sections: draft.sections,
    faq: draft.faq,
    highlights: draft.highlights,
    accessPoints: draft.accessPoints,
    seasonalNotes: draft.seasonalNotes,
    relatedGuideSlugs: draft.relatedGuideSlugs ?? existing.relatedGuideSlugs,
    ebikePolicy: {
      ...existing.ebikePolicy,
      lastVerified: "2026-06-18",
    },
  };
  return merged;
}

for (const [key, cfg] of Object.entries(exports)) {
  const draftList = drafts[key];
  const bySlug = Object.fromEntries(draftList.map((d) => [d.slug, d]));
  const merged = cfg.trails.map((trail) => {
    const draft = bySlug[trail.slug];
    if (!draft) throw new Error(`Missing draft for ${trail.slug}`);
    return mergeTrail(trail, draft);
  });

  let out = `import type { Trail } from "@/types/trail";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";
import { trailCoverImages } from "../images/trail-covers";

export const ${cfg.exportName}: Trail[] = [
`;

  for (const trail of merged) {
    out += `  {\n`;
    out += `    id: ${JSON.stringify(trail.id)},\n`;
    out += `    slug: ${JSON.stringify(trail.slug)},\n`;
    out += `    title: ${JSON.stringify(trail.title)},\n`;
    out += `    description: ${JSON.stringify(trail.description)},\n`;
    out += `    ...EDITORIAL_DEFAULTS,\n`;
    if (trail.updatedAt !== "2026-06-01") {
      out += `    updatedAt: "${trail.updatedAt}",\n`;
    }
    out += `    jurisdiction: ${JSON.stringify(trail.jurisdiction)},\n`;
    out += `    location: ${serialize(trail.location, 4)},\n`;
    out += `    stats: ${serialize(trail.stats, 4)},\n`;
    out += `    ebikePolicy: ${serialize(trail.ebikePolicy, 4)},\n`;
    if (trail.amenities?.length) out += `    amenities: ${serialize(trail.amenities, 4)},\n`;
    if (trail.tags?.length) out += `    tags: ${serialize(trail.tags, 4)},\n`;
    out += `    relatedGuideSlugs: ${serialize(trail.relatedGuideSlugs ?? [], 4)},\n`;
    out += `    images: [trailCoverImages[${JSON.stringify(trail.slug)}]],\n`;
    out += `    sections: ${serialize(trail.sections, 4)},\n`;
    out += `    faq: ${serialize(trail.faq, 4)},\n`;
    out += `    highlights: ${serialize(trail.highlights, 4)},\n`;
    out += `    accessPoints: ${serialize(trail.accessPoints, 4)},\n`;
    out += `    seasonalNotes: ${JSON.stringify(trail.seasonalNotes)},\n`;
    out += `  },\n`;
  }

  out += `];\n`;
  fs.writeFileSync(`content/trails/${cfg.file}`, out);
  console.log(`Written ${cfg.file} (${merged.length} trails)`);
}
