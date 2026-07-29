import Image from "next/image";
import Link from "next/link";
import { heroCards, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--dark)] text-white">
      <div className="absolute inset-0">
        {/* Swap poster for real video when delivered: /video/hero.mp4 */}
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.45))]" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col justify-center pb-[9.5rem] pt-[calc(var(--nav-h)+1.5rem)]">
        <div className="shell flex justify-center">
          <div className="arch-panel fade-up w-full max-w-[44rem] bg-[var(--dark-panel)] px-7 py-10 text-center backdrop-blur-[3px] sm:px-12 sm:py-12">
            <p className="eyebrow fade-up fade-up-1 text-white/70">
              {site.fullName.toUpperCase()}
            </p>
            <h1 className="display fade-up fade-up-2 mt-4 text-[clamp(2.4rem,5.2vw,3.8rem)]">
              Discover calm on a coffee farm stay
            </h1>
            <p className="fade-up fade-up-3 mx-auto mt-5 max-w-[34rem] text-[0.98rem] leading-relaxed text-white/78">
              Hidden between cloud-forest ridges and coffee trees lies a family
              refugio designed for slower mornings, deeper rest, and meaningful
              farm experiences on the route to Machu Picchu.
            </p>
            <Link href="/rooms" className="btn btn-bronze fade-up fade-up-3 mt-8">
              Book your room
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 pb-4">
        <div className="shell grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {heroCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group overflow-hidden rounded-[4px] bg-black/35"
            >
              <div className="relative aspect-[5/3.4] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="bg-[rgba(12,12,12,0.88)] px-2 py-2.5 text-center text-[0.78rem] tracking-[0.02em] text-white">
                {card.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
