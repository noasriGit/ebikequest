"use client";

import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";
import { buildRetailerClickEvent } from "@/lib/analytics/retailer-click";
import { getOutboundRel } from "@/lib/affiliate/links";

export function TrackedRetailerLink({
  href,
  isAffiliate,
  brand,
  model,
  retailer,
  position,
  className,
  children,
}: {
  href: string;
  isAffiliate: boolean;
  brand?: string;
  model?: string;
  retailer: string;
  position: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <a
      href={href}
      target="_blank"
      rel={getOutboundRel(isAffiliate)}
      className={className}
      onClick={() => {
        const event = buildRetailerClickEvent({
          brand,
          model,
          pagePath: pathname,
          retailer,
          position,
          affiliate: isAffiliate,
        });
        track("retailer_click", {
          brand: event.brand,
          model: event.model,
          page_path: event.pagePath,
          retailer: event.retailer,
          position: event.position,
          affiliate: event.affiliate,
        });
      }}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
