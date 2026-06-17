import { cn } from "@/lib/utils/cn";

export function PullQuote({
  children,
  cite,
  className,
}: {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}) {
  return (
    <figure className={cn("my-8", className)}>
      <blockquote className="pull-quote">{children}</blockquote>
      {cite ? (
        <figcaption className="mt-3 pl-5 text-body-sm text-text-muted">— {cite}</figcaption>
      ) : null}
    </figure>
  );
}
