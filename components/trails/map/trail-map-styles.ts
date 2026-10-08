export const TRAIL_MAP_LAYER_IDS = {
  lines: "trail-lines",
  linesFocus: "trail-lines-focus",
  linesMuted: "trail-lines-muted",
} as const;

export const TRAIL_MAP_COLORS = {
  lineDefault: "#2c2a26",
  lineMuted: "#2c2a2680",
  lineFocus: "#c6e23a",
  lineHover: "#1c1b17",
  markerDefault: "#2c2a26",
  markerFocus: "#c6e23a",
} as const;

export const TRAIL_MAP_LINE_WIDTH = {
  default: 3,
  focus: 5,
  muted: 2,
} as const;
