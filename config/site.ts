function canonicalSiteUrl(url: string): string {
  const parsed = new URL(url);
  if (parsed.hostname === "ebikequest.com") {
    parsed.hostname = "www.ebikequest.com";
  }
  return parsed.toString().replace(/\/$/, "");
}

export const siteConfig = {
  name: "eBikeQuest",
  tagline: "Find the right e-bike. Know where you can ride it.",
  description:
    "Research e-bikes against class rules, state laws, and trail access. Independent reporting for riders in Virginia, Maryland, and Washington DC.",
  url: canonicalSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ebikequest.com"),
  helpEmail: "help@ebikequest.com",
  locale: "en-US",
} as const;

export type PlatformCategoryStatus = "live" | "coming-soon";

export interface PlatformCategory {
  id: string;
  label: string;
  description: string;
  href?: string;
  status: PlatformCategoryStatus;
}

export const PLATFORM_CATEGORIES: PlatformCategory[] = [
  {
    id: "ebikes",
    label: "E-Bikes",
    description: "Sourced model profiles and class notes",
    href: "/ebikes",
    status: "live",
  },
  {
    id: "brands",
    label: "Brands",
    description: "Manufacturers with official sources",
    href: "/brands",
    status: "live",
  },
  {
    id: "buying-guides",
    label: "Buying Guides",
    description: "Purchase decisions tied to where you ride",
    href: "/buying-guides",
    status: "live",
  },
  {
    id: "trails",
    label: "Trails",
    description: "E-bike-friendly trails and routes",
    href: "/trails",
    status: "live",
  },
  {
    id: "guides",
    label: "Guides",
    description: "Reference guides for riders",
    href: "/guides",
    status: "live",
  },
  {
    id: "laws",
    label: "Laws",
    description: "State and local e-bike regulations",
    href: "/laws",
    status: "live",
  },
  {
    id: "shops",
    label: "Shops",
    description: "E-bike retailers and dealers",
    status: "coming-soon",
  },
  {
    id: "rentals",
    label: "Rentals",
    description: "E-bike rental locations",
    status: "coming-soon",
  },
  {
    id: "repairs",
    label: "Repairs",
    description: "Service and repair shops",
    status: "coming-soon",
  },
];
