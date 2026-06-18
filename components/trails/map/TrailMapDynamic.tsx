"use client";

import dynamic from "next/dynamic";
import type { TrailMapMode } from "./TrailMap";
import type { TrailMapFeature } from "@/lib/maps/trail-map-utils";

const TrailMap = dynamic(() => import("./TrailMap").then((mod) => mod.TrailMap), {
  ssr: false,
  loading: () => (
    <div
      className="animate-pulse rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken"
      style={{ height: 480 }}
      aria-hidden
    />
  ),
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
