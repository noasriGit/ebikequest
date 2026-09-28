import type { EbikeModel } from "@/types/commerce";

const accessedAt = "2026-09-28";

const in10Source = {
  id: "in10-page",
  title: "Yozma IN 10 product page",
  url: "https://yozmasport.com/products/in-10",
  publisher: "Yozma",
  role: "manufacturer" as const,
  accessedAt,
};

const in10ProSource = {
  id: "in10-pro-page",
  title: "Yozma IN 10 Pro product page",
  url: "https://yozmasport.com/products/in-10-pro",
  publisher: "Yozma",
  role: "manufacturer" as const,
  accessedAt,
};

const streetSource = {
  id: "yozma-street",
  title: "Yozma: are these dirt bikes street legal?",
  url: "https://yozmasport.com/blogs/ebike/are-yozma-electric-dirt-bikes-street-legal-what-you-should-know",
  publisher: "Yozma",
  role: "manufacturer" as const,
  accessedAt,
};

const cpscSource = {
  id: "cpsc-yozma",
  title: "CPSC recall search for Yozma",
  url: "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallTitle=Yozma",
  publisher: "U.S. Consumer Product Safety Commission",
  role: "regulator" as const,
  accessedAt,
  note: "No matching Yozma notice on September 28, 2026.",
};

