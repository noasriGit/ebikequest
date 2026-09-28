import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const dttzh: Brand = {
  id: "brand-dttzh",
  slug: "dttzh",
  name: "DTTZH",
  seo: { title: "DTTZH e-bike buyer guide" },
  description:
    "DTTZH sells the F6 and A12 on dttzh.com. The F6 page lists speeds up to 50 mph in the same table that a disclaimer calls Class 2 at 20 mph, so this guide does not confirm a class.",
  website: "https://www.dttzh.com/",
  supportContact: "service@dttzh.com",
  headquarters: "Ships from Walnut, CA and Robbinsville, NJ, according to the F6 and A12 pages. No company street address was on those pages.",
  suitedFor:
    "Shoppers comparing the F6 and A12 who need the speed table, the Class 2 disclaimer, and the one-year major-parts warranty before they treat either bike as street-legal.",
  categories: ["folding", "other"],
  warrantySummary:
    "The F6 and A12 pages both say the frame, motor, battery, and controller are covered for one year, other parts for three months, and tires are not covered. The warranty starts when the product leaves the warehouse. Battery coverage does not include normal capacity loss. The owner is not covered for crashes, disassembly, the wrong charger, or harsh environments. Labor is not described as covered. The pages say approved issues are repaired or replaced.",
  warrantySourceId: "dttzh-f6",
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "The F6 specification line lists top speed as 20–30 mph, 38 mph, and 50 mph across the F6, F6S, and F6 Pro. Virginia class one and class two cease motor assistance at 20 mph, and class three pedal assistance ceases at 28 mph. Maryland uses the same speed cutoffs. A listed 38 mph or 50 mph top speed is outside that three-class system. Washington, DC's motorized-bicycle definition stops at 20 mph. The same F6 page says the vehicle is manufactured as a Class 2 electric bicycle with a factory-limited top speed of 20 mph. Those two statements are on one page. eBikeQuest does not adopt the Class 2 label. The page also does not publish the motor input Virginia uses or the motor rating Maryland uses. Peak power figures are not those statutory figures.",
  certificationNotes:
    "The F6 and A12 pages checked on September 28, 2026 did not name UL 2271, UL 2849, or a certificate number. No certification is stated here.",
  limitations: [
    "The F6 page's own columns do not agree with its disclaimer. The table lists 20–30 mph, 38 mph, and 50 mph, and peak power of 750W–2000W, 3000W, and 5000W. A warm tip on the same page refers to an F6 at 2,000W and an F6 Pro at 5,000W. The page title says 30/50 mph. The disclaimer says Class 2 at 20 mph. This guide does not pick one of those figures as the bike's class.",
    "The A12 spec block lists peak power of 1000W/2000W and batteries of 48V 15Ah or 52V 25Ah. It does not list an assisted speed. A warm tip says the 1000W A12 may ship as the latest model or the previous generation. The Class 2 disclaimer is the same 20 mph sentence used on the F6 page.",
    "No standalone F6 or A12 model page is published. One URL covers more than one performance level, and the levels conflict with the class disclaimer.",
  ],
  retailerAvailability:
    "DTTZH sells from dttzh.com. This page links the manufacturer product pages. No Amazon product link is published.",
  comparableBrandSlugs: ["jasion"],
  lineupNotes:
    "The rows are the columns DTTZH prints on the F6 page, plus the A12 page. They are not separate eBikeQuest model profiles.",
  editorialNotes:
    "Prices on the product pages were sale banners on the day checked. They are not copied here.",
  sections: [
    {
      id: "what-dttzh-is",
      heading: "What DTTZH is",
      sourceIds: ["dttzh-f6", "dttzh-a12"],
      paragraphs: [
        "DTTZH sells electric bikes from dttzh.com. The two product pages read for this guide are the F6, described as a moped-style fat-tire bike, and the A12, described as a 14-inch folding commuter. Support email on both pages is service@dttzh.com. Both pages say complete bikes ship from Walnut, California, or Robbinsville, New Jersey.",
        "Both pages carry the same legal disclaimer: the vehicle is manufactured as a Class 2 electric bicycle with a factory-limited top speed of 20 mph, and high-power off-road modes are described as for private property. The specification tables do not repeat that 20 mph figure as the only speed.",
      ],
    },
    {
      id: "which-model",
      heading: "Which listing is which",
      sourceIds: ["dttzh-f6", "dttzh-a12"],
      paragraphs: [
        "The F6 page prints one specification line for three names: F6, F6S, and F6 Pro. Top speed is 20–30 mph, 38 mph, and 50 mph. Peak power is 750W–2000W, 3000W, and 5000W. Batteries are 48V 15Ah, 48V 25Ah, and 60V 30Ah. Brakes are mechanical discs, then hydraulic discs, then hydraulic discs. Tires are 20×4.0. Listed weights are 34 kg, 34 kg, and 48.5 kg. Load is 150 kg. The page does not publish a separate rated-motor or motor-input figure.",
        "The A12 page lists peak power of 1000W/2000W, 14-inch wheels, batteries of 48V 15Ah or 52V 25Ah, a vehicle weight of 28.5 kg, and a 150 kg load. Throttle range is given as 21 or 32 miles and pedal-assist range as 60 or 80 miles. Assisted speed is not in that spec block. A warm tip says the 1000W A12 may ship as either the latest model or the previous generation.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["dttzh-f6", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "A bike listed at 38 mph or 50 mph does not fit Class 1, Class 2, or Class 3 in Virginia or Maryland, and it is above the 20 mph motorized-bicycle cap in Washington, DC. The F6 disclaimer says a 20 mph limit is the street-legal mode and that off-road modes are for private property. The same page still prints the higher speeds in the specification line and in the title. This guide does not treat the disclaimer as proof that the bike a buyer receives is limited to 20 mph.",
        "Shared-use paths in the trail directory are documented for class-legal e-bikes. Do not read the F6 or A12 page as permission to ride either bike on those paths. If a display can be unlocked, the capability still has to be compared with the statute, and the class label has to match.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["dttzh-f6", "dttzh-a12"],
      paragraphs: [
        "Ask which column you are buying. The F6 name covers a street-labeled bike and versions the page lists at 38 mph and 50 mph. The A12 name covers 1000W and 2000W peak figures, and the page says the 1000W bike may be a current or previous version. Write down the frame serial number, which both pages tell the buyer to save.",
        "The one-year coverage is for the frame, motor, battery, and controller. Other parts are three months. Tires are excluded. Returns for a quality issue are described as within 7 days, with the company covering return shipping if the product is unused. A personal return in that window is at the buyer's shipping cost. The included charger is described as U.S. outlets only.",
      ],
    },
  ],
  lineup: [
    {
      id: "f6",
      name: "F6",
      riderFit: "The first column on the F6 page",
      distinction: "Listed at 20–30 mph and 750W–2000W peak, beside a Class 2 disclaimer that says 20 mph.",
      sourceId: "dttzh-f6",
    },
    {
      id: "f6s",
      name: "F6S",
      riderFit: "The middle column on the F6 page",
      distinction: "Listed at 38 mph and 3000W peak. That speed is outside the three-class system.",
      sourceId: "dttzh-f6",
    },
    {
      id: "f6-pro",
      name: "F6 Pro",
      riderFit: "The third column on the F6 page",
      distinction: "Listed at 50 mph and 5000W peak. A warm tip also calls a red F6 Pro 5,000W.",
      sourceId: "dttzh-f6",
    },
    {
      id: "a12",
      name: "A12",
      riderFit: "14-inch folding bike on its own page",
      distinction: "Peak power 1000W/2000W. Assisted speed is not in the spec block. The disclaimer says 20 mph.",
      sourceId: "dttzh-a12",
    },
  ],
  faq: [
    {
      question: "Is the DTTZH F6 Class 2?",
      answer:
        "The F6 page says it is manufactured as a Class 2 bike limited to 20 mph. The same page lists 20–30 mph, 38 mph, and 50 mph. eBikeQuest does not confirm the Class 2 label from that page.",
    },
    {
      question: "Why is there no F6 model page?",
      answer:
        "The F6, F6S, and F6 Pro share one URL, and the speed table conflicts with the class disclaimer. A single specification profile would have to choose a number the page does not keep consistent.",
    },
  ],
  safetyNotices: [
    {
      id: "dttzh-speed",
      severity: "caution",
      commerceRestriction: "caution",
      headline: "The F6 page lists speeds up to 50 mph and also says Class 2.",
      summary:
        "The F6 specification line lists 20–30 mph, 38 mph, and 50 mph. The disclaimer on that page says the bike is a Class 2 electric bicycle limited to 20 mph. Virginia and Maryland class three assistance ceases at 28 mph. This guide does not confirm a class.",
      sourceId: "dttzh-f6",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-dttzh"],
    finding:
      "CPSC recall search checked September 28, 2026; no matching notice returned at that check.",
  },
  retailerLinks: [
    {
      id: "dttzh-f6-link",
      retailer: "manufacturer",
      retailerName: "DTTZH",
      href: "https://www.dttzh.com/product-page/f6",
      isAffiliate: false,
      label: "View the F6 on DTTZH's site",
      sourceId: "dttzh-f6",
    },
    {
      id: "dttzh-a12-link",
      retailer: "manufacturer",
      retailerName: "DTTZH",
      href: "https://www.dttzh.com/product-page/a12",
      isAffiliate: false,
      label: "View the A12 on DTTZH's site",
      sourceId: "dttzh-a12",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "dttzh-f6",
      title: "DTTZH F6 product page",
      url: "https://www.dttzh.com/product-page/f6",
      publisher: "DTTZH",
      role: "manufacturer",
      accessedAt,
      note: "One page lists F6, F6S, and F6 Pro speeds and a Class 2 disclaimer.",
    },
    {
      id: "dttzh-a12",
      title: "DTTZH A12 product page",
      url: "https://www.dttzh.com/product-page/a12",
      publisher: "DTTZH",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "cpsc-dttzh",
      title: "CPSC recall search for DTTZH",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=DTTZH",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned an empty list on September 28, 2026.",
    },
  ],
};
