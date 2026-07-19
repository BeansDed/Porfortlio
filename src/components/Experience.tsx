import { ArrowUpRight } from "lucide-react";

const responsibilities = [
  "Build full-stack products with Python, Django, and modern TypeScript frameworks.",
  "Design REST APIs and connect third-party services for client workflows and MVPs.",
  "Create responsive interfaces that work consistently across desktop and mobile.",
  "Package and deliver maintainable solutions for international clients on deadline.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-border py-24 sm:py-32">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Hands-on delivery.</h2>
        </div>
        <p className="section-intro">Independent work that spans scoping, implementation, integration, and deployment—not just isolated UI tasks.</p>
      </div>

      <article className="mt-14 grid gap-10 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">2024—present</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">Freelance Full-stack Developer</h3>
          <p className="mt-2 text-sm text-muted">Remote · International clients</p>
        </div>
        <div>
          <ul className="divide-y divide-border">
            {responsibilities.map((item, index) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 py-4 first:pt-0 last:pb-0">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <span className="text-sm leading-6 text-muted sm:text-base sm:leading-7">{item}</span>
              </li>
            ))}
          </ul>
          <a className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-foreground hover:text-accent" href="mailto:malonzoardre3@gmail.com?subject=Work%20opportunity">
            Ask about my experience <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </article>
    </section>
  );
}
