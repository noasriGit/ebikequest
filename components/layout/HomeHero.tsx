"use client";

import { ContentImage } from "@/components/content/ContentImage";
import { EditorialKicker } from "@/components/editorial/EditorialKicker";
import { Button } from "@/components/design-system/Button/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { siteConfig } from "@/config/site";
import type { ContentImageRef } from "@/lib/utils/images";

interface HomeHeroProps {
  image: ContentImageRef;
  trailCount: number;
  jurisdictionCount: number;
}

export function HomeHero({ image, trailCount, jurisdictionCount }: HomeHeroProps) {
  const month = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    new Date(),
  );

  return (
    <section
      id="home-hero"
      className="relative -mt-[var(--site-header-height)] min-h-[calc(85vh+var(--site-header-height))] overflow-hidden border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)]"
    >
      <div className="absolute inset-0">
        <ContentImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.88] saturate-[1.08] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,25,23,0.88)] via-[rgba(26,25,23,0.5)] to-[rgba(26,25,23,0.2)]" />
      </div>

      <div className="relative flex min-h-[calc(85vh+var(--site-header-height))] flex-col justify-end px-4 pb-16 pt-[var(--site-header-height)] sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <FadeUp>
            <EditorialKicker light>National E-Bike Discovery Platform</EditorialKicker>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-display-xl font-normal text-white">
              {siteConfig.tagline}
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-6 max-w-xl text-body-lg text-white/85">
              Verified trails, laws, and guides for riders — starting in Virginia, Maryland, and
              Washington DC.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Virginia", "Maryland", "Washington DC"].map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {loc}
                </span>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/trails" size="lg">
                Explore Trails
              </Button>
              <Button href="/laws" variant="dark" size="lg">
                E-Bike Laws
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-white/70">
              <span>{trailCount} verified trails</span>
              <span className="text-brand-accent" aria-hidden>
                ·
              </span>
              <span>{jurisdictionCount} jurisdictions</span>
              <span className="text-brand-accent" aria-hidden>
                ·
              </span>
              <span>Updated {month}</span>
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
