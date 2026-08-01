"use client";

import { useEffect, useRef, useState } from "react";
import {
  localeCodes,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n";

export function LanguageSwitcher({
  light = false,
}: {
  light?: boolean;
}) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const pick = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.common.language}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex h-10 min-w-10 items-center justify-center gap-0.5 rounded-[4px] border px-2 py-2 text-[0.7rem] font-medium tracking-[0.08em] transition-colors sm:h-auto sm:min-h-[2.25rem] sm:gap-1.5 sm:px-3 sm:text-[0.75rem] ${
          light
            ? "border-[var(--line)] bg-white text-[var(--ink)] hover:bg-[var(--bg-soft)]"
            : "border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18"
        }`}
      >
        {localeCodes[locale]}
        <span aria-hidden className="text-[0.6rem] opacity-70 sm:text-[0.65rem]">
          ▾
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t.common.language}
          className="absolute right-0 top-[calc(100%+0.4rem)] z-[60] w-auto min-w-0 overflow-hidden rounded-[6px] border border-[var(--line)] bg-white py-1 text-[var(--ink)] shadow-[0_12px_32px_rgba(20,24,20,0.14)]"
        >
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => pick(code)}
                  title={localeNames[code]}
                  aria-label={localeNames[code]}
                  className={`block w-full px-3 py-2 text-center text-[0.75rem] font-medium tracking-[0.08em] transition-colors ${
                    active
                      ? "bg-[rgba(122,90,63,0.1)] !text-[var(--bronze-deep)]"
                      : "!text-[var(--ink)] hover:bg-[var(--bg-soft)]"
                  }`}
                >
                  {localeCodes[code]}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
