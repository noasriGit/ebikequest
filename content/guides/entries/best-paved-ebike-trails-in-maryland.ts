import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const bestPavedEbikeTrailsInMaryland: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-best-paved-md",
  title: "Best Paved E-Bike Trails in Maryland",
  category: "riding-skills",
  description:
    "Maryland paved e-bike trails compared: Capital Crescent, B&A, Northeast Branch, and more—with class limits, parking, and who each path suits best.",
  slug: "best-paved-ebike-trails-in-maryland",
  readingTimeMinutes: 12,
  jurisdictions: ["maryland"],
  sections: [
    {
      id: "intro",
      heading: "Maryland's paved e-bike trail network",
      paragraphs: [
        "Maryland's three-class e-bike statute under Transportation Article § 21-1205.2 treats compliant bikes as bicycles on roads, but Class 3 is prohibited on most bicycle paths away from highway rights-of-way unless a managing agency explicitly allows it. County park directives add equipment caps—Montgomery and Prince George's parks often limit motors to 500 watts on paved trails.",
        "This roundup focuses on paved corridors eBikeQuest tracks that suit e-bike riders in the DC suburbs and Baltimore region. Crushed-stone rail-trails like the Northern Central Trail are excellent rides but fall outside this paved comparison—see individual trail pages for surface details.",
        "Use /guides/riding-ebikes-in-maryland and /laws/maryland for statewide rules before comparing specific trails below.",
        "Paved does not always mean Class 3-friendly in Maryland. Several popular paved bicycle paths prohibit Class 3 even when nearby roads allow it—confirm both surface and class before you drive to a trailhead.",
      ],
    },
    {
      id: "comparison",
      heading: "Quick comparison: paved Maryland trails",
      paragraphs: [
        "These paved trails differ in length, class permissions, and managing agency. Confirm current policy on each trail page before riding.",
      ],
      listItems: [
        "Capital Crescent Trail: ~11 mi; Class 1–2 only on MD segments; Montgomery Parks — /trails/maryland/capital-crescent-trail",
        "B&A Trail: ~13 mi; Class 1–3 with 15 mph county cap; Anne Arundel County — /trails/maryland/baltimore-and-ohio-trail",
        "Northeast Branch Trail: ~7 mi; Class 1–2 per PG Parks 500W cap; Prince George's County — /trails/maryland/northeast-branch-trail",
        "Indian Head Rail Trail: ~13 mi paved; Charles County — /trails/maryland/indian-head-rail-trail",
        "Northern Central Trail: crushed stone primary surface; not a paved pick — /trails/maryland/northern-central-trail",
      ],
    },
    {
      id: "best-overall",
      heading: "Best overall paved pick: Capital Crescent Trail",
      paragraphs: [
        "The Capital Crescent Trail is Maryland's busiest paved corridor—a former railroad grade from Silver Spring through Bethesda and Chevy Chase to the DC line. Good fit for commuters, visitors connecting to Georgetown, and riders who want a benchmark paved test ride with dining stops at Bethesda Row.",
        "Class 1 and Class 2 e-bikes only on Maryland bicycle-path segments. Montgomery Parks caps motors at 500 watts under Park Directive MC-21-001. Class 3 riders should choose the B&A Trail or on-road bike lanes instead. The NPS segment into Georgetown adds pedaling requirements and a 15 mph federal cap.",
        "Metro access at Bethesda and Silver Spring makes this trail practical without a car. Weekend mid-mornings are crowded—read /trails/maryland/capital-crescent-trail for crossing hazards and seasonal traction notes.",
      ],
    },
    {
      id: "best-beginner",
      heading: "Best beginner-friendly paved option: B&A Trail",
      paragraphs: [
        "Anne Arundel County's B&A Trail offers 13.3 miles of flat asphalt from Glen Burnie toward Annapolis with gentle grades and family-friendly rest stops like Earleigh Heights Ranger Station. Anne Arundel County permits Class 1, Class 2, and Class 3 e-bikes with a 15 mph trail speed limit for all users.",
        "Good fit for new e-bike owners testing range on a forgiving profile without navigating Capital Crescent's commuter density. The historic depot at Earleigh Heights provides an obvious turnaround with parking and restrooms.",
        "Beginners near DC who cannot drive to Anne Arundel may prefer the Northeast Branch Trail's flat PG County pavement with shorter mileage and tributary connections—see /guides/best-beginner-ebike-trails-near-dc for cross-jurisdiction options.",
      ],
    },
    {
      id: "best-dc-suburbs",
      heading: "Best for DC-area riders: Capital Crescent and Northeast Branch",
      paragraphs: [
        "Montgomery County's Capital Crescent links Bethesda to Georgetown—ideal for Red Line commuters and riders staying in Chevy Chase or Silver Spring. Prince George's County's Northeast Branch Trail serves Hyattsville, Riverdale Park, and College Park with connections toward the Anacostia tributary network.",
        "Good fit for suburban riders who want pavement without driving to Virginia. Both trails require attention at jurisdictional boundaries: Capital Crescent changes rules at the DC line; Northeast Branch connectors toward Bladensburg and the District may restrict e-bikes on specific NPS segments.",
        "Read /guides/riding-ebikes-in-bethesda for parking and Metro context around the Capital Crescent trailhead.",
      ],
    },
    {
      id: "best-scenic",
      heading: "Best scenic paved option: Capital Crescent (Rock Creek approach)",
      paragraphs: [
        "The wooded Rock Creek corridor and Potomac approaches near the DC boundary give Capital Crescent scenic value unusual for a commuter rail-trail. Good fit for riders who want shade and creek crossings without leaving pavement.",
        "Indian Head Rail Trail in Charles County offers a quieter 13-mile paved ride south of the beltway with rural character for riders willing to drive. It sees less congestion than Montgomery County spines.",
        "Scenic crushed-stone alternatives like Great Allegheny Passage segments exist in western Maryland but are not paved—this guide stays focused on asphalt corridors.",
      ],
    },
    {
      id: "best-long-distance",
      heading: "Best long paved day ride: B&A out-and-back",
      paragraphs: [
        "A Glen Burnie to Annapolis and return on the B&A covers roughly 26 miles on paved rail-trail—among the longest continuous paved day rides in Maryland outside the DC suburbs. Good fit for endurance riders testing e-bike battery range at the 15 mph county speed cap.",
        "Capital Crescent riders can extend mileage by connecting to the C&O Canal towpath at Georgetown, but the towpath is crushed stone with different NPS e-bike rules—not a paved extension. See /guides/best-long-distance-ebike-trails-va-md-dc for multi-surface touring options.",
      ],
    },
    {
      id: "class-access",
      heading: "E-bike class and paved trail access in Maryland",
      paragraphs: [
        "Maryland prohibits Class 3 e-bikes on bicycle paths like Capital Crescent unless the managing agency opts in—which Montgomery Parks has not done. Class 1 and Class 2 bikes meeting the 500-watt Montgomery Parks cap are appropriate on county paved trails.",
        "Anne Arundel County allows Class 3 on the B&A with the 15 mph trail limit. Prince George's County park directives align with 500-watt pedal-equipped e-bikes—effectively Class 1 and many Class 2 models. Always verify motor wattage labels before riding PG County trails.",
        "Statewide context: /laws/maryland and /guides/are-class-3-ebikes-allowed-on-trails. Equipment labeling requirements appear in /guides/ebike-classes-explained.",
      ],
    },
    {
      id: "how-to-choose",
      heading: "How to choose the right paved Maryland trail",
      paragraphs: [
        "DC suburb riders with Class 1 or Class 2 bikes should start with Capital Crescent or Northeast Branch based on which county they can reach without a car. Class 3 owners near Annapolis should consider the B&A. Riders seeking quiet pavement should look at Indian Head.",
        "Check county park directives annually—Montgomery and Prince George's updated e-bike rules in 2021 and 2023 respectively. Trailhead signage may lag published policy.",
        "Pair this roundup with /guides/best-ebike-trails-near-washington-dc when your ride crosses into Virginia or DC—Maryland pavement often connects to federal segments with stricter rules.",
        "Weekend planning matters on paved Maryland spines. Capital Crescent commuter density peaks weekday mornings; B&A Trail family traffic peaks Saturday before noon. Indian Head and Northeast Branch offer lower peak volumes for riders who want calmer pavement without leaving the launch region entirely.",
      ],
    },
    {
      id: "related",
      heading: "Related trails, laws, and guides",
      paragraphs: [
        "Maryland law: /laws/maryland. State riding guide: /guides/riding-ebikes-in-maryland. DC metro roundup: /guides/best-ebike-trails-near-washington-dc. Bethesda local context: /guides/riding-ebikes-in-bethesda.",
        "Trail detail pages contain parking, FAQ, and source citations. Verify policies before each ride.",
        "Montgomery County continues extending paved connectors toward Silver Spring and Wheaton—new segments may open with the same Class 1–2 limits as Capital Crescent even when older maps show gaps.",
      ],
    },
  ],
  faq: [
    {
      question: "Are Class 3 e-bikes allowed on paved trails in Maryland?",
      answer:
        "It depends on the trail. Maryland prohibits Class 3 on most bicycle paths unless the manager allows them. The B&A Trail permits Class 3 with a 15 mph cap; Capital Crescent prohibits Class 3 on Maryland segments.",
    },
    {
      question: "What is the best paved trail near Bethesda?",
      answer:
        "The Capital Crescent Trail is the primary paved corridor through Bethesda. Class 1 and Class 2 e-bikes meeting Montgomery Parks' 500-watt cap are appropriate. See /guides/riding-ebikes-in-bethesda for local access tips.",
    },
    {
      question: "Is the Capital Crescent Trail fully paved?",
      answer:
        "Yes on Montgomery County segments. The trail connects to an NPS paved segment into Georgetown. E-bike class and speed rules change at the DC boundary.",
    },
    {
      question: "Where can I park for Maryland paved trail rides?",
      answer:
        "Earleigh Heights Ranger Station on the B&A, Bethesda and Silver Spring on Capital Crescent, and Lake Artemesia area for Northeast Branch connections are popular options. Metro access works well for Capital Crescent.",
    },
    {
      question: "Do Maryland paved trails have speed limits?",
      answer:
        "Yes. Anne Arundel County enforces 15 mph on the B&A. Montgomery Parks requires reasonable and prudent speeds. Adjacent NPS segments may cap all bikes at 15 mph.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "riding-ebikes-in-maryland",
    "riding-ebikes-in-bethesda",
    "best-ebike-trails-near-washington-dc",
    "best-beginner-ebike-trails-near-dc",
    "are-class-3-ebikes-allowed-on-trails",
  ],
  relatedTrails: [
    "capital-crescent-trail",
    "baltimore-and-ohio-trail",
    "northeast-branch-trail",
    "indian-head-rail-trail",
  ],
};
