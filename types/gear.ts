import type { ContentBase } from "./content";
import type { AffiliateLink } from "./commerce";

export type { AffiliateLink, RetailerType } from "./commerce";

/**
 * Future-ready types for e-bike gear and product recommendation content.
 * Public product routes should not launch until pages include substantial
 * original editorial content — not scraped retailer data.
 */
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
