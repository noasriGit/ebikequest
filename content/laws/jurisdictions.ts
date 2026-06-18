import type { JurisdictionLaw } from "@/types/law";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

export const virginiaLaw: JurisdictionLaw = {
  id: "law-virginia",
  slug: "virginia",
  title: "Virginia E-Bike Laws",
  description:
    "Virginia three-class e-bike statutes under Va. Code § 46.2-904.1: Class 3 helmet rules, age 14+ limits, trail access, and registration requirements explained.",
  ...EDITORIAL_DEFAULTS,
  updatedAt: "2026-06-18",
  jurisdiction: "virginia",
  lastVerified: "2026-06-18",
  sources: [
    {
      label: "Virginia Code § 46.2-904.1 – Electric power-assisted bicycles",
      url: "https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-904.1/",
      accessedAt: "2026-06-18",
    },
    {
      label: "Virginia Code § 46.2-908.1 – Speed limits and age restrictions",
      url: "https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-908.1/",
      accessedAt: "2026-06-18",
    },
    {
      label: "Virginia Code § 46.2-906.1 – Local helmet ordinances",
      url: "https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-906.1/",
      accessedAt: "2026-06-18",
    },
    {
      label: "Virginia Code § 46.2-904 – Sidewalk and shared-use path operation",
      url: "https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-904/",
      accessedAt: "2026-06-18",
    },
  ],
  summary:
    "Virginia adopted a three-class electric power-assisted bicycle framework in 2020 through Va. Code § 46.2-904.1, aligning with the national PeopleForBikes model used in most U.S. states. Class 1 e-bikes provide pedal-assist only and cease motor assistance at 20 mph. Class 2 e-bikes may use a throttle and also stop assisting at 20 mph. Class 3 e-bikes are pedal-assist only with assistance up to 28 mph, must carry a speedometer, and trigger the strictest operator rules in the Commonwealth. Compliant e-bikes are treated as bicycles for nearly all traffic purposes: no driver's license, registration, certificate of title, insurance, or license plate is required, and riders generally receive the same rights and duties as conventional cyclists on public roads. Manufacturers and distributors must affix permanent class labels showing classification number, top assisted speed, and motor wattage, and tampering that changes motor capability requires replacing that label. Motor wattage is capped at 750 watts under the statutory definition referenced throughout Title 46.2. Virginia does not impose a statewide helmet mandate for Class 1 or Class 2 riders, though localities may require helmets for riders 14 and younger on highways, sidewalks, and public bicycle paths under § 46.2-906.1. Class 3 is different: every operator and passenger must wear a CPSC- or ASTM-compliant helmet regardless of age, and riders under 14 may not operate a Class 3 e-bike unless under the immediate supervision of someone at least 18 years old per § 46.2-908.1. E-bikes may be ridden wherever bicycles are allowed unless a locality or state agency with jurisdiction over a path prohibits specific classes after notice and a public hearing. Class 3 e-bikes may be banned outright on shared-use paths, and natural-surface nonmotorized trails may be regulated separately. Sidewalk riding is permitted statewide for e-bikes unless a local ordinance prohibits it, with a duty to yield to pedestrians and give an audible signal before passing. Devices that exceed statutory speed or power limits fall outside the e-bike definition and may be treated as mopeds or motor vehicles with additional licensing and equipment requirements.",
  classifications: {
    class1: {
      definition:
        "Pedal-assist only; motor ceases assistance at 20 mph; up to 750 watts; must meet CPSC bicycle equipment standards and display a permanent class label.",
      allowedOnRoads: true,
      allowedOnTrails:
        "Allowed on streets, bike lanes, and shared-use paths unless a locality or state agency prohibits Class 1 after notice and a public hearing.",
      maxSpeedMph: 20,
      notes:
        "No statewide helmet requirement for adults; local ordinances may require helmets for riders 14 and younger.",
    },
    class2: {
      definition:
        "Throttle or pedal-assist; motor ceases assistance at 20 mph; up to 750 watts; must meet CPSC bicycle equipment standards and display a permanent class label.",
      allowedOnRoads: true,
      allowedOnTrails:
        "Allowed where bicycles are permitted unless a path manager prohibits Class 2 after notice and a public hearing; natural-surface nonmotorized trails may have separate rules.",
      maxSpeedMph: 20,
      notes:
        "Throttle capability may lead some trail managers to restrict Class 2 on multi-use paths even when Class 1 is allowed.",
    },
    class3: {
      definition:
        "Pedal-assist only; motor ceases assistance at 28 mph; up to 750 watts; must include a speedometer and permanent class label.",
      allowedOnRoads: true,
      allowedOnTrails:
        "May be prohibited on any shared-use path by the controlling locality or agency; verify posted rules before riding rail-trails or park paths.",
      maxSpeedMph: 28,
      notes:
        "All operators and passengers must wear helmets; riders under 14 need immediate supervision by someone 18 or older.",
    },
  },
  trailAccess:
    "Virginia's default rule under § 46.2-904.1(F) is permissive: electric power-assisted bicycles may be ridden anywhere bicycles are allowed, including streets, shoulders, bicycle lanes, and bicycle or shared-use paths. That broad access makes Virginia relatively e-bike friendly on paper, but land managers retain significant authority to narrow it. A locality or state agency with jurisdiction over a bicycle or shared-use path may prohibit Class 1 or Class 2 e-bikes after providing notice and holding a public hearing if it finds a restriction necessary for public safety or legal compliance. Class 3 e-bikes face a stricter default: the same authorities may prohibit Class 3 on shared-use paths without needing to justify a safety finding beyond their general path authority. Separately, agencies controlling natural-surface trails designated as nonmotorized—trails with a tread made by clearing and grading native soil without added surfacing—may regulate e-bikes of any class on those routes. Federal lands inside Virginia add another layer. National Park Service, U.S. Forest Service, and other federal units set their own e-bike policies that may be tighter than state law regardless of class label. Popular Northern Virginia destinations such as the Mount Vernon Trail, W&OD Trail, and parkland in Fairfax, Arlington, and Loudoun counties each publish their own e-bike rules; riders should check the managing agency before assuming state-default access. On sidewalks, § 46.2-903 and § 46.2-904 allow e-bikes on sidewalks unless a local ordinance prohibits them; riders must yield to pedestrians and signal before passing. State parks managed by the Virginia Department of Conservation and Recreation generally follow bicycle rules on paved paths but may restrict e-bikes on backcountry or natural-surface routes. When planning a ride, confirm both the statutory class of your bike and the posted policy of the specific trail network.",
  helmetRequirements:
    "Class 3 operators and passengers must wear CPSC- or ASTM-compliant helmets at all ages. Localities may require helmets for riders 14 and younger on any e-bike class.",
  ageRequirements:
    "Riders under 14 may not operate a Class 3 e-bike unless under immediate supervision of a person at least 18 years old.",
  registrationRequired: false,
  insuranceRequired: false,
  penalties:
    "Violations of local sidewalk or helmet ordinances may carry civil penalties up to $50. Devices operated outside the e-bike definition may face motor-vehicle enforcement.",
  faq: [
    {
      question: "Are e-bikes legal in Virginia?",
      answer:
        "Yes. Virginia recognizes Class 1, Class 2, and Class 3 electric power-assisted bicycles under Va. Code § 46.2-904.1 when they meet motor wattage, speed, labeling, and equipment requirements.",
    },
    {
      question: "Do I need a driver's license for an e-bike in Virginia?",
      answer:
        "No. Compliant e-bikes are exempt from driver's license, registration, title, insurance, and license plate requirements under § 46.2-904.1(B).",
    },
    {
      question: "Who must wear a helmet on a Virginia e-bike?",
      answer:
        "Every operator and passenger on a Class 3 e-bike must wear a helmet at all ages. Local ordinances may additionally require helmets for riders 14 and younger on any bicycle or e-bike.",
    },
    {
      question: "How old must I be to ride a Class 3 e-bike in Virginia?",
      answer:
        "Riders under 14 may not operate a Class 3 e-bike unless under the immediate supervision of someone at least 18 years old, per § 46.2-908.1.",
    },
    {
      question: "Can Class 3 e-bikes use shared-use paths in Virginia?",
      answer:
        "Only if the path manager allows them. Localities and state agencies may prohibit Class 3 e-bikes on shared-use paths under § 46.2-904.1(F)(2).",
    },
    {
      question: "Are e-bikes allowed on Virginia sidewalks?",
      answer:
        "Generally yes under § 46.2-903, unless a county, city, or town ordinance prohibits e-bikes on specific sidewalks. Riders must yield to pedestrians.",
    },
    {
      question: "What is the maximum motor power for a Virginia e-bike?",
      answer:
        "Virginia follows the standard 750-watt (1 horsepower) motor limit referenced in the electric power-assisted bicycle definition within Title 46.2.",
    },
    {
      question: "Does Virginia require e-bike registration?",
      answer:
        "No. Properly classified electric power-assisted bicycles are not registered or titled as motor vehicles in Virginia.",
    },
    {
      question: "Can I modify my e-bike's speed in Virginia?",
      answer:
        "Tampering that changes motor-powered speed capability is prohibited unless the manufacturer class label is replaced after modification, per § 46.2-904.1(D).",
    },
    {
      question: "Do federal trails in Virginia follow state e-bike law?",
      answer:
        "Not always. National parks, forests, and other federal lands may restrict e-bikes by class regardless of Virginia's default trail access rules.",
    },
  ],
  comparisonFields: {
    jurisdiction: "virginia",
    jurisdictionName: "Virginia",
    class1Allowed: "Yes",
    class2Allowed: "Yes",
    class3Allowed: "Yes (age 14+ unsupervised)",
    helmetRequired: "Class 3 (all ages)",
    registrationRequired: "No",
    trailAccessSummary: "Default allowed where bikes permitted; path managers may restrict by class",
    lastVerified: "2026-06-18",
  },
};

