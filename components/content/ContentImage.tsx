import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface ContentImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function ContentImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ContentImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
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
      sizes={sizes}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
