import Image from "next/image";
import Link from "next/link";
import { heroCards, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col overflow-hidden bg-[var(--dark)] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/foto3.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/*
        Montvera-measured @ 1920×1080:
        nav→panel ≈ 153px · panel→cards ≈ 12px · radius 300px top
      */}
      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-col px-[var(--pad)] pt-[calc(var(--nav-h)+clamp(4.5rem,14vh,9.5rem))]">
        <div className="arch-panel fade-up bg-[rgba(21,21,21,0.6)] px-8 pb-9 pt-14 text-center sm:px-16 sm:pb-10 sm:pt-16 md:px-24 md:pb-11 md:pt-[4.25rem]">
          <p className="eyebrow fade-up fade-up-1 text-white">
            {site.fullName.toUpperCase()}
          </p>
          <h1 className="display fade-up fade-up-2 mx-auto mt-4 max-w-[18ch] text-[clamp(2.65rem,5.2vw,4.35rem)] text-white">
            Discover calm on a coffee farm stay
          </h1>
          <p className="fade-up fade-up-3 mx-auto mt-5 max-w-[42rem] font-[family-name:var(--font-body)] text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.5] text-white/88">
            Hidden between cloud-forest ridges and coffee trees lies a family
            refugio designed for slower mornings, deeper rest, and meaningful
            farm experiences on the route to Machu Picchu.
          </p>
          <Link
            href="/rooms"
            className="btn btn-bronze fade-up fade-up-3 mt-7 sm:mt-8"
          >
            Book your room
          </Link>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 md:mt-3 md:grid-cols-4 md:gap-3">
          {heroCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group overflow-hidden rounded-[2px] bg-black/35"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="bg-[rgba(12,12,12,0.92)] px-2 py-2 text-center font-[family-name:var(--font-body)] text-[0.78rem] tracking-[0.02em] text-white">
                {card.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
