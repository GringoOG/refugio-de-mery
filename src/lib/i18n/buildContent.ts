import type { SplitItem } from "@/components/SplitCard";
import type { RoomOffer } from "@/components/RoomCard";
import type { Dictionary } from "@/lib/i18n/types";
import { farmMapEmbedSrc } from "@/lib/content";

const roomMedia: Record<
  RoomOffer["slug"],
  { priceLabel: string; singlePriceLabel?: string; image: string }
> = {
  "double-bed": {
    priceLabel: "150 PEN / 44 USD",
    image: "/photos/room-king-size.jpg",
  },
  "twin-beds": {
    priceLabel: "150 PEN / 44 USD",
    singlePriceLabel: "88 PEN / 26 USD",
    image: "/photos/room-twin-beds.jpg",
  },
  "triple-room": {
    priceLabel: "275 PEN / 81 USD",
    singlePriceLabel: "81 PEN / 24 USD",
    image: "/photos/room-king-size.jpg",
  },
};

const splitMedia: Record<
  string,
  {
    image: string;
    imageFit?: "cover" | "contain";
    priceLabel?: string;
    mapSrc?: boolean;
  }
> = {
  "tour-de-cafe": {
    image: "/photos/tour/tour-de-cafe-card.jpg",
    priceLabel: "15 PEN / 5 USD",
  },
  kitchen: { image: "/photos/food/foto11.jpg" },
  breakfast: { image: "/photos/food/breakfast.jpg" },
  guacamole: { image: "/photos/food/guacamole.jpg" },
  dessert: { image: "/photos/food/dessert.jpg" },
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
      imageFit: media.imageFit,
      priceLabel: media.priceLabel,
      priceSuffix: copy.priceSuffix,
    };
    if (copy.id === "landmarks") {
      item.mapSrc = farmMapEmbedSrc(15, localeHl);
      // features filled by caller for landmarks
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
      singlePriceLabel: media.singlePriceLabel,
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
