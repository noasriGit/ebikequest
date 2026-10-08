import Link from "next/link";
import { EditorialImage } from "@/components/editorial/frames";
import { editorialImageAt } from "@/config/editorial-images";
import type { Guide, GuideSection } from "@/types/guide";
import { Clock } from "lucide-react";
import { getGuideImage } from "@/config/images";
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
  const href = `/guides/${guide.slug}`;

  return (
    <article className={cn("group relative flex h-full flex-col border-t border-[color-mix(in_srgb,var(--text-primary)_16%,transparent)]", featured && "border-t-2 border-t-brand-accent", accent)}>
      <div className={cn("editorial-media relative bg-surface-ink", large ? "aspect-[16/9]" : "aspect-[4/5]")}>
        <ContentImage
          src={coverImage}
          alt=""
          fill
          preset="cardGrid"
          className="object-cover"
        />
      </div>
      <div className="relative py-5">
        <p className="text-meta text-text-muted">{GUIDE_CATEGORY_LABELS[guide.category]}</p>
        <h3 className={cn("mt-2 text-text-primary", large ? "text-display-lg" : "font-display text-4xl uppercase leading-[0.9]")}>
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {guide.title}
          </Link>
        </h3>
        <p className={cn("mt-3 font-reading text-text-secondary", large ? "line-clamp-3" : "line-clamp-2 text-body-sm")}>
          {guide.description}
        </p>
        <p className="mt-4 flex items-center gap-1.5 text-meta text-text-muted">
          <Clock size={14} strokeWidth={1.5} aria-hidden />
          {guide.readingTimeMinutes} min read
        </p>
      </div>
    </article>
  );
}

export function GuideSectionRenderer({
  sections,
}: {
  sections: GuideSection[];
}) {
  return (
    <div>
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] py-10">
          <div className="prose-editorial">
            <h2 className="text-heading-editorial">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
            {section.listItems?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
                {section.listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
          {index % 3 === 2 ? (
            <EditorialImage {...editorialImageAt(index)} className="mt-8 max-w-3xl" />
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
