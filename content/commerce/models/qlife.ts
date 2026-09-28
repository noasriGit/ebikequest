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
      "Qlife's Cityone Plus is a step-through commuter with a manufacturer Class 3 label, a listed 28 mph top speed, and a peak 1200W hub motor. Nominal wattage is not on the spec table, so the class stays unresolved.",
    status: "published",
    researchStatus: "editorially-reviewed",
    bikeType: "commuter",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: accessedAt,
    classification: {
      determinable: false,
      designation: "unclassified",
      sourceIds: ["cityone-page"],
      reasoning:
        "Qlife's spec table labels the Cityone Plus Class 3 and lists 28 mph, which is the Class 3 assist ceiling. The same table lists a peak 1200W hub motor and does not publish nominal watts. Virginia and Maryland definitions use a motor under 750 watts, so the Class 3 label is not confirmed from this page.",
    },
    officialSources: [cityoneSource, cpscSource],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "Peak 1200W hub",
        sourceId: "cityone-page",
        note: "Nominal wattage is not published on this page.",
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
          "Qlife labels the Cityone Plus Class 3 at 28 mph and also lists a peak 1200W motor without a nominal wattage. Confirm the frame label and the motor's rated watts before treating it as a Class 3 e-bike. No Qlife CPSC recall was found on September 28, 2026.",
        severity: "caution",
        sourceId: "cityone-page",
        commerceRestriction: "caution",
      },
    ],
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
      sourceIds: ["spark-page"],
      reasoning:
        "The Spark page says Class 3 and lists a top speed of 35+ mph. Class 3 assist stops at 28 mph. The advertised speed is outside Class 1, Class 2, and Class 3, whatever the page's class label says. The motor is listed as peak 1800W, and nominal wattage is not on the spec table.",
    },
    officialSources: [sparkSource, cpscSource],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "Peak 1800W",
        sourceId: "spark-page",
        note: "Nominal wattage is not published on this page.",
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
          "Qlife lists the Spark at 35+ mph and also labels it Class 3. The speed figure puts it outside the three-class e-bike system. No Qlife CPSC stop-use warning was found on September 28, 2026.",
        severity: "caution",
        sourceId: "spark-page",
        commerceRestriction: "caution",
      },
    ],
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
