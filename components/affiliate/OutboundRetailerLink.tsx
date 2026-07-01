import { cn } from "@/lib/utils/cn";
import { getOutboundRel, resolveRetailerLabel } from "@/lib/affiliate/links";
import type { RetailerLinkLabel } from "@/lib/affiliate/links";

interface OutboundRetailerLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: React.ReactNode;
  /** When true, uses rel="sponsored noopener noreferrer" */
  isAffiliate?: boolean;
  label?: RetailerLinkLabel | string;
}

/**
 * External retailer or affiliate link. Opens in a new tab with appropriate rel values.
 * Do not route affiliate URLs through internal redirect or tracking paths.
 */
export function OutboundRetailerLink({
  href,
  children,
  isAffiliate = false,
  label,
  className,
  ...props
}: OutboundRetailerLinkProps) {
  const text = children ?? resolveRetailerLabel(href, label);

  return (
    <a
      href={href}
      target="_blank"
      rel={getOutboundRel(isAffiliate)}
      className={cn(className)}
      {...props}
    >
      {text}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}

/** Alias for OutboundRetailerLink */
export const RetailerLink = OutboundRetailerLink;
