import { ArchPanel } from "@/components/ArchPanel";

export function PageHero({
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="relative flex items-center justify-center px-[var(--pad)] pb-2 pt-[calc(var(--nav-offset)+clamp(0.85rem,3vw,1.25rem))] sm:pb-3">
        <ArchPanel className="w-full max-w-[42rem] bg-[var(--dark-panel)] px-5 py-6 text-center backdrop-blur-[3px] sm:px-8 sm:py-8">
          <h1 className="display text-[clamp(2.1rem,8vw,4rem)]">{title}</h1>
          <p className="mx-auto mt-3 max-w-[30rem] text-pretty text-[0.92rem] leading-relaxed text-white/78 sm:mt-5 sm:text-[0.98rem]">
            {body}
          </p>
          <a
            href={ctaHref}
            className="btn btn-bronze mt-5 w-full max-w-[16rem] sm:mt-6 sm:w-auto"
          >
            {ctaLabel}
          </a>
        </ArchPanel>
      </div>
    </section>
  );
}
