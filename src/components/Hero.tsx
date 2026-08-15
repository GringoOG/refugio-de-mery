"use client";

import Image from "next/image";
import { ArchPanel } from "@/components/ArchPanel";
import { BookButton } from "@/components/BookButton";
import { TransitionLink } from "@/components/TransitionLink";
import { heroCards, site } from "@/lib/content";
import { useLocale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n/types";

const heroCardKeys: (keyof Dictionary["heroCards"])[] = [
  "accommodation",
  "tour",
  "food",
  "products",
];

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative z-[1] flex min-h-[100svh] flex-col overflow-hidden text-white">
      <div className="relative z-[1] mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-[var(--pad)] pb-[max(0.55rem,env(safe-area-inset-bottom,0px))] pt-[calc(var(--nav-offset)+clamp(0.85rem,3.5svh,4rem))]">
        <ArchPanel className="flex min-h-0 flex-1 flex-col items-center justify-center bg-[rgba(21,21,21,0.62)] px-5 py-[clamp(0.85rem,2.2svh,2.75rem)] text-center backdrop-blur-[6px] sm:px-14 md:px-24">
          <p className="eyebrow fade-up fade-up-1 max-w-[20rem] text-balance text-[0.68rem] tracking-[0.16em] text-white sm:max-w-none sm:text-[0.8125rem] sm:tracking-[0.22em]">
            {site.fullName.toUpperCase()}
          </p>
          <h1 className="display fade-up fade-up-2 mx-auto mt-[clamp(0.4rem,1.1svh,0.9rem)] max-w-[14ch] text-[clamp(1.7rem,5.2vw+1.2svh,4.1rem)] text-white sm:max-w-[16ch]">
            {t.hero.title}
          </h1>
          <p className="hero-lede fade-up fade-up-3 mx-auto mt-[clamp(0.45rem,1.2svh,1.1rem)] max-w-[36rem] text-pretty font-[family-name:var(--font-body)] text-[clamp(0.88rem,1.05svh+0.3vw,1.05rem)] leading-[1.5] text-white/88">
            {t.hero.body}
          </p>
          <BookButton
            roomSlug="double-bed"
            source="hero"
            className="btn btn-bronze fade-up fade-up-3 mt-[clamp(0.55rem,1.5svh,1.65rem)] w-full max-w-[16rem] sm:w-auto"
          >
            {t.common.bookYourRoom}
          </BookButton>
          <p className="fade-up fade-up-3 mt-3 max-w-[min(100%,42rem)] text-pretty text-[clamp(0.95rem,1.1vw+0.55svh,1.45rem)] font-semibold leading-snug tracking-[0.01em] text-[var(--cream)] sm:mt-4 sm:max-w-none sm:whitespace-nowrap lg:text-[clamp(1.05rem,1.35vw+0.35svh,1.55rem)]">
            {t.hero.bookDirect}
          </p>
        </ArchPanel>

        <div className="mt-[clamp(0.4rem,1svh,0.75rem)] grid shrink-0 grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4 lg:gap-2.5">
          {heroCards.map((card, i) => {
            const label = t.heroCards[heroCardKeys[i]];
            return (
              <TransitionLink
                key={card.href}
                href={card.href}
                className="group flex aspect-[6/5] flex-col overflow-hidden rounded-[4px] border border-white/18 bg-[rgba(21,21,21,0.62)] p-[clamp(0.28rem,0.7svh,0.55rem)] pb-0 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[6px] transition-colors duration-300 hover:border-white/28 hover:bg-[rgba(21,21,21,0.72)]"
              >
                <div className="relative min-h-0 flex-[0.78] overflow-hidden rounded-[3px]">
                  <Image
                    src={card.image}
                    alt={label}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="flex flex-[0.22] items-center justify-center px-1 text-center font-[family-name:var(--font-body)] text-[clamp(0.72rem,2.4vw,1.05rem)] font-medium leading-tight tracking-[0.02em] text-white sm:px-2">
                  {label}
                </p>
              </TransitionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
