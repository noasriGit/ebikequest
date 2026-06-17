import { ContentImage } from "@/components/content/ContentImage";
import { EditorialKicker } from "@/components/editorial/EditorialKicker";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/Breadcrumbs";
import { cn } from "@/lib/utils/cn";

type PageHeroVariant = "default" | "trails" | "laws" | "guides";

const variantStyles: Record<PageHeroVariant, string> = {
  default: "bg-gradient-to-b from-brand-light to-surface-base",
  trails: "bg-section-trails",
  laws: "bg-gradient-to-br from-section-laws via-surface-base to-surface-sunken",
  guides: "bg-gradient-to-b from-section-guides to-surface-base",
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  children,
  variant = "default",
  kicker,
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
  image?: string;
  imageAlt?: string;
  align?: "left" | "split";
}) {
  const hasImage = Boolean(image);
  const isSplit = align === "split" && hasImage;

  if (variant === "trails" && hasImage) {
    return (
      <section className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--text-muted)_12%,transparent)]">
        <div className="relative h-48 md:h-64">
          <ContentImage
            src={image!}
            alt={imageAlt ?? title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.9] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.7)] to-transparent" />
        </div>
        <div className={cn(variantStyles.trails, "border-t-0")}>
          <Container className="py-10 md:py-14">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
            {kicker ? <EditorialKicker className="mb-4">{kicker}</EditorialKicker> : null}
            <h1 className="max-w-3xl text-display-lg text-text-primary">{title}</h1>
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
      <Container className={cn("py-10 md:py-14", isSplit && "grid gap-8 lg:grid-cols-2 lg:items-center")}>
        <div>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {kicker ? <EditorialKicker className="mb-4">{kicker}</EditorialKicker> : null}
          <h1 className="max-w-3xl text-display-lg text-text-primary">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-3xl text-body-lg text-text-secondary">{description}</p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
        {isSplit ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] shadow-[var(--shadow-md)]">
            <ContentImage
              src={image!}
              alt={imageAlt ?? title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
