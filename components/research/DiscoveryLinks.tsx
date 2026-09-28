import Link from "next/link";
import type { DiscoveryLink } from "@/lib/commerce/relationships";

export function DiscoveryLinks({
  title,
  intro,
  links,
}: {
  title: string;
  intro: string;
  links: DiscoveryLink[];
}) {
  if (links.length === 0) return null;

  return (
    <aside
      className="mt-14 border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] pt-8"
      aria-label={title}
    >
      <h2 className="text-heading-md text-text-primary">{title}</h2>
      <p className="mt-2 max-w-2xl text-body-sm text-text-secondary">{intro}</p>
      <ul className="mt-4 border-y border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
        {links.map((link) => (
          <li
            key={link.href}
            className="border-b border-[color-mix(in_srgb,var(--text-muted)_12%,transparent)] last:border-b-0"
          >
            <Link href={link.href} className="group flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span className="font-medium text-text-primary group-hover:text-brand">{link.label}</span>
              {link.note ? <span className="text-sm text-text-muted">{link.note}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
