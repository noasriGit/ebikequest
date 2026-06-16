import { ContentImage } from "@/components/content/ContentImage";
import type { ContentImageRef } from "@/lib/utils/images";

export function TrailImageGallery({ images }: { images: ContentImageRef[] }) {
  if (!images.length) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold text-zinc-900">Photos</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100"
          >
            <ContentImage src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrailCoverHero({ image }: { image: ContentImageRef }) {
  return (
    <div className="relative aspect-[21/9] min-h-[220px] overflow-hidden rounded-2xl bg-zinc-100">
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
