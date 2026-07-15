import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ridingEbikesInAlexandria: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-alexandria-local",
  title: "Riding E-Bikes in Alexandria, VA",
  category: "local-riding",
  description:
    "Alexandria e-bike guide: Mount Vernon Trail access, Old Town connectors, Virginia rules, and Potomac riding tips for City riders.",
  slug: "riding-ebikes-in-alexandria",
  readingTimeMinutes: 11,
  jurisdictions: ["virginia"],
  sections: [
    {
      id: "overview",
      heading: "Overview: Alexandria's e-bike riding context",
      paragraphs: [
        "Alexandria combines historic Old Town street grids with direct access to the Mount Vernon Trail—one of the busiest scenic paths in the country. Virginia's three-class e-bike law applies citywide, but National Park Service rules on the Mount Vernon Trail and federal park connectors add requirements that differ from Virginia defaults.",
        "Alexandria riders frequently connect to Arlington via the Potomac waterfront, to Mount Vernon for southern out-and-backs, and across bridges toward DC. Each connection crosses jurisdiction lines with different class and sidewalk policies.",
        "This page explains Alexandria access and connectors—not which trail is best region-wide. For Mount Vernon Trail policy detail, see /trails/virginia/mount-vernon-trail; for regional context, see /guides/riding-ebikes-in-northern-virginia.",
        "Old Town festivals and waterfront dining crowds compress trail exits on sunny weekends. Del Ray neighborhood streets offer lower-stress alternatives to King Street when the main waterfront approach is packed. Plan Mount Vernon Trail passes before late-morning pedestrian peaks when possible.",
        "Belle Haven Community Center parking supports northern trail access; King Street–Old Town Metro works when you prefer to skip weekend street parking near the waterfront.",
        "For ranked trail comparisons across the region, use /guides/best-ebike-trails-in-northern-virginia rather than expecting this page to rank routes.",
      ],
    },
    {
      id: "best-places",
      heading: "Best places to ride nearby",
      paragraphs: [
        "The Mount Vernon Trail runs through Alexandria along the Potomac, connecting Belle Haven, Old Town approaches, and points north toward Reagan National Airport. Class 1 and Class 2 e-bikes are permitted with NPS pedaling requirements and a 15 mph cap.",
        "Old Town Alexandria's waterfront promenade and King Street area mix tourists, diners, and cyclists—slow zones and dismount expectations apply even when street riding is legal nearby.",
        "Connections north to Arlington's Mount Vernon Trail segments and south toward Mount Vernon estate support varied out-and-back distances. /trails/virginia/mount-vernon-trail",
      ],
    },
    {
      id: "beginner-routes",
      heading: "Beginner-friendly routes",
      paragraphs: [
        "Belle Haven to Old Town on the Mount Vernon Trail offers flat pavement with river views—good for confident beginners who can handle weekend crowds. Start early on Saturdays to avoid peak congestion.",
        "For quieter learning conditions, drive or Metro to the W&OD in Vienna or Shirlington instead of Old Town on summer afternoons. See /guides/best-beginner-ebike-trails-near-dc.",
        "City of Alexandria bike lanes on Commonwealth Avenue and Duke Street provide on-street practice before committing to the busy trail.",
      ],
    },
    {
      id: "commuting",
      heading: "Commuting considerations",
      paragraphs: [
        "Alexandria commuters use the Mount Vernon Trail north toward Pentagon City and Arlington, Potomac Yard bridge connections, and on-street lanes toward Reagan National Metro access.",
        "King Street and Duke Street corridors see heavy vehicle traffic—use protected lanes where available and avoid sidewalk riding in crowded Old Town even when Virginia law might permit it elsewhere.",
        "Crossing to DC requires bridge planning and District motorized-bicycle compliance at /laws/washington-dc.",
      ],
    },
    {
      id: "class-rules",
      heading: "E-bike class and local rule notes",
      paragraphs: [
        "Virginia allows Class 1–3 on roads subject to Class 3 helmet and age rules. The Mount Vernon Trail limits to Class 1–2 with mandatory pedaling—Class 3 owners should use on-road routes or the W&OD instead.",
        "NPS prohibits throttle-only propulsion on the trail even for Class 2 bikes. Start from stops by pedaling first.",
        "Sidewalk rules: /guides/can-you-ride-an-ebike-on-the-sidewalk. Virginia law: /laws/virginia.",
      ],
    },
    {
      id: "parking-access",
      heading: "Parking and access tips",
      paragraphs: [
        "Belle Haven Community Center parking supports northern Mount Vernon Trail access. Mount Vernon estate parking suits southern out-and-backs toward the historic site.",
        "Old Town parking is expensive and scarce on weekends—consider King Street–Old Town Metro with a short ride to the waterfront trail.",
        "Secure e-bikes with quality locks; waterfront and Metro rack theft is reported in the region.",
      ],
    },
    {
      id: "before-riding",
      heading: "What to check before riding",
      paragraphs: [
        "Check NPS George Washington Memorial Parkway alerts for trail closures and event detours. Tourist events in Old Town frequently add temporary barriers.",
        "Verify NPS compendium rules before assuming Class 2 throttle use is acceptable on trail segments.",
        "Neighbor guides: /guides/riding-ebikes-in-arlington, /guides/riding-ebikes-in-mount-vernon-trail context via /guides/best-ebike-trails-in-northern-virginia.",
      ],
    },
    {
      id: "related",
      heading: "Related trails, laws, and guides",
      paragraphs: [
        "/laws/virginia. Trail page: /trails/virginia/mount-vernon-trail. DC crossing: /guides/riding-ebikes-in-washington-dc.",
        "Etiquette on crowded paths: /guides/mid-atlantic-trail-etiquette.",
      ],
    },
    {
      id: "equipment",
      heading: "Equipment and safety along the Alexandria waterfront",
      paragraphs: [
        "Mount Vernon Trail curves and bridge joints reward wider tires and attentive braking—especially when wet. E-bike riders who rely on heavy regenerative braking should test modulation before riding crowded riverfront segments.",
        "Alexandria's tourism economy means distracted pedestrians near the waterfront. A bell or polite voice announcement before every pass is standard practice, not optional courtesy.",
        "If you ride from Alexandria into DC, carry lights even for daytime trips. Bridge crossings and memorial approaches include tunnels and shade where visibility drops suddenly.",
      ],
    },
    {
      id: "old-town",
      heading: "Old Town and waterfront practical notes",
      paragraphs: [
        "King Street and the waterfront attract dense pedestrian traffic year-round. Even where Virginia sidewalk law is permissive, riding through restaurant patios and tour groups creates conflict. Walk your bike when crowds thicken.",
        "Farmers markets and festival street closures redirect cyclists onto parallel streets with inconsistent bike infrastructure. Check City of Alexandria transportation alerts before weekend rides originating in Old Town.",
        "Potomac Yard and National Landing development added new bike lanes connecting toward the Mount Vernon Trail. These connectors change phase by phase—verify current maps when riding from southern Alexandria neighborhoods.",
      ],
    },
    {
      id: "seasonal",
      heading: "Seasonal patterns along the Alexandria waterfront",
      paragraphs: [
        "Summer tourist season peaks from Memorial Day through Labor Day. Morning rides before 8 a.m. offer the calmest Mount Vernon Trail experience from Alexandria trailheads.",
        "Summer thunderstorms arrive quickly along the river. Plan shelter at Belle Haven or Old Town if clouds build from the west.",
        "Fall and spring provide the best balance of weather and manageable crowds for Alexandria-based e-bike riders exploring the full Mount Vernon corridor north toward National Airport overlooks.",
      ],
    },
    {
      id: "traffic-safety",
      heading: "Traffic and riverfront crossing notes",
      paragraphs: [
        "Route 1 and the George Washington Memorial Parkway interchange near Belle Haven creates high-speed merge conflicts for trail users exiting toward Alexandria neighborhoods. Full stops and conservative launches beat assuming drivers yield.",
        "King Street west of Old Town mixes buses, delivery trucks, and bike lanes with varying protection. Mid-block bike lane gaps appear without warning near retail driveways.",
        "Woodrow Wilson Bridge trail connections toward Maryland require reading multi-jurisdictional signage. Do not assume Alexandria street legality continues on Prince George's County connectors without checking PG Parks rules.",
      ],
    },
    {
      id: "local-resources",
      heading: "Where to verify Alexandria rules and alerts",
      paragraphs: [
        "City of Alexandria transportation pages publish Old Town event closures, waterfront detours, and bike lane updates. Summer festival season changes King Street access weekly.",
        "NPS George Washington Memorial Parkway alerts cover Mount Vernon Trail segments through Alexandria even when city pages are quiet. Check both agencies before large group rides.",
        "Statutory background: /laws/virginia. Trail detail: /trails/virginia/mount-vernon-trail. Neighbor context: /guides/riding-ebikes-in-arlington.",
        "Alexandria waterfront flooding during king tides occasionally submerges low trail approaches near the Potomac. Check city flood alerts before early-morning riverfront rides.",
      ],
    },
  ],
  faq: [
    {
      question: "Are e-bikes allowed on the Mount Vernon Trail in Alexandria?",
      answer:
        "Yes for Class 1 and Class 2 with NPS rules: pedal when the motor assists, 15 mph cap, no throttle-only riding. Class 3 is not listed as permitted on the trail.",
    },
    {
      question: "Can I ride an e-bike in Old Town Alexandria?",
      answer:
        "On-street riding is generally permitted for compliant e-bikes. Waterfront promenades may require walking your bike in crowded zones. Avoid sidewalk riding in dense pedestrian areas.",
    },
    {
      question: "Where do Alexandria riders park for the Mount Vernon Trail?",
      answer:
        "Belle Haven Community Center and Mount Vernon estate are common trailheads. Old Town Metro access works for northern segments.",
    },
    {
      question: "Is the Mount Vernon Trail good for beginner e-bikers?",
      answer:
        "The surface is paved and mostly flat, but weekend crowds and blind curves make it better as a second trail after practicing on quieter W&OD segments.",
    },
    {
      question: "Can I ride from Alexandria to DC on an e-bike?",
      answer:
        "Yes via bridge crossings and trail connectors, but DC motorized-bicycle rules apply in the District. Verify your bike class qualifies at /laws/washington-dc.",
    },
  ],
  relatedGuides: [
    "riding-ebikes-in-northern-virginia",
    "riding-ebikes-in-arlington",
    "riding-ebikes-in-virginia",
    "mid-atlantic-trail-etiquette",
    "best-ebike-trails-in-northern-virginia",
    "riding-ebikes-in-washington-dc",
  ],
  relatedTrails: ["mount-vernon-trail", "washington-and-old-dominion-trail"],
};
