import Link from "next/link";
import { site } from "@/lib/content";

export function BookCta() {
  return (
    <section className="bg-[var(--dark)] py-24 text-center text-white">
      <div className="shell">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full border border-white/70 text-[1.05rem]">
          R
        </div>
        <h2 className="display mx-auto max-w-[18ch] text-[clamp(2.2rem,4.5vw,3.4rem)]">
          Discover a stay designed for comfort, calm, and unforgettable moments
        </h2>
        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-bronze mt-8"
        >
          Book your stay today
        </Link>
      </div>
    </section>
  );
}