export const marylandLaw: JurisdictionLaw = {
  id: "law-maryland",
  slug: "maryland",
  title: "Maryland E-Bike Laws",
  description:
    "Maryland three-class e-bike law: Class 3 age 16+, path bans, helmets under 16, and HB 375 sidewalk riding rules effective October 2025 statewide.",
  ...EDITORIAL_DEFAULTS,
  updatedAt: "2026-06-18",
  jurisdiction: "maryland",
  lastVerified: "2026-06-18",
  sources: [
    {
      label: "Maryland Transportation Code § 11-117.1 – Electric bicycle definitions",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=11-117.1",
      accessedAt: "2026-06-18",
    },
    {
      label: "Maryland Transportation Code § 21-1205.2 – Operation of electric bicycles",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=21-1205.2",
      accessedAt: "2026-06-18",
    },
    {
      label: "Maryland Transportation Code § 21-1207.1 – Bicycle helmets required",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=21-1207.1",
      accessedAt: "2026-06-18",
    },
    {
      label: "Maryland HB 375 (2025) – Sidewalk bicycle riding (Jay's Law)",
      url: "https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/HB0375?ys=2025RS",
      accessedAt: "2026-06-18",
    },
  ],
  summary:
    "Maryland defines electric bicycles in Transportation Article § 11-117.1 using the standard three-class system effective since 2020 legislation. Class 1 e-bikes provide pedal-assist up to 20 mph, Class 2 e-bikes may use a throttle up to 20 mph, and Class 3 e-bikes provide pedal-assist up to 28 mph with a mandatory speedometer. All classes require operable pedals, two or three wheels, and a motor rated at 750 watts or less. Compliant e-bikes are treated like bicycles for most road purposes and do not require registration, titling, or a driver's license. Manufacturers must affix permanent class labels, and riders may not tamper with motor capability without updating the label. Operation rules in § 21-1205.2 establish Maryland's distinctive trail policy: Class 1 and Class 2 e-bikes may travel wherever bicycles are allowed, including bike lanes, but a local authority or state agency with jurisdiction over a bicycle path may prohibit Class 1 or Class 2 on that path. Class 3 e-bikes face a stricter default ban on bicycle paths unless the path is within or adjacent to a highway right-of-way or the controlling agency expressly allows Class 3. Natural-surface nonmotorized trails may be regulated for any class. Age rules are also class-specific: no one under 16 may operate a Class 3 e-bike on a public highway, though younger passengers may ride on Class 3 bikes designed to carry them. Helmet law applies broadly to bicycles: § 21-1207.1 requires anyone under 16 riding a bicycle—including e-bikes treated as bicycles—to wear an ANSI, Snell, or ASTM compliant helmet on highways, bicycle ways, and other public property, enforced through warnings and education rather than fines in most cases. A major 2025 update, House Bill 375 (Jay's Law, effective October 1, 2025), changed sidewalk policy statewide: unless a local ordinance prohibits it, people may ride bicycles, play vehicles, and unicycles on sidewalks and must yield to pedestrians and users of electric personal assistive mobility devices when doing so. Local business districts such as Baltimore may still restrict sidewalk cycling by ordinance. Devices exceeding class limits or modified beyond labeled capability may be reclassified as mopeds or motor scooters with additional requirements.",
  classifications: {
    class1: {
      definition:
        "Pedal-assist only; motor ceases at 20 mph; up to 750 watts; permanent class label required since January 1, 2020.",
      allowedOnRoads: true,
      allowedOnTrails:
        "Allowed where bicycles may travel, but path managers may prohibit Class 1 on specific bicycle paths under § 21-1205.2(a)(2)(i).",
      maxSpeedMph: 20,
      notes:
        "Sidewalk riding permitted statewide unless locally prohibited under HB 375, effective October 1, 2025.",
    },
    class2: {
      definition:
        "Motor assists whether or not the rider pedals; ceases at 20 mph; up to 750 watts; permanent class label required.",
      allowedOnRoads: true,
      allowedOnTrails:
        "Same as Class 1: permitted on bike lanes and most roads, but individual bicycle paths may ban Class 2 by agency action.",
      maxSpeedMph: 20,
      notes:
        "Throttle capability makes Class 2 more likely to be restricted on shared paths even when Class 1 remains allowed.",
    },
    class3: {
      definition:
        "Pedal-assist only; motor ceases at 28 mph; up to 750 watts; must include a speedometer and permanent class label.",
      allowedOnRoads: true,
      allowedOnTrails:
        "Prohibited on bicycle paths unless the path is within or adjacent to a highway right-of-way or expressly authorized by the path manager.",
      maxSpeedMph: 28,
      notes:
        "Operators must be at least 16; passengers under 16 may ride only on bikes designed to carry passengers.",
    },
  },
  trailAccess:
    "Maryland's e-bike trail access rules under § 21-1205.2 create one of the region's clearest class distinctions. By default, all three classes may be operated wherever conventional bicycles may travel, including public roads and bike lanes. That default, however, narrows quickly on off-road infrastructure. Any local authority or state agency that controls a bicycle path may prohibit Class 1 or Class 2 e-bikes on that path without needing a statewide waiver. Class 3 e-bikes are treated more restrictively: they may not be ridden on a bicycle path at all unless the path sits within or next to a highway right-of-way or the responsible agency has explicitly opened the path to Class 3. In practice, this means many rail-trails, park paths, and greenway connectors that qualify as bicycle paths prohibit Class 3 unless posted otherwise, while Class 1 and Class 2 remain allowed until a manager opts out. For natural-surface trails designated nonmotorized—with a tread formed by clearing and grading native soil without added surfacing—agencies may regulate e-bikes of any class. Popular systems such as the B&A Trail, MA & PA Trail, and Montgomery County park paths each publish supplemental rules; riders should verify the managing body. Federal lands in Maryland follow separate policies. On sidewalks, HB 375 (effective October 1, 2025) establishes a statewide permission for bicycle riding on sidewalks unless a local ordinance bans it, with a mandatory yield to pedestrians and EPAMD users. Baltimore City and other municipalities may still restrict sidewalk cycling in business districts. Helmet requirements for riders under 16 apply on bicycle ways and public property, reinforcing safety expectations on multi-use paths. When choosing a route, match your bike's class label to both the statutory path restrictions and any posted trail-specific rules.",
  helmetRequirements:
    "Required for all bicycle riders and passengers under 16 on public roads, bicycle ways, and public property under § 21-1207.1.",
  ageRequirements:
    "Class 3 operators must be at least 16 on public highways; younger passengers may ride on Class 3 bikes designed for passengers.",
  registrationRequired: false,
  insuranceRequired: false,
  penalties:
    "Helmet violations trigger warnings and educational materials. Operating outside the e-bike definition may subject riders to moped or motor scooter enforcement.",
  faq: [
    {
      question: "Are e-bikes legal in Maryland?",
      answer:
        "Yes. Maryland recognizes Class 1, Class 2, and Class 3 electric bicycles under § 11-117.1 when they meet wattage, speed, labeling, and equipment standards.",
    },
    {
      question: "Can I ride a Class 3 e-bike on Maryland bike paths?",
      answer:
        "Generally no. Class 3 is prohibited on bicycle paths unless the path is within or adjacent to a highway right-of-way or expressly allowed by the path manager under § 21-1205.2.",
    },
    {
      question: "How old must I be to operate a Class 3 e-bike in Maryland?",
      answer:
        "At least 16 years old on a public highway. A person under 16 may ride as a passenger on a Class 3 bike designed to carry passengers.",
    },
    {
      question: "Does Maryland require helmets for e-bike riders?",
      answer:
        "Riders and passengers under 16 must wear helmets meeting ANSI, Snell, or ASTM standards on public roads, bicycle ways, and public property under § 21-1207.1.",
    },
    {
      question: "Can I ride an e-bike on the sidewalk in Maryland?",
      answer:
        "Since October 1, 2025, HB 375 allows sidewalk riding on bicycles unless a local ordinance prohibits it. Riders must yield to pedestrians and EPAMD users.",
    },
    {
      question: "Do Maryland e-bikes need registration or insurance?",
      answer:
        "No. Compliant electric bicycles are not registered or insured as motor vehicles under Maryland's e-bike framework.",
    },
    {
      question: "Can local agencies ban Class 1 or Class 2 e-bikes on trails?",
      answer:
        "Yes. A local authority or state agency with jurisdiction over a bicycle path may prohibit Class 1 or Class 2 e-bikes on that path under § 21-1205.2(a)(2)(i).",
    },
    {
      question: "What motor wattage limit applies in Maryland?",
      answer:
        "Electric bicycles must have a motor rated at 750 watts or less to qualify under § 11-117.1.",
    },
    {
      question: "Does Class 3 require a speedometer in Maryland?",
      answer:
        "Yes. Class 3 electric bicycles must be equipped with a speedometer displaying speed in miles per hour under § 21-1205.2(e).",
    },
    {
      question: "Can I modify my e-bike motor in Maryland?",
      answer:
        "Tampering that changes motor-powered speed capability is prohibited unless the classification label is corrected after modification, per § 21-1205.2(b).",
    },
  ],
  comparisonFields: {
    jurisdiction: "maryland",
    jurisdictionName: "Maryland",
    class1Allowed: "Yes",
    class2Allowed: "Yes",
    class3Allowed: "Yes (age 16+; path restrictions)",
    helmetRequired: "Under 16",
    registrationRequired: "No",
    trailAccessSummary: "Class 3 banned on most bike paths; Class 1/2 may be restricted locally",
    lastVerified: "2026-06-18",
  },
};

