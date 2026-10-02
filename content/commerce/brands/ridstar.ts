import type { Brand } from "@/types/commerce";

const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

export const ridstar: Brand = {
  id: "brand-ridstar",
  slug: "ridstar",
  name: "Ridstar",
  seo: { title: "Ridstar e-bike safety warning" },
  description:
    "CPSC has two 2026 product safety warnings for Ridstar Q20, Q20 Lite, and Q20 Pro bikes and batteries. This page states the current stop-use guidance and does not offer a purchase link.",
  website: "https://ridstar.net/",
  suitedFor:
    "Owners and shoppers who need the current CPSC warnings for the Ridstar Q20 family before they ride, store, sell, or buy one.",
  categories: ["other"],
  classSourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
  classConsiderations:
    "These warnings are about fire and wheel detachment, not about whether a Q20 meets a class definition. Virginia's electric bicycle definition uses a motor input of no more than 750 watts, and class three pedal assistance ceases at 28 mph. Maryland uses a motor rating of 750 watts or less, with the same speed cutoffs. Washington, DC's motorized bicycle cannot be propelled faster than 20 mph on level ground. A class label would not override a CPSC stop-use warning.",
  limitations: [
    "The warnings name the Q20, Q20 Lite, and Q20 Pro. They do not name every product that uses the Ridstar mark.",
    "CPSC identifies the manufacturer as Huizhou Xingqishi Sporting Goods Co., Ltd., of China. YVY's warranty page names a different company, Yaozhuo International Trading Limited. This guide does not treat those names as one legal entity.",
    "The March warning says the manufacturer refused an acceptable recall. The June warning says the manufacturer was unresponsive. There is no remedy program described on either notice.",
  ],
  retailerAvailability:
    "CPSC says the bikes were sold on Amazon.com, Ridstar.net, and Walmart.com, and the June warning also lists AliExpress.us. This page does not link to a retailer. A stop-use warning is not a shopping opportunity.",
  comparableBrandSlugs: ["yvy"],
  editorialNotes:
    "No Ridstar model profile is published. The public record here is the CPSC warnings, not a specification sheet.",
  sections: [
    {
      id: "what-the-warnings-say",
      heading: "What the warnings say",
      sourceIds: ["cpsc-ridstar-fire", "cpsc-ridstar-crash"],
      paragraphs: [
        "On March 19, 2026, CPSC published product safety warning 26-337 for Ridstar Q20 and Q20 Pro e-bikes. The hazard is that the batteries and wires can ignite. CPSC reports 11 fires, including one burn injury, five reports of smoke inhalation, and two reports of property damage totaling over $40,000. The consumer action is to remove the battery immediately and dispose of it through a local hazardous-waste process. Do not sell or give the batteries away.",
        "On June 25, 2026, CPSC published product safety warning 26-584 for Ridstar Q20 and Q20 Lite e-bikes. The front wheel can detach without warning. CPSC reports 32 detachment reports, including 31 injury reports such as concussions, broken bones, cuts, scrapes, and bruises. The consumer action is to stop using the e-bikes immediately and dispose of them. Do not sell or give them away. The June notice also says the Q20 batteries from the earlier warning must still go through hazardous-waste disposal.",
      ],
    },
    {
      id: "how-to-identify",
      heading: "How CPSC says to identify them",
      sourceIds: ["cpsc-ridstar-fire", "cpsc-ridstar-crash"],
      paragraphs: [
        "Both notices describe black e-bikes with the brand name Ridstar printed on the battery. The model number is on the purchase receipt: Q20 or Q20 Pro for the March warning, and Q20 or Q20 Lite for the June warning. The March notice lists sales on Amazon.com, Ridstar.net, and Walmart.com. The June notice adds AliExpress.us.",
        "The March notice says Huizhou Xingqishi Sporting Goods Co., Ltd., of China, refused to agree to an acceptable recall, and that the company objects to the press release. The June notice says that company has been unresponsive to requests for information or a recall. CPSC also says not to throw the lithium-ion battery in the trash, curbside recycling, or store battery-recycling boxes, and to ask a household hazardous-waste center before taking a defective pack there.",
      ],
    },
    {
      id: "yvy-name",
      heading: "YVY uses Ridstar's name on its own pages",
      sourceIds: ["yvy-k20", "yvy-warranty", "cpsc-ridstar-fire"],
      paragraphs: [
        "YVY's K20 product page says \"Ridstar is proud to offer\" shipping and tells buyers to email service@ridstar.com. The same page says the Ridstar warranty policy is only for orders from ridstar.com. YVY's own warranty page, checked the same day, names Yaozhuo International Trading Limited in Hong Kong and describes a one-year YVY parts warranty. Those are YVY's words. They are not a CPSC finding that the K20 is a warned Q20.",
        "CPSC's two warnings do not name YVY, the K20, the K20 Lite, or the K20 Pro. This page does not expand the warning to models CPSC did not name, and it does not clear them either. The YVY guide is separate.",
      ],
    },
  ],
  faq: [
    {
      question: "Is this a recall?",
      answer:
        "CPSC published two product safety warnings, numbered 26-337 and 26-584. The March warning says the manufacturer refused an acceptable recall. The June warning says the manufacturer was unresponsive. Neither notice describes a repair or refund program.",
    },
    {
      question: "Which Ridstar models are named?",
      answer:
        "The March 19, 2026 warning names the Q20 and Q20 Pro for a battery and wire fire hazard. The June 25, 2026 warning names the Q20 and Q20 Lite for a front wheel that can detach. The Q20 is named in both.",
    },
    {
      question: "Can I buy one from this page?",
      answer:
        "No. CPSC's current instruction is to stop using the named bikes and dispose of them, and to dispose of the warned batteries as hazardous waste. This page has no retailer link.",
    },
  ],
  safetyNotices: [
    {
      id: "ridstar-fire-26337",
      severity: "stop-use",
      noticeType: "warning",
      commerceRestriction: "do-not-promote",
      agency: "U.S. Consumer Product Safety Commission",
      effectiveDate: "2026-03-19",
      lastVerifiedAt: accessedAt,
      affectedModels: ["Q20", "Q20 Pro"],
      hazard: "The batteries and wires can ignite, posing a fire hazard.",
      recommendation:
        "Remove the battery immediately and dispose of it through a local hazardous-waste process. Do not sell or give the batteries away. Do not put them in the trash or ordinary recycling.",
      headline: "Stop using Ridstar Q20 and Q20 Pro batteries.",
      summary:
        "CPSC warning 26-337, dated March 19, 2026, says Ridstar Q20 and Q20 Pro batteries and wires can ignite. The agency reports 11 fires. It says the manufacturer refused an acceptable recall.",
      sourceId: "cpsc-ridstar-fire",
    },
    {
      id: "ridstar-crash-26584",
      severity: "stop-use",
      noticeType: "warning",
      commerceRestriction: "do-not-promote",
      agency: "U.S. Consumer Product Safety Commission",
      effectiveDate: "2026-06-25",
      lastVerifiedAt: accessedAt,
      affectedModels: ["Q20", "Q20 Lite"],
      hazard: "The front wheel can detach without warning, posing a crash hazard.",
      recommendation:
        "Stop using the e-bikes immediately and dispose of them. Do not sell or give them away. Q20 batteries covered by the earlier warning still need hazardous-waste disposal.",
      headline: "Stop using Ridstar Q20 and Q20 Lite bikes.",
      summary:
        "CPSC warning 26-584, dated June 25, 2026, says the front wheel on the Ridstar Q20 and Q20 Lite can detach. The agency reports 32 detachment reports, including 31 injury reports, and says the manufacturer has been unresponsive.",
      sourceId: "cpsc-ridstar-crash",
    },
  ],
  safetyReview: {
    checkedAt: accessedAt,
    sourceIds: ["cpsc-ridstar-fire", "cpsc-ridstar-crash", "cpsc-ridstar-recall-search"],
    finding:
      "CPSC warnings 26-337 and 26-584 were on cpsc.gov on September 28, 2026. A recall-title search for Ridstar on SaferProducts.gov that day returned no separate recall record. The empty search is not a clearance, and it does not replace the two warnings.",
  },
  status: "published",
  researchStatus: "editorially-reviewed",
  publishedAt,
  lastVerifiedAt: accessedAt,
  officialSources: [
    {
      id: "cpsc-ridstar-fire",
      title: "CPSC warning 26-337: Ridstar Q20 and Q20 Pro fire hazard",
      url: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Immediately-Stop-Using-Ridstar-E-Bikes-Due-to-Fire-Hazard-Risk-of-Serious-Injury-or-Death",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Product safety warning date March 19, 2026. Names Q20 and Q20 Pro.",
    },
    {
      id: "cpsc-ridstar-crash",
      title: "CPSC warning 26-584: Ridstar Q20 and Q20 Lite crash hazard",
      url: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Ridstar-E-Bikes-Immediately-Due-to-Crash-Hazard-Risk-of-Serious-Injury-or-Death",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Product safety warning date June 25, 2026. Names Q20 and Q20 Lite.",
    },
    {
      id: "cpsc-ridstar-recall-search",
      title: "CPSC recall-title search for Ridstar",
      url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Ridstar",
      publisher: "U.S. Consumer Product Safety Commission",
      role: "regulator",
      accessedAt,
      note: "Title search returned an empty list on September 28, 2026. The two warnings above are not recall records.",
    },
    {
      id: "yvy-k20",
      title: "YVY K20 product page",
      url: "https://yvy-ebike.com/products/yvy-k20-1500w-fat-tire-electric-bikes",
      publisher: "YVY",
      role: "manufacturer",
      accessedAt,
      note: "The page uses Ridstar's name for shipping and warranty contact. CPSC has not named the K20.",
    },
    {
      id: "yvy-warranty",
      title: "YVY warranty page",
      url: "https://yvy-ebike.com/pages/warranty",
      publisher: "YVY",
      role: "manufacturer",
      accessedAt,
    },
  ],
};
