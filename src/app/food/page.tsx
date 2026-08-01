"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { SplitStack } from "@/components/SplitCard";
import { buildFoodItems, useLocale } from "@/lib/i18n";

export default function FoodPage() {
  const { t, locale } = useLocale();
  const items = buildFoodItems(t, locale);

  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <PageHero
          title={t.food.pageTitle}
          body={t.food.pageBody}
          ctaLabel={t.food.pageCta}
          ctaHref="#offers"
        />

        <section
          id="offers"
          className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-2 pb-10 sm:pt-3 sm:pb-14"
        >
          <SplitStack items={items} />
        </section>

        <BookCta />
      </main>
      <Footer />
    </>
  );
}
