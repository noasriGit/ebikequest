import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ridingEbikesInWashingtonDc: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-06-25",
  updatedAt: "2026-06-25",
  reviewedBy: withReviewDate("2026-06-25"),
  id: "guide-dc-local",
  title: "Riding E-Bikes in Washington DC: Local Tips",
  category: "local-riding",
  description:
    "Washington DC e-bike rules, trails, and commuting tips: how the District's 20 mph motorized-bicycle cap differs from Virginia and Maryland class laws.",
  slug: "riding-ebikes-in-washington-dc",
  readingTimeMinutes: 12,
  sections: [
    {
      id: "dc-definition",
      heading: "How DC defines e-bikes — and why it differs from Virginia and Maryland",
      paragraphs: [
        "Washington, DC does not use the Class 1, Class 2, and Class 3 labels found in Virginia and Maryland statute. Instead, D.C. Code § 50-2201.02(11A) defines a motorized bicycle as a two- or three-wheeled device with operable pedals and a motor incapable of propelling the device faster than 20 mph on level ground.",
        "That speed cap matters when you ride across jurisdictional lines. A stock Class 3 e-bike sold under PeopleForBikes definitions is designed to provide pedal-assist up to 28 mph — above DC's motorized-bicycle threshold. Devices that exceed the 20 mph capability may be treated as motor-driven cycles requiring licensing and registration under broader District motor vehicle law, though published DDOT enforcement guidance specifically targeting privately owned Class 3 pedal-assist bikes is limited. If you commute into DC on a Class 3 bike, verify current DDOT guidance before assuming street legality.",
        "For most Class 1 and Class 2 riders, DC law aligns reasonably with Mid-Atlantic expectations: no driver's license or registration is required for a compliant motorized bicycle, and operators must be at least 16 under 18 DCMR § 1200.10. See our guides on e-bike classes and the District law summary at /laws/washington-dc for the full statutory picture.",
      ],
    },
    {
      id: "helmets-and-equipment",
      heading: "Helmets, age limits, and equipment rules",
      paragraphs: [
        "D.C. Code § 50-1605 requires operators and passengers under 16 to wear a protective helmet on any bicycle, which includes motorized bicycles as defined in District code. Unlike Virginia — where helmet mandates focus on younger Class 3 riders — DC's under-16 rule applies regardless of bike type.",
        "18 DCMR § 1200.10 sets a minimum operator age of 16 for motorized bicycles. Younger riders may not legally operate an e-bike on District public space even as a passenger on a throttle-equipped bike unless local rules for passengers say otherwise.",
        "Equipment requirements for bicycles generally apply to e-bikes: front white light, rear red reflector or light, and audible bell when riding at night or in low visibility. DDOT's bicycle program pages summarize current equipment expectations for commuters using bike lanes and shared paths.",
      ],
      listItems: [
        "Operators must be 16 or older (18 DCMR § 1200.10).",
        "Helmets required for operators and passengers under 16 (D.C. Code § 50-1605).",
        "Class 3 or modified bikes above 20 mph capability may fall outside the motorized-bicycle definition — legal classification is uncertain; verify with DDOT before relying on bike-lane access.",
      ],
    },
    {
      id: "ddot-and-bike-lanes",
      heading: "DDOT bike lanes, streets, and shared micromobility context",
      paragraphs: [
        "The District Department of Transportation (DDOT) maintains an expanding protected bike lane network, neighborhood connectors, and signed on-street routes linking Maryland and Virginia bridges. Privately owned e-bikes that meet the motorized-bicycle definition generally may use bike lanes and roads open to traditional bicycles unless posted otherwise.",
        "Dockless shared e-bike and e-scooter fleets operate under separate DDOT permit conditions — speed governors, parking zones, and fleet caps do not change the rules for your privately owned Class 2 throttle bike, but they illustrate how regulators think about motor power near pedestrians downtown.",
        "Sidewalk riding is restricted in the central business district and many commercial corridors. When bike lanes end abruptly at construction zones — common around Capitol Hill, Union Station, and waterfront projects — plan dismount segments or alternate street routes rather than riding on crowded sidewalks.",
      ],
    },
    {
      id: "major-trail-corridors",
      heading: "Major trail corridors: C&O, Capital Crescent, Rock Creek, and Anacostia",
      paragraphs: [
        "The C&O Canal towpath through Georgetown and west toward Maryland is managed by the National Park Service as part of Chesapeake & Ohio Canal National Historical Park. NPS e-bike policy allows superintendents to permit e-bikes where traditional bicycles are allowed, subject to compendium rules that may restrict class or throttle use. Check the current NPS compendium before assuming your bike is welcome on the full DC segment — see the eBikeQuest trail page for the /trails/washington-dc/c-and-o-canal-towpath-dc listing.",
        "The Capital Crescent Trail connects Georgetown toward Bethesda across federal and District-managed segments. Policies can differ between the paved DC approach and Montgomery Parks segments in Maryland. A ride that is legal in the District may encounter different class limits once you cross into Maryland — plan turnaround points if you ride Class 3.",
        "Rock Creek Park trails include NPS-managed paths where e-bike access follows federal compendiums, not just DDOT guidance. The Anacostia Riverwalk Trail offers a largely paved east-side connector with growing mileage; verify DDOT and National Park Service postings at trailheads because construction and event closures reroute cyclists frequently.",
      ],
      listItems: [
        "C&O Canal towpath (DC segment): NPS compendium governs — confirm allowed classes before long rides.",
        "Capital Crescent Trail: cross-jurisdiction route — DC, federal, and Maryland rules may differ within one trip.",
        "Rock Creek Park: federal land; do not assume Virginia or Maryland state trail permissiveness applies.",
        "Anacostia Riverwalk: growing network; check DDOT project pages for temporary closures.",
      ],
    },
    {
      id: "federal-lands-in-dc",
      heading: "Federal parkland inside the District",
      paragraphs: [
        "National Park Service units dominate significant DC riding terrain: Rock Creek Park, the National Mall connectors, George Washington Memorial Parkway segments, and the C&O Canal. NPS reaffirmed e-bike discretion for superintendents through recent environmental review — allowed classes and routes appear in each park's compendium.",
        "The National Mall and memorial grounds restrict where cycling is permitted at all, regardless of motor type. Security closures, demonstration fencing, and tourist congestion create de facto dismount zones even when maps suggest a through route.",
        "When a DC street legal under DDOT rules enters NPS property, the federal compendium replaces municipal permissiveness. The restrictive rule wins at the boundary — obey trailhead signage even when your route planning app suggests continuity.",
      ],
    },
    {
      id: "crossing-borders",
      heading: "Crossing into Maryland and Virginia on an e-bike",
      paragraphs: [
        "DC sits between Virginia and Maryland trail networks. A single recreational ride can cross three jurisdictions before lunch. Virginia Code § 46.2-904.1 and Maryland Transportation Article § 21-1205.2 use three-class definitions with different Class 3 path rules than DC's 20 mph cap.",
        "Bridge crossings at Chain, Key, and Memorial bridges connect to Arlington and Alexandria trail systems. Once you enter Virginia, NOVA Parks rules govern segments like the Mount Vernon Trail approach — NPS throttle restrictions may apply even when Virginia state law is permissive.",
        "Maryland connections via the Capital Crescent, Northeast Branch, and Prince George's County paths require checking Montgomery Parks and Maryland State Highway Administration bike route maps. Our riding guides for Virginia and Maryland summarize state-level rules; combine them with this page when planning multi-state loops.",
      ],
    },
    {
      id: "practical-commuting",
      heading: "Practical commuting and security tips",
      paragraphs: [
        "Metro allows folding bikes off-peak, but full-size e-bikes are impractical on rail during most hours. Combine biking with Metrobus bike racks only when your bike weight and wheel size fit carrier limits — many e-bikes exceed bus rack specifications.",
        "Bike theft is a serious concern. Use a quality U-lock plus cable for wheels and battery, register your serial number, and remove display units when parking downtown. Secure parking at Metro stations varies — prefer staffed garages or indoor parking at employers when available.",
        "Summer heat and humidity reduce battery range; winter salt and slush increase maintenance needs. Plan charging at work if you commute from Maryland or Virginia — few public outdoor outlets exist compared to suburban garages.",
      ],
    },
    {
      id: "before-you-ride",
      heading: "Before you ride: verification checklist",
      paragraphs: [
        "Build a DC-specific pre-ride checklist: confirm your bike meets the 20 mph motorized-bicycle definition if you rely on District code; read NPS compendiums for any federal segments; charge for round-trip range; pack a helmet if anyone under 16 rides with you; and note whether your route crosses into Virginia or Maryland where class-based rules replace DC's speed cap.",
        "Use eBikeQuest trail listings and the /laws/washington-dc page as starting points, then verify DDOT bicycle program updates and trailhead signage the week of your trip. Policies along the Anacostia Riverwalk and Rock Creek corridors change with construction seasons.",
        "When online sources conflict, obey posted signs and contact the land manager. DC's regulatory crossroads reward riders who plan jurisdiction transitions explicitly rather than assuming one state's permissive rule carries through the whole route.",
      ],
    },
  ],
  faq: [
    {
      question: "Are e-bikes legal in Washington DC?",
      answer: "Yes. DC defines motorized bicycles with operable pedals and motors incapable of exceeding 20 mph on level ground under D.C. Code § 50-2201.02(11A). Devices above that capability may fall outside the definition. Operators must be at least 16.",
    },
    {
      question: "Can I ride a Class 3 e-bike in DC?",
      answer: "Class 3 is not defined in DC code. A stock Class 3 bike designed to assist to 28 mph may exceed the 20 mph motorized-bicycle cap. Legal treatment as a motor-driven cycle is possible; DDOT published guidance on private Class 3 enforcement is limited — verify before commuting.",
    },
    {
      question: "Are e-bikes allowed on the C&O Canal towpath in DC?",
      answer: "NPS policy allows e-bikes on trails where traditional bicycles are permitted, subject to each park's compendium. Confirm current Chesapeake & Ohio Canal National Historical Park rules before riding — throttle and class limits can apply on top of District law.",
    },
    {
      question: "Do I need a helmet on an e-bike in DC?",
      answer: "Riders and passengers under 16 must wear helmets under D.C. Code § 50-1605. Older riders are not universally required by District code, but helmets are strongly recommended, especially on busy commuter routes.",
    },
    {
      question: "Can I ride my e-bike on the National Mall?",
      answer: "Cycling is restricted to designated routes on the National Mall. Security closures and pedestrian volumes often require walking your bike. Check National Park Service guidance for current permitted paths — not all Mall segments allow bicycles.",
    },
    {
      question: "How do DC rules differ from Virginia and Maryland?",
      answer: "Virginia and Maryland use three-class e-bike statutes. DC uses a 20 mph motorized-bicycle cap without class labels. Path and trail rules on federal land may be stricter than any state or District street law.",
    },
    {
      question: "Where should I start research for a new DC route?",
      answer: "Start with eBikeQuest trail and law pages for DC, then DDOT bicycle program resources and the relevant NPS compendium. Verify trailhead signage on arrival — construction and events change routes frequently.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "riding-ebikes-in-virginia",
    "riding-ebikes-in-maryland",
  ],
  relatedTrails: [
    "c-and-o-canal-towpath-dc",
    "capital-crescent-trail-dc",
    "rock-creek-trail",
  ],
  jurisdictions: ["washington-dc"],
};
