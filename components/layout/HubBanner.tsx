import { ContentImage } from "@/components/content/ContentImage";
import type { ContentImageRef } from "@/lib/utils/images";

interface HubBannerProps {
  image: ContentImageRef;
  title?: string;
}

export function HubBanner({ image, title }: HubBannerProps) {
  return (
    <div className="relative mb-8 aspect-[21/9] min-h-[180px] overflow-hidden rounded-[var(--radius-lg)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken shadow-[var(--shadow-md)]">
      <ContentImage
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover brightness-95 saturate-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.55)] via-[rgba(26,25,23,0.15)] to-transparent" />
      {title ? (
        <p className="absolute bottom-4 left-4 font-display text-lg text-white">{title}</p>
      ) : null}
    </div>
  );
}
