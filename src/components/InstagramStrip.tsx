import Image from "next/image";
import Link from "next/link";

const shots = [
  "/photos/foto3.jpg",
  "/photos/foto6.jpg",
  "/photos/foto12.jpg",
  "/photos/foto7.jpg",
  "/photos/foto15.jpg",
  "/photos/foto10.jpg",
];

export function InstagramStrip() {
  return (
    <section className="bg-[var(--bg)] pb-16">
      <div className="shell">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display text-[clamp(1.8rem,3.5vw,2.6rem)]">From the finca</h2>
          <Link href="/contact" className="text-[0.9rem] text-[var(--bronze)]">
            View our Instagram
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {shots.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" sizes="16vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
