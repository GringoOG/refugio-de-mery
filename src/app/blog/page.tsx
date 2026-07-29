import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogStrip } from "@/components/BlogStrip";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";

export default function BlogPage() {
  return (
    <>
      <Header tone="light" />
      <main className="pt-[var(--nav-h)]">
        <section className="section pb-0">
          <div className="shell text-center">
            <p className="eyebrow text-[var(--bronze)]">Journal</p>
            <h1 className="display mt-3 text-[clamp(2.6rem,5vw,4rem)]">Blogs</h1>
            <p className="mx-auto mt-4 max-w-[34rem] text-[1rem] leading-relaxed text-[var(--ink-soft)]">
              Stories from the coffee farm — lodging, table, and Tour de Café in
              Lucmabamba.
            </p>
          </div>
        </section>
        <BlogStrip />
        <InstagramStrip />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
