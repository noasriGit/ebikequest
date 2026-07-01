import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type AffiliateDisclosureVariant = "page" | "compact" | "inline";

interface AffiliateDisclosureProps {
  variant?: AffiliateDisclosureVariant;
  className?: string;
}

const variantStyles: Record<AffiliateDisclosureVariant, string> = {
  page: "rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] bg-surface-sunken p-5 text-body-md text-text-secondary",
  compact:
    "rounded-[var(--radius-sm)] border border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] bg-surface-sunken px-4 py-3 text-body-sm text-text-muted",
  inline: "text-body-sm text-text-muted",
};

export function AffiliateDisclosure({
  variant = "page",
  className,
}: AffiliateDisclosureProps) {
  return (
    <aside
      className={cn(variantStyles[variant], className)}
      aria-label="Affiliate disclosure"
    >
      {variant === "inline" ? (
        <p>
          eBikeQuest may earn commissions from qualifying purchases through affiliate links.{" "}
          <Link href="/affiliate-disclosure" className="link-editorial">
            Affiliate disclosure
          </Link>
        </p>
      ) : (
        <>
          <p className={variant === "page" ? "font-medium text-text-primary" : undefined}>
            Affiliate disclosure
          </p>
          <p className={variant === "page" ? "mt-2" : "mt-1"}>
            eBikeQuest may earn commissions from qualifying purchases made through affiliate
            links on this page. Some links may be Amazon Associates links. Affiliate relationships
            do not control our editorial recommendations.
          </p>
          {variant === "page" ? (
            <p className="mt-2">
              See our full{" "}
              <Link href="/affiliate-disclosure" className="link-editorial">
                affiliate disclosure
              </Link>{" "}
              for more detail.
            </p>
          ) : null}
        </>
      )}
    </aside>
  );
}
