import { cn } from "@/lib/utils/cn";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "live" | "soon" | "success" | "warning" | "editorial";
  className?: string;
}) {
  const variants = {
    default: "bg-surface-sunken text-text-secondary",
    live: "bg-brand-light text-brand",
    soon: "bg-[color-mix(in_srgb,var(--brand-accent)_15%,white)] text-brand-accent",
    success: "bg-[color-mix(in_srgb,var(--semantic-allow)_12%,white)] text-semantic-allow",
    warning: "bg-[color-mix(in_srgb,var(--semantic-restrict)_12%,white)] text-semantic-restrict",
    editorial: "bg-brand-accent-light text-brand-accent border border-[color-mix(in_srgb,var(--brand-accent)_25%,transparent)]",
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
