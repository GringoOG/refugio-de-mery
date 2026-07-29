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

export default function HomePage() {
  return (
    <>
      <IntroSplash />
      <Header />
      <main>
        <Hero />
        <ExperienceTabs />
        <Testimonials />
        <AmenitiesPanel />
        <Faq />
        <InstagramStrip />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
