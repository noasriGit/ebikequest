import { ContentImage } from "@/components/content/ContentImage";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/Breadcrumbs";
import type { ContentImageRef } from "@/lib/utils/images";

interface TrailHeroProps {
  image: ContentImageRef;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  badges?: React.ReactNode;
}

export function TrailHero({
  image,
  title,
  description,
  breadcrumbs,
  badges,
}: TrailHeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-surface-ink">
      <ContentImage
        src={image.src}
        alt={image.alt}
        fill
        priority
        preset="hero"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,27,23,0.82)] via-[rgba(28,27,23,0.2)] to-[rgba(28,27,23,0.28)]" />

      <div className="relative flex min-h-[78vh] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[88rem]">
          <Breadcrumbs
            items={breadcrumbs}
            className="text-white/70 [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white"
          />
          {badges ? <div className="mt-5 flex flex-wrap gap-2">{badges}</div> : null}
          <h1 className="mt-4 max-w-5xl text-display-lg text-white">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-xl font-reading text-lg leading-relaxed text-white/85">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function TrailImageGallery({ images }: { images: ContentImageRef[] }) {
  if (!images.length) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary">Photos</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-surface-sunken"
          >
            <ContentImage src={image.src} alt={image.alt} fill preset="halfWidth" />
          </div>
        ))}
      </div>
    </section>
  );
}

/** @deprecated Use TrailHero instead */
export function TrailCoverHero({ image }: { image: ContentImageRef }) {
  return (
    <div className="relative aspect-[21/9] min-h-[220px] overflow-hidden rounded-[var(--radius-lg)] bg-surface-sunken">
      <ContentImage
        src={image.src}
        alt={image.alt}
        fill
        priority
        preset="hero"
        className="brightness-95 saturate-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}

export function TrailMapLink({
  lat,
  lng,
  name,
}: {
  lat?: number;
  lng?: number;
  name: string;
}) {
  if (lat == null || lng == null) return null;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <ExternalLink
      href={mapsUrl}
      className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
    >
      Open {name} in Maps →
    </ExternalLink>
  );
}
