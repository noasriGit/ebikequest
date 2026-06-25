import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const buyingYourFirstEbike: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-buying-first",
  title: "Buying Your First E-Bike",
  category: "buying-guide",
  description: "Mid-Atlantic first e-bike buyer guide: motor types, battery range, class choice, test-ride checklist, and how VA, MD, and DC laws fit in.",
  slug: "buying-your-first-ebike",
  readingTimeMinutes: 6,
  sections: [
    {
      id: "start-with-your-routes",
      heading: "Start With How and Where You Will Actually Ride",
      paragraphs: [
        "Your first e-bike purchase should begin with a map, not a motor spec. List the trails, bike lanes, and errands you expect to ride most. A Northern Virginia commuter linking Shirlington, the W&OD, and Metro needs a different bike than a Baltimore waterfront rider or a DC resident storing a bike in a walk-up apartment.",
        "Mid-Atlantic terrain mixes flat rail-trails, rolling suburban connectors, and short but steep grades near the Potomac and Blue Ridge foothills. Distance, cargo, storage, and whether you cross into DC or Maryland determine class, battery size, and frame style more than top assist speed.",
        "Write down deal-breakers early: step-through frame, rack mounts, maximum weight, ability to bring the bike on Metro off-peak, or compatibility with a particular trail's e-bike policy. That list keeps test rides focused.",
      ],
    },
    {
      id: "class-first-decision",
      heading: "Pick Your Class Before You Pick a Brand",
      paragraphs: [
        "Class is a legal and access decision. Class 1 pedal-assist to 20 mph is the broadest choice for Virginia and Maryland rail-trails and matches DC's 20 mph motorized-bicycle definition in § 50-2201.02(11A). Class 2 adds throttle assist to 20 mph—helpful for mobility, but some paths discourage throttle use and NPS trails ban motor-only propulsion.",
        "Class 3 pedal-assist to 28 mph suits road-heavy commutes but triggers helmet mandates for all riders on Class 3 bikes in Virginia (§ 46.2-904.1(G)), age limits in Virginia (§ 46.2-908.1) and Maryland (§ 21-1205.2(b)), and path bans on many Maryland bicycle paths. DC's lack of a three-class statute creates uncertainty for Class 3 ownership—confirm current DDOT guidance if DC trips are core to your purchase.",
        "Buy a bike with a legible class label meeting Virginia § 46.2-904.1(C) or Maryland § 22-420. Avoid gray-market imports without labels or with advertised speeds above class limits.",
      ],
    },
    {
      id: "hub-vs-mid-drive",
      heading: "Hub Motor vs. Mid-Drive: What Matters Regionally",
      paragraphs: [
        "Hub motors mount in the front or rear wheel. They are common on value-priced commuters and city bikes, operate quietly, and need less drivetrain maintenance. Rear-hub weight can make lifting the bike onto Metro racks or apartment hooks harder.",
        "Mid-drive motors sit at the crank, use your gears for hill climbing, and feel natural on steeper grades—useful on routes with bridges and overpasses around DC and the Route 7 corridor. They cost more and wear chains and cassettes faster if you ride in high assist constantly.",
        "For mostly flat W&OD or Anacostia Riverwalk miles, a quality hub motor is sufficient. For mixed hill climbs between Arlington and Falls Church or toward Rockville on the Capital Crescent, test-ride mid-drive options alongside hub models.",
      ],
    },
    {
      id: "battery-range-real-world",
      heading: "Battery Size and Real-World Range in the Mid-Atlantic",
      paragraphs: [
        "Manufacturers quote range under ideal conditions—light rider, low assist, flat course. Mid-Atlantic reality includes humidity, winter cold that reduces cell efficiency, stop-and-go trail crossings, and headwinds along open river trails.",
        "Plan for roughly 60–70% of advertised range on hilly or high-assist commutes. A 500 Wh battery may suffice for 15-mile round-trip errands; daily 30-mile mixed commutes often justify 625–750 Wh or a spare charger at work.",
        "Removable batteries simplify apartment charging and winter storage. Confirm the charger is UL-listed, charge on hard surfaces away from flammable materials, and never leave a damaged pack on the bike overnight.",
      ],
      listItems: [
        "Wh (watt-hours) = voltage × amp-hours; more Wh generally means more range at similar assist.",
        "Eco and Tour modes extend range more than Turbo on Bosch, Shimano, and similar systems.",
        "Regenerative braking is rare on e-bikes; coasting and lower assist save more energy.",
        "Test rides should include a real hill—dealer parking-lot loops hide range killers.",
      ],
    },
    {
      id: "frame-style-and-fit",
      heading: "Frame Style, Fit, and Storage Reality",
      paragraphs: [
        "Step-through frames ease mounting in work clothes; traditional diamond frames offer stiffness for heavier riders and rack loads. Cargo and longtail e-bikes transform grocery runs but may not fit standard bike rooms or Metro dimensions—measure your storage before buying.",
        "Fit matters more with motor weight. A slightly small bike feels twitchy at 20 mph assist; too large and you cannot put a foot down confidently at trail stop signs. Budget for a professional fit or saddle adjustment after purchase.",
        "Fenders and integrated lights are worthwhile on Mid-Atlantic paths with tunnel sections and frequent rain. Many first-time buyers add them later at higher cost.",
      ],
    },
    {
      id: "test-ride-checklist",
      heading: "Test-Ride Checklist for Local Dealers and Demo Events",
      paragraphs: [
        "Shop local when possible—Virginia and Maryland dealers often know regional trail policies and can confirm class labeling. Bring the shoes and bag you commute with, and ride at least 20 minutes including a hill and a slow crowded segment if you can reach one.",
        "During the ride, check how smoothly assist engages from a stop, whether the throttle (if Class 2) is controllable at walking speed, and how the bike handles at the slow speeds you will use on shared paths. Listen for motor cutout at the class speed limit.",
        "Before paying, verify the class label, serial number, warranty coverage for battery cycles, and whether the shop services the brand in-house. Ask for the owner's manual and charger specs in writing.",
      ],
      listItems: [
        "Confirm class label matches the sales listing (Class 1, 2, or 3; wattage; top speed).",
        "Test walk mode or walk assist if you will use the bike on crowded trail segments.",
        "Check brake feel at full assist speed—hydraulic discs are common on quality first e-bikes.",
        "Note display readability in bright sun; you will rely on it for battery and assist level.",
        "If buying used, verify the label was not tampered with and battery health is documented.",
      ],
    },
    {
      id: "budget-and-value",
      heading: "Budget, Incentives, and Total Cost of Ownership",
      paragraphs: [
        "Quality new e-bikes from reputable dealers commonly start around $1,500–$2,500 for hub-motor commuters and rise for mid-drive, cargo, and long-range batteries. Add $150–$400 for helmet, lock, lights, and fenders; Class 3 Virginia riders need a CPSC- or ASTM-compliant helmet for every trip (§ 46.2-904.1(G)).",
        "Washington, DC has operated e-bike incentive programs authorized under D.C. Code § 50-921.27; availability and voucher amounts change by funding round—check DDOT for current enrollment before assuming a discount. Virginia and Maryland incentive programs vary by locality; they are not uniform statewide.",
        "Maintenance costs include brake pads, tires rated for e-bike weight, occasional drivetrain service, and battery replacement every three to six years depending on use. Factor these into your budget instead of comparing purchase price alone.",
      ],
    },
    {
      id: "after-you-buy",
      heading: "After You Buy: Registration, Insurance, and Trail Debut",
      paragraphs: [
        "Virginia and Maryland do not require registration or insurance for bikes meeting e-bike definitions (Virginia § 46.2-904.1(B); Maryland treats qualifying e-bikes as bicycles under § 21-1205.2). DC motorized bicycles likewise do not require the licensing tied to motor-driven cycles when the bike meets the 20 mph definition.",
        "Homeowners or renters insurance may cover theft with a scheduled rider; dedicated bicycle insurance exists for high-value models. Register your serial number with local police or a national bike registry.",
        "Your first rides should be on low-traffic trail segments at off-peak hours. Practice assist levels, passing calls, and mounting/dismounting before joining rush-hour commuters on the W&OD or Mount Vernon Trail. Pair your purchase with our trail etiquette and class guides so your first miles keep access open for everyone.",
      ],
    },
  ],
  faq: [
    {
      question: "Should my first e-bike be Class 1 or Class 2?",
      answer: "If most riding is on shared paths in Virginia or Maryland, Class 1 is the simplest choice for access and etiquette. Choose Class 2 if you need throttle help for starts or mobility—and accept that some trails restrict throttle-only riding and NPS trails require pedaling while using assist.",
    },
    {
      question: "How much battery do I need for a 20-mile commute?",
      answer: "A 500–625 Wh battery often handles 20 flat miles with moderate assist if you are not a heavy load and weather is mild. Build in margin for hills, headwinds, and cold weather; 750 Wh or charging at work is safer for daily reliance.",
    },
    {
      question: "Can I take an e-bike on Metro?",
      answer: "WMATA allows standard bicycles on Metro during off-peak hours with restrictions; e-bikes follow bicycle rules but size and weight matter for elevators and crowded cars. Check current WMATA policy before commuting—rules and peak restrictions change.",
    },
    {
      question: "Are cheap e-bikes from online marketplaces a good deal?",
      answer: "They often lack proper class labels, use uncertified batteries, or exceed 750 W—disqualifying them as e-bikes under Virginia and Maryland law. Local dealers provide warranty support and labeled bikes that match trail and traffic rules.",
    },
    {
      question: "Do I need a special helmet for a Class 3 e-bike in Virginia?",
      answer: "Virginia § 46.2-904.1(G) requires every Class 3 operator and passenger to wear a helmet meeting CPSC or ASTM bicycle helmet standards—not just riders under a certain age.",
    },
    {
      question: "What is the most common mistake first-time buyers make?",
      answer: "Buying too much speed or throttle for their actual routes. Many Mid-Atlantic riders overspend on Class 3 performance they cannot legally or safely use on the trails they imagined riding daily.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-battery-care",
    "mid-atlantic-trail-etiquette",
  ],
};
