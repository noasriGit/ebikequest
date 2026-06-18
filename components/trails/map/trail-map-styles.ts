export const TRAIL_MAP_LAYER_IDS = {
  lines: "trail-lines",
  linesFocus: "trail-lines-focus",
  linesMuted: "trail-lines-muted",
} as const;

export const TRAIL_MAP_COLORS = {
  lineDefault: "#0f6b52",
  lineMuted: "#0f6b5280",
  lineFocus: "#c17f3a",
  lineHover: "#0a5240",
  markerDefault: "#0f6b52",
  markerFocus: "#c17f3a",
} as const;

export const TRAIL_MAP_LINE_WIDTH = {
  default: 3,
  focus: 5,
  muted: 2,
} as const;
