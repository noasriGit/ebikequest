"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { useHeaderChrome } from "@/components/layout/HeaderChromeContext";
import { primaryNav, mobileSecondaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/navigation/LogoMark";
import { useFocusTrap } from "@/lib/a11y/use-focus-trap";
import { cn } from "@/lib/utils/cn";

const navNote: Record<string, string> = {
  "/": "Journal",
  "/ebikes": "Models and class",
  "/brands": "Source-checked makers",
  "/buying-guides": "How to choose",
  "/trails": "Where to ride",
  "/laws": "What the statute says",
  "/guides": "Field notes",
  "/safety": "Class and hazard",
  "/about": "The desk",
  "/editorial-standards": "Method",
};

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
              "border-l-2 px-4 py-3 text-lg",
              active
                ? "border-brand text-text-primary"
                : "border-transparent text-text-primary hover:border-brand hover:text-brand",
            )
          : cn(
              "relative flex h-[var(--site-header-height)] items-center text-meta",
              overlay
                ? "header-nav-link"
                : active
                  ? "text-text-primary after:absolute after:inset-x-0 after:bottom-3 after:h-0.5 after:bg-brand-accent"
                  : "text-text-secondary hover:text-text-primary",
            ),
      )}
    >
      {label}
    </Link>
  );
}

export function MainNav() {
  return (
    <nav className="hidden h-[var(--site-header-height)] items-center gap-5 lg:flex" aria-label="Primary">
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
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap(panelRef, open, { onEscape: onClose, restoreFocus: true });

  if (!open) return null;

  return (
    <>
      <div
        ref={panelRef}
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-surface-base lg:hidden"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <SiteLogo compact />
          <button
            type="button"
            className="p-2 text-text-primary"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={22} strokeWidth={1.5} aria-hidden />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-end gap-1 px-5 pb-8" aria-label="Mobile primary">
          <Link
            href="/"
            onClick={onClose}
            className="group block border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] py-3"
          >
            <span className="block font-display text-[clamp(2.75rem,14vw,4.5rem)] uppercase leading-[0.85] text-text-primary">
              Home
            </span>
            <span className="mt-1 block text-meta text-text-muted">{navNote["/"]}</span>
          </Link>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] py-3"
            >
              <span className="block font-display text-[clamp(2.75rem,14vw,4.5rem)] uppercase leading-[0.85] text-text-primary">
                {item.label}
              </span>
              <span className="mt-1 block text-meta text-text-muted">{navNote[item.href]}</span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] px-5 py-5">
          {mobileSecondaryNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="text-meta text-text-secondary">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export function SiteLogo({ compact }: { compact?: boolean }) {
  const { overlay } = useHeaderChrome();

  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 leading-tight"
      aria-label={`${siteConfig.name} home`}
    >
      <LogoMark size={compact ? 28 : 32} />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[1.35rem] uppercase leading-none tracking-[0.08em]",
            overlay ? "header-logo-title" : "text-text-primary",
          )}
        >
          eBikeQuest
        </span>
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
        "p-2.5 transition duration-300 lg:hidden",
        overlay ? "header-icon-btn" : "text-text-secondary hover:bg-surface-sunken",
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-nav-panel"
      onClick={onClick}
    >
      {open ? <X size={22} strokeWidth={1.5} aria-hidden /> : <Menu size={22} strokeWidth={1.5} aria-hidden />}
    </button>
  );
}
