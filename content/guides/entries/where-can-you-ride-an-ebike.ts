import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const whereCanYouRideAnEbike: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-where-ride-ebike",
  title: "Where Can You Ride an E-Bike?",
  category: "regulations",
  description:
    "Where e-bikes are allowed to ride: roads, bike lanes, trails, and sidewalks—national patterns plus Virginia, Maryland, and DC rules by class.",
  slug: "where-can-you-ride-an-ebike",
  readingTimeMinutes: 11,
  jurisdictions: ["virginia", "maryland", "washington-dc"],
  sections: [
    {
      id: "short-answer",
      heading: "Short answer",
      paragraphs: [
        "Compliant e-bikes may generally use roads, bike lanes, and shoulders wherever conventional bicycles are allowed—unless a specific facility prohibits them. Trails, sidewalks, and park paths follow separate rules set by states, counties, cities, and federal land managers.",
        "In the Mid-Atlantic launch region, Virginia defaults permissive for all three classes on many paths; Maryland prohibits Class 3 on most bicycle paths; Washington, DC caps motorized bicycles at 20 mph and bans them from sidewalks and off-street bike paths.",
        "The most restrictive applicable rule governs each segment of your route. This guide maps the decision framework—use jurisdiction law pages for statutory detail.",
        "Riders who ask only whether e-bikes are legal in Virginia miss the practical question: whether their class is legal on the specific path they plan to use tomorrow morning.",
        "This is regulatory information, not legal advice. Use jurisdiction law pages for statutory detail and confirm trailhead signage before riding.",
      ],
    },
    {
      id: "how-rules-work",
      heading: "How e-bike access usually works by facility type",
      paragraphs: [
        "Public roads and bike lanes: compliant e-bikes are widely permitted in Virginia, Maryland, and DC (for qualifying motorized bicycles in the District).",
        "Shared-use paths and rail-trails: state defaults apply, but county parks, state DNR, and regional authorities like NOVA Parks publish trail-specific class limits and speed caps.",
        "Sidewalks: vary by state and city. Virginia and Maryland allow sidewalk riding in many areas with yield rules; DC prohibits motorized bicycles on sidewalks entirely.",
        "Federal park trails: NPS superintendents set class, pedaling, and speed rules via compendiums—often stricter than state law.",
        "Private property: landowners may exclude all bikes regardless of public-road legality.",
      ],
    },
    {
      id: "why-classes-matter",
      heading: "Why Class 1, Class 2, and Class 3 matter by location",
      paragraphs: [
        "Class 1 pedal-assist to 20 mph: widest trail access in practice. Preferred on crowded multi-use paths and NPS routes with pedaling requirements.",
        "Class 2 throttle to 20 mph: legal on many roads and trails but restricted on some NPS paths requiring pedaling when the motor runs. Throttle-only riding may violate federal trail policy even when state law allows Class 2.",
        "Class 3 pedal-assist to 28 mph: strong road access in Virginia and Maryland; prohibited on many Maryland bicycle paths; may not qualify as a legal e-bike in DC. See /guides/are-class-3-ebikes-allowed-on-trails.",
      ],
    },
    {
      id: "virginia",
      heading: "Virginia: where e-bikes can ride",
      paragraphs: [
        "Streets, bike lanes, and shoulders: compliant Class 1–3 e-bikes generally allowed under § 46.2-904.1.",
        "Shared-use paths: default allowed unless a locality or agency prohibits specific classes after public hearing. NOVA Parks W&OD permits e-bikes with 20 mph operational cap.",
        "Sidewalks: generally allowed unless local ordinance prohibits; yield to pedestrians.",
        "Natural-surface nonmotorized trails: agencies may regulate or ban all e-bike classes.",
        "Details: /laws/virginia. Trails: /trails/virginia. Local guide: /guides/riding-ebikes-in-virginia.",
      ],
    },
    {
      id: "maryland",
      heading: "Maryland: where e-bikes can ride",
      paragraphs: [
        "Streets and bike lanes: Class 1–3 allowed on roads subject to age rules for Class 3 operators.",
        "Bicycle paths: Class 1 and Class 2 default allowed unless manager prohibits; Class 3 prohibited unless path is highway-adjacent or manager opts in.",
        "Sidewalks: HB 375 (effective October 1, 2025) allows bicycle sidewalk riding unless locally prohibited, with yield to pedestrians.",
        "County park trails: Montgomery and Prince George's parks cap motors at 500 watts on paved trails.",
        "Details: /laws/maryland. Trails: /trails/maryland. Local guide: /guides/riding-ebikes-in-maryland.",
      ],
    },
    {
      id: "washington-dc",
      heading: "Washington DC: where e-bikes can ride",
      paragraphs: [
        "Roadways and on-street bike lanes: qualifying motorized bicycles (generally Class 1 and Class 2 meeting the 20 mph cap) may use road bike facilities.",
        "Sidewalks and off-street bike paths: motorized bicycles prohibited under DCMR § 18-1201.18.",
        "NPS trails in DC: follow federal compendiums—C&O Canal, Rock Creek, Capital Crescent federal segments have pedaling and class limits.",
        "Class 3: not recognized as legal e-bikes in DC per DDOT guidance.",
        "Details: /laws/washington-dc. Local guide: /guides/riding-ebikes-in-washington-dc.",
      ],
    },
    {
      id: "trail-caveats",
      heading: "Trail and cross-jurisdiction caveats",
      paragraphs: [
        "A single recreational ride from Bethesda to Alexandria may cross Maryland, DC, and Virginia with three different rule sets. Plan turnaround points when your class is not welcome on the next segment.",
        "Posted trailhead signage overrides outdated online summaries. Read compendiums the week of your ride.",
        "Trail roundups for the DC metro: /guides/best-ebike-trails-near-washington-dc, /guides/best-beginner-ebike-trails-near-dc.",
      ],
    },
    {
      id: "before-riding",
      heading: "What to check before every ride",
      paragraphs: [
        "Confirm your bike class and whether it complies in each jurisdiction you will enter. Read the managing agency's policy for every trail segment—not just the state statute.",
        "Pack helmet if required (Class 3 in Virginia, under-16 rules in Maryland and DC). Carry lights for tunnels and dusk returns.",
        "Regulatory overview: /guides/ebike-regulations-overview. Sidewalk specifics: /guides/can-you-ride-an-ebike-on-the-sidewalk. Licensing: /guides/do-you-need-a-license-for-an-ebike.",
        "Route-planning apps do not know your bike class or local trail prohibitions. Cross-check every trail segment against eBikeQuest trail pages and law summaries before following GPS through Maryland bicycle paths or NPS units.",
      ],
    },
    {
      id: "facility-matrix",
      heading: "Facility-type checklist for Mid-Atlantic riders",
      paragraphs: [
        "Public roads and bike lanes: generally open to compliant Class 1–3 in Virginia and Maryland; qualifying motorized bicycles in DC. Watch for posted local prohibitions.",
        "County and regional rail-trails: often open to Class 1–2; Class 3 varies; operational speed caps common. Examples on /guides/best-ebike-trails-near-washington-dc.",
        "National Park Service trails: superintendent compendium governs; pedaling and 15 mph caps frequent. Do not assume state permissiveness.",
        "Sidewalks: Virginia and Maryland defaults permissive with local exceptions; DC prohibits motorized bicycles on sidewalks and off-street bike paths.",
        "Private property and campuses: may ban all e-bikes. Posted rules control regardless of street legality.",
        "Shared micromobility fleets in DC operate under permits that do not change where your privately owned bike may ride. Do not confuse dockless scooter parking rules with private e-bike access on trails.",
        "Temporary event closures on the National Mall and around memorials can block connectors that appear open on static maps. Check NPS and DDOT alerts the morning of rides that cross central DC.",
      ],
    },
    {
      id: "related",
      heading: "Related law pages and guides",
      paragraphs: [
        "/laws, /laws/virginia, /laws/maryland, /laws/washington-dc. Trail etiquette: /guides/mid-atlantic-trail-etiquette.",
        "eBikeQuest documents where riding is commonly permitted—not every private driveway, campus, or shopping center rule nationwide.",
        "HOA and apartment complex rules may prohibit e-bikes in parking garages or on private paths even when your route to the street is fully legal under state law. Read your lease and community rules separately from this regulatory guide.",
        "Campus and military installation rules may prohibit e-bikes on internal paths even when surrounding county law is permissive. Verify posted rules at gates before entering federal or university properties.",
        "National Mall and memorial grounds restrict cycling routes regardless of how permissive DC street law feels on paper. Federal pedestrian zones override state and District defaults on those lands.",
        "Bike share stations and private parking garages may restrict e-bikes even when adjacent streets allow them. Read posted rules at each facility.",
        "Construction detours sometimes push cyclists onto roads without bike lanes. That does not expand sidewalk rights for motorized bicycles in DC.",
      ],
    },
  ],
  faq: [
    {
      question: "Can e-bikes ride in bike lanes?",
      answer:
        "Yes in Virginia, Maryland, and DC for compliant e-bikes and qualifying DC motorized bicycles. Local restrictions on specific corridors are possible—check signage.",
    },
    {
      question: "Are e-bikes allowed on rail-trails?",
      answer:
        "Often yes for Class 1 and Class 2, but each trail manager sets policy. Maryland prohibits Class 3 on most bicycle paths. NPS trails may require pedaling and cap speed at 15 mph.",
    },
    {
      question: "Where can Class 3 e-bikes ride in Maryland?",
      answer:
        "Class 3 may use roads and some trails like the B&A with speed limits, but not most bicycle paths such as Capital Crescent unless the manager explicitly allows Class 3.",
    },
    {
      question: "Can I ride my e-bike in Rock Creek Park?",
      answer:
        "NPS manages Rock Creek Park with compendium rules that often limit e-bikes to Class 1 on paved multi-use segments. Verify current NPS postings before riding.",
    },
    {
      question: "What is the best resource for DC-area trail access?",
      answer:
        "Start with eBikeQuest trail pages and law summaries, then verify trailhead signage. See /guides/best-ebike-trails-near-washington-dc for a trail comparison.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "are-class-3-ebikes-allowed-on-trails",
    "can-you-ride-an-ebike-on-the-sidewalk",
    "best-ebike-trails-near-washington-dc",
    "riding-ebikes-in-washington-dc",
  ],
  relatedTrails: [
    "washington-and-old-dominion-trail",
    "capital-crescent-trail",
    "mount-vernon-trail",
    "c-and-o-canal-towpath-dc",
  ],
};
