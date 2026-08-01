"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n";

const TAB_MS = 6500;

const tabMeta = [
  { id: "tour" as const, href: "/tours", image: "/photos/experience-tour.jpg" },
  {
    id: "rooms" as const,
    href: "/rooms",
    image: "/photos/experience-rooms.jpg",
  },
  {
    id: "products" as const,
    href: "/products",
    image: "/photos/experience-products.jpg",
    imagePosition: "center bottom",
  },
];

export function ExperienceTabs() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [progress, setProgress] = useState(0);

  const tabs = t.experience.tabs.map((copy, i) => ({
    ...copy,
    ...tabMeta[i],
  }));
  const tab = tabs[active];

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / TAB_MS);
      setProgress(p * 100);
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setActive((current) => (current + 1) % tabs.length);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, cycle, tabs.length]);

  const selectTab = (index: number) => {
    if (index === active) {
      setCycle((c) => c + 1);
    } else {
      setActive(index);
    }
  };

  return (
    <section className="relative z-[1] overflow-x-clip px-[var(--pad)] py-8 sm:py-12">
      <div className="shell relative">
        <div className="relative min-h-[56svh] overflow-hidden rounded-[20px] bg-[rgba(12,12,12,0.82)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:min-h-[72vh] sm:rounded-[36px]">
          <Image
            key={tab.image}
            src={tab.image}
            alt=""
            fill
            className="object-cover opacity-45"
            style={
              "imagePosition" in tab && tab.imagePosition
                ? { objectPosition: tab.imagePosition }
                : undefined
            }
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.72))]" />

          <div className="relative z-10 flex min-h-[56svh] flex-col sm:min-h-[72vh]">
            <div className="bg-[rgba(8,8,8,0.42)] px-4 pt-4 sm:px-10 sm:pt-5">
              <div className="grid grid-cols-3 gap-2">
                {tabs.map((item, index) => (
                  <div
                    key={`track-${item.id}`}
                    className="h-[2px] overflow-hidden rounded-full bg-white/20"
                  >
                    <div
                      className="h-full bg-[var(--bronze)]"
                      style={{
                        width: index === active ? `${progress}%` : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
                {tabs.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectTab(index)}
                    className={`min-w-0 flex-1 truncate px-0.5 py-1 text-center text-[0.62rem] tracking-[0.1em] transition sm:text-[0.72rem] sm:tracking-[0.18em] ${
                      index === active
                        ? "text-white"
                        : "text-white/45 hover:text-white/75"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-4 pb-10 pt-6 text-center sm:px-12 sm:pb-12 sm:pt-8">
              <h2 className="display max-w-[14ch] text-[clamp(1.85rem,7vw,3.8rem)] sm:max-w-[16ch]">
                {tab.title}
              </h2>
              <div className="mt-4 h-px w-16 bg-[var(--bronze)] sm:mt-5" />
              <p className="mt-4 max-w-[32rem] text-pretty text-[0.92rem] leading-relaxed text-white/78 sm:mt-5 sm:text-[1rem]">
                {tab.body}
              </p>
              <Link
                href={tab.href}
                className="btn btn-bronze mt-6 w-full max-w-[16rem] sm:mt-8 sm:w-auto"
              >
                {tab.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
