"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { SplitStack } from "@/components/SplitCard";
import { buildAboutItems, useLocale } from "@/lib/i18n";

export default function AboutPage() {
  const { t, locale } = useLocale();
  const items = buildAboutItems(t, locale);

  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <PageHero
          title={t.about.pageTitle}
          body={t.about.pageBody}
          ctaLabel={t.about.pageCta}
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