export const washingtonDcLaw: JurisdictionLaw = {
  id: "law-washington-dc",
  slug: "washington-dc",
  title: "Washington DC E-Bike Laws",
  description:
    "DC motorized bicycle law—not three-class: 20 mph motor cap, age 16+, no sidewalk use, helmets under 16 only, and Class 3 not recognized as legal e-bikes.",
  ...EDITORIAL_DEFAULTS,
  updatedAt: "2026-06-18",
  jurisdiction: "washington-dc",
  lastVerified: "2026-06-18",
  sources: [
    {
      label: "DC Code § 50-2201.02 – Motorized bicycle definition",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2201.02",
      accessedAt: "2026-06-18",
    },
    {
      label: "DC Code § 50-1605 – Bicycle helmet requirements",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-1605",
      accessedAt: "2026-06-18",
    },
    {
      label: "DCMR § 18-1201 – Safe operation of bicycles and motorized bicycles",
      url: "https://dcrules.elaws.us/dcmr/18-1201",
      accessedAt: "2026-06-18",
    },
    {
      label: "DDOT E-Bike Guide – District compliance and safety",
      url: "https://ddot.dc.gov/sites/default/files/dc/sites/ddot/E-Bike%20Guide_FINAL%20%281%29.pdf",
      accessedAt: "2026-06-18",
    },
  ],
  summary:
    "The District of Columbia does not use the three-class e-bike system found in Virginia and Maryland. Instead, D.C. Code § 50-2201.02 defines a motorized bicycle as a two- or three-wheeled vehicle with a post-mounted seat, wheels at least 16 inches in diameter, fully operative pedals, and a motor incapable of propelling the device faster than 20 mph on level ground. Devices meeting that definition—including most Class 1 and Class 2 e-bikes sold nationally—are treated as bicycles for traffic purposes: no registration, driver's license, or insurance is required, and operators follow the same rules of the road as conventional cyclists. DDOT's official E-Bike Guide confirms that Class 1 and Class 2 models with operable pedals and motors under 750 watts that stop assisting at 20 mph qualify as legal motorized bicycles in the District. Class 3 e-bikes, which assist up to 28 mph, do not fit the motorized bicycle definition because the motor exceeds the 20 mph cap; they are not legally recognized as e-bikes and may be treated as motor-driven cycles or similar motor vehicles requiring a valid driver's license and additional compliance. All motorized bicycle operators must be at least 16 years old according to DDOT guidance interpreting District law. Helmet requirements differ from neighboring jurisdictions: D.C. Code § 50-1605 mandates helmets only for bicycle operators and passengers under 16 on public roadways, bicycle paths, and other public rights-of-way; adults 16 and older are not legally required to wear helmets on compliant motorized bicycles, though safety advocates strongly recommend them. Sidewalk rules are also distinct. DCMR § 18-1201.18 prohibits operating a motorized bicycle on any sidewalk or off-street bike path in the District, even when powered solely by human pedaling. Conventional bicycles may use sidewalks outside the Central Business District with restrictions, but motorized bicycles may not. Motorized bicycles may use roadways and portions of roadways designated for bicycle use. Speed enforcement matters: DDOT and DMV guidance note that a motorized bicycle operated above 20 mph by motor power may be classified as a motor-driven cycle, and above 30 mph as a motorcycle, triggering licensing and helmet rules for those vehicle categories.",
  classifications: {
    class1: {
      definition:
        "Nationally labeled Class 1 (pedal-assist to 20 mph) qualifies as a D.C. motorized bicycle when it has operable pedals and a motor capped at 20 mph on level ground.",
      allowedOnRoads: true,
      allowedOnTrails:
        "May use roadway bicycle facilities under DCMR § 18-1201.17; prohibited on sidewalks and off-street bike paths per § 18-1201.18.",
      maxSpeedMph: 20,
      notes:
        "Not part of a formal D.C. class system; compliance is based on the motorized bicycle definition, not a class label alone.",
    },
    class2: {
      definition:
        "Nationally labeled Class 2 (throttle to 20 mph) qualifies as a motorized bicycle if operable pedals remain and motor speed stays at or below 20 mph on level ground.",
      allowedOnRoads: true,
      allowedOnTrails:
        "Same as qualifying Class 1: allowed on road bike lanes, banned from sidewalks and off-street bike paths regardless of whether pedaling only.",
      maxSpeedMph: 20,
      notes:
        "Throttle-equipped bikes that meet the 20 mph motorized bicycle cap are legal; shared micromobility devices may face separate permit rules.",
    },
    class3: {
      definition:
        "Nationally labeled Class 3 (pedal-assist to 28 mph) is not a motorized bicycle in D.C. because the motor exceeds the 20 mph statutory cap.",
      allowedOnRoads: false,
      allowedOnTrails:
        "Not recognized as a legal e-bike; may be treated as a motor-driven cycle or other motor vehicle with licensing and equipment requirements.",
      maxSpeedMph: 28,
      notes:
        "DDOT guidance states Class 3 is not legally an e-bike in the District. Operators need a valid driver's license if classified as a motor-driven cycle.",
    },
  },
  trailAccess:
    "Trail and path access for e-bikes in Washington, D.C. is shaped primarily by the motorized bicycle definition and DCMR bicycle regulations rather than a three-class trail matrix. Compliant Class 1 and Class 2 e-bikes that meet the 20 mph motorized bicycle standard may be operated on any part of a roadway designated for bicycle use, including bike lanes on District streets. They are explicitly prohibited from sidewalks and from off-street bike paths and bicycle routes anywhere in the city under DCMR § 18-1201.18, a rule that applies even when the rider is pedaling without motor assistance. This makes D.C. significantly more restrictive than Virginia or Maryland for sidewalk and separated-path riding on motorized bicycles. Conventional human-powered bicycles face different sidewalk rules: outside the Central Business District, cyclists may use sidewalks unless the Mayor has posted prohibitions, but that permission does not extend to motorized bicycles. Within the Capital Region, many popular routes—including sections of the Metropolitan Branch Trail, Rock Creek Park paths, and connections through federal parkland—are managed by the National Park Service or other federal agencies with policies that may differ from DDOT rules. NPS compendiums for Rock Creek Park and the National Mall have evolved to allow certain e-bike classes on select routes, but those federal allowances do not override D.C.'s prohibition on motorized bicycles on off-street bike paths under local regulations. Class 3 devices that exceed the 20 mph motorized bicycle cap are not eligible for bicycle-path treatment at all and may require a driver's license and compliance with motor-driven cycle rules if operated on public roads. Before riding, confirm that your bike meets the 20 mph motorized bicycle definition, that you are at least 16, and check both DDOT signage and federal land manager policies for the specific corridor you plan to use.",
  helmetRequirements:
    "Required for operators and passengers under 16 on public roadways, bicycle paths, and other public rights-of-way under D.C. Code § 50-1605. Adults 16+ are not required by law.",
  ageRequirements:
    "Operators of motorized bicycles must be at least 16 years old per DDOT guidance and District traffic regulations.",
  registrationRequired: false,
  insuranceRequired: false,
  penalties:
    "Helmet violations for riders under 16 may result in a $25 fine assessed to parents or guardians, with first-offense suspension available. Operating an unclassified motor vehicle may trigger licensing enforcement.",
  faq: [
    {
      question: "Does Washington DC use the three-class e-bike system?",
      answer:
        "No. D.C. defines compliant devices as motorized bicycles with a 20 mph motor cap under § 50-2201.02 rather than adopting Class 1, 2, and 3 statutory categories.",
    },
    {
      question: "Are Class 3 e-bikes legal in Washington DC?",
      answer:
        "Not as e-bikes. Class 3 models exceed the 20 mph motorized bicycle cap and are not legally recognized as e-bikes; they may be treated as motor-driven cycles requiring a driver's license.",
    },
    {
      question: "How old must I be to ride an e-bike in DC?",
      answer:
        "At least 16 years old. DDOT's E-Bike Guide states riders of legal motorized bicycles must be 16 or older.",
    },
    {
      question: "Are helmets required for e-bike riders in DC?",
      answer:
        "Only for operators and passengers under 16 on public roadways, bicycle paths, and other public rights-of-way under § 50-1605. Adults are not legally required to wear helmets.",
    },
    {
      question: "Can I ride a motorized bicycle on DC sidewalks?",
      answer:
        "No. DCMR § 18-1201.18 prohibits operating a motorized bicycle on any sidewalk or off-street bike path, even when pedaling without motor power.",
    },
    {
      question: "Do e-bikes need registration or insurance in DC?",
      answer:
        "No. Motorized bicycles meeting the statutory definition are exempt from registration, licensing, and insurance requirements that apply to motor vehicles.",
    },
    {
      question: "Which e-bikes qualify as legal in the District?",
      answer:
        "Generally Class 1 and Class 2 models with operable pedals, motors under 750 watts, and a 20 mph maximum motor speed on level ground, per DDOT guidance and § 50-2201.02.",
    },
    {
      question: "Can I use an e-bike on the Metropolitan Branch Trail?",
      answer:
        "Motorized bicycles are banned from off-street bike paths under DCMR § 18-1201.18. Federal and local managers may post additional restrictions on specific segments.",
    },
    {
      question: "What happens if my e-bike exceeds 20 mph?",
      answer:
        "DDOT and DMV guidance indicate speeds above 20 mph by motor may reclassify the device as a motor-driven cycle, and above 30 mph as a motorcycle, with licensing consequences.",
    },
    {
      question: "Are e-bikes allowed on National Mall paths?",
      answer:
        "Federal NPS policies govern National Mall trails and may differ from D.C. local law. Check the current NPS superintendent's compendium before riding any e-bike there.",
    },
  ],
  comparisonFields: {
    jurisdiction: "washington-dc",
    jurisdictionName: "District of Columbia",
    class1Allowed: "Yes (as motorized bicycle)",
    class2Allowed: "Yes (as motorized bicycle)",
    class3Allowed: "No (not a motorized bicycle)",
    helmetRequired: "Under 16",
    registrationRequired: "No",
    trailAccessSummary: "Road bike lanes OK; sidewalks and off-street paths prohibited for motorized bicycles",
    lastVerified: "2026-06-18",
  },
};

export const jurisdictionLaws: JurisdictionLaw[] = [
  virginiaLaw,
  marylandLaw,
  washingtonDcLaw,
];
