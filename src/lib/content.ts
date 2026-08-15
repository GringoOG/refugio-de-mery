export const site = {
  name: "Refugio de Mery",
  fullName: "Refugio de Mery Lucmabamba",
  tagline: "Coffee farm lodging on the Salkantay Trek",
  location: "Lucmabamba, Sahuayacu · La Convención, Peru",
  email: "stay@refugiodemery.com",
  /**
   * Public phone / WhatsApp. Leave empty until the client provides a real number —
   * never publish placeholder digits (hurts trust + local SEO).
   */
  phone: "",
  /** Farm pin used for embedded maps */
  lat: -13.212081,
  lng: -72.614829,
};

export function hasPublicPhone() {
  return Boolean(site.phone?.trim()) && !/000[\s-]*000/.test(site.phone);
}

/** Google Maps embed for the farm pin. */
export function farmMapEmbedSrc(zoom = 15, hl = "en") {
  return `https://maps.google.com/maps?q=${site.lat},${site.lng}&z=${zoom}&hl=${hl}&ie=UTF8&output=embed`;
}

export const nav = [
  { href: "/", key: "home" as const },
  { href: "/rooms", key: "rooms" as const },
  { href: "/tours", key: "tours" as const },
  { href: "/food", key: "food" as const },
  { href: "/products", key: "products" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export const footerSitemap = nav;

export const landmarks = [
  { name: "The Ruins of Intipata", distance: "8.4 km" },
  { name: "Inca Bridge", distance: "9.0 km" },
  { name: "Puyapatamarca", distance: "9.0 km" },
  { name: "Peru Inkas Collection", distance: "9.2 km" },
  { name: "Machu Picchu Historic Sanctuary", distance: "9.3 km" },
];

/** Shared room facts — shown on every room card. */
export const roomAmenities = [
  "Balcony / terrace",
  "Private bathroom",
  "Toiletries",
  "Towels",
  "Welcome drink — chilled homemade lemonade",
];

export const roomBookingBadges = [
  "No credit card needed to reserve",
  "Breakfast & dinner included",
  "Free cancellation",
  "Pay at the property",
  "Card payment — no extra fees",
  "Balcony / terrace",
  "Mountain view",
];

export const heroCards = [
  {
    href: "/rooms",
    image: "/photos/accommodation.jpg",
  },
  {
    href: "/tours",
    image: "/photos/tour-de-cafe-cherries.jpg",
  },
  {
    href: "/food",
    image: "/photos/food.jpg",
  },
  {
    href: "/products",
    image: "/photos/products.jpg",
  },
];

export const experienceTabs = [
  {
    id: "tour",
    label: "TOUR",
    title: "Moments designed beyond the stay",
    body: "Discover Tour de Café, mountain air, and farm moments that make every stay memorable.",
    cta: "Explore our tours",
    href: "/tours",
    image: "/photos/experience-tour.jpg",
  },
  {
    id: "rooms",
    label: "ROOMS",
    title: "Where rest meets farm quiet",
    body: "Double rooms with private bathroom, terrace, and mountain views — built for rest after the Salkantay days.",
    cta: "Explore our rooms",
    href: "/rooms",
    image: "/photos/experience-rooms.jpg",
  },
  {
    id: "products",
    label: "PRODUCTS",
    title: "Coffee grown on the same hillside",
    body: "Take home roasted beans from the farm — organic coffee shaped by Lucmabamba’s climate and family craft.",
    cta: "Explore our products",
    href: "/products",
    image: "/photos/experience-products.jpg",
    imagePosition: "center bottom",
  },
];

export const testimonials = [
  {
    quote:
      "We arrived exhausted after the Salkantay, and Refugio de Mery felt like a true pause. Hot shower, quiet room, warm welcome — and breakfast was the best on the trail: guacamole, eggs, and farm-roasted espresso.",
    name: "Miroslav",
    from: "From Czech Republic",
    image: "/photos/testimonial-1.jpg",
    width: 1800,
    height: 1350,
  },
  {
    quote:
      "Staying with Mery on her coffee farm was the highlight of our Peru trip. Homemade dinner, an even better breakfast, and mornings learning coffee from cherry to cup. Kind hosts and a calm rhythm — a real farm stay to remember.",
    name: "Lenka",
    from: "From Czech Republic",
    image: "/photos/testimonial-2.jpg",
    width: 1050,
    height: 1400,
  },
  {
    quote:
      "Right on the Salkantay route, yet far from the rush. Fresh farm coffee at breakfast, a wonderful dinner at the family table, and hosts who treated us like friends. Simple, generous, and rooted in the hillside.",
    name: "Sofia",
    from: "From Spain",
    image: "/photos/testimonial-3.jpg",
    width: 1410,
    height: 1800,
  },
  {
    quote:
      "After days of trail food, a real dinner here felt almost unfair. Generous plates, honest cooking, and farm-roasted coffee — the best cup we had in Peru.",
    name: "Antoine",
    from: "From France",
    image: "/photos/testimonial-4.jpg",
    width: 1024,
    height: 768,
  },
  {
    quote:
      "I did not expect food this good on a mountain coffee farm. Warm dinner after the hike, breakfast even better, and mornings with coffee roasted right here.",
    name: "Klara",
    from: "From Germany",
    image: "/photos/testimonial-5.jpg",
    width: 1024,
    height: 768,
  },
  {
    quote:
      "Between sore legs and Machu Picchu we found real food again. Homemade half-board meals and farm coffee that puts trail sachets to shame.",
    name: "Jasper",
    from: "From the Netherlands",
    image: "/photos/testimonial-6.jpg",
    width: 1024,
    height: 768,
  },
];

export const amenitiesList = [
  "Family reception",
  "Mountain terrace",
  "Private bathrooms",
  "Farm kitchen table",
  "Organic coffee plots",
  "Garden pathways",
  "Hammock lounge",
  "Hot showers",
  "Free Wi‑Fi",
  "Pet-friendly stay",
  "Tour de Café",
  "Roast your own coffee batch",
  "Half-board meals",
  "Trek rest stop",
  "Valley views",
  "Local store resupply",
];

export const faqs = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 12:00 and check-out is by 11:00.",
  },
  {
    q: "Are breakfast and dinner included?",
    a: "Yes. Half board is included — breakfast and dinner with every overnight stay. We offer meat and vegetarian options. Dinner choices include trout, chicken or beef, always with a generous serving of stewed vegetables. Homemade guacamole is served after Tour de Café or with breakfast.",
  },
  {
    q: "What does a room cost?",
    a: "The rate is always 70 PEN / 20 USD per person per night — for every room type. Breakfast and dinner, private bathroom, hot shower, and Wi‑Fi are included. No prepayment required.",
  },
  {
    q: "Do you offer a coffee tour?",
    a: "Yes. Tour de Café walks guests through the farm process — including roasting a generous batch of coffee yourself.",
  },
  {
    q: "How far is Machu Picchu?",
    a: "About 19 km from Machu Picchu Historic Sanctuary, on the Salkantay Trek route through Lucmabamba.",
  },
  {
    q: "How do I pay?",
    a: "No card is needed to reserve. You pay at the property — card payment is accepted with no extra fees.",
  },
];

export const roomPricing = {
  title: "Double room with double or twin beds",
  beds: ["3 single beds", "1 extra-large double bed"],
  features: [
    "Mountain view",
    "Private bathroom",
    "Terrace",
    "Free Wi‑Fi",
    "Breakfast & dinner included",
  ],
  rates: [
    { guests: "2 guests", price: "PEN 119", fees: "+ PEN 33 taxes & fees" },
    { guests: "1 guest", price: "PEN 71", fees: "+ PEN 20 taxes & fees" },
  ],
};
