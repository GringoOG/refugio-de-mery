export const site = {
  name: "Refugio de Mery",
  fullName: "Refugio de Mery Lucmabamba",
  tagline: "Coffee farm lodging on the Salkantay Trek",
  location: "Lucmabamba, Sahuayacu · La Convención, Peru",
  email: "stay@refugiodemery.com",
  phone: "+51 984 000 000",
  /** Farm pin used for embedded maps */
  lat: -13.212081,
  lng: -72.614829,
};

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
      "We arrived exhausted after a long day on the Salkantay Trek, and Refugio de Mery felt like a true pause. A hot shower, a quiet private room, and the warmest welcome from the family. Breakfast the next morning was the best we had on the trail — fresh guacamole, eggs, and espresso roasted on the farm. You can taste the care in every detail, from the hammock on the terrace to the mountain air outside the door. We left rested, grateful, and already planning to return.",
    name: "Miroslav",
    from: "From Czech Republic",
    image: "/photos/testimonial-1.jpg",
    width: 1800,
    height: 1350,
  },
  {
    quote:
      "Staying with Mery on her organic coffee farm was the highlight of our Peru trip. Dinner was homemade and generous, breakfast even better, and the beds were soft after days of walking. We spent evenings on the terrace hammock watching the ridges change colour, and mornings learning how coffee moves from cherry to cup. Clean rooms, kind hosts, and a calm rhythm that made us slow down. If you want more than a night stop before Machu Picchu, this place gives you a real farm stay to remember.",
    name: "Lenka",
    from: "From Czech Republic",
    image: "/photos/testimonial-2.jpg",
    width: 1800,
    height: 1350,
  },
  {
    quote:
      "The refugio sits right on the Salkantay route, yet it feels far from the rush of the trail. Fresh farm coffee at breakfast, an amazing dinner shared at the family table, and hosts who treated us like friends before our day to Machu Picchu. We walked through the coffee plots, listened to stories about the land, and slept deeply in a quiet room with mountain views. It is the kind of stay that stays with you — simple, generous, and rooted in the hillside.",
    name: "Sofia",
    from: "From Spain",
    image: "/photos/testimonial-3.jpg",
    width: 1410,
    height: 1800,
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
