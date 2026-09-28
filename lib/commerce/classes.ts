/**
 * The common U.S. three-class framework used by many state statutes.
 * This is reference context for research pages, not a claim that every
 * jurisdiction — including Washington DC — uses these labels.
 */
export const EBIKE_CLASS_REFERENCE = [
  {
    id: "class-1",
    name: "Class 1",
    assist: "Pedal assist only",
    cutoff: "20 mph",
    note: "Usually the closest match to ordinary bicycle access where a three-class law applies.",
  },
  {
    id: "class-2",
    name: "Class 2",
    assist: "Throttle allowed",
    cutoff: "20 mph",
    note: "Same speed cap as Class 1, but throttle-only propulsion is restricted on some paths.",
  },
  {
    id: "class-3",
    name: "Class 3",
    assist: "Pedal assist only",
    cutoff: "28 mph",
    note: "Often limited on shared-use paths and paired with helmet or age rules.",
  },
] as const;

export type ClassReferenceId = (typeof EBIKE_CLASS_REFERENCE)[number]["id"];
