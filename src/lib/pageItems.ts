/**
 * Split-stack content per page (same zig-zag as Rooms).
 * Add / edit items here as you send final copy + photos.
 */

import type { SplitItem } from "@/components/SplitCard";
import { landmarks, site, farmMapEmbedSrc } from "@/lib/content";

export const toursItems: SplitItem[] = [
  {
    id: "tour-de-cafe",
    eyebrow: "Signature experience",
    title: "Tour de Café",
    blurb:
      "Walk the coffee process from cherry to cup on the hillside where you sleep — growing, drying, roasting, and tasting. You roast a generous batch yourself as part of the tour.",
    image: "/photos/tour/tour-de-cafe-card.jpg",
    features: [
      "Guided farm walk",
      "From cherry to cup",
      "Organic hillside plots",
      "A generous coffee batch you roast yourself",
      "Organic honey tasting from wild forest bees",
    ],
    priceLabel: "15 PEN / 5 USD",
    priceSuffix: "/ person",
  },
];

/** Tour gallery — videos left, photos right. */
export const tourVideos: {
  id: string;
  src: string;
  poster?: string;
  label?: string;
}[] = [
  {
    id: "IMG_2793",
    src: "/videos/tour/IMG_2793.mp4",
    poster: "/photos/tour/IMG_2793-poster.jpg",
  },
  {
    id: "IMG_2803",
    src: "/videos/tour/IMG_2803.mp4",
    poster: "/photos/tour/IMG_2803-poster.jpg",
  },
  {
    id: "IMG_2806",
    src: "/videos/tour/IMG_2806.mp4",
    poster: "/photos/tour/IMG_2806-poster.jpg",
  },
  {
    id: "IMG_8383",
    src: "/videos/tour/IMG_8383.mp4",
    poster: "/photos/tour/IMG_8383-poster.jpg",
  },
  {
    id: "IMG_8394",
    src: "/videos/tour/IMG_8394.mp4",
    poster: "/photos/tour/IMG_8394-poster.jpg",
  },
  {
    id: "IMG_8397",
    src: "/videos/tour/IMG_8397.mp4",
    poster: "/photos/tour/IMG_8397-poster.jpg",
  },
  {
    id: "IMG_8398",
    src: "/videos/tour/IMG_8398.mp4",
    poster: "/photos/tour/IMG_8398-poster.jpg",
  },
  {
    id: "IMG_8401",
    src: "/videos/tour/IMG_8401.mp4",
    poster: "/photos/tour/IMG_8401-poster.jpg",
  },
];

export const tourPhotos: {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}[] = [
  {
    id: "foto15",
    src: "/photos/tour/foto15.jpg",
    alt: "Pouring ripe coffee cherries into the farm pulping machine",
    width: 576,
    height: 768,
  },
  {
    id: "foto13",
    src: "/photos/tour/foto13.jpg",
    alt: "Guests and host gathered at the farm lodge after Tour de Café",
    width: 1024,
    height: 614,
  },
  {
    id: "foto14",
    src: "/photos/tour/foto14.jpg",
    alt: "Freshly harvested coffee cherries poured into the processing hopper",
    width: 652,
    height: 768,
  },
  { id: "IMG_2795", src: "/photos/tour/IMG_2795.jpg", alt: "Holding ripe coffee cherries on the farm", width: 1050, height: 1400 },
  { id: "IMG_2797", src: "/photos/tour/IMG_2797.jpg", alt: "Parchment coffee beans on the drying bed", width: 1400, height: 1050 },
  { id: "IMG_2798", src: "/photos/tour/IMG_2798.jpg", alt: "Parchment coffee beans drying close-up", width: 1050, height: 1400 },
  { id: "IMG_2804", src: "/photos/tour/IMG_2804.jpg", alt: "Grinding coffee on the farm", width: 1050, height: 1400 },
  { id: "IMG_8381", src: "/photos/tour/IMG_8381.jpg", alt: "Harvesting coffee cherries", width: 1050, height: 1400 },
  { id: "IMG_8382", src: "/photos/tour/IMG_8382.jpg", alt: "Coffee cherries ripening on the branch", width: 1050, height: 1400 },
  { id: "IMG_8384", src: "/photos/tour/IMG_8384.jpg", alt: "Green and parchment coffee beans in hand", width: 1050, height: 1400 },
  { id: "IMG_8389", src: "/photos/tour/IMG_8389.jpg", alt: "Coffee plant with ripening cherries", width: 1050, height: 1400 },
  { id: "IMG_8390", src: "/photos/tour/IMG_8390.jpg", alt: "Coffee cherries on the hillside plant", width: 1050, height: 1400 },
  { id: "IMG_8396", src: "/photos/tour/IMG_8396.jpg", alt: "Roasting coffee over open fire", width: 1050, height: 1400 },
  { id: "IMG_8399", src: "/photos/tour/IMG_8399.jpg", alt: "Stirring coffee on the farm stove", width: 1050, height: 1400 },
  { id: "IMG_8402", src: "/photos/tour/IMG_8402.jpg", alt: "Freshly roasted coffee on the tray", width: 1050, height: 1400 },
];

