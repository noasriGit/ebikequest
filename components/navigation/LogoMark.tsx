import { cn } from "@/lib/utils/cn";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 32 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="var(--brand)" />
      <path
        d="M6 24C6 24 10 14 16 14C22 14 26 24 26 24"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 20C8 20 11 12 16 12C21 12 24 20 24 20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M10 16C10 16 13 9 16 9C19 9 22 16 22 16"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="25" cy="7" r="2.5" fill="var(--brand-accent)" />
    </svg>
  );
}
