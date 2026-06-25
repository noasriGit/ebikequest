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
```

Build runs both validators automatically via `vercel.json`.

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
