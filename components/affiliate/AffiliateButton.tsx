import { cn } from "@/lib/utils/cn";
import { resolveRetailerLabel } from "@/lib/affiliate/links";
import type { RetailerLinkLabel } from "@/lib/affiliate/links";
import { OutboundRetailerLink } from "./OutboundRetailerLink";

interface AffiliateButtonProps {
  href: string;
  isAffiliate?: boolean;
  label?: RetailerLinkLabel | string;
  className?: string;
}

/**
 * Transparent CTA for retailer or affiliate destinations.
 * Uses direct outbound URLs — no cloaking or internal redirect routes.
 */
export function AffiliateButton({
  href,
  isAffiliate = false,
  label,
  className,
}: AffiliateButtonProps) {
  const text = resolveRetailerLabel(href, label);

  return (
    <OutboundRetailerLink
      href={href}
      isAffiliate={isAffiliate}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-primary)_18%,transparent)] bg-surface-raised px-4 py-2.5 text-body-sm font-medium text-text-primary transition-colors hover:bg-surface-sunken focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className,
      )}
      aria-label={text}
    >
      {text}
    </OutboundRetailerLink>
  );
}
