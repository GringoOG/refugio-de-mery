"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { buildRooms, useLocale } from "@/lib/i18n";

export default function RoomsPage() {
  const { t } = useLocale();
  const rooms = buildRooms(t);

  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <PageHero
          title={t.rooms.pageTitle}
          body={t.rooms.pageBody}
          ctaLabel={t.rooms.pageCta}
          ctaHref="#rooms"
        />

        <section
          id="rooms"
          className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-2 pb-10 sm:pt-3 sm:pb-14"
        >
          <div className="shell flex flex-col gap-3 sm:gap-4">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        <BookCta />
      </main>
      <Footer />
    </>
  );
}
