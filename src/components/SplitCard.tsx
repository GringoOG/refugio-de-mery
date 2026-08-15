import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export type SplitItem = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  /** Extra photos in the media panel (first in array is secondary; `image` stays primary). */
  images?: string[];
  eyebrow?: string;
  features?: string[];
  badges?: string[];
  highlightBadge?: string;
  /** e.g. "15 PEN / 5 USD" */
  priceLabel?: string;
  priceSuffix?: string;
  /** Default cover. Use contain to show the full product photo. */
  imageFit?: "cover" | "contain";
  /** When set, shows an embedded map instead of the image. */
  mapSrc?: string;
};

export function SplitCard({
  item,
  reverse = false,
  footer,
}: {
  item: SplitItem;
  reverse?: boolean;
  footer?: ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_28px_rgba(20,24,20,0.06)] sm:rounded-[1.75rem]">
      <div
        className={`grid grid-cols-1 items-stretch lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="order-2 flex flex-col justify-between p-5 sm:p-8 md:p-10 lg:order-none">
          <div>
            {item.eyebrow ? (
              <p className="eyebrow text-[var(--bronze)]">{item.eyebrow}</p>
            ) : null}
            <h2
              className={`display text-[clamp(1.55rem,5.5vw,2.55rem)] italic leading-[1.08] text-[var(--ink)] ${
                item.eyebrow ? "mt-2" : ""
              }`}
            >
              {item.title}
            </h2>
            <p className="mt-3 max-w-md text-pretty text-[0.92rem] leading-relaxed text-[var(--ink-soft)] sm:text-[0.95rem]">
              {item.blurb}
            </p>

            {item.badges && item.badges.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                {item.badges.map((badge) => {
                  const highlight = badge === item.highlightBadge;
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
            ) : null}

            {item.features && item.features.length > 0 ? (
              <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-5 sm:mt-7 sm:pt-6">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[0.9rem] text-[var(--ink-soft)] sm:text-[0.92rem]"
                  >
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(122,90,63,0.12)] text-[0.55rem] text-[var(--bronze)]"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {(footer || item.priceLabel) ? (
            <div className="mt-7 sm:mt-10">
              {item.priceLabel ? (
                <p className="text-[1.02rem] font-semibold tracking-tight text-[var(--ink)] sm:text-xl">
                  {item.priceLabel}{" "}
                  <span className="text-sm font-normal text-[var(--ink-muted)]">
                    {item.priceSuffix ?? "/ person"}
                  </span>
                </p>
              ) : null}
              {footer}
            </div>
          ) : null}
        </div>

        <div className="relative order-1 w-full overflow-hidden bg-[var(--bg-soft)] lg:order-none lg:min-h-[460px]">
          {item.mapSrc ? (
            <div className="relative aspect-[4/3] w-full sm:aspect-[4/5] lg:absolute lg:inset-0 lg:aspect-auto">
              <iframe
                title={`Map — ${item.title}`}
                src={item.mapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          ) : item.images && item.images.length > 0 ? (
            <div className="grid h-full grid-rows-[1.35fr_1fr] gap-1.5 p-1.5 sm:gap-2 sm:p-2 lg:absolute lg:inset-0">
              <div className="relative min-h-[200px] overflow-hidden sm:min-h-[240px] lg:min-h-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={
                    item.imageFit === "contain"
                      ? "object-contain p-3"
                      : "object-cover"
                  }
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  quality={85}
                  priority={false}
                />
              </div>
              <div className="relative min-h-[150px] overflow-hidden sm:min-h-[180px] lg:min-h-0">
                <Image
                  src={item.images[0]}
                  alt={`${item.title} — detail`}
                  fill
                  className={
                    item.imageFit === "contain"
                      ? "object-contain p-3"
                      : "object-cover"
                  }
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[4/3] w-full sm:aspect-[4/5] lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={
                  item.imageFit === "contain"
                    ? "object-contain p-4 sm:p-6"
                    : "object-cover"
                }
                sizes="(max-width: 1023px) 100vw, 50vw"
                quality={75}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function SplitStack({ items }: { items: SplitItem[] }) {
  return (
    <div className="shell flex flex-col gap-3 sm:gap-4">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={i * 90} as="div">
          <SplitCard item={item} reverse={i % 2 === 1} />
        </Reveal>
      ))}
    </div>
  );
}
