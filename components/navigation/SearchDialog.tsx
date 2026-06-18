"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useHeaderChrome } from "@/components/layout/HeaderChromeContext";
import type { SearchDocument } from "@/types/content";
import {
  getSearchResultHref,
  getSearchResultLabel,
  searchDocuments,
} from "@/lib/search/index";
import { cn } from "@/lib/utils/cn";

interface SearchDialogProps {
  documents: SearchDocument[];
}

export function SearchDialog({ documents }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { overlay } = useHeaderChrome();

  const results = useMemo(() => searchDocuments(documents, query), [documents, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "hidden items-center gap-2 rounded-[var(--radius-md)] border px-3 py-1.5 text-sm transition duration-300 md:inline-flex",
          overlay
            ? "header-search-btn"
            : "border-[color-mix(in_srgb,var(--text-muted)_25%,transparent)] bg-surface-raised text-text-muted hover:border-brand hover:text-brand",
        )}
        aria-label="Search site"
      >
        <Search size={16} strokeWidth={1.5} />
        <span>Search</span>
        <kbd
          className={cn(
            "ml-2 rounded px-1.5 py-0.5 font-mono text-[10px]",
            overlay ? "header-search-kbd" : "bg-surface-sunken text-text-muted",
          )}
        >
          ⌘K
        </kbd>
      </button>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "rounded-[var(--radius-md)] p-2 transition duration-300 md:hidden",
          overlay ? "header-icon-btn" : "text-text-secondary hover:bg-surface-sunken",
        )}
        aria-label="Search site"
      >
        <Search size={20} strokeWidth={1.5} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[15vh]">
          <button
            type="button"
            className="absolute inset-0 bg-[rgba(26,25,23,0.4)] backdrop-blur-sm"
            aria-label="Close search"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[var(--radius-lg)] border border-[color-mix(in_srgb,var(--text-muted)_20%,transparent)] bg-surface-raised shadow-[var(--shadow-md)]"
          >
            <div className="flex items-center gap-3 border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] px-4">
              <Search size={18} className="shrink-0 text-text-muted" strokeWidth={1.5} />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search trails, guides, laws…"
                className="flex-1 border-0 bg-transparent py-4 text-body-md text-text-primary outline-none placeholder:text-text-muted"
              />
              <button
                type="button"
                onClick={close}
                className="rounded-[var(--radius-sm)] p-1.5 text-text-muted hover:bg-surface-sunken"
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-text-muted">
                  {query ? "No results found." : "Start typing to search…"}
                </li>
              ) : (
                results.map((doc) => (
                  <li key={`${doc.entityType}-${doc.id}`}>
                    <Link
                      href={getSearchResultHref(doc)}
                      onClick={close}
                      className="flex flex-col gap-0.5 px-4 py-3 transition hover:bg-surface-sunken"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-label text-brand">{getSearchResultLabel(doc.entityType)}</span>
                        <span className="font-medium text-text-primary">{doc.title}</span>
                      </span>
                      <span className="line-clamp-1 text-sm text-text-muted">{doc.description}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function SearchDialogTrigger({ className }: { className?: string }) {
  return (
    <span className={cn("sr-only", className)} aria-hidden>
      Search
    </span>
  );
}
