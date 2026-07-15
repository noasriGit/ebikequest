import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const canYouRideAnEbikeOnTheSidewalk: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-sidewalk-ebike",
  title: "Can You Ride an E-Bike on the Sidewalk?",
  category: "regulations",
  description:
    "E-bike sidewalk rules explained: national patterns and Virginia, Maryland, and DC differences—including DC's ban on motorized bicycles on sidewalks.",
  slug: "can-you-ride-an-ebike-on-the-sidewalk",
  readingTimeMinutes: 10,
  jurisdictions: ["virginia", "maryland", "washington-dc"],
  sections: [
    {
      id: "short-answer",
      heading: "Short answer",
      paragraphs: [
        "Sidewalk e-bike rules depend on state and local law—not on whether your bike has a motor. Many states allow e-bikes on sidewalks unless a city or county prohibits them, but Washington, DC explicitly bans motorized bicycles from sidewalks and off-street bike paths regardless of whether you are pedaling.",
        "Virginia generally permits e-bikes on sidewalks unless a local ordinance says otherwise, with a duty to yield to pedestrians. Maryland changed statewide policy in 2025 to allow bicycle sidewalk riding unless locally prohibited, with yield requirements.",
        "Trail managers, business districts, and private property owners may impose additional restrictions. This guide is educational—not legal advice.",
        "Pedestrian volume matters as much as statute text. A sidewalk that is legal on paper may be impractical or unsafe at lunch hour in a dense commercial district—choose a lane or trail even when sidewalk riding is allowed.",
      ],
    },
    {
      id: "how-rules-work",
      heading: "How sidewalk rules usually work for e-bikes",
      paragraphs: [
        "Sidewalk riding is often regulated at the local level even when state law sets a default. Cities may ban sidewalk cycling in central business districts, near schools, or on specific corridors while allowing it in residential neighborhoods.",
        "Where e-bikes are treated as bicycles—as in Virginia and Maryland—sidewalk rules for bicycles typically apply to e-bikes unless an ordinance distinguishes motor power. DC is the exception: motorized bicycles face a categorical sidewalk ban separate from conventional bicycle rules.",
        "Pedestrian safety drives enforcement. Throttle-equipped Class 2 bikes attract more scrutiny on sidewalks than Class 1 pedal-assist models even when both are technically legal.",
      ],
    },
    {
      id: "why-classes-matter",
      heading: "Why Class 1, Class 2, and Class 3 matter on sidewalks",
      paragraphs: [
        "Class 1 pedal-assist bikes behave most like conventional bicycles at low speeds—often the least controversial on sidewalks where riding is permitted.",
        "Class 2 throttle bikes can accelerate without pedaling, which raises pedestrian conflict concerns. Some municipalities restrict throttle use on sidewalks even when the bike class is otherwise legal.",
        "Class 3 bikes reach higher assisted speeds on roads; on sidewalks they create significant hazard and enforcement risk wherever sidewalk riding is allowed at all. DC does not recognize Class 3 as legal e-bikes under its motorized-bicycle definition.",
        "See /guides/ebike-classes-explained for class definitions.",
      ],
    },
    {
      id: "virginia",
      heading: "Virginia notes",
      paragraphs: [
        "Virginia Code § 46.2-903 and § 46.2-904 allow bicycles—and by extension compliant e-bikes—on sidewalks unless a local ordinance prohibits them. Riders must yield to pedestrians and give an audible signal before passing.",
        "Localities may adopt stricter rules. Northern Virginia cities including Arlington and Alexandria maintain active bike program pages—check local codes before sidewalk commuting.",
        "Full details: /laws/virginia. NOVA trails like the W&OD offer safer alternatives to sidewalk riding—see /guides/best-ebike-trails-in-northern-virginia.",
      ],
    },
    {
      id: "maryland",
      heading: "Maryland notes",
      paragraphs: [
        "House Bill 375 (Jay's Law), effective October 1, 2025, establishes a statewide default allowing bicycle riding on sidewalks unless a local ordinance prohibits it. Riders must yield to pedestrians and users of electric personal assistive mobility devices.",
        "Baltimore City and other municipalities may still restrict sidewalk cycling in business districts by ordinance. Montgomery and Prince George's counties publish bike guidance—verify before assuming sidewalk access in downtown Bethesda or Silver Spring.",
        "Full details: /laws/maryland. Paved trail alternatives: /guides/best-paved-ebike-trails-in-maryland.",
      ],
    },
    {
      id: "washington-dc",
      heading: "Washington DC notes",
      paragraphs: [
        "DCMR § 18-1201.18 prohibits operating a motorized bicycle on any sidewalk or off-street bicycle path in the District—even when powered solely by human pedaling. This applies to qualifying Class 1 and Class 2 e-bikes that meet the motorized-bicycle definition.",
        "Conventional bicycles may use sidewalks outside the Central Business District subject to restrictions, but motorized bicycles may not. DDOT's E-Bike Guide reinforces this distinction for privately owned e-bikes.",
        "DC riders should use bike lanes, roadways, and permitted trail corridors instead. See /guides/riding-ebikes-in-washington-dc and /laws/washington-dc for commuting alternatives.",
      ],
    },
    {
      id: "trail-caveats",
      heading: "Sidewalk rules versus trail and path rules",
      paragraphs: [
        "A sidewalk permission does not extend to multi-use trails, park paths, or private shopping centers. Federal park trails follow NPS compendiums. County park trails follow park directives.",
        "When a bike lane ends abruptly at construction, dismounting and walking may be safer and more legal than sidewalk riding—especially in DC where motorized bicycles cannot use sidewalks at all.",
        "Read /guides/where-can-you-ride-an-ebike for a broader map of where e-bikes belong.",
      ],
    },
    {
      id: "before-riding",
      heading: "What riders should check before sidewalk riding",
      paragraphs: [
        "Look up municipal code for your city and county. Search for sidewalk bicycle prohibitions in business districts. In DC, assume sidewalk riding on a motorized bicycle is prohibited.",
        "Use lower assist modes, ride at walking speed near pedestrians, and dismount in crowded zones. Courteous behavior reduces pressure for blanket bans.",
        "When in doubt, choose a protected bike lane or multi-use trail. Mid-Atlantic trail etiquette guidance: /guides/mid-atlantic-trail-etiquette.",
        "Tourist districts, farmers markets, and school zones often have de facto dismount expectations even where sidewalk riding is technically legal. Local police may enforce pedestrian safety ordinances through warnings or citations when cyclists pass too closely or too quickly.",
        "If you are visiting from a state with permissive sidewalk rules, do not assume those rules carry into DC or into every Virginia county. Read the jurisdiction you are physically in at the moment—not the jurisdiction where you started your ride.",
      ],
    },
    {
      id: "alternatives",
      heading: "Alternatives to sidewalk riding near DC",
      paragraphs: [
        "Protected bike lanes expanded significantly in DC, Arlington, and Alexandria over the past decade. Montgomery County continues building buffered lanes along Rockville Pike and Georgia Avenue corridors. A five-minute detour to a lane often beats navigating crowded sidewalks illegally in DC or uncomfortably elsewhere.",
        "Multi-use trails like the W&OD, Capital Crescent, and Mount Vernon Trail exist precisely because sidewalk riding is a poor fit for faster wheeled traffic. See /guides/best-ebike-trails-near-washington-dc when you need a legal corridor instead of a sidewalk shortcut.",
        "When trails end at construction, walking your bike for a block is preferable to riding a motorized bicycle on a DC sidewalk. Plan routes with /guides/where-can-you-ride-an-ebike before you leave home.",
        "Capital Bikeshare and shared fleet bikes operate under separate DDOT permits. Fleet parking zones and sidewalk rules for dockless devices do not change private e-bike sidewalk restrictions in the District.",
      ],
    },
    {
      id: "related",
      heading: "Related law pages and guides",
      paragraphs: [
        "/laws, /laws/virginia, /laws/maryland, /laws/washington-dc. Related topics: /guides/do-you-need-a-license-for-an-ebike, /guides/ebike-regulations-overview.",
        "Verify local ordinances with official municipal sources—eBikeQuest summaries may not capture every neighborhood restriction.",
        "University campuses in the Mid-Atlantic often prohibit all wheeled devices on central walkways regardless of state sidewalk defaults. Treat quad walkways like pedestrian zones even when adjacent city sidewalks allow bicycles.",
        "Suburban office parks sometimes ban bikes on internal walkways while allowing them on perimeter roads. Security guards enforce private rules that do not appear in state code summaries.",
        "When in doubt, walk.",
      ],
    },
  ],
  faq: [
    {
      question: "Are e-bikes allowed on sidewalks in Virginia?",
      answer:
        "Generally yes under state law unless a local ordinance prohibits them. Riders must yield to pedestrians. Check Arlington, Alexandria, and other local codes for specific restrictions.",
    },
    {
      question: "Can you ride an e-bike on the sidewalk in Maryland?",
      answer:
        "Since October 1, 2025, HB 375 allows sidewalk bicycle riding unless a local ordinance prohibits it, with mandatory yield to pedestrians. Baltimore and other cities may restrict business districts.",
    },
    {
      question: "Can you ride an e-bike on the sidewalk in Washington DC?",
      answer:
        "No. DCMR § 18-1201.18 prohibits motorized bicycles on sidewalks and off-street bike paths in the District, even when pedaling only.",
    },
    {
      question: "Do Class 2 throttle e-bikes have different sidewalk rules?",
      answer:
        "State laws often treat all compliant e-bike classes alike on sidewalks, but local enforcement may scrutinize throttle use more heavily. DC bans all motorized bicycles from sidewalks regardless of class.",
    },
    {
      question: "What should I do when a bike lane ends?",
      answer:
        "Walk your bike on sidewalks where legal, use the next available bike lane, or choose an alternate street route. In DC, motorized bicycles cannot use sidewalks—plan road routes or dismount.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "where-can-you-ride-an-ebike",
    "riding-ebikes-in-washington-dc",
    "riding-ebikes-in-virginia",
  ],
};
