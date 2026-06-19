"use client";

import Link from "next/link";
import type { TrailMapFeature } from "@/lib/maps/trail-map-utils";
import { cn } from "@/lib/utils/cn";

interface TrailMapTrailListProps {
  trails: TrailMapFeature[];
  selectedTrailId: string | null;
  onSelect: (trail: TrailMapFeature) => void;
  listId: string;
  labelId: string;
}

export function TrailMapTrailList({
  trails,
  selectedTrailId,
  onSelect,
  listId,
  labelId,
}: TrailMapTrailListProps) {
  const sortedTrails = [...trails].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <nav aria-labelledby={labelId} className="flex min-h-0 flex-col">
      <p id={labelId} className="text-label text-text-primary">
        Trail list
      </p>
      <p className="mt-1 text-body-sm text-text-secondary">
        Select a trail to highlight it on the map and view quick details.
      </p>
      <ul
        id={listId}
        className="mt-3 max-h-80 flex-1 space-y-1 overflow-y-auto rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-1 lg:max-h-none lg:min-h-[480px]"
        role="listbox"
        aria-label="Trails on map"
      >
        {sortedTrails.map((trail) => {
          const selected = trail.id === selectedTrailId;

          return (
            <li key={trail.id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={selected}
                className={cn(
                  "w-full rounded-[var(--radius-sm)] px-3 py-2.5 text-left transition",
                  selected
                    ? "bg-brand-light text-text-primary ring-1 ring-[color-mix(in_srgb,var(--brand)_25%,transparent)]"
                    : "text-text-secondary hover:bg-surface-sunken hover:text-text-primary",
                )}
                onClick={() => onSelect(trail)}
              >
                <span className="block font-medium text-text-primary">{trail.title}</span>
                <span className="mt-0.5 block text-xs text-text-muted">
                  {trail.difficulty}
                  {trail.distanceMiles ? ` · ${trail.distanceMiles} mi` : ""}
                  {` · E-bikes ${trail.ebikeAllowed ? "allowed" : "restricted"}`}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-body-sm text-text-secondary">
        Prefer a full directory?{" "}
        <Link href="/trails" className="link-editorial">
          Browse all trails
        </Link>
      </p>
    </nav>
  );
}
