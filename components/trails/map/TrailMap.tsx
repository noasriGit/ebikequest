"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, { Layer, Marker, Source } from "react-map-gl/mapbox";
import type { MapMouseEvent, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  buildTrailFeatureCollection,
  DMV_DEFAULT_BOUNDS,
  getCombinedBounds,
  getTrailBounds,
  type TrailMapFeature,
} from "@/lib/maps/trail-map-utils";
import { TrailMapPopup } from "./TrailMapPopup";
import {
  TRAIL_MAP_COLORS,
  TRAIL_MAP_LAYER_IDS,
  TRAIL_MAP_LINE_WIDTH,
} from "./trail-map-styles";

export type TrailMapMode = "explore" | "focus";

interface TrailMapProps {
  trails: TrailMapFeature[];
  mode?: TrailMapMode;
  focusedTrailId?: string;
  height?: number | string;
  className?: string;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

function fitTrailBounds(
  map: MapRef,
  bounds: ReturnType<typeof getTrailBounds>,
  padding = 60,
) {
  map.fitBounds(
    [
      [bounds[0], bounds[1]],
      [bounds[2], bounds[3]],
    ],
    { padding, duration: 1200 },
  );
}

export function TrailMap({
  trails,
  mode = "explore",
  focusedTrailId,
  height = 480,
  className,
}: TrailMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [selectedTrailId, setSelectedTrailId] = useState<string | null>(
    mode === "focus" ? (focusedTrailId ?? null) : null,
  );
  const [mapLoaded, setMapLoaded] = useState(false);

  const featureCollection = useMemo(
    () => buildTrailFeatureCollection(trails),
    [trails],
  );

  const selectedTrail = useMemo(
    () => trails.find((trail) => trail.id === selectedTrailId) ?? null,
    [trails, selectedTrailId],
  );

  const focusedTrail = useMemo(
    () => trails.find((trail) => trail.id === focusedTrailId) ?? null,
    [trails, focusedTrailId],
  );

  const initialView = useMemo(() => {
    if (mode === "focus" && focusedTrail) {
      const center = focusedTrail.center;
      return {
        longitude: center.lng,
        latitude: center.lat,
        zoom: 11,
      };
    }

    const bounds = getCombinedBounds(trails);
    const center = {
      lng: (bounds[0] + bounds[2]) / 2,
      lat: (bounds[1] + bounds[3]) / 2,
    };

    return {
      longitude: center.lng,
      latitude: center.lat,
      zoom: 7,
    };
  }, [mode, focusedTrail, trails]);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    if (mode === "focus" && focusedTrail) {
      fitTrailBounds(mapRef.current, getTrailBounds(focusedTrail.geometry), 40);
      return;
    }

    if (mode === "explore") {
      const bounds = trails.length ? getCombinedBounds(trails) : DMV_DEFAULT_BOUNDS;
      fitTrailBounds(mapRef.current, bounds, 80);
    }
  }, [mapLoaded, mode, focusedTrail, trails]);

  useEffect(() => {
    if (mode === "focus" && focusedTrailId) {
      setSelectedTrailId(focusedTrailId);
    }
  }, [mode, focusedTrailId]);

  const handleMapClick = useCallback(
    (event: MapMouseEvent) => {
      const feature = event.features?.[0];
      const trailId = feature?.properties?.id;
      if (!trailId || typeof trailId !== "string") return;

      setSelectedTrailId(trailId);
      const trail = trails.find((item) => item.id === trailId);
      if (trail && mapRef.current) {
        fitTrailBounds(mapRef.current, getTrailBounds(trail.geometry), 80);
      }
    },
    [trails],
  );

  const handleMarkerClick = useCallback(
    (trail: TrailMapFeature) => {
      setSelectedTrailId(trail.id);
      if (mapRef.current) {
        fitTrailBounds(mapRef.current, getTrailBounds(trail.geometry), 80);
      }
    },
    [],
  );

  if (!MAPBOX_TOKEN) {
    return (
      <div
        className={`flex items-center justify-center rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken px-6 text-center text-sm text-text-secondary ${className ?? ""}`}
        style={{ height }}
      >
        Interactive map unavailable. Set{" "}
        <code className="mx-1 text-text-primary">NEXT_PUBLIC_MAPBOX_TOKEN</code> in{" "}
        <code className="text-text-primary">.env.local</code>.
      </div>
    );
  }

  const interactiveLayerIds =
    mode === "focus"
      ? [TRAIL_MAP_LAYER_IDS.linesFocus, TRAIL_MAP_LAYER_IDS.linesMuted]
      : [TRAIL_MAP_LAYER_IDS.lines];

  return (
    <div
      className={`relative overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] shadow-[var(--shadow-xs)] ${className ?? ""}`}
      style={{ height }}
    >
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={initialView}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        style={{ width: "100%", height: "100%" }}
        onLoad={() => setMapLoaded(true)}
        onClick={handleMapClick}
        interactiveLayerIds={interactiveLayerIds}
        cursor="pointer"
        attributionControl
        reuseMaps
      >
        <Source id="trails" type="geojson" data={featureCollection}>
          {mode === "focus" && focusedTrailId ? (
            <>
              <Layer
                id={TRAIL_MAP_LAYER_IDS.linesMuted}
                type="line"
                filter={["!=", ["get", "id"], focusedTrailId]}
                paint={{
                  "line-color": TRAIL_MAP_COLORS.lineMuted,
                  "line-width": TRAIL_MAP_LINE_WIDTH.muted,
                  "line-opacity": 0.7,
                }}
                layout={{
                  "line-cap": "round",
                  "line-join": "round",
                }}
              />
              <Layer
                id={TRAIL_MAP_LAYER_IDS.linesFocus}
                type="line"
                filter={["==", ["get", "id"], focusedTrailId]}
                paint={{
                  "line-color": TRAIL_MAP_COLORS.lineFocus,
                  "line-width": TRAIL_MAP_LINE_WIDTH.focus,
                }}
                layout={{
                  "line-cap": "round",
                  "line-join": "round",
                }}
              />
            </>
          ) : (
            <Layer
              id={TRAIL_MAP_LAYER_IDS.lines}
              type="line"
              paint={{
                "line-color": [
                  "case",
                  ["==", ["get", "id"], selectedTrailId ?? ""],
                  TRAIL_MAP_COLORS.lineFocus,
                  TRAIL_MAP_COLORS.lineDefault,
                ],
                "line-width": [
                  "case",
                  ["==", ["get", "id"], selectedTrailId ?? ""],
                  TRAIL_MAP_LINE_WIDTH.focus,
                  TRAIL_MAP_LINE_WIDTH.default,
                ],
              }}
              layout={{
                "line-cap": "round",
                "line-join": "round",
              }}
            />
          )}
        </Source>

        {trails.map((trail) => {
          const isSelected = trail.id === selectedTrailId;
          const isFocused = mode === "focus" && trail.id === focusedTrailId;

          if (mode === "focus" && !isFocused) return null;

          return (
            <Marker
              key={trail.id}
              longitude={trail.center.lng}
              latitude={trail.center.lat}
              anchor="center"
              onClick={(event) => {
                event.originalEvent.stopPropagation();
                handleMarkerClick(trail);
              }}
            >
              <button
                type="button"
                aria-label={`Show ${trail.title}`}
                className="h-3.5 w-3.5 rounded-full border-2 border-white shadow-md transition-transform hover:scale-125"
                style={{
                  backgroundColor: isSelected || isFocused
                    ? TRAIL_MAP_COLORS.markerFocus
                    : TRAIL_MAP_COLORS.markerDefault,
                }}
              />
            </Marker>
          );
        })}
      </Map>

      {selectedTrail && mode === "explore" ? (
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 max-w-[calc(100%-2rem)]">
          <TrailMapPopup
            trail={selectedTrail}
            onClose={() => setSelectedTrailId(null)}
          />
        </div>
      ) : null}

      {mode === "focus" && focusedTrail ? (
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 sm:left-auto sm:right-3 sm:w-72">
          <TrailMapPopup trail={focusedTrail} />
        </div>
      ) : null}
    </div>
  );
}
