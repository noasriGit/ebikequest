import type { ContentBase } from "./content";

/**
 * Future-ready types for e-bike gear and product recommendation content.
 * Public product routes should not launch until pages include substantial
 * original editorial content — not scraped retailer data.
 */
export type RetailerType = "amazon" | "retailer" | "brand";

export interface AffiliateLink {
  href: string;
  retailer: RetailerType;
  isAffiliate: boolean;
  /** Button or inline link label, e.g. "View on Amazon" */
  label?: string;
  /** Amazon Associate tag — apply only after program approval */
  associateTag?: string;
}

export interface GearRecommendation extends ContentBase {
  category?: "ebike" | "battery" | "helmet" | "accessory" | "component";
  /** Must be true before copy claims hands-on testing or a formal review */
  handsOnTested?: boolean;
  affiliateLinks?: AffiliateLink[];
  /**
   * Do not store scraped Amazon prices, star ratings, review counts,
   * customer quotes, or copied product descriptions in content files.
   */
}
