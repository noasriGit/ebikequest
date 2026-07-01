import { AMAZON_ASSOCIATE_DISCLOSURE } from "@/lib/affiliate/constants";
import { cn } from "@/lib/utils/cn";

type AmazonAssociateDisclosureVariant = "page" | "compact" | "inline";

interface AmazonAssociateDisclosureProps {
  variant?: AmazonAssociateDisclosureVariant;
  className?: string;
}

const variantStyles: Record<AmazonAssociateDisclosureVariant, string> = {
  page: "rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] bg-surface-sunken p-5 text-body-md text-text-secondary",
  compact:
    "rounded-[var(--radius-sm)] border border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] bg-surface-sunken px-4 py-3 text-body-sm text-text-muted",
  inline: "text-body-sm text-text-muted italic",
};

export function AmazonAssociateDisclosure({
  variant = "compact",
  className,
}: AmazonAssociateDisclosureProps) {
  return (
    <p
      className={cn(variantStyles[variant], className)}
      aria-label="Amazon Associates disclosure"
    >
      {AMAZON_ASSOCIATE_DISCLOSURE}
    </p>
  );
}
