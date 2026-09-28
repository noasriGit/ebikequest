import type { EbikeModel } from "@/types/commerce";

const accessedAt = "2026-09-28";

export const wiredModels: EbikeModel[] = [
  {
    id: "model-wired-freedom",
    brandSlug: "wired",
    slug: "freedom",
    name: "Freedom",
    description:
      "Wired says the Freedom ships as Class 2 at 20 mph, with a display that can open an unrestricted mode above 35 mph, and lists 1500W continuous and 3200W peak. eBikeQuest does not confirm the Class 2 label.",
    status: "published",
    researchStatus: "editorially-reviewed",
    bikeType: "other",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: accessedAt,
    classification: {
      determinable: false,
      designation: "unclassified",
      manufacturerLabel: "Class 2",
      manufacturerLabelSourceId: "wired-freedom",
      sourceIds: ["wired-freedom", "va-46-2-100", "md-11-117-1"],
      reasoning:
        "Wired's Freedom page says the bike ships as Class 2 at 20 mph and can be set to Class 1, Class 3, or an unrestricted mode above 35 mph for off-road use. Virginia class three pedal assistance ceases at 28 mph, and an electric bicycle uses a motor input of no more than 750 watts. Maryland Class 3 ceases at 28 mph and uses a motor rating of 750 watts or less. The page lists 1500W continuous and 3200W peak. It does not publish the motor-input or motor-rating figure those statutes use, and it documents a mode outside the 28 mph cutoff. eBikeQuest does not independently confirm the Class 2 label.",
    },
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
        id: "cpsc-wired-freedom",
        title: "CPSC recall search for Wired Freedom",
        url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Wired%20Freedom",
        publisher: "U.S. Consumer Product Safety Commission",
        role: "regulator",
        accessedAt,
        note: "No matching Wired Freedom notice on September 28, 2026.",
      },
    ],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "60V 1500W continuous, 3200W peak",
        sourceId: "wired-freedom",
        note: "Continuous output is published. The page does not give the motor input Virginia uses or the motor rating Maryland uses.",
      },
      {
        id: "speed",
        key: "assisted-speed",
        label: "Listed speeds",
        value: "20 mph as shipped; 35+ mph unrestricted",
        sourceId: "wired-freedom",
        note: "The page says the bike ships as Class 2 and that unrestricted mode is for off-road use.",
      },
      {
        id: "battery",
        key: "battery",
        label: "Battery",
        value: "60V 20Ah front and 60V 15Ah rear, about 2100Wh",
        sourceId: "wired-freedom",
      },
      {
        id: "brakes",
        key: "brakes",
        label: "Brakes",
        value: "4-piston hydraulic, 203 mm rotors",
        sourceId: "wired-freedom",
      },
      {
        id: "weight",
        key: "weight",
        label: "Weight",
        value: "115 lb with both batteries; 87 lb without",
        sourceId: "wired-freedom",
      },
      {
        id: "tires",
        key: "tire-size",
        label: "Tires",
        value: "Kenda Krusade 26 × 4.0",
        sourceId: "wired-freedom",
      },
    ],
    safetyNotices: [
      {
        id: "freedom-unrestricted",
        severity: "caution",
        commerceRestriction: "caution",
        headline: "Unrestricted mode is listed above 35 mph.",
        summary:
          "Wired says unrestricted mode is 35+ mph and for off-road use, and that power performance bikes are prohibited on public roads in many states. The classification above explains why the Class 2 shipping label is not confirmed.",
        sourceId: "wired-freedom",
      },
    ],
    safetyReview: {
      checkedAt: accessedAt,
      sourceIds: ["cpsc-wired-freedom"],
      finding:
        "CPSC recall search checked September 28, 2026; no matching Wired Freedom notice returned at that check.",
    },
    retailerLinks: [
      {
        id: "wired-freedom-manufacturer",
        retailer: "manufacturer",
        retailerName: "Wired",
        href: "https://wiredebikes.com/products/wired-freedom",
        isAffiliate: false,
        label: "View on Wired's site",
      },
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "where-can-you-ride-an-ebike",
      "are-class-3-ebikes-allowed-on-trails",
    ],
  },
];
