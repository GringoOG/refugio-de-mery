"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { SplitStack } from "@/components/SplitCard";
import { TourMediaSplit } from "@/components/TourMediaSplit";
import { Reveal } from "@/components/Reveal";
import { tourPhotos, tourVideos } from "@/lib/pageItems";
import { buildToursItems, useLocale } from "@/lib/i18n";

export default function ToursPage() {
  const { t, locale } = useLocale();
  const items = buildToursItems(t, locale);

  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <PageHero
          title={t.tours.pageTitle}
          body={t.tours.pageBody}
          ctaLabel={t.tours.pageCta}
          ctaHref="#offers"
        />

        <section
          id="offers"
          className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-2 pb-6 sm:pt-3 sm:pb-8"
        >
          <SplitStack items={items} />
        </section>

        <Reveal delay={80}>
          <TourMediaSplit videos={tourVideos} photos={tourPhotos} />
        </Reveal>

        <BookCta />
      </main>
      <Footer />
    </>
  );
}
