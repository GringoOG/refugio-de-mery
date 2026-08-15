import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ExperienceTabs } from "@/components/ExperienceTabs";
import { Testimonials } from "@/components/Testimonials";
import { AmenitiesPanel } from "@/components/AmenitiesPanel";
import { Faq } from "@/components/Faq";
import { InstagramStrip } from "@/components/InstagramStrip";
import { BookCta } from "@/components/BookCta";
import { IntroSplash } from "@/components/IntroSplash";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <IntroSplash />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <Reveal delay={40}>
          <ExperienceTabs />
        </Reveal>
        <Reveal delay={60}>
          <Testimonials />
        </Reveal>
        <Reveal delay={40}>
          <AmenitiesPanel />
        </Reveal>
        <Reveal delay={40}>
          <Faq />
        </Reveal>
        <Reveal delay={40}>
          <InstagramStrip />
        </Reveal>
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
