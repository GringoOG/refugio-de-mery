"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { BookButton } from "@/components/BookButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { TransitionLink } from "@/components/TransitionLink";
import { nav, site } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

/** Desktop nav from xl — below that, hamburger. */
const DESKTOP_NAV_MQ = "(min-width: 1280px)";

const navLeft = nav.slice(0, 3);
const navRight = nav.slice(3);

export function Header({ tone = "auto" }: { tone?: "auto" | "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_NAV_MQ);
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const light = tone === "light" || (tone === "auto" && (scrolled || menuOpen));
  const solid = tone === "light" || (tone === "auto" && (scrolled || menuOpen));

  const linkClass = `whitespace-nowrap text-[0.86rem] tracking-[0.02em] transition-opacity hover:opacity-70 2xl:text-[0.94rem] ${
    light ? "text-[var(--ink)]" : "text-white"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-colors duration-300 ${
        solid
          ? "bg-[var(--bg)] text-[var(--ink)] shadow-[0_1px_0_var(--line)]"
          : "bg-[rgba(0,0,0,0.4)] text-white backdrop-blur-[1px]"
      }`}
    >
      <div className="shell relative flex h-[var(--nav-h)] items-center">
        {/* Left: hamburger (mobile) or left nav links */}
        <div className="z-[1] flex min-w-0 flex-1 items-center justify-start">
          <button
            type="button"
            className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-[4px] xl:hidden ${
              light ? "text-[var(--ink)]" : "text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <span className="relative block h-3.5 w-[18px]" aria-hidden>
              <span
                className={`absolute left-0 top-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <nav className="hidden min-w-0 items-center gap-3 xl:flex 2xl:gap-5">
            {navLeft.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={linkClass}
              >
                {t.nav[item.key]}
              </TransitionLink>
            ))}
          </nav>
        </div>

        {/* Logo — true horizontal center of the bar */}
        <TransitionLink
          href="/"
          className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out hover:scale-110"
          aria-label={site.fullName}
          onClick={() => setMenuOpen(false)}
        >
          <Logo
            size={34}
            priority
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
          />
        </TransitionLink>

        {/* Right: remaining links + Book + language */}
        <div className="z-[1] flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-2.5 xl:gap-3 2xl:gap-4">
          <nav className="hidden min-w-0 items-center gap-3 xl:flex 2xl:gap-5">
            {navRight.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={linkClass}
              >
                {t.nav[item.key]}
              </TransitionLink>
            ))}
          </nav>
          <BookButton
            source="navbar"
            className="btn btn-bronze !min-h-0 max-[359px]:hidden whitespace-nowrap px-2.5 py-2 text-[0.68rem] sm:px-4 sm:text-[0.75rem]"
          >
            {t.common.bookNow}
          </BookButton>
          <LanguageSwitcher light={light} />
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-nav"
        className={`xl:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {menuOpen ? (
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-[var(--nav-offset)] z-40 bg-black/45"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
        <nav
          className={`absolute inset-x-0 top-full z-50 overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] shadow-[0_16px_40px_rgba(20,24,20,0.16)] transition-[transform,opacity,max-height] duration-300 ease-out ${
            menuOpen
              ? "max-h-[min(70svh,32rem)] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-1 opacity-0"
          }`}
          aria-hidden={!menuOpen}
          inert={!menuOpen ? true : undefined}
        >
          <ul className="shell max-h-[min(70svh,32rem)] overflow-y-auto overscroll-contain py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {nav.map((item) => (
              <li key={item.href}>
                <TransitionLink
                  href={item.href}
                  className="block px-1 py-3.5 text-[1.05rem] text-[var(--ink)] transition-opacity hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </TransitionLink>
              </li>
            ))}
            <li className="pt-2 max-[359px]:block min-[360px]:hidden">
              <BookButton
                source="navbar-menu"
                className="btn btn-bronze mt-1 w-full"
                onNavigate={() => setMenuOpen(false)}
              >
                {t.common.bookNow}
              </BookButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
