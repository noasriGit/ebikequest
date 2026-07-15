import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const areClass3EbikesAllowedOnTrails: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-class3-trails",
  title: "Are Class 3 E-Bikes Allowed on Trails?",
  category: "regulations",
  description:
    "Class 3 e-bike trail access explained: federal, state, and local rules in Virginia, Maryland, and DC—including W&OD, Capital Crescent, and NPS paths.",
  slug: "are-class-3-ebikes-allowed-on-trails",
  readingTimeMinutes: 11,
  jurisdictions: ["virginia", "maryland", "washington-dc"],
  sections: [
    {
      id: "short-answer",
      heading: "Short answer",
      paragraphs: [
        "Class 3 e-bikes—pedal-assist models that cease motor assistance at 28 mph—are legal on many roads in Virginia and Maryland but face significant restrictions on shared-use trails, bicycle paths, and federal park routes. There is no single national trail rule.",
        "Maryland prohibits Class 3 on most bicycle paths unless the path is within or adjacent to a highway right-of-way or the managing agency explicitly allows Class 3. Virginia permits Class 3 on shared-use paths unless a locality prohibits them after public hearing, but federal parks and regional authorities often cap operational speed below 28 mph.",
        "Washington, DC does not recognize stock Class 3 bikes as legal motorized bicycles because they exceed the 20 mph motor cap. Trail access in DC is a separate question governed largely by NPS compendiums.",
        "Speed pedelec owners shopping for trail access should weigh whether Class 3 road capability is worth the trail restrictions you will hit on Maryland bicycle paths and many NPS routes near DC.",
        "This is regulatory information, not legal advice. Verify current statutes and trail manager policies before riding.",
      ],
    },
    {
      id: "how-rules-work",
      heading: "How trail access rules layer on top of state law",
      paragraphs: [
        "State statutes set defaults for where e-bike classes may ride. Land managers—county parks, state DNR, National Park Service, regional authorities like NOVA Parks—then publish trail-specific policies that may be more restrictive than state law.",
        "The restrictive rule wins at each boundary. A Class 3 bike legal on a Virginia road may be prohibited on a Maryland bicycle path one mile away. A bike legal under NOVA Parks policy may still face NPS throttle or pedaling rules on a connecting federal segment.",
        "Read /guides/ebike-regulations-overview for the full hierarchy framework.",
      ],
    },
    {
      id: "why-classes-matter",
      heading: "Why Class 3 faces more trail restrictions",
      paragraphs: [
        "Class 3 bikes assist to 28 mph—faster than most pedestrians and many casual cyclists travel on shared paths. Trail managers cite pedestrian safety, user conflict, and insurance concerns when restricting Class 3 even while allowing Class 1.",
        "Class 1 (20 mph pedal-assist) and Class 2 (20 mph with optional throttle) receive wider trail access because their speed caps align with typical multi-use path design assumptions.",
        "Operational speed caps add another layer: NOVA Parks limits all e-bikes to 20 mph motor-assisted speed on the W&OD regardless of class label. NPS often caps e-bikes at 15 mph on designated routes.",
      ],
    },
    {
      id: "virginia",
      heading: "Virginia notes",
      paragraphs: [
        "Virginia Code § 46.2-904.1(F)(2) allows localities and state agencies to prohibit Class 3 e-bikes on shared-use paths. The statewide default is permissive, but individual trail networks opt in or out.",
        "NOVA Parks permits Class 3 on the W&OD Trail with a 20 mph operational cap under motor power. NPS trails like the Mount Vernon Trail allow only Class 1 and Class 2 with mandatory pedaling. Virginia State Parks limit many natural-surface trails to Class 1 and Class 2.",
        "Trail examples: /trails/virginia/washington-and-old-dominion-trail (Class 3 with 20 mph cap), /trails/virginia/mount-vernon-trail (Class 1–2 only). Law summary: /laws/virginia.",
      ],
    },
    {
      id: "maryland",
      heading: "Maryland notes",
      paragraphs: [
        "Maryland Transportation Article § 21-1205.2(a)(2)(ii) prohibits Class 3 e-bikes on bicycle paths unless the path is within or adjacent to a highway right-of-way or the controlling agency expressly allows Class 3.",
        "In practice, popular bicycle paths like the Capital Crescent Trail prohibit Class 3 on Maryland segments. Anne Arundel County's B&A Trail permits Class 3 with a 15 mph trail speed limit—a rare paved-path exception.",
        "Montgomery and Prince George's park directives cap equipment at 500 watts, which excludes many Class 3 configurations regardless of path-specific class rules. Law summary: /laws/maryland. Paved trail roundup: /guides/best-paved-ebike-trails-in-maryland.",
      ],
    },
    {
      id: "washington-dc",
      heading: "Washington DC notes",
      paragraphs: [
        "DC does not use class labels in statute. Stock Class 3 bikes exceed the 20 mph motorized-bicycle definition and may not be street-legal as e-bikes at all. Trail access on NPS routes in DC—C&O Canal, Rock Creek, Capital Crescent federal segment—generally follows NPS e-bike policy with Class 1–2 limits and pedaling requirements on many paths.",
        "DCMR sidewalk and off-street bike path rules prohibit motorized bicycles from those facilities regardless of class. Plan road and permitted federal trail segments separately.",
        "Law summary: /laws/washington-dc. Local guide: /guides/riding-ebikes-in-washington-dc.",
      ],
    },
    {
      id: "trail-caveats",
      heading: "Trail manager caveats and posted rules",
      paragraphs: [
        "Always read trailhead signage. Compendiums update seasonally. A 2024 blog post may not reflect a 2026 superintendent order.",
        "Natural-surface trails designated nonmotorized may exclude all e-bike classes in Virginia and Maryland regardless of Class 3-specific statutes.",
        "Courteous riding at reduced assist preserves access. Communities that experience Class 3 conflict on crowded paths push managers toward stricter bans.",
      ],
    },
    {
      id: "before-riding",
      heading: "What Class 3 owners should check before trail rides",
      paragraphs: [
        "Identify the trail manager before you leave home. Read the eBikeQuest trail page, then verify the agency's current published policy.",
        "If a trail prohibits Class 3, use on-road bike lanes or choose a Class 3-legal corridor like the W&OD with the 20 mph operational cap—not the Capital Crescent Maryland segment.",
        "Consider whether a Class 1 or Class 2 bike better matches your trail-heavy riding style. See /guides/ebike-classes-explained and /guides/best-ebike-trails-near-washington-dc.",
        "Class 3 owners commuting from Virginia into Maryland should map every bicycle-path segment on the route. A legal road approach can dead-end at a Maryland bicycle path that prohibits Class 3 even when the same brand of rail-trail in Virginia would have allowed it with a speed cap.",
        "Document trail manager contact information for long tours. If signage conflicts with a published compendium, obey the sign and follow up with the agency after your ride.",
      ],
    },
    {
      id: "regional-examples",
      heading: "Regional examples: Class 3 on popular Mid-Atlantic trails",
      paragraphs: [
        "W&OD Trail (Virginia): Class 3 permitted with 20 mph operational cap under NOVA Parks guidance. Good fit for Class 3 owners who will actively limit assist on the path.",
        "Capital Crescent Trail (Maryland): Class 3 prohibited on bicycle-path segments. Class 3 owners should not use the Maryland portion even if they enter from Virginia.",
        "Mount Vernon Trail (NPS): Class 1 and Class 2 only with pedaling requirements. Class 3 owners should use on-road Potomac crossings or the W&OD instead.",
        "B&A Trail (Anne Arundel): Class 3 permitted with 15 mph trail cap—a useful paved alternative for Class 3 riders who cannot use Capital Crescent.",
        "These examples illustrate why Class 3 is not a single answer for trail access. Always read the current trail page before riding.",
      ],
    },
    {
      id: "related",
      heading: "Related law pages and guides",
      paragraphs: [
        "/laws, /laws/virginia, /laws/maryland, /laws/washington-dc. Trail etiquette: /guides/mid-atlantic-trail-etiquette. Trail roundups: /guides/best-ebike-trails-in-northern-virginia, /guides/best-paved-ebike-trails-in-maryland.",
        "eBikeQuest trail pages document class policies as of last verification—confirm at the trailhead.",
        "Land managers sometimes trial temporary Class 3 bans after safety incidents even when state law remains permissive. Community feedback and incident reports influence those trials—ride courteously to avoid becoming the anecdote that tightens rules.",
      ],
    },
  ],
  faq: [
    {
      question: "Are Class 3 e-bikes allowed on the W&OD Trail?",
      answer:
        "Virginia law generally permits Class 3 on shared-use paths unless prohibited locally. NOVA Parks allows Class 3 on the W&OD but requires motor-assisted speed at or below 20 mph on the trail.",
    },
    {
      question: "Can I ride a Class 3 e-bike on the Capital Crescent Trail?",
      answer:
        "Not on Maryland bicycle-path segments. Maryland § 21-1205.2 prohibits Class 3 on bicycle paths like Capital Crescent unless the manager opts in—which Montgomery Parks has not done.",
    },
    {
      question: "Are Class 3 e-bikes allowed on National Park Service trails?",
      answer:
        "NPS allows e-bikes where traditional bicycles are allowed, subject to each park's compendium. Many Mid-Atlantic NPS trails limit classes, require pedaling, and cap speed at 15 mph.",
    },
    {
      question: "Is a Class 3 e-bike legal on trails in Washington DC?",
      answer:
        "Stock Class 3 bikes may not qualify as legal motorized bicycles in DC due to the 20 mph motor cap. NPS trails in DC follow federal compendiums that often restrict classes further.",
    },
    {
      question: "What is the best trail for Class 3 riders near DC?",
      answer:
        "The W&OD Trail in Virginia is a common choice with a 20 mph operational cap. Avoid Maryland bicycle paths that prohibit Class 3. Verify current NOVA Parks guidance before riding.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "mid-atlantic-trail-etiquette",
    "best-ebike-trails-in-northern-virginia",
    "best-paved-ebike-trails-in-maryland",
    "riding-ebikes-in-washington-dc",
  ],
  relatedTrails: [
    "washington-and-old-dominion-trail",
    "capital-crescent-trail",
    "mount-vernon-trail",
    "c-and-o-canal-towpath-dc",
  ],
};
