import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";
import { site } from "@/lib/content";

const cards = [
  {
    title: "Address",
    body: "Find us in the coffee hills of Lucmabamba.",
    detail: site.location,
  },
  {
    title: "Call Us",
    body: "Need help? Give us a call, we're here for you.",
    detail: site.phone,
  },
  {
    title: "Reach Out to Us",
    body: "Need assistance? Drop us a message anytime.",
    detail: site.email,
  },
  {
    title: "Office hours",
    body: "Available daily for reservations and guest support.",
    detail: "8 AM – 8 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[92svh] overflow-hidden bg-[var(--dark)] text-white">
          <Image
            src="/photos/foto3.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative flex min-h-[92svh] items-center justify-center px-[var(--pad)] pb-10 pt-[calc(var(--nav-h)+1.5rem)]">
            <div className="arch-panel w-full max-w-[980px] bg-[var(--dark-panel)] px-6 py-10 backdrop-blur-[3px] sm:px-10 sm:py-12">
              <h1 className="display text-center text-[clamp(2.6rem,5vw,4rem)]">
                Contact
              </h1>
              <p className="mx-auto mt-4 max-w-[36rem] text-center text-[0.98rem] leading-relaxed text-white/78">
                Reach the family behind {site.fullName} for rooms, Tour de Café,
                or stay details on the Salkantay route.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map((card) => (
                  <article key={card.title} className="bg-white p-5 text-[var(--ink)]">
                    <div className="mb-4 grid h-9 w-9 place-items-center bg-[var(--bg-soft)] text-[0.8rem]">
                      ◆
                    </div>
                    <h2 className="text-[1rem] font-medium">{card.title}</h2>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-[var(--ink-soft)]">
                      {card.body}
                    </p>
                    <p className="mt-4 text-[0.88rem] font-medium">{card.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="max-w-[34rem] text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                Located in Lucmabamba on the Salkantay Trek route, the refugio sits
                among organic coffee trees and mountain ridges — a quiet family
                stop before Machu Picchu.
              </p>
              <div className="relative mt-8 min-h-[320px] overflow-hidden bg-[var(--bg-soft)]">
                <iframe
                  title="Map of Lucmabamba"
                  src="https://maps.google.com/maps?q=Lucmabamba%2C%20Peru&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form className="space-y-5 bg-[var(--bg-soft)] p-8 sm:p-10">
              {[
                { name: "name", label: "Name", placeholder: "Jane Smith" },
                {
                  name: "email",
                  label: "Email",
                  placeholder: "jane@email.com",
                  type: "email",
                },
                { name: "phone", label: "Phone", placeholder: "+51 900 000 000" },
                {
                  name: "subject",
                  label: "Subject",
                  placeholder: "enquiry about",
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
                    required={field.name === "name" || field.name === "email"}
                    className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-2.5 outline-none placeholder:text-[var(--ink-muted)]"
                  />
                </div>
              ))}
              <div>
                <label className="text-[0.8rem] tracking-[0.06em] text-[var(--ink-muted)]">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message goes here"
                  required
                  className="mt-2 min-h-[120px] w-full border-b border-[var(--line)] bg-transparent py-2.5 outline-none placeholder:text-[var(--ink-muted)]"
                />
              </div>
              <button type="submit" className="btn btn-bronze mt-2 w-full">
                Submit
              </button>
            </form>
          </div>
        </section>

        <InstagramStrip />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
