import Link from "next/link";
import type { Guide } from "@/types/guide";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GUIDE_CATEGORY_LABELS } from "@/lib/content";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Card href={`/guides/${guide.slug}`}>
      <Badge>{GUIDE_CATEGORY_LABELS[guide.category]}</Badge>
      <h3 className="mt-3 text-lg font-semibold text-zinc-900">{guide.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{guide.description}</p>
      <p className="mt-4 text-sm text-zinc-500">{guide.readingTimeMinutes} min read</p>
    </Card>
  );
}

export function GuideSectionRenderer({
  sections,
}: {
  sections: Guide["sections"];
}) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-2xl font-semibold text-zinc-900">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 30)} className="mt-4 text-zinc-600">
              {p}
            </p>
          ))}
          {section.listItems?.length ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
              {section.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function GuideToc({ sections }: { sections: Guide["sections"] }) {
  return (
    <nav aria-label="Table of contents" className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-sm font-semibold text-zinc-900">On this page</p>
      <ul className="mt-3 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link href={`#${section.id}`} className="text-sm text-emerald-700 hover:underline">
              {section.heading}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
