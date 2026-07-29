import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[78svh] overflow-hidden bg-[var(--dark)] text-white">
          <Image
            src="/photos/products.jpg"
            alt="Coffee products from Refugio de Mery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex min-h-[78svh] items-center justify-center px-[var(--pad)] pb-16 pt-[calc(var(--nav-h)+2rem)]">
            <div className="arch-panel max-w-[42rem] bg-[var(--dark-panel)] px-8 py-11 text-center backdrop-blur-[3px]">
              <h1 className="display text-[clamp(2.6rem,5vw,4rem)]">Products</h1>
              <p className="mx-auto mt-5 max-w-[32rem] text-[0.98rem] leading-relaxed text-white/78">
                Take the farm home — roasted coffee from Lucmabamba, dried on the
                hillside and packed for the trail or the suitcase.
              </p>
              <a href="#products" className="btn btn-bronze mt-8">
                Explore our coffee
              </a>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-[var(--bronze)]">From the finca</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)]">
                Coffee grown where you sleep
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                Organic cherries from the family plots, dried and roasted on site.
                Guests can buy bags to take home after Tour de Café — a lasting
                taste of Lucmabamba on the route to Machu Picchu.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/photos/products.jpg"
                alt="Roasted coffee beans"
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
