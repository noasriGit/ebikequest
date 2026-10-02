import type { BuyingGuide } from "@/types/commerce";

/**
 * Model-aware buying guides for /buying-guides/[slug].
 * The existing rider guide stays at /guides/buying-your-first-ebike.
 *
 * Intentionally not published:
 * - off-road e-bike roundup: current manufacturer pages in this cluster sell 35–50 mph
 *   off-road and e-moto products, and the site has no public dirt-bike taxonomy
 * - 50 mph adult roundups: same reason
 * - battery affiliate cluster: fitment and certification are not reliable enough yet
 * - Chinese-language query: no Chinese-language edition
 * - adult electric bikes under $100: not a product category this research can support
 */
const publishedAt = "2026-09-28";
const accessedAt = "2026-09-28";

const legalSources = [
  {
    id: "va-46-2-100",
    title: "Virginia Code § 46.2-100, electric power-assisted bicycle definition",
    url: "https://law.lis.virginia.gov/vacode/title46.2/chapter1/section46.2-100/",
    publisher: "Virginia Legislative Information System",
    role: "government" as const,
    accessedAt,
  },
  {
    id: "va-46-2-908-1",
    title: "Virginia Code § 46.2-908.1, age and helmet rules for Class 3",
    url: "https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-908.1/",
    publisher: "Virginia Legislative Information System",
    role: "government" as const,
    accessedAt: "2026-06-18",
  },
  {
    id: "md-11-117-1",
    title: "Maryland Transportation Article § 11-117.1",
    url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=11-117.1",
    publisher: "Maryland General Assembly",
    role: "government" as const,
    accessedAt,
  },
  {
    id: "md-21-1205-2",
    title: "Maryland Transportation Article § 21-1205.2, electric bicycle operation",
    url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=21-1205.2",
    publisher: "Maryland General Assembly",
    role: "government" as const,
    accessedAt: "2026-06-18",
  },
  {
    id: "md-21-1207-1",
    title: "Maryland Transportation Article § 21-1207.1, bicycle helmets",
    url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&enactments=false&section=21-1207.1",
    publisher: "Maryland General Assembly",
    role: "government" as const,
    accessedAt: "2026-06-18",
  },
  {
    id: "dc-50-2201-02",
    title: "D.C. Code § 50-2201.02, motorized bicycle definition",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-2201.02",
    publisher: "Council of the District of Columbia",
    role: "government" as const,
    accessedAt,
  },
  {
    id: "dc-50-1605",
    title: "D.C. Code § 50-1605, bicycle helmets",
    url: "https://code.dccouncil.gov/us/dc/council/code/sections/50-1605",
    publisher: "Council of the District of Columbia",
    role: "government" as const,
    accessedAt: "2026-06-18",
  },
  {
    id: "ddot-ebike-guide",
    title: "DDOT e-bike guide",
    url: "https://ddot.dc.gov/sites/default/files/dc/sites/ddot/E-Bike%20Guide_FINAL%20%281%29.pdf",
    publisher: "District Department of Transportation",
    role: "government" as const,
    accessedAt: "2026-06-18",
    note: "Cited from the DC law page's source list. Operator age is DDOT's reading, not a sentence in § 50-2201.02.",
  },
];

