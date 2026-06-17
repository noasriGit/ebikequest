import Link from "next/link";
import type { LawComparisonRow } from "@/types/law";
import { getJurisdictionImage } from "@/config/images";
import { Button } from "@/components/design-system/Button/Button";
import { ContentImage } from "@/components/content/ContentImage";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils/cn";

export function LawTeaserCards({ rows }: { rows: LawComparisonRow[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((row) => (
        <FadeUp key={row.jurisdiction}>
          <Link
            href={`/laws/${row.jurisdiction}`}
            className={cn(
              "group block overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]",
              "bg-surface-raised shadow-[var(--shadow-xs)] transition hover:border-[color-mix(in_srgb,var(--brand-accent)_40%,transparent)] hover:shadow-[var(--shadow-md)]",
            )}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-surface-sunken">
              <ContentImage
                src={getJurisdictionImage(row.jurisdiction)}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.55)] to-transparent" />
              <h3 className="absolute bottom-3 left-3 font-display text-xl text-white">
                {row.jurisdictionName}
              </h3>
            </div>
            <div className="p-5">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-text-muted">Class 1–3</dt>
                  <dd className="font-medium text-text-primary">
                    {[row.class1Allowed, row.class2Allowed, row.class3Allowed]
                      .filter(
                        (v) =>
                          v.toLowerCase().includes("yes") || v.toLowerCase().includes("allow"),
                      )
                      .length}{" "}
                    / 3 allowed
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-text-muted">Trail access</dt>
                  <dd className="max-w-[60%] text-right font-medium text-text-primary">
                    {row.trailAccessSummary}
                  </dd>
                </div>
              </dl>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-accent">
                View laws →
              </span>
            </div>
          </Link>
        </FadeUp>
      ))}
    </div>
  );
}

export function LawTeaserSection({ rows }: { rows: LawComparisonRow[] }) {
  return (
    <div>
      <LawTeaserCards rows={rows} />
      <div className="mt-6">
        <Button href="/laws" variant="ghost">
          Compare all jurisdictions →
        </Button>
      </div>
    </div>
  );
}
