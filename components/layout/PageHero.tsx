import { ContentImage } from "@/components/content/ContentImage";
import { EditorialKicker } from "@/components/editorial/EditorialKicker";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/Breadcrumbs";
import { cn } from "@/lib/utils/cn";

type PageHeroVariant = "default" | "trails" | "laws" | "guides";

const variantStyles: Record<PageHeroVariant, string> = {
  default: "bg-surface-base",
  trails: "bg-surface-base",
  laws: "bg-surface-base",
  guides: "bg-surface-base",
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  children,
  variant = "default",
  kicker,
  mark,
  image,
  imageAlt,
  align = "left",
}: {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  variant?: PageHeroVariant;
  kicker?: string;
  /** Oversized jurisdiction or section mark. Decorative when the title already names the place. */
  mark?: string;
  image?: string;
  imageAlt?: string;
  align?: "left" | "split";
}) {
  const hasImage = Boolean(image);
  const isSplit = align === "split" && hasImage;

  if (variant === "trails" && hasImage) {
    return (
      <section className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--text-muted)_12%,transparent)]">
        <div className="editorial-media relative h-[42vh] min-h-64 md:h-[58vh]">
          <ContentImage
            src={image!}
            alt={imageAlt ?? title}
            fill
            priority
            preset="pageHeroStrip"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,27,23,0.55)] via-transparent to-[rgba(28,27,23,0.25)]" />
        </div>
        <div className={cn(variantStyles.trails, "border-t-0")}>
          <Container className="py-12 md:py-16">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
            {kicker ? <EditorialKicker className="mb-4">{kicker}</EditorialKicker> : null}
            <h1 className="max-w-5xl text-display-lg text-text-primary">{title}</h1>
            {description ? (
              <p className="mt-4 max-w-3xl text-body-lg text-text-secondary">{description}</p>
            ) : null}
            {children ? <div className="mt-6">{children}</div> : null}
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "border-b border-[color-mix(in_srgb,var(--text-muted)_12%,transparent)]",
        variantStyles[variant],
      )}
    >
      <Container className={cn("py-12 md:py-20", isSplit && "grid items-end gap-10 lg:grid-cols-12")}>
        <div className={isSplit ? "lg:col-span-6" : undefined}>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {mark ? (
            <p aria-hidden className="font-display text-[clamp(5.5rem,16vw,11rem)] leading-[0.78] text-text-primary">
              {mark}
            </p>
          ) : null}
          {kicker ? <EditorialKicker className="mb-4">{kicker}</EditorialKicker> : null}
          <h1 className="max-w-5xl text-display-lg text-text-primary">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-xl font-reading text-lg leading-relaxed text-text-secondary">{description}</p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
        {isSplit ? (
          <div className="editorial-media relative aspect-[4/5] lg:col-span-5 lg:col-start-8">
            <ContentImage
              src={image!}
              alt={imageAlt ?? title}
              fill
              priority
              preset="halfWidth"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
