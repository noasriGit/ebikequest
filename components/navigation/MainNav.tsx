import Link from "next/link";
import { primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={cn("hidden items-center gap-6 md:flex", className)}>
      {primaryNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-zinc-700 transition hover:text-emerald-700"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="border-t border-zinc-200 bg-white md:hidden">
      <nav className="flex flex-col gap-1 px-4 py-4">
        <Link
          href="/"
          className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          onClick={onClose}
        >
          Home
        </Link>
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function SiteLogo() {
  return (
    <Link href="/" className="flex flex-col leading-tight">
      <span className="text-lg font-bold tracking-tight text-zinc-900">
        {siteConfig.name}
      </span>
      <span className="hidden text-xs text-zinc-500 sm:block">{siteConfig.tagline}</span>
    </Link>
  );
}
