import Link from "next/link";
import type { SitemapSection } from "@/lib/sitemap/types";
import { SitemapEntryList } from "./SitemapEntryList";

export function SitemapSectionBlock({ section }: { section: SitemapSection }) {
  return (
    <section aria-labelledby={`sitemap-${section.id}`} className="scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id={`sitemap-${section.id}`} className="text-heading-editorial text-text-primary">
          {section.title}
        </h2>
        {section.hubPath ? (
          <Link href={section.hubPath} className="text-sm link-editorial">
            View {section.title.toLowerCase()} hub
          </Link>
        ) : null}
      </div>
      {section.description ? (
        <p className="mt-2 max-w-3xl text-body-sm text-text-secondary">{section.description}</p>
      ) : null}

      {section.entries?.length ? (
        <div className="mt-6">
          <SitemapEntryList
            entries={section.entries}
            showMeta={section.id === "recent"}
          />
        </div>
      ) : null}

      {section.subsections?.length ? (
        <div className="mt-8 space-y-8">
          {section.subsections.map((subsection) => (
            <div key={subsection.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-display text-text-primary">{subsection.title}</h3>
                {subsection.hubPath ? (
                  <Link href={subsection.hubPath} className="text-sm link-editorial">
                    {subsection.title} hub
                  </Link>
                ) : null}
              </div>
              <div className="mt-4">
                <SitemapEntryList entries={subsection.entries} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
