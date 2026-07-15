import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const doYouNeedALicenseForAnEbike: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-license-ebike",
  title: "Do You Need a License for an E-Bike?",
  category: "regulations",
  description:
    "Do e-bikes need a driver's license? National overview plus Virginia, Maryland, and DC rules for Class 1, 2, and 3 bikes—when licensing may apply.",
  slug: "do-you-need-a-license-for-an-ebike",
  readingTimeMinutes: 10,
  jurisdictions: ["virginia", "maryland", "washington-dc"],
  sections: [
    {
      id: "short-answer",
      heading: "Short answer",
      paragraphs: [
        "In most U.S. states—including Virginia and Maryland—compliant Class 1, Class 2, and Class 3 electric bicycles do not require a driver's license, vehicle registration, or license plate when they meet statutory definitions for motor wattage, assisted speed, and equipment labeling.",
        "Washington, DC uses a different framework: a motorized bicycle must have operable pedals and a motor incapable of exceeding 20 mph on level ground. Stock Class 3 e-bikes designed to assist to 28 mph may fall outside that definition and could be treated as motor-driven cycles requiring a valid driver's license.",
        "This guide explains the general pattern and Mid-Atlantic specifics. It is not legal advice—verify current statutes and consult officials if your bike's classification is uncertain.",
        "Licensing questions usually arise at purchase time or after a traffic stop—not on the trail. Knowing your classification before the first ride prevents expensive surprises if an officer reclassifies a modified bike.",
      ],
    },
    {
      id: "how-rules-work",
      heading: "How e-bike licensing rules usually work",
      paragraphs: [
        "States that adopted the PeopleForBikes three-class model generally exempt compliant electric power-assisted bicycles from motor-vehicle licensing because the bikes are classified as bicycles for traffic purposes. That exemption applies when the bike has operable pedals, a motor at or below 750 watts, permanent class labeling, and speed caps matching its class.",
        "Devices that exceed those limits—through factory design, aftermarket tuning, or missing labels—may be reclassified as mopeds, motor-driven cycles, or motorcycles. Those categories typically require licenses, registration, insurance, and additional safety equipment.",
        "Federal land agencies and local trail managers regulate where you may ride separately from whether you need a license on the street. A bike that needs no license on a Virginia road may still be prohibited on a specific NPS trail.",
      ],
    },
    {
      id: "why-classes-matter",
      heading: "Why Class 1, Class 2, and Class 3 matter for licensing",
      paragraphs: [
        "Class 1 (pedal-assist to 20 mph) and Class 2 (throttle or pedal-assist to 20 mph) align with most state exemptions and with DC's 20 mph motorized-bicycle cap when properly equipped.",
        "Class 3 (pedal-assist to 28 mph) is fully exempt in Virginia and Maryland licensing law but faces trail restrictions and, in DC, may not qualify as a legal motorized bicycle at all because the motor exceeds the 20 mph statutory ceiling.",
        "Read /guides/ebike-classes-explained for equipment and labeling requirements. The class sticker on your frame is evidence of compliance—but only if the bike still meets that label's specifications.",
      ],
    },
    {
      id: "virginia",
      heading: "Virginia notes",
      paragraphs: [
        "Virginia Code § 46.2-904.1 exempts compliant electric power-assisted bicycles from driver's license, registration, certificate of title, insurance, and license plate requirements. All three classes qualify when they meet statutory definitions.",
        "Class 3 operators must be at least 14 unless supervised by someone 18 or older, and all Class 3 riders and passengers must wear helmets—but those are age and safety rules, not licensing requirements.",
        "Full jurisdiction details: /laws/virginia. Local riding context: /guides/riding-ebikes-in-virginia.",
      ],
    },
    {
      id: "maryland",
      heading: "Maryland notes",
      paragraphs: [
        "Maryland Transportation Article § 21-1205.2 treats compliant Class 1, Class 2, and Class 3 electric bicycles like bicycles for licensing purposes—no driver's license, registration, or title required.",
        "Class 3 operators must be at least 16 on public highways. Helmet rules apply to riders under 16 on bicycles and e-bikes alike under § 21-1207.1.",
        "Full jurisdiction details: /laws/maryland. Local riding context: /guides/riding-ebikes-in-maryland.",
      ],
    },
    {
      id: "washington-dc",
      heading: "Washington DC notes",
      paragraphs: [
        "DC defines motorized bicycles with a 20 mph motor cap—not three classes. Class 1 and Class 2 models that meet the cap generally need no license or registration. DDOT guidance confirms this treatment for qualifying privately owned bikes.",
        "Class 3 e-bikes exceed the 20 mph motorized-bicycle definition. DDOT states they are not legally recognized as e-bikes in the District and may be classified as motor-driven cycles requiring a valid driver's license and compliance with motor-vehicle equipment rules.",
        "Operators of any legal motorized bicycle in DC must be at least 16. Full jurisdiction details: /laws/washington-dc. Local context: /guides/riding-ebikes-in-washington-dc.",
      ],
    },
    {
      id: "trail-caveats",
      heading: "Trail and local rule caveats",
      paragraphs: [
        "Licensing exemptions do not guarantee trail access. National Park Service compendiums, county park directives, and municipal sidewalk ordinances may restrict certain classes regardless of street legality.",
        "Shared micromobility fleet bikes in DC operate under DDOT permits separate from private e-bike rules—fleet speed governors do not change licensing rules for your personal bike.",
        "When riding across Virginia, Maryland, and DC in one day, your bike must comply with the strictest licensing and classification rules in each jurisdiction you enter.",
      ],
    },
    {
      id: "before-riding",
      heading: "What riders should check before riding",
      paragraphs: [
        "Confirm your bike's class label matches its actual motor capability. Check /laws and the specific jurisdiction you will ride in. If you own a Class 3 bike and plan to enter DC, verify DDOT guidance before assuming street legality.",
        "Keep purchase documentation showing factory specifications. Avoid aftermarket speed modifications that void e-bike classification.",
        "For trail rides near Washington, see /guides/where-can-you-ride-an-ebike and /guides/best-ebike-trails-near-washington-dc. For insurance questions, see /guides/do-ebikes-need-insurance-or-registration.",
        "Retailers sometimes mislabel bikes or sell gray-market imports without proper class stickers. If your motor exceeds 750 watts or your bike assists above labeled class speeds, licensing and registration rules for mopeds or motorcycles may apply even if the seller called it an e-bike. When in doubt, compare your specifications to the statutory definitions on the relevant /laws page and contact the state DMV or equivalent agency for classification questions—not eBikeQuest.",
      ],
    },
    {
      id: "misclassification",
      heading: "When licensing rules change: misclassified bikes",
      paragraphs: [
        "Speed tuners, removed limiters, and high-wattage imports are the most common reasons riders unexpectedly need motor-vehicle documentation. Virginia and Maryland both prohibit tampering that changes motor capability without updating the class label.",
        "Mopeds and motor-driven cycles in the Mid-Atlantic typically require operator licensing, registration, and insurance distinct from bicycle exemptions. Riding a device that requires motor-vehicle documentation without proper registration can result in citations and impoundment—confirm classification with your state DMV if specifications are unclear.",
        "If you are shopping for a bike primarily to avoid licensing, prioritize stock Class 1 or Class 2 models from reputable dealers with permanent labeling. Document your purchase date and specifications in case classification questions arise after a stop or crash.",
        "Tour operators and rental fleets may face different rules than private owners in some jurisdictions. This guide addresses consumer-owned bikes used for recreation and commuting.",
      ],
    },
    {
      id: "related",
      heading: "Related law pages and guides",
      paragraphs: [
        "National comparison hub: /laws. Jurisdiction pages: /laws/virginia, /laws/maryland, /laws/washington-dc. Regulatory overview: /guides/ebike-regulations-overview.",
        "eBikeQuest summarizes statutes for rider education—always verify with official sources linked on law pages when preparing for a purchase or commute.",
        "Employer commuter benefit programs sometimes ask whether your bike requires registration. Compliant e-bikes in Virginia and Maryland generally do not—provide your class label documentation if HR requests vehicle classification.",
      ],
    },
  ],
  faq: [
    {
      question: "Do you need a driver's license for a Class 1 e-bike?",
      answer:
        "In Virginia and Maryland, no—compliant Class 1 e-bikes are exempt from licensing. In DC, Class 1 bikes that meet the 20 mph motorized-bicycle definition generally need no license either.",
    },
    {
      question: "Do you need a license for a Class 3 e-bike?",
      answer:
        "Virginia and Maryland do not require a license for compliant Class 3 e-bikes. In Washington, DC, Class 3 bikes may not qualify as motorized bicycles and could require a driver's license if treated as motor-driven cycles.",
    },
    {
      question: "Do e-bikes need license plates?",
      answer:
        "Compliant e-bikes in Virginia and Maryland do not need plates. DC motorized bicycles that meet the statutory definition are similarly exempt. Reclassified motor vehicles would need plates.",
    },
    {
      question: "What happens if my e-bike exceeds legal speed limits?",
      answer:
        "Devices exceeding statutory speed or wattage limits may lose e-bike classification and face moped or motorcycle licensing, registration, and insurance requirements depending on jurisdiction.",
    },
    {
      question: "Where can I read the official Virginia and Maryland statutes?",
      answer:
        "eBikeQuest law pages at /laws/virginia and /laws/maryland cite primary sources with links. Verify access dates and check for legislative updates before relying on summaries.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "do-ebikes-need-insurance-or-registration",
    "where-can-you-ride-an-ebike",
    "riding-ebikes-in-washington-dc",
  ],
};
