import fs from "node:fs";
import path from "node:path";
import { guides } from "../content/guides/index";

const root = process.cwd();
const entriesDir = path.join(root, "content/guides/entries");
fs.mkdirSync(entriesDir, { recursive: true });

function slugToExportName(slug: string): string {
  return slug
    .split("-")
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join("");
}

function escapeString(value: string): string {
  return JSON.stringify(value);
}

function formatSection(section: (typeof guides)[0]["sections"][0], indent: string): string {
  const inner = `${indent}  `;
  const lines: string[] = [
    `${indent}{`,
    `${inner}id: ${escapeString(section.id)},`,
    `${inner}heading: ${escapeString(section.heading)},`,
    `${inner}paragraphs: [`,
    ...section.paragraphs.map((p) => `${inner}  ${escapeString(p)},`),
    `${inner}],`,
  ];
  if (section.listItems?.length) {
    lines.push(`${inner}listItems: [`);
    lines.push(...section.listItems.map((item) => `${inner}  ${escapeString(item)},`));
    lines.push(`${inner}],`);
  }
  lines.push(`${indent}},`);
  return lines.join("\n");
}

function formatGuide(guide: (typeof guides)[number], exportName: string): string {
  const lines: string[] = [
    `import type { Guide } from "@/types/guide";`,
    `import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";`,
    ``,
    `export const ${exportName}: Guide = {`,
    `  ...EDITORIAL_DEFAULTS,`,
    `  id: ${escapeString(guide.id)},`,
    `  title: ${escapeString(guide.title)},`,
    `  category: ${escapeString(guide.category)},`,
    `  description: ${escapeString(guide.description)},`,
    `  slug: ${escapeString(guide.slug)},`,
    `  readingTimeMinutes: ${guide.readingTimeMinutes},`,
    `  sections: [`,
    ...guide.sections.map((s) => formatSection(s, "    ")),
    `  ],`,
  ];

  if (guide.faq?.length) {
    lines.push(`  faq: [`);
    for (const item of guide.faq) {
      lines.push(`    {`);
      lines.push(`      question: ${escapeString(item.question)},`);
      lines.push(`      answer: ${escapeString(item.answer)},`);
      lines.push(`    },`);
    }
    lines.push(`  ],`);
  }

  if (guide.relatedGuides?.length) {
    lines.push(`  relatedGuides: [`);
    for (const slug of guide.relatedGuides) {
      lines.push(`    ${escapeString(slug)},`);
    }
    lines.push(`  ],`);
  }

  if (guide.relatedTrails?.length) {
    lines.push(`  relatedTrails: [`);
    for (const slug of guide.relatedTrails) {
      lines.push(`    ${escapeString(slug)},`);
    }
    lines.push(`  ],`);
  }

  if (guide.jurisdictions?.length) {
    lines.push(`  jurisdictions: [`);
    for (const j of guide.jurisdictions) {
      lines.push(`    ${escapeString(j)},`);
    }
    lines.push(`  ],`);
  }

  lines.push(`};`, ``);
  return lines.join("\n");
}

const imports: string[] = [];
const arrayItems: string[] = [];

for (const guide of guides) {
  const exportName = slugToExportName(guide.slug);
  const filePath = path.join(entriesDir, `${guide.slug}.ts`);
  fs.writeFileSync(filePath, formatGuide(guide, exportName));
  imports.push(`import { ${exportName} } from "./entries/${guide.slug}";`);
  arrayItems.push(`  ${exportName},`);
  console.log(`Wrote ${filePath}`);
}

const indexSource = `${imports.join("\n")}

export const guides = [
${arrayItems.join("\n")}
];
`;

fs.writeFileSync(path.join(root, "content/guides/index.ts"), indexSource);
console.log("Updated content/guides/index.ts");
