export const siteConfig = {
  name: "eBikeQuest",
  tagline: "Everything E-Bike. One Quest.",
  description:
    "National e-bike discovery platform for trails, laws, guides, shops, rentals, and more. Launching in Virginia, Maryland, and Washington DC.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ebikequest.com",
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
  {
    id: "events",
    label: "Events",
    description: "Rides, demos, and meetups",
    status: "coming-soon",
  },
  {
    id: "reviews",
    label: "Reviews",
    description: "Community ratings and reviews",
    status: "coming-soon",
  },
  {
    id: "news",
    label: "News",
    description: "Industry and platform updates",
    status: "coming-soon",
  },
];
