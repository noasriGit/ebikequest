"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { MainNav, MobileNav, SiteLogo } from "@/components/navigation/MainNav";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <SiteLogo />
          <MainNav />
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-700 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </Container>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
