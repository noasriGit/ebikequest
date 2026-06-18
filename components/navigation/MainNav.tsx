"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useHeaderChrome } from "@/components/layout/HeaderChromeContext";
import { primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/design-system/Button/Button";
import { LogoMark } from "@/components/navigation/LogoMark";
import { cn } from "@/lib/utils/cn";

function NavLink({
  href,
  label,
  onClick,
  mobile,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const { overlay } = useHeaderChrome();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "font-medium transition-colors duration-300",
        mobile
          ? cn(
              "rounded-[var(--radius-md)] px-4 py-3 text-lg",
              active
                ? "bg-brand-light text-brand"
                : "text-text-primary hover:bg-surface-sunken",
            )
          : cn(
              "relative flex h-[var(--site-header-height)] items-center text-sm",
              overlay
                ? "header-nav-link"
                : active
                  ? "text-text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand-accent"
                  : "text-text-secondary hover:text-brand",
            ),
      )}
    >
      {label}
    </Link>
  );
}

export function MainNav() {
  return (
    <nav className="hidden h-[var(--site-header-height)] items-center gap-8 md:flex" aria-label="Primary">
      {primaryNav.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-[rgba(26,25,23,0.4)] backdrop-blur-sm md:hidden"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-surface-raised shadow-[var(--shadow-md)] md:hidden">
        <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] px-4 py-4">
          <SiteLogo compact />
          <button
            type="button"
            className="rounded-[var(--radius-md)] p-2 text-text-secondary hover:bg-surface-sunken"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile primary">
          <NavLink href="/" label="Home" onClick={onClose} mobile />
          {primaryNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={onClose}
              mobile
            />
          ))}
        </nav>
        <div className="border-t border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] p-4">
          <Button href="/suggest-trail" className="w-full" onClick={onClose}>
            Suggest a Trail
          </Button>
        </div>
      </div>
    </>
  );
}

export function SiteLogo({ compact }: { compact?: boolean }) {
  const { overlay } = useHeaderChrome();

  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 leading-tight">
      <LogoMark size={compact ? 28 : 32} />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-lg tracking-tight",
            overlay ? "header-logo-title" : "text-text-primary",
          )}
        >
          eBike<span className="italic">Quest</span>
        </span>
        {!compact ? (
          <span
            className={cn(
              "hidden text-xs sm:block",
              overlay ? "header-logo-tagline" : "text-text-muted",
            )}
          >
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function MenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const { overlay } = useHeaderChrome();

  return (
    <button
      type="button"
      className={cn(
        "rounded-[var(--radius-md)] p-2.5 transition duration-300 md:hidden",
        overlay ? "header-icon-btn" : "text-text-secondary hover:bg-surface-sunken",
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
    >
      {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
    </button>
  );
}
