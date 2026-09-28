import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const meelod: Brand = {
  id: "brand-meelod",
  slug: "meelod",
  name: "Meelod",
  seo: { title: "Meelod e-bike buyer guide" },
  description:
    "Meelod's DK300 MAX page lists a 2400W peak dual-motor system and a 48V 40Ah pack. The specification table does not list a top speed, and a video title on the same page says 35 mph. The class is not confirmed.",
  website: "https://meelod.com/",
  supportContact: "Support@meelod.com · +1 (626) 362-6684 · Monday–Friday 09:00–18:00 GMT+8",
  suitedFor:
    "Riders comparing the DK300 MAX who need the peak-power figure, the missing speed in the spec table, and the warranty claim on that page before they assume a class.",
  categories: ["other"],
  warrantySummary:
    "The DK300 MAX page's questions say Meelod backs products with a 2-year warranty. The page does not list which parts are covered, whether labor is included, or when the clock starts. A damaged arrival should be reported within 7 days with photos. A 14-day return is described for an unused bike in its original packaging, with the customer paying return shipping unless the return is for shipping damage or a product issue.",
  warrantySourceId: "meelod-dk300",
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "The DK300 MAX specification table lists 2400W peak dual motors. It does not list an assisted speed, a motor input, or a motor rating. Virginia's definition uses a motor input of no more than 750 watts, and class three pedal assistance ceases at 28 mph. Maryland uses a motor rating of 750 watts or less and the same speed cutoffs. Peak output is not those statutory figures. A video title embedded on the same product page says \"This 35 MPH Ebike.\" That title is not a specification row. eBikeQuest does not assign Class 1, Class 2, or Class 3, and it does not treat 2400W peak as compliance with the 750-watt definitions.",
  certificationNotes:
    "The DK300 MAX specification table checked on September 28, 2026 did not name UL 2271, UL 2849, or a certificate number.",
  limitations: [
    "The specification table has no top speed. Video titles on the same page include a 35 mph claim. This guide does not choose the video title as the bike's assisted speed and does not ignore it.",
    "The page lists both 48V 40Ah and 1920Wh. Those can describe the same pack, but the page does not show the arithmetic. Both figures are left as published.",
    "No DK300 MAX model page is published. The speed is not in the specification table, so a profile would have to promote a video title into a spec.",
  ],
  retailerAvailability:
    "Meelod sells the DK300 MAX from meelod.com. This page links that manufacturer page. No Amazon product link is published. Review scores on the product page are not copied here.",
  comparableBrandSlugs: ["dttzh"],
  lineupNotes: "The only product page read in full for this guide is the DK300 MAX.",
  editorialNotes:
    "The product page says Meelod was founded in 2022 and mentions a rider community and dealer count. Those are the company's own claims. They are not an independent audit.",
  sections: [
    {
      id: "what-meelod-is",
      heading: "What Meelod is",
      sourceIds: ["meelod-dk300"],
      paragraphs: [
        "Meelod sells the DK300 MAX from meelod.com as a moped-style fat-tire electric bike. The page's questions say the company was founded in 2022 and that support is Support@meelod.com and +1 (626) 362-6684, Monday through Friday, 09:00 to 18:00 GMT+8. The bike is described as shipping in two packages because of its size.",
        "The same questions say the bike arrives partially assembled. The page does not publish a company street address.",
      ],
    },
    {
      id: "what-the-page-lists",
      heading: "What the DK300 MAX page lists",
      sourceIds: ["meelod-dk300"],
      paragraphs: [
        "The specification table lists 2400W peak dual motors, a 1920Wh removable battery, a 4.5A 48V charger, a Shimano 7-speed derailleur, 20×4.0 fat tires, a hydraulic front fork, hydraulic disc brakes, a weight of 59 kg, and a 440 lb combined rider-and-cargo limit. Marketing text above the table also says 48V 40Ah. Size is listed as 187×76×118 cm. Lights are an LED headlight and a taillight with a brake light. The page says GPS tracking is built in.",
        "The specification table does not list top speed, throttle behavior, or a class. Video titles on the page include \"This 35 MPH Ebike is NOT a One Trick Pony\" and \"BIKE AND MOTORCYCLE ALL IN ONE.\" Those titles are not specification rows. Range is described in marketing language and is not given as a single tested figure in the table, so no range number is repeated here.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["meelod-dk300", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "The product page calls the DK300 MAX suitable for city roads, gravel, and moderate off-road riding. That sentence does not establish a class. Virginia and Maryland class three assistance ceases at 28 mph, and both states' wattage definitions are a motor input or a motor rating of 750 watts, not a peak figure. If the 35 mph video title describes the bike, that speed is outside the three-class system and above Washington, DC's 20 mph motorized-bicycle cap. This guide does not have a specification-table speed to confirm either way.",
        "Trail pages in this directory document class-legal access. They are not permission for a bike whose class is unresolved. Start with the class guide and the three law pages.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["meelod-dk300"],
      paragraphs: [
        "Ask Meelod for the assisted speed and whether a throttle works above 20 mph. The specification table does not answer that, and the video title on the page suggests 35 mph. Also ask which wattage figure is the motor rating, because 2400W peak is what the table publishes.",
        "Report shipping damage within 7 days. The 14-day return requires an unused bike in the original packaging, and the customer pays return shipping unless Meelod accepts it as damage or a product issue. The 2-year warranty is stated in the questions and is not itemized on the page that was read.",
      ],
    },
  ],
  lineup: [
    {
      id: "dk300-max",
      name: "DK300 MAX",
      riderFit: "Moped-style fat-tire bike on the product page",
      distinction: "2400W peak dual motors and 48V 40Ah / 1920Wh. Top speed is not in the specification table.",
      sourceId: "meelod-dk300",
    },
  ],
  faq: [
    {
      question: "Is the Meelod DK300 MAX Class 3?",
      answer:
        "The specification table does not list a class or a top speed. It lists 2400W peak. A video title on the same page says 35 mph. eBikeQuest does not assign a class from that page.",
    },
    {
      question: "Does peak wattage meet the 750-watt rules?",
      answer:
        "No. Virginia's statute uses motor input of no more than 750 watts. Maryland uses a motor rating of 750 watts or less. A peak figure is not automatically either number.",
    },
  ],
  safetyNotices: [
    {
      id: "meelod-speed-gap",
      severity: "caution",
      commerceRestriction: "caution",
      headline: "The spec table omits top speed, and a video title on the page says 35 mph.",
      summary:
        "Meelod's DK300 MAX specification table lists 2400W peak and does not list assisted speed. A video title on that page says 35 mph. Virginia and Maryland class three assistance ceases at 28 mph. The class is not confirmed.",
      sourceId: "meelod-dk300",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-meelod"],
    finding: "CPSC recall search checked September 28, 2026; no matching notice returned at that check.",
  },
  retailerLinks: [
    {
      id: "meelod-dk300-link",
      retailer: "manufacturer",
      retailerName: "Meelod",
      href: "https://meelod.com/products/meelod-dk300max-moped-style-fat-tire-ebike",
      isAffiliate: false,
      label: "View the DK300 MAX on Meelod's site",
      sourceId: "meelod-dk300",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "meelod-dk300",
      title: "Meelod DK300 MAX product page",
      url: "https://meelod.com/products/meelod-dk300max-moped-style-fat-tire-ebike",
      publisher: "Meelod",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "cpsc-meelod",
      title: "CPSC recall search for Meelod",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Meelod",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned an empty list on September 28, 2026.",
    },
  ],
};
