import { Container } from "@/components/layout/Container";
import { ContentImage } from "@/components/content/ContentImage";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import type { ContentImageRef } from "@/lib/utils/images";

interface HomeHeroProps {
  image: ContentImageRef;
}

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-900">
      <Container className="py-0">
        <div className="grid min-h-[520px] items-stretch lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col justify-center py-14 lg:py-20 lg:pr-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              National E-Bike Discovery Platform
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              National discovery for trails, laws, shops, rentals, and more, starting in
              Virginia, Maryland, and Washington DC.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/trails">Explore Trails</Button>
              <Button href="/laws" variant="secondary">
                E-Bike Laws
              </Button>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden lg:min-h-full lg:rounded-l-3xl">
            <ContentImage
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="brightness-95 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-zinc-900/30 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
