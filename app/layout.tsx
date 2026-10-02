import type { Metadata } from "next";
import { Barlow_Condensed, Geist_Mono, Instrument_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo/structured-data";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}, ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6571939127757088"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="nEzffqPpaS32Kom8wFqW9g"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} ${barlowCondensed.variable} ${sourceSerif.variable} bg-paper-texture min-h-screen antialiased`}
      >
        <MotionProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <JsonLd data={[buildOrganizationSchema(), buildWebSiteSchema()]} />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
