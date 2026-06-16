import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";

export const guides: Guide[] = [
  {
    id: "guide-ebike-classes",
    slug: "ebike-classes-explained",
    title: "E-Bike Classes Explained: Class 1, 2, and 3",
    description:
      "Understand the three e-bike classes, how they differ, and why class matters for trails and roads.",
    ...EDITORIAL_DEFAULTS,
    category: "getting-started",
    readingTimeMinutes: 8,
    sections: [
      {
        id: "overview",
        heading: "What are e-bike classes?",
        paragraphs: [
          "Most U.S. states adopt a three-class system for electric bicycles. The class determines whether a bike uses pedal-assist only or also includes a throttle, and it often affects where you can ride.",
          "Land managers, state laws, and trail policies frequently reference these classes when setting e-bike access rules.",
        ],
      },
      {
        id: "class-1",
        heading: "Class 1: Pedal-assist only",
        paragraphs: [
          "Class 1 e-bikes provide motor assistance only when you pedal and stop assisting at 20 mph. They have no throttle.",
          "Class 1 bikes generally receive the broadest trail access because they behave most like traditional bicycles.",
        ],
      },
      {
        id: "class-2",
        heading: "Class 2: Throttle-assist",
        paragraphs: [
          "Class 2 e-bikes include a throttle that can propel the bike without pedaling, with motor assistance capped at 20 mph.",
          "Some trails restrict Class 2 bikes because throttle operation can increase conflict on shared paths.",
        ],
      },
      {
        id: "class-3",
        heading: "Class 3: Speed pedelec",
        paragraphs: [
          "Class 3 e-bikes are pedal-assist only but may assist up to 28 mph. They may require helmets or have age restrictions in some states.",
          "Class 3 access on trails is often more limited than Class 1.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I know what class my e-bike is?",
        answer:
          "Check the manufacturer label, user manual, or purchase documentation. Many states require class labeling on new e-bikes.",
      },
      {
        question: "Can I ride any class on any trail?",
        answer:
          "No. Trail access depends on land manager policy and state law. Always verify the specific trail's e-bike policy before riding.",
      },
    ],
    relatedGuides: ["mid-atlantic-trail-etiquette"],
  },
  {
    id: "guide-trail-etiquette",
    slug: "mid-atlantic-trail-etiquette",
    title: "E-Bike Trail Etiquette in the Mid-Atlantic",
    description:
      "Best practices for sharing trails in Virginia, Maryland, and DC, speed, passing, and battery safety.",
    ...EDITORIAL_DEFAULTS,
    category: "riding-skills",
    jurisdictions: ["virginia", "maryland", "washington-dc"],
    readingTimeMinutes: 6,
    sections: [
      {
        id: "speed",
        heading: "Manage your speed",
        paragraphs: [
          "Even when e-bikes are permitted, crowded trails require slower speeds. Reduce assist levels near pedestrians, dogs, and children.",
        ],
      },
      {
        id: "passing",
        heading: "Pass with care",
        paragraphs: [
          "Signal before passing, give ample space, and never pass on blind corners. Dismount when trails are too congested for safe passing.",
        ],
      },
    ],
    relatedGuides: ["ebike-classes-explained"],
  },
  {
    id: "guide-buying-first",
    slug: "buying-your-first-ebike",
    title: "Buying Your First E-Bike",
    description:
      "A practical guide to choosing your first e-bike, motor types, battery range, and test ride checklist.",
    ...EDITORIAL_DEFAULTS,
    category: "buying-guide",
    readingTimeMinutes: 10,
    sections: [
      {
        id: "motor-types",
        heading: "Hub vs. mid-drive motors",
        paragraphs: [
          "Hub motors are common on entry-level e-bikes and commuter models. Mid-drive motors offer better hill climbing and weight distribution on performance and mountain e-bikes.",
        ],
      },
      {
        id: "range",
        heading: "Understanding battery range",
        paragraphs: [
          "Rated range varies with terrain, rider weight, assist level, and temperature. Plan for 60–70% of advertised range on hilly Mid-Atlantic routes.",
        ],
      },
    ],
  },
  {
    id: "guide-battery-care",
    slug: "ebike-battery-care",
    title: "E-Bike Battery Care and Storage",
    description:
      "Extend battery life with proper charging habits, storage temperatures, and winter riding tips.",
    ...EDITORIAL_DEFAULTS,
    category: "maintenance",
    readingTimeMinutes: 7,
    sections: [
      {
        id: "charging",
        heading: "Charging best practices",
        paragraphs: [
          "Avoid leaving batteries fully charged at high temperatures for extended periods. Charge after rides rather than storing at 100% for weeks.",
        ],
      },
    ],
  },
  {
    id: "guide-va-local",
    slug: "riding-ebikes-in-virginia",
    title: "Riding E-Bikes in Virginia: Local Tips",
    description:
      "Virginia-specific riding tips covering rail-trails, state parks, and common access questions.",
    ...EDITORIAL_DEFAULTS,
    category: "local-riding",
    jurisdictions: ["virginia"],
    readingTimeMinutes: 9,
    sections: [
      {
        id: "state-parks",
        heading: "Virginia State Parks",
        paragraphs: [
          "Virginia State Parks may allow e-bikes on select multi-use trails when they meet state statutory definitions. Policies vary by park, verify before visiting.",
        ],
      },
    ],
    relatedGuides: ["ebike-classes-explained", "mid-atlantic-trail-etiquette"],
  },
  {
    id: "guide-md-local",
    slug: "riding-ebikes-in-maryland",
    title: "Riding E-Bikes in Maryland: Local Tips",
    description:
      "Maryland-specific guidance for rail-trails, county parks, and urban bike networks.",
    ...EDITORIAL_DEFAULTS,
    category: "local-riding",
    jurisdictions: ["maryland"],
    readingTimeMinutes: 9,
    sections: [
      {
        id: "rail-trails",
        heading: "Maryland rail-trails",
        paragraphs: [
          "Many Maryland rail-trails allow e-bikes meeting state definitions. The B&A, Capital Crescent, and GAP are popular starting points.",
        ],
      },
    ],
  },
  {
    id: "guide-regulations-overview",
    slug: "ebike-regulations-overview",
    title: "E-Bike Regulations Overview",
    description:
      "How federal, state, and local rules interact, and where to find authoritative sources.",
    ...EDITORIAL_DEFAULTS,
    category: "regulations",
    readingTimeMinutes: 8,
    sections: [
      {
        id: "layers",
        heading: "Three layers of rules",
        paragraphs: [
          "Federal land agencies, state statutes, and local ordinances can all affect e-bike access. The most restrictive applicable rule typically governs.",
        ],
      },
    ],
    relatedGuides: ["ebike-classes-explained"],
  },
];
