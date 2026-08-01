"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";

export function IntroSplash() {
  const [mounted, setMounted] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => setOpen(true), 1400);
    const unmountTimer = window.setTimeout(() => setMounted(false), 2600);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      aria-hidden={open}
    >
      {/* Left curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-black transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Right curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-black transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Center brand — fades as curtains part */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mb-5">
          <Logo size={72} priority />
        </div>
        <p className="eyebrow tracking-[0.22em] text-white/85">
          {site.fullName.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
