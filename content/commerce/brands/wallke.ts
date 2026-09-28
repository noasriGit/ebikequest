import type { Brand } from "@/types/commerce";

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
  classConsiderations:
    "The H9 series page lists 37 mph for the H9 Ultra single motor, the H9 Ultra AWD, and the H9 AWD. Class 3 pedal assist stops at 28 mph, and Class 1 and Class 2 stop at 20 mph. A listed 37 mph top speed is outside that three-class system. Washington, DC's motorized-bicycle definition stops at 20 mph. Wallke's H9 table does not publish a nominal wattage next to motors it lists at 2000W or dual 1000W. This guide does not call any H9 configuration Class 2 or Class 3.",
  certificationNotes:
    "The H9 series specification table lists certifications as UN38.3, MSDS, and UL. It does not name UL 2271 or UL 2849, and it does not give a certificate number. Those standard numbers are omitted here because they were not on that table.",
  limitations: [
    "Wallke's own H9 pages do not agree on every figure. The series table lists the H9 AWD at 1920Wh and 132 pounds. A separate H9 AWD page lists 48V 40Ah and 119 pounds, while that page's web address says 82Ah. Confirm the watt-hour rating on the battery label before ordering.",
    "The H9 series introduction says up to 130 miles, and a highlight on the same page says 75–180 miles. Range is not settled from that page, so this guide does not pick one number.",
    "The series table's brakes row is filled with shock-absorber text, and a later row names the brake hardware. Use the later row, and still confirm the brake spec on the bike.",
    "Optional add-on protection is sold by Xcotton, not by Wallke's one-year warranty. It is a separate purchase.",
    "No company street address was on the warranty or H9 pages checked.",
  ],
  retailerAvailability:
    "Wallke sells from wallkeebike.com. The Amazon link on this page is a search page, not an Associates link. It is not a matched Wallke product, and Amazon text was not used for specifications.",
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
        "The H9 AWD column lists the same dual 1000W motors and 1920Wh as the single-motor battery size, a cadence sensor instead of torque, dual-piston brakes, 132 pounds, and a 5–6 hour charge on a 48V 6A charger. All three columns say 37 mph. A separate H9 AWD product page does not repeat this table cleanly: it lists 48V 40Ah and 119 pounds, and the page address says 82Ah. Those conflicts are why this brand guide does not open a model page.",
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
      sourceIds: ["wallke-h9"],
      paragraphs: [
        "A bike Wallke lists at 37 mph does not fit the Class 1, Class 2, or Class 3 speed caps used in Virginia and Maryland, and it is above the 20 mph motorized-bicycle cap in Washington, DC. Shared-use paths in this directory are written for class-legal e-bikes. Do not read a folding-bike product page as permission to ride an H9 on those paths.",
        "Some Wallke marketing describes the bikes as commuters. The speed figure still controls the class question. If a display can be set to a lower limit, the bike's capability is what Virginia and Maryland look at when a speed limiter is changed, and the label has to match. This guide did not confirm a locked class mode on the H9 pages that were read in full.",
        "Start with the class guide and the three law pages, then the trail directory, if the bike you actually buy is a class-legal e-bike. The H9 figures cited here are not that bike.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["wallke-warranty", "wallke-support", "cpsc-wallke"],
      paragraphs: [
        "Match the battery's watt-hour label to the configuration you think you bought. The H9 names overlap, and Wallke's pages do not keep one battery figure per name. Ask which sensor you are getting, torque or cadence, because the series table splits them by column.",
        "The one-year warranty replaces parts. It does not pay a shop. File shipping damage within seven days and keep the packaging. Warranty email is sales@wallkeebike.com, with the order ID and photos or video. A CPSC search for Wallke on September 28, 2026 returned no matching recall. The 37 mph listing is a class problem, not a recall finding.",
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
        "Not on the speed Wallke prints. Class 2 assist stops at 20 mph and Class 3 pedal assist stops at 28 mph. The H9 table says 37 mph and does not publish the nominal wattage next to motors listed at 1000W or 2000W.",
    },
    {
      question: "Who pays for labor under the Wallke warranty?",
      answer:
        "The owner. Wallke's warranty page says the company ships a replacement part and pays shipping on that part. Installation and shop charges are excluded. The warranty is one year for the original owner, from the delivery date.",
    },
    {
      question: "Which battery comes on an H9?",
      answer:
        "The series table lists 1920Wh on two columns and 2640Wh on the H9 Ultra AWD column. A separate H9 AWD page lists 48V 40Ah and a web address that says 82Ah. Confirm the label on the battery you are buying. This guide does not choose one of those conflicting figures as the fact.",
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
      summary:
        "Wallke's H9 series page lists a 37 mph top speed for the configurations in its specification table. That is above Class 3. Read the speed figure before using a retailer link. This is not a CPSC stop-use order.",
      severity: "caution",
      sourceId: "wallke-h9",
      commerceRestriction: "caution",
    },
    {
      id: "cpsc-clear",
      summary:
        "A CPSC recall search for Wallke on September 28, 2026 returned no matching recall or stop-use warning.",
      severity: "info",
      sourceId: "cpsc-wallke",
    },
  ],
  retailerLinks: [
    {
      id: "wallke-site",
      retailer: "manufacturer",
      retailerName: "Wallke",
      href: "https://wallkeebike.com/",
      isAffiliate: false,
      label: "View on Wallke's site",
    },
    {
      id: "wallke-amazon-search",
      retailer: "amazon",
      retailerName: "Amazon",
      href: "https://www.amazon.com/s?k=Wallke+ebike",
      isAffiliate: false,
      label: "Check availability on Amazon",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
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
      note: "Lists 48V 40Ah and 119 lb. The series page lists different weight and watt-hour figures for an H9 AWD column. The page address says 82Ah.",
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
