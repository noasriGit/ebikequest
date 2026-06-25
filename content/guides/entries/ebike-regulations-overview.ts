import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ebikeRegulationsOverview: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-regulations-overview",
  title: "E-Bike Regulations Overview",
  category: "regulations",
  description: "How federal, state, and local e-bike rules interact in the Mid-Atlantic—and which authority wins when trail and street policies conflict.",
  slug: "ebike-regulations-overview",
  readingTimeMinutes: 11,
  sections: [
    {
      id: "why-layers-matter",
      heading: "Why e-bike rules come in layers",
      paragraphs: [
        "E-bike regulation in the United States is not a single statute you can memorize once. Federal land agencies, state transportation codes, county park authorities, municipal ordinances, and private landowners each can influence where and how you ride. In the Mid-Atlantic—where Virginia, Maryland, and Washington, DC intersect across dense urban networks and federal parkland—the layers stack quickly.",
        "The same Class 2 e-bike may be legal on a Maryland county rail-trail, restricted on an adjacent DNR natural-surface loop, and prohibited on a National Park Service gravel path a mile away. Riders who understand the hierarchy spend less time surprised at trailheads and more time riding legally.",
        "This overview explains how those layers interact. It is not legal advice. For disputes or commercial use, consult an attorney and the authoritative sources cited by each land manager.",
      ],
    },
    {
      id: "federal-layer",
      heading: "Federal rules: NPS, USFS, and other public lands",
      paragraphs: [
        "Federal agencies manage substantial Mid-Atlantic acreage: National Park Service units along the Potomac, C&O Canal National Historical Park, Rock Creek Park, Shenandoah National Park, Chesapeake and Ohio corridors, National Seashores, and U.S. Forest Service lands in Virginia and Maryland.",
        "National Park Service policy, reaffirmed through 2024 environmental review, gives park superintendents discretion to allow e-bikes where traditional bicycles are allowed—on roads, parking areas, and designated trails—while prohibiting e-bikes in congressionally designated wilderness. Superintendents publish allowed classes and routes in park compendiums; NPS adopts non-conflicting state e-bike definitions where practical.",
        "U.S. Forest Service and other Department of Interior bureaus maintain separate e-bike guidance that may be more restrictive on non-motorized singletrack. Never assume a permissive Virginia or Maryland state trail policy automatically applies inside a federal unit. Check the specific park or forest website and compendium before loading your bike.",
      ],
      listItems: [
        "NPS: superintendent discretion; class limits vary by park; wilderness closed to all bikes.",
        "C&O Canal NHP: verify current towpath e-bike policy—historically distinct from adjacent county trails.",
        "National seashores and battlefields: often limit classes or require staying on designated paved routes.",
        "USFS: e-bike access depends on local forest orders; natural-surface trails may exclude all e-bikes.",
      ],
    },
    {
      id: "state-layer",
      heading: "State statutes: Virginia, Maryland, and DC",
      paragraphs: [
        "Virginia, Maryland, and the District of Columbia each codify three-class e-bike definitions with 750-watt motor limits and class-specific speed caps. All three generally treat compliant e-bikes as bicycles for licensing and registration—no driver's license or plate required—but age, helmet, and Class 3 path rules differ.",
        "Virginia permits Class 3 riders from age 14 and allows broader Class 3 access on many road-adjacent paths, while Virginia State Parks limit park trails to Class 1 and Class 2. Maryland requires Class 3 operators to be 16, prohibits Class 3 on most bicycle paths away from highways unless locally authorized, and routes DNR trail access through department regulations that change more frequently than state code.",
        "Washington, DC requires helmets for all e-bike riders regardless of age and regulates shared micromobility operators separately from privately owned e-bikes. DC streets and bike lanes are generally e-bike friendly, but NPS-managed park trails within DC boundaries follow federal compendiums that may be tighter than DC municipal code suggests on paper.",
      ],
    },
    {
      id: "local-layer",
      heading: "Local ordinances and county park authorities",
      paragraphs: [
        "Counties and cities regulate sidewalks, municipal parks, and sometimes shared-use paths built with local funds. Montgomery County, Prince George's County, Anne Arundel County, Arlington, Alexandria, Richmond, and Baltimore each maintain bike program pages or municipal codes addressing e-bikes.",
        "Local rules often target sidewalk riding, downtown pedestrian zones, boardwalks, and seasonal event closures rather than repealing state road access. HOAs, universities, and shopping centers add private restrictions—common around Northern Virginia tech campuses and Maryland university towns.",
        "Regional trail authorities such as NOVA Parks manage multi-jurisdiction corridors like the W&OD with their own policy documents that align with but are not identical to Virginia State Parks rules. A rider crossing from Fairfax to Loudoun may encounter different maintenance standards and signage even when class permissions match.",
      ],
    },
    {
      id: "restrictive-rule-wins",
      heading: "Which rule wins when policies conflict",
      paragraphs: [
        "The practical rule riders use: the most restrictive applicable policy governs. If Virginia law allows Class 3, a county path prohibits Class 3, and a federal compendium prohibits all e-bikes on a connecting segment, you must follow each restriction as you enter that jurisdiction or land unit.",
        "Posted signage at trailheads legally reinforces many manager decisions even when your online research suggested otherwise. If signage conflicts with a published compendium dated years ago, obey the sign and report the discrepancy to the land manager.",
        "Private property owners can exclude e-bikes entirely. Public rights-of-way do not extend onto private trails, parking garages, or apartment complexes unless easements say otherwise.",
      ],
    },
    {
      id: "class-as-key",
      heading: "Bike class is the universal sorting key",
      paragraphs: [
        "Land managers increasingly sort access by class rather than banning all assisted bikes. Class 1 pedal-assist to 20 mph receives the widest trail access. Class 2 throttle-assist to 20 mph faces scrutiny on shared paths where sudden acceleration worries pedestrians. Class 3 pedal-assist to 28 mph is often restricted on paths even when legal on adjacent roads.",
        "Manufacturers must label new e-bikes with class information in many jurisdictions, but aftermarket tuning, speed chips, and imports that exceed 750 watts can reclassify a bike as a motor vehicle. Riding a de-restricted bike on a family rail-trail creates legal risk and community conflict.",
        "If you are buying for trail-heavy Mid-Atlantic use, Class 1 or Class 2 bikes maximize access. Class 3 excels for road commuting but requires route-by-route verification when you leave the street network.",
      ],
    },
    {
      id: "enforcement",
      heading: "Enforcement, penalties, and real-world risk",
      paragraphs: [
        "Enforcement varies widely. Busy urban trails rely on education and occasional citations for reckless riding rather than class inspections at trailheads. Federal parks and state parks with resource concerns may enforce prohibitions more visibly when visitor complaints rise.",
        "Operating an unclassified motor vehicle on bicycle infrastructure can result in traffic citations, impoundment in extreme cases, and liability exposure if an crash occurs while riding illegally. Insurance policies may deny claims for incidents involving illegally modified bikes.",
        "Courteous riding is a regulatory strategy: land managers who observe safe sharing are less likely to tighten rules in response to conflict.",
      ],
    },
    {
      id: "finding-authoritative-sources",
      heading: "Finding authoritative sources before you ride",
      paragraphs: [
        "Start with state transportation code summaries—for Virginia Title 46.2, Maryland Transportation Article e-bike provisions, and DC Municipal Regulations for motorized bicycles. Pair state law with agency trail documents: Virginia DCR e-bike PDFs, Maryland DNR Bike and E-bike FAQ, NPS park compendiums, and county bike program pages.",
        "eBikeQuest trail and law pages synthesize these sources for Mid-Atlantic riders, including last-verified dates and links—but always confirm at the trailhead the week of your trip because rulemaking in Maryland DNR and NPS compendium updates can outpace any directory.",
        "Save PDFs or screenshot trailhead signs when you ride new routes. If policies change, your records clarify what applied on a given date—useful for community advocacy and personal peace of mind.",
      ],
    },
    {
      id: "dc-as-bridge",
      heading: "Washington, DC as a regulatory crossroads",
      paragraphs: [
        "The District functions as a connector between Maryland and Virginia trail networks, but it is its own jurisdiction with universal helmet requirements and Class 3 age minimums. Routes like the Capital Crescent, Metropolitan Branch Trail, Rock Creek Park paths, and Anacostia Riverwalk cross federal, District, and sometimes Maryland property within a single afternoon ride.",
        "Plan routes that minimize jurisdiction surprises: verify NPS segments separately from DDOT-managed lanes, carry a helmet regardless of your home state's age rules, and assume Class 3 restrictions on popular shared paths unless a current District or trail authority document explicitly allows them.",
        "Dockless shared e-bike fleets operate under DC permit conditions that do not change the rules for privately owned Class 2 or Class 3 bikes—but their parking zones and speed governors illustrate how local regulators think about motor power near pedestrians.",
      ],
    },
  ],
  faq: [
    {
      question: "Do federal rules override state e-bike laws?",
      answer: "On federal lands, superintendents set e-bike policy within the federal framework, often adopting state class definitions but not state trail permissiveness. On state and local roads, state and municipal law governs. The restrictive applicable rule wins at each boundary.",
    },
    {
      question: "Why can I legally ride on the road but not on a nearby trail?",
      answer: "Road access flows from state vehicle codes treating e-bikes as bicycles. Trails are managed by agencies that may restrict classes to reduce conflict or protect resources. Bicycle paths and natural-surface trails are the most common places for extra limits.",
    },
    {
      question: "Are e-bikes allowed in National Parks near DC?",
      answer: "Some NPS units allow e-bikes on select paved trails where traditional bikes are allowed; others restrict classes or routes. Rock Creek Park, the C&O Canal, and George Washington Memorial Parkway segments each require per-unit compendium checks—do not assume one park's rule applies to another.",
    },
    {
      question: "What happens if my e-bike exceeds 750 watts?",
      answer: "It may no longer qualify as an e-bike under Virginia, Maryland, or DC law and could be treated as a moped or motor vehicle, excluding it from bike lanes and trails. Enforcement and classification vary.",
    },
    {
      question: "How often do these rules change?",
      answer: "State codes change infrequently, but agency trail policies—especially Maryland DNR and NPS compendiums—can update annually or after public comment. Verify within a week of major trips.",
    },
    {
      question: "Does the most permissive rule ever apply?",
      answer: "No. If any applicable authority prohibits your bike class on a segment, you cannot legally ride there even if another jurisdiction's law is broader. Conflicts resolve toward the stricter rule.",
    },
    {
      question: "Where should I start research for a new trail?",
      answer: "Check eBikeQuest trail and law entries, then the land manager's official site and compendium, then trailhead signage on arrival. Call the park office if documents conflict or seem outdated.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "riding-ebikes-in-virginia",
    "riding-ebikes-in-maryland",
  ],
};
