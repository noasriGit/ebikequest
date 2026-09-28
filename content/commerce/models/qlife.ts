import type { EbikeModel } from "@/types/commerce";

const accessedAt = "2026-09-28";

const cityoneSource = {
  id: "cityone-page",
  title: "Qlife Cityone Plus product page",
  url: "https://www.qlifebike.com/products/cityone-2-0-commute-electric-bike",
  publisher: "Qlife",
  role: "manufacturer" as const,
  accessedAt,
};

const sparkSource = {
  id: "spark-page",
  title: "Qlife Spark 20×4.0 product page",
  url: "https://www.qlifebike.com/products/spark-moped-style-e-bike",
  publisher: "Qlife",
  role: "manufacturer" as const,
  accessedAt,
};

const cpscSource = {
  id: "cpsc-qlife",
  title: "CPSC recall search for Qlife",
  url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Qlife",
  publisher: "U.S. Consumer Product Safety Commission",
  role: "regulator" as const,
  accessedAt,
  note: "No matching Qlife notice on September 28, 2026.",
};

export const qlifeModels: EbikeModel[] = [
  {
    id: "model-qlife-cityone-plus",
    brandSlug: "qlife",
    slug: "cityone-plus",
    name: "Cityone Plus",
    description:
      "Qlife labels the Cityone Plus Class 3 at 28 mph with a peak 1200W hub motor. The page omits motor-input and rating figures, so eBikeQuest leaves the class unresolved.",
    status: "published",
    researchStatus: "editorially-reviewed",
    bikeType: "commuter",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: accessedAt,
    classification: {
      determinable: false,
      designation: "unclassified",
      manufacturerLabel: "Class 3",
      manufacturerLabelSourceId: "cityone-page",
      sourceIds: ["cityone-page", "va-46-2-100", "md-11-117-1"],
      reasoning:
        "Qlife's spec table labels the Cityone Plus Class 3 and lists 28 mph. Virginia defines an electric power-assisted bicycle as a motor input of no more than 750 watts, and class three pedal assistance ceases at 28 mph. Maryland requires a motor rating of 750 watts or less, and Class 3 assistance ceases at 28 mph. Qlife publishes peak motor wattage, Peak 1200W, and does not provide the motor-input or motor-rating figure those statutes use. eBikeQuest does not independently confirm the Class 3 label from that page.",
    },
    officialSources: [cityoneSource, cpscSource],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "Peak 1200W hub",
        sourceId: "cityone-page",
        note: "Peak output is published. The page does not give the motor input Virginia uses or the motor rating Maryland uses.",
      },
      {
        id: "speed",
        key: "assisted-speed",
        label: "Listed top speed",
        value: "28 mph",
        sourceId: "cityone-page",
      },
      {
        id: "battery",
        key: "battery",
        label: "Battery",
        value: "48V 15Ah",
        sourceId: "cityone-page",
      },
      {
        id: "charge",
        key: "other",
        label: "Charge time",
        value: "6–7 hours",
        sourceId: "cityone-page",
        note: "Charger listed as 54.6V / 2A.",
      },
      {
        id: "weight",
        key: "weight",
        label: "Bike weight",
        value: "70.55 lb",
        sourceId: "cityone-page",
      },
      {
        id: "tires",
        key: "tire-size",
        label: "Tires",
        value: "26 × 2.1 in",
        sourceId: "cityone-page",
      },
      {
        id: "brakes",
        key: "brakes",
        label: "Brakes",
        value: "Mechanical disc",
        sourceId: "cityone-page",
        note: "The spec table abbreviates this as \"Dis Brake.\" The page body says mechanical disc brakes.",
      },
      {
        id: "payload",
        key: "other",
        label: "Payload",
        value: "350 lb",
        sourceId: "cityone-page",
        note: "Rear rack listed separately at 120 lb.",
      },
      {
        id: "rider",
        key: "other",
        label: "Listed rider height",
        value: "5 ft 1 in–6 ft 3 in",
        sourceId: "cityone-page",
      },
      {
        id: "drivetrain",
        key: "other",
        label: "Gears",
        value: "7-speed",
        sourceId: "cityone-page",
      },
    ],
    safetyNotices: [
      {
        id: "class-unresolved",
        summary:
          "Qlife labels the Cityone Plus Class 3 at 28 mph and publishes a peak 1200W hub motor. The page does not publish a motor-input or motor-rating figure. The classification above explains why that leaves the Class 3 label unconfirmed.",
        severity: "caution",
        sourceId: "cityone-page",
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
        id: "cityone-manufacturer",
        retailer: "manufacturer",
        retailerName: "Qlife",
        href: "https://www.qlifebike.com/products/cityone-2-0-commute-electric-bike",
        isAffiliate: false,
        label: "View on Qlife's site",
      },
    ],
    relatedGuideSlugs: [
      "buying-your-first-ebike",
      "ebike-classes-explained",
      "where-can-you-ride-an-ebike",
      "are-class-3-ebikes-allowed-on-trails",
    ],
  },
  {
    id: "model-qlife-spark",
    brandSlug: "qlife",
    slug: "spark",
    name: "Spark 20×4.0",
    description:
      "Qlife's Spark 20×4.0 is a moped-style e-bike. The product page labels it Class 3 and lists a top speed of 35+ mph with a peak 1800W motor. That speed is outside Class 3.",
    status: "published",
    researchStatus: "editorially-reviewed",
    bikeType: "other",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: accessedAt,
    classification: {
      determinable: true,
      designation: "out-of-class",
      manufacturerLabel: "Class 3",
      manufacturerLabelSourceId: "spark-page",
      sourceIds: ["spark-page", "va-46-2-100", "md-11-117-1"],
      reasoning:
        "The Spark page says Class 3 and lists a top speed of 35+ mph. Virginia's class three motor assistance ceases at 28 mph. Maryland's Class 3 motor assistance ceases at 28 mph. The advertised speed is outside those definitions, whatever the page's class label says. The motor is listed as peak 1800W. Peak output is not the motor input in the Virginia statute or the motor rating in the Maryland statute, and neither figure is on the spec table.",
    },
    officialSources: [sparkSource, cpscSource],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "Peak 1800W",
        sourceId: "spark-page",
        note: "Peak output is published. Motor input and motor rating are not on this page.",
      },
      {
        id: "speed",
        key: "assisted-speed",
        label: "Listed top speed",
        value: "35+ mph",
        sourceId: "spark-page",
      },
      {
        id: "battery",
        key: "battery",
        label: "Battery",
        value: "48V 15.6Ah",
        sourceId: "spark-page",
        note: "The page also offers a dual-battery style. These figures are the spec table on the page, not a separate dual-battery sheet.",
      },
      {
        id: "charge",
        key: "other",
        label: "Charge time",
        value: "4–6 hours",
        sourceId: "spark-page",
        note: "Charger listed as 54.6V / 2A.",
      },
      {
        id: "weight",
        key: "weight",
        label: "Bike weight",
        value: "93 lb",
        sourceId: "spark-page",
      },
      {
        id: "tires",
        key: "tire-size",
        label: "Tires",
        value: "20 × 4.0 in",
        sourceId: "spark-page",
      },
      {
        id: "payload",
        key: "other",
        label: "Payload",
        value: "360 lb",
        sourceId: "spark-page",
      },
      {
        id: "rider",
        key: "other",
        label: "Listed rider height",
        value: "5 ft 3 in–6 ft 3 in",
        sourceId: "spark-page",
      },
      {
        id: "gears",
        key: "other",
        label: "Gears",
        value: "7-speed",
        sourceId: "spark-page",
      },
      {
        id: "certification",
        key: "certification",
        label: "Electrical safety claim",
        value: "Pack tested to UL 2271:2018; system certified to UL 2849:2022A",
        sourceId: "spark-page",
        note: "Qlife attributes both claims to TÜV Rheinland. A certificate number was not confirmed in a UL directory.",
      },
    ],
    safetyNotices: [
      {
        id: "above-class-3",
        summary:
          "Qlife lists the Spark at 35+ mph and also labels it Class 3. The classification above compares that listed speed with the Virginia and Maryland class definitions.",
        severity: "caution",
        sourceId: "spark-page",
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
        id: "spark-manufacturer",
        retailer: "manufacturer",
        retailerName: "Qlife",
        href: "https://www.qlifebike.com/products/spark-moped-style-e-bike",
        isAffiliate: false,
        label: "View on Qlife's site",
      },
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "where-can-you-ride-an-ebike",
      "are-class-3-ebikes-allowed-on-trails",
    ],
  },
];
