"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
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

        <section className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-2 sm:pt-3">
          <Reveal as="div" className="shell">
            <figure className="overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_28px_rgba(20,24,20,0.06)] sm:rounded-[1.75rem]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
                <Image
                  src="/photos/food/dinner-table.jpg"
                  alt={t.food.atmosphereTitle}
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  quality={85}
                  priority
                />
              </div>
              <figcaption className="border-t border-[var(--line)] px-5 py-5 sm:px-8 sm:py-6 md:px-10">
                <p className="eyebrow text-[var(--bronze)]">
                  {t.food.atmosphereTitle}
                </p>
                <p className="mt-2 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-[var(--ink-soft)] sm:text-[1rem]">
                  {t.food.atmosphereBody}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section
          id="offers"
          className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-3 pb-10 sm:pt-4 sm:pb-14"
        >
          <SplitStack items={items} />
        </section>

        <BookCta />
      </main>
      <Footer />
    </>
  );
}
