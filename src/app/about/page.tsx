import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[78svh] overflow-hidden bg-[var(--dark)] text-white">
          <Image
            src="/photos/foto3.jpg"
            alt="Refugio de Mery Lucmabamba"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex min-h-[78svh] items-center justify-center px-[var(--pad)] pb-16 pt-[calc(var(--nav-h)+2rem)]">
            <div className="arch-panel max-w-[42rem] bg-[var(--dark-panel)] px-8 py-11 text-center backdrop-blur-[3px]">
              <h1 className="display text-[clamp(2.6rem,5vw,4rem)]">About</h1>
              <p className="mx-auto mt-5 max-w-[32rem] text-[0.98rem] leading-relaxed text-white/78">
                A family coffee-farm stay in Lucmabamba — quiet rooms, half-board
                meals, and Tour de Café on the Salkantay route to Machu Picchu.
              </p>
              <a href="#story" className="btn btn-bronze mt-8">
                Our story
              </a>
            </div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-[var(--bronze)]">{site.fullName}</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)]">
                A refugio between coffee trees and ridges
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                Hidden in the cloud-forest hills of Lucmabamba, {site.name} is a
                family lodging built for slower mornings after the trek. Guests
                rest in private rooms, share farm breakfasts and dinners, and walk
                the coffee process from cherry to cup — all on the way to Machu
                Picchu.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                {site.location}
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/photos/foto6.jpg"
                alt="Coffee farm landscape"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </section>

        <Testimonials />
        <Faq />
        <InstagramStrip />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
