"use client";

import dynamic from "next/dynamic";
import type { TrailMapMode } from "./TrailMap";
import type { TrailMapFeature } from "@/lib/maps/trail-map-utils";

function MapLoadingState({ height }: { height: number | string }) {
  return (
    <div
      className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)]"
      role="status"
      aria-live="polite"
      aria-label="Loading trail map"
    >
      <div
        className="animate-pulse rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken"
        style={{ height }}
        aria-hidden
      />
      <div
        className="hidden max-h-[var(--trail-list-height)] animate-pulse rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken lg:block"
        style={{ "--trail-list-height": typeof height === "number" ? `${height}px` : height } as React.CSSProperties}
        aria-hidden
      />
      <span className="sr-only">Loading trail map…</span>
    </div>
  );
}

const TrailMap = dynamic(() => import("./TrailMap").then((mod) => mod.TrailMap), {
  ssr: false,
  loading: () => <MapLoadingState height={480} />,
});

interface TrailMapDynamicProps {
  trails: TrailMapFeature[];
  mode?: TrailMapMode;
  focusedTrailId?: string;
  height?: number | string;
  className?: string;
}

export function TrailMapDynamic({
  trails,
  mode = "explore",
  focusedTrailId,
  height = 480,
  className,
}: TrailMapDynamicProps) {
  return (
    <TrailMap
      trails={trails}
      mode={mode}
      focusedTrailId={focusedTrailId}
      height={height}
      className={className}
    />
  );
}
