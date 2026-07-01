import { cn } from "@/lib/utils/cn";
import { AmazonAssociateDisclosure } from "./AmazonAssociateDisclosure";

interface AffiliateLinkNoticeProps {
  /** Show the required Amazon Associates sentence when links point to Amazon */
  showAmazonDisclosure?: boolean;
  className?: string;
}

/**
 * Compact notice for placement near product links, cards, or recommendation blocks.
 */
export function AffiliateLinkNotice({
  showAmazonDisclosure = false,
  className,
}: AffiliateLinkNoticeProps) {
  return (
    <div className={cn("space-y-2", className)} aria-label="Affiliate link notice">
      <p className="text-body-sm text-text-muted">
        Links may be affiliate links. eBikeQuest may earn a commission if you purchase through
        them, at no extra cost to you. Retailer prices, availability, and details can change —
        confirm on the retailer site before buying.
      </p>
      {showAmazonDisclosure ? <AmazonAssociateDisclosure variant="inline" /> : null}
    </div>
  );
}
