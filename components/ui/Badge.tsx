import { cn } from "@/lib/utils/cn";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "live" | "soon" | "success" | "warning";
  className?: string;
}) {
  const variants = {
    default: "bg-zinc-100 text-zinc-700",
    live: "bg-emerald-100 text-emerald-800",
    soon: "bg-amber-100 text-amber-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-orange-100 text-orange-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
