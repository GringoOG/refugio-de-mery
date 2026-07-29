"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-white">
      <div className="shell">
        <h2 className="display text-center text-[clamp(2.2rem,4.5vw,3.375rem)] tracking-[-0.04em]">
          Useful information
        </h2>

        <div className="mt-12 grid border border-[var(--line)] md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`min-h-[150px] border-[var(--line)] p-7 text-left transition md:odd:border-r md:[&:nth-child(-n+4)]:border-b ${
                  isOpen ? "bg-[var(--bg-soft)]" : "bg-white hover:bg-[var(--bg)]"
                }`}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.8rem] text-[var(--ink-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-[1.05rem] font-medium leading-snug">
                      {item.q}
                    </p>
                    {isOpen ? (
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                        {item.a}
                      </p>
                    ) : null}
                  </div>
                  <span className="text-[1.1rem] text-[var(--ink-muted)]">
                    {isOpen ? "—" : "+"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
