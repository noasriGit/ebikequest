import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const yvy: Brand = {
  id: "brand-yvy",
  slug: "yvy",
  name: "YVY",
  seo: { title: "YVY e-bike buyer guide" },
  description:
    "YVY's K20 page lists 1500W and 20 mph locked or 33 mph unlocked, and it directs shipping and warranty questions to Ridstar. CPSC has not named the K20 in the 2026 Ridstar warnings. This page does not offer a purchase link.",
  website: "https://yvy-ebike.com/",
  supportContact: "yvy-ebike.service@outlook.com, and the K20 page also says service@ridstar.com",
  headquarters: "YVY's warranty page lists Yaozhuo International Trading Limited, RM D07, 8/F Kai Tak Factory Building, 99 King Fuk Street, San Po Kong, Hong Kong.",
  suitedFor:
    "Shoppers who need the K20's locked and unlocked speeds, the warranty conflict on YVY's own pages, and the limit of what the Ridstar CPSC warnings do and do not name.",
  categories: ["other"],
  warrantySummary:
    "YVY's warranty page says coverage is one year from purchase for the original owner, including controllers, forks, stems, seatposts, cranksets, racks, shifting systems, batteries, and motors, as a one-time parts replacement. Wear items such as tires, tubes, chains, brake pads, and saddles are excluded. The K20 product page, checked the same day, tells buyers the Ridstar warranty policy applies only to orders from ridstar.com and to email service@ridstar.com. Those are two different warranty statements on YVY's site.",
  warrantySourceId: "yvy-warranty",
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "The K20 page lists a max speed of 20 mph locked and 33 mph unlocked, and a 1500W motor. Virginia class three pedal assistance ceases at 28 mph, and the statute uses a motor input of no more than 750 watts. Maryland Class 3 ceases at 28 mph and uses a motor rating of 750 watts or less. An unlocked 33 mph speed is outside that three-class system. A 1500W figure is not the statutory motor input or motor rating unless the manufacturer identifies it as that figure, and this page does not. Washington, DC's motorized bicycle cannot be propelled faster than 20 mph on level ground. eBikeQuest does not assign the K20 a class.",
  certificationNotes:
    "The K20 page and the YVY warranty page checked on September 28, 2026 did not name UL 2271, UL 2849, or a certificate number.",
  limitations: [
    "The K20 page itself gives two speeds, 20 mph locked and 33 mph unlocked. A locked mode is not proof of the speed the bike can reach when unlocked.",
    "YVY's homepage titles also list a K20 Lite at 1000W and a K20 Pro at 2000W dual motor, plus C20 variants. Those titles were not opened as full specification tables, so they are not given profiles here.",
    "CPSC warnings 26-337 and 26-584 name Ridstar Q20, Q20 Lite, and Q20 Pro. They do not name YVY or the K20. YVY's K20 page still uses Ridstar's name for shipping and warranty. This guide does not collapse those facts into one product, and it does not offer a purchase link while the storefront points buyers at Ridstar.",
  ],
  retailerAvailability:
    "YVY sells from yvy-ebike.com. Retailer links are withheld. The K20 page tells buyers to contact Ridstar for warranty support, and CPSC currently tells owners of named Ridstar Q20-family bikes to stop using them.",
  comparableBrandSlugs: ["ridstar"],
  lineupNotes:
    "The K20 row uses the product page that was read in full. Lite and Pro are homepage titles only.",
  editorialNotes:
    "No YVY model page is published. The unlocked speed and the Ridstar warranty language make a shopping profile the wrong artifact.",
  sections: [
    {
      id: "what-yvy-is",
      heading: "What YVY publishes",
      sourceIds: ["yvy-home", "yvy-k20", "yvy-warranty"],
      paragraphs: [
        "YVY sells fat-tire electric bikes from yvy-ebike.com. The homepage titles checked on September 28, 2026 include a K20 at 1500W and 48V 20Ah, a K20 Lite at 1000W, a K20 Pro at 2000W dual motor, and C20 variants at similar power labels. The warranty page names Yaozhuo International Trading Limited in San Po Kong, Hong Kong, and gives yvy-ebike.service@outlook.com.",
        "The K20 product page does not stay inside that company name. It says Ridstar is proud to offer shipping and tells buyers to email service@ridstar.com. It also says the Ridstar warranty is only for customers who order from ridstar.com.",
      ],
    },
    {
      id: "k20-specs",
      heading: "What the K20 page lists",
      sourceIds: ["yvy-k20"],
      paragraphs: [
        "The K20 page lists a 1500W motor, a 48V/20Ah battery, a max speed of 20 mph locked and 33 mph unlocked, a max range of 50 miles, hydraulic dual brakes in one bullet and dual shock absorption in the body, 20×4.0 tires, and a recommended height of 5 feet 4 inches to 6 feet 4 inches. A separate bullet on an older K20 layout still visible in the page text lists a 330 lb max load, a Shimano 7-speed system, and a 4–6 hour charge. Where the page shows two phrasings, both are the page's, and this guide does not merge them into one unstated spec.",
        "The page says the unlocked speed is 33 mph. That is the manufacturer's unlocked figure. It is not an eBikeQuest road test.",
      ],
    },
    {
      id: "ridstar-limit",
      heading: "What the Ridstar warnings do not say",
      sourceIds: ["cpsc-ridstar-fire", "cpsc-ridstar-crash", "yvy-k20"],
      paragraphs: [
        "CPSC warning 26-337 names Ridstar Q20 and Q20 Pro batteries and wires. Warning 26-584 names Ridstar Q20 and Q20 Lite front wheels. Neither warning names YVY or the K20. The manufacturer on the warnings is Huizhou Xingqishi Sporting Goods Co., Ltd. YVY's warranty page names Yaozhuo International Trading Limited. This guide does not declare those companies to be the same.",
        "What YVY's own K20 page does say is that warranty support on that site is Ridstar's, and that Ridstar's warranty applies to ridstar.com orders. A buyer should read the Ridstar safety guide before treating a YVY checkout as unrelated to that brand. This page still does not extend a CPSC model list past the models CPSC named.",
      ],
    },
    {
      id: "where-to-ride",
      heading: "Where can you ride it?",
      sourceIds: ["yvy-k20", "va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
      paragraphs: [
        "An unlocked 33 mph speed is outside Class 3 in Virginia and Maryland, both of which cease class-three pedal assistance at 28 mph, and it is above the 20 mph motorized-bicycle cap in Washington, DC. A locked 20 mph mode is the other figure on the same page. The page does not say the unlock is unavailable to the owner. Trail policies written for Class 1, 2, or 3 are not permission for the unlocked bike.",
        "The 1500W motor figure is not identified on the page as the motor input Virginia uses or the motor rating Maryland uses. Peak and nominal are not words the K20 page used in the passage that was read. The wattage is left as 1500W, and the class is left open.",
      ],
    },
  ],
  lineup: [
    {
      id: "k20",
      name: "K20",
      riderFit: "Fat-tire bike on the K20 product page",
      distinction: "1500W, 48V/20Ah, 20 mph locked and 33 mph unlocked. No public model page.",
      sourceId: "yvy-k20",
    },
    {
      id: "k20-lite",
      name: "K20 Lite",
      riderFit: "Named on the YVY homepage",
      distinction: "Homepage title says 1000W. A full specification table was not the source for this row.",
      sourceId: "yvy-home",
    },
    {
      id: "k20-pro",
      name: "K20 Pro",
      riderFit: "Named on the YVY homepage",
      distinction: "Homepage title says 2000W dual motor. A full specification table was not the source for this row.",
      sourceId: "yvy-home",
    },
  ],
  faq: [
    {
      question: "Did CPSC warn about the YVY K20?",
      answer:
        "The two 2026 CPSC warnings checked for this guide name Ridstar Q20, Q20 Lite, and Q20 Pro. They do not name the YVY K20. YVY's K20 page still sends warranty and shipping questions to Ridstar.",
    },
    {
      question: "Why is there no purchase link?",
      answer:
        "The K20 page tells buyers that Ridstar handles warranty for ridstar.com orders and uses Ridstar's name for shipping. CPSC's current guidance for the named Ridstar models is to stop using them. This page does not send a buyer into that storefront.",
    },
  ],
  safetyNotices: [
    {
      id: "yvy-ridstar-desk",
      severity: "warning",
      noticeType: "use-caution",
      commerceRestriction: "do-not-promote",
      headline: "YVY's K20 page sends warranty and shipping questions to Ridstar.",
      summary:
        "The K20 page says Ridstar handles shipping questions and that the Ridstar warranty applies only to ridstar.com orders. CPSC warnings 26-337 and 26-584 name Ridstar Q20-family bikes and do not name the K20. eBikeQuest does not offer a purchase link on this page. The unlocked speed on the K20 page is 33 mph, which is outside the 28 mph class-three cutoff in Virginia and Maryland.",
      sourceId: "yvy-k20",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-yvy", "cpsc-ridstar-fire", "cpsc-ridstar-crash"],
    finding:
      "CPSC recall search checked September 28, 2026 for the title YVY; no matching notice returned at that check. The same day's check of warnings 26-337 and 26-584 found no YVY model names. That is not a clearance of YVY products.",
  },
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "yvy-home",
      title: "YVY homepage",
      url: "https://yvy-ebike.com/",
      publisher: "YVY",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "yvy-k20",
      title: "YVY K20 product page",
      url: "https://yvy-ebike.com/products/yvy-k20-1500w-fat-tire-electric-bikes",
      publisher: "YVY",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "yvy-warranty",
      title: "YVY warranty page",
      url: "https://yvy-ebike.com/pages/warranty",
      publisher: "YVY",
      role: "manufacturer",
      accessedAt,
    },
    {
      id: "cpsc-ridstar-fire",
      title: "CPSC warning 26-337: Ridstar Q20 and Q20 Pro fire hazard",
      url: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Immediately-Stop-Using-Ridstar-E-Bikes-Due-to-Fire-Hazard-Risk-of-Serious-Injury-or-Death",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
    },
    {
      id: "cpsc-ridstar-crash",
      title: "CPSC warning 26-584: Ridstar Q20 and Q20 Lite crash hazard",
      url: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Ridstar-E-Bikes-Immediately-Due-to-Crash-Hazard-Risk-of-Serious-Injury-or-Death",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
    },
    {
      id: "cpsc-yvy",
      title: "CPSC recall search for YVY",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=YVY",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned an empty list on September 28, 2026.",
    },
  ],
};
