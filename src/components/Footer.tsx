"use client";

import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";
import { footerSitemap, site } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="eyebrow flex items-center gap-2 text-white/55">
      <Image
        src="/footer-bean-clear.webp"
        alt=""
        width={18}
        height={26}
        className="h-[1.05rem] w-auto mix-blend-lighten"
        sizes="18px"
      />
      {children}
    </p>
  );
}

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative z-[1] bg-[var(--dark)] pb-[env(safe-area-inset-bottom,0px)] text-white">
      <div className="shell grid gap-10 border-t border-white/10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <FooterHeading>{t.common.contact}</FooterHeading>
          <p className="mt-4 max-w-[16rem] text-[0.95rem] leading-relaxed text-white/80">
            {site.fullName}
            <br />
            {site.location}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block text-[0.95rem] text-white/80 hover:text-white"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="mt-2 block text-[0.95rem] text-white/80 hover:text-white"
          >
            {site.phone}
          </a>
        </div>

        <div>
          <FooterHeading>{t.common.sitemap}</FooterHeading>
          <ul className="mt-4 space-y-2">
            {footerSitemap.map((item) => (
              <li key={item.href}>
                <TransitionLink
                  href={item.href}
                  className="text-[0.95rem] text-white/80 hover:text-white"
                >
                  {t.nav[item.key]}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>{t.common.socials}</FooterHeading>
          <ul className="mt-4 space-y-2 text-[0.95rem] text-white/80">
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div>
          <FooterHeading>{t.common.landmarks}</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {t.landmarks.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-3 text-[0.88rem] text-white/80"
              >
                <span>{item.name}</span>
                <span className="shrink-0 text-white/55">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-white/10 py-6 text-[0.8rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.fullName}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <span>{t.common.privacy}</span>
          <span>{t.common.terms}</span>
        </div>
      </div>
    </footer>
  );
}
