"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed background loop.
 * Poster shows immediately; video fades in once it can play.
 * WebM first (smaller), MP4 fallback — both optimized for fast start.
 */
export function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const tryPlay = () => {
      void video.play().then(() => setReady(true)).catch(() => {});
    };

    const onCanPlay = () => {
      setReady(true);
      tryPlay();
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("playing", () => setReady(true));

    // Kick decode ASAP
    video.load();
    tryPlay();

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
      aria-hidden
    >
      {/* Poster stays until frames are ready — no black wait */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: "url(/video/hero-poster.jpg)",
          opacity: ready ? 0 : 1,
        }}
      />
      <video
        ref={ref}
        className={`h-full w-full scale-[1.02] object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/28" />
    </div>
  );
}
