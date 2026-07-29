"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { experienceTabs } from "@/lib/content";

export function ExperienceTabs() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const tab = experienceTabs[active];

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    const duration = 6500;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(t * 100);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setActive((current) => (current + 1) % experienceTabs.length);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-10 sm:py-14">
      <div className="absolute inset-0">
        <Image
          src="/photos/foto10.jpg"
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(243,239,231,0.18)]" />
      </div>

      <div className="shell relative">
        <div className="relative min-h-[72vh] overflow-hidden rounded-[28px] bg-[rgba(12,12,12,0.82)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:rounded-[36px]">
          <Image
            src={tab.image}
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.72))]" />

          <div className="absolute inset-x-8 top-6 h-[2px] overflow-hidden rounded-full bg-white/20 sm:inset-x-12">
            <div
              className="h-full bg-[var(--bronze)] transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="relative z-10 flex min-h-[72vh] flex-col px-6 pb-12 pt-14 sm:px-12">
            <div className="flex items-center justify-between gap-3 pt-2">
              {experienceTabs.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`text-[0.72rem] tracking-[0.18em] transition ${
                    index === active ? "text-white" : "text-white/45 hover:text-white/75"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
              <h2 className="display max-w-[18ch] text-[clamp(2.2rem,5vw,3.8rem)]">
                {tab.title}
              </h2>
              <div className="mt-5 h-px w-16 bg-[var(--bronze)]" />
              <p className="mt-5 max-w-[34rem] text-[1rem] leading-relaxed text-white/78">
                {tab.body}
              </p>
              <Link href={tab.href} className="btn btn-bronze mt-8">
                {tab.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
