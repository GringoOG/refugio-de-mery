export type FaqItem = { q: string; a: string };
export type ExperienceTabCopy = {
  id: "tour" | "rooms" | "products";
  label: string;
  title: string;
  body: string;
  cta: string;
};
export type TestimonialCopy = {
  quote: string;
  name: string;
  from: string;
};
export type RoomCopy = {
  slug: "double-bed" | "twin-beds" | "triple-room" | "single-room";
  name: string;
  blurb: string;
  bedLabel: string;
  /** e.g. capacity / full-room total under the per-person rate */
  pricePersonsLabel?: string;
};
export type SplitCopy = {
  id: string;
  eyebrow?: string;
  title: string;
  blurb: string;
  features?: string[];
  priceSuffix?: string;
};

export type Dictionary = {
  nav: {
    home: string;
    rooms: string;
    tours: string;
    food: string;
    products: string;
    about: string;
    contact: string;
  };
  common: {
    bookNow: string;
    bookYourRoom: string;
    bookStay: string;
    bookYourStayToday: string;
    contact: string;
    sitemap: string;
    landmarks: string;
    language: string;
    socials: string;
    privacy: string;
    terms: string;
    night: string;
    person: string;
    persons: string;
    perPerson: string;
    perBag: string;
    submit: string;
    tapToPlay: string;
    hoverToPlay: string;
    videos: string;
    photos: string;
    fromFarmWalk: string;
  };
  hero: {
    title: string;
    body: string;
    bookDirect: string;
  };
  heroCards: {
    accommodation: string;
    tour: string;
    food: string;
    products: string;
  };
  experience: {
    tabs: ExperienceTabCopy[];
  };
  testimonials: {
    title: string;
    items: TestimonialCopy[];
  };
  amenities: {
    title: string;
    list: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    body: string;
    items: FaqItem[];
  };
  bookCta: {
    title: string;
  };
  instagram: {
    title: string;
    cta: string;
  };
  rooms: {
    pageTitle: string;
    pageBody: string;
    pageCta: string;
    amenities: string[];
    badges: string[];
    breakfastDinnerBadge: string;
    offers: RoomCopy[];
  };
  tours: {
    pageTitle: string;
    pageBody: string;
    pageCta: string;
    items: SplitCopy[];
  };
  food: {
    pageTitle: string;
    pageBody: string;
    pageCta: string;
    atmosphereTitle: string;
    atmosphereBody: string;
    items: SplitCopy[];
  };
  products: {
    pageTitle: string;
    pageBody: string;
    pageCta: string;
    items: SplitCopy[];
  };
  about: {
    pageTitle: string;
    pageBody: string;
    pageCta: string;
    items: SplitCopy[];
  };
  contact: {
    pageTitle: string;
    pageBody: string;
    pageCta: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      namePh: string;
      emailPh: string;
      phonePh: string;
      subjectPh: string;
      messagePh: string;
    };
  };
  landmarks: { name: string; distance: string }[];
};
