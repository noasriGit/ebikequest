import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const doEbikesNeedInsuranceOrRegistration: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-insurance-registration",
  title: "Do E-Bikes Need Insurance or Registration?",
  category: "regulations",
  description:
    "E-bike insurance and registration rules: what Virginia, Maryland, and DC require for Class 1–3 bikes—and when a bike may need motor-vehicle coverage.",
  slug: "do-ebikes-need-insurance-or-registration",
  readingTimeMinutes: 10,
  jurisdictions: ["virginia", "maryland", "washington-dc"],
  sections: [
    {
      id: "short-answer",
      heading: "Short answer",
      paragraphs: [
        "Compliant Class 1, Class 2, and Class 3 electric bicycles in Virginia and Maryland do not require vehicle registration, title, or state-mandated liability insurance under current e-bike statutes. Washington, DC similarly exempts qualifying motorized bicycles that meet the 20 mph motor cap from registration and insurance requirements.",
        "That exemption applies only while your bike remains within statutory e-bike or motorized-bicycle definitions. Devices reclassified as mopeds, motor-driven cycles, or motorcycles may require registration, insurance, and licensing.",
        "Optional insurance—homeowners, renters, or specialty bicycle policies—may still cover theft or liability. This guide explains legal requirements, not insurance product recommendations.",
        "Registration and insurance are separate questions from licensing. A bike that needs no plate may still benefit from theft coverage if you park at trailheads or Metro stations daily.",
      ],
    },
    {
      id: "how-rules-work",
      heading: "How registration and insurance rules usually work",
      paragraphs: [
        "States adopting the three-class model treat compliant e-bikes as bicycles for motor-vehicle administrative purposes. You generally do not visit the DMV for a plate or proof of insurance for a stock Class 1, Class 2, or Class 3 e-bike.",
        "Registration requirements target motor vehicles that use public roads at higher speeds and create greater third-party risk. E-bike exemptions reflect lower speed caps, equipment standards, and class labeling requirements.",
        "Aftermarket modifications that raise motor speed beyond labeled class limits can void the exemption. Tampering without updating class labels violates Virginia and Maryland statute.",
      ],
    },
    {
      id: "why-classes-matter",
      heading: "Why class compliance matters for insurance and registration",
      paragraphs: [
        "A permanently affixed class label showing top assisted speed and motor wattage supports your claim that the bike is an exempt e-bike—not a moped.",
        "Class 3 bikes remain exempt from registration in Virginia and Maryland despite higher road speeds. DC does not recognize Class 3 as legal e-bikes, which may push owners toward motor-vehicle classification with different insurance obligations.",
        "See /guides/ebike-classes-explained and /guides/do-you-need-a-license-for-an-ebike for related licensing context.",
      ],
    },
    {
      id: "virginia",
      heading: "Virginia notes",
      paragraphs: [
        "Virginia Code § 46.2-904.1(B) exempts compliant electric power-assisted bicycles from certificate of title, registration, driver's license, and license plate requirements. The statute does not mandate liability insurance for e-bikes.",
        "Localities may regulate operation—helmets for Class 3, sidewalk rules—but not impose DMV-style registration on compliant bikes.",
        "Full details: /laws/virginia. If your bike exceeds statutory limits, Virginia may treat it as a moped or motor vehicle with different requirements.",
      ],
    },
    {
      id: "maryland",
      heading: "Maryland notes",
      paragraphs: [
        "Maryland Transportation Article § 21-1205.2 treats compliant electric bicycles like bicycles for registration and licensing purposes—no title, registration, or state-required insurance.",
        "Helmet rules for riders under 16 and Class 3 age minimums are separate safety requirements, not insurance mandates.",
        "Full details: /laws/maryland. Devices outside § 11-117.1 definitions may face moped or motor scooter rules.",
      ],
    },
    {
      id: "washington-dc",
      heading: "Washington DC notes",
      paragraphs: [
        "Qualifying motorized bicycles under D.C. Code § 50-2201.02 are treated as bicycles for registration purposes—no DMV registration or insurance required for compliant Class 1 and Class 2 models meeting the 20 mph cap.",
        "Class 3 and other devices exceeding the motorized-bicycle definition may be classified as motor-driven cycles. DDOT guidance indicates those categories can require a valid driver's license and compliance with motor-vehicle equipment and insurance rules applicable to that classification.",
        "Full details: /laws/washington-dc. Local guide: /guides/riding-ebikes-in-washington-dc.",
      ],
    },
    {
      id: "optional-coverage",
      heading: "Optional coverage and liability practicalities",
      paragraphs: [
        "Even without a legal insurance mandate, e-bike owners may want coverage for theft, damage, and third-party liability. Homeowners and renters policies sometimes extend limited bicycle coverage—read your policy or ask your insurer.",
        "E-bike battery fires and high-value components create property risk separate from traffic liability. Specialty bicycle insurers exist but eBikeQuest does not endorse specific products.",
        "Crashes on trails or roads may involve civil liability regardless of registration status. Courteous riding and proper equipment reduce risk.",
      ],
    },
    {
      id: "before-riding",
      heading: "What riders should verify",
      paragraphs: [
        "Keep your class label and purchase records. Avoid modifications that change motor capability without updating classification.",
        "If you commute across jurisdictions, confirm your bike qualifies as an exempt e-bike in each—especially before entering DC on a Class 3 model.",
        "For licensing questions, see /guides/do-you-need-a-license-for-an-ebike. For where to ride, see /guides/where-can-you-ride-an-ebike.",
        "Registration and insurance questions often arise after a crash or theft, not before the first ride. Understand your homeowners or renters policy limits before assuming you are covered for a $3,000 e-bike or a liability claim involving a pedestrian.",
      ],
    },
    {
      id: "reclassified-devices",
      heading: "When registration or insurance may become required",
      paragraphs: [
        "Devices that exceed e-bike statutory limits may be classified as mopeds, motor-driven cycles, or motorcycles depending on speed, wattage, and equipment. Those categories carry DMV registration and insurance obligations in Virginia, Maryland, and DC.",
        "Aftermarket modifications are a common trigger. If you cannot demonstrate factory specifications matching an exempt class label, enforcement officers may treat your bike as a motor vehicle regardless of what the seller advertised.",
        "Commercial delivery use, fleet operations, and employer-provided bikes may trigger additional insurance requirements through business policies separate from consumer e-bike exemptions. This guide addresses privately owned recreational and commuter bikes—not commercial fleet compliance.",
        "Gray-market imports without class labels are a frequent source of registration surprises at purchase time.",
        "Keep your sales receipt and manufacturer spec sheet with your bike in case an insurer or DMV asks for documentation.",
        "Liability coverage is worth discussing with a professional if you ride daily in crowded urban trail corridors.",
      ],
    },
    {
      id: "optional-products",
      heading: "Optional insurance products riders sometimes consider",
      paragraphs: [
        "Specialty bicycle insurers offer theft and liability coverage tailored to e-bikes. Homeowners and renters policies sometimes extend limited coverage with schedules for high-value bikes.",
        "eBikeQuest does not recommend specific insurers or products. Compare deductibles, theft-away-from-home limits, and liability coverage if you ride crowded urban trails or commute daily.",
        "Registration exemptions do not eliminate civil liability if you injure someone while riding negligently. Insurance is a financial planning question separate from whether the DMV requires a plate.",
        "If you finance an expensive e-bike, your lender may require insurance separate from state law. That contractual requirement is not the same as a statutory motor-vehicle insurance mandate.",
        "Some credit cards offer purchase protection that may cover theft shortly after buying an e-bike. That benefit is separate from ongoing liability insurance and expires after the card's stated window.",
        "Ask your insurer whether e-bike batteries are covered under personal property schedules. High-capacity packs may exceed default bicycle accessory limits.",
      ],
    },
    {
      id: "related",
      heading: "Related law pages and guides",
      paragraphs: [
        "/laws, /laws/virginia, /laws/maryland, /laws/washington-dc. Overview: /guides/ebike-regulations-overview.",
        "Consult an insurance professional for coverage decisions—eBikeQuest provides regulatory summaries, not insurance advice.",
        "Some homeowners policies exclude vehicles with motors above a certain wattage regardless of e-bike statutory classification. Read exclusions carefully if you are counting on home insurance for theft coverage.",
      ],
    },
  ],
  faq: [
    {
      question: "Do e-bikes need to be registered at the DMV?",
      answer:
        "Compliant e-bikes in Virginia and Maryland do not require DMV registration. DC exempts qualifying motorized bicycles from registration. Reclassified motor vehicles would need registration.",
    },
    {
      question: "Is e-bike insurance required by law in Virginia?",
      answer:
        "No. Virginia does not mandate liability insurance for compliant electric power-assisted bicycles under § 46.2-904.1.",
    },
    {
      question: "Does Maryland require e-bike insurance?",
      answer:
        "No. Maryland does not require insurance for electric bicycles that meet § 11-117.1 definitions.",
    },
    {
      question: "Do Class 3 e-bikes need registration in Maryland?",
      answer:
        "No. Class 3 e-bikes that meet Maryland statutory definitions are exempt from registration like other compliant e-bike classes, though trail access is more restricted.",
    },
    {
      question: "Does homeowners insurance cover e-bikes?",
      answer:
        "Policies vary. Some homeowners or renters policies cover bicycle theft or liability partially. Contact your insurer to confirm e-bike coverage limits and exclusions.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "do-you-need-a-license-for-an-ebike",
    "where-can-you-ride-an-ebike",
    "riding-ebikes-in-washington-dc",
  ],
};
