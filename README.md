# eBikeQuest

Everything E-Bike. One Quest.

National e-bike discovery platform built with Next.js 15, TypeScript, and Tailwind CSS.

## V1 scope

- Homepage with platform category grid
- Trails directory (Virginia, Maryland, Washington DC)
- Guides directory
- Laws authority hub + jurisdiction law pages
- About, Editorial Standards, Suggest a Trail

## Development

```bash
npm install
npm run dev
```

## Content validation

```bash
npm run validate:content
npm run validate:seo
npm run validate:affiliate
```

Build runs all validators automatically via `vercel.json`.

## Affiliate and Amazon Associates readiness

eBikeQuest is prepared for future affiliate content (buying guides, gear recommendations, comparison pages) but does **not** yet publish product pages or affiliate links.

Before adding affiliate links:

- Include clear disclosures using components in `components/affiliate/`
- Publish the full policy at `/affiliate-disclosure`
- On pages with Amazon affiliate links, include: *"As an Amazon Associate I earn from qualifying purchases."*

**Amazon content rules (do not violate):**

- Do **not** scrape Amazon product pages
- Do **not** manually copy Amazon product images, prices, star ratings, review counts, or customer review text into content files
- Use Amazon assets only through approved Amazon Associates tools, the Product Advertising API, SiteStripe, or separately licensed/owned assets
- Pair any Amazon assets with substantial original editorial content on each page

Run affiliate safeguards with:

```bash
npm run validate:affiliate
```

Future gear/product content belongs under `content/gear/` or `content/products/` and should use types in `types/gear.ts`.

## Adding photos

Placeholder SVGs are included so the site has visual structure before real photos are added.

| Purpose | Drop your file here | Then update |
|---------|---------------------|-------------|
| Homepage hero | `public/images/marketing/hero.jpg` | `config/images.ts` → `marketingImages.hero` |
| Trails hub banner | `public/images/marketing/hubs/trails.jpg` | `config/images.ts` → `marketingImages.hubs.trails` |
| Trail cover | `public/images/trails/{jurisdiction}/{slug}/cover.jpg` | `images[]` in `content/trails/{jurisdiction}.ts` |

If a trail has no `images` array, jurisdiction placeholders are used automatically from `public/images/trails/_placeholders/`.

Example trail image entry:

```typescript
images: [
  { src: "/images/trails/virginia/my-trail/cover.jpg", alt: "Describe the photo" },
  { src: "/images/trails/virginia/my-trail/view-2.jpg", alt: "Second gallery photo" },
]
```

## Deploy to Vercel

1. Push to GitHub and import the repo in Vercel
2. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
3. Optional: `REVALIDATION_SECRET` for ISR webhooks
4. Build runs content validation automatically via `vercel.json`

## Search Console

After deploy, submit `https://your-domain.com/sitemap.xml` in Google Search Console.
