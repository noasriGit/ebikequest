import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

export const guides: Guide[] = [
  {
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
          "On eBikeQuest, class matters because trail access, helmet rules, and age limits often depend on it. The most permissive statewide rule does not always govern: federal park compendiums, county park ordinances, and individual trail managers can add restrictions on top of state law."
        ]
      },
      {
        id: "peopleforbikes-framework",
        heading: "The PeopleForBikes Three-Class Framework",
        paragraphs: [
          "PeopleForBikes defines an electric bicycle as a cycle with fully operable pedals and an electric motor of less than 750 watts (1 horsepower). Every class must meet that baseline. Manufacturers participating in the model law affix a permanent label showing the class number, top assisted speed, and motor wattage.",
          "The framework separates bikes by how the motor engages and how fast assistance continues:"
        ],
        listItems: [
          "Class 1: Pedal-assist only. The motor helps only while you are pedaling and stops assisting at 20 mph.",
          "Class 2: Throttle-assist. The motor may propel the bike without pedaling, but assistance ceases at 20 mph.",
          "Class 3: Pedal-assist only, like Class 1, but assistance may continue until 28 mph. Class 3 bikes must have a speedometer under model legislation adopted by Virginia and Maryland."
        ]
      },
      {
        id: "class-1-explained",
        heading: "Class 1 E-Bikes: Pedal-Assist Up to 20 MPH",
        paragraphs: [
          "Class 1 e-bikes feel closest to a conventional bicycle with a strong tailwind. You must pedal to receive motor help, which makes acceleration predictable for other trail users. Because assistance cuts off at 20 mph, Class 1 bikes align with typical cruising speeds on crowded shared-use paths.",
          "Under PeopleForBikes model policy, Class 1 and Class 2 e-bikes are generally allowed on paths and trails where traditional bicycles are allowed unless a local agency restricts them. Virginia Code § 46.2-904.1(F) defaults to allowing e-bikes wherever bicycles may ride, including bicycle lanes and shared-use paths, subject to local prohibitions. Maryland Transportation Code § 21-1205.2(a) similarly permits e-bikes where bicycles may travel.",
          "Class 1 models dominate the commuter and rail-trail market in Northern Virginia and Maryland. They are a practical default if your primary routes include the W&OD Trail, Capital Crescent Trail, or suburban bike lanes where managers prefer pedal-assist operation."
        ]
      },
      {
        id: "class-2-explained",
        heading: "Class 2 E-Bikes: Throttle-Assist Up to 20 MPH",
        paragraphs: [
          "Class 2 e-bikes add a throttle, so the motor can move the bike without pedaling—useful for starts at intersections, steep ramps, or riders who need occasional rest. Assistance still stops at 20 mph under the class definition.",
          "Throttle capability makes Class 2 bikes more controversial on shared paths. Some trail users worry about silent acceleration from a standstill. On George Washington Memorial Parkway trails managed by the National Park Service, using the electric motor to move an e-bike without pedaling is prohibited except where public motor vehicle use is allowed—meaning throttle-only operation is effectively banned on trails like the Mount Vernon Trail even when the bike is otherwise permitted.",
          "Virginia allows localities to ban Class 1 or Class 2 e-bikes from a shared-use path only after notice and a public hearing (§ 46.2-904.1(F)(1)). Maryland allows a local authority or state agency with jurisdiction over a bicycle path to prohibit Class 1 or Class 2 operation on that path (§ 21-1205.2(a)(2)(i)). Always read posted rules; a Class 2 bike legal on the road may still be unwelcome on a specific path."
        ]
      },
      {
        id: "class-3-explained",
        heading: "Class 3 E-Bikes: Speed Pedelecs Up to 28 MPH",
        paragraphs: [
          "Class 3 e-bikes—sometimes called speed pedelecs—offer pedal-assist up to 28 mph. They suit longer road commutes and riders who can keep pace with urban traffic in bike lanes. There is no throttle under the class definition; you must pedal to receive power.",
          "Higher assisted speed brings stricter rules. Virginia requires every Class 3 operator and passenger to wear a bicycle helmet meeting CPSC or ASTM standards (§ 46.2-904.1(G)). Virginia also prohibits anyone under 14 from operating a Class 3 e-bike unless under the immediate supervision of a person at least 18 years old (§ 46.2-908.1). Maryland prohibits anyone under 16 from operating a Class 3 e-bike on a public highway (§ 21-1205.2(b)(1)), though a younger child may ride as a passenger on a bike designed for passengers.",
          "Trail access for Class 3 is narrower. Virginia allows state agencies and localities to prohibit Class 3 e-bikes on shared-use paths without a hearing (§ 46.2-904.1(F)(2)). Maryland bars Class 3 e-bikes from bicycle paths unless the path is within or adjacent to a highway right-of-way or the managing agency explicitly allows them (§ 21-1205.2(a)(2)(ii)). Plan Class 3 ownership around road and bike-lane routes rather than assuming rail-trail access."
        ]
      },
      {
        id: "mid-atlantic-state-law",
        heading: "How Virginia, Maryland, and DC Define E-Bikes",
        paragraphs: [
          "Virginia defines electric power-assisted bicycles and three classes in Code of Virginia § 46.2-100, with operating rules in § 46.2-904.1. E-bikes meeting the definition are treated as bicycles: no driver's license, registration, title, or insurance requirement (§ 46.2-904.1(A)–(B)).",
          "Maryland's definitions live in Transportation Article § 11-117.1, with operation and path rules in § 21-1205.2 and equipment requirements in § 22-420. Maryland requires helmets for operators and passengers under 16 on bicycles, which includes e-bikes, under § 21-1207.1.",
          "Washington, DC does not use the three-class framework in statute. D.C. Code § 50-2201.02(11A) defines a motorized bicycle as a two- or three-wheeled device with operable pedals and a motor incapable of propelling the device faster than 20 mph on level ground. D.C. Municipal Regulations 18 DCMR § 1200.10 requires operators of motorized bicycles to be at least 16. Helmets are required for operators and passengers under 16 under § 50-1605.",
          "Legal uncertainty in DC: A stock Class 3 e-bike is designed to assist to 28 mph, which exceeds the 20 mph motorized-bicycle cap. PeopleForBikes notes that DC treats devices above that threshold as motor-driven cycles requiring licensing and registration, but published DC agency guidance on enforcement against pedal-assist Class 3 bikes is limited. If you ride in DC, verify current DDOT guidance before assuming Class 3 street legality."
        ]
      },
      {
        id: "labels-and-modifications",
        heading: "Class Labels, Watt Limits, and Illegal Modifications",
        paragraphs: [
          "Since January 1, 2021, Virginia requires manufacturers and distributors to affix a permanent class label in Arial at least nine-point type (§ 46.2-904.1(C)(1)). Maryland imposed a similar labeling requirement effective January 1, 2020 (§ 22-420(a)). The label is your first check when buying used or when a land manager asks what you are riding.",
          "Both states prohibit tampering that changes motor-powered speed capability unless the label is updated after modification (Virginia § 46.2-904.1(D); Maryland § 22-420(b)). Aftermarket tuning, chip swaps, or removing speed limiters can reclassify your bike as an unregistered motor vehicle and void trail access.",
          "Bikes with motors rated above 750 watts or without operable pedals generally fall outside the e-bike definition and are not covered by this guide. When in doubt, match the label, manual, and manufacturer specifications—not the seller's description."
        ]
      },
      {
        id: "choosing-the-right-class",
        heading: "Choosing the Right Class for Mid-Atlantic Riding",
        paragraphs: [
          "Match class to where you actually ride. For paved rail-trails, suburban paths, and mixed pedestrian routes across Virginia and Maryland, Class 1 is the safest default and the easiest to defend when policies tighten. Class 2 suits riders who want throttle help for hills or mobility reasons but accept that some managers restrict throttle use or ban the class on specific paths.",
          "Choose Class 3 if your commute is primarily on roads and protected bike lanes and you want assist up to 28 mph—but budget for a quality helmet, confirm you meet age requirements, and verify each path along your route. In DC, prioritize bikes that clearly qualify as motorized bicycles under the 20 mph cap unless you have confirmed legal guidance for faster pedal-assist models.",
          "Before you buy, search eBikeQuest trail pages for your target routes and read the jurisdiction law summaries for Virginia, Maryland, and DC. Class is the starting point; the trail manager's posted rule is the final word."
        ]
      }
    ],
    faq: [
      {
        question: "How do I tell what class my e-bike is?",
        answer: "Look for the manufacturer label required by Virginia § 46.2-904.1 and Maryland § 22-420. It should state the class number, top assisted speed, and motor wattage. Your owner's manual and the bike's settings (pedal-assist only vs. throttle, maximum assist speed) should match the label."
      },
      {
        question: "Are all three classes legal on Virginia roads?",
        answer: "Yes. Virginia § 46.2-904.1 treats qualifying Class 1, 2, and 3 electric power-assisted bicycles as bicycles on streets, highways, shoulders, and bike lanes unless a more specific restriction applies. Class 3 operators and passengers must wear helmets, and riders under 14 face limits on operating Class 3 bikes under § 46.2-908.1."
      },
      {
        question: "Can I ride a Class 3 e-bike on the W&OD Trail?",
        answer: "Virginia's default under § 46.2-904.1(F) allows Class 3 on shared-use paths unless a locality or state agency prohibits them. NOVA Parks publishes trail etiquette for e-bikes on the W&OD but does not publish a separate Class 3 ban as of its current guidance. Policies change—check NOVA Parks and posted signage before riding."
      },
      {
        question: "Does Washington, DC recognize Class 1, 2, and 3?",
        answer: "Not in statute. DC defines motorized bicycles by a 20 mph capability cap (§ 50-2201.02(11A)), not by the three-class labels. Class 1 and Class 2 models that meet the 20 mph cap generally fit the definition; Class 3 legality in DC is uncertain because the statutory definition emphasizes maximum speed, not industry class labels."
      },
      {
        question: "What happens if I remove the speed limiter on my e-bike?",
        answer: "Virginia and Maryland both prohibit modifications that change motor-powered speed capability without updating the required class label. A modified bike may no longer qualify as an electric bicycle and can become subject to motor-vehicle licensing, registration, and insurance rules."
      },
      {
        question: "Do I need a license for any e-bike class in Maryland?",
        answer: "No. Maryland treats electric bicycles that meet § 11-117.1 as bicycles for licensing purposes. Operators under 16 may not ride Class 3 e-bikes on public highways under § 21-1205.2(b)(1)."
      }
    ],
    relatedGuides: [
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview",
      "riding-ebikes-in-virginia"
    ],
  },
  {
    ...EDITORIAL_DEFAULTS,
    id: "guide-trail-etiquette",
    title: "E-Bike Trail Etiquette in the Mid-Atlantic",
    category: "riding-skills",
    description: "E-bike trail etiquette for Virginia, Maryland, and DC shared paths: speed, passing, yielding, and battery safety on crowded routes.",
    slug: "mid-atlantic-trail-etiquette",
    readingTimeMinutes: 6,
    sections: [
      {
        id: "shared-path-mindset",
        heading: "Shared-Use Paths Require a Different Mindset Than Roads",
        paragraphs: [
          "Mid-Atlantic rail-trails and riverfront paths— the W&OD, Mount Vernon Trail, Capital Crescent, C&O Canal towpath near Georgetown, and the Anacostia Riverwalk—mix commuters, families, dog walkers, tourists, and weekend athletes on the same narrow pavement. Legal access is only the first hurdle; how you ride determines whether e-bikes stay welcome.",
          "State law may allow your e-bike class on a path while the land manager adds speed limits, passing rules, or throttle restrictions. George Washington Memorial Parkway, operated by the National Park Service, allows e-bikes where traditional bicycles are allowed but caps bike speed at 15 mph on designated trails and prohibits using the motor without pedaling except where motor vehicles may drive.",
          "Etiquette is risk management: slower speeds and predictable behavior reduce conflict, support trail-access advocacy, and keep rides pleasant for everyone—including you when you are on foot."
        ]
      },
      {
        id: "know-before-you-go",
        heading: "Know the Posted Rules Before You Roll",
        paragraphs: [
          "Trail rules stack in layers. Virginia § 46.2-904.1(F) defaults to e-bike access on shared-use paths but lets localities ban Class 1 or Class 2 after a hearing and Class 3 without one. Maryland § 21-1205.2 restricts Class 3 on many bicycle paths and lets agencies regulate all classes on natural-surface trails designated nonmotorized.",
          "Federal land adds another layer. NPS compendiums for GWMP adopt state law but impose trail-specific limits—15 mph speed limits, stay-right rules, and throttle-without-pedaling bans on the Mount Vernon Trail. NOVA Parks allows e-bikes where traditional bicycles are allowed on the W&OD under Virginia law and asks riders to follow the same regulations as other visitors.",
          "Before a group ride or vacation rental, open the managing agency's website, search eBikeQuest for the trail, and photograph posted signs at the trailhead. Policies on e-bike classes, hours, and segments closed to bikes change more often than state statutes."
        ]
      },
      {
        id: "speed-and-assist",
        heading: "Manage Speed and Assist Level on Crowded Trails",
        paragraphs: [
          "Your e-bike may assist to 20 or 28 mph, but that is not your trail speed. On busy segments— Shirlington crossing on the W&OD, Old Town Alexandria connectors, or weekend mornings on the Mount Vernon Trail—drop to Eco or Tour mode and aim to match surrounding foot and bike traffic.",
          "Accelerate gently from stops. Throttle-equipped Class 2 bikes can surprise pedestrians if you launch silently from a bench or crosswalk; start with pedaling even when throttle use is legal on the road. On NPS trails where motor-only propulsion is banned, pedaling is both courtesy and compliance.",
          "Slow early for blind curves, underpasses, and bridge pinch points common along the Potomac and Anacostia corridors. You can always pass again when sight lines open."
        ]
      },
      {
        id: "passing-and-yielding",
        heading: "Pass With Audible Warning and Extra Space",
        paragraphs: [
          "NPS trail guidance for GWMP requires cyclists to stay right, move left only to pass, and give ample audible warning. That means a clear bell ring or a calm voice—\"On your left\"—well before you arrive, not a startled shout from six inches back.",
          "Pass single-file users with at least an arm's length of space. If the path is too narrow for a safe pass, slow to walking speed and wait for a wider section. Never pass on blind corners or when oncoming traffic occupies the left side.",
          "When faster road cyclists or e-bike commuters approach from behind, hold a steady line and avoid wandering across the centerline. If you are the faster rider, patience beats risky passes around double-wide groups."
        ],
        listItems: [
          "Yield to pedestrians and equestrians where equestrians are permitted.",
          "When stopped, stand off the pavement so through traffic is not blocked.",
          "At trail crossings, obey signals and dismount if signage requires it.",
          "Downhill sections still have speed limits—momentum is not an excuse to blow past families."
        ]
      },
      {
        id: "pedestrians-dogs-and-kids",
        heading: "Extra Care Around Pedestrians, Dogs, and Children",
        paragraphs: [
          "Families and off-leash-adjacent dog traffic peak on Mid-Atlantic paths between late morning and dusk on weekends. Children and dogs change direction unpredictably. Reduce assist, keep both hands ready, and assume anyone ahead may stop without warning.",
          "When passing a dog, give wide berth and slow further—the motor can trigger chase behavior even when you are legal. Announce yourself early so the handler can shorten the leash.",
          "If a section feels too congested for safe e-bike travel— Cherry Blossom season near the Tidal Basin, holiday crowds on regional connectors—walk the bike or choose a less busy alternate route. One impatient pass can fuel a trail ban campaign."
        ]
      },
      {
        id: "federal-and-regional-trails",
        heading: "Etiquette on NPS and NOVA Parks Trails",
        paragraphs: [
          "On George Washington Memorial Parkway trails, e-bikes follow bicycle rules but may not use throttle-only propulsion except where cars may go. Bicycles and e-bikes are prohibited on several natural-surface trails in Great Falls Park and on parkways themselves—check the GWMP compendium before detouring off the Mount Vernon Trail.",
          "NOVA Parks encourages e-bike riders on the W&OD to stay where traditional bicycles belong, respect hours, and yield to pedestrians and equestrians. Virginia law limits NOVA Parks from adopting rules that conflict with state e-bike statutes (§ 15.2-5704), but reckless operation can still draw police response from the county you are in.",
          "The C&O Canal National Historical Park allows e-bikes on the towpath where bicycles are permitted under NPS policy, with local segment restrictions. Pedaling is expected; pack patience for narrow, busy sections near Georgetown and Great Falls."
        ]
      },
      {
        id: "battery-and-mechanical-safety",
        heading: "Battery Safety and Trailside Mechanical Courtesy",
        paragraphs: [
          "Lithium-ion batteries are safe when used as designed, but damaged packs, aftermarket chargers, and hot-vehicle storage increase fire risk. Charge with the manufacturer charger, inspect contacts after crashes, and never block a trail while troubleshooting a battery error.",
          "If you stop for a flat or dropped chain, move the bike fully off the path. E-bikes are heavier than analog bikes; ask before accepting help lifting someone else's bike, and warn helpers about motor weight at the rear wheel.",
          "Pack a bell, front light, and spare tube even on short urban segments—Mid-Atlantic weather shifts quickly and tunnel sections on the W&OD and MVT run dark at dusk."
        ]
      },
      {
        id: "group-rides-and-advocacy",
        heading: "Group Rides, Events, and Being a Good Ambassador",
        paragraphs: [
          "Group e-bike rides should ride single file or no more than two abreast only when traffic is unimpeded—Virginia § 46.2-905 and Maryland § 21-1205 mirror traditional bike rules on roadways, and courtesy extends to trails. Large weekend pelotons on the Mount Vernon Trail create friction; split into smaller groups or ride during off-peak hours.",
          "GWMP limits organized events on the Mount Vernon Trail by season and participant count. Do not show up with a club of throttle-heavy e-bikes assuming open access.",
          "You represent every e-bike rider when you are on a shared path. Courteous passing, moderate speed, and compliance with class and throttle rules protect access for riders who depend on e-bikes for commuting, cargo, and mobility."
        ]
      }
    ],
    faq: [
      {
        question: "What speed should I ride on Mid-Atlantic shared-use trails?",
        answer: "Follow posted limits first—GWMP caps bikes at 15 mph on designated trails. When no limit is posted, many riders aim for 12–15 mph around people and slower when passing. Legal maximum assist speed (20 or 28 mph) is not a safe trail speed in crowds."
      },
      {
        question: "Can I use the throttle on the Mount Vernon Trail?",
        answer: "No. NPS policy for George Washington Memorial Parkway prohibits using the electric motor to move an e-bike without pedaling except where public motor vehicle use is allowed. Pedal while using assist on the trail."
      },
      {
        question: "Do I have to yield to pedestrians on Virginia rail-trails?",
        answer: "Yes. E-bikes have the same duties as bicycles under Virginia § 46.2-904.1(A). NOVA Parks explicitly expects W&OD riders to yield to pedestrians and equestrians. Slow and pass only when safe."
      },
      {
        question: "Are e-bikes allowed on natural-surface trails in Maryland?",
        answer: "Maryland § 21-1205.2(a)(2)(iii) allows agencies to regulate any e-bike class on nonmotorized natural-surface trails. Assume dirt singletrack is off limits unless the park explicitly permits e-bikes."
      },
      {
        question: "What should I do if another trail user yells about e-bikes?",
        answer: "Stay calm, slow down, and confirm you are on a permitted segment for your bike class. If you are compliant, a friendly explanation of class and trail rules helps; if not, dismount or leave the restricted section. Report harassment to park staff only if behavior becomes unsafe."
      },
      {
        question: "Can I ride two abreast on the W&OD Trail?",
        answer: "When the path is crowded, ride single file. Virginia allows two abreast on roadways only when traffic is not impeded (§ 46.2-905). On busy shared paths, single file is the practical standard even when not explicitly signed."
      }
    ],
    relatedGuides: [
      "ebike-classes-explained",
      "riding-ebikes-in-virginia",
      "riding-ebikes-in-maryland"
    ],
  },
  {
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
          "Write down deal-breakers early: step-through frame, rack mounts, maximum weight, ability to bring the bike on Metro off-peak, or compatibility with a particular trail's e-bike policy. That list keeps test rides focused."
        ]
      },
      {
        id: "class-first-decision",
        heading: "Pick Your Class Before You Pick a Brand",
        paragraphs: [
          "Class is a legal and access decision. Class 1 pedal-assist to 20 mph is the broadest choice for Virginia and Maryland rail-trails and matches DC's 20 mph motorized-bicycle definition in § 50-2201.02(11A). Class 2 adds throttle assist to 20 mph—helpful for mobility, but some paths discourage throttle use and NPS trails ban motor-only propulsion.",
          "Class 3 pedal-assist to 28 mph suits road-heavy commutes but triggers helmet mandates for all riders on Class 3 bikes in Virginia (§ 46.2-904.1(G)), age limits in Virginia (§ 46.2-908.1) and Maryland (§ 21-1205.2(b)), and path bans on many Maryland bicycle paths. DC's lack of a three-class statute creates uncertainty for Class 3 ownership—confirm current DDOT guidance if DC trips are core to your purchase.",
          "Buy a bike with a legible class label meeting Virginia § 46.2-904.1(C) or Maryland § 22-420. Avoid gray-market imports without labels or with advertised speeds above class limits."
        ]
      },
      {
        id: "hub-vs-mid-drive",
        heading: "Hub Motor vs. Mid-Drive: What Matters Regionally",
        paragraphs: [
          "Hub motors mount in the front or rear wheel. They are common on value-priced commuters and city bikes, operate quietly, and need less drivetrain maintenance. Rear-hub weight can make lifting the bike onto Metro racks or apartment hooks harder.",
          "Mid-drive motors sit at the crank, use your gears for hill climbing, and feel natural on steeper grades—useful on routes with bridges and overpasses around DC and the Route 7 corridor. They cost more and wear chains and cassettes faster if you ride in high assist constantly.",
          "For mostly flat W&OD or Anacostia Riverwalk miles, a quality hub motor is sufficient. For mixed hill climbs between Arlington and Falls Church or toward Rockville on the Capital Crescent, test-ride mid-drive options alongside hub models."
        ]
      },
      {
        id: "battery-range-real-world",
        heading: "Battery Size and Real-World Range in the Mid-Atlantic",
        paragraphs: [
          "Manufacturers quote range under ideal conditions—light rider, low assist, flat course. Mid-Atlantic reality includes humidity, winter cold that reduces cell efficiency, stop-and-go trail crossings, and headwinds along open river trails.",
          "Plan for roughly 60–70% of advertised range on hilly or high-assist commutes. A 500 Wh battery may suffice for 15-mile round-trip errands; daily 30-mile mixed commutes often justify 625–750 Wh or a spare charger at work.",
          "Removable batteries simplify apartment charging and winter storage. Confirm the charger is UL-listed, charge on hard surfaces away from flammable materials, and never leave a damaged pack on the bike overnight."
        ],
        listItems: [
          "Wh (watt-hours) = voltage × amp-hours; more Wh generally means more range at similar assist.",
          "Eco and Tour modes extend range more than Turbo on Bosch, Shimano, and similar systems.",
          "Regenerative braking is rare on e-bikes; coasting and lower assist save more energy.",
          "Test rides should include a real hill—dealer parking-lot loops hide range killers."
        ]
      },
      {
        id: "frame-style-and-fit",
        heading: "Frame Style, Fit, and Storage Reality",
        paragraphs: [
          "Step-through frames ease mounting in work clothes; traditional diamond frames offer stiffness for heavier riders and rack loads. Cargo and longtail e-bikes transform grocery runs but may not fit standard bike rooms or Metro dimensions—measure your storage before buying.",
          "Fit matters more with motor weight. A slightly small bike feels twitchy at 20 mph assist; too large and you cannot put a foot down confidently at trail stop signs. Budget for a professional fit or saddle adjustment after purchase.",
          "Fenders and integrated lights are worthwhile on Mid-Atlantic paths with tunnel sections and frequent rain. Many first-time buyers add them later at higher cost."
        ]
      },
      {
        id: "test-ride-checklist",
        heading: "Test-Ride Checklist for Local Dealers and Demo Events",
        paragraphs: [
          "Shop local when possible—Virginia and Maryland dealers often know regional trail policies and can confirm class labeling. Bring the shoes and bag you commute with, and ride at least 20 minutes including a hill and a slow crowded segment if you can reach one.",
          "During the ride, check how smoothly assist engages from a stop, whether the throttle (if Class 2) is controllable at walking speed, and how the bike handles at the slow speeds you will use on shared paths. Listen for motor cutout at the class speed limit.",
          "Before paying, verify the class label, serial number, warranty coverage for battery cycles, and whether the shop services the brand in-house. Ask for the owner's manual and charger specs in writing."
        ],
        listItems: [
          "Confirm class label matches the sales listing (Class 1, 2, or 3; wattage; top speed).",
          "Test walk mode or walk assist if you will use the bike on crowded trail segments.",
          "Check brake feel at full assist speed—hydraulic discs are common on quality first e-bikes.",
          "Note display readability in bright sun; you will rely on it for battery and assist level.",
          "If buying used, verify the label was not tampered with and battery health is documented."
        ]
      },
      {
        id: "budget-and-value",
        heading: "Budget, Incentives, and Total Cost of Ownership",
        paragraphs: [
          "Quality new e-bikes from reputable dealers commonly start around $1,500–$2,500 for hub-motor commuters and rise for mid-drive, cargo, and long-range batteries. Add $150–$400 for helmet, lock, lights, and fenders; Class 3 Virginia riders need a CPSC- or ASTM-compliant helmet for every trip (§ 46.2-904.1(G)).",
          "Washington, DC has operated e-bike incentive programs authorized under D.C. Code § 50-921.27; availability and voucher amounts change by funding round—check DDOT for current enrollment before assuming a discount. Virginia and Maryland incentive programs vary by locality; they are not uniform statewide.",
          "Maintenance costs include brake pads, tires rated for e-bike weight, occasional drivetrain service, and battery replacement every three to six years depending on use. Factor these into your budget instead of comparing purchase price alone."
        ]
      },
      {
        id: "after-you-buy",
        heading: "After You Buy: Registration, Insurance, and Trail Debut",
        paragraphs: [
          "Virginia and Maryland do not require registration or insurance for bikes meeting e-bike definitions (Virginia § 46.2-904.1(B); Maryland treats qualifying e-bikes as bicycles under § 21-1205.2). DC motorized bicycles likewise do not require the licensing tied to motor-driven cycles when the bike meets the 20 mph definition.",
          "Homeowners or renters insurance may cover theft with a scheduled rider; dedicated bicycle insurance exists for high-value models. Register your serial number with local police or a national bike registry.",
          "Your first rides should be on low-traffic trail segments at off-peak hours. Practice assist levels, passing calls, and mounting/dismounting before joining rush-hour commuters on the W&OD or Mount Vernon Trail. Pair your purchase with our trail etiquette and class guides so your first miles keep access open for everyone."
        ]
      }
    ],
    faq: [
      {
        question: "Should my first e-bike be Class 1 or Class 2?",
        answer: "If most riding is on shared paths in Virginia or Maryland, Class 1 is the simplest choice for access and etiquette. Choose Class 2 if you need throttle help for starts or mobility—and accept that some trails restrict throttle-only riding and NPS trails require pedaling while using assist."
      },
      {
        question: "How much battery do I need for a 20-mile commute?",
        answer: "A 500–625 Wh battery often handles 20 flat miles with moderate assist if you are not a heavy load and weather is mild. Build in margin for hills, headwinds, and cold weather; 750 Wh or charging at work is safer for daily reliance."
      },
      {
        question: "Can I take an e-bike on Metro?",
        answer: "WMATA allows standard bicycles on Metro during off-peak hours with restrictions; e-bikes follow bicycle rules but size and weight matter for elevators and crowded cars. Check current WMATA policy before commuting—rules and peak restrictions change."
      },
      {
        question: "Are cheap e-bikes from online marketplaces a good deal?",
        answer: "They often lack proper class labels, use uncertified batteries, or exceed 750 W—disqualifying them as e-bikes under Virginia and Maryland law. Local dealers provide warranty support and labeled bikes that match trail and traffic rules."
      },
      {
        question: "Do I need a special helmet for a Class 3 e-bike in Virginia?",
        answer: "Virginia § 46.2-904.1(G) requires every Class 3 operator and passenger to wear a helmet meeting CPSC or ASTM bicycle helmet standards—not just riders under a certain age."
      },
      {
        question: "What is the most common mistake first-time buyers make?",
        answer: "Buying too much speed or throttle for their actual routes. Many Mid-Atlantic riders overspend on Class 3 performance they cannot legally or safely use on the trails they imagined riding daily."
      }
    ],
    relatedGuides: [
      "ebike-classes-explained",
      "ebike-battery-care",
      "mid-atlantic-trail-etiquette"
    ],
  },
  {
    ...EDITORIAL_DEFAULTS,
    id: "guide-battery-care",
    title: "E-Bike Battery Care and Storage",
    category: "maintenance",
    description: "Charging, storage, and winter care tips to extend lithium e-bike battery life through humid Mid-Atlantic summers and cold winters.",
    slug: "ebike-battery-care",
    readingTimeMinutes: 11,
    sections: [
      {
        id: "overview",
        heading: "Why battery care matters on Mid-Atlantic rides",
        paragraphs: [
          "Your e-bike battery is the most expensive component you will replace over the life of the bike, and how you charge, store, and ride in Virginia, Maryland, and DC conditions has a direct effect on its lifespan. Mid-Atlantic riders face a distinctive mix of humid summers, freeze-thaw winters, and hilly terrain that drains packs faster than flat, dry climates.",
          "Most modern e-bikes use lithium-ion cells similar to those in laptops and electric cars. These cells degrade gradually through calendar aging and cycle wear. You cannot stop degradation entirely, but consistent habits—keeping charge levels moderate, avoiding heat stress, and storing batteries indoors—can add years of useful range before capacity noticeably drops.",
          "This guide focuses on practical owner habits, not manufacturer-specific firmware. Always cross-check your owner's manual for voltage limits, charger compatibility, and warranty conditions before changing how you charge or store your battery."
        ]
      },
      {
        id: "charging-basics",
        heading: "Daily charging best practices",
        paragraphs: [
          "Charge after rides rather than leaving the battery empty for days. Deep discharge stresses lithium cells and can trigger protective shutdown modes that require dealer intervention on some systems. For daily commuters, plugging in when you get home and unplugging once full—or better, once the pack reaches roughly 80–90%—is a solid routine.",
          "Use only the charger supplied by your bike's manufacturer or an approved replacement matched to your battery's voltage and amp-hour rating. Mismatched chargers are a common cause of premature cell failure and, in rare cases, thermal events. Avoid cheap universal chargers unless the seller can confirm exact compatibility with your BMS (battery management system).",
          "Unplug the charger when charging completes, especially if you charge in a garage or shed where temperatures swing widely. Leaving a fully charged pack connected to a trickle charger at high ambient heat accelerates calendar aging even when you are not riding."
        ],
        listItems: [
          "Charge at room temperature when possible; move the battery indoors if the bike lives outside.",
          "Avoid charging immediately after a hot ride; let the pack cool for 30–60 minutes first.",
          "Inspect charge ports and contacts for corrosion, especially if you ride wet rail-trails or salted winter roads.",
          "Never charge a battery that is swollen, cracked, or smells unusual—contact your shop or manufacturer."
        ]
      },
      {
        id: "charge-levels",
        heading: "Optimal charge levels for storage and range",
        paragraphs: [
          "Lithium-ion batteries last longest when kept between roughly 20% and 80% state of charge during storage. Storing at 100% for weeks—common when riders 'top off' before a trip that keeps getting postponed—places cells under higher voltage stress and speeds capacity loss.",
          "If you will not ride for more than two weeks, aim for about 50–60% charge before storing the battery indoors. Many display systems show a percentage; if yours does not, a short ride after a partial charge or a timed top-up from a low level works well enough for most owners.",
          "For everyday riding, charging to full before a long weekend on the Great Allegheny Passage or New River Trail is reasonable. Just avoid leaving the pack at 100% in a hot car or sunny garage for days afterward."
        ]
      },
      {
        id: "temperature",
        heading: "Temperature: summer humidity and winter cold",
        paragraphs: [
          "Heat is the silent killer of e-bike batteries. Parking a bike with an integrated battery in direct sun on a 95°F Arlington afternoon, then expecting full range on the Mount Vernon Trail, often leads to disappointment as the BMS derates output to protect cells. Remove removable batteries and store them in climate-controlled space when you can.",
          "Cold weather reduces available capacity temporarily. A battery that delivers 40 miles in April may show 25–30 miles in January on the W&OD or Northern Central Trail—not because it is failing, but because chemical reactions slow in low temperatures. Warm the battery indoors before riding when possible, and expect to use a lower assist level to preserve range.",
          "Never charge a frozen or near-freezing battery. If your pack feels ice-cold after garage storage, bring it inside until it reaches room temperature. Charging while cells are cold can cause lithium plating and permanent damage."
        ]
      },
      {
        id: "storage",
        heading: "Long-term storage between seasons",
        paragraphs: [
          "Mid-Atlantic riders who pause commuting in winter or store a touring bike between multi-day trips should treat storage as active maintenance, not abandonment. Clean and dry the battery contacts, charge to roughly 50–60%, and check the level every 4–6 weeks. Self-discharge is slow but real; a pack that drains to zero over a winter may not recover cleanly.",
          "Store batteries off the concrete floor in a dry area—on a shelf or wood surface is fine. Humidity in coastal Virginia and Maryland basements can corrode terminals over time. A breathable cover or the original battery bag helps keep dust off connectors.",
          "If your bike uses a removable battery, take it inside even when the frame stays in the garage. Integrated batteries benefit from occasional wake-up rides or a mid-storage partial charge check."
        ]
      },
      {
        id: "range-planning",
        heading: "Range planning on hilly Mid-Atlantic routes",
        paragraphs: [
          "Advertised range figures assume moderate assist, flat terrain, and a lightweight rider. Real Mid-Atlantic rides—climbing out of the Potomac gorge, grinding crushed limestone on High Bridge Trail, or fighting headwinds on open rail-trails—often deliver 60–70% of the brochure number.",
          "Plan charging stops for multi-day tours. Towns along the New River Trail and GAP corridor increasingly welcome cyclists, but dedicated public e-bike charging is still sparse. Carry your charger and ask permission at lodgings, libraries, or cafés rather than assuming outdoor outlets are available or safe.",
          "Lower assist levels, steady cadence, and proper tire pressure materially extend range. Save turbo mode for short climbs; use eco or tour modes on flat crushed-stone segments where momentum carries you."
        ]
      },
      {
        id: "maintenance",
        heading: "Cleaning, transport, and physical care",
        paragraphs: [
          "Wash bikes gently; do not power-wash battery housings or submerged connection points. Use a damp cloth around the pack, dry contacts afterward, and keep charging ports covered when riding wet conditions on trails like the Capital Crescent or C&O Towpath.",
          "When transporting on a car rack, remove the battery when possible to reduce weight and theft risk. Heat from exhaust or trunk storage on long drives can elevate pack temperature; indoor removal is best for road trips to Shenandoah or Assateague.",
          "Loose mounts vibrate batteries against frame interfaces, wearing plastics and wiring. Check strap bolts and slide-rail locks monthly if you ride rough mixed-surface parks such as Powhatan or Patapsco."
        ]
      },
      {
        id: "replacement",
        heading: "When to service or replace a battery",
        paragraphs: [
          "All batteries lose capacity over time. If your daily commute assist level no longer completes its usual loop without an extra charge, or range drops more than 20–25% in similar conditions versus last season, the pack may be aging normally—or a cell group may need diagnosis.",
          "Authorized dealers can often read error logs and perform BMS checks. Third-party rebuild services exist but may void warranties or use cells of uncertain quality. For most owners, a manufacturer replacement or dealer-sourced pack is the safer long-term choice.",
          "Recycle spent lithium-ion packs through municipal hazardous-waste programs or bike shops that participate in battery recycling. Do not discard batteries in household trash—Mid-Atlantic counties increasingly offer drop-off sites, and fire risk from damaged cells is real."
        ]
      }
    ],
    faq: [
      {
        question: "Should I charge my e-bike battery after every ride?",
        answer: "For daily use, yes—topping up after rides keeps the pack out of deep discharge. If you ride short distances, you do not need to charge to 100% every time; partial top-ups between 30% and 80% are gentler on cell chemistry."
      },
      {
        question: "Can I leave my charger plugged in overnight?",
        answer: "Quality chargers stop at full charge, but it is still better to unplug once complete—especially in warm rooms or garages. Overnight charging in a cool, dry indoor space is common and generally acceptable if you use the manufacturer charger."
      },
      {
        question: "How do I store an e-bike battery over a Virginia or Maryland winter?",
        answer: "Charge to about 50–60%, store indoors in a dry area away from freezing temperatures, and check the charge every month or two. Avoid storing at 100% or near 0% for long periods."
      },
      {
        question: "Why does my range drop so much in cold weather?",
        answer: "Low temperatures temporarily reduce lithium-ion efficiency. Range usually rebounds in spring. If range stays low in warm weather, the battery may be aging or need service."
      },
      {
        question: "Is it safe to charge in my basement or garage?",
        answer: "Charge on a hard, non-flammable surface away from clutter, ideally where you can notice unusual heat or smell. Avoid charging unattended in extreme heat or directly next to fuel cans and solvents. Many owners charge in garages but bring removable batteries indoors in summer."
      },
      {
        question: "How long should an e-bike battery last?",
        answer: "Many packs deliver 500–1,000 full-equivalent charge cycles before capacity drops noticeably, often translating to three to five years of regular Mid-Atlantic riding. Heat, full-charge storage, and daily deep discharges shorten that window."
      }
    ],
    relatedGuides: [
      "buying-your-first-ebike",
      "mid-atlantic-trail-etiquette"
    ],
  },
  {
    ...EDITORIAL_DEFAULTS,
    id: "guide-va-local",
    title: "Riding E-Bikes in Virginia: Local Tips",
    category: "local-riding",
    description: "Virginia rail-trails, state parks, and urban paths: where each e-bike class is allowed and how to verify rules before you ride.",
    slug: "riding-ebikes-in-virginia",
    readingTimeMinutes: 12,
    sections: [
      {
        id: "state-law-basics",
        heading: "Virginia law: three classes, one framework",
        paragraphs: [
          "Virginia recognizes Class 1, Class 2, and Class 3 electric power-assisted bicycles under state code, generally treating them as bicycles when motors stay at or below 750 watts and meet class speed limits. No driver's license or registration is required for properly classified e-bikes, though Class 3 operators must be at least 14 and helmets are mandatory for riders under 14.",
          "On public roads and most bike lanes, all three classes are typically permitted where traditional bicycles may ride. The complexity begins when you leave the road network: trail managers, state agencies, and federal landowners can impose tighter rules than state statute suggests at first glance.",
          "Always confirm your bike's class from the manufacturer label before assuming access on a specific trail. Misclassified high-power bikes and throttle-only imports may not qualify as e-bikes under Virginia law and can be treated as motor vehicles."
        ]
      },
      {
        id: "northern-virginia-trails",
        heading: "Northern Virginia rail-trails and river paths",
        paragraphs: [
          "The Washington & Old Dominion Trail is the region's backbone for e-bike recreation and commuting, running roughly 45 miles from Shirlington toward Purcellville on paved surface. Under NOVA Parks management and Virginia law, e-bikes meeting statutory definitions—including Class 3 on many segments—have become a common sight, but posted rules and crowded weekend conditions still require courteous speeds and passing etiquette.",
          "The Mount Vernon Trail along the Potomac is managed with National Park Service involvement and local coordination. Class 1 and Class 2 e-bikes are generally permitted on the paved trail, but policies can shift with NPS compendium updates and congestion management. Verify current signage before assuming Class 3 access.",
          "Urban connectors in Alexandria, Arlington, and Fairfax increasingly include shared-use paths where local ordinances may restrict sidewalk riding even when state law allows e-bikes on streets. Dismount zones near Metro stations and waterfront promenades are common—watch for posted instructions."
        ],
        listItems: [
          "W&OD Trail: paved rail-trail; popular with all classes meeting Virginia definitions—confirm NOVA Parks updates before long tours.",
          "Mount Vernon Trail: scenic Potomac route; Class 1 and 2 typically allowed—check NPS and local postings for changes.",
          "Capital Beltway crossings and highway bridges: often legal but stressful; less experienced e-bike riders should plan calmer alternate routes."
        ]
      },
      {
        id: "state-parks",
        heading: "Virginia State Parks policy",
        paragraphs: [
          "Virginia Department of Conservation and Recreation (DCR) allows Class 1 and Class 2 e-bikes on bicycle paths and trails designated for traditional bicycle use within Virginia State Parks. Class 3 e-bikes are not permitted on those park trails under current DCR guidance, even though Class 3 may be legal on some roads outside the park.",
          "That distinction matters at destinations like Powhatan State Park and First Landing State Park, where mixed-surface and boardwalk segments may have additional restrictions beyond the statewide policy. Narrow natural-surface loops, wildlife viewing paths, and pedestrian-priority boardwalks may prohibit all bikes, including Class 1 e-bikes.",
          "Before visiting, read the specific park's trail map and call the park office if signage is unclear. Policies evolve as visitation grows, and construction or habitat closures can temporarily reroute cyclists onto roads where different rules apply."
        ]
      },
      {
        id: "southwest-and-rail-trails",
        heading: "Southwest Virginia rail-trails",
        paragraphs: [
          "High Bridge Trail State Park near Farmville offers more than 30 miles of crushed-stone and paved riding, including the iconic trestle. E-bikes meeting Virginia statutory definitions—including Class 3—are permitted, making it a favorite for riders who want long, relatively flat days without heavy car support.",
          "New River Trail State Park stretches roughly 57 miles of crushed limestone along the New River in southwestern Virginia. It is one of the state's premier e-bike-friendly destinations for touring, with towns spaced for food and lodging—but services are sparse, so plan battery range conservatively.",
          "Developing corridors such as the Shenandoah Valley Rail Trail allow e-bikes on completed paved segments under Virginia law, but segment-by-segment openings mean a route that was open last year may still be under construction. Check local trail authority websites before planning a destination ride."
        ]
      },
      {
        id: "richmond-and-urban-parks",
        heading: "Richmond and urban park systems",
        paragraphs: [
          "James River Park— including the Belle Isle area—illustrates how city park systems layer local rules atop state law. Some paved and mixed segments allow Class 1 e-bikes while natural-surface singletrack and sensitive riverfront paths may restrict throttle-equipped bikes or prohibit e-bikes entirely.",
          "Richmond's growing urban trail network connects neighborhoods and the riverfront, but bridge crossings, festival closures, and maintenance detours are frequent. City of Richmond ordinances govern sidewalk riding; e-bikes are often discouraged or prohibited on crowded pedestrian sidewalks even when street riding is legal.",
          "When riding urban parks, default to Class 1 behavior: pedal visibly, use lower assist near pedestrians, and yield at all blind corners under the pedestrian bridges."
        ]
      },
      {
        id: "federal-lands",
        heading: "Federal lands within Virginia",
        paragraphs: [
          "Large portions of Virginia include National Park Service, U.S. Forest Service, and Army Corps lands where federal superintendents set e-bike rules independently of Virginia's permissive road statutes. Shenandoah National Park, George Washington and Jefferson National Forests, and NPS units along the Potomac require per-unit verification.",
          "NPS policy allows superintendents to permit e-bikes on trails open to traditional bicycles, but each park publishes allowed classes in its compendium. Wilderness areas remain closed to all bicycles. Do not assume Virginia's Class 3 road legality extends into federal trail networks.",
          "The George Washington Memorial Parkway and associated trails are a frequent source of confusion because multiple jurisdictions manage adjacent segments. Read posted rules at each trailhead."
        ]
      },
      {
        id: "local-ordinances",
        heading: "Local ordinances and campus rules",
        paragraphs: [
          "Virginia grants localities authority to regulate bicycle and e-bike use on sidewalks, certain paths, and municipal parks after public process. Virginia Beach, Charlottesville, Roanoke, and Northern Virginia counties each layer local nuance—especially around resort districts, downtown pedestrian zones, and university campuses.",
          "College towns may restrict e-bikes on campus paths even when adjacent town streets allow them. Private property—shopping centers, HOAs, apartment complexes—can prohibit e-bikes regardless of state classification.",
          "When in doubt, choose streets with bike lanes over sidewalks, and search the locality's municipal code or bike program page for 'electric power-assisted bicycle' definitions."
        ]
      },
      {
        id: "practical-tips",
        heading: "Practical tips before you roll",
        paragraphs: [
          "Build a pre-ride checklist: confirm trail e-bike policy online, charge to your planned range with a Mid-Atlantic buffer for hills and headwinds, pack a lock and repair kit, and note whether your return route includes any Class 3 prohibitions if you ride a speed pedelec.",
          "Weekend congestion on the W&OD and Mount Vernon Trail rewards early starts and lower assist modes near families. Audible passing cues and slowing before crosswalks reduce conflict and keep access open for the e-bike community.",
          "Link state law pages, park PDFs, and eBikeQuest trail entries for your chosen route—but treat posted signage at the trailhead as the final word when it conflicts with older online summaries."
        ]
      }
    ],
    faq: [
      {
        question: "Are Class 3 e-bikes legal in Virginia?",
        answer: "Yes on most public roads and many shared paths, but Class 3 riders must be at least 14. Class 3 is prohibited on Virginia State Park bicycle trails and may be restricted by local paths or federal land managers. Always verify the specific route."
      },
      {
        question: "Can I ride my e-bike on the W&OD Trail?",
        answer: "Yes. E-bikes that meet Virginia's statutory definition—including Class 3 on many segments—are permitted on the W&OD under NOVA Parks policy, subject to posted updates. Ride courteously on crowded sections."
      },
      {
        question: "Are e-bikes allowed in Virginia State Parks?",
        answer: "Class 1 and Class 2 e-bikes are allowed on trails designated for traditional bicycles. Class 3 is not permitted on those park trails. Individual parks may further restrict certain paths—check DCR guidance and local signage."
      },
      {
        question: "Do I need a helmet on an e-bike in Virginia?",
        answer: "Riders under 14 must wear helmets. Older riders are not universally required by state law, but helmets are strongly recommended, and some local trails or events may impose their own requirements."
      },
      {
        question: "Can I ride on sidewalks in Virginia cities?",
        answer: "It depends on the locality. Many cities restrict or ban e-bikes on sidewalks, especially in downtown and pedestrian-heavy districts. Prefer bike lanes and shared-use paths where available."
      },
      {
        question: "Is the New River Trail good for e-bike touring?",
        answer: "Yes. It is one of Virginia's most e-bike-friendly long-distance routes, with crushed-stone surface and permitted classes including Class 3 under state definitions. Plan charging and services carefully—towns are spaced and amenities vary."
      },
      {
        question: "What if online maps say e-bikes are OK but a sign says no?",
        answer: "Obey posted signage and contact the land manager. Trail policies change, and construction or seasonal closures can override older listings. The most restrictive applicable rule governs."
      }
    ],
    relatedGuides: [
      "ebike-classes-explained",
      "ebike-regulations-overview",
      "mid-atlantic-trail-etiquette"
    ],
    jurisdictions: [
      "virginia"
    ],
  },
  {
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
          "Local jurisdictions and land managers can further restrict Class 1 and Class 2 bikes on specific paths after public process. Maryland's statewide permissive defaults do not guarantee uniform trail access across counties."
        ]
      },
      {
        id: "montgomery-prince-georges",
        heading: "Montgomery and Prince George's County trails",
        paragraphs: [
          "The Capital Crescent Trail connects Georgetown through Bethesda toward Silver Spring on paved surface and is one of the region's busiest e-bike commuting corridors. Class 1 and Class 2 e-bikes are permitted; crowded segments near downtown Bethesda reward reduced speeds and careful passing. Do not assume Class 3 access on this path.",
          "The Northeast Branch Trail and broader Anacostia Tributary Trail System offer paved suburban connections through Prince George's County. E-bikes meeting Maryland definitions—including Class 3 on many segments—are commonly used, but always confirm county park department updates and construction detours.",
          "Montgomery County's extensive paved network continues to expand with Purple Line-related projects. Temporary closures can push cyclists onto streets where Class 3 rules differ from path rules—plan alternate routes during major construction."
        ]
      },
      {
        id: "baltimore-anne-arundel",
        heading: "Baltimore area and Anne Arundel trails",
        paragraphs: [
          "The B&A Trail runs roughly 13 paved miles between Annapolis and Glen Burnie and explicitly permits e-bikes meeting Maryland statutory definitions, including Class 3. It is a strong choice for newer e-bike owners testing range and handling on flat, family-friendly pavement.",
          "The Northern Central Trail (Torrey C. Brown Rail Trail) heads north from Cockeysville on crushed stone through Baltimore County countryside. E-bikes are permitted under Maryland law and long-standing trail practice; surface conditions and winter freeze-thaw cycles affect traction more than motor type for most riders.",
          "Patapsco Valley State Park near Ellicott City offers extensive mixed-surface networks where e-bike access varies by trail designation. Class 1 e-bikes may be allowed on select multi-use routes, while natural-surface hiking trails and adaptive mountain bike projects may prohibit throttle-equipped bikes or all e-bikes. Read park maps carefully—Patapsco is not a single uniform policy."
        ]
      },
      {
        id: "western-maryland",
        heading: "Western Maryland: GAP and mountain corridors",
        paragraphs: [
          "The Maryland section of the Great Allegheny Passage offers crushed-stone touring through Garrett and Allegany counties toward Cumberland. E-bikes meeting Maryland definitions are permitted on the GAP's Maryland segment, making multi-day connections toward Pittsburgh increasingly popular for e-bike tourists—plan battery range for long distances between services.",
          "The Western Maryland Rail Trail parallels portions of the Potomac on paved surface and has historically been among the first DNR corridors to welcome e-bikes. Even here, verify current DNR guidance because statewide rule updates may adjust which classes are welcome on specific DNR-managed trails.",
          "Deep Creek Lake and Garrett County road riding combine steep grades with tourist traffic. Class 3 riders should expect motor-vehicle speeds on descents and use bike lanes or shoulders rather than sidewalks in resort towns."
        ]
      },
      {
        id: "dnr-state-lands",
        heading: "Maryland DNR state lands: evolving e-bike rules",
        paragraphs: [
          "Maryland Department of Natural Resources manages state parks, forests, and wildlife areas where e-bike access has historically been more restrictive than on county rail-trails. For years, Class 1 e-bikes were explicitly permitted on select corridors such as the Torrey C. Brown and Western Maryland rail trails while many natural-surface trails prohibited all e-bikes.",
          "DNR proposed expanded Class 1 access to additional natural-surface trails beginning in 2025, with public comment and phased implementation. Under updated guidance, Class 1 pedal-assist e-bikes may be allowed on designated trails unless posted otherwise—but Class 2 throttle bikes and Class 3 speed pedelecs face tighter limits on DNR lands, and many pedestrian-only or habitat-sensitive trails remain off limits to all bikes.",
          "Because this policy area has changed recently, treat DNR's Bike and E-bike Regulation FAQ and trailhead signage as authoritative. Contact the land manager for the park you plan to visit if compendium language is unclear. eBikeQuest summaries may lag final rulemaking."
        ],
        listItems: [
          "Class 1: broadest access on DNR trails where bicycles are allowed, unless posted closed.",
          "Class 2: often restricted on natural-surface DNR trails; may be allowed on some paved rail-trails and roads open to motorized vehicles.",
          "Class 3: generally prohibited on bicycle paths off highway rights-of-way; verify each trail.",
          "Wildlife Management Areas and pedestrian-only paths: assume no e-bike access unless explicitly signed open."
        ]
      },
      {
        id: "southern-maryland-coastal",
        heading: "Southern Maryland and coastal routes",
        paragraphs: [
          "The Indian Head Rail Trail in Charles County offers flat, paved riding well suited to beginner e-bike owners and family outings. All classes of road-legal Maryland e-bikes are commonly permitted, but county maintenance schedules and summer heat mean early-morning rides improve comfort and battery efficiency.",
          "Assateague Island and coastal park roads introduce National Park Service and National Seashore management alongside Maryland rules. E-bike access may be limited to designated routes; wildlife management areas and boardwalk segments often restrict motorized bicycles including e-bikes. Seasonal congestion and sand surfaces challenge Class 2 throttle use—pedal-assist Class 1 behavior is safer and more welcome.",
          "Chesapeake Bay bridge routes do not accommodate bicycles; plan ferry or car shuttle alternatives for cross-bay touring."
        ]
      },
      {
        id: "urban-commuting",
        heading: "Baltimore, DC-adjacent, and urban commuting",
        paragraphs: [
          "Baltimore City and inner-suburb riders use on-street bike lanes and shared-use paths for commuting. Local ordinances govern sidewalk riding; e-bikes are often treated more restrictively than non-assisted bikes on crowded pedestrian corridors.",
          "Routes linking Maryland to Washington, DC—such as the Capital Crescent, Metropolitan Branch connections, and Anacostia Riverwalk—cross jurisdictional boundaries. A trail permitted for your class in Bethesda may connect to a DC segment with different helmet or class expectations. Carry identification and read DC municipal regulations when crossing the District line.",
          "Transit integration varies: MARC and Metro allow folded non-electric bikes under rules that may exclude standard e-bikes due to weight and battery policies. Check transit agency guidance before combining rail and e-bike commutes."
        ]
      },
      {
        id: "before-you-ride",
        heading: "Checklist for Maryland e-bike rides",
        paragraphs: [
          "Identify your bike class and the county or agency managing your trail. County parks, DNR state lands, and national seashores can all apply different rules within a single weekend tour.",
          "Check trailhead kiosks, DNR's outdoor recreation pages, and county bike program sites the week of your ride—Maryland's DNR e-bike expansion makes older blog posts unreliable.",
          "On multi-use paths, ride at conversational speeds near pedestrians, announce passes early, and dim assist levels when passing children and equestrians where shared corridors exist. Courteous riding preserves political support for continued e-bike access."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the B&A Trail?",
        answer: "Yes. The B&A Trail permits e-bikes that meet Maryland's statutory definitions, including Class 3. Observe posted speed guidance and crowded weekend etiquette."
      },
      {
        question: "Can I ride a Class 3 e-bike on the Capital Crescent Trail?",
        answer: "No. The Capital Crescent Trail permits Class 1 and Class 2 e-bikes. Class 3 is prohibited on this path under current trail policy and Maryland bicycle path rules."
      },
      {
        question: "What is Maryland DNR's e-bike policy on state park trails?",
        answer: "DNR policy has expanded recently. Class 1 e-bikes may be allowed on designated bicycle trails unless posted closed, while Class 2 and Class 3 face more limits on natural-surface state lands. Always verify the current FAQ and trailhead signs before riding."
      },
      {
        question: "Is the Great Allegheny Passage e-bike friendly?",
        answer: "Yes on the Maryland segment for e-bikes meeting state definitions, including Class 3. Plan range carefully—services are spaced and crushed-stone surfaces increase energy use."
      },
      {
        question: "Do I need a helmet on an e-bike in Maryland?",
        answer: "Riders under 16 must wear helmets. Older riders should check local trail requirements and ride with a helmet regardless for safety."
      },
      {
        question: "Are throttle e-bikes allowed on Maryland rail-trails?",
        answer: "Class 2 e-bikes are allowed on many paved county rail-trails like the B&A and Indian Head, but may be restricted on DNR natural-surface trails and some park paths. Verify each trail's policy."
      },
      {
        question: "Can local towns ban e-bikes entirely?",
        answer: "Localities can regulate sidewalks and specific paths but cannot override state e-bike classification on public roads. Trail access on county and state property is where local and agency rules matter most."
      }
    ],
    relatedGuides: [
      "ebike-classes-explained",
      "ebike-regulations-overview",
      "mid-atlantic-trail-etiquette"
    ],
    jurisdictions: [
      "maryland"
    ],
  },
  {
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
          "This overview explains how those layers interact. It is not legal advice. For disputes or commercial use, consult an attorney and the authoritative sources cited by each land manager."
        ]
      },
      {
        id: "federal-layer",
        heading: "Federal rules: NPS, USFS, and other public lands",
        paragraphs: [
          "Federal agencies manage substantial Mid-Atlantic acreage: National Park Service units along the Potomac, C&O Canal National Historical Park, Rock Creek Park, Shenandoah National Park, Chesapeake and Ohio corridors, National Seashores, and U.S. Forest Service lands in Virginia and Maryland.",
          "National Park Service policy, reaffirmed through 2024 environmental review, gives park superintendents discretion to allow e-bikes where traditional bicycles are allowed—on roads, parking areas, and designated trails—while prohibiting e-bikes in congressionally designated wilderness. Superintendents publish allowed classes and routes in park compendiums; NPS adopts non-conflicting state e-bike definitions where practical.",
          "U.S. Forest Service and other Department of Interior bureaus maintain separate e-bike guidance that may be more restrictive on non-motorized singletrack. Never assume a permissive Virginia or Maryland state trail policy automatically applies inside a federal unit. Check the specific park or forest website and compendium before loading your bike."
        ],
        listItems: [
          "NPS: superintendent discretion; class limits vary by park; wilderness closed to all bikes.",
          "C&O Canal NHP: verify current towpath e-bike policy—historically distinct from adjacent county trails.",
          "National seashores and battlefields: often limit classes or require staying on designated paved routes.",
          "USFS: e-bike access depends on local forest orders; natural-surface trails may exclude all e-bikes."
        ]
      },
      {
        id: "state-layer",
        heading: "State statutes: Virginia, Maryland, and DC",
        paragraphs: [
          "Virginia, Maryland, and the District of Columbia each codify three-class e-bike definitions with 750-watt motor limits and class-specific speed caps. All three generally treat compliant e-bikes as bicycles for licensing and registration—no driver's license or plate required—but age, helmet, and Class 3 path rules differ.",
          "Virginia permits Class 3 riders from age 14 and allows broader Class 3 access on many road-adjacent paths, while Virginia State Parks limit park trails to Class 1 and Class 2. Maryland requires Class 3 operators to be 16, prohibits Class 3 on most bicycle paths away from highways unless locally authorized, and routes DNR trail access through department regulations that change more frequently than state code.",
          "Washington, DC requires helmets for all e-bike riders regardless of age and regulates shared micromobility operators separately from privately owned e-bikes. DC streets and bike lanes are generally e-bike friendly, but NPS-managed park trails within DC boundaries follow federal compendiums that may be tighter than DC municipal code suggests on paper."
        ]
      },
      {
        id: "local-layer",
        heading: "Local ordinances and county park authorities",
        paragraphs: [
          "Counties and cities regulate sidewalks, municipal parks, and sometimes shared-use paths built with local funds. Montgomery County, Prince George's County, Anne Arundel County, Arlington, Alexandria, Richmond, and Baltimore each maintain bike program pages or municipal codes addressing e-bikes.",
          "Local rules often target sidewalk riding, downtown pedestrian zones, boardwalks, and seasonal event closures rather than repealing state road access. HOAs, universities, and shopping centers add private restrictions—common around Northern Virginia tech campuses and Maryland university towns.",
          "Regional trail authorities such as NOVA Parks manage multi-jurisdiction corridors like the W&OD with their own policy documents that align with but are not identical to Virginia State Parks rules. A rider crossing from Fairfax to Loudoun may encounter different maintenance standards and signage even when class permissions match."
        ]
      },
      {
        id: "restrictive-rule-wins",
        heading: "Which rule wins when policies conflict",
        paragraphs: [
          "The practical rule riders use: the most restrictive applicable policy governs. If Virginia law allows Class 3, a county path prohibits Class 3, and a federal compendium prohibits all e-bikes on a connecting segment, you must follow each restriction as you enter that jurisdiction or land unit.",
          "Posted signage at trailheads legally reinforces many manager decisions even when your online research suggested otherwise. If signage conflicts with a published compendium dated years ago, obey the sign and report the discrepancy to the land manager.",
          "Private property owners can exclude e-bikes entirely. Public rights-of-way do not extend onto private trails, parking garages, or apartment complexes unless easements say otherwise."
        ]
      },
      {
        id: "class-as-key",
        heading: "Bike class is the universal sorting key",
        paragraphs: [
          "Land managers increasingly sort access by class rather than banning all assisted bikes. Class 1 pedal-assist to 20 mph receives the widest trail access. Class 2 throttle-assist to 20 mph faces scrutiny on shared paths where sudden acceleration worries pedestrians. Class 3 pedal-assist to 28 mph is often restricted on paths even when legal on adjacent roads.",
          "Manufacturers must label new e-bikes with class information in many jurisdictions, but aftermarket tuning, speed chips, and imports that exceed 750 watts can reclassify a bike as a motor vehicle. Riding a de-restricted bike on a family rail-trail creates legal risk and community conflict.",
          "If you are buying for trail-heavy Mid-Atlantic use, Class 1 or Class 2 bikes maximize access. Class 3 excels for road commuting but requires route-by-route verification when you leave the street network."
        ]
      },
      {
        id: "enforcement",
        heading: "Enforcement, penalties, and real-world risk",
        paragraphs: [
          "Enforcement varies widely. Busy urban trails rely on education and occasional citations for reckless riding rather than class inspections at trailheads. Federal parks and state parks with resource concerns may enforce prohibitions more visibly when visitor complaints rise.",
          "Operating an unclassified motor vehicle on bicycle infrastructure can result in traffic citations, impoundment in extreme cases, and liability exposure if an crash occurs while riding illegally. Insurance policies may deny claims for incidents involving illegally modified bikes.",
          "Courteous riding is a regulatory strategy: land managers who observe safe sharing are less likely to tighten rules in response to conflict."
        ]
      },
      {
        id: "finding-authoritative-sources",
        heading: "Finding authoritative sources before you ride",
        paragraphs: [
          "Start with state transportation code summaries—for Virginia Title 46.2, Maryland Transportation Article e-bike provisions, and DC Municipal Regulations for motorized bicycles. Pair state law with agency trail documents: Virginia DCR e-bike PDFs, Maryland DNR Bike and E-bike FAQ, NPS park compendiums, and county bike program pages.",
          "eBikeQuest trail and law pages synthesize these sources for Mid-Atlantic riders, including last-verified dates and links—but always confirm at the trailhead the week of your trip because rulemaking in Maryland DNR and NPS compendium updates can outpace any directory.",
          "Save PDFs or screenshot trailhead signs when you ride new routes. If policies change, your records clarify what applied on a given date—useful for community advocacy and personal peace of mind."
        ]
      },
      {
        id: "dc-as-bridge",
        heading: "Washington, DC as a regulatory crossroads",
        paragraphs: [
          "The District functions as a connector between Maryland and Virginia trail networks, but it is its own jurisdiction with universal helmet requirements and Class 3 age minimums. Routes like the Capital Crescent, Metropolitan Branch Trail, Rock Creek Park paths, and Anacostia Riverwalk cross federal, District, and sometimes Maryland property within a single afternoon ride.",
          "Plan routes that minimize jurisdiction surprises: verify NPS segments separately from DDOT-managed lanes, carry a helmet regardless of your home state's age rules, and assume Class 3 restrictions on popular shared paths unless a current District or trail authority document explicitly allows them.",
          "Dockless shared e-bike fleets operate under DC permit conditions that do not change the rules for privately owned Class 2 or Class 3 bikes—but their parking zones and speed governors illustrate how local regulators think about motor power near pedestrians."
        ]
      }
    ],
    faq: [
      {
        question: "Do federal rules override state e-bike laws?",
        answer: "On federal lands, superintendents set e-bike policy within the federal framework, often adopting state class definitions but not state trail permissiveness. On state and local roads, state and municipal law governs. The restrictive applicable rule wins at each boundary."
      },
      {
        question: "Why can I legally ride on the road but not on a nearby trail?",
        answer: "Road access flows from state vehicle codes treating e-bikes as bicycles. Trails are managed by agencies that may restrict classes to reduce conflict or protect resources. Bicycle paths and natural-surface trails are the most common places for extra limits."
      },
      {
        question: "Are e-bikes allowed in National Parks near DC?",
        answer: "Some NPS units allow e-bikes on select paved trails where traditional bikes are allowed; others restrict classes or routes. Rock Creek Park, the C&O Canal, and George Washington Memorial Parkway segments each require per-unit compendium checks—do not assume one park's rule applies to another."
      },
      {
        question: "What happens if my e-bike exceeds 750 watts?",
        answer: "It may no longer qualify as an e-bike under Virginia, Maryland, or DC law and could be treated as a moped or motor vehicle, excluding it from bike lanes and trails. Enforcement and classification vary."
      },
      {
        question: "How often do these rules change?",
        answer: "State codes change infrequently, but agency trail policies—especially Maryland DNR and NPS compendiums—can update annually or after public comment. Verify within a week of major trips."
      },
      {
        question: "Does the most permissive rule ever apply?",
        answer: "No. If any applicable authority prohibits your bike class on a segment, you cannot legally ride there even if another jurisdiction's law is broader. Conflicts resolve toward the stricter rule."
      },
      {
        question: "Where should I start research for a new trail?",
        answer: "Check eBikeQuest trail and law entries, then the land manager's official site and compendium, then trailhead signage on arrival. Call the park office if documents conflict or seem outdated."
      }
    ],
    relatedGuides: [
      "ebike-classes-explained",
      "riding-ebikes-in-virginia",
      "riding-ebikes-in-maryland"
    ],
  },
];
