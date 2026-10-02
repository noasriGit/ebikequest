import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const wired: Brand = {
  id: "brand-wired",
  slug: "wired",
  name: "Wired",
  seo: { title: "Wired e-bike buyer guide" },
  description:
    "Wired's Freedom page says the bike ships as Class 2 at 20 mph and can be set to an unrestricted mode above 35 mph. It also lists 1500W continuous and 3200W peak. eBikeQuest does not confirm the Class 2 label.",
  website: "https://wiredebikes.com/",
  supportContact: "Support@Wiredebikes.com · (888) 996-0632 · 1150 Allanson Rd., Mundelein, IL 60060",
  headquarters: "1150 Allanson Rd., Mundelein, IL 60060, as printed on the Freedom page.",
  suitedFor:
    "Riders who want the Freedom's shipping mode, its unlockable speed, and its continuous wattage read against Virginia and Maryland class definitions before they treat a display setting as a class.",
  categories: ["other"],
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "The Freedom page says the bike ships as Class 2 at 20 mph with throttle and pedal assist, can be configured to Class 1 or Class 3, and has an unrestricted mode above 35 mph that the page marks for off-road use. It also says power performance bikes are prohibited on public roads in many states. Virginia class one and class two cease at 20 mph, and class three pedal assistance ceases at 28 mph. Maryland uses the same speed cutoffs. An unrestricted speed above 35 mph is outside that system. The motor line is 1500W continuous and 3200W peak. Virginia's statute uses motor input of no more than 750 watts. Maryland uses a motor rating of 750 watts or less. Continuous watts are not automatically motor input or motor rating, and the page does not publish a separate figure at or below 750 watts. eBikeQuest does not adopt the Class 2 label. The Freedom model page records that conclusion.",
  certificationNotes:
    "The Freedom product title says the bike is UL 2849 certified. The Wired homepage says Freedom batteries are UL 2271 compliant and that the bike is UL 2849 compliant. Neither page, as read on September 28, 2026, gave a certificate number or a laboratory name. Those standard numbers are repeated only as the pages state them.",
  limitations: [
    "The homepage names other families, including Predator, Warrior, Scout, Cruiser, Raven, and Viper, and it distinguishes 60V Freedom and Cruiser packs from 72V packs on other models. Those other product pages were not the specification record for this guide, so they do not have profiles.",
    "A recall-title search for the single word Wired returned older notices that are not this brand. Searches for Wired Freedom and Wired e-bike returned no notices. The word search is not treated as a Wired recall.",
    "The Freedom page did not state a warranty length. This guide does not invent one.",
  ],
  retailerAvailability:
    "Wired sells from wiredebikes.com. This page links the Freedom product page. No Amazon product link is published. The price on that page is not copied here.",
  comparableBrandSlugs: ["dttzh"],
  lineupNotes: "Only the Freedom has a public model page. Other family names stay on this brand guide as names, not specifications.",
  sections: [
    {
      id: "what-wired-is",
      heading: "What Wired is",
      sourceIds: ["wired-home", "wired-freedom"],
      paragraphs: [
        "Wired sells electric bikes from wiredebikes.com. The Freedom page gives a Mundelein, Illinois address, Support@Wiredebikes.com, and (888) 996-0632. The homepage groups several model families and says the Freedom uses a 60V system.",
        "The Freedom page is the specification record used here. It calls the bike a power performance bike and says the owner should check local laws before riding.",
      ],
    },
    {
      id: "freedom-modes",
      heading: "What the Freedom page says about class",
      sourceIds: ["wired-freedom"],
      paragraphs: [
        "The page says the bike ships as Class 2, 20 mph, with throttle and pedal assist. Display settings can select Class 1, pedal assist only, or Class 3 at 28 mph. Unrestricted mode is listed at 35+ mph and marked for off-road only. The same page says power performance bikes are prohibited on public roads in many states.",
        "The motor is a 60V 1500W continuous Hentach geared hub that peaks at 3200W, with about 153 Nm. Batteries are a 60V 20Ah front pack and a 60V 15Ah rear pack, described as about 2100Wh of Samsung 21700 cells. Weight is 115 lb with both batteries and 87 lb without them. Those figures are on the Freedom model page with their source.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["wired-freedom", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "A mode above 35 mph is outside Class 3 in Virginia and Maryland and above the 20 mph motorized-bicycle cap in Washington, DC. Wired says that unrestricted mode is for off-road use and that power performance bikes may be prohibited on public roads. A display that ships at 20 mph and can be changed by the owner is not, by itself, a confirmed class.",
        "Because eBikeQuest does not confirm a Class 1, 2, or 3 designation, the Freedom model page does not list trails as compatible. Trail policies in this directory are for a documented class, not for an unlockable mode.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["wired-freedom", "wired-home"],
      paragraphs: [
        "Decide which mode you will actually use. The page gives the owner the control to leave Class 2. If the bike will be used above 28 mph, it is outside the three-class speed caps cited here, whatever the shipping default says. Ask Wired which wattage figure it considers the motor rating. The published figures are 1500W continuous and 3200W peak.",
        "The Freedom page that was read does not state a warranty term. Support is the Mundelein address and the phone and email on that page. Other Wired families are named on the homepage and are not specified here.",
      ],
    },
  ],
  lineup: [
    {
      id: "freedom",
      name: "Freedom",
      modelSlug: "freedom",
      riderFit: "60V fat-tire bike with selectable class modes",
      distinction: "Ships at 20 mph Class 2. Unrestricted mode is 35+ mph. 1500W continuous is not confirmed as the statutory wattage.",
      sourceId: "wired-freedom",
    },
  ],
  faq: [
    {
      question: "Does the Wired Freedom ship as Class 2?",
      answer:
        "Wired says it ships as Class 2 at 20 mph and can be changed in the display, including an unrestricted mode above 35 mph. eBikeQuest does not adopt the Class 2 label, because the page does not publish a motor input or motor rating at or below 750 watts and it documents a faster mode.",
    },
    {
      question: "Are the other Wired models profiled?",
      answer:
        "No. The homepage names them. This guide's specification profile is the Freedom page that was read in full.",
    },
  ],
  safetyNotices: [
    {
      id: "wired-unrestricted",
      severity: "caution",
      commerceRestriction: "caution",
      headline: "The Freedom page lists an unrestricted mode above 35 mph.",
      summary:
        "Wired says the Freedom ships at 20 mph and that unrestricted mode is 35+ mph for off-road use. The page also says power performance bikes are prohibited on public roads in many states. Virginia and Maryland class three assistance ceases at 28 mph.",
      sourceId: "wired-freedom",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-wired-freedom"],
    finding:
      "CPSC recall search checked September 28, 2026 for Wired Freedom and for Wired e-bike; no matching notice returned at that check. A search for the single word Wired returned older notices that are not this brand. That check is not a clearance.",
  },
  retailerLinks: [
    {
      id: "wired-freedom-link",
      retailer: "manufacturer",
      retailerName: "Wired",
      href: "https://wiredebikes.com/products/wired-freedom",
      isAffiliate: false,
      label: "View the Freedom on Wired's site",
      sourceId: "wired-freedom",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "wired-freedom",
      title: "Wired Freedom product page",
      url: "https://wiredebikes.com/products/wired-freedom",
      publisher: "Wired",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "wired-home",
      title: "Wired homepage",
      url: "https://wiredebikes.com/",
      publisher: "Wired",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "cpsc-wired-freedom",
      title: "CPSC recall search for Wired Freedom",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Wired%20Freedom",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned an empty list on September 28, 2026. A one-word search for Wired was not used as a brand match.",
    },
  ],
};
