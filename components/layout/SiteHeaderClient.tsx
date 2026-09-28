"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { HeaderChromeProvider } from "@/components/layout/HeaderChromeContext";
import { MainNav, MenuButton, MobileNav, SiteLogo } from "@/components/navigation/MainNav";

export function SiteHeaderClient({ searchSlot }: { searchSlot: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <HeaderChromeProvider value={{ tone: "dark", progress: 1, scrolled, overlay: false }}>
      <header className={scrolled ? "site-header site-header--scrolled" : "site-header"}>
        <Container>
          <div className="flex h-[var(--site-header-height)] items-center justify-between gap-4">
            <SiteLogo />
            <div className="flex items-center gap-5">
              <MainNav />
              {searchSlot}
              <MenuButton open={mobileOpen} onClick={() => setMobileOpen((open) => !open)} />
            </div>
          </div>
        </Container>
        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>
    </HeaderChromeProvider>
  );
}
