export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "E-Bikes", href: "/ebikes" },
  { label: "Brands", href: "/brands" },
  { label: "Buying Guides", href: "/buying-guides" },
  { label: "Trails", href: "/trails" },
  { label: "Laws", href: "/laws" },
];

export const footerResearchNav: NavItem[] = [
  { label: "E-Bikes", href: "/ebikes" },
  { label: "Brands", href: "/brands" },
  { label: "Buying Guides", href: "/buying-guides" },
  { label: "Safety", href: "/safety" },
  { label: "Guides", href: "/guides" },
];

export const footerRideNav: NavItem[] = [
  { label: "Trails", href: "/trails" },
  { label: "Laws", href: "/laws" },
  { label: "Suggest a Trail", href: "/suggest-trail" },
  { label: "Sitemap", href: "/sitemap" },
];

export const footerTrustNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Editorial Standards", href: "/editorial-standards" },
  { label: "Image Credits", href: "/image-credits" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export const footerLegalNav: NavItem[] = [
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const mobileSecondaryNav: NavItem[] = [
  { label: "Safety", href: "/safety" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Editorial Standards", href: "/editorial-standards" },
];
