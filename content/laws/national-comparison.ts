import type { NationalLawHub } from "@/types/law";
import { EDITORIAL_TEAM, withReviewDate } from "@/config/authors";
import { virginiaLaw, marylandLaw, washingtonDcLaw } from "./jurisdictions";

export const nationalLawHub: NationalLawHub = {
  title: "E-Bike Laws by State",
  description:
    "Compare e-bike laws across Virginia, Maryland, and Washington DC. Class definitions, helmet rules, trail access, and registration requirements in one authoritative reference.",
  lastUpdated: "2026-06-01",
  methodology:
    "eBikeQuest law pages are compiled from state statutes, municipal codes, and land manager publications. Each jurisdiction page lists primary sources with access dates. Our editorial team reviews law pages quarterly and after known legislative changes. See our Editorial Standards for full verification methodology.",
  author: EDITORIAL_TEAM,
  reviewedBy: withReviewDate("2026-06-01"),
  comparisonMatrix: [
    virginiaLaw.comparisonFields,
    marylandLaw.comparisonFields,
    washingtonDcLaw.comparisonFields,
  ],
  faq: [
    {
      question: "Are e-bike laws the same in every state?",
      answer:
        "No. While most states use a three-class system, helmet ages, speed limits, trail access, and registration rules vary significantly.",
    },
    {
      question: "What is a Class 1 e-bike?",
      answer:
        "A Class 1 e-bike provides pedal-assist only and stops motor assistance at 20 mph. It has no throttle.",
    },
    {
      question: "What is a Class 2 e-bike?",
      answer:
        "A Class 2 e-bike includes a throttle and stops motor assistance at 20 mph.",
    },
    {
      question: "What is a Class 3 e-bike?",
      answer:
        "A Class 3 e-bike is pedal-assist only with motor assistance up to 28 mph. Many states impose age and helmet requirements.",
    },
    {
      question: "Can I ride my e-bike on federal land?",
      answer:
        "Federal agencies set their own e-bike policies. NPS, USFS, and BLM lands may restrict e-bikes regardless of state law.",
    },
    {
      question: "Do I need to register my e-bike?",
      answer:
        "Most states including Virginia, Maryland, and DC do not require registration for e-bikes meeting statutory definitions.",
    },
    {
      question: "How often does eBikeQuest update law information?",
      answer:
        "Law pages are reviewed quarterly and updated within 5 business days of verified legislative changes.",
    },
    {
      question: "Is this legal advice?",
      answer:
        "No. eBikeQuest provides informational summaries. Consult a qualified attorney for legal advice specific to your situation.",
    },
    {
      question: "Which states does eBikeQuest cover?",
      answer:
        "V1 covers Virginia, Maryland, and Washington DC. Additional states will be added as verified content is published.",
    },
    {
      question: "How do I report an error in a law page?",
      answer:
        "Email corrections@ebikequest.com with the page URL and source supporting the correction. See our Editorial Standards for our correction policy.",
    },
    {
      question: "Do local cities override state e-bike law?",
      answer:
        "Local jurisdictions can regulate specific paths and sidewalks but generally cannot reclassify compliant e-bikes as motor vehicles on public roads.",
    },
  ],
};
