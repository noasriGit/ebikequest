import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ebikeClassesExplained: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-ebike-classes",
  title: "E-Bike Classes Explained: Class 1, 2, and 3",
  category: "getting-started",
  description: "Learn Class 1, 2, and 3 e-bike definitions, Virginia and Maryland rules, and how DC differs—so you pick the right bike and trail access.",
  slug: "ebike-classes-explained",
  readingTimeMinutes: 7,
  sections: [
    {
      id: "why-classes-matter",
      heading: "What Are E-Bike Classes and Why Do They Matter?",
      paragraphs: [
        "If you are shopping for an e-bike or planning a ride on a Mid-Atlantic rail-trail, you will hear land managers, dealers, and state statutes refer to Class 1, Class 2, and Class 3. These labels are not marketing tiers—they describe how the motor assists you and the maximum assisted speed the bike is designed to deliver.",
        "The three-class system was developed by the bicycle industry and promoted through PeopleForBikes model legislation so states could treat low-speed electric bicycles like traditional bicycles instead of lumping them in with mopeds or motorcycles. Virginia and Maryland have adopted that framework in statute. Washington, DC uses a different, speed-based definition that does not reference Class 1, 2, or 3 in code—an important distinction when you ride across jurisdictional lines.",
        "On eBikeQuest, class matters because trail access, helmet rules, and age limits often depend on it. The most permissive statewide rule does not always govern: federal park compendiums, county park ordinances, and individual trail managers can add restrictions on top of state law.",
      ],
    },
    {
      id: "peopleforbikes-framework",
      heading: "The PeopleForBikes Three-Class Framework",
      paragraphs: [
        "PeopleForBikes defines an electric bicycle as a cycle with fully operable pedals and an electric motor of less than 750 watts (1 horsepower). Every class must meet that baseline. Manufacturers participating in the model law affix a permanent label showing the class number, top assisted speed, and motor wattage.",
        "The framework separates bikes by how the motor engages and how fast assistance continues:",
      ],
      listItems: [
        "Class 1: Pedal-assist only. The motor helps only while you are pedaling and stops assisting at 20 mph.",
        "Class 2: Throttle-assist. The motor may propel the bike without pedaling, but assistance ceases at 20 mph.",
        "Class 3: Pedal-assist only, like Class 1, but assistance may continue until 28 mph. Class 3 bikes must have a speedometer under model legislation adopted by Virginia and Maryland.",
      ],
    },
    {
      id: "class-1-explained",
      heading: "Class 1 E-Bikes: Pedal-Assist Up to 20 MPH",
      paragraphs: [
        "Class 1 e-bikes feel closest to a conventional bicycle with a strong tailwind. You must pedal to receive motor help, which makes acceleration predictable for other trail users. Because assistance cuts off at 20 mph, Class 1 bikes align with typical cruising speeds on crowded shared-use paths.",
        "Under PeopleForBikes model policy, Class 1 and Class 2 e-bikes are generally allowed on paths and trails where traditional bicycles are allowed unless a local agency restricts them. Virginia Code § 46.2-904.1(F) defaults to allowing e-bikes wherever bicycles may ride, including bicycle lanes and shared-use paths, subject to local prohibitions. Maryland Transportation Code § 21-1205.2(a) similarly permits e-bikes where bicycles may travel.",
        "Class 1 models dominate the commuter and rail-trail market in Northern Virginia and Maryland. They are a practical default if your primary routes include the W&OD Trail, Capital Crescent Trail, or suburban bike lanes where managers prefer pedal-assist operation.",
      ],
    },
    {
      id: "class-2-explained",
      heading: "Class 2 E-Bikes: Throttle-Assist Up to 20 MPH",
      paragraphs: [
        "Class 2 e-bikes add a throttle, so the motor can move the bike without pedaling—useful for starts at intersections, steep ramps, or riders who need occasional rest. Assistance still stops at 20 mph under the class definition.",
        "Throttle capability makes Class 2 bikes more controversial on shared paths. Some trail users worry about silent acceleration from a standstill. On George Washington Memorial Parkway trails managed by the National Park Service, using the electric motor to move an e-bike without pedaling is prohibited except where public motor vehicle use is allowed—meaning throttle-only operation is effectively banned on trails like the Mount Vernon Trail even when the bike is otherwise permitted.",
        "Virginia allows localities to ban Class 1 or Class 2 e-bikes from a shared-use path only after notice and a public hearing (§ 46.2-904.1(F)(1)). Maryland allows a local authority or state agency with jurisdiction over a bicycle path to prohibit Class 1 or Class 2 operation on that path (§ 21-1205.2(a)(2)(i)). Always read posted rules; a Class 2 bike legal on the road may still be unwelcome on a specific path.",
      ],
    },
    {
      id: "class-3-explained",
      heading: "Class 3 E-Bikes: Speed Pedelecs Up to 28 MPH",
      paragraphs: [
        "Class 3 e-bikes—sometimes called speed pedelecs—offer pedal-assist up to 28 mph. They suit longer road commutes and riders who can keep pace with urban traffic in bike lanes. There is no throttle under the class definition; you must pedal to receive power.",
        "Higher assisted speed brings stricter rules. Virginia requires every Class 3 operator and passenger to wear a bicycle helmet meeting CPSC or ASTM standards (§ 46.2-904.1(G)). Virginia also prohibits anyone under 14 from operating a Class 3 e-bike unless under the immediate supervision of a person at least 18 years old (§ 46.2-908.1). Maryland prohibits anyone under 16 from operating a Class 3 e-bike on a public highway (§ 21-1205.2(b)(1)), though a younger child may ride as a passenger on a bike designed for passengers.",
        "Trail access for Class 3 is narrower. Virginia allows state agencies and localities to prohibit Class 3 e-bikes on shared-use paths without a hearing (§ 46.2-904.1(F)(2)). Maryland bars Class 3 e-bikes from bicycle paths unless the path is within or adjacent to a highway right-of-way or the managing agency explicitly allows them (§ 21-1205.2(a)(2)(ii)). Plan Class 3 ownership around road and bike-lane routes rather than assuming rail-trail access.",
      ],
    },
    {
      id: "mid-atlantic-state-law",
      heading: "How Virginia, Maryland, and DC Define E-Bikes",
      paragraphs: [
        "Virginia defines electric power-assisted bicycles and three classes in Code of Virginia § 46.2-100, with operating rules in § 46.2-904.1. E-bikes meeting the definition are treated as bicycles: no driver's license, registration, title, or insurance requirement (§ 46.2-904.1(A)–(B)).",
        "Maryland's definitions live in Transportation Article § 11-117.1, with operation and path rules in § 21-1205.2 and equipment requirements in § 22-420. Maryland requires helmets for operators and passengers under 16 on bicycles, which includes e-bikes, under § 21-1207.1.",
        "Washington, DC does not use the three-class framework in statute. D.C. Code § 50-2201.02(11A) defines a motorized bicycle as a two- or three-wheeled device with operable pedals and a motor incapable of propelling the device faster than 20 mph on level ground. D.C. Municipal Regulations 18 DCMR § 1200.10 requires operators of motorized bicycles to be at least 16. Helmets are required for operators and passengers under 16 under § 50-1605.",
        "Legal uncertainty in DC: A stock Class 3 e-bike is designed to assist to 28 mph, which exceeds the 20 mph motorized-bicycle cap. PeopleForBikes notes that DC treats devices above that threshold as motor-driven cycles requiring licensing and registration, but published DC agency guidance on enforcement against pedal-assist Class 3 bikes is limited. If you ride in DC, verify current DDOT guidance before assuming Class 3 street legality.",
      ],
    },
    {
      id: "labels-and-modifications",
      heading: "Class Labels, Watt Limits, and Illegal Modifications",
      paragraphs: [
        "Since January 1, 2021, Virginia requires manufacturers and distributors to affix a permanent class label in Arial at least nine-point type (§ 46.2-904.1(C)(1)). Maryland imposed a similar labeling requirement effective January 1, 2020 (§ 22-420(a)). The label is your first check when buying used or when a land manager asks what you are riding.",
        "Both states prohibit tampering that changes motor-powered speed capability unless the label is updated after modification (Virginia § 46.2-904.1(D); Maryland § 22-420(b)). Aftermarket tuning, chip swaps, or removing speed limiters can reclassify your bike as an unregistered motor vehicle and void trail access.",
        "Bikes with motors rated above 750 watts or without operable pedals generally fall outside the e-bike definition and are not covered by this guide. When in doubt, match the label, manual, and manufacturer specifications—not the seller's description.",
      ],
    },
    {
      id: "choosing-the-right-class",
      heading: "Choosing the Right Class for Mid-Atlantic Riding",
      paragraphs: [
        "Match class to where you actually ride. For paved rail-trails, suburban paths, and mixed pedestrian routes across Virginia and Maryland, Class 1 is the safest default and the easiest to defend when policies tighten. Class 2 suits riders who want throttle help for hills or mobility reasons but accept that some managers restrict throttle use or ban the class on specific paths.",
        "Choose Class 3 if your commute is primarily on roads and protected bike lanes and you want assist up to 28 mph—but budget for a quality helmet, confirm you meet age requirements, and verify each path along your route. In DC, prioritize bikes that clearly qualify as motorized bicycles under the 20 mph cap unless you have confirmed legal guidance for faster pedal-assist models.",
        "Before you buy, search eBikeQuest trail pages for your target routes and read the jurisdiction law summaries for Virginia, Maryland, and DC. Class is the starting point; the trail manager's posted rule is the final word.",
      ],
    },
  ],
  faq: [
    {
      question: "How do I tell what class my e-bike is?",
      answer: "Look for the manufacturer label required by Virginia § 46.2-904.1 and Maryland § 22-420. It should state the class number, top assisted speed, and motor wattage. Your owner's manual and the bike's settings (pedal-assist only vs. throttle, maximum assist speed) should match the label.",
    },
    {
      question: "Are all three classes legal on Virginia roads?",
      answer: "Yes. Virginia § 46.2-904.1 treats qualifying Class 1, 2, and 3 electric power-assisted bicycles as bicycles on streets, highways, shoulders, and bike lanes unless a more specific restriction applies. Class 3 operators and passengers must wear helmets, and riders under 14 face limits on operating Class 3 bikes under § 46.2-908.1.",
    },
    {
      question: "Can I ride a Class 3 e-bike on the W&OD Trail?",
      answer: "Virginia's default under § 46.2-904.1(F) allows Class 3 on shared-use paths unless a locality or state agency prohibits them. NOVA Parks publishes trail etiquette for e-bikes on the W&OD but does not publish a separate Class 3 ban as of its current guidance. Policies change—check NOVA Parks and posted signage before riding.",
    },
    {
      question: "Does Washington, DC recognize Class 1, 2, and 3?",
      answer: "Not in statute. DC defines motorized bicycles by a 20 mph capability cap (§ 50-2201.02(11A)), not by the three-class labels. Class 1 and Class 2 models that meet the 20 mph cap generally fit the definition; Class 3 legality in DC is uncertain because the statutory definition emphasizes maximum speed, not industry class labels.",
    },
    {
      question: "What happens if I remove the speed limiter on my e-bike?",
      answer: "Virginia and Maryland both prohibit modifications that change motor-powered speed capability without updating the required class label. A modified bike may no longer qualify as an electric bicycle and can become subject to motor-vehicle licensing, registration, and insurance rules.",
    },
    {
      question: "Do I need a license for any e-bike class in Maryland?",
      answer: "No. Maryland treats electric bicycles that meet § 11-117.1 as bicycles for licensing purposes. Operators under 16 may not ride Class 3 e-bikes on public highways under § 21-1205.2(b)(1).",
    },
  ],
  relatedGuides: [
    "mid-atlantic-trail-etiquette",
    "ebike-regulations-overview",
    "riding-ebikes-in-virginia",
  ],
};
