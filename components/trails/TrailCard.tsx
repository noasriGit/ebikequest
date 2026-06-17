import Link from "next/link";
import type { Trail } from "@/types/trail";
import { ContentImage } from "@/components/content/ContentImage";
import { Badge } from "@/components/ui/Badge";
import { getJurisdictionName } from "@/lib/content";
import { getTrailCoverImage } from "@/lib/utils/images";
import { cn } from "@/lib/utils/cn";

export function TrailCard({ trail }: { trail: Trail }) {
  const jurisdictionName = getJurisdictionName(trail.jurisdiction);
  const cover = getTrailCoverImage(trail);

  return (
    <Link
      href={`/trails/${trail.jurisdiction}/${trail.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]",
        "bg-surface-raised shadow-[var(--shadow-xs)] transition hover:border-[color-mix(in_srgb,var(--brand-accent)_40%,transparent)] hover:shadow-[var(--shadow-md)]",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken">
        <ContentImage
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.45)] via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Badge className="bg-white/95 text-text-primary">{jurisdictionName}</Badge>
          <Badge className="bg-white/95 capitalize text-text-primary">
            {trail.stats.difficulty}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          {trail.ebikePolicy.allowed ? (
            <Badge variant="success">E-bike allowed</Badge>
          ) : (
            <Badge variant="warning">Restricted</Badge>
          )}
        </div>
        <h3 className="mt-3 line-clamp-2 text-heading-md text-text-primary group-hover:text-brand">
          {trail.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-body-sm text-text-secondary">{trail.description}</p>
        <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4 font-mono text-sm text-text-muted">
          {trail.stats.distanceMiles ? (
            <div>
              <dt className="inline">Distance: </dt>
              <dd className="inline font-medium text-text-primary">
                {trail.stats.distanceMiles} mi
              </dd>
            </div>
          ) : null}
          {trail.stats.surface?.length ? (
            <div>
              <dt className="inline">Surface: </dt>
              <dd className="inline font-medium text-text-primary">
                {trail.stats.surface.join(", ")}
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </Link>
  );
}

export function DirectoryGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
