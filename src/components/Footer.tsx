import Link from "next/link";
import { footerSitemap, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white">
      <div className="shell grid gap-10 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="eyebrow text-white/55">Contact</p>
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
          <p className="eyebrow text-white/55">Sitemap</p>
          <ul className="mt-4 space-y-2">
            {footerSitemap.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/55">Socials</p>
          <ul className="mt-4 space-y-2 text-[0.95rem] text-white/80">
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/55">Sign up for our newsletter</p>
          <form className="mt-5 flex gap-2 border-b border-white/25 pb-2">
            <input
              type="email"
              required
              placeholder="Email*"
              className="w-full bg-transparent text-[0.95rem] text-white outline-none placeholder:text-white/40"
            />
            <button type="submit" className="text-white/80 hover:text-white" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-white/10 py-6 text-[0.8rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <div className="flex gap-5">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
