"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";

export type TourVideo = {
  id: string;
  src: string;
  poster?: string;
  label?: string;
};

export type TourPhoto = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

function HoverVideo({ video }: { video: TourVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const markReady = () => {
      readyRef.current = true;
    };

    el.addEventListener("canplaythrough", markReady);
    el.preload = "auto";
    el.load();

    // Warm decode buffer without audible/visible play
    const warm = () => {
      el.muted = true;
      const p = el.play();
      if (p) {
        void p
          .then(() => {
            el.pause();
            el.currentTime = 0;
            readyRef.current = true;
          })
          .catch(() => {});
      }
    };

    el.addEventListener("loadeddata", warm, { once: true });

    return () => {
      el.removeEventListener("canplaythrough", markReady);
    };
  }, [video.src]);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    if (el.readyState < 2) el.load();
    void el.play().catch(() => {});
  };

  const stop = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    if (el.readyState >= 2) el.currentTime = 0;
  };

  return (
    <div
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-[var(--bg-soft)]"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      onClick={() => {
        const el = ref.current;
        if (!el) return;
        if (el.paused) play();
        else stop();
      }}
      role="button"
      tabIndex={0}
      aria-label={video.label ?? "Play video"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const el = ref.current;
          if (!el) return;
          if (el.paused) play();
          else stop();
        }
      }}
    >
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={video.src}
        poster={video.poster}
        muted
        playsInline
        loop
        preload="auto"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-40" />
      <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[0.72rem] tracking-wide text-white backdrop-blur-sm">
        <span aria-hidden>▶</span>
        {video.label ?? "Play"}
      </span>
    </div>
  );
}

export function TourMediaSplit({
  videos,
  photos,
}: {
  videos: TourVideo[];
  photos: TourPhoto[];
}) {
  const { t } = useLocale();

  // Prefetch video bytes as soon as the gallery mounts
  useEffect(() => {
    const controllers = videos.map((video) => {
      const controller = new AbortController();
      void fetch(video.src, {
        signal: controller.signal,
        cache: "force-cache",
      }).catch(() => {});
      return controller;
    });
    return () => controllers.forEach((c) => c.abort());
  }, [videos]);

  return (
    <section
      id="tour-media"
      className="relative z-[1] overflow-x-clip px-[var(--pad)] pb-10 sm:pb-14"
    >
      <div className="shell overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_28px_rgba(20,24,20,0.06)] sm:rounded-[1.75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <h2 className="display text-[clamp(1.8rem,3vw,2.4rem)] italic text-[var(--ink)]">
              {t.common.videos}
            </h2>
            <p className="mt-1 text-[0.88rem] text-[var(--ink-muted)]">
              <span className="lg:hidden">{t.common.tapToPlay}</span>
              <span className="hidden lg:inline">{t.common.hoverToPlay}</span>
            </p>
            <div className="mt-5 max-h-[min(58vh,520px)] overflow-y-auto overscroll-contain pr-1 sm:max-h-[min(72vh,880px)]">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {videos.length > 0 ? (
                  videos.map((video) => (
                    <HoverVideo key={video.id} video={video} />
                  ))
                ) : (
                  <div className="col-span-2 flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[var(--line)] bg-[var(--bg-soft)] px-4 text-center text-[0.9rem] text-[var(--ink-muted)]">
                    Videos will appear here
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 sm:p-7">
            <h2 className="display text-[clamp(1.8rem,3vw,2.4rem)] italic text-[var(--ink)]">
              {t.common.photos}
            </h2>
            <p className="mt-1 text-[0.88rem] text-[var(--ink-muted)]">
              {t.common.fromFarmWalk}
            </p>
            <div className="mt-5 max-h-[min(58vh,520px)] overflow-y-auto overscroll-contain pr-1 sm:max-h-[min(72vh,880px)]">
              {photos.length > 0 ? (
                <div className="columns-2 gap-2 sm:gap-3">
                  {photos.map((photo, i) => {
                    // Asymmetric rhythm: some tiles sit wider / taller in the flow
                    const spanWide = i % 5 === 1;
                    return (
                      <figure
                        key={photo.id}
                        className={`mb-2.5 break-inside-avoid overflow-hidden bg-[var(--bg-soft)] sm:mb-3 ${
                          spanWide ? "mt-4 sm:mt-8" : i % 3 === 2 ? "mt-2" : ""
                        }`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 1023px) 50vw, 25vw"
                          quality={90}
                        />
                      </figure>
                    );
                  })}
                </div>
              ) : (
                <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[var(--line)] bg-[var(--bg-soft)] px-4 text-center text-[0.9rem] text-[var(--ink-muted)]">
                  Photos will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
