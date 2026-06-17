import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHubImage } from "@/config/images";
import { PLATFORM_CATEGORIES } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/design-system/Card/Card";
import { ContentImage } from "@/components/content/ContentImage";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils/cn";

const CATEGORY_IMAGES: Record<string, string> = {
  trails: getHubImage("trails"),
  guides: getHubImage("guides"),
  laws: getHubImage("laws"),
};

export function PlatformCategoryGrid({ compact = false }: { compact?: boolean }) {
  const liveCategories = PLATFORM_CATEGORIES.filter((c) => c.status === "live");
  const comingSoon = PLATFORM_CATEGORIES.filter((c) => c.status === "coming-soon");

  return (
    <div className="space-y-8">
      <div
        className={cn(
          "grid gap-4",
          compact ? "grid-cols-1 sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {liveCategories.map((category) => {
          const imageSrc = CATEGORY_IMAGES[category.id] ?? getHubImage("trails");
          return (
            <FadeUp key={category.id}>
              <Card href={category.href} photo className="h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken">
                  <ContentImage
                    src={imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.5)] to-transparent" />
                  <div className="absolute right-3 top-3">
                    <Badge variant="live">Live</Badge>
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-heading-md text-text-primary">{category.label}</h3>
                  <p className="mt-2 text-body-sm text-text-secondary">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                    Explore <ArrowRight size={14} />
                  </span>
                </CardContent>
              </Card>
            </FadeUp>
          );
        })}
      </div>

      {comingSoon.length && !compact ? (
        <FadeUp>
          <div className="rounded-[var(--radius-md)] border border-dashed border-[color-mix(in_srgb,var(--text-muted)_25%,transparent)] bg-surface-sunken px-5 py-4">
            <p className="text-label text-text-muted">Expanding soon</p>
            <p className="mt-2 text-body-sm text-text-secondary">
              {comingSoon.map((c) => c.label).join(" · ")} — on the roadmap as we grow beyond our
              launch markets.
            </p>
          </div>
        </FadeUp>
      ) : null}
    </div>
  );
}

export function LiveCategoryLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {PLATFORM_CATEGORIES.filter((c) => c.status === "live" && c.href).map((c) => (
        <Link
          key={c.id}
          href={c.href!}
          className="text-sm font-semibold text-brand-accent hover:underline"
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}
