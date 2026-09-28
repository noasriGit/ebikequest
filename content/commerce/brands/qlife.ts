import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const qlife: Brand = {
  id: "brand-qlife",
  slug: "qlife",
  name: "Qlife",
  seo: { title: "Qlife e-bike buyer guide" },
  description:
    "Qlife sells direct-to-consumer e-bikes. Cityone Plus is labeled Class 3 at 28 mph. The Spark lists a top speed above 28 mph.",
  website: "https://www.qlifebike.com/",
  supportContact: "service@qlifebike.com · +1 716 452 9382 · 8 a.m.–5 p.m. PST, Monday–Friday",
  suitedFor:
    "Shoppers comparing Qlife's step-through Cityone Plus with its faster moped-style Spark, and who need the class and speed difference before they order.",
  categories: ["commuter", "city", "other"],
  warrantySummary:
    "Qlife's product pages say original owners get a one-year warranty against manufacturing defects, and that free accessories are excluded. A Qlife battery article also describes a one-year pro-rated battery warranty. The site footer separately says \"365 days\" of after-sales service. Treat those as the same one-year window unless a written policy says otherwise, and confirm which components are covered before ordering.",
  warrantySourceId: "qlife-cityone",
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "Qlife does not fit in one class. The Cityone Plus page labels that bike Class 3 and lists a 28 mph top speed, and it also lists a peak 1200W hub motor. Virginia defines an electric power-assisted bicycle by a motor input of no more than 750 watts. Maryland requires a motor rating of 750 watts or less. The Cityone Plus page does not publish either figure, so eBikeQuest does not confirm that Class 3 label. The Spark page labels the bike Class 3 and lists a top speed of 35+ mph. Virginia's class three assistance and Maryland's Class 3 assistance both cease at 28 mph, so the Spark does not fit Class 1, 2, or 3 on Qlife's speed figure.",
  certificationNotes:
    "The Spark page says the lithium-ion battery pack was tested to ANSI/CAN/UL/ULC 2271:2018 by TÜV Rheinland, and that the complete electrical system was tested and certified to ANSI/CAN/UL 2849:2022A by TÜV Rheinland. The Cityone Plus page says the battery is TÜV certified and does not repeat those standard numbers. No certificate number was confirmed in a UL directory for this guide.",
  limitations: [
    "A Qlife page can say Class 3 and, on the Spark, also list a speed above 28 mph. Read the speed figure, not only the class label.",
    "Peak output is not Virginia's motor input and it is not Maryland's motor rating. The Cityone Plus and Spark spec tables publish peak watts and do not publish those statutory figures.",
    "Claimed range is a manufacturer maximum. This guide does not repeat a range figure as a measured result.",
    "No street address for Qlife was on the pages checked. A FAQ answer also lists service@actbest.net and another phone number.",
  ],
  retailerAvailability:
    "Qlife sells from qlifebike.com. Amazon listings that use the Qlife name were not matched to the current official spec sheets, so this page links the manufacturer only.",
  comparableBrandSlugs: ["wallke"],
  lineupNotes:
    "Qlife's site groups moped-style, fat-tire, commuter, folding, and three-wheel bikes. Only Cityone Plus and the Spark 20×4.0 have standalone pages here, because those two pages had a spec table clear enough to cite. Other family names are not given invented specifications.",
  editorialNotes:
    "This is a buyer guide from manufacturer documents. eBikeQuest has not ridden or measured a Qlife bike.",
  sections: [
    {
      id: "what-qlife-is",
      heading: "What Qlife is",
      sourceIds: ["qlife-home", "qlife-faq"],
      paragraphs: [
        "Qlife is a direct-to-consumer e-bike brand sold at qlifebike.com. The site presents moped-style, fat-tire, commuter, folding, and three-wheel models, and it says bikes ship from a U.S. warehouse. The FAQ says most bikes arrive about 95 percent assembled: the buyer tightens the wheel bolts and installs the handlebars and seat.",
        "The same FAQ says batteries are removable for charging, and that most models use a Shimano 7-speed drivetrain so the bike can still be pedaled when the battery is empty. Support on the pages checked is service@qlifebike.com and +1 716 452 9382, 8 a.m. to 5 p.m. PST on weekdays. One FAQ answer also gives service@actbest.net. This guide does not treat that second address as a separate company record.",
      ],
    },
    {
      id: "which-model",
      heading: "Which Qlife model fits which rider",
      sourceIds: ["qlife-cityone", "qlife-spark"],
      paragraphs: [
        "Cityone Plus is the step-through commuter. Qlife lists a low-step frame, an upright position, 26×2.1-inch tires, a front suspension fork, mechanical disc brakes, a rear rack rated at 120 pounds, and a rider-height range of 5 feet 1 inch to 6 feet 3 inches. The spec table lists a 350-pound payload and a bike weight of 70.55 pounds.",
        "The Spark 20×4.0 is the moped-style bike: a long seat, 20×4.0-inch tires, and a listed rider-height range of 5 feet 3 inches to 6 feet 3 inches. Qlife lists a 360-pound payload and a bike weight of 93 pounds. The page also offers single-battery, rear-rack, and dual-battery styles. The spec table cited here is the table on that page; dual-battery figures are not copied because they were not a separate complete spec sheet.",
        "Choose Cityone Plus only if a labeled commuter, and a speed Qlife lists at 28 mph, is the actual need. Choose the Spark only with the 35+ mph listing in view. Riders who need a confirmed Class 1 or Class 2 bike for a shared path should look elsewhere until the motor-input or motor-rating figure and the frame label are in hand.",
      ],
    },
    {
      id: "battery",
      heading: "Battery and charging",
      sourceIds: ["qlife-cityone", "qlife-spark", "qlife-battery"],
      paragraphs: [
        "Cityone Plus lists a 48V 15Ah battery, a 54.6V / 2A charger, and a charge time of 6–7 hours. The Spark lists a 48V 15.6Ah battery, a 54.6V / 2A charger, and a charge time of 4–6 hours. Both pages say the battery can be removed. Qlife states an IPX5 rating on both spec tables.",
        "On the Spark page, Qlife says the pack was tested to UL 2271:2018 and the electrical system was certified to UL 2849:2022A, both by TÜV Rheinland. A Qlife article tells readers that \"tested to\" and \"certified to\" are not the same claim, and that certification should be checked against the lab's own records. This guide did not find a certificate number to look up.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["qlife-cityone", "qlife-spark", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "Virginia defines an electric power-assisted bicycle as a motor input of no more than 750 watts. Class one and class two assistance stops at 20 mph, and class three pedal assistance stops at 28 mph. Maryland uses a motor rating of 750 watts or less, with Class 1 and Class 2 stopping at 20 mph and Class 3 pedal assistance stopping at 28 mph. Washington, DC does not use those class labels. DC's motorized-bicycle definition is a device the motor cannot propel faster than 20 mph on level ground. Trail managers can be stricter than the state default.",
        "A Cityone Plus, if the frame label and motor rating really are Class 3, is a road and bike-lane question first. Maryland bars Class 3 from most bicycle paths unless the path is next to a highway or the manager allows it. A Spark listed at 35+ mph is outside that three-class system on the speed figure alone. Do not plan a rail-trail ride on the class label printed in Qlife's marketing if the same page lists a higher top speed.",
        "Use the Virginia, Maryland, and DC law pages, then the trail directory, for the specific path. This guide does not assign either bike to a trail.",
      ],
    },
    {
      id: "before-you-order",
      heading: "What to know before ordering",
      sourceIds: ["qlife-faq", "qlife-cityone"],
      paragraphs: [
        "Confirm the model name on the product page against the battery voltage, top speed, and class label. Qlife sells more than one Cityone configuration over time, and an older listing can show a different voltage or speed. Ask for the motor input or motor rating in writing if the page only says peak watts.",
        "Budget for assembly of the handlebars, seat, and wheel hardware, and for a place to charge a removable pack. The one-year warranty on the product pages excludes free accessories. The dated regulator check is in the safety section. It does not settle the speed and class question above.",
      ],
    },
  ],
  lineup: [
    {
      id: "cityone-plus",
      name: "Cityone Plus",
      modelSlug: "cityone-plus",
      riderFit: "Step-through commuting, riders about 5'1\" to 6'3\"",
      distinction: "Labeled Class 3, 28 mph, peak 1200W, 48V 15Ah. Motor input and motor rating are not published.",
      sourceId: "qlife-cityone",
    },
    {
      id: "spark",
      name: "Spark 20×4.0",
      modelSlug: "spark",
      riderFit: "Moped-style riding, riders about 5'3\" to 6'3\"",
      distinction: "Page says Class 3 and also 35+ mph with a peak 1800W motor. The speed figure is outside Class 3.",
      sourceId: "qlife-spark",
    },
  ],
  faq: [
    {
      question: "Is a Qlife e-bike Class 3?",
      answer:
        "Not as a brand. Qlife labels the Cityone Plus Class 3 and lists 28 mph, but the page publishes a peak 1200W hub motor and does not publish the motor input Virginia uses or the motor rating Maryland uses. The Spark page says Class 3 and lists 35+ mph, which is above the 28 mph cutoff in both statutes. Check the frame label on the bike you receive.",
    },
    {
      question: "How fast does Qlife say these bikes go?",
      answer:
        "The Cityone Plus spec table says 28 mph. The Spark spec table says 35+ mph. Those are Qlife's figures, not a measurement by eBikeQuest.",
    },
    {
      question: "What warranty does Qlife publish?",
      answer:
        "Product pages describe a one-year warranty for the original owner against manufacturing defects, excluding free accessories. A Qlife battery article also says batteries have a one-year pro-rated warranty. The footer says 365 days of after-sales service.",
    },
    {
      question: "Did CPSC have a Qlife recall on the check date?",
      answer:
        "No matching Qlife recall or stop-use warning was returned from the CPSC recall service on September 28, 2026, searching the brand name and product name. Check CPSC again before you buy, because this finding is dated.",
    },
    {
      question: "Where is a Qlife bike sold?",
      answer:
        "On qlifebike.com. Amazon has listings under the Qlife name, but this guide does not match those listings to the current official spec sheets and does not link them.",
    },
  ],
  safetyNotices: [
    {
      id: "spark-speed",
      headline: "The Spark page lists 35+ mph and also says Class 3.",
      summary:
        "Qlife's Spark page labels the bike Class 3 and lists a top speed of 35+ mph. Read the class section, which cites the Virginia and Maryland definitions, before treating that label as permission to ride it where Class 3 bicycles are allowed.",
      severity: "caution",
      sourceId: "qlife-spark",
      commerceRestriction: "caution",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-qlife"],
    finding: "CPSC recall search checked September 28, 2026; no matching notice returned at that check.",
  },
  retailerLinks: [
    {
      id: "qlife-site",
      retailer: "manufacturer",
      retailerName: "Qlife",
      href: "https://www.qlifebike.com/",
      isAffiliate: false,
      label: "View on Qlife's site",
    },
  ],
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "qlife-home",
      title: "Qlife official site",
      url: "https://www.qlifebike.com/",
      publisher: "Qlife",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "qlife-faq",
      title: "Qlife FAQ",
      url: "https://www.qlifebike.com/pages/faqs",
      publisher: "Qlife",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "qlife-cityone",
      title: "Qlife Cityone Plus product page",
      url: "https://www.qlifebike.com/products/cityone-2-0-commute-electric-bike",
      publisher: "Qlife",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "qlife-spark",
      title: "Qlife Spark 20×4.0 product page",
      url: "https://www.qlifebike.com/products/spark-moped-style-e-bike",
      publisher: "Qlife",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "qlife-battery",
      title: "Qlife article on battery standards and warranty wording",
      url: "https://www.qlifebike.com/blogs/news/cheap-ebike-battery-safety",
      publisher: "Qlife",
      role: "manufacturer",
      accessedAt,
      note: "Manufacturer article. It distinguishes \"tested to\" from \"certified to\" and describes a one-year pro-rated battery warranty.",
    },
    {
      id: "cpsc-qlife",
      title: "CPSC recall search for Qlife",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Qlife",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned no notices. A product-name search for Qlife on the same service the same day also returned none.",
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
