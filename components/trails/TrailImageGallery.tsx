import { ContentImage } from "@/components/content/ContentImage";
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
    <section className="relative min-h-[420px] overflow-hidden border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] md:min-h-[480px]">
      <ContentImage
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.88] saturate-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.9)] via-[rgba(26,25,23,0.5)] to-[rgba(26,25,23,0.2)]" />

      <div className="relative flex min-h-[420px] flex-col justify-end px-4 pb-10 pt-24 sm:px-6 md:min-h-[480px] lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Breadcrumbs
            items={breadcrumbs}
            className="text-white/70 [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white"
          />
          {badges ? <div className="mt-4 flex flex-wrap gap-2">{badges}</div> : null}
          <h1 className="mt-4 max-w-3xl text-display-lg text-white">{title}</h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-body-lg text-white/85">{description}</p>
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
            <ContentImage src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" />
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
        sizes="100vw"
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
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
    >
      Open {name} in Maps →
    </a>
  );
}
