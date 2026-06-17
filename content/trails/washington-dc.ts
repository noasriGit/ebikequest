import type { Trail } from "@/types/trail";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";
import { trailCoverImages } from "../images/trail-covers";

export const washingtonDcTrails: Trail[] = [
  {
    id: "trail-dc-c-and-o-dc",
    slug: "c-and-o-canal-towpath-dc",
    title: "C&O Canal Towpath (DC Section)",
    description:
      "Historic towpath along the Potomac starting in Georgetown with crushed-stone surface.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "washington-dc",
    location: {
      name: "Georgetown, Washington DC",
      coordinates: { lat: 38.902, lng: -77.062 },
    },
    stats: {
      distanceMiles: 4,
      difficulty: "easy",
      surface: ["crushed stone"],
      estimatedTimeMinutes: 30,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2"],
      notes: "NPS manages the towpath; e-bike policies follow federal and local guidance for the DC section.",
      lastVerified: "2026-05-16",
    },
    tags: ["historic", "riverfront"],
    images: [trailCoverImages["c-and-o-canal-towpath-dc"]],
  },
  {
    id: "trail-dc-rock-creek",
    slug: "rock-creek-trail",
    title: "Rock Creek Trail",
    description:
      "Major north-south trail through Rock Creek Park connecting downtown to Maryland.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "washington-dc",
    location: {
      name: "Rock Creek Park",
      coordinates: { lat: 38.948, lng: -77.051 },
    },
    stats: {
      distanceMiles: 8,
      difficulty: "moderate",
      surface: ["paved", "mixed"],
      estimatedTimeMinutes: 50,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes: "E-bike access on park trails is limited; paved multi-use segments may allow Class 1 e-bikes only.",
      lastVerified: "2026-05-11",
    },
    tags: ["urban", "park"],
    images: [trailCoverImages["rock-creek-trail"]],
  },
  {
    id: "trail-dc-anacostia-riverwalk",
    slug: "anacostia-riverwalk-trail",
    title: "Anacostia Riverwalk Trail",
    description:
      "Developing riverwalk connecting the Navy Yard, Nationals Park, and Anacostia communities.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "washington-dc",
    location: {
      name: "Anacostia River",
      coordinates: { lat: 38.865, lng: -76.989 },
    },
    stats: {
      distanceMiles: 12,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 60,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "Paved Riverwalk segments allow e-bikes under DC e-bike regulations.",
      lastVerified: "2026-05-20",
    },
    tags: ["riverfront", "paved", "commuter"],
    images: [trailCoverImages["anacostia-riverwalk-trail"]],
  },
  {
    id: "trail-dc-capital-crescent-dc",
    slug: "capital-crescent-trail-dc",
    title: "Capital Crescent Trail (DC Section)",
    description:
      "Georgetown waterfront segment of the Capital Crescent connecting to Maryland.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "washington-dc",
    location: {
      name: "Georgetown Waterfront",
      coordinates: { lat: 38.901, lng: -77.068 },
    },
    stats: {
      distanceMiles: 2,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 15,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2"],
      notes: "Follow DC e-bike rules and crowded-trail etiquette on the Georgetown segment.",
      lastVerified: "2026-05-14",
    },
    tags: ["paved", "commuter"],
    images: [trailCoverImages["capital-crescent-trail-dc"]],
  },
  {
    id: "trail-dc-monument-loop",
    slug: "national-mall-connector-routes",
    title: "National Mall Connector Routes",
    description:
      "Designated bike routes linking the National Mall to Potomac waterfront trails.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "washington-dc",
    location: {
      name: "National Mall area",
      coordinates: { lat: 38.889, lng: -77.023 },
    },
    stats: {
      distanceMiles: 6,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 35,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "E-bikes are permitted on DC streets and designated bike lanes; dismount in crowded pedestrian zones.",
      lastVerified: "2026-05-09",
    },
    tags: ["urban", "landmarks"],
    images: [trailCoverImages["national-mall-connector-routes"]],
  },
  {
    id: "trail-dc-fort-circle",
    slug: "fort-circle-trail-network",
    title: "Fort Circle Trail Network",
    description:
      "Linked Civil War fort sites with mixed-surface trails across eastern DC.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "washington-dc",
    location: {
      name: "East of the Anacostia",
      coordinates: { lat: 38.862, lng: -76.948 },
    },
    stats: {
      distanceMiles: 7,
      difficulty: "moderate",
      surface: ["mixed"],
      estimatedTimeMinutes: 55,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes: "Natural surface trails in NPS-managed forts may restrict throttle-assist e-bikes.",
      lastVerified: "2026-04-22",
    },
    tags: ["historic", "mixed-surface"],
    images: [trailCoverImages["fort-circle-trail-network"]],
  },
];