export const buyingGuides: BuyingGuide[] = [
  {
    id: "guide-electric-bikes-for-teens",
    slug: "electric-bikes-for-teens",
    title: "Electric bikes for teens",
    seo: { title: "Electric bikes for teens" },
    description:
      "How to choose an e-bike for a teenager using age rules, class, helmet law, and assisted speed in Virginia, Maryland, and Washington, DC. High-speed and stop-use bikes are not recommendations.",
    decision:
      "Choose a class-legal bike the teenager is old enough to operate, with a speed the local statute actually allows, before looking at a brand or a price.",
    status: "published",
    researchStatus: "editorially-reviewed",
    publishedAt,
    updatedAt: accessedAt,
    lastVerifiedAt: accessedAt,
    handsOnTested: false,
    jurisdictions: ["virginia", "maryland", "washington-dc"],
    relatedGuideSlugs: [
      "buying-your-first-ebike",
      "ebike-classes-explained",
      "ebike-regulations-overview",
      "where-can-you-ride-an-ebike",
    ],
    relatedBrandSlugs: ["jasion", "ridstar", "yozma", "qlife"],
    relatedModelIds: ["model-qlife-spark"],
    sources: [
      ...legalSources,
      {
        id: "jasion-collection",
        title: "Jasion electric bike collection",
        url: "https://www.jasionbike.com/collections/electric-bike",
        publisher: "Jasion",
        role: "manufacturer",
        accessedAt,
      },
      {
        id: "qlife-spark",
        title: "Qlife Spark product page",
        url: "https://www.qlifebike.com/products/spark-moped-style-e-bike",
        publisher: "Qlife",
        role: "manufacturer",
        accessedAt,
      },
      {
        id: "yozma-in10",
        title: "Yozma IN 10 product page",
        url: "https://yozmasport.com/products/in-10",
        publisher: "Yozma",
        role: "manufacturer",
        accessedAt,
      },
      {
        id: "cpsc-ridstar-fire",
        title: "CPSC warning 26-337",
        url: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Immediately-Stop-Using-Ridstar-E-Bikes-Due-to-Fire-Hazard-Risk-of-Serious-Injury-or-Death",
        publisher: "U.S. Consumer Product Safety Commission",
        role: "regulator",
        accessedAt,
      },
      {
        id: "cpsc-ridstar-crash",
        title: "CPSC warning 26-584",
        url: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Ridstar-E-Bikes-Immediately-Due-to-Crash-Hazard-Risk-of-Serious-Injury-or-Death",
        publisher: "U.S. Consumer Product Safety Commission",
        role: "regulator",
        accessedAt,
      },
    ],
    productClaims: [
      {
        id: "jasion-retrovolt-teen",
        statement:
          "Jasion's collection card for the RetroVolt Pro calls it a moped e-bike for teens and adults and lists 38 mph and 2000W.",
        sourceId: "jasion-collection",
      },
      {
        id: "spark-speed",
        statement: "Qlife's Spark page lists 35+ mph and also uses a Class 3 label.",
        sourceId: "qlife-spark",
      },
      {
        id: "yozma-offroad",
        statement: "Yozma's IN 10 page lists speeds up to 40 mph and says the bike is off-road only and not for public roads.",
        sourceId: "yozma-in10",
      },
    ],
    sections: [
      {
        id: "decision",
        heading: "Age and speed come first",
        sourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
        paragraphs: [
          "Start with the rider's age, the bike's assisted speed, and whether a throttle keeps working after 20 mph. A brand name and a sale price do not answer those questions. Virginia and Maryland use a three-class system. Class 1 and Class 2 stop motor assistance at 20 mph. Class 3 pedal assistance stops at 28 mph. Both states also cap the statutory motor figure at 750 watts: Virginia uses motor input, and Maryland uses motor rating. Washington, DC does not use those class names. Its motorized bicycle cannot be propelled faster than 20 mph on level ground.",
          "A product page that says 30 mph, 35 mph, or 40 mph is outside those cutoffs even when the page calls the bike an e-bike for teens. Peak wattage is a separate problem. A peak number is not the motor input or the motor rating in those statutes. If the page only publishes peak watts, the class is not settled. This guide does not rank bikes, and eBikeQuest has not ridden the models it cites.",
        ],
      },
      {
        id: "age-rules",
        heading: "Age and helmet rules in Virginia, Maryland, and DC",
        sourceIds: ["va-46-2-908-1", "md-21-1205-2", "md-21-1207-1", "dc-50-1605", "ddot-ebike-guide"],
        paragraphs: [
          "Virginia's Class 3 rule is the strict one for younger riders. A person under 14 may not operate a Class 3 electric power-assisted bicycle unless a person who is at least 18 is immediately supervising. Class 3 operators and passengers must wear a helmet. Localities may also require helmets for riders 14 and younger on other bicycles. Maryland requires a Class 3 operator on a public highway to be at least 16. A passenger under 16 is allowed only on a Class 3 bike designed to carry a passenger. Maryland also requires a helmet for bicycle riders and passengers under 16 on public roads, bicycle ways, and public property.",
          "Washington, DC is not a three-class city. DDOT's e-bike guide, which the District law page cites, says an operator of a motorized bicycle must be at least 16. That age line is the agency guide, not a sentence inside the motorized-bicycle definition itself. D.C. Code requires a helmet for operators and passengers under 16 on public roadways and bicycle paths. A 15-year-old is in a different legal position in each of these three places, and a Class 3 bike that is supervised in Virginia can still be the wrong category in the District because 28 mph does not fit the 20 mph motorized-bicycle cap.",
        ],
      },
      {
        id: "not-for-minors",
        heading: "Listings that are not teen recommendations",
        sourceIds: ["jasion-collection", "qlife-spark", "yozma-in10", "cpsc-ridstar-fire", "cpsc-ridstar-crash"],
        paragraphs: [
          "Jasion's own collection card for the RetroVolt Pro calls it a moped e-bike for teens and adults and lists 38 mph and 2000W. That speed is above the 28 mph class-three cutoff. Marketing the card to teens does not change the number. Qlife's Spark page lists 35+ mph and also says Class 3. eBikeQuest's Spark profile treats that combination as out of class. It is not a bike this guide offers to a minor. Yozma's IN 10 is an electric dirt bike listed up to 40 mph, and Yozma says it is off-road only and not for public roads. Those bikes stay off the public e-bike model catalog for that reason.",
          "Ridstar is a safety case, not a shopping case. CPSC warning 26-337 tells owners to stop using Q20 and Q20 Pro batteries because they can ignite. Warning 26-584 tells owners to stop using Q20 and Q20 Lite bikes because the front wheel can detach. Do not buy one of those models for a teenager, and do not keep using one that is already in the house. The Ridstar guide has the notice text and the primary links. There is no purchase button on it.",
        ],
      },
      {
        id: "fit-and-battery",
        heading: "Fit, brakes, and the battery in the house",
        sourceIds: ["va-46-2-100", "cpsc-ridstar-fire"],
        paragraphs: [
          "A teen bike still has to fit the rider. Seat height, standover, and handlebar reach matter more than a motor badge. If the manufacturer publishes a height range, use that range and then look at the bike, because a range on a product page is not a fitting. Brakes should match the speed the bike can actually reach. A mechanical brake specification on a bike listed above 28 mph is a reason to pause, not a detail to skip. This guide does not score brake hardware it has not measured.",
          "The battery stays in a home. CPSC's Ridstar fire warning is the concrete version of that risk: remove the pack and use a hazardous-waste process, and do not put a warned pack in the trash or ordinary recycling. For a bike that is not under a warning, still use the charger the manufacturer specifies, do not leave a swollen pack on a charger, and do not treat a missing UL 2271 or UL 2849 number as a certification. If the page does not name the standard, this site does not add one.",
        ],
      },
      {
        id: "how-to-use-the-catalog",
        heading: "How to use the rest of the site",
        sourceIds: ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"],
        paragraphs: [
          "Read the class guide, then the law page for the place the teenager will ride. A model profile states a class only when a manufacturer source and a class-definition statute both support it. If the class is unresolved, the model page will say so and will not list trails as compatible. That silence is intentional. An unresolved bike is not a trail recommendation.",
          "Brand guides for Jasion, Ridstar, Yozma, and Qlife are linked because they contain the cautions above, not because they are a teen shortlist. There is no best e-bike for teens on this page. eBikeQuest has not ridden a teen bike, and a ranking would pretend that it had.",
        ],
      },
    ],
  },
  {
    id: "guide-electric-bike-under-600",
    slug: "electric-bike-under-600",
    title: "Electric bikes under $600",
    seo: { title: "What an electric bike under $600 leaves out" },
    description:
      "What a sub-$600 e-bike listing tends to omit: assisted speed, motor input or motor rating, and a class that matches Virginia and Maryland. This is not a ranked list of bargains.",
    decision:
      "Decide whether the product page states assisted speed and a statutory wattage figure before treating a price under $600 as a complete bike.",
    status: "published",
    researchStatus: "editorially-reviewed",
    publishedAt,
    updatedAt: accessedAt,
    lastVerifiedAt: accessedAt,
    handsOnTested: false,
    jurisdictions: ["virginia", "maryland", "washington-dc"],
    relatedGuideSlugs: ["buying-your-first-ebike", "ebike-classes-explained"],
    relatedBrandSlugs: ["dttzh"],
    sources: [
      ...legalSources.filter((source) =>
        ["va-46-2-100", "md-11-117-1", "dc-50-2201-02"].includes(source.id),
      ),
      {
        id: "dttzh-a12",
        title: "DTTZH A12 product page",
        url: "https://www.dttzh.com/product-page/a12",
        publisher: "DTTZH",
        role: "manufacturer",
        accessedAt,
      },
      {
        id: "dttzh-f6",
        title: "DTTZH F6 product page",
        url: "https://www.dttzh.com/product-page/f6",
        publisher: "DTTZH",
        role: "manufacturer",
        accessedAt,
      },
    ],
    productClaims: [
      {
        id: "a12-peak",
        statement:
          "The DTTZH A12 page lists peak power of 1000W/2000W and does not list assisted speed in the specification block, while a disclaimer says the bike is Class 2 at 20 mph.",
        sourceId: "dttzh-a12",
      },
      {
        id: "f6-speeds",
        statement:
          "The DTTZH F6 page lists top speeds of 20–30 mph, 38 mph, and 50 mph on the same page as a Class 2 disclaimer.",
        sourceId: "dttzh-f6",
      },
    ],
    sections: [
      {
        id: "price-is-not-the-spec",
        heading: "The price is not the specification",
        sourceIds: ["dttzh-a12", "va-46-2-100", "md-11-117-1"],
        paragraphs: [
          "A price under $600 tells you what the seller hopes to charge on the day you look. It does not tell you the assisted speed, whether a throttle works past 20 mph, or which wattage figure the statute uses. Virginia defines an electric bicycle with a motor input of no more than 750 watts. Maryland uses a motor rating of 750 watts or less. Class 1 and Class 2 stop at 20 mph in both states. Class 3 pedal assistance stops at 28 mph. A peak-watt headline can sit on either side of those rules, and the headline alone does not say which.",
          "This page does not list a best bike under $600. eBikeQuest has not ridden a bike in this price band, and a ranking would be a list of products that happen to exist, not a test. Sale prices also move. Copying today's banner into a guide would make the page wrong the next time the seller changes it. The useful question is what the product page leaves out.",
        ],
      },
      {
        id: "dttzh-example",
        heading: "What one manufacturer page actually shows",
        sourceIds: ["dttzh-a12", "dttzh-f6"],
        paragraphs: [
          "DTTZH's A12 page is a concrete example, not a recommendation. The specification block lists peak power of 1000W or 2000W, 14-inch wheels, and batteries of 48V 15Ah or 52V 25Ah. It does not list an assisted speed. A warm tip says the 1000W version may ship as the current model or the previous one. The legal disclaimer says the vehicle is a Class 2 electric bicycle limited to 20 mph. The spec block and the disclaimer are both on the page, and they do not answer the same question. eBikeQuest does not confirm the Class 2 label from that page.",
          "The F6 page from the same seller shows why the brand name is not a class. One specification line lists 20–30 mph, 38 mph, and 50 mph, with peak power up to 5000W on the fastest column. The disclaimer is the same Class 2 sentence. A shopper who came for a bike under $600 can land on a family of products that the manufacturer also describes at 50 mph. The DTTZH guide keeps those columns apart and does not publish a model profile for them.",
        ],
      },
      {
        id: "tradeoffs",
        heading: "The tradeoffs that show up in this price band",
        sourceIds: ["dttzh-a12", "dttzh-f6", "dc-50-2201-02"],
        paragraphs: [
          "Warranty length is short on the pages checked here. DTTZH covers the frame, motor, battery, and controller for one year from warehouse shipment, other parts for three months, and not the tires. Labor is not described as paid. A one-year parts warranty is a different promise from a shop that will fix the bike. Certification numbers are another gap. The A12 and F6 pages did not name UL 2271 or UL 2849. Absence of those words is not proof of a hazard, and it is not a certification either.",
          "Washington, DC adds a speed problem even when a disclaimer says 20 mph. A motorized bicycle cannot be propelled faster than 20 mph on level ground. A page that also lists 38 mph or 50 mph in the same family is not a District commuter until the bike the buyer receives is actually limited, and the page has to say so in the specification, not only in a disclaimer that the table contradicts. Brakes, weight, and rider height still have to be read on the specific page. This guide does not fill those in from a different model.",
        ],
      },
      {
        id: "what-to-check",
        heading: "What to check before ordering",
        sourceIds: ["va-46-2-100", "md-11-117-1", "dttzh-a12"],
        paragraphs: [
          "Ask for four numbers in the seller's own words: assisted speed with the throttle, assisted speed while pedaling, the motor input or motor rating rather than peak, and the brake type. If any of those is missing, the class is not ready to use for a trail or a commute. Write down which version is in the box when one page covers two peak-power figures. Save the serial number if the seller tells you to.",
          "Then read the class guide and the law page for where you ride. A manufacturer link on a brand guide is a way to check the current page. It is not an endorsement, and it is not an Associates link. No Amazon search result is used here, because a generic search is not the bike.",
        ],
      },
    ],
  },
];
