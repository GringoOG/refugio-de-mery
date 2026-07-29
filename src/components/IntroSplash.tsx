"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 1600);
    const hideTimer = window.setTimeout(() => setVisible(false), 2300);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={leaving}
    >
      <div
        className={`mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/80 text-[1.2rem] transition duration-700 ${
          leaving ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        R
      </div>
      <p
        className={`eyebrow tracking-[0.22em] text-white/85 transition duration-700 ${
          leaving ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {site.fullName.toUpperCase()}
      </p>
    </div>
  );
}
