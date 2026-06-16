import type { Trail } from "@/types/trail";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

export const virginiaTrails: Trail[] = [
  {
    id: "trail-va-w-and-o",
    slug: "washington-and-old-dominion-trail",
    title: "Washington & Old Dominion Trail",
    description:
      "Popular paved rail-trail through Northern Virginia with long e-bike-friendly segments and multiple access points.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Northern Virginia",
      coordinates: { lat: 38.9462, lng: -77.3861 },
      address: "Purcellville, VA",
    },
    stats: {
      distanceMiles: 45,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 180,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes:
        "E-bikes are permitted on the W&OD Trail under Virginia state law and NOVA Parks trail policies for motorized bicycles that meet statutory definitions.",
      sourceUrl: "https://www.novaparks.com/parks/washington-and-old-dominion-railroad-regional-park",
      lastVerified: "2026-05-15",
    },
    amenities: ["restrooms", "parking", "water"],
    tags: ["rail-trail", "paved", "family-friendly"],
    relatedGuideSlugs: ["ebike-classes-explained", "mid-atlantic-trail-etiquette"],
    images: [
      {
        src: "/images/trails/virginia/washington-and-old-dominion-trail/cover.svg",
        alt: "Washington and Old Dominion Trail near Purcellville, Virginia",
      },
    ],
  },
  {
    id: "trail-va-mount-vernon",
    slug: "mount-vernon-trail",
    title: "Mount Vernon Trail",
    description:
      "Scenic paved trail along the Potomac River connecting Alexandria to Mount Vernon.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-05-20",
    jurisdiction: "virginia",
    location: {
      name: "Alexandria to Mount Vernon",
      coordinates: { lat: 38.7928, lng: -77.0589 },
    },
    stats: {
      distanceMiles: 18,
      difficulty: "moderate",
      surface: ["paved"],
      estimatedTimeMinutes: 90,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2"],
      notes:
        "Class 1 and Class 2 e-bikes are generally permitted on the Mount Vernon Trail; verify current NPS and local posted rules before riding.",
      lastVerified: "2026-05-10",
    },
    amenities: ["scenic views", "parking"],
    tags: ["riverfront", "paved"],
  },
  {
    id: "trail-va-powhatan",
    slug: "powhatan-state-park-trails",
    title: "Powhatan State Park Trails",
    description:
      "Mixed-surface park trails along the James River with varying e-bike access by trail segment.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Powhatan State Park",
      coordinates: { lat: 37.652, lng: -77.919 },
      address: "4616 Powhatan State Park Rd, Powhatan, VA",
    },
    stats: {
      distanceMiles: 12,
      elevationFeet: 400,
      difficulty: "moderate",
      surface: ["mixed", "gravel"],
      estimatedTimeMinutes: 75,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes:
        "Class 1 e-bikes may be allowed on select multi-use trails; Class 2 and 3 restrictions may apply on natural surface trails.",
      lastVerified: "2026-04-28",
    },
    tags: ["state-park", "mixed-surface"],
  },
  {
    id: "trail-va-high-bridge",
    slug: "high-bridge-trail",
    title: "High Bridge Trail State Park",
    description:
      "Converted rail corridor featuring the iconic High Bridge with long paved riding suitable for e-bikes.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Farmville area",
      coordinates: { lat: 37.263, lng: -78.388 },
    },
    stats: {
      distanceMiles: 31,
      difficulty: "easy",
      surface: ["crushed stone", "paved"],
      estimatedTimeMinutes: 150,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "Motorized bicycles meeting Virginia e-bike definitions are permitted on the High Bridge Trail.",
      lastVerified: "2026-05-01",
    },
    tags: ["rail-trail", "scenic"],
  },
  {
    id: "trail-va-new-river",
    slug: "new-river-trail-state-park",
    title: "New River Trail State Park",
    description:
      "One of Virginia's premier rail-trails with 57 miles of crushed limestone along the New River.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Southwestern Virginia",
      coordinates: { lat: 36.905, lng: -80.865 },
    },
    stats: {
      distanceMiles: 57,
      difficulty: "moderate",
      surface: ["crushed stone"],
      estimatedTimeMinutes: 300,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2", "class3"],
      notes: "E-bikes meeting Virginia statutory definitions are allowed on the New River Trail.",
      lastVerified: "2026-05-05",
    },
    tags: ["rail-trail", "long-distance"],
  },
  {
    id: "trail-va-belle-isle",
    slug: "james-river-park-belle-isle",
    title: "James River Park – Belle Isle Area",
    description:
      "Urban riverfront trails in Richmond with mixed e-bike policy depending on trail type.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Richmond, VA",
      coordinates: { lat: 37.531, lng: -77.453 },
    },
    stats: {
      distanceMiles: 5,
      difficulty: "moderate",
      surface: ["mixed"],
      estimatedTimeMinutes: 45,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes:
        "E-bike access varies by trail segment within James River Park; natural surface trails may restrict throttle-assist bikes.",
      lastVerified: "2026-04-20",
    },
    tags: ["urban", "riverfront"],
  },
  {
    id: "trail-va-skyline-drive-buffer",
    slug: "shenandoah-valley-rail-trail",
    title: "Shenandoah Valley Rail Trail",
    description:
      "Developing valley rail-trail corridor with growing e-bike access on completed paved sections.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Shenandoah Valley",
      coordinates: { lat: 38.45, lng: -78.87 },
    },
    stats: {
      distanceMiles: 8,
      difficulty: "easy",
      surface: ["paved"],
      estimatedTimeMinutes: 40,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1", "class2"],
      notes: "Completed paved segments allow e-bikes per Virginia law; check segment-specific signage.",
      lastVerified: "2026-05-12",
    },
    tags: ["rail-trail", "valley"],
  },
  {
    id: "trail-va-cape-henry",
    slug: "first-landing-state-park-trails",
    title: "First Landing State Park Trails",
    description:
      "Coastal forest and boardwalk trails near Virginia Beach with selective e-bike access.",
    ...EDITORIAL_DEFAULTS,
    jurisdiction: "virginia",
    location: {
      name: "Virginia Beach, VA",
      coordinates: { lat: 36.918, lng: -76.051 },
    },
    stats: {
      distanceMiles: 6,
      difficulty: "easy",
      surface: ["mixed", "boardwalk"],
      estimatedTimeMinutes: 50,
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: ["class1"],
      notes: "E-bikes may be restricted on boardwalk and narrow natural trails; paved park roads may allow broader access.",
      lastVerified: "2026-04-15",
    },
    tags: ["coastal", "state-park"],
  },
];
