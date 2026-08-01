"use client";

import { Logo } from "@/components/Logo";
import { BookButton } from "@/components/BookButton";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n";

export function BookCta() {
  const { t } = useLocale();

  return (
    <Reveal
      as="section"
      className="relative z-[1] overflow-x-clip px-[var(--pad)] py-6 sm:py-12"
    >
      <div className="shell">
        <div className="overflow-hidden rounded-[20px] bg-[rgba(21,21,21,0.78)] px-5 py-14 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[4px] sm:rounded-[36px] sm:px-10 sm:py-20">
          <div className="mx-auto mb-5 flex justify-center sm:mb-6">
            <Logo size={48} />
          </div>
          <h2 className="display mx-auto max-w-[16ch] text-[clamp(1.85rem,6.5vw,3.4rem)] sm:max-w-[20ch]">
            {t.bookCta.title}
          </h2>
          <BookButton
            source="book-cta"
            className="btn btn-bronze mt-6 w-full max-w-[16rem] sm:mt-8 sm:w-auto"
          >
            {t.common.bookYourStayToday}
          </BookButton>
        </div>
      </div>
    </Reveal>
  );
}
