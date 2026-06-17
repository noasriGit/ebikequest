import { cn } from "@/lib/utils/cn";

export function EditorialKicker({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-kicker",
        light && "text-white/80 [&::after]:bg-white/60",
        className,
      )}
    >
      {children}
    </p>
  );
}
