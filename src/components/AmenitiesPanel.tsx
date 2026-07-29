import Image from "next/image";
import { amenitiesList } from "@/lib/content";

export function AmenitiesPanel() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/photos/foto10.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="shell relative">
        <div className="grid gap-8 bg-[rgba(12,12,12,0.72)] p-8 text-white backdrop-blur-[2px] md:grid-cols-2 md:p-12">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
              Spaces and amenities
            </h2>
            <ul className="mt-8 columns-1 gap-x-8 space-y-2.5 text-[0.95rem] text-white/85 sm:columns-2">
              {amenitiesList.map((item) => (
                <li key={item} className="break-inside-avoid">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
            <Image
              src="/photos/foto3.jpg"
              alt="Refugio grounds and coffee farm"
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
