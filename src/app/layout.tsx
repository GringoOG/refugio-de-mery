import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { JsonLd } from "@/components/JsonLd";
import { LocaleProvider } from "@/lib/i18n";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "@/lib/i18n/config";
import {
  buildPageMetadata,
  lodgingJsonLd,
  seoBrand,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const homeMeta = buildPageMetadata("home");

export const metadata: Metadata = {
  ...homeMeta,
  metadataBase: new URL(siteUrl),
  title: {
    default:
      typeof homeMeta.title === "object" &&
      homeMeta.title &&
      "absolute" in homeMeta.title &&
      homeMeta.title.absolute
        ? homeMeta.title.absolute
        : `${seoBrand} | Coffee Farm Stay on the Salkantay Trek`,
    template: `%s | ${seoBrand}`,
  },
  applicationName: seoBrand,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

async function readInitialLocale(): Promise<Locale> {
  const jar = await cookies();
  const raw = jar.get(LOCALE_COOKIE)?.value;
  return raw && isLocale(raw) ? raw : defaultLocale;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await readInitialLocale();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable} h-full`}>
      <head>
        <link rel="preload" as="image" href="/video/hero-poster.jpg" />
        <link
          rel="preload"
          as="video"
          href="/video/hero-mobile.mp4"
          type="video/mp4"
          media="(max-width: 900px)"
        />
        <link
          rel="preload"
          as="video"
          href="/video/hero.mp4"
          type="video/mp4"
          media="(min-width: 901px)"
        />
      </head>
      <body className="min-h-full antialiased">
        <JsonLd data={lodgingJsonLd()} />
        <LocaleProvider initialLocale={locale}>
          <BackgroundVideo />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
