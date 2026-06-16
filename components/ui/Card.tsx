import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block no-underline")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
