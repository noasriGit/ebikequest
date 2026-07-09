/** Responsive `sizes` hints for next/image — keep card/grid requests well below full viewport. */
export const IMAGE_SIZES = {
  /** Full-width heroes (home, trail detail). Caps effective width at 1280px. */
  hero: "(max-width: 1280px) 100vw, 1280px",
  /** Hub banners and medium heroes inside containers. */
  hubBanner: "(max-width: 1024px) 100vw, 1024px",
  /** Trail hub page header strip. */
  pageHeroStrip: "(max-width: 1024px) 100vw, 1024px",
  /** 3-column card grids at lg breakpoints. */
  cardGrid: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px",
  /** 2-column layouts and guide hub split hero. */
  halfWidth: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px",
  /** Photo frames and inline editorial images. */
  editorial: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px",
} as const;

export const IMAGE_QUALITY = {
  hero: 75,
  card: 68,
  default: 72,
} as const;
