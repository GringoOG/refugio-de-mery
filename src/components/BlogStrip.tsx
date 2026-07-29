import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/content";

export function BlogStrip() {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src="/photos/foto10.jpg"
        alt=""
        fill
        className="scale-110 object-cover blur-md"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="shell relative">
        <h2 className="display text-center text-[clamp(2.2rem,4.5vw,3.4rem)] text-white">
          Blogs
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogs.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group overflow-hidden bg-white text-[var(--ink)]"
            >
              <div className="relative aspect-[5/3.4] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="bg-[var(--dark)] px-2 py-1 text-[0.68rem] tracking-[0.06em] text-white">
                    {post.category}
                  </span>
                  <span className="text-[0.78rem] text-[var(--ink-muted)]">
                    {post.date}
                  </span>
                </div>
                <h3 className="display mt-3 text-[1.35rem] leading-snug">
                  {post.title}
                </h3>
                <span className="mt-4 inline-block text-[0.88rem] text-[var(--bronze)]">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="btn btn-bronze">
            More blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
