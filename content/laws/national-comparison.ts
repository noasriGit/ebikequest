import type { NationalLawHub } from "@/types/law";
import { EDITORIAL_TEAM, withReviewDate } from "@/config/authors";
import { virginiaLaw, marylandLaw, washingtonDcLaw } from "./jurisdictions";

export const nationalLawHub: NationalLawHub = {
  title: "E-Bike Laws by State",
  description:
    "Compare VA, MD, and DC e-bike laws: class rules, helmets, age limits, trail access, and registration from official state codes.",
  lastUpdated: "2026-06-18",
  methodology:
    "eBikeQuest law content for Virginia, Maryland, and Washington DC is compiled directly from primary legal sources: the Virginia Code (law.lis.virginia.gov), Maryland Transportation Article (mgaleg.maryland.gov), and District of Columbia Code and Municipal Regulations (code.dccouncil.gov, dcrules.elaws.us). Each jurisdiction page cites the specific statutory sections governing definitions, classification, operation, equipment, age limits, helmet requirements, and path access. Land-manager policies from Virginia DCR State Parks, Virginia DWR, Maryland DNR, DDOT, and the National Park Service supplement statutory defaults where trail access is delegated to agencies. Statutory text was verified against official code publications current through the 2025–2026 legislative sessions, including Maryland HB 375 (sidewalk riding, effective October 1, 2025) and DDOT's 2022–2023 DCMR amendments opening select multi-use trails to motorized bicycles. eBikeQuest distinguishes between statewide statutory defaults and local or agency-specific restrictions, because path managers in all three jurisdictions retain authority to prohibit or regulate e-bike classes on trails under their control. Content is reviewed quarterly and updated within five business days of verified legislative changes. This material is informational and does not constitute legal advice.",
  author: EDITORIAL_TEAM,
  reviewedBy: withReviewDate("2026-06-18"),
  comparisonMatrix: [
    virginiaLaw.comparisonFields,
    marylandLaw.comparisonFields,
    washingtonDcLaw.comparisonFields,
  ],
  faq: [
    {
      question: "Do Virginia, Maryland, and DC all use the same three-class e-bike system?",
      answer:
        "Virginia and Maryland use the standard Class 1/2/3 framework with 750-watt motors. DC uses a motorized bicycle definition capped at 20 mph on level ground with no class tiers in statute.",
    },
    {
      question: "Which jurisdiction has the strictest helmet law?",
      answer:
        "Virginia requires helmets for all Class 3 operators and passengers regardless of age. Maryland and DC require helmets only for riders under 16.",
    },
    {
      question: "Which jurisdiction has the highest minimum operator age for e-bikes?",
      answer:
        "DC requires all motorized e-bike operators to be at least 16. Maryland requires 16 for Class 3 only. Virginia requires 14 for Class 3 (or younger with adult supervision).",
    },
    {
      question: "Can I ride an e-bike on sidewalks in all three jurisdictions?",
      answer:
        "Virginia and Maryland generally allow sidewalk riding unless locally prohibited. DC prohibits motorized bicycles on all sidewalks regardless of class.",
    },
    {
      question: "Are Class 3 e-bikes treated the same on trails in VA, MD, and DC?",
      answer:
        "No. Virginia allows Class 3 on shared-use paths unless banned. Maryland prohibits Class 3 on most bicycle paths by default. DC does not recognize Class 3 as a motorized bicycle at all.",
    },
    {
      question: "Do any of these jurisdictions require e-bike registration?",
      answer:
        "No. Properly classified e-bikes in Virginia, Maryland, and DC are exempt from motor vehicle registration. DC Class 3-equivalent devices reclassified as motor-driven cycles do require registration.",
    },
    {
      question: "I commute from Arlington to DC—which laws apply?",
      answer:
        "You cross jurisdictions. Virginia rules apply on the VA side; DC rules apply once you enter the District, including the 16+ age minimum, sidewalk ban for motorized bicycles, and 20 mph device cap.",
    },
    {
      question: "How does eBikeQuest verify law information?",
      answer:
        "We cite official code URLs, note effective dates of recent legislation, cross-reference land-manager policies, and review content quarterly or after known statutory changes.",
    },
    {
      question: "Do federal trail rules override state e-bike laws?",
      answer:
        "On federal lands (NPS, USFS), agency policies apply independently. NPS allows qualifying e-bikes where bicycles are allowed, but individual parks may restrict access further.",
    },
    {
      question: "Is this content legal advice?",
      answer:
        "No. eBikeQuest provides informational summaries based on public statutes and agency publications. Consult a qualified attorney for advice specific to your situation and device.",
    },
    {
      question: "What changed in Maryland e-bike law in 2025?",
      answer:
        "HB 375 (effective October 1, 2025) explicitly allows bicycle and e-bike sidewalk riding unless prohibited by local ordinance, with a pedestrian yield requirement.",
    },
    {
      question: "What is the biggest trap for Class 3 e-bike owners in the DC metro?",
      answer:
        "A Class 3 e-bike legal in Virginia or Maryland may be classified as a motor-driven cycle in DC, requiring a driver's license, registration, and insurance—and barring routine bike-lane and trail access.",
    },
  ],
};
