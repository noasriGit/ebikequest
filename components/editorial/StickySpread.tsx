import { cn } from "@/lib/utils/cn";

/** Desktop sticky image beside scrolling copy. Stacks on small screens. */
export function StickySpread({
  media,
  children,
  className,
  mediaFirst = true,
}: {
  media: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  mediaFirst?: boolean;
}) {
  return (
    <div className={cn("grid items-start gap-8 lg:grid-cols-12 lg:gap-12", className)}>
      <div className={cn("lg:sticky lg:top-28 lg:col-span-6", mediaFirst ? "lg:order-1" : "lg:order-2")}>
        {media}
      </div>
      <div className={cn("lg:col-span-5 lg:col-start-8", mediaFirst ? "lg:order-2" : "lg:order-1 lg:col-start-1")}>
        {children}
      </div>
    </div>
  );
}
