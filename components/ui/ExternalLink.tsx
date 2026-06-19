import { cn } from "@/lib/utils/cn";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
