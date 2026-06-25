import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 32 }: LogoMarkProps) {
  return (
    <Image
      src="/favicon-96x96.png"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden
      priority
    />
  );
}
