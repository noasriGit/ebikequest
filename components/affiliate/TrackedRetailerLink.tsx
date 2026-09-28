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
  onClick,
  target,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  isAffiliate: boolean;
  brand?: string;
  model?: string;
  retailer: string;
  position: string;
}) {
  const pathname = usePathname();

  return (
    <a
      {...props}
      href={href}
      target={target ?? "_blank"}
      rel={getOutboundRel(isAffiliate)}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        const payload = buildRetailerClickEvent({
          brand,
          model,
          pagePath: pathname,
          retailer,
          position,
          affiliate: isAffiliate,
        });
        track("retailer_click", {
          brand: payload.brand,
          model: payload.model,
          page_path: payload.pagePath,
          retailer: payload.retailer,
          position: payload.position,
          affiliate: payload.affiliate,
        });
      }}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
