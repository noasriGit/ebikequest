import type { Trail } from "@/types/trail";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

export const marylandTrails: Trail[] = [
  {
    id: "trail-md-b-and-a",
    slug: "baltimore-and-ohio-trail",
    title: "B&A Trail",
    description:
      "Well-loved paved rail-trail connecting Annapolis and Glen Burnie, popular with e-bike commuters and recreational riders.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Anne Arundel County",
      coordinates: { lat: 39.021, lng: -76.502 },
    },
    stats: {
      distanceMiles: 13,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 60,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "E-bikes meeting Maryland statutory definitions are permitted on the B&A Trail.",
      lastVerified: "2026-05-18",
    },
    tags: ["rail-trail", "paved"],
  },
  {
    id: "trail-md-capital-crescent",
    slug: "capital-crescent-trail",
    title: "Capital Crescent Trail",
    description:
      "Heavily used paved trail from Georgetown through Bethesda into Silver Spring.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Montgomery County",
      coordinates: { lat: 38.984, lng: -77.094 },
    },
    stats: {
      distanceMiles: 11,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 55,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2"],
      notes: "Class 1 and 2 e-bikes are permitted; obey posted speed guidance on crowded segments.",
      lastVerified: "2026-05-14",
    },
    tags: ["commuter", "paved"],
  },
  {
    id: "trail-md-northeast-branch",
    slug: "northeast-branch-trail",
    title: "Northeast Branch Trail",
    description:
      "Anacostia Tributary Trail System segment connecting Prince George's County communities.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Prince George's County",
      coordinates: { lat: 38.963, lng: -76.928 },
    },
    stats: {
      distanceMiles: 7,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 35,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "E-bikes allowed on paved Anacostia Tributary trails under Maryland law.",
      lastVerified: "2026-05-08",
    },
    tags: ["paved", "suburban"],
  },
  {
    id: "trail-md-great-allegheny-passage-md",
    slug: "great-allegheny-passage-maryland",
    title: "Great Allegheny Passage (MD Section)",
    description:
      "Iconic long-distance trail segment through western Maryland with crushed-stone surface.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Western Maryland",
      coordinates: { lat: 39.653, lng: -78.762 },
    },
    stats: {
      distanceMiles: 20,
      difficulty: "moderate",
      surface: ["crushed stone"],
      estimatedTimeMinutes: 120,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "GAP allows e-bikes meeting Maryland definitions on the Maryland segment.",
      lastVerified: "2026-05-02",
    },
    tags: ["long-distance", "rail-trail"],
  },
  {
    id: "trail-md-patapsco",
    slug: "patapsco-valley-state-park-trails",
    title: "Patapsco Valley State Park Trails",
    description:
      "Extensive trail network near Baltimore with varying e-bike rules by trail designation.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Ellicott City area",
      coordinates: { lat: 39.312, lng: -76.754 },
    },
    stats: {
      distanceMiles: 15,
      elevationFeet: 800,
      difficulty: "moderate",
      surface: ["mixed"],
      estimatedTimeMinutes: 90,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes: "Class 1 e-bikes may be allowed on select multi-use trails; natural surface trails may prohibit all e-bikes.",
      lastVerified: "2026-04-25",
    },
    tags: ["state-park", "mixed-surface"],
  },
  {
    id: "trail-md-northern-central",
    slug: "northern-central-trail",
    title: "Northern Central Trail",
    description:
      "Rail-trail running north from Cockeysville with crushed stone surface through scenic countryside.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Baltimore County",
      coordinates: { lat: 39.481, lng: -76.631 },
    },
    stats: {
      distanceMiles: 20,
      difficulty: "easy",
      surface: ["crushed stone"],
      estimatedTimeMinutes: 100,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "E-bikes permitted on the NCR Trail under Maryland e-bike law.",
      lastVerified: "2026-05-06",
    },
    tags: ["rail-trail"],
  },
  {
    id: "trail-md-indian-head",
    slug: "indian-head-rail-trail",
    title: "Indian Head Rail Trail",
    description:
      "Flat paved trail in Charles County ideal for beginner e-bike riders.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Charles County",
      coordinates: { lat: 38.597, lng: -77.162 },
    },
    stats: {
      distanceMiles: 13,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 65,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "All classes of road-legal Maryland e-bikes are permitted.",
      lastVerified: "2026-05-10",
    },
    tags: ["paved", "family-friendly"],
  },
  {
    id: "trail-md-assateague",
    slug: "assateague-island-trails",
    title: "Assateague Island Trails",
    description:
      "Coastal park roads and designated paths with seasonal e-bike restrictions on some segments.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "maryland",
    location: {
      name: "Assateague Island",
      coordinates: { lat: 38.089, lng: -75.207 },
    },
    stats: {
      distanceMiles: 4,
      difficulty: "easy",
      surface: ["paved", "sand"],
      estimatedTimeMinutes: 30,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes: "E-bike access limited to designated routes; wildlife management areas may restrict motorized bicycles.",
      lastVerified: "2026-04-18",
    },
    tags: ["coastal", "national-seashore"],
  },
];
