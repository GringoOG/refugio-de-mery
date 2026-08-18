import type { Metadata } from "next";
import { site } from "@/lib/content";

/** Production URL — override with NEXT_PUBLIC_SITE_URL when custom domain is live. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://refugio-de-mery.vercel.app"
).replace(/\/$/, "");

export const seoBrand = site.fullName;

/** Default social / share image (lodge exterior). */
export const ogImagePath = "/photos/accommodation.jpg";

export type SeoPageKey =
  | "home"
  | "rooms"
  | "tours"
  | "food"
  | "products"
  | "about"
  | "contact";

type PageSeo = {
  path: string;
  /** Browser + SERP title (English-first for international trekkers). */
  title: string;
  description: string;
  /** Shorter OG title when useful */
  ogTitle?: string;
};

/**
 * Marketing SEO copy: English-first (Salkantay / Machu Picchu travelers)
 * with high-intent place keywords — Lucmabamba, coffee farm stay, Tour de Café.
 */
export const pageSeo: Record<SeoPageKey, PageSeo> = {
  home: {
    path: "/",
    title: `${seoBrand} | Coffee Farm Stay on the Salkantay Trek`,
    description:
      "Family coffee farm lodging in Lucmabamba on the Salkantay Trek. Private rooms, half board, and Tour de Café near Machu Picchu. From 70 PEN / 20 USD per person. Book direct and pay less than on Booking.",
    ogTitle: `${seoBrand} — coffee farm stay in Lucmabamba`,
  },
  rooms: {
    path: "/rooms",
    title: `Private Rooms | ${seoBrand}`,
    description:
      "5 rooms in Lucmabamba: matrimonial, double, triples, and single. Always 70 PEN / 20 USD per person with breakfast, dinner, private bathroom, hot shower, and Wi‑Fi.",
  },
  tours: {
    path: "/tours",
    title: `Tour de Café | Coffee Farm Experience · ${seoBrand}`,
    description:
      "Coffee tour in Lucmabamba — from cherry to cup, roasted on the farm. 15 PEN / 5 USD per person. Perfect on the Salkantay route to Machu Picchu.",
  },
  food: {
    path: "/food",
    title: `Farm Meals · Half Board | ${seoBrand}`,
    description:
      "Homemade breakfast and dinner in Lucmabamba — meat and vegetarian kitchen, farm guacamole, and desserts. Half board included with your stay.",
  },
  products: {
    path: "/products",
    title: `Farm Coffee & Honey | ${seoBrand}`,
    description:
      "Take home coffee roasted in Lucmabamba and honey from the farm. Organic products from Refugio de Mery on the Salkantay Trek.",
  },
  about: {
    path: "/about",
    title: `About Us | Family Coffee Farm in Lucmabamba · ${seoBrand}`,
    description:
      "Over 20 years of coffee and more than 10 years welcoming guests in Lucmabamba, Sahuayacu · La Convención. Family hospitality on the Salkantay Trek.",
  },
  contact: {
    path: "/contact",
    title: `Contact & Booking | ${seoBrand}`,
    description:
      "Write to us to book your room in Lucmabamba. Refugio de Mery — coffee farm stay on the Salkantay Trek, near Machu Picchu.",
  },
};

const marketingKeywords = [
  "Refugio de Mery",
  "Lucmabamba",
  "Salkantay Trek",
  "Machu Picchu",
  "coffee farm stay Peru",
  "Lucmabamba accommodation",
  "coffee tour Lucmabamba",
  "organic coffee farm Salkantay",
  "Tour de Café",
  "La Convención Cusco",
];

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata(key: SeoPageKey): Metadata {
  const page = pageSeo[key];
  const url = absoluteUrl(page.path);
  const ogTitle = page.ogTitle ?? page.title;
  const image = absoluteUrl(ogImagePath);

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: marketingKeywords,
    authors: [{ name: seoBrand }],
    creator: seoBrand,
    publisher: seoBrand,
    category: "travel",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: key === "home" ? "website" : "article",
      locale: "en_US",
      alternateLocale: ["es_PE", "fr_FR", "de_DE", "cs_CZ"],
      url,
      siteName: seoBrand,
      title: ogTitle,
      description: page.description,
      images: [
        {
          url: image,
          width: 1024,
          height: 768,
          alt: `${seoBrand} — lodge in Lucmabamba coffee farm`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${siteUrl}/#lodging`,
    name: seoBrand,
    alternateName: site.name,
    description: pageSeo.home.description,
    url: siteUrl,
    image: [absoluteUrl(ogImagePath), absoluteUrl("/photos/about-farm.jpg")],
    email: site.email,
    sameAs: [site.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucmabamba, Sahuayacu",
      addressRegion: "La Convención, Cusco",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.lat,
      longitude: site.lng,
    },
    hasMap: `https://www.google.com/maps?q=${site.lat},${site.lng}`,
    priceRange: "70 PEN / 20 USD per person",
    currenciesAccepted: "PEN, USD",
    paymentAccepted: "Cash, Credit Card",
    petsAllowed: true,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Half board (breakfast & dinner)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Coffee farm tour", value: true },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Room per person / night",
        price: "70",
        priceCurrency: "PEN",
        description: "Includes breakfast and dinner",
      },
      {
        "@type": "Offer",
        name: "Tour de Café",
        price: "15",
        priceCurrency: "PEN",
      },
    ],
    touristType: ["Trekkers", "Coffee lovers", "Machu Picchu travelers"],
    inLanguage: "en",
  };
}

/** English FAQ for rich results (matches default locale + trekker search). */
export function faqJsonLd() {
  const items = [
    {
      q: "What time is check-in and check-out?",
      a: "Check-in is from 12:00 and check-out is until 11:00.",
    },
    {
      q: "Are breakfast and dinner included?",
      a: "Yes. Half board is included — breakfast and dinner with every night. We offer meat and vegetarian options.",
    },
    {
      q: "How much does a room cost?",
      a: "The rate is always 70 PEN / 20 USD per person per night — for every room type. Breakfast and dinner, private bathroom, hot shower, and Wi‑Fi are included.",
    },
    {
      q: "Do you offer a coffee tour?",
      a: "Yes. Tour de Café walks you through the farm process — including roasting a generous batch of coffee yourself.",
    },
    {
      q: "How far is Machu Picchu?",
      a: "About 19 km from Machu Picchu Historic Sanctuary, on the Salkantay Trek route through Lucmabamba.",
    },
    {
      q: "How can I pay?",
      a: "No card is needed to reserve. You pay at the property — card payment is accepted with no extra fees.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export const indexedPaths = Object.values(pageSeo).map((p) => p.path);
