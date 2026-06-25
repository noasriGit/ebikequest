import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ridingEbikesInMaryland: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-md-local",
  title: "Riding E-Bikes in Maryland: Local Tips",
  category: "local-riding",
  description: "Maryland rail-trails, DNR lands, and county paths: e-bike access by class, evolving park policies, and how to check rules before each ride.",
  slug: "riding-ebikes-in-maryland",
  readingTimeMinutes: 12,
  sections: [
    {
      id: "state-law-basics",
      heading: "Maryland law and the three-class system",
      paragraphs: [
        "Maryland adopted a three-class e-bike framework aligned with national model legislation. Properly classified e-bikes are generally permitted on roads, bike lanes, and many multi-use paths, with Class 3 operators required to be at least 16 and helmets mandatory for riders under 16.",
        "State law draws an important distinction for bicycle paths: Class 3 e-bikes are prohibited on bicycle paths unless the path is within or adjacent to a highway right-of-way or a local authority explicitly permits them. That makes Class 3 access on popular paved trails more complicated than in Virginia for some corridors.",
        "Local jurisdictions and land managers can further restrict Class 1 and Class 2 bikes on specific paths after public process. Maryland's statewide permissive defaults do not guarantee uniform trail access across counties.",
      ],
    },
    {
      id: "montgomery-prince-georges",
      heading: "Montgomery and Prince George's County trails",
      paragraphs: [
        "The Capital Crescent Trail connects Georgetown through Bethesda toward Silver Spring on paved surface and is one of the region's busiest e-bike commuting corridors. Class 1 and Class 2 e-bikes are permitted; crowded segments near downtown Bethesda reward reduced speeds and careful passing. Do not assume Class 3 access on this path.",
        "The Northeast Branch Trail and broader Anacostia Tributary Trail System offer paved suburban connections through Prince George's County. E-bikes meeting Maryland definitions—including Class 3 on many segments—are commonly used, but always confirm county park department updates and construction detours.",
        "Montgomery County's extensive paved network continues to expand with Purple Line-related projects. Temporary closures can push cyclists onto streets where Class 3 rules differ from path rules—plan alternate routes during major construction.",
      ],
    },
    {
      id: "baltimore-anne-arundel",
      heading: "Baltimore area and Anne Arundel trails",
      paragraphs: [
        "The B&A Trail runs roughly 13 paved miles between Annapolis and Glen Burnie and explicitly permits e-bikes meeting Maryland statutory definitions, including Class 3. It is a strong choice for newer e-bike owners testing range and handling on flat, family-friendly pavement.",
        "The Northern Central Trail (Torrey C. Brown Rail Trail) heads north from Cockeysville on crushed stone through Baltimore County countryside. E-bikes are permitted under Maryland law and long-standing trail practice; surface conditions and winter freeze-thaw cycles affect traction more than motor type for most riders.",
        "Patapsco Valley State Park near Ellicott City offers extensive mixed-surface networks where e-bike access varies by trail designation. Class 1 e-bikes may be allowed on select multi-use routes, while natural-surface hiking trails and adaptive mountain bike projects may prohibit throttle-equipped bikes or all e-bikes. Read park maps carefully—Patapsco is not a single uniform policy.",
      ],
    },
    {
      id: "western-maryland",
      heading: "Western Maryland: GAP and mountain corridors",
      paragraphs: [
        "The Maryland section of the Great Allegheny Passage offers crushed-stone touring through Garrett and Allegany counties toward Cumberland. E-bikes meeting Maryland definitions are permitted on the GAP's Maryland segment, making multi-day connections toward Pittsburgh increasingly popular for e-bike tourists—plan battery range for long distances between services.",
        "The Western Maryland Rail Trail parallels portions of the Potomac on paved surface and has historically been among the first DNR corridors to welcome e-bikes. Even here, verify current DNR guidance because statewide rule updates may adjust which classes are welcome on specific DNR-managed trails.",
        "Deep Creek Lake and Garrett County road riding combine steep grades with tourist traffic. Class 3 riders should expect motor-vehicle speeds on descents and use bike lanes or shoulders rather than sidewalks in resort towns.",
      ],
    },
    {
      id: "dnr-state-lands",
      heading: "Maryland DNR state lands: evolving e-bike rules",
      paragraphs: [
        "Maryland Department of Natural Resources manages state parks, forests, and wildlife areas where e-bike access has historically been more restrictive than on county rail-trails. For years, Class 1 e-bikes were explicitly permitted on select corridors such as the Torrey C. Brown and Western Maryland rail trails while many natural-surface trails prohibited all e-bikes.",
        "DNR proposed expanded Class 1 access to additional natural-surface trails beginning in 2025, with public comment and phased implementation. Under updated guidance, Class 1 pedal-assist e-bikes may be allowed on designated trails unless posted otherwise—but Class 2 throttle bikes and Class 3 speed pedelecs face tighter limits on DNR lands, and many pedestrian-only or habitat-sensitive trails remain off limits to all bikes.",
        "Because this policy area has changed recently, treat DNR's Bike and E-bike Regulation FAQ and trailhead signage as authoritative. Contact the land manager for the park you plan to visit if compendium language is unclear. eBikeQuest summaries may lag final rulemaking.",
      ],
      listItems: [
        "Class 1: broadest access on DNR trails where bicycles are allowed, unless posted closed.",
        "Class 2: often restricted on natural-surface DNR trails; may be allowed on some paved rail-trails and roads open to motorized vehicles.",
        "Class 3: generally prohibited on bicycle paths off highway rights-of-way; verify each trail.",
        "Wildlife Management Areas and pedestrian-only paths: assume no e-bike access unless explicitly signed open.",
      ],
    },
    {
      id: "southern-maryland-coastal",
      heading: "Southern Maryland and coastal routes",
      paragraphs: [
        "The Indian Head Rail Trail in Charles County offers flat, paved riding well suited to beginner e-bike owners and family outings. All classes of road-legal Maryland e-bikes are commonly permitted, but county maintenance schedules and summer heat mean early-morning rides improve comfort and battery efficiency.",
        "Assateague Island and coastal park roads introduce National Park Service and National Seashore management alongside Maryland rules. E-bike access may be limited to designated routes; wildlife management areas and boardwalk segments often restrict motorized bicycles including e-bikes. Seasonal congestion and sand surfaces challenge Class 2 throttle use—pedal-assist Class 1 behavior is safer and more welcome.",
        "Chesapeake Bay bridge routes do not accommodate bicycles; plan ferry or car shuttle alternatives for cross-bay touring.",
      ],
    },
    {
      id: "urban-commuting",
      heading: "Baltimore, DC-adjacent, and urban commuting",
      paragraphs: [
        "Baltimore City and inner-suburb riders use on-street bike lanes and shared-use paths for commuting. Local ordinances govern sidewalk riding; e-bikes are often treated more restrictively than non-assisted bikes on crowded pedestrian corridors.",
        "Routes linking Maryland to Washington, DC—such as the Capital Crescent, Metropolitan Branch connections, and Anacostia Riverwalk—cross jurisdictional boundaries. A trail permitted for your class in Bethesda may connect to a DC segment with different helmet or class expectations. Carry identification and read DC municipal regulations when crossing the District line.",
        "Transit integration varies: MARC and Metro allow folded non-electric bikes under rules that may exclude standard e-bikes due to weight and battery policies. Check transit agency guidance before combining rail and e-bike commutes.",
      ],
    },
    {
      id: "before-you-ride",
      heading: "Checklist for Maryland e-bike rides",
      paragraphs: [
        "Identify your bike class and the county or agency managing your trail. County parks, DNR state lands, and national seashores can all apply different rules within a single weekend tour.",
        "Check trailhead kiosks, DNR's outdoor recreation pages, and county bike program sites the week of your ride—Maryland's DNR e-bike expansion makes older blog posts unreliable.",
        "On multi-use paths, ride at conversational speeds near pedestrians, announce passes early, and dim assist levels when passing children and equestrians where shared corridors exist. Courteous riding preserves political support for continued e-bike access.",
      ],
    },
  ],
  faq: [
    {
      question: "Are e-bikes allowed on the B&A Trail?",
      answer: "Yes. The B&A Trail permits e-bikes that meet Maryland's statutory definitions, including Class 3. Observe posted speed guidance and crowded weekend etiquette.",
    },
    {
      question: "Can I ride a Class 3 e-bike on the Capital Crescent Trail?",
      answer: "No. The Capital Crescent Trail permits Class 1 and Class 2 e-bikes. Class 3 is prohibited on this path under current trail policy and Maryland bicycle path rules.",
    },
    {
      question: "What is Maryland DNR's e-bike policy on state park trails?",
      answer: "DNR policy has expanded recently. Class 1 e-bikes may be allowed on designated bicycle trails unless posted closed, while Class 2 and Class 3 face more limits on natural-surface state lands. Always verify the current FAQ and trailhead signs before riding.",
    },
    {
      question: "Is the Great Allegheny Passage e-bike friendly?",
      answer: "Yes on the Maryland segment for e-bikes meeting state definitions, including Class 3. Plan range carefully—services are spaced and crushed-stone surfaces increase energy use.",
    },
    {
      question: "Do I need a helmet on an e-bike in Maryland?",
      answer: "Riders under 16 must wear helmets. Older riders should check local trail requirements and ride with a helmet regardless for safety.",
    },
    {
      question: "Are throttle e-bikes allowed on Maryland rail-trails?",
      answer: "Class 2 e-bikes are allowed on many paved county rail-trails like the B&A and Indian Head, but may be restricted on DNR natural-surface trails and some park paths. Verify each trail's policy.",
    },
    {
      question: "Can local towns ban e-bikes entirely?",
      answer: "Localities can regulate sidewalks and specific paths but cannot override state e-bike classification on public roads. Trail access on county and state property is where local and agency rules matter most.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "mid-atlantic-trail-etiquette",
  ],
  jurisdictions: [
    "maryland",
  ],
};
