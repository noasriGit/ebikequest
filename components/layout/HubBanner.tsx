import { ContentImage } from "@/components/content/ContentImage";
import type { ContentImageRef } from "@/lib/utils/images";

interface HubBannerProps {
  image: ContentImageRef;
  title?: string;
}

export function HubBanner({ image, title }: HubBannerProps) {
  return (
    <div className="relative mb-8 aspect-[21/9] min-h-[180px] overflow-hidden rounded-2xl bg-zinc-100">
      <ContentImage
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="brightness-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      {title ? (
        <p className="absolute bottom-4 left-4 text-sm font-medium text-white/90">{title}</p>
      ) : null}
    </div>
  );
}
