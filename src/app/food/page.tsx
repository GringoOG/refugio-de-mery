import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";

export default function FoodPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[78svh] overflow-hidden bg-[var(--dark)] text-white">
          <Image
            src="/photos/food.jpg"
            alt="Farm table at Refugio de Mery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex min-h-[78svh] items-center justify-center px-[var(--pad)] pb-16 pt-[calc(var(--nav-h)+2rem)]">
            <div className="arch-panel max-w-[42rem] bg-[var(--dark-panel)] px-8 py-11 text-center backdrop-blur-[3px]">
              <h1 className="display text-[clamp(2.6rem,5vw,4rem)]">Food</h1>
              <p className="mx-auto mt-5 max-w-[32rem] text-[0.98rem] leading-relaxed text-white/78">
                A taste of Lucmabamba — breakfast and dinner included with your
                stay, cooked in the moment and served with mountain views.
              </p>
              <a href="#table" className="btn btn-bronze mt-8">
                Explore our table
              </a>
            </div>
          </div>
        </section>

        <section id="table" className="section">
          <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-[var(--bronze)]">Half board</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)]">
                Meals grown close to the kitchen
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                Guests remember breakfast first: farm eggs, avocado from nearby
                trees, papaya juice, bread, cheese, honey, and espresso from the
                finca. Dinner arrives freshly cooked — often the best meal of the
                trek.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/photos/foto15.jpg"
                alt="Farm breakfast"
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
