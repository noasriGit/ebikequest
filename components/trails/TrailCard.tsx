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
        "group block overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition",
        "hover:border-emerald-200 hover:shadow-md",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <ContentImage
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Badge className="bg-white/95 text-zinc-800">{jurisdictionName}</Badge>
          <Badge variant="default" className="bg-white/95 capitalize text-zinc-800">
            {trail.stats.difficulty}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          {trail.ebikePolicy.allowed ? (
            <Badge variant="success">E-bike allowed</Badge>
          ) : (
            <Badge variant="warning">Restricted</Badge>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-zinc-900 group-hover:text-emerald-800">
          {trail.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{trail.description}</p>
        <dl className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
          {trail.stats.distanceMiles ? (
            <div>
              <dt className="inline">Distance: </dt>
              <dd className="inline font-medium text-zinc-800">
                {trail.stats.distanceMiles} mi
              </dd>
            </div>
          ) : null}
          {trail.stats.surface?.length ? (
            <div>
              <dt className="inline">Surface: </dt>
              <dd className="inline font-medium text-zinc-800">
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
