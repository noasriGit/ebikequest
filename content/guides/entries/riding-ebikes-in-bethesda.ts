import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ridingEbikesInBethesda: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-bethesda-local",
  title: "Riding E-Bikes in Bethesda, MD",
  category: "local-riding",
  description:
    "Bethesda e-bike guide: Capital Crescent Trail access, Maryland class limits, Metro parking, and Georgetown connection tips for Montgomery County.",
  slug: "riding-ebikes-in-bethesda",
  readingTimeMinutes: 11,
  jurisdictions: ["maryland"],
  sections: [
    {
      id: "overview",
      heading: "Overview: Bethesda's e-bike riding context",
      paragraphs: [
        "Bethesda is the primary trailhead town for the Capital Crescent Trail—one of the busiest paved paths in the United States. Montgomery County's dense bike network, Red Line Metro access, and proximity to Georgetown make Bethesda a hub for Maryland e-bike commuters and recreational riders.",
        "Maryland's three-class statute applies, but the Capital Crescent is a bicycle path where Class 3 is prohibited on Maryland segments. Montgomery Parks caps motors at 500 watts under Park Directive MC-21-001. Crossing into DC changes rules again on the NPS-managed Georgetown approach.",
        "For Maryland-wide context, see /guides/riding-ebikes-in-maryland. For paved trail comparisons, see /guides/best-paved-ebike-trails-in-maryland.",
        "Bethesda riders often underestimate how long the Georgetown connection takes during peak hours—budget extra time if you are meeting someone downtown and returning before Metro closes.",
        "Restaurant patios near Bethesda Row spill toward the trail on warm evenings. Slow to walking speed when diners sit close to the pavement edge.",
      ],
    },
    {
      id: "best-places",
      heading: "Best places to ride nearby",
      paragraphs: [
        "The Capital Crescent Trail runs from Silver Spring through Bethesda toward the DC line and Georgetown. Class 1 and Class 2 e-bikes are appropriate on Maryland segments. /trails/maryland/capital-crescent-trail",
        "Connecting to the C&O Canal towpath at Georgetown opens crushed-stone miles toward Great Falls—with NPS pedaling requirements and different surface rules than Bethesda pavement.",
        "Rock Creek Trail, Sligo Creek Trail, and Matthew Henson Trail offer additional Montgomery County paved options under the same park e-bike directive.",
      ],
    },
    {
      id: "beginner-routes",
      heading: "Beginner-friendly routes",
      paragraphs: [
        "Bethesda toward Chevy Chase on Capital Crescent covers 3–5 miles of flat pavement with an obvious turnaround at Bethesda Row—among the best beginner corridors near DC.",
        "Silver Spring to Bethesda southbound offers a similar profile with Talbot Avenue terminus parking and Metro access at Silver Spring station.",
        "See /guides/best-beginner-ebike-trails-near-dc for cross-jurisdiction beginner comparisons including Virginia's W&OD.",
      ],
    },
    {
      id: "commuting",
      heading: "Commuting considerations",
      paragraphs: [
        "Bethesda commuters ride Capital Crescent to Georgetown offices, NIH, and downtown DC destinations—often combining with Metro at Bethesda station for rainy-day backups.",
        "Morning rush (7–9 a.m.) and Saturday mid-mornings see the heaviest trail volumes. Drop assist early near Columbia Country Club underpass and driveway crossings with limited sight lines.",
        "Class 3 e-bike owners cannot legally use the Maryland Capital Crescent segments—commute on roads or choose Virginia's W&OD with appropriate speed caps instead.",
      ],
    },
    {
      id: "class-rules",
      heading: "E-bike class and local rule notes",
      paragraphs: [
        "Maryland prohibits Class 3 on bicycle paths like Capital Crescent unless the manager opts in—which Montgomery Parks has not done. Use Class 1 or Class 2 only on the trail.",
        "Montgomery Parks' 500-watt motor cap may exclude some high-wattage Class 2 imports—verify your motor label before riding.",
        "Sidewalk riding: Maryland HB 375 allows bicycle sidewalk riding unless locally prohibited, with pedestrian yield. DC prohibits motorized bicycles on sidewalks once you cross the line. /guides/can-you-ride-an-ebike-on-the-sidewalk",
        "Maryland law: /laws/maryland. Class 3 trails: /guides/are-class-3-ebikes-allowed-on-trails.",
      ],
    },
    {
      id: "parking-access",
      heading: "Parking and access tips",
      paragraphs: [
        "Bethesda trailhead near Bethesda Avenue and Wisconsin Avenue has limited parking—many riders use Bethesda Metro Red Line and ride west to the trail.",
        "Garage parking in downtown Bethesda is available for a fee on weekends. Residential street parking near trail crossings requires attention to permit zones.",
        "Silver Spring terminus offers an alternate access point when Bethesda lots are full.",
      ],
    },
    {
      id: "before-riding",
      heading: "What to check before riding",
      paragraphs: [
        "Verify Montgomery Parks trail alerts for construction near the Dalecarlia Tunnel and DC line approaches. Autumn leaves reduce traction under bridge decks.",
        "Before connecting to C&O Canal or DC trails, read NPS and District rules at /laws/washington-dc and /guides/riding-ebikes-in-washington-dc.",
        "DC metro roundup: /guides/best-ebike-trails-near-washington-dc.",
      ],
    },
    {
      id: "related",
      heading: "Related trails, laws, and guides",
      paragraphs: [
        "/laws/maryland. Trail page: /trails/maryland/capital-crescent-trail. State guide: /guides/riding-ebikes-in-maryland.",
        "DC crossing: /guides/riding-ebikes-in-washington-dc. Etiquette: /guides/mid-atlantic-trail-etiquette.",
      ],
    },
    {
      id: "equipment",
      heading: "Equipment and parking in Bethesda",
      paragraphs: [
        "Capital Crescent congestion rewards mirrors and a loud bell. Many trail users wear headphones—assume they cannot hear a quiet approach from behind.",
        "Bethesda Row garages accept bikes but elevator access varies. Confirm garage policies before carrying a heavy e-bike upstairs to an office.",
        "If you ride a Class 2 bike, practice pedaling through Bethesda's crowded segments even when throttle use is legal under Maryland law. It reduces conflict and prepares you for NPS pedaling rules after Georgetown.",
        "Montgomery County winter maintenance clears some priority paths after snow, but Capital Crescent underpasses ice over before main roads do. Consider Metro backup on icy mornings.",
      ],
    },
    {
      id: "nih-commute",
      heading: "NIH, downtown Bethesda, and commuter patterns",
      paragraphs: [
        "Bethesda's employment centers—including NIH, Walter Reed, and downtown offices—generate heavy Capital Crescent commute traffic weekday mornings. Eastbound riders toward Georgetown face the highest congestion between Bethesda Row and the Columbia Country Club underpass.",
        "Red Line Metro at Bethesda and Medical Center stations supports multimodal trips when rain or ice makes trail riding unappealing. Secure parking for e-bikes at Metro varies by station—arrive early for rack space.",
        "Evening return legs westbound toward Bethesda often feel faster with prevailing commute direction, but driveway crossings still require full stops regardless of assist level.",
      ],
    },
    {
      id: "georgetown-connection",
      heading: "Connecting to Georgetown and DC trails",
      paragraphs: [
        "The Capital Crescent continues into an NPS-managed segment toward Georgetown waterfront. Rules tighten at the boundary: pedaling required when the motor runs, 15 mph cap, and different enforcement culture than Montgomery County segments.",
        "Linking to the C&O Canal towpath from Georgetown opens crushed-stone miles with yet another policy layer. Tire choice and assist discipline matter when you transition from Bethesda pavement to NPS stone in one outing.",
        "Read /guides/riding-ebikes-in-washington-dc before assuming your Maryland-legal Class 2 ride stays legal on every DC connector you pick up after Georgetown.",
      ],
    },
    {
      id: "traffic-safety",
      heading: "Traffic and downtown crossing notes",
      paragraphs: [
        "Wisconsin Avenue and Old Georgetown Road intersections with the Capital Crescent see turning traffic that ignores trail exit markings. Creep slowly into crosswalks even when you have a green signal.",
        "Medical Center Drive and NIH campus approaches add shuttle buses and pedestrian volumes unrelated to trail traffic. Dismount zones appear near hospital entrances—obey posted instructions.",
        "Rockville Pike alternatives exist for riders who want on-road bike lanes instead of Capital Crescent congestion, but Rockville Pike itself is stressful without comfort in heavy traffic. Many Bethesda riders stay on the trail despite crowds rather than mixing with high-speed arterials.",
      ],
    },
    {
      id: "local-resources",
      heading: "Where to verify Montgomery County rules and alerts",
      paragraphs: [
        "Montgomery Parks trail alerts cover Capital Crescent construction, leaf removal schedules, and winter ice on underpasses. NIH and county road projects sometimes close connectors without updating trail apps immediately.",
        "Maryland Transportation Article rules live at /laws/maryland. Montgomery Parks Park Directive MC-21-001 adds the 500-watt equipment cap that state statute alone does not emphasize on trailhead signs.",
        "For DC connections after Georgetown, read /guides/riding-ebikes-in-washington-dc before assuming continuous legal riding on every connector segment.",
        "Bethesda Metro elevator outages occasionally force long detours with bikes. WMATA alerts matter when your commute plan depends on Medical Center or Bethesda station access.",
      ],
    },
  ],
  faq: [
    {
      question: "Are e-bikes allowed on the Capital Crescent Trail in Bethesda?",
      answer:
        "Yes for Class 1 and Class 2 e-bikes meeting Montgomery Parks' 500-watt cap. Class 3 is prohibited on Maryland bicycle-path segments.",
    },
    {
      question: "Where do I park for Capital Crescent rides in Bethesda?",
      answer:
        "Limited street parking near Bethesda Avenue and Wisconsin Avenue. Bethesda Metro Red Line is the most reliable access. Silver Spring terminus is an alternate.",
    },
    {
      question: "Can I ride from Bethesda to Georgetown on an e-bike?",
      answer:
        "Yes on Class 1 or Class 2 bikes through Maryland and NPS segments. Rules change at the DC line—NPS requires pedaling when the motor assists and caps speed at 15 mph on federal segments.",
    },
    {
      question: "Can I use a Class 3 e-bike in Bethesda?",
      answer:
        "On roads, yes with Maryland age and equipment rules. On the Capital Crescent Trail, no—Maryland prohibits Class 3 on that bicycle path.",
    },
    {
      question: "What Maryland law applies to Bethesda e-bike riders?",
      answer:
        "State three-class rules under Transportation Article § 21-1205.2 plus Montgomery Parks Park Directive MC-21-001. Full summary at /laws/maryland.",
    },
  ],
  relatedGuides: [
    "riding-ebikes-in-maryland",
    "best-paved-ebike-trails-in-maryland",
    "best-ebike-trails-near-washington-dc",
    "riding-ebikes-in-washington-dc",
    "are-class-3-ebikes-allowed-on-trails",
    "ebike-classes-explained",
  ],
  relatedTrails: ["capital-crescent-trail", "northeast-branch-trail"],
};
