"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { farmMapEmbedSrc } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export default function ContactPage() {
  const { t, locale } = useLocale();
  const form = t.contact.form;

  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <PageHero
          title={t.contact.pageTitle}
          body={t.contact.pageBody}
          ctaLabel={t.contact.pageCta}
          ctaHref="#contact"
        />

        <section
          id="contact"
          className="relative z-[1] overflow-x-clip px-[var(--pad)] pt-2 pb-10 sm:pt-3 sm:pb-14"
        >
          <div className="shell overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_28px_rgba(20,24,20,0.06)] sm:rounded-[1.75rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[240px] overflow-hidden bg-[var(--bg-soft)] sm:min-h-[360px] lg:min-h-[560px]">
                <iframe
                  title="Map of Refugio de Mery Lucmabamba"
                  src={farmMapEmbedSrc(15, locale)}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <form className="flex flex-col justify-center space-y-4 p-5 sm:space-y-5 sm:p-10 md:p-12">
                {[
                  {
                    name: "name",
                    label: form.name,
                    placeholder: form.namePh,
                  },
                  {
                    name: "email",
                    label: form.email,
                    placeholder: form.emailPh,
                    type: "email",
                  },
                  {
                    name: "phone",
                    label: form.phone,
                    placeholder: form.phonePh,
                  },
                  {
                    name: "subject",
                    label: form.subject,
                    placeholder: form.subjectPh,
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-[0.8rem] tracking-[0.06em] text-[var(--ink-muted)]">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type ?? "text"}
                      placeholder={field.placeholder}
                      required={
                        field.name === "name" || field.name === "email"
                      }
                      className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-2.5 text-base outline-none placeholder:text-[var(--ink-muted)] sm:text-[1rem]"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[0.8rem] tracking-[0.06em] text-[var(--ink-muted)]">
                    {form.message}
                  </label>
                  <textarea
                    name="message"
                    placeholder={form.messagePh}
                    required
                    className="mt-2 min-h-[120px] w-full resize-y border-b border-[var(--line)] bg-transparent py-2.5 text-base outline-none placeholder:text-[var(--ink-muted)] sm:text-[1rem]"
                  />
                </div>
                <button type="submit" className="btn btn-bronze mt-2 w-full sm:w-auto sm:min-w-[10rem]">
                  {t.common.submit}
                </button>
              </form>
            </div>
          </div>
        </section>

        <BookCta />
      </main>
      <Footer />
    </>
  );
}
