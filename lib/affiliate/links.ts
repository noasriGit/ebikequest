import { AFFILIATE_LINK_REL, EXTERNAL_LINK_REL } from "./constants";

export function getOutboundRel(isAffiliate: boolean): string {
  return isAffiliate ? AFFILIATE_LINK_REL : EXTERNAL_LINK_REL;
}

export function isAmazonUrl(href: string): boolean {
  try {
    const host = new URL(href).hostname.toLowerCase();
    return host.includes("amazon.") || host === "amzn.to" || host.endsWith(".amzn.to");
  } catch {
    return false;
  }
}

export type RetailerLinkLabel = "check-price-amazon" | "view-amazon" | "view-retailer";

const RETAILER_LABELS: Record<RetailerLinkLabel, string> = {
  "check-price-amazon": "Check price on Amazon",
  "view-amazon": "View on Amazon",
  "view-retailer": "View at retailer",
};

export function getRetailerLinkLabel(label: RetailerLinkLabel): string {
  return RETAILER_LABELS[label];
}

export function resolveRetailerLabel(
  href: string,
  label?: RetailerLinkLabel | string,
): string {
  if (typeof label === "string" && !(label in RETAILER_LABELS)) {
    return label;
  }
  const key =
    (label as RetailerLinkLabel | undefined) ??
    (isAmazonUrl(href) ? "view-amazon" : "view-retailer");
  return RETAILER_LABELS[key];
}
