import type { Guide, GuideSection } from "@/types/guide";
import { Clock } from "lucide-react";
import { getGuideImage } from "@/config/images";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/design-system/Card/Card";
import { ContentImage } from "@/components/content/ContentImage";
import { GUIDE_CATEGORY_LABELS } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

const CATEGORY_ACCENTS: Record<string, string> = {
  "getting-started": "border-l-brand-accent",
  "local-riding": "border-l-brand",
  maintenance: "border-l-semantic-allow",
  regulations: "border-l-semantic-restrict",
  "riding-skills": "border-l-brand",
  "buying-guide": "border-l-brand-accent",
};

export function GuideCard({
  guide,
  featured,
  large,
}: {
  guide: Guide;
  featured?: boolean;
  large?: boolean;
}) {
  const accent = CATEGORY_ACCENTS[guide.category] ?? "border-l-brand";
  const coverImage = getGuideImage(guide.category);

  return (
    <Card
      href={`/guides/${guide.slug}`}
      photo
      className={cn("h-full", featured && "border-l-[3px]", accent)}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-surface-sunken",
          large ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
      >
        <ContentImage
          src={coverImage}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.35)] to-transparent" />
        <div className="absolute left-3 top-3">
          <Badge variant="editorial">{GUIDE_CATEGORY_LABELS[guide.category]}</Badge>
        </div>
      </div>
      <CardContent className={cn(large && "!pt-6")}>
        <h3 className={cn("text-text-primary", large ? "text-display-lg" : "text-heading-md")}>
          {guide.title}
        </h3>
        <p
          className={cn(
            "mt-2 text-text-secondary",
            large ? "line-clamp-3 text-body-md" : "line-clamp-2 text-body-sm",
          )}
        >
          {guide.description}
        </p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-text-muted">
          <Clock size={14} strokeWidth={1.5} />
          {guide.readingTimeMinutes} min read
        </p>
      </CardContent>
    </Card>
  );
}

export function GuideSectionRenderer({
  sections,
}: {
  sections: GuideSection[];
}) {
  return (
    <div className="prose-editorial space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-heading-editorial">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 30)} className="mt-4 text-body-md text-text-secondary">
              {p}
            </p>
          ))}
          {section.listItems?.length ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
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

export function GuideToc({ sections }: { sections: GuideSection[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken p-5 lg:sticky lg:top-20"
    >
      <p className="text-kicker mb-4">On this page</p>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-sm link-editorial">
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
