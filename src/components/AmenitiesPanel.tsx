"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";

export function AmenitiesPanel() {
  const { t } = useLocale();

  return (
    <section className="relative z-[1] overflow-x-clip px-[var(--pad)] py-10 sm:py-14">
      <div className="shell relative">
        <div className="grid gap-6 overflow-hidden rounded-[20px] bg-[rgba(12,12,12,0.78)] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[4px] sm:p-8 md:grid-cols-2 md:rounded-[36px] md:gap-8 md:p-12">
          <div>
            <h2 className="display text-[clamp(1.85rem,6vw,3.2rem)]">
              {t.amenities.title}
            </h2>
            <ul className="mt-6 columns-1 gap-x-8 space-y-2.5 text-[0.92rem] text-white/85 sm:mt-8 sm:columns-2 sm:text-[0.95rem]">
              {t.amenities.list.map((item) => (
                <li key={item} className="break-inside-avoid">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-[4px] sm:min-h-[320px] md:min-h-[420px]">
            <Image
              src="/photos/amenities-terrace.jpg"
              alt={t.amenities.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
