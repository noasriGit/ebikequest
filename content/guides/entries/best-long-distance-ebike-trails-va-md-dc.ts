import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const bestLongDistanceEbikeTrailsVaMdDc: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-best-long-distance",
  title: "Best Long-Distance E-Bike Trails in VA, MD & DC",
  category: "riding-skills",
  description:
    "Long-distance e-bike trails across Virginia, Maryland, and DC: W&OD, C&O Canal, High Bridge, GAP, and more—with mileage, surfaces, and class rules.",
  slug: "best-long-distance-ebike-trails-va-md-dc",
  readingTimeMinutes: 14,
  jurisdictions: ["virginia", "maryland", "washington-dc"],
  sections: [
    {
      id: "intro",
      heading: "Long-distance e-bike riding in the Mid-Atlantic",
      paragraphs: [
        "Long-distance e-bike touring in the Virginia–Maryland–DC region means combining rail-trails, canal towpaths, and park corridors that may change surface, manager, and class rules every few miles. Battery planning, tire choice, and jurisdiction research matter as much as fitness.",
        "This roundup compares long corridors in Virginia, Maryland, and DC where riders routinely cover 20+ miles in a day. It focuses on distance, resupply, and battery planning—not beginner picks or metro hub comparisons (see /guides/best-beginner-ebike-trails-near-dc and /guides/best-ebike-trails-near-washington-dc). Multi-day tours like the full C&O Canal or Great Allegheny Passage extend beyond a single outing but start from segments listed here.",
        "Verify compendiums and park directives before touring. Long rides magnify the cost of assuming one state's permissive default applies on federal or county segments.",
        "Shuttle logistics deserve as much planning as battery range. A one-way W&OD ride with a forgotten car key at the wrong terminus is a common rookie mistake on 45-mile ambitions.",
      ],
    },
    {
      id: "comparison",
      heading: "Quick comparison: long-distance corridors",
      paragraphs: [
        "Distance, surface, and e-bike policy vary widely. Plan turnaround or shuttle logistics before committing to a full corridor.",
      ],
      listItems: [
        "W&OD Trail (VA): 45 mi paved; Class 1–3, 20 mph cap; NOVA Parks — /trails/virginia/washington-and-old-dominion-trail",
        "C&O Canal (DC/MD): 184 mi total corridor; crushed stone; Class 1–2 typical, NPS pedaling rules — /trails/washington-dc/c-and-o-canal-towpath-dc",
        "High Bridge Trail (VA): 31 mi crushed stone; DCR policy — /trails/virginia/high-bridge-trail",
        "Northern Central Trail (MD): 20 mi crushed stone; Baltimore County — /trails/maryland/northern-central-trail",
        "Great Allegheny Passage MD (MD): 74 mi in MD; crushed stone; rail-trail touring — /trails/maryland/great-allegheny-passage-maryland",
        "Capital Crescent + C&O link: paved MD segment + stone towpath; class changes at boundaries",
      ],
    },
    {
      id: "best-paved-long",
      heading: "Best long paved ride: W&OD full length",
      paragraphs: [
        "Forty-five miles of continuous asphalt from Shirlington to Purcellville makes the W&OD the region's premier long paved e-bike route. Shuttle parking at eastern and western termini supports one-way rides. Good fit for endurance riders, e-bike tourists, and commuters testing maximum daily range.",
        "NOVA Parks permits e-bikes with motor-assisted speed capped at 20 mph. Class 3 bikes are allowed with that operational limit. Eastern rush-hour congestion contrasts with open western rollers—plan assist strategy accordingly.",
        "Water stops cluster in Vienna, Reston, Herndon, Leesburg, and Purcellville. No trail charging—carry a spare battery or plan lunch stops with outlet access in towns.",
      ],
    },
    {
      id: "best-canal-touring",
      heading: "Best canal touring: C&O Canal towpath",
      paragraphs: [
        "The C&O Canal National Historical Park towpath stretches 184 miles from Georgetown to Cumberland, Maryland. The DC section listed on eBikeQuest covers the Georgetown approach; Maryland segments continue through Great Falls, Brunswick, and Harpers Ferry connections toward western Maryland.",
        "NPS allows e-bikes where traditional bicycles are allowed, with operable pedals, sub-750-watt motors, mandatory pedaling on the towpath, and a 15 mph speed limit on designated routes. Good fit for riders with gravel tires and multi-day ambitions—not a same-day DC-to-Cumberland ride for most e-bikes without charging stops.",
        "Link from Georgetown via /trails/washington-dc/c-and-o-canal-towpath-dc or connect from Capital Crescent. DC motorized-bicycle rules and Maryland class path rules apply on approaches—see /guides/best-ebike-trails-near-washington-dc for boundary notes.",
      ],
    },
    {
      id: "best-regional-drive",
      heading: "Best drive-to long trail: High Bridge Trail",
      paragraphs: [
        "High Bridge Trail State Park near Farmville offers 31 miles of crushed-stone rail-trail with the signature High Bridge trestle overlook. Virginia DCR e-bike policies differ from NOVA Parks—verify current class permissions on /trails/virginia/high-bridge-trail before driving from DC.",
        "Good fit for weekend touring when you want distance without DC suburban crowds. Surface is finer crushed stone than coarse towpath mud in places—still plan wider tires than pure pavement setups.",
        "Pair with an overnight in Farmville for a full out-and-back without a same-day 62-mile commitment.",
      ],
    },
    {
      id: "best-md-crushed",
      heading: "Best Maryland crushed-stone distance: Northern Central Trail",
      paragraphs: [
        "The Torrey C. Brown Rail Trail (Northern Central) runs roughly 20 miles from Ashland to the Pennsylvania line north of Baltimore on crushed stone. Good fit for Baltimore-area riders and DC tourists willing to drive for a quieter rail-trail than Capital Crescent.",
        "Maryland class rules apply; verify Baltimore County and state park postings for e-bike permissions. Surface is railroad ballast-style stone—slower than pavement but faster than muddy towpath sections after rain.",
        "Combine with Patapsco Valley connections only after verifying separate park e-bike policies—do not assume one Maryland trail's rules blanket the county.",
      ],
    },
    {
      id: "best-multi-day",
      heading: "Best multi-day touring corridor: Great Allegheny Passage (Maryland)",
      paragraphs: [
        "Maryland's 74 miles of the Great Allegheny Passage connect to Pennsylvania rail-trail networks and, via Cumberland, the C&O Canal for an epic Pittsburgh-to-DC tour. eBikeQuest tracks the Maryland segment at /trails/maryland/great-allegheny-passage-maryland.",
        "Good fit for loaded touring with charging plans in trail towns. Crushed-stone surface and elevation profiles differ sharply from the W&OD—treat this as a dedicated trip, not an after-work ride.",
        "Class 1 bikes face the fewest access questions on rail-trail networks nationwide; confirm Maryland and Allegany County postings before a multi-day start.",
      ],
    },
    {
      id: "planning-tips",
      heading: "Planning long e-bike rides across jurisdictions",
      paragraphs: [
        "Map jurisdiction boundaries before you ride. A legal Class 3 segment in Virginia may meet a Maryland bicycle path that prohibits Class 3 within the same afternoon. DC's 20 mph motorized-bicycle cap may disqualify a bike that was legal in both states on paper.",
        "Battery math: assume 50–70% of rated range on mixed surfaces, headwinds, and stop-and-go trail crowds. Carry repair kits, chargers for overnight stops, and paper maps when cellular service drops in western corridors.",
        "Shuttle services and hiker-biker campsites on the C&O require advance planning. W&OD shuttle pairs are simpler—park at Shirlington and Purcellville West lots documented on the trail page.",
        "Tell someone your route and expected return time on long rural segments. Western Maryland and Farmville-area corridors have sparser cell coverage than NOVA suburbs. A mechanical issue 20 miles from your car is manageable with planning and impossible without a charged phone, basic tools, and realistic range margins.",
      ],
    },
    {
      id: "class-access",
      heading: "E-bike class notes for long-distance routes",
      paragraphs: [
        "Class 1 pedal-assist bikes unlock the widest access across the corridors listed here. Class 2 bikes work on W&OD and many Maryland county trails but face NPS pedaling requirements on C&O and federal connectors. Class 3 bikes are prohibited on Maryland bicycle paths like Capital Crescent and may conflict with DC definitions on Georgetown approaches.",
        "Operational speed caps—15 mph on many NPS routes, 20 mph on W&OD, 15 mph on Anne Arundel county trails—apply regardless of your bike's road capability. Read /guides/are-class-3-ebikes-allowed-on-trails and /laws for each jurisdiction.",
      ],
    },
    {
      id: "related",
      heading: "Related trails, laws, and guides",
      paragraphs: [
        "Laws: /laws, /laws/virginia, /laws/maryland, /laws/washington-dc. Metro roundups: /guides/best-ebike-trails-near-washington-dc, /guides/best-ebike-trails-in-northern-virginia. Etiquette for shared paths: /guides/mid-atlantic-trail-etiquette.",
        "Long-distance riding increases enforcement and conflict risk—courteous assist use preserves access for future e-bike tourists.",
        "If you are new to multi-jurisdiction touring, test a shorter C&O out-and-back from Georgetown before committing to a W&OD shuttle plus towpath combination that exceeds your battery and daylight budget.",
      ],
    },
  ],
  faq: [
    {
      question: "How do I plan a one-way long ride without a car shuttle?",
      answer:
        "Metro and bus bike racks, ride-share with a bike rack, or riding with a friend who can meet you at an endpoint are practical options on the W&OD and Mount Vernon corridors. For C&O and GAP segments, study campground spacing and resupply towns before committing to a one-way itinerary.",
    },
    {
      question: "Can you ride from DC to Cumberland on an e-bike?",
      answer:
        "The C&O Canal towpath connects Georgetown to Cumberland over 184 miles. E-bikes are permitted under NPS rules with pedaling requirements and speed limits. Multi-day planning with charging stops is essential for most riders.",
    },
    {
      question: "Are Class 3 e-bikes good for long-distance touring in VA and MD?",
      answer:
        "Class 3 bikes work on roads and some trails like the W&OD with speed caps, but Maryland bicycle paths and many federal segments restrict them. Class 1 bikes simplify long multi-jurisdiction tours.",
    },
    {
      question: "What tire setup works for mixed long-distance routes?",
      answer:
        "Hybrid tires 38–45 mm wide suit paved rail-trails and moderate crushed stone. Dedicated pavement riders on the W&OD can run narrower; C&O and GAP segments reward wider gravel-oriented tires.",
    },
    {
      question: "Do I need insurance for long e-bike tours?",
      answer:
        "Virginia and Maryland do not require e-bike insurance by statute. Homeowners or renters policies may or may not cover liability—see /guides/do-ebikes-need-insurance-or-registration for an overview, not legal advice.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "mid-atlantic-trail-etiquette",
    "best-ebike-trails-near-washington-dc",
    "best-ebike-trails-in-northern-virginia",
    "riding-ebikes-in-virginia",
  ],
  relatedTrails: [
    "washington-and-old-dominion-trail",
    "c-and-o-canal-towpath-dc",
    "high-bridge-trail",
    "northern-central-trail",
    "great-allegheny-passage-maryland",
  ],
};
