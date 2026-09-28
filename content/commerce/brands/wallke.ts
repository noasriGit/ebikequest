import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const wallke: Brand = {
  id: "brand-wallke",
  slug: "wallke",
  name: "Wallke",
  seo: { title: "Wallke e-bike buyer guide" },
  description:
    "Wallke sells folding fat-tire e-bikes on its own site. Its H9 series pages list a 37 mph top speed, above the Class 3 limit.",
  website: "https://wallkeebike.com/",
  supportContact: "sales@wallkeebike.com · +1 646 502 7256 · Mon–Fri 5:00 p.m.–2:00 a.m. PST",
  suitedFor:
    "Shoppers trying to tell Wallke's H9 configurations apart, and who need the 37 mph listing and the one-year parts-only warranty before they order.",
  categories: ["other", "folding"],
  warrantySummary:
    "Wallke's warranty page gives the original owner one year from the delivery date. Coverage is for manufacturing defects. Wallke ships replacement parts and the shipping on those parts. The owner pays labor. The warranty is not transferable, and it does not cover a resold bike. Parts ship only within the continental United States, Canada, or the European Union, and only to the original delivery country if the bike was exported. Wear items, crashes, water damage, and electrical modifications are excluded. A battery capacity drop of up to 30 percent in the first year, or within 500 charge cycles, is described as normal wear and is not covered.",
  warrantySourceId: "wallke-warranty",
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "The H9 series page lists 37 mph for the H9 Ultra single motor, the H9 Ultra AWD, and the H9 AWD. Virginia's class three pedal assistance ceases at 28 mph, and class one and class two cease at 20 mph. Maryland's Class 3 ceases at 28 mph and Class 1 and Class 2 cease at 20 mph. A listed 37 mph top speed is outside that three-class system. Washington, DC's motorized-bicycle definition stops at 20 mph. Wallke's H9 table lists motors at 2000W or dual 1000W and does not publish the motor input Virginia uses or the motor rating Maryland uses. Those listed wattages are not the statutory figures. This guide does not call any H9 configuration Class 2 or Class 3.",
  certificationNotes:
    "The H9 series specification table lists certifications as UN38.3, MSDS, and UL. It does not name UL 2271 or UL 2849, and it does not give a certificate number. Those standard numbers are omitted here because they were not on that table.",
  limitations: [
    "Wallke's current H9 AWD page contains conflicting weight values in different sections of the same page, while its URL and title and the current battery configuration also use inconsistent capacity naming. On September 28, 2026 that page showed 108.03 lb in a size block, 119 lb (54 kg) in the specification table, and 116 lb (52.4 kg) in the technical-specification block. The title and URL say 82Ah, and the battery lines say 48V 40Ah. eBikeQuest does not publish a standalone H9 AWD specification profile and does not choose one of those weights.",
    "The H9 series introduction says up to 130 miles, and a highlight on the same page says 75–180 miles. Range is not settled from that page, so this guide does not pick one number.",
    "The series table's brakes row is filled with shock-absorber text, and a later row names the brake hardware. Use the later row, and still confirm the brake spec on the bike.",
    "Optional add-on protection is sold by Xcotton, not by Wallke's one-year warranty. It is a separate purchase.",
    "No company street address was on the warranty or H9 pages checked.",
  ],
  retailerAvailability:
    "Wallke sells from wallkeebike.com. This page links the manufacturer. Amazon text was not used for specifications, and no Amazon product link is published.",
  comparableBrandSlugs: ["qlife"],
  lineupNotes:
    "Wallke publishes several family names, including on a comparison page whose address names H9 AWD, H7 AWD, and X3 Pro Max. The comparison table did not render stable cell values when checked, so those other families are not given specifications here. The lineup table is only the three H9 configurations on the H9 series page.",
  editorialNotes:
    "No standalone Wallke model page is published. Official pages reuse H9 names with conflicting battery and weight figures, so a single model profile would have to pick a number the manufacturer does not keep consistent.",
  sections: [
    {
      id: "what-wallke-is",
      heading: "What Wallke is",
      sourceIds: ["wallke-h9", "wallke-warranty"],
      paragraphs: [
        "Wallke sells folding fat-tire e-bikes from wallkeebike.com. The H9 series page describes full-suspension folding bikes with fat tires, a color display, and either one rear motor or two hub motors. Support on the warranty page is sales@wallkeebike.com and +1 646 502 7256, with online coverage listed Monday through Friday, 5:00 p.m. to 2:00 a.m. PST.",
        "The same warranty page says the owner is responsible for their own riding, and that Wallke is not liable for accidents or injuries. That sentence is the company's liability line. It is not a safety test.",
      ],
    },
    {
      id: "which-model",
      heading: "Which H9 configuration is which",
      sourceIds: ["wallke-h9", "wallke-h9-awd"],
      paragraphs: [
        "On the H9 series table, the single-motor H9 Ultra lists a 2000W rear motor, 105 Nm, a 1920Wh battery, torque sensor, 4-piston hydraulic disc brakes, 20×4-inch tires, a listed weight of 132 pounds, and a 400-pound load. Charge time is 5–6 hours on a 48V 6A charger.",
        "The H9 Ultra AWD column lists dual 1000W motors, 95 Nm plus 95 Nm, a 2640Wh battery, a torque sensor, dual-piston hydraulic discs, the same 20×4-inch tires, a listed weight of 147 pounds, and the same 400-pound load. Charge time is 8–10 hours, and the charger cell says \"charging cable\" rather than a numbered charger.",
        "The H9 AWD column lists the same dual 1000W motors and 1920Wh as the single-motor battery size, a cadence sensor instead of torque, dual-piston brakes, 132 pounds, and a 5–6 hour charge on a 48V 6A charger. All three columns say 37 mph. Wallke's current H9 AWD page contains conflicting weight values in different sections of the same page — 108.03 lb, 119 lb, and 116 lb on the September 28, 2026 check — while its URL and title and the current 48V 40Ah battery lines also use inconsistent capacity naming. eBikeQuest therefore does not publish a standalone H9 AWD specification profile.",
      ],
    },
    {
      id: "battery",
      heading: "Battery and charging",
      sourceIds: ["wallke-h9", "wallke-warranty"],
      paragraphs: [
        "The series table lists 1920Wh for the 40Ah-named single-motor and H9 AWD columns, and 2640Wh for the 55Ah H9 Ultra AWD column. Battery weight is listed at 18 pounds or 30 pounds in that same table. The page also mentions an energy-storage function on the Ultra AWD. This guide does not describe what devices that port can run, because the page does not give a tested output.",
        "Wallke's battery warranty excludes a non-Wallke charger, a pack left empty for more than 30 days, storage below freezing or above 100°F, a broken seal, and water inside the pack. A capacity loss up to 30 percent in the first year or 500 cycles is called normal wear.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["wallke-h9", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "A bike Wallke lists at 37 mph does not fit the Class 1, Class 2, or Class 3 speed caps used in Virginia and Maryland, and it is above the 20 mph motorized-bicycle cap in Washington, DC. Shared-use paths in this directory are written for class-legal e-bikes. Do not read a folding-bike product page as permission to ride an H9 on those paths.",
        "Some Wallke marketing describes the bikes as commuters. The speed figure still controls the class question. If a display can be set to a lower limit, the bike's capability is what Virginia and Maryland look at when a speed limiter is changed, and the label has to match. This guide did not confirm a locked class mode on the H9 pages that were read in full.",
        "Start with the class guide and the three law pages, then the trail directory, if the bike you actually buy is a class-legal e-bike. The H9 figures cited here are not that bike.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["wallke-warranty", "wallke-support", "wallke-h9"],
      paragraphs: [
        "Match the battery's watt-hour label to the configuration you think you bought. The H9 names overlap, and Wallke's pages do not keep one battery figure per name. Ask which sensor you are getting, torque or cadence, because the series table splits them by column.",
        "The one-year warranty replaces parts. It does not pay a shop. File shipping damage within seven days and keep the packaging. Warranty email is sales@wallkeebike.com, with the order ID and photos or video. The 37 mph listing is a class question. The dated regulator check is separate and is not a clearance.",
      ],
    },
  ],
  lineup: [
    {
      id: "h9-ultra",
      name: "H9 Ultra",
      riderFit: "Single-motor folding fat-tire setup on the series table",
      distinction: "2000W rear motor, 1920Wh, torque sensor, 37 mph, 132 lb listed.",
      sourceId: "wallke-h9",
    },
    {
      id: "h9-ultra-awd",
      name: "H9 Ultra AWD",
      riderFit: "Dual-motor setup with the larger listed pack",
      distinction: "Dual 1000W, 2640Wh, torque sensor, 37 mph, 147 lb listed.",
      sourceId: "wallke-h9",
    },
    {
      id: "h9-awd",
      name: "H9 AWD",
      riderFit: "Dual-motor setup with the smaller listed pack",
      distinction: "Dual 1000W, 1920Wh, cadence sensor, 37 mph. Other Wallke URLs disagree on battery size and weight.",
      sourceId: "wallke-h9",
    },
  ],
  faq: [
    {
      question: "How fast does Wallke list the H9?",
      answer:
        "The H9 series specification table lists 37 mph for the H9 Ultra, the H9 Ultra AWD, and the H9 AWD. That is Wallke's figure. It is above the 28 mph Class 3 assist limit.",
    },
    {
      question: "Is a Wallke H9 a Class 2 or Class 3 e-bike?",
      answer:
        "Not on the speed Wallke prints. Virginia and Maryland stop Class 2 assistance at 20 mph and Class 3 pedal assistance at 28 mph. The H9 table says 37 mph. It lists 1000W and 2000W motors and does not publish the motor input Virginia uses or the motor rating Maryland uses.",
    },
    {
      question: "Who pays for labor under the Wallke warranty?",
      answer:
        "The owner. Wallke's warranty page says the company ships a replacement part and pays shipping on that part. Installation and shop charges are excluded. The warranty is one year for the original owner, from the delivery date.",
    },
    {
      question: "Which battery comes on an H9?",
      answer:
        "The series table lists 1920Wh on two columns and 2640Wh on the H9 Ultra AWD column. The separate H9 AWD page, checked September 28, 2026, says 48V 40Ah in the battery lines while the title and URL say 82Ah, and it lists three different weights on that same page: 108.03 lb, 119 lb, and 116 lb. Confirm the label on the battery you are buying. This guide does not choose one of those figures.",
    },
    {
      question: "Was there a CPSC recall for Wallke?",
      answer:
        "No matching Wallke recall or stop-use warning was returned on September 28, 2026. Check CPSC again at purchase time. The speed listing is a separate issue from a recall.",
    },
  ],
  safetyNotices: [
    {
      id: "h9-speed",
      headline: "The H9 series table lists 37 mph.",
      summary:
        "Wallke's H9 series page lists a 37 mph top speed for the configurations in its specification table. Read that figure, and the class section, before using a retailer link. This is not a stop-use order.",
      severity: "caution",
      sourceId: "wallke-h9",
      commerceRestriction: "caution",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-wallke"],
    finding: "CPSC recall search checked September 28, 2026; no matching notice returned at that check.",
  },
  retailerLinks: [
    {
      id: "wallke-site",
      retailer: "manufacturer",
      retailerName: "Wallke",
      href: "https://wallkeebike.com/",
      isAffiliate: false,
      label: "View on Wallke's site",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "wallke-h9",
      title: "Wallke H9 series product page",
      url: "https://wallkeebike.com/products/wallke-h9-series",
      publisher: "Wallke",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "wallke-h9-awd",
      title: "Wallke H9 AWD product page",
      url: "https://wallkeebike.com/products/h9awd",
      publisher: "Wallke",
      role: "manufacturer",
      accessedAt,
      note: "Checked September 28, 2026. The same page shows 108.03 lb in a size block, 119 lb (54 kg) in the specification table, and 116 lb (52.4 kg) in the technical-specification block. The title and URL say 82Ah. Battery lines say 48V 40Ah.",
    },
    {
      id: "wallke-compare",
      title: "Wallke model comparison page",
      url: "https://wallkeebike.com/pages/ebike-compare-h9awd-h7awd-x3promax",
      publisher: "Wallke",
      role: "manufacturer",
      accessedAt,
      note: "The address names H9 AWD, H7 AWD, and X3 Pro Max. Specification cells were not stable enough to cite.",
    },
    {
      id: "wallke-warranty",
      title: "Wallke warranty policy",
      url: "https://wallkeebike.com/pages/warranty",
      publisher: "Wallke",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "wallke-support",
      title: "Wallke after-sales request",
      url: "https://wallkeebike.com/pages/after-sales-request",
      publisher: "Wallke",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "cpsc-wallke",
      title: "CPSC recall search for Wallke",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Wallke",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned no notices. A product-name search for Wallke on the same service the same day also returned none.",
    },
    {
      id: "cpsc-recalls",
      title: "CPSC recalls and product safety warnings",
      url: "https://www.cpsc.gov/Recalls",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
    },
  ],
};
