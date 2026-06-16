import type { JurisdictionLaw } from "@/types/law";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

const classDefaults = {
  class1: {
    definition: "Pedal-assist only, motor ceases at 20 mph",
    allowedOnRoads: true,
    allowedOnTrails: "Generally allowed where bicycles are permitted",
    maxSpeedMph: 20,
  },
  class2: {
    definition: "Throttle-assisted, motor ceases at 20 mph",
    allowedOnRoads: true,
    allowedOnTrails: "May be restricted on natural surface trails",
    maxSpeedMph: 20,
  },
  class3: {
    definition: "Pedal-assist only, motor ceases at 28 mph",
    allowedOnRoads: true,
    allowedOnTrails: "Often restricted on shared-use paths",
    maxSpeedMph: 28,
  },
};

export const virginiaLaw: JurisdictionLaw = {
  id: "law-virginia",
  slug: "virginia",
  title: "Virginia E-Bike Laws",
  description:
    "Virginia e-bike classifications, trail access rules, helmet requirements, and registration for Class 1, 2, and 3 electric bicycles.",
  ...EDITORIAL_DEFAULTS,
  updatedAt: "2026-06-01",
  jurisdiction: "virginia",
  lastVerified: "2026-06-01",
  sources: [
    {
      label: "Virginia Code – Electric power-assisted bicycles",
      url: "https://law.lis.virginia.gov/vacode/title46.2/chapter1/section46.2-100/",
      accessedAt: "2026-05-28",
    },
    {
      label: "Virginia Department of Wildlife Resources – E-bike FAQ",
      url: "https://dwr.virginia.gov/",
      accessedAt: "2026-05-28",
    },
  ],
  summary:
    "Virginia defines three classes of e-bikes and generally treats them as bicycles when meeting statutory requirements. Local ordinances and land managers may impose additional restrictions on trails and paths.",
  classifications: classDefaults,
  trailAccess:
    "E-bikes meeting Virginia's statutory definition may access trails where bicycles are allowed unless a land manager posts otherwise. State parks and federal lands may have additional restrictions.",
  helmetRequirements: "Helmets required for riders under 14; strongly recommended for all e-bike riders.",
  ageRequirements: "Class 3 e-bike operators must be at least 14 years old.",
  registrationRequired: false,
  insuranceRequired: false,
  penalties: "Operating an unclassified motor vehicle on bicycle infrastructure may result in traffic citations.",
  faq: [
    {
      question: "Are e-bikes legal in Virginia?",
      answer:
        "Yes. Virginia recognizes Class 1, 2, and 3 e-bikes that meet statutory motor wattage and speed limits.",
    },
    {
      question: "Do I need a license to ride an e-bike in Virginia?",
      answer: "No license is required for e-bikes meeting the state definition.",
    },
    {
      question: "Can I ride a Class 3 e-bike on Virginia rail-trails?",
      answer:
        "It depends on the trail manager. Many rail-trails allow all three classes, but individual trails may restrict Class 2 and 3.",
    },
    {
      question: "Are e-bikes allowed on sidewalks in Virginia?",
      answer:
        "Local ordinances govern sidewalk riding. Many cities restrict e-bikes on sidewalks even when Class 1 bikes are allowed.",
    },
    {
      question: "Does Virginia require e-bike registration?",
      answer: "No. E-bikes meeting the statutory definition are not registered as motor vehicles.",
    },
    {
      question: "What is the maximum motor power allowed?",
      answer: "Virginia limits e-bike motors to 750 watts (1 horsepower) for classification as an e-bike.",
    },
  ],
  comparisonFields: {
    jurisdiction: "virginia",
    jurisdictionName: "Virginia",
    class1Allowed: "Yes",
    class2Allowed: "Yes",
    class3Allowed: "Yes (age 14+)",
    helmetRequired: "Under 14",
    registrationRequired: "No",
    trailAccessSummary: "Allowed where bikes permitted unless posted",
    lastVerified: "2026-06-01",
  },
};

