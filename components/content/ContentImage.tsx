import Image from "next/image";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/seo/image-presets";
import { cn } from "@/lib/utils/cn";

type ImagePreset = "hero" | "hubBanner" | "pageHeroStrip" | "cardGrid" | "halfWidth" | "editorial";

interface ContentImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  preset?: ImagePreset;
}

function resolveSizes(preset?: ImagePreset, sizes?: string): string {
  if (sizes) return sizes;
  if (preset) return IMAGE_SIZES[preset];
  return IMAGE_SIZES.editorial;
}

function resolveQuality(preset?: ImagePreset, quality?: number): number {
  if (quality != null) return quality;
  if (preset === "hero" || preset === "hubBanner" || preset === "pageHeroStrip") {
    return IMAGE_QUALITY.hero;
  }
  if (preset === "cardGrid") return IMAGE_QUALITY.card;
  return IMAGE_QUALITY.default;
}

export function ContentImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className,
  sizes,
  quality,
  preset,
}: ContentImageProps) {
  const resolvedSizes = resolveSizes(preset, sizes);
  const resolvedQuality = resolveQuality(preset, quality);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={resolvedSizes}
        quality={resolvedQuality}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 675}
      priority={priority}
      sizes={resolvedSizes}
      quality={resolvedQuality}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