export const foodItems: SplitItem[] = [
  {
    id: "kitchen",
    eyebrow: "Half board",
    title: "Meat & vegetarian kitchen",
    blurb:
      "We cook for every guest — meat dishes and vegetarian plates, homemade and generous, served with mountain air.",
    image: "/photos/food/foto11.jpg",
    features: [
      "Meat and vegetarian options",
      "Trout, chicken or beef",
      "Every plate comes with stewed vegetables",
    ],
  },
  {
    id: "breakfast",
    eyebrow: "Half board",
    title: "Breakfast",
    blurb:
      "A generous farm breakfast to start the day — coffee or tea, egg omelette with tomato, guacamole, chips, cheese, butter and jam.",
    image: "/photos/food/breakfast.jpg",
    features: [
      "Coffee & tea",
      "Egg omelette with tomato",
      "Guacamole & chips",
      "Cheese, butter & jam",
      "Included with your stay",
    ],
  },
  {
    id: "guacamole",
    eyebrow: "Our specialty",
    title: "Homemade guacamole",
    blurb:
      "Our signature guacamole — after Tour de Café or with breakfast. Fresh, generous, and the taste guests ask for again.",
    image: "/photos/food/guacamole.jpg",
    features: [
      "With Tour de Café or breakfast",
      "Made from farm-grown avocado",
      "Prepared fresh to order",
      "Served with warm chips",
    ],
  },
  {
    id: "dessert",
    eyebrow: "Sweet finish",
    title: "Homemade dessert",
    blurb:
      "A warm farm dessert to finish the meal — rich sauce, caramelised fruit, and a crisp chocolate touch.",
    image: "/photos/food/dessert.jpg",
    features: ["Homemade on the farm", "Served with half-board meals"],
  },
];

export const productsItems: SplitItem[] = [
  {
    id: "coffee",
    eyebrow: "From the finca",
    title: "Coffee",
    blurb:
      "Take our coffee home as a gift — or for your own cup. Carry a piece of the farm with you.",
    image: "/photos/products/coffee-bag.jpg",
    imageFit: "contain",
    features: [
      "Roasted on the farm",
      "Perfect as a gift",
      "A taste of Lucmabamba to take home",
    ],
    priceLabel: "30 PEN / 9 USD",
    priceSuffix: "/ bag",
  },
  {
    id: "honey",
    eyebrow: "From the finca",
    title: "Honey",
    blurb:
      "Pure organic honey from wild forest bees, produced on our farm.",
    image: "/photos/foto4.jpg",
    features: [
      "Organic honey",
      "From wild forest bees",
      "Produced on the farm",
    ],
  },
];

export const aboutItems: SplitItem[] = [
  {
    id: "story",
    eyebrow: site.fullName,
    title: "A refugio between coffee trees and ridges",
    blurb: `${site.name} is a family coffee farm with more than 20 years of history — and more than 10 years welcoming overnight guests. Private rooms, shared farm meals, and Tour de Café on the way to Machu Picchu.`,
    image: "/photos/about-farm.jpg",
    features: [
      "Coffee farm for more than 20 years",
      "Guest lodging for more than 10 years",
      "Family hospitality",
      site.location,
    ],
  },
  {
    id: "landmarks",
    eyebrow: "Nearby",
    title: "Closest landmarks",
    blurb:
      "Within about 8–9 km of Intipata, Inca Bridge, Puyapatamarca, and Machu Picchu Historic Sanctuary.",
    image: "/photos/foto9.jpg",
    mapSrc: farmMapEmbedSrc(15),
    features: landmarks.map((l) => `${l.name} — ${l.distance}`),
  },
];

export const amenitiesItems: SplitItem[] = [
  {
    id: "terrace",
    eyebrow: "On the farm",
    title: "Mountain terrace & garden paths",
    blurb:
      "Quiet outdoor space among coffee trees — a place to rest after the trek with hillside views.",
    image: "/photos/foto12.jpg",
    features: ["Terrace views", "Garden paths", "Mountain air"],
  },
  {
    id: "more-amenities",
    eyebrow: "Coming soon",
    title: "More amenities",
    blurb:
      "Additional farm amenities will appear here as you send copy and photos.",
    image: "/photos/foto4.jpg",
    features: ["Placeholder item", "Ready for your content"],
  },
];
