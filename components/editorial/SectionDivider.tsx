import { cn } from "@/lib/utils/cn";

type SurfaceToken = "surface-base" | "surface-raised" | "surface-sunken" | "brand-light";

type SectionDividerVariant = "gradient" | "rule";

const SURFACE_VARS: Record<SurfaceToken, string> = {
  "surface-base": "var(--surface-base)",
  "surface-raised": "var(--surface-raised)",
  "surface-sunken": "var(--surface-sunken)",
  "brand-light": "var(--brand-light)",
};

export function SectionDivider({
  variant = "gradient",
  from = "surface-sunken",
  to = "surface-base",
  className,
}: {
  variant?: SectionDividerVariant;
  from?: SurfaceToken;
  to?: SurfaceToken;
  className?: string;
}) {
  if (variant === "rule") {
    return (
      <div
        className={cn(
          "flex items-center justify-center border-y border-[color-mix(in_srgb,var(--text-muted)_12%,transparent)] bg-surface-sunken py-6",
          className,
        )}
        aria-hidden
      >
        <hr className="editorial-rule w-16" />
      </div>
    );
  }

  return (
    <div
      className={cn("section-divider-gradient", className)}
      style={
        {
          "--divider-from": SURFACE_VARS[from],
          "--divider-to": SURFACE_VARS[to],
        } as React.CSSProperties
      }
      aria-hidden
    />
  );
}
