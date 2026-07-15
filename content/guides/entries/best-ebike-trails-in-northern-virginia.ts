import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const bestEbikeTrailsInNorthernVirginia: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-best-trails-nova",
  title: "Best E-Bike Trails in Northern Virginia",
  category: "riding-skills",
  description:
    "Northern Virginia e-bike trail roundup: W&OD, Mount Vernon, and regional paths compared by distance, class access, scenery, and rider type.",
  slug: "best-ebike-trails-in-northern-virginia",
  readingTimeMinutes: 12,
  jurisdictions: ["virginia"],
  sections: [
    {
      id: "intro",
      heading: "Northern Virginia's e-bike trail landscape",
      paragraphs: [
        "Northern Virginia—Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties—hosts some of the densest paved trail mileage on the East Coast. State law under Virginia Code § 46.2-904.1 defaults permissive for Class 1, Class 2, and Class 3 e-bikes on shared-use paths, but NOVA Parks, the National Park Service, and individual counties publish trail-specific rules that often cap powered speed or restrict throttle use.",
        "This roundup compares Northern Virginia trails by distance, scenery, and class access. It is a selection guide when you are choosing between the W&OD, Mount Vernon Trail, or a longer regional ride—not a city-specific access guide (see /guides/riding-ebikes-in-arlington, /guides/riding-ebikes-in-alexandria, /guides/riding-ebikes-in-leesburg).",
        "For statewide context beyond NOVA—including High Bridge Trail and New River Trail—see Virginia trail listings at /trails/virginia and /guides/riding-ebikes-in-virginia.",
      ],
    },
    {
      id: "comparison",
      heading: "Quick comparison: NOVA trails at a glance",
      paragraphs: [
        "Northern Virginia's flagship trails differ sharply in manager, surface, and crowd profile. Compare before you load the bike rack.",
      ],
      listItems: [
        "W&OD Trail: 45 mi paved rail-trail; Class 1–3 with 20 mph trail cap; NOVA Parks — /trails/virginia/washington-and-old-dominion-trail",
        "Mount Vernon Trail: 18 mi paved riverfront; Class 1–2, NPS pedal-assist only; George Washington Memorial Parkway — /trails/virginia/mount-vernon-trail",
        "High Bridge Trail: 31 mi crushed stone (regional); Class 1–2 typical; DCR-managed — /trails/virginia/high-bridge-trail",
        "Powhatan State Park: mixed natural surface; verify DCR e-bike policy — /trails/virginia/powhatan-state-park-trails",
      ],
    },
    {
      id: "best-overall",
      heading: "Best overall pick: Washington & Old Dominion Trail",
      paragraphs: [
        "The W&OD is Northern Virginia's backbone trail—45 miles of paved asphalt from Shirlington through Falls Church, Vienna, Reston, Herndon, Sterling, Ashburn, Leesburg, and Purcellville. NOVA Parks explicitly permits e-bikes and requires motor-assisted speed at or below 20 mph on the path.",
        "Good fit for commuters, long-training rides, family outings with flexible turnaround towns, and riders who want one trail with dozens of parking access points. Eastern segments connect toward the Custis Trail and Potomac bridges; western segments open into Loudoun farmland.",
        "Class 3 owners may use the W&OD but must limit assist to 20 mph on the trail regardless of the bike's 28 mph road rating. Read /trails/virginia/washington-and-old-dominion-trail for parking pairs, construction alerts, and etiquette guidance.",
      ],
    },
    {
      id: "best-beginner",
      heading: "Best beginner-friendly option: W&OD (eastern segments)",
      paragraphs: [
        "Beginners benefit from the W&OD's flat profile and frequent road crossings that allow short out-and-back segments. Try Vienna to Reston or Shirlington to East Falls Church for 8–12 mile introductions without committing to a full cross-county ride.",
        "The paved surface suits first-time e-bike owners testing assist modes. Weekend mornings are crowded—weekday afternoons offer gentler learning conditions. NOVA Parks' 20 mph cap is easier to respect than NPS throttle restrictions on federal trails.",
        "If you are in Alexandria or along the Potomac, the Mount Vernon Trail's scenery comes with heavier tourist traffic and NPS pedal-assist rules that punish throttle-only launches—consider it a second-step trail after you are comfortable passing on the W&OD.",
      ],
    },
    {
      id: "best-scenic",
      heading: "Best scenic option: Mount Vernon Trail",
      paragraphs: [
        "Eighteen miles of Potomac riverfront pavement from Mount Vernon north through Alexandria, Belle Haven, and Arlington to Roosevelt Island make this the region's signature scenic ride. Good fit for photographers, visitors who want monument-adjacent views, and riders comfortable with curves, bridges, and weekend crowds.",
        "NPS permits Class 1 and Class 2 e-bikes with mandatory pedaling when the motor runs and a 15 mph trail speed limit. Throttle-only riding is prohibited. Pair the trail page at /trails/virginia/mount-vernon-trail with /guides/mid-atlantic-trail-etiquette for passing guidance near Gravelly Point and Old Town.",
        "Parking at Mount Vernon estate or Belle Haven supports classic out-and-backs. Connecting to DC requires bridge planning and District motorized-bicycle rules at /laws/washington-dc.",
      ],
    },
    {
      id: "best-long-distance",
      heading: "Best long-distance option: W&OD full corridor",
      paragraphs: [
        "For a full-day NOVA ride, the W&OD's 45 paved miles from Shirlington to Purcellville remain unmatched in the immediate metro area. Shuttle parking at both ends—Shirlington and Purcellville West lots—lets one-way riders cover the full distance without retracing every mile.",
        "Good fit for endurance riders and e-bike tourists testing battery range. Carry water west of Herndon where shade gaps widen. Hours differ east versus west of Herndon—verify NOVA Parks seasonal closing rules before a dusk return leg.",
        "Longer crushed-stone options like High Bridge Trail near Farmville sit outside the DC commute zone but offer 31 miles of rail-trail for riders willing to drive. See /trails/virginia/high-bridge-trail for DCR e-bike policies that differ from NOVA Parks.",
      ],
    },
    {
      id: "best-commuter",
      heading: "Best for commuters: W&OD eastern corridor",
      paragraphs: [
        "Arlington, Falls Church, and Fairfax commuters rely on the W&OD's eastern miles linking Shirlington, East Falls Church Metro, and Vienna. The Custis Trail connection toward Rosslyn adds I-66 corridor access for riders comfortable mixing trail and urban bike lanes.",
        "Good fit for Class 1 and Class 2 riders who can keep assist low during rush-hour congestion. Class 3 bikes are legal on the trail but the 20 mph cap applies—commuters often use Eco mode in crowded segments and higher assist only on open western rollers.",
        "Mount Vernon Trail serves Potomac-side commuters between Alexandria and Arlington but sees heavier tourist conflict near National Airport viewpoints. Check /guides/riding-ebikes-in-arlington for local street and trail connector context.",
      ],
    },
    {
      id: "class-access",
      heading: "E-bike class and trail access in NOVA",
      paragraphs: [
        "Virginia statute treats compliant e-bikes as bicycles without license or registration, but trail managers layer additional rules. NOVA Parks caps powered speed at 20 mph on the W&OD. NPS trails like Mount Vernon prohibit throttle-only propulsion and limit speed to 15 mph.",
        "Class 3 bikes are generally allowed on Virginia shared-use paths unless a locality prohibits them after public hearing—but federal compendiums and park speed caps still apply. Class 2 throttle bikes are legal on the W&OD; use throttle judiciously near pedestrians.",
        "Natural-surface trails designated nonmotorized may exclude all e-bike classes regardless of state defaults. Read /laws/virginia and /guides/are-class-3-ebikes-allowed-on-trails before assuming your class label guarantees access.",
      ],
    },
    {
      id: "how-to-choose",
      heading: "How to choose the right NOVA trail",
      paragraphs: [
        "Pick W&OD for distance, pavement, and flexible parking. Pick Mount Vernon for riverfront scenery if you accept NPS pedaling rules and crowds. Pick regional rail-trails like High Bridge when you want a driving destination and crushed-stone character.",
        "Match your bike class to the manager's policy before leaving home. Arlington and Alexandria riders should read /guides/riding-ebikes-in-arlington and /guides/riding-ebikes-in-alexandria for neighborhood connector and parking notes that this roundup does not duplicate.",
        "Verify trail conditions on NOVA Parks and NPS alert pages the week of your ride. Construction on W&OD overpasses and seasonal mud on crushed-stone corridors can change the best choice on any given weekend.",
      ],
    },
    {
      id: "related",
      heading: "Related trails, laws, and guides",
      paragraphs: [
        "Virginia law: /laws/virginia. Broader DC metro comparison: /guides/best-ebike-trails-near-washington-dc. Local riding: /guides/riding-ebikes-in-virginia, /guides/riding-ebikes-in-northern-virginia. Class framework: /guides/ebike-classes-explained.",
        "Individual trail pages contain access points, FAQ, and policy citations. This guide helps you choose among them—not replace them.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the longest paved e-bike trail in Northern Virginia?",
      answer:
        "The Washington & Old Dominion Trail offers roughly 45 miles of continuous paved rail-trail from Shirlington to Purcellville under NOVA Parks management.",
    },
    {
      question: "Are throttle e-bikes allowed on NOVA trails?",
      answer:
        "Class 2 e-bikes are permitted on the W&OD under NOVA Parks policy with a 20 mph powered-speed cap. NPS trails like Mount Vernon prohibit throttle-only propulsion—you must pedal when the motor assists.",
    },
    {
      question: "Can I ride Class 3 e-bikes on the W&OD?",
      answer:
        "Virginia law generally allows Class 3 on shared-use paths unless prohibited locally. NOVA Parks requires all e-bikes to operate at no more than 20 mph under motor power on the W&OD regardless of class label.",
    },
    {
      question: "Which NOVA trail is best for families?",
      answer:
        "The W&OD's eastern segments near Vienna and Reston offer flat pavement, playgrounds near trail crossings, and short out-and-back options. Avoid Mount Vernon on peak summer weekends if young riders are uncomfortable in crowds.",
    },
    {
      question: "Where should I check trail closures?",
      answer:
        "NOVA Parks posts W&OD alerts at novaparks.com. NPS updates Mount Vernon Trail conditions through George Washington Memorial Parkway channels. Always read trailhead signage on arrival.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "mid-atlantic-trail-etiquette",
    "riding-ebikes-in-virginia",
    "riding-ebikes-in-northern-virginia",
    "best-ebike-trails-near-washington-dc",
    "best-beginner-ebike-trails-near-dc",
  ],
  relatedTrails: ["washington-and-old-dominion-trail", "mount-vernon-trail", "high-bridge-trail"],
};
