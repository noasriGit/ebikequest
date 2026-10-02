import { ContentImage } from "@/components/content/ContentImage";
import { cn } from "@/lib/utils/cn";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFhUVFRUVFRUVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIABgAGAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAECBQYAB//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ajo1m2u3V3bJ7mS7c0m0gAAAAAAAH/9k=";

type FrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  caption?: string;
  sizes?: string;
};

function Frame({
  src,
  alt,
  priority = false,
  className,
  imageClassName,
  caption,
  sizes,
  preset,
  aspectClass,
}: FrameProps & { preset: "hero" | "hubBanner" | "editorial" | "halfWidth"; aspectClass: string }) {
  return (
    <figure className={cn("editorial-media", className)}>
      <div className={cn("relative bg-surface-ink", aspectClass)}>
        <ContentImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          preset={preset}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={BLUR}
          className={imageClassName}
        />
      </div>
      {caption ? <figcaption className="mt-3 text-meta text-text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

export function PageHeroImage(props: FrameProps) {
  return (
    <Frame
      {...props}
      preset="hero"
      aspectClass="aspect-[4/5] min-h-[72vh] md:aspect-[16/10] md:min-h-[88vh]"
    />
  );
}

export function EditorialImage(props: FrameProps) {
  return <Frame {...props} preset="editorial" aspectClass="aspect-[4/5] md:aspect-[5/4]" />;
}

export function FullBleedImage(props: FrameProps) {
  return <Frame {...props} preset="hubBanner" aspectClass="aspect-[4/3] md:aspect-[21/9]" />;
}

export function DetailImage(props: FrameProps) {
  return <Frame {...props} preset="halfWidth" aspectClass="aspect-square md:aspect-[4/5]" />;
}
