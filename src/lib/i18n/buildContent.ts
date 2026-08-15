import type { SplitItem } from "@/components/SplitCard";
import type { RoomOffer } from "@/components/RoomCard";
import type { Dictionary } from "@/lib/i18n/types";
import { farmMapEmbedSrc } from "@/lib/content";

/** Client rate: always 70 PEN per person (≈ 20 USD). */
export const PRICE_PER_PERSON = "70 PEN / 20 USD";

const roomMedia: Record<
  RoomOffer["slug"],
  { priceLabel: string; image: string }
> = {
  "double-bed": {
    priceLabel: PRICE_PER_PERSON,
    image: "/photos/room-king-size.jpg",
  },
  "twin-beds": {
    priceLabel: PRICE_PER_PERSON,
    image: "/photos/room-twin-beds.jpg",
  },
  "triple-room": {
    priceLabel: PRICE_PER_PERSON,
    image: "/photos/room-triple.jpg",
  },
  "single-room": {
    priceLabel: PRICE_PER_PERSON,
    image: "/photos/room-twin-beds.jpg",
  },
};

const splitMedia: Record<
  string,
  {
    image: string;
    images?: string[];
    imageFit?: "cover" | "contain";
    priceLabel?: string;
    mapSrc?: boolean;
  }
> = {
  "tour-de-cafe": {
    image: "/photos/tour/tour-de-cafe-card.jpg",
    priceLabel: "15 PEN / 5 USD",
  },
  kitchen: { image: "/photos/food/kitchen.jpg" },
  breakfast: { image: "/photos/food/breakfast.jpg" },
  guacamole: { image: "/photos/food/guacamole.jpg" },
  dessert: {
    image: "/photos/food/dessert-main.jpg",
    images: ["/photos/food/dessert-detail.jpg"],
    imageFit: "contain",
  },
  coffee: {
    image: "/photos/products/coffee-bag.jpg",
    imageFit: "contain",
    priceLabel: "30 PEN / 9 USD",
  },
  honey: { image: "/photos/foto4.jpg" },
  story: { image: "/photos/about-farm.jpg" },
  landmarks: { image: "/photos/foto9.jpg", mapSrc: true },
};

function mergeSplit(
  copies: Dictionary["tours"]["items"],
  localeHl: string,
): SplitItem[] {
  return copies.map((copy) => {
    const media = splitMedia[copy.id] ?? { image: "/photos/foto4.jpg" };
    const item: SplitItem = {
      id: copy.id,
      eyebrow: copy.eyebrow,
      title: copy.title,
      blurb: copy.blurb,
      features: copy.features,
      image: media.image,
      images: media.images,
      imageFit: media.imageFit,
      priceLabel: media.priceLabel,
      priceSuffix: copy.priceSuffix,
    };
    if (copy.id === "landmarks") {
      item.mapSrc = farmMapEmbedSrc(15, localeHl);
    }
    return item;
  });
}

export function buildRooms(t: Dictionary): RoomOffer[] {
  return t.rooms.offers.map((offer) => {
    const media = roomMedia[offer.slug];
    return {
      slug: offer.slug,
      name: offer.name,
      blurb: offer.blurb,
      bedLabel: offer.bedLabel,
      priceLabel: media.priceLabel,
      pricePersonsLabel: offer.pricePersonsLabel,
      image: media.image,
    };
  });
}

export function buildToursItems(t: Dictionary, localeHl = "en"): SplitItem[] {
  return mergeSplit(t.tours.items, localeHl);
}

export function buildFoodItems(t: Dictionary, localeHl = "en"): SplitItem[] {
  return mergeSplit(t.food.items, localeHl);
}

export function buildProductsItems(
  t: Dictionary,
  localeHl = "en",
): SplitItem[] {
  return mergeSplit(t.products.items, localeHl);
}

export function buildAboutItems(t: Dictionary, localeHl = "en"): SplitItem[] {
  const items = mergeSplit(t.about.items, localeHl);
  return items.map((item) => {
    if (item.id !== "landmarks") return item;
    return {
      ...item,
      features: t.landmarks.map((l) => `${l.name} — ${l.distance}`),
    };
  });
}

export function heroCardLabel(
  t: Dictionary,
  key: keyof Dictionary["heroCards"],
) {
  return t.heroCards[key];
}