export const marylandLaw: JurisdictionLaw = {
  id: "law-maryland",
  slug: "maryland",
  title: "Maryland E-Bike Laws",
  description:
    "Maryland e-bike rules including class definitions, trail access on state and county paths, and operator requirements.",
  ...EDITORIAL_DEFAULTS,
  updatedAt: "2026-06-01",
  jurisdiction: "maryland",
  lastVerified: "2026-06-01",
  sources: [
    {
      label: "Maryland Transportation Code – Electric bicycles",
      url: "https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/Trans",
      accessedAt: "2026-05-28",
    },
  ],
  summary:
    "Maryland adopted a three-class e-bike framework aligning with national standards. E-bikes are generally permitted on roads and many multi-use paths, but trail-specific rules vary by jurisdiction and land manager.",
  classifications: classDefaults,
  trailAccess:
    "Maryland state and county trail systems often allow e-bikes on paved multi-use trails. Natural surface and park trails may restrict throttle-equipped bikes.",
  helmetRequirements: "Required for all e-bike operators under 16.",
  ageRequirements: "Class 3 operators must be at least 16 in Maryland.",
  registrationRequired: false,
  insuranceRequired: false,
  faq: [
    {
      question: "Are e-bikes legal in Maryland?",
      answer: "Yes. Maryland recognizes Class 1, 2, and 3 e-bikes under state transportation law.",
    },
    {
      question: "Can I ride an e-bike on the B&A Trail?",
      answer:
        "Yes. The B&A Trail permits e-bikes meeting Maryland statutory definitions.",
    },
    {
      question: "Do e-bikes need insurance in Maryland?",
      answer: "No. Properly classified e-bikes do not require motor vehicle insurance.",
    },
    {
      question: "Are throttle e-bikes allowed on Maryland trails?",
      answer:
        "Class 2 e-bikes are allowed on many paved trails but may be restricted on natural surface paths.",
    },
    {
      question: "What speed can an e-bike go in Maryland?",
      answer: "Class 1 and 2 assist up to 20 mph; Class 3 assists up to 28 mph with pedal input.",
    },
    {
      question: "Can local cities ban e-bikes?",
      answer:
        "Local jurisdictions may regulate sidewalk use and specific paths but cannot override state e-bike classification on public roads.",
    },
  ],
  comparisonFields: {
    jurisdiction: "maryland",
    jurisdictionName: "Maryland",
    class1Allowed: "Yes",
    class2Allowed: "Yes",
    class3Allowed: "Yes (age 16+)",
    helmetRequired: "Under 16",
    registrationRequired: "No",
    trailAccessSummary: "Allowed on many paved trails; verify per trail",
    lastVerified: "2026-06-01",
  },
};

export const washingtonDcLaw: JurisdictionLaw = {
  id: "law-washington-dc",
  slug: "washington-dc",
  title: "Washington DC E-Bike Laws",
  description:
    "District of Columbia e-bike regulations, class rules, and trail access for the nation's capital.",
  ...EDITORIAL_DEFAULTS,
  updatedAt: "2026-06-01",
  jurisdiction: "washington-dc",
  lastVerified: "2026-06-01",
  sources: [
    {
      label: "DC Municipal Regulations – Motorized bicycles",
      url: "https://code.dccouncil.gov/",
      accessedAt: "2026-05-28",
    },
    {
      label: "DDOT – Bicycle Program",
      url: "https://ddot.dc.gov/page/bicycle-program",
      accessedAt: "2026-05-28",
    },
  ],
  summary:
    "Washington DC regulates e-bikes under its motorized bicycle framework with class-based rules. Urban infrastructure supports e-bike commuting, but federal parklands within DC may impose separate restrictions.",
  classifications: classDefaults,
  trailAccess:
    "E-bikes are permitted on DC streets and many bike lanes. NPS-managed park trails within DC may restrict certain e-bike classes on natural surface paths.",
  helmetRequirements: "Required for all e-bike riders in DC regardless of age.",
  ageRequirements: "Operators must be at least 16 for Class 3 e-bikes.",
  registrationRequired: false,
  insuranceRequired: false,
  faq: [
    {
      question: "Are e-bikes allowed in Washington DC?",
      answer: "Yes. DC recognizes e-bikes that meet its motorized bicycle classification standards.",
    },
    {
      question: "Can I ride an e-bike on the National Mall?",
      answer:
        "E-bikes may use designated bike routes, but riding on crowded pedestrian areas of the National Mall may be restricted.",
    },
    {
      question: "Are helmets required for e-bikes in DC?",
      answer: "Yes. All e-bike operators must wear helmets in the District of Columbia.",
    },
    {
      question: "Can I ride e-bikes in Rock Creek Park?",
      answer:
        "E-bike access in Rock Creek Park is limited. Class 1 e-bikes may be allowed on select paved segments; verify current NPS policy.",
    },
    {
      question: "Does DC treat e-bikes as motor vehicles?",
      answer:
        "No. Properly classified e-bikes are treated as bicycles for most DC traffic purposes.",
    },
    {
      question: "Are dockless e-bike shares regulated differently?",
      answer:
        "Shared e-bike operators must comply with DC permit requirements, separate from privately owned e-bike rules.",
    },
  ],
  comparisonFields: {
    jurisdiction: "washington-dc",
    jurisdictionName: "District of Columbia",
    class1Allowed: "Yes",
    class2Allowed: "Yes",
    class3Allowed: "Yes (age 16+)",
    helmetRequired: "All ages",
    registrationRequired: "No",
    trailAccessSummary: "Allowed on streets/bike lanes; NPS trails vary",
    lastVerified: "2026-06-01",
  },
};

export const jurisdictionLaws: JurisdictionLaw[] = [
  virginiaLaw,
  marylandLaw,
  washingtonDcLaw,
];
