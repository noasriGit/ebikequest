import Link from "next/link";
import type { SitemapEntry } from "@/lib/sitemap/types";

function formatPublishedDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

function contentTypeLabel(contentType: SitemapEntry["contentType"]): string {
  switch (contentType) {
    case "trail":
      return "Trail";
    case "guide":
      return "Guide";
    case "law":
      return "Law";
    case "hub":
      return "Hub";
    case "home":
      return "Home";
    default:
      return "Page";
  }
}

export function SitemapEntryList({
  entries,
  showMeta = false,
}: {
  entries: SitemapEntry[];
  showMeta?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {entries.map((entry) => (
        <li key={entry.id}>
          <Link href={entry.path} className="group block rounded-[var(--radius-sm)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            <span className="font-medium text-text-primary group-hover:text-brand">
              {entry.title}
            </span>
            {showMeta && entry.publishedAt ? (
              <span className="ml-2 text-sm text-text-muted">
                {formatPublishedDate(entry.publishedAt)}
              </span>
            ) : null}
          </Link>
          {entry.description ? (
            <p className="mt-1 text-sm text-text-secondary">{entry.description}</p>
          ) : null}
          {showMeta && (entry.category || entry.contentType) ? (
            <p className="mt-1 text-xs text-text-muted">
              {[contentTypeLabel(entry.contentType), entry.category].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
