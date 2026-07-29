"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Header({ tone = "auto" }: { tone?: "auto" | "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = tone === "light" || (tone === "auto" && scrolled);
  const solid = tone === "light" || (tone === "auto" && scrolled);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[var(--bg)] text-[var(--ink)] shadow-[0_1px_0_var(--line)]"
          : "bg-[rgba(0,0,0,0.4)] text-white backdrop-blur-[1px]"
      }`}
    >
      <div className="shell relative flex h-[var(--nav-h)] items-center justify-between gap-4">
        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={`text-[0.82rem] tracking-[0.02em] transition-opacity hover:opacity-70 ${
                light ? "text-[var(--ink)]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          aria-label={site.fullName}
        >
          <span
            className={`grid h-11 w-11 place-items-center rounded-full border text-[0.95rem] font-medium ${
              light
                ? "border-[var(--ink)] text-[var(--ink)]"
                : "border-white text-white"
            }`}
          >
            R
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Link href="/rooms" className="btn btn-bronze">
            Book now
          </Link>
        </div>
      </div>
    </header>
  );
}
