"use client";

import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { useLocale } from "@/lib/i18n";

export type RoomOffer = {
  slug: string;
  name: string;
  blurb: string;
  bedLabel: string;
  /** e.g. "70 PEN / 20 USD" — always per person */
  priceLabel: string;
  /** Capacity / full-room total, e.g. "Up to 2 guests · 140 PEN / 40 USD" */
  pricePersonsLabel?: string;
  image: string;
};

export function RoomCard({
  room,
  reverse = false,
}: {
  room: RoomOffer;
  reverse?: boolean;
}) {
  const { t } = useLocale();
  const badges = [...t.rooms.badges, room.bedLabel];

  return (
    <article className="overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_28px_rgba(20,24,20,0.06)] sm:rounded-[1.75rem]">
      <div
        className={`grid grid-cols-1 items-stretch lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="order-2 flex flex-col justify-between p-5 sm:p-8 md:p-10 lg:order-none">
          <div>
            <h2 className="display text-[clamp(1.55rem,5.5vw,2.55rem)] italic leading-[1.08] text-[var(--ink)]">
              {room.name}
            </h2>
            <p className="mt-3 max-w-md text-pretty text-[0.92rem] leading-relaxed text-[var(--ink-soft)] sm:text-[0.95rem]">
              {room.blurb}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              {badges.map((badge) => {
                const highlight = badge === t.rooms.breakfastDinnerBadge;
                return (
                  <span
                    key={badge}
                    className={`inline-flex max-w-full items-center rounded-full border bg-white px-2.5 py-1 text-left text-[0.72rem] leading-snug sm:px-3 sm:py-1.5 sm:text-[0.78rem] ${
                      highlight
                        ? "border-[var(--bronze-deep)] text-[var(--bronze-deep)]"
                        : "border-[var(--line)] text-[var(--ink-soft)]"
                    }`}
                  >
                    {badge}
                  </span>
                );
              })}
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-5 sm:mt-7 sm:pt-6">
              {t.rooms.amenities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[0.9rem] text-[var(--ink-soft)] sm:text-[0.92rem]"
                >
                  <span
                    className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(122,90,63,0.12)] text-[0.55rem] text-[var(--bronze)]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[1.02rem] font-semibold tracking-tight text-[var(--ink)] sm:text-xl">
                {room.priceLabel}{" "}
                <span className="text-sm font-normal text-[var(--ink-muted)]">
                  / {t.common.person} / {t.common.night}
                </span>
              </p>
              {room.pricePersonsLabel ? (
                <p className="text-[0.9rem] text-[var(--ink-muted)]">
                  {room.pricePersonsLabel}
                </p>
              ) : null}
            </div>
            <BookButton
              roomSlug={room.slug}
              source={`room-card-${room.slug}`}
              className="btn btn-bronze w-full sm:w-auto"
            >
              {t.common.bookStay}
            </BookButton>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/3] w-full overflow-hidden sm:aspect-[4/5] lg:order-none lg:aspect-auto lg:min-h-[520px]">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
            quality={75}
          />
        </div>
      </div>
    </article>
  );
}
