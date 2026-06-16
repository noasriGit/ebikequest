import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/Breadcrumbs";

export function PageHero({
  title,
  description,
  breadcrumbs,
  children,
}: {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
      <Container className="py-10 md:py-14">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-lg text-zinc-600">{description}</p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </Container>
    </section>
  );
}
