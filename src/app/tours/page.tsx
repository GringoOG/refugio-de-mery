import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AmenitiesPanel } from "@/components/AmenitiesPanel";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";

export default function ToursPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[78svh] overflow-hidden bg-[var(--dark)] text-white">
          <Image
            src="/photos/foto12.jpg"
            alt="Tour de Café at Refugio de Mery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex min-h-[78svh] items-center justify-center px-[var(--pad)] pb-16 pt-[calc(var(--nav-h)+2rem)]">
            <div className="arch-panel max-w-[42rem] bg-[var(--dark-panel)] px-8 py-11 text-center backdrop-blur-[3px]">
              <h1 className="display text-[clamp(2.6rem,5vw,4rem)]">Tours</h1>
              <p className="mx-auto mt-5 max-w-[32rem] text-[0.98rem] leading-relaxed text-white/78">
                Walk Tour de Café from cherry to cup on the same hillside where
                you sleep — organic coffee, mountain air, and family hospitality.
              </p>
              <a href="#tour" className="btn btn-bronze mt-8">
                Explore Tour de Café
              </a>
            </div>
          </div>
        </section>

        <section id="tour" className="section">
          <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/photos/tour-de-cafe.jpg"
                alt="Coffee cherries on the farm"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <p className="eyebrow text-[var(--bronze)]">Tour de Café</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)]">
                Walk the process, taste the farm
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                From cherry to cup on the same hillside where you sleep. A guided
                Tour de Café through growing, drying, and roasting — with coffee
                available to take home.
              </p>
            </div>
          </div>
        </section>

        <AmenitiesPanel />
        <Testimonials />
        <Faq />
        <InstagramStrip />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
