"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export function Faq() {
  const { t } = useLocale();
  const [open, setOpen] = useState(0);
  const faqs = t.faq.items;

  return (
    <section className="relative z-[1] overflow-x-clip px-[var(--pad)] py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[44rem]">
        <div className="overflow-hidden rounded-[20px] bg-[var(--bg)] px-4 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:rounded-[36px] sm:px-8 sm:py-14 md:px-10">
          <p className="eyebrow text-center text-[var(--bronze)]">
            {t.faq.eyebrow}
          </p>
          <h2 className="display mt-3 text-center text-[clamp(1.85rem,6vw,3.375rem)] tracking-[-0.04em]">
            {t.faq.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[28rem] text-pretty text-center text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
            {t.faq.body}
          </p>

          <div className="mt-10 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-[18px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[rgba(122,90,63,0.28)] bg-white shadow-[0_14px_40px_rgba(30,41,59,0.08)]"
                      : "border-[var(--line)] bg-white/70 hover:border-[rgba(122,90,63,0.22)] hover:bg-white"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-start gap-3 px-4 py-4 text-left sm:items-center sm:gap-5 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className={`display shrink-0 text-[1.15rem] leading-none tracking-tight transition-colors ${
                        isOpen
                          ? "text-[var(--bronze)]"
                          : "text-[var(--ink-muted)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1 text-[0.95rem] font-medium leading-snug text-[var(--ink)] sm:text-[1.08rem]">
                      {item.q}
                    </span>

                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[var(--bronze)] text-white"
                          : "bg-[var(--bg-soft)] text-[var(--ink-muted)]"
                      }`}
                      aria-hidden
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-300"
                      >
                        <path
                          d="M7 1.5v11M1.5 7h11"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[var(--line)] px-5 pb-5 pt-4 text-pretty text-[0.95rem] leading-relaxed text-[var(--ink-soft)] sm:px-6 sm:pb-6 sm:pl-[4.25rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
