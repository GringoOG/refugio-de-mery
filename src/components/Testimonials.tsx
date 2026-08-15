"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

const media = [
  {
    image: "/photos/testimonial-1.jpg",
    width: 1024,
    height: 768,
  },
  {
    image: "/photos/testimonial-2.jpg",
    width: 1050,
    height: 1400,
  },
  {
    image: "/photos/testimonial-3.jpg",
    width: 1024,
    height: 768,
  },
  {
    image: "/photos/testimonial-4.jpg",
    width: 1024,
    height: 768,
  },
  {
    image: "/photos/testimonial-5.jpg",
    width: 1024,
    height: 768,
  },
  {
    image: "/photos/testimonial-6.jpg",
    width: 1024,
    height: 768,
  },
];

export function Testimonials() {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);
  const copy = t.testimonials.items[index];
  const shot = media[index];

  const prev = () =>
    setIndex((current) =>
      current === 0 ? t.testimonials.items.length - 1 : current - 1,
    );
  const next = () =>
    setIndex((current) =>
      current === t.testimonials.items.length - 1 ? 0 : current + 1,
    );

  return (
    <section className="relative z-[1] overflow-x-clip px-[var(--pad)] py-5 sm:py-8">
      <div className="shell">
        <div className="flex flex-col overflow-hidden rounded-[20px] bg-[var(--bg)] px-4 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:rounded-[36px] sm:px-8 sm:py-8 md:px-10 lg:max-h-[calc(100svh-1.5rem)]">
          <h2 className="display shrink-0 text-center text-[clamp(1.45rem,5.5vw,2.35rem)]">
            {t.testimonials.title}
          </h2>

          <div className="mt-4 grid min-h-0 flex-1 grid-rows-[auto_auto] gap-0 overflow-hidden lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-1 lg:items-stretch">
            <div className="flex min-h-0 items-center justify-center overflow-hidden bg-[var(--bg-soft)]">
              <Image
                key={shot.image}
                src={shot.image}
                alt={copy.name}
                width={shot.width}
                height={shot.height}
                className="h-auto max-h-[min(38svh,280px)] w-auto max-w-full object-contain sm:max-h-[min(42svh,360px)] lg:max-h-[min(58svh,520px)]"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority={index === 0}
              />
            </div>

            <div className="relative flex min-h-0 flex-col justify-between bg-white p-4 sm:p-7 lg:p-8">
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <p className="max-w-[30rem] text-pretty text-[0.9rem] leading-[1.65] text-[var(--ink-soft)] line-clamp-7 sm:line-clamp-none sm:text-[1.02rem] lg:line-clamp-[11]">
                  {copy.quote}
                </p>
                <p className="mt-5 font-medium sm:mt-6">{copy.name}</p>
                <p className="text-[0.85rem] text-[var(--ink-muted)]">
                  {copy.from}
                </p>
              </div>

              <div className="mt-5 flex justify-center gap-2 sm:mt-6 sm:justify-end">
                <button
                  type="button"
                  onClick={prev}
                  className="grid h-10 w-10 place-items-center bg-[var(--bronze)] text-white sm:h-9 sm:w-9"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="grid h-10 w-10 place-items-center bg-[var(--bronze)] text-white sm:h-9 sm:w-9"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
