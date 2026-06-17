import { ContentImage } from "@/components/content/ContentImage";
import { cn } from "@/lib/utils/cn";

export function PhotoFrame({
  src,
  alt,
  caption,
  aspect = "video",
  priority = false,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "square" | "wide";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const aspectClass =
    aspect === "square" ? "aspect-square" : aspect === "wide" ? "aspect-[21/9]" : "aspect-video";

  return (
    <figure className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken shadow-[var(--shadow-xs)]",
          aspectClass,
        )}
      >
        <ContentImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn("object-cover", imageClassName)}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-body-sm text-text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