export const yozmaModels: EbikeModel[] = [
  {
    id: "model-yozma-in-10",
    brandSlug: "yozma",
    slug: "in-10",
    name: "IN 10",
    description:
      "The Yozma IN 10 is an off-road electric dirt bike. Yozma says it is not permitted on public roads, lists a top speed up to 40 mph, and recommends riders from 3.94 to 5.9 feet who are at least 14.",
    status: "published",
    researchStatus: "editorially-reviewed",
    bikeType: "other",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: accessedAt,
    classification: {
      determinable: true,
      designation: "out-of-class",
      sourceIds: ["in10-page"],
      reasoning:
        "Yozma lists a top speed of 28–40 mph, with a third mode at 40 mph, and says the IN 10 is off-road only and not permitted on public roads. That speed is above the 28 mph Class 3 ceiling and the 20 mph Class 1 and Class 2 ceiling. The FAQ lists the motor as 1200W rated and 2600W peak, so the rated figure is also above the 750-watt e-bike definition.",
    },
    officialSources: [in10Source, streetSource, cpscSource],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "1200W rated / 2600W peak",
        sourceId: "in10-page",
        note: "The FAQ states both figures. The spec list says 2600W peak brushless.",
      },
      {
        id: "speed",
        key: "assisted-speed",
        label: "Listed top speed",
        value: "Up to 40 mph",
        sourceId: "in10-page",
        note: "FAQ modes are about 18, 24, and 40 mph. The spec list says 28–40 mph.",
      },
      {
        id: "battery",
        key: "battery",
        label: "Battery",
        value: "48V 23.4Ah",
        sourceId: "in10-page",
      },
      {
        id: "charge",
        key: "other",
        label: "Charge time",
        value: "5–6 hours",
        sourceId: "in10-page",
        note: "48V 5A charger. Claimed maximum range is 53 miles, with about 35 miles also stated.",
      },
      {
        id: "weight",
        key: "weight",
        label: "Bike weight",
        value: "121 lb",
        sourceId: "in10-page",
      },
      {
        id: "load",
        key: "other",
        label: "Maximum load",
        value: "265 lb",
        sourceId: "in10-page",
        note: "The safety block says 120 kg, which matches 265 lb.",
      },
      {
        id: "wheels",
        key: "wheel-size",
        label: "Wheels",
        value: "14 in front / 12 in rear",
        sourceId: "in10-page",
      },
      {
        id: "brakes",
        key: "brakes",
        label: "Brakes",
        value: "Hydraulic",
        sourceId: "in10-page",
      },
      {
        id: "rider",
        key: "other",
        label: "Listed rider height",
        value: "3.94–5.9 ft",
        sourceId: "in10-page",
        note: "Seat height listed at 28 in. Age 14 or older.",
      },
      {
        id: "use",
        key: "other",
        label: "Intended use",
        value: "Off-road only",
        sourceId: "in10-page",
      },
    ],
    safetyNotices: [
      {
        id: "off-road-only",
        summary:
          "Yozma says the IN 10 is for off-road use only and is not permitted on public roads. Riders should be 14 or older. No Yozma CPSC recall was found on September 28, 2026.",
        severity: "caution",
        sourceId: "in10-page",
        commerceRestriction: "caution",
      },
    ],
    retailerLinks: [
      {
        id: "in10-manufacturer",
        retailer: "manufacturer",
        retailerName: "Yozma",
        href: "https://yozmasport.com/products/in-10",
        isAffiliate: false,
        label: "View on Yozma's site",
      },
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "where-can-you-ride-an-ebike",
      "are-class-3-ebikes-allowed-on-trails",
    ],
  },
  {
    id: "model-yozma-in-10-pro",
    brandSlug: "yozma",
    slug: "in-10-pro",
    name: "IN 10 Pro",
    description:
      "The Yozma IN 10 Pro is the larger off-road dirt bike. Yozma lists a 50 mph top speed, a 60V 27Ah battery, and a 5500W peak motor, and says the bike is not permitted on public roads.",
    status: "published",
    researchStatus: "editorially-reviewed",
    bikeType: "other",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: accessedAt,
    classification: {
      determinable: true,
      designation: "out-of-class",
      sourceIds: ["in10-pro-page"],
      reasoning:
        "Yozma lists a 50 mph top speed and a 5500W peak motor, and says the IN 10 Pro is off-road only and not permitted on public roads. The FAQ also describes modes near 22, 34, and 47 mph. Every one of those figures is above the Class 3 ceiling of 28 mph.",
    },
    officialSources: [in10ProSource, streetSource, cpscSource],
    specifications: [
      {
        id: "motor",
        key: "motor",
        label: "Motor",
        value: "5500W peak brushless",
        sourceId: "in10-pro-page",
        note: "The FAQ calls it a mid-drive. A separate rated-wattage figure was not on the spec list.",
      },
      {
        id: "torque",
        key: "other",
        label: "Torque",
        value: "220 Nm",
        sourceId: "in10-pro-page",
      },
      {
        id: "speed",
        key: "assisted-speed",
        label: "Listed top speed",
        value: "50 mph",
        sourceId: "in10-pro-page",
        note: "The FAQ says three modes are about 22, 34, and 47 mph.",
      },
      {
        id: "battery",
        key: "battery",
        label: "Battery",
        value: "60V 27Ah",
        sourceId: "in10-pro-page",
        note: "FAQ says the pack is removable. The bike and battery may ship separately.",
      },
      {
        id: "charge",
        key: "other",
        label: "Charge time",
        value: "6–7 hours",
        sourceId: "in10-pro-page",
        note: "60V 5A charger. Claimed maximum range is 60 miles.",
      },
      {
        id: "weight",
        key: "weight",
        label: "Bike weight",
        value: "143 lb",
        sourceId: "in10-pro-page",
      },
      {
        id: "load",
        key: "other",
        label: "Maximum load",
        value: "330 lb on the spec list",
        sourceId: "in10-pro-page",
        note: "A safety-tips block on the same page says 120 kg. The two figures conflict.",
      },
      {
        id: "wheels",
        key: "wheel-size",
        label: "Wheels",
        value: "17 in front / 14 in rear",
        sourceId: "in10-pro-page",
      },
      {
        id: "brakes",
        key: "brakes",
        label: "Brakes",
        value: "Hydraulic",
        sourceId: "in10-pro-page",
      },
      {
        id: "rider",
        key: "other",
        label: "Listed rider height",
        value: "4.7–6.3 ft",
        sourceId: "in10-pro-page",
        note: "Seat height listed at 30.7 in. Age 14 or older. Three speeds plus reverse.",
      },
    ],
    safetyNotices: [
      {
        id: "off-road-only",
        summary:
          "Yozma says the IN 10 Pro is for off-road use only and is not permitted on public roads. The same page lists 50 mph and also a 330-pound load that conflicts with a 120 kg safety note. No Yozma CPSC recall was found on September 28, 2026.",
        severity: "caution",
        sourceId: "in10-pro-page",
        commerceRestriction: "caution",
      },
    ],
    retailerLinks: [
      {
        id: "in10-pro-manufacturer",
        retailer: "manufacturer",
        retailerName: "Yozma",
        href: "https://yozmasport.com/products/in-10-pro",
        isAffiliate: false,
        label: "View on Yozma's site",
      },
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "where-can-you-ride-an-ebike",
      "are-class-3-ebikes-allowed-on-trails",
    ],
  },
];
