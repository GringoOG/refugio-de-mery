"use client";

import { useEffect, useRef, useState } from "react";

function pickSrc() {
  return window.matchMedia("(max-width: 900px)").matches
    ? "/video/hero-mobile.mp4"
    : "/video/hero.mp4";
}

/**
 * Full-bleed background loop — autoplays immediately on phone + desktop.
 * Small MP4, muted/playsInline forced in JS, retries until playing.
 */
export function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [src, setSrc] = useState("/video/hero-mobile.mp4");

  useEffect(() => {
    setSrc(pickSrc());
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.disablePictureInPicture = true;

    let alive = true;

    const markReady = () => {
      if (alive) setReady(true);
    };

    const tryPlay = () => {
      if (!alive) return;
      video.muted = true;
      const p = video.play();
      if (p) void p.then(markReady).catch(() => {});
    };

    const onPlaying = () => markReady();
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    tryPlay();

    const unlock = () => tryPlay();
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("touchend", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });
    window.addEventListener("pointerdown", unlock, { passive: true });
    document.addEventListener("visibilitychange", onVisible);

    const kick = window.setInterval(() => {
      if (!alive) return;
      if (!video.paused) {
        window.clearInterval(kick);
        markReady();
        return;
      }
      tryPlay();
    }, 350);
    window.setTimeout(() => window.clearInterval(kick), 10000);

    return () => {
      alive = false;
      window.clearInterval(kick);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("touchend", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("pointerdown", unlock);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [src]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: "url(/video/hero-poster.jpg)",
          opacity: ready ? 0 : 1,
        }}
      />
      <video
        ref={ref}
        className="bg-video h-full w-full scale-[1.02] object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        disablePictureInPicture
        disableRemotePlayback
      />
      <div className="absolute inset-0 bg-black/28" />
    </div>
  );
}
