"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { Map as MapboxMap } from "mapbox-gl";
import Link from "next/link";
import Map, { Layer, Marker, Source } from "react-map-gl/mapbox";
import type { MapMouseEvent, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  buildTrailFeatureCollection,
  DMV_DEFAULT_BOUNDS,
  getCombinedBounds,
  getTrailBounds,
  type TrailMapFeature,
} from "@/lib/maps/trail-map-utils";
import { TrailMapControls } from "./TrailMapControls";
import { TrailMapPopup } from "./TrailMapPopup";
import { TrailMapTrailList } from "./TrailMapTrailList";
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

function configureMapCanvas(map: MapboxMap) {
  const canvas = map.getCanvas();
  canvas.setAttribute("tabindex", "0");
  canvas.setAttribute(
    "aria-label",
    "Trail map canvas. Tab to focus, then use arrow keys to pan and plus or minus keys to zoom.",
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
  const regionId = useId();
  const instructionsId = `${regionId}-instructions`;
  const listLabelId = `${regionId}-list-label`;
  const listId = `${regionId}-list`;

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

  const selectTrail = useCallback((trail: TrailMapFeature) => {
    setSelectedTrailId(trail.id);
    if (mapRef.current) {
      fitTrailBounds(mapRef.current, getTrailBounds(trail.geometry), 80);
    }
  }, []);

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

      const trail = trails.find((item) => item.id === trailId);
      if (trail) selectTrail(trail);
    },
    [trails, selectTrail],
  );

  const handleMarkerClick = useCallback(
    (trail: TrailMapFeature) => {
      selectTrail(trail);
    },
    [selectTrail],
  );

  const handleMapLoad = useCallback(() => {
    setMapLoaded(true);
    if (mapRef.current) {
      configureMapCanvas(mapRef.current.getMap());
    }
  }, []);

  if (!MAPBOX_TOKEN) {
    return (
      <div
        className={`flex items-center justify-center rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken px-6 text-center text-sm text-text-secondary ${className ?? ""}`}
        style={{ height }}
        role="status"
      >
        Interactive map unavailable. Set{" "}
        <code className="mx-1 text-text-primary">NEXT_PUBLIC_MAPBOX_TOKEN</code> in{" "}
        <code className="text-text-primary">.env.local</code>. Use the{" "}
        <Link href="/trails" className="link-editorial">
          trails directory
        </Link>{" "}
        to browse routes.
      </div>
    );
  }

  const interactiveLayerIds =
    mode === "focus"
      ? [TRAIL_MAP_LAYER_IDS.linesFocus, TRAIL_MAP_LAYER_IDS.linesMuted]
      : [TRAIL_MAP_LAYER_IDS.lines];

  const regionLabel =
    mode === "focus" && focusedTrail
      ? `Trail map for ${focusedTrail.title}`
      : "Interactive trail map";

  return (
    <div className={className}>
      <p id={instructionsId} className="sr-only">
        {mode === "explore"
          ? "Use the trail list or map markers to select a trail. Zoom controls are available on the map. Tab to the map canvas to pan with arrow keys and zoom with plus or minus keys."
          : `Map showing the route for ${focusedTrail?.title ?? "this trail"}. Use zoom controls or tab to the map canvas and use arrow keys to pan.`}
      </p>

      <div
        className={
          mode === "explore"
            ? "grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)]"
            : undefined
        }
      >
        <div
          className="relative overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] shadow-[var(--shadow-xs)]"
          style={{ height }}
          role="region"
          aria-label={regionLabel}
          aria-describedby={instructionsId}
        >
          {!mapLoaded ? (
            <div
              className="absolute inset-0 z-20 flex items-center justify-center bg-surface-sunken"
              role="status"
              aria-live="polite"
            >
              <span className="text-sm text-text-secondary">Loading trail map…</span>
            </div>
          ) : null}

          <TrailMapControls
            mapRef={mapRef}
            mapLoaded={mapLoaded}
            mode={mode}
            trails={trails}
            focusedTrail={focusedTrail}
          />

          <Map
            ref={mapRef}
            mapboxAccessToken={MAPBOX_TOKEN}
            initialViewState={initialView}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
            style={{ width: "100%", height: "100%" }}
            onLoad={handleMapLoad}
            onClick={handleMapClick}
            interactiveLayerIds={interactiveLayerIds}
            cursor="pointer"
            attributionControl
            reuseMaps
            keyboard
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
                    aria-label={`Select ${trail.title}`}
                    aria-pressed={isSelected || isFocused}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
                  >
                    <span
                      aria-hidden
                      className="h-3.5 w-3.5 rounded-full border-2 border-white shadow-md"
                      style={{
                        backgroundColor:
                          isSelected || isFocused
                            ? TRAIL_MAP_COLORS.markerFocus
                            : TRAIL_MAP_COLORS.markerDefault,
                      }}
                    />
                  </button>
                </Marker>
              );
            })}
          </Map>

          {selectedTrail && mode === "explore" ? (
            <div className="pointer-events-none absolute bottom-4 left-4 z-10 max-w-[calc(100%-2rem)]">
              <TrailMapPopup trail={selectedTrail} onClose={() => setSelectedTrailId(null)} />
            </div>
          ) : null}

          {mode === "focus" && focusedTrail ? (
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 sm:left-auto sm:right-3 sm:w-72">
              <TrailMapPopup trail={focusedTrail} />
            </div>
          ) : null}

          <p className="pointer-events-none absolute bottom-1 right-2 z-10 rounded bg-white/80 px-1.5 py-0.5 text-[10px] text-text-muted">
            Trail data ©{" "}
            <ExternalLink
              href="https://www.openstreetmap.org/copyright"
              className="pointer-events-auto underline"
            >
              OpenStreetMap
            </ExternalLink>
          </p>
        </div>

        {mode === "explore" ? (
          <TrailMapTrailList
            trails={trails}
            selectedTrailId={selectedTrailId}
            onSelect={selectTrail}
            listId={listId}
            labelId={listLabelId}
            mapHeight={height}
          />
        ) : null}
      </div>
    </div>
  );
}
