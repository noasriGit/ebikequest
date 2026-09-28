import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const jasion: Brand = {
  id: "brand-jasion",
  slug: "jasion",
  name: "Jasion",
  seo: { title: "Jasion e-bike buyer guide" },
  description:
    "Jasion's own catalog lists multiple models from 28 mph to 40 mph, including a RetroVolt Pro card that says the bike is for teens and adults at 38 mph. Those speeds are outside a normal Class 3 cutoff. No model profile is published from the catalog cards.",
  website: "https://www.jasionbike.com/",
  supportContact: "support@jasionbike.com · +1 (888) 825-6366",
  suitedFor:
    "Shoppers who need Jasion's listed speeds and wattage next to the class rules, including anyone considering a model the catalog markets toward teens.",
  categories: ["folding", "other"],
  warrantySummary:
    "Jasion's warranty page says bikes carry a one-year limited warranty from the date the original owner receives the bike, for manufacturing defects in materials or workmanship. The frame is one year, and labor to replace a frame is not covered. Batteries are one year, and a repaired or replaced battery keeps the original purchase date. Free accessories are not covered. Claims start with support@jasionbike.com and need proof of purchase.",
  warrantySourceId: "jasion-warranty",
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "Jasion's electric-bike collection, checked September 28, 2026, lists top speeds of 35+ mph on the RetroVolt Max, 30+ mph on the Hunter Pro, 38 mph on the RetroVolt Pro, 40 mph on the Patrol, 35 mph on the Thunder Pro, 30+ mph on the Thunder and X-Hunter, and 28 mph on the EB5 Roamer ST. Virginia and Maryland class three pedal assistance ceases at 28 mph. A listed speed above 28 mph is outside that class. Washington, DC's motorized bicycle cannot be propelled faster than 20 mph on level ground. Jasion's own collection FAQ says higher-speed or throttle-only models may not fit standard electric-bike classifications. The collection cards also list motor power of 1200W to 4000W. Those figures are not identified as the motor input Virginia uses or the motor rating Maryland uses. eBikeQuest does not call these models Class 2 or Class 3.",
  certificationNotes:
    "The collection page says Thunder Pro is listed with IPX4 water resistance. It does not name UL 2271 or UL 2849 for the models in the cards that were read. No certificate number is stated here.",
  limitations: [
    "Catalog cards are not full specification sheets. Combo and spare-part pages elsewhere on the site have used different battery figures for EB7-family parts. This guide does not publish an EB7 profile from those mixed pages.",
    "Jasion's speed article lists Hunter Pro at 30+ mph, Thunder Pro and Thunder Pro ST at 35 mph, X-Hunter ST at 30+ mph, and RetroVolt Pro at 38 mph, and it says higher-speed models may not fit Class 1, 2, or 3 in every mode. The article also says the Ride app can set a user top speed on some of those models. A setting that can be raised is not a locked class.",
    "The RetroVolt Pro card is titled as a moped e-bike for teens and adults and lists 38 mph and 2000W. A teen marketing line does not make that speed appropriate for a minor.",
    "No Jasion model page is published. The catalog is a grid of cards, and a card is not enough for a standalone specification profile.",
  ],
  retailerAvailability:
    "Jasion sells from jasionbike.com. This page links the manufacturer collection and the warranty page. No Amazon product link is published. Star ratings, review counts, and sale prices on the collection are not copied here.",
  comparableBrandSlugs: ["dttzh"],
  lineupNotes:
    "Rows use the collection cards read on September 28, 2026. They are not model profiles.",
  sections: [
    {
      id: "what-jasion-is",
      heading: "What Jasion is",
      sourceIds: ["jasion-collection", "jasion-warranty"],
      paragraphs: [
        "Jasion sells electric bikes from jasionbike.com. The collection page describes commuter, folding, fat-tire, and cargo styles, a 14-day trial, delivery from a local warehouse, and a one-year limited warranty. Support on that page is support@jasionbike.com and +1 (888) 825-6366.",
        "The warranty page limits coverage to the original purchaser and to manufacturing defects. It does not pay frame-replacement labor. A battery replacement does not restart the one-year period.",
      ],
    },
    {
      id: "listed-speeds",
      heading: "Speeds Jasion lists",
      sourceIds: ["jasion-collection", "jasion-speed"],
      paragraphs: [
        "On the collection cards, RetroVolt Max is 35+ mph and 2000W with a 52V 40Ah battery. Hunter Pro is 30+ mph and 1800W with a 48V 15Ah battery. RetroVolt Pro is 38 mph and 2000W with a 52V 20Ah battery, and the card calls it a moped e-bike for teens and adults. Patrol is 40 mph and 4000W with a 52V 30Ah battery. Thunder Pro is 35 mph and 2000W with a 52V 20Ah battery. EB5 Roamer ST is 28 mph and 1200W with a 48V 11Ah battery. X-Hunter cards list 1400W, and one card lists 30+ mph. JT18 lists 16 mph and 1200W.",
        "Jasion's speed article repeats several of those figures and says the Ride app supports Hunter Pro, Thunder, Thunder Pro, and Thunder Pro ST, including a user top-speed cap on compatible bikes. It tells riders not to copy a button sequence from a different model. It also says higher-speed models may fall outside Class 1, Class 2, and Class 3 depending on the mode.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["jasion-collection", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "A bike Jasion lists above 28 mph does not fit Class 3 in Virginia or Maryland. Class three pedal assistance ceases at 28 mph in both statutes. A 40 mph Patrol listing is further outside that system, and every one of those speeds is above the 20 mph motorized-bicycle cap in Washington, DC. The 28 mph EB5 Roamer ST card still lists 1200W, which the page does not identify as a motor input or a motor rating of 750 watts or less.",
        "A user speed cap in an app, where Jasion documents one, can lower the number on the display. It does not by itself become a class label. Trail pages here are written for a verified class. None of these cards produced a verified class, so none of them is matched to a trail.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["jasion-collection", "jasion-warranty", "jasion-speed"],
      paragraphs: [
        "Read the card's speed before the style name. Several cards are above 28 mph, and one of them is marketed to teens at 38 mph. That is a reason to stop, not a reason to treat the bike as a Class 2 commuter. Confirm brakes, payload, and rider height on the specific product page, because this guide used the collection cards and did not turn each card into a profile.",
        "Keep the proof of purchase for the one-year warranty. File through support@jasionbike.com. The collection says bikes arrive partially assembled and that the manual for the exact model is the setup reference. Do not copy a speed-menu sequence from a different Jasion display.",
      ],
    },
  ],
  lineup: [
    {
      id: "retrovolt-pro",
      name: "RetroVolt Pro",
      riderFit: "Collection card marketed for teens and adults",
      distinction: "Listed at 38 mph and 2000W. That speed is outside Class 3. No model page.",
      sourceId: "jasion-collection",
    },
    {
      id: "patrol",
      name: "Patrol",
      riderFit: "Collection card",
      distinction: "Listed at 40 mph and 4000W. Outside the three-class speed caps.",
      sourceId: "jasion-collection",
    },
    {
      id: "hunter-pro",
      name: "Hunter Pro",
      riderFit: "Collection card",
      distinction: "Listed at 30+ mph and 1800W. The speed article says the Ride app can cap speed on this model.",
      sourceId: "jasion-collection",
    },
    {
      id: "eb5-roamer-st",
      name: "EB5 Roamer ST",
      riderFit: "Collection card at the class-three speed line",
      distinction: "Listed at 28 mph and 1200W. The wattage is not identified as the statutory motor input or rating.",
      sourceId: "jasion-collection",
    },
  ],
  faq: [
    {
      question: "Are Jasion bikes Class 2?",
      answer:
        "Jasion's collection lists many models above 28 mph, and its FAQ says higher-speed models may not fit standard classifications. eBikeQuest does not assign those cards a class.",
    },
    {
      question: "Is the RetroVolt Pro a teen e-bike?",
      answer:
        "The collection card calls it a moped e-bike for teens and adults and lists 38 mph. Virginia and Maryland class three assistance ceases at 28 mph. This guide does not recommend that bike for a minor.",
    },
  ],
  safetyNotices: [
    {
      id: "jasion-teen-card",
      severity: "caution",
      commerceRestriction: "caution",
      headline: "A Jasion card markets the 38 mph RetroVolt Pro to teens.",
      summary:
        "The RetroVolt Pro collection card says it is a moped e-bike for teens and adults and lists 38 mph and 2000W. That listed speed is outside the 28 mph class-three cutoff in Virginia and Maryland. A marketing line aimed at teens does not change the speed.",
      sourceId: "jasion-collection",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-jasion"],
    finding: "CPSC recall search checked September 28, 2026; no matching notice returned at that check.",
  },
  retailerLinks: [
    {
      id: "jasion-collection-link",
      retailer: "manufacturer",
      retailerName: "Jasion",
      href: "https://www.jasionbike.com/collections/electric-bike",
      isAffiliate: false,
      label: "View Jasion's collection",
      sourceId: "jasion-collection",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "jasion-collection",
      title: "Jasion electric bike collection",
      url: "https://www.jasionbike.com/collections/electric-bike",
      publisher: "Jasion",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "jasion-speed",
      title: "Jasion article on speed settings",
      url: "https://www.jasionbike.com/blogs/jasion/how-to-make-ebike-faster",
      publisher: "Jasion",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "jasion-warranty",
      title: "Jasion one-year limited warranty",
      url: "https://www.jasionbike.com/pages/warranty",
      publisher: "Jasion",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "cpsc-jasion",
      title: "CPSC recall search for Jasion",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Jasion",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned an empty list on September 28, 2026.",
    },
  ],
};
