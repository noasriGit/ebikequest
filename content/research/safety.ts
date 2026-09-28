import type { EvidenceSource } from "@/types/commerce";
import { CLASS_FRAMEWORK_SOURCES } from "@/content/research/class-sources";

export interface SafetySection {
  id: string;
  heading: string;
  paragraphs: string[];
  listItems?: string[];
  sourceIds?: string[];
}

export const safetyPage: {
  title: string;
  description: string;
  lastVerifiedAt: string;
  sources: EvidenceSource[];
  sections: SafetySection[];
  furtherReading: Array<{ href: string; label: string }>;
} = {
  title: "E-Bike Safety and Classification",
  description:
    "How e-bike class, assisted speed, and local rules change where a bike can be ridden before you choose a model.",
  lastVerifiedAt: "2026-09-28",
  sources: [
    ...CLASS_FRAMEWORK_SOURCES,
    {
      id: "nps-ebikes",
      title: "Electric bicycles in national parks",
      url: "https://www.nps.gov/subjects/biking/e-bikes.htm",
      publisher: "National Park Service",
      role: "government",
      accessedAt: "2026-09-28",
    } satisfies EvidenceSource,
  ],
  sections: [
    {
      id: "class-before-brand",
      heading: "Class comes before the brand",
      paragraphs: [
        "An e-bike purchase fails when the bike is legal on paper and unusable on the routes you actually ride. Assisted speed, throttle, and motor power decide which statute applies. The statute decides the path, the helmet rule, and sometimes whether the bike is an e-bike at all.",
        "eBikeQuest treats classification as a research step, not a marketing label. A model page states a class only when a cited source supports it — a manufacturer specification, a required class label, or a statute that defines the cutoff. If those sources disagree or do not settle the question, the page says the class is not determined.",
      ],
    },
    {
      id: "three-class",
      heading: "The three-class framework",
      paragraphs: [
        "Virginia and Maryland both use a three-class electric bicycle definition. The shared outline below is a reading aid: Class 1 and Class 2 stop motor assistance at 20 mph, and Class 3 pedal-assist continues to 28 mph. The statute and the land manager still control a specific path.",
      ],
      sourceIds: ["va-46-2-100", "md-11-117-1"],
    },
    {
      id: "where-it-breaks",
      heading: "Where that framework does not travel",
      paragraphs: [
        "Washington DC does not sort e-bikes into Class 1, 2, and 3. District law uses a motorized-bicycle definition whose motor cannot propel the device faster than 20 mph on level ground. A bike sold as Class 3 elsewhere can fall outside that definition in the District.",
        "Federal land is a second break. National Park Service regulations let a superintendent allow e-bikes where traditional bicycles are allowed, and also let that superintendent restrict them. A statewide permission does not answer a park compendium or a trailhead sign. E-bikes are not allowed in designated wilderness.",
        "A bike that exceeds the wattage or assisted-speed limits in a state definition may not be an electric bicycle under that law. It can fall into a moped or motor-vehicle category, with license, registration, or insurance consequences. eBikeQuest labels that case out of class only when a source supports it, and leaves the class undetermined when the sources do not.",
      ],
      sourceIds: ["dc-50-2201-02", "nps-ebikes", "va-46-2-100", "va-46-2-904-1", "md-11-117-1"],
    },
    {
      id: "what-we-publish",
      heading: "What a model page is allowed to claim",
      paragraphs: [
        "A published model profile separates three kinds of statement. Specifications quote a cited source. Class is either determined from those sources or explicitly left open. Hands-on testing is false unless eBikeQuest has ridden or measured the bike. A spec sheet is not a test.",
        "We do not publish scraped prices, star ratings, review counts, or copied customer comments. Retailer links, including Amazon when a direct product URL exists, are labeled and use a normal outbound link. They are not a rating and they are not a review. A regulator stop-use notice can suppress those links.",
      ],
      listItems: [
        "An official or regulatory source for each factual spec we display",
        "Class left undetermined when the sources do not settle it",
        "Safety notices tied to a regulator, manufacturer, or certification source",
        "Hands-on tested only after a real ride or measurement",
      ],
    },
    {
      id: "read-next",
      heading: "Read the rule, then the route",
      paragraphs: [
        "The class explainers and jurisdiction pages already on eBikeQuest are the detailed record. Use them before treating any shopping filter as an access promise.",
      ],
    },
  ],
  furtherReading: [
    { href: "/guides/ebike-classes-explained", label: "E-bike classes explained" },
    { href: "/guides/are-class-3-ebikes-allowed-on-trails", label: "Are Class 3 e-bikes allowed on trails?" },
    { href: "/guides/ebike-regulations-overview", label: "E-bike regulations overview" },
    { href: "/guides/buying-your-first-ebike", label: "Buying your first e-bike" },
    { href: "/laws", label: "E-bike laws" },
    { href: "/trails", label: "Trail directory" },
    { href: "/editorial-standards", label: "Editorial standards" },
  ],
};
