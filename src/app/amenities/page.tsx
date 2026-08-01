import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { SplitStack } from "@/components/SplitCard";
import { amenitiesItems } from "@/lib/pageItems";

export default function AmenitiesPage() {
  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <PageHero
          title="Amenities"
          body="Tour de Café, mountain terrace, garden paths, and the quiet of an organic coffee farm between Salkantay and Machu Picchu."
          ctaLabel="Explore the farm"
          ctaHref="#offers"
        />

        <section
          id="offers"
          className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-2 pb-10 sm:pt-3 sm:pb-14"
        >
          <SplitStack items={amenitiesItems} />
        </section>

        <BookCta />
      </main>
      <Footer />
    </>
  );
}
