"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { HeaderChromeProvider } from "@/components/layout/HeaderChromeContext";
import { Button } from "@/components/design-system/Button/Button";
import { MainNav, MenuButton, MobileNav, SiteLogo } from "@/components/navigation/MainNav";
import { cn } from "@/lib/utils/cn";

const SCROLL_RANGE = 140;

export function SiteHeaderClient({ searchSlot }: { searchSlot: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const overlay = isHome && !mobileOpen;
  const [progress, setProgress] = useState(isHome ? 0 : 1);
  const scrolled = progress > 0.08;
  const lightTone = overlay && progress < 0.72;

  useEffect(() => {
    function onScroll() {
      if (!isHome) {
        setProgress(1);
        return;
      }
      setProgress(Math.min(1, window.scrollY / SCROLL_RANGE));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) setProgress(1);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const chrome = {
    tone: lightTone ? ("light" as const) : ("dark" as const),
    progress: overlay ? progress : 1,
    scrolled,
  };

  return (
    <HeaderChromeProvider value={chrome}>
      <header
        className={cn(
          "site-header",
          overlay && "site-header--overlay",
          scrolled && "site-header--scrolled",
        )}
        style={{ "--header-progress": chrome.progress } as React.CSSProperties}
      >
        <Container>
          <div className="flex h-[var(--site-header-height)] items-center justify-between gap-4">
            <SiteLogo tone={chrome.tone} />
            <MainNav tone={chrome.tone} />
            <div className="flex items-center gap-2">
              {searchSlot}
              <Button
                href="/suggest-trail"
                size="sm"
                variant={chrome.tone === "light" ? "dark" : "primary"}
                className="hidden lg:inline-flex"
              >
                Suggest Trail
              </Button>
              <MenuButton
                open={mobileOpen}
                tone={chrome.tone}
                onClick={() => setMobileOpen((v) => !v)}
              />
            </div>
          </div>
        </Container>
        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>
    </HeaderChromeProvider>
  );
}
