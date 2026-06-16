import Link from "next/link";
import { PLATFORM_CATEGORIES } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils/cn";

export function PlatformCategoryGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-4",
        compact ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {PLATFORM_CATEGORIES.map((category) => {
        const isLive = category.status === "live";
        const content = (
          <>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-zinc-900">{category.label}</h3>
              <Badge variant={isLive ? "live" : "soon"}>
                {isLive ? "Live" : "Coming Soon"}
              </Badge>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{category.description}</p>
          </>
        );

        if (isLive && category.href) {
          return (
            <Link
              key={category.id}
              href={category.href}
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
            >
              {content}
            </Link>
          );
        }

        return (
          <div
            key={category.id}
            className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-5 opacity-80"
            aria-disabled="true"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
