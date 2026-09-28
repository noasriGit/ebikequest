export interface RetailerClickEvent {
  brand: string;
  model: string;
  pagePath: string;
  retailer: string;
  position: string;
  affiliate: boolean;
}

/**
 * Event payload for a retailer click. Values are editorial labels only.
 * Do not add account ids, emails, query strings, or full outbound URLs.
 */
export function buildRetailerClickEvent(input: {
  brand?: string;
  model?: string;
  pagePath: string;
  retailer: string;
  position: string;
  affiliate: boolean;
}): RetailerClickEvent {
  const pagePath = input.pagePath.split("?")[0]?.split("#")[0] || "/";

  return {
    brand: input.brand?.trim() || "",
    model: input.model?.trim() || "",
    pagePath,
    retailer: input.retailer.trim(),
    position: input.position.trim(),
    affiliate: input.affiliate,
  };
}
