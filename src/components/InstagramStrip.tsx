"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";

const shots = [
  {
    src: "/photos/foto3.jpg",
    alt: "Refugio de Mery lodge and coffee farm in Lucmabamba",
  },
  {
    src: "/photos/foto6.jpg",
    alt: "Farm table and mountain stay atmosphere",
  },
  {
    src: "/photos/foto12.jpg",
    alt: "Coffee cherries and hillside plots near Salkantay",
  },
  {
    src: "/photos/foto7.jpg",
    alt: "Guests and hosts at the coffee farm refugio",
  },
  {
    src: "/photos/foto15.jpg",
    alt: "Processing ripe coffee cherries on the farm",
  },
  {
    src: "/photos/foto10.jpg",
    alt: "Homemade food at Refugio de Mery",
  },
];

export function InstagramStrip() {
  const { t } = useLocale();

  return (
    <section className="relative z-[1] overflow-x-clip px-[var(--pad)] py-8 sm:py-12">
      <div className="shell">
        <div className="overflow-hidden rounded-[20px] bg-[var(--bg)] px-4 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:rounded-[36px] sm:px-10 sm:py-12 md:px-14">
          <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <h2 className="display text-[clamp(1.8rem,3.5vw,2.6rem)]">
              {t.instagram.title}
            </h2>
            <Link
              href="/contact"
              className="shrink-0 text-[0.9rem] text-[var(--bronze)] underline-offset-4 hover:underline"
            >
              {t.instagram.cta}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {shots.map((shot) => (
              <div key={shot.src} className="relative aspect-square overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
