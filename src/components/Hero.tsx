import { ArrowDownRight, ArrowUpRight, Github, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="section-shell flex min-h-[680px] items-center pt-28 sm:min-h-[760px]">
      <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#c7ff4c]" />
              Available for opportunities
            </span>
            <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" size={13} /> Pangasinan, PH</span>
          </div>

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent">Full-stack developer</p>
          <h1 className="max-w-5xl text-balance text-[clamp(3rem,8vw,7.4rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-foreground">
            I build useful systems from interface to infrastructure.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I&apos;m Ardre, an IT student and freelance developer working across web, mobile, AI-assisted products, and backend services—primarily with Python and TypeScript.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="focus-ring button-primary" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" size={17} />
            </a>
            <a className="focus-ring button-secondary" href="https://github.com/BeansDed" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={16} /> GitHub <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Quick read / 30 sec</p>
          <dl className="mt-7 divide-y divide-border">
            {[
              ["Focus", "Full-stack products"],
              ["Core", "Python + TypeScript"],
              ["Experience", "Freelance · 2024—now"],
              ["Education", "BSIT · Class of 2027"],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[5rem_1fr] gap-4 py-4 first:pt-0 last:pb-0">
                <dt className="text-xs text-muted">{label}</dt>
                <dd className="text-right text-xs font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
