"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () =>
    setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));

  return (
    <section className="section bg-[var(--bg)]">
      <div className="shell">
        <h2 className="display text-center text-[clamp(2.2rem,4.5vw,3.4rem)]">
          Stories shared by our guests
        </h2>

        <div className="mt-12 grid min-h-[460px] overflow-hidden lg:grid-cols-[1.35fr_0.85fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-[var(--bg-soft)]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="relative flex flex-col justify-between bg-white p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-16 w-16 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <p className="max-w-[28rem] text-[1.02rem] leading-relaxed text-[var(--ink-soft)]">
                {item.quote}
              </p>
              <p className="mt-8 font-medium">{item.name}</p>
              <p className="text-[0.9rem] text-[var(--ink-muted)]">{item.from}</p>
            </div>

            <div className="mt-10 flex justify-end gap-2">
              <button
                type="button"
                onClick={prev}
                className="grid h-10 w-10 place-items-center bg-[var(--bronze)] text-white"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="grid h-10 w-10 place-items-center bg-[var(--bronze)] text-white"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
