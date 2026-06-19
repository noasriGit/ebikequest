"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import type { Map as MapboxMap } from "mapbox-gl";
import type { MapRef } from "react-map-gl/mapbox";
import type { TrailMapFeature } from "@/lib/maps/trail-map-utils";
import { getCombinedBounds, getTrailBounds } from "@/lib/maps/trail-map-utils";
import { cn } from "@/lib/utils/cn";

interface TrailMapControlsProps {
  mapRef: React.RefObject<MapRef | null>;
  mapLoaded: boolean;
  mode: "explore" | "focus";
  trails: TrailMapFeature[];
  focusedTrail?: TrailMapFeature | null;
  className?: string;
}

export function TrailMapControls({
  mapRef,
  mapLoaded,
  mode,
  trails,
  focusedTrail,
  className,
}: TrailMapControlsProps) {
  function withMap(action: (map: MapboxMap) => void) {
    if (!mapLoaded || !mapRef.current) return;
    action(mapRef.current.getMap());
  }

  function handleReset() {
    withMap((map) => {
      if (mode === "focus" && focusedTrail) {
        const bounds = getTrailBounds(focusedTrail.geometry);
        map.fitBounds(
          [
            [bounds[0], bounds[1]],
            [bounds[2], bounds[3]],
          ],
          { padding: 40, duration: 800 },
        );
        return;
      }

      const bounds = trails.length ? getCombinedBounds(trails) : getCombinedBounds([]);
      map.fitBounds(
        [
          [bounds[0], bounds[1]],
          [bounds[2], bounds[3]],
        ],
        { padding: 80, duration: 800 },
      );
    });
  }

  return (
    <div
      className={cn(
        "absolute left-3 top-3 z-10 flex flex-col overflow-hidden rounded-[var(--radius-sm)] border border-[color-mix(in_srgb,var(--text-muted)_20%,transparent)] bg-surface-raised shadow-[var(--shadow-xs)]",
        className,
      )}
      role="group"
      aria-label="Map zoom controls"
    >
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center text-text-secondary transition hover:bg-surface-sunken hover:text-brand"
        aria-label="Zoom in"
        onClick={() => withMap((map) => map.zoomIn({ duration: 250 }))}
      >
        <Plus size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] text-text-secondary transition hover:bg-surface-sunken hover:text-brand"
        aria-label="Zoom out"
        onClick={() => withMap((map) => map.zoomOut({ duration: 250 }))}
      >
        <Minus size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] text-text-secondary transition hover:bg-surface-sunken hover:text-brand"
        aria-label="Reset map view"
        onClick={handleReset}
      >
        <RotateCcw size={16} strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  );
}
