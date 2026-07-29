import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { BlogStrip } from "@/components/BlogStrip";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";
import { roomPricing, site } from "@/lib/content";

const roomCards = [
  {
    eyebrow: "Restful stays surrounded by farm quiet",
    title: "Double room",
    body: "Private bathroom, terrace, mountain views, and half board included. Choose three singles or one extra-large double bed.",
    image: "/photos/foto3.jpg",
  },
  {
    eyebrow: "Wake up beside coffee trees and ridges",
    title: "Mountain terrace rooms",
    body: "Open air, hammock moments, and mornings that start with espresso from the same hillside.",
    image: "/photos/foto6.jpg",
  },
];

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[78svh] overflow-hidden bg-[var(--dark)] text-white">
          <Image
            src="/photos/foto3.jpg"
            alt="Rooms at Refugio de Mery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex min-h-[78svh] items-center justify-center px-[var(--pad)] pb-16 pt-[calc(var(--nav-h)+2rem)]">
            <div className="arch-panel max-w-[42rem] bg-[var(--dark-panel)] px-8 py-11 text-center backdrop-blur-[3px]">
              <h1 className="display text-[clamp(2.6rem,5vw,4rem)]">Rooms</h1>
              <p className="mx-auto mt-5 max-w-[32rem] text-[0.98rem] leading-relaxed text-white/78">
                Discover quiet spaces where cloud-forest mornings and thoughtful
                hospitality come together. From peaceful nights after the trek to
                terrace breakfasts with farm coffee.
              </p>
              <a href="#rooms" className="btn btn-bronze mt-8">
                Explore our rooms
              </a>
            </div>
          </div>
        </section>

        <section id="rooms" className="section">
          <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow text-[var(--bronze)]">Stay</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)]">
                Designed for comfort, privacy, and complete rest
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                {roomPricing.title}. Flexible bedding, private bathroom, terrace,
                Wi‑Fi, and breakfast & dinner in the rate.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {roomPricing.features.map((item) => (
                  <li
                    key={item}
                    className="border border-[var(--line)] px-3 py-1.5 text-[0.82rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {roomPricing.rates.map((rate) => (
                  <div key={rate.guests} className="border border-[var(--line)] p-5">
                    <p className="text-[0.75rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                      {rate.guests}
                    </p>
                    <p className="display mt-2 text-[2.1rem]">{rate.price}</p>
                    <p className="mt-1 text-[0.85rem] text-[var(--ink-muted)]">
                      {rate.fees}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bronze mt-8"
              >
                Book now
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/photos/foto6.jpg"
                alt="Breakfast terrace"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="shell grid gap-10">
            {roomCards.map((room, i) => (
              <article
                key={room.title}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div>
                  <p className="text-[0.9rem] text-[var(--ink-muted)]">{room.eyebrow}</p>
                  <h2 className="display mt-2 text-[clamp(2rem,3.5vw,2.8rem)]">
                    {room.title}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                    {room.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Testimonials />
        <Faq />
        <BlogStrip />
        <InstagramStrip />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
