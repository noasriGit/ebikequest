export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "Trails", href: "/trails" },
  { label: "Guides", href: "/guides" },
  { label: "Laws", href: "/laws" },
  { label: "About", href: "/about" },
];

export const footerExploreNav: NavItem[] = [
  { label: "Trails", href: "/trails" },
  { label: "Guides", href: "/guides" },
  { label: "Laws", href: "/laws" },
  { label: "About", href: "/about" },
  { label: "Suggest a Trail", href: "/suggest-trail" },
];

export const footerTrustNav: NavItem[] = [
  { label: "Editorial Standards", href: "/editorial-standards" },
  { label: "About", href: "/about" },
  { label: "Image Credits", href: "/image-credits" },
];

export const footerLegalNav: NavItem[] = [
  { label: "Accessibility", href: "/accessibility" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
