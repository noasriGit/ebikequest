import type { HubPage } from "@/types/hub";

export const hubPages: HubPage[] = [
  {
    slug: "trails",
    path: "/trails",
    title: "E-Bike Trails Directory",
    description:
      "Discover e-bike-friendly trails in Virginia, Maryland, and Washington DC with verified access policies, route details, and class filters.",
    kicker: "Directory",
    intro: [
      "The Mid-Atlantic offers one of the richest networks of rail-trails, riverfront paths, and park connectors in the United States. From the 45-mile Washington & Old Dominion Trail in Northern Virginia to the Capital Crescent and C&O Canal corridors around DC, riders can cover hundreds of miles on paved and mixed-surface routes.",
      "Every trail listing on eBikeQuest documents which e-bike classes are permitted, who manages the land, and when the policy was last verified against official sources. Filter by jurisdiction, difficulty, or class to find routes that match your bike and riding style.",
      "E-bike access is never uniform: a trail that welcomes Class 1 pedal-assist bikes may restrict throttle-equipped Class 2 models or high-speed Class 3 bikes. Always confirm the specific policy for each trail before you ride.",
    ],
  },
  {
    slug: "guides",
    path: "/guides",
    title: "E-Bike Guides",
    description:
      "Reference guides for e-bike classes, trail etiquette, maintenance, buying advice, and regional riding across the Mid-Atlantic.",
    kicker: "Reference library",
    intro: [
      "Our guides are structured reference articles, not opinion blog posts. Each guide is researched against manufacturer specifications, state statutes, and land-manager publications, then reviewed by our editorial team before publication.",
      "Whether you are buying your first e-bike, learning how Class 1, 2, and 3 classifications affect trail access, or planning a ride through Virginia state parks, these guides give you actionable answers with links to primary sources.",
      "Guides cross-link to trail listings and law pages so you can move from general knowledge to jurisdiction-specific rules without searching elsewhere.",
    ],
  },
  {
    slug: "laws",
    path: "/laws",
    title: "E-Bike Laws by State (2026 Guide)",
    description:
      "Authoritative comparison of e-bike laws in Virginia, Maryland, and Washington DC. Class rules, helmets, registration, and trail access.",
    kicker: "Regulations",
    intro: [
      "E-bike law in the United States operates in layers: federal land-agency rules, state statutes defining the three-class system, and local ordinances governing sidewalks, bike lanes, and park trails. The most restrictive applicable rule usually governs where you can ride.",
      "Virginia, Maryland, and Washington DC have each adopted the national three-class framework, but they differ on age limits, helmet requirements, and how e-bikes are treated on natural-surface trails versus paved multi-use paths.",
      "Use the comparison matrix below to see how launch jurisdictions align, then open each state's page for detailed classifications, trail-access summaries, and cited statutory sources.",
    ],
  },
  {
    slug: "trails-virginia",
    path: "/trails/virginia",
    title: "E-Bike Trails in Virginia",
    description:
      "Browse verified e-bike trails across Virginia, from NOVA rail-trails to Shenandoah Valley routes and coastal state parks.",
    jurisdiction: "virginia",
    intro: [
      "Virginia combines dense Northern Virginia paved corridors with long rail-trail state parks and scenic riverfront paths. The W&OD, Mount Vernon, and New River Trail State Park are among the most popular e-bike destinations in the Mid-Atlantic.",
      "State law generally treats qualifying e-bikes as bicycles on roads and many multi-use paths, but individual land managers, including NOVA Parks, Virginia State Parks, and the National Park Service, set their own trail policies.",
      "Each listing below documents allowed e-bike classes, surface type, distance, and a link to the official policy source. Pair these trails with our Virginia e-bike law page before planning a trip.",
    ],
  },
  {
    slug: "trails-maryland",
    path: "/trails/maryland",
    title: "E-Bike Trails in Maryland",
    description:
      "Explore Maryland e-bike trails including the B&O Trail, Capital Crescent, Great Allegheny Passage, and Patapsco Valley routes.",
    jurisdiction: "maryland",
    intro: [
      "Maryland's trail network spans Baltimore County rail-trails, Montgomery County commuter paths, and the western terminus of the Great Allegheny Passage. Paved multi-use trails tend to be the most e-bike-friendly; natural-surface park trails often restrict throttle-equipped bikes.",
      "Maryland adopted the three-class e-bike framework statewide, but county park systems and the Maryland Department of Natural Resources may impose additional restrictions on specific trails.",
      "Filter listings by difficulty and e-bike class, then verify access on each trail's detail page. Our Maryland e-bike law guide explains statewide rules that apply before you hit the trail.",
    ],
  },
  {
    slug: "trails-washington-dc",
    path: "/trails/washington-dc",
    title: "E-Bike Trails in Washington DC",
    description:
      "Find e-bike-friendly trails in Washington DC, Rock Creek, Anacostia Riverwalk, C&O Canal, and National Mall connector routes.",
    jurisdiction: "washington-dc",
    intro: [
      "Washington DC packs an extraordinary amount of bike infrastructure into a compact urban footprint. Rock Creek Trail, the Anacostia Riverwalk, and C&O Canal segments connect neighborhoods to regional rail-trail networks in Maryland and Virginia.",
      "DC recognizes Class 1, 2, and 3 e-bikes on most bike lanes and trails, but National Park Service corridors and certain federal lands may apply different rules than District-managed paths.",
      "Trail listings below note which classes are permitted and link to managing agencies. Review DC e-bike regulations and NPS policies when routes cross federal park boundaries.",
    ],
  },
];

export function getHubBySlug(slug: HubPage["slug"]): HubPage | undefined {
  return hubPages.find((hub) => hub.slug === slug);
}

export function getHubByJurisdiction(
  jurisdiction: HubPage["jurisdiction"],
): HubPage | undefined {
  if (!jurisdiction) return undefined;
  return hubPages.find((hub) => hub.jurisdiction === jurisdiction);
}
