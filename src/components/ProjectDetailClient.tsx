import { Project } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav aria-label="Project navigation" className="section-shell flex h-16 items-center justify-between">
          <Link className="focus-ring inline-flex items-center gap-2 rounded-sm text-xs font-semibold text-muted hover:text-accent" href="/#work">
            <ArrowLeft aria-hidden="true" size={15} /> All work
          </Link>
          <Link className="focus-ring rounded-sm text-xs font-semibold text-foreground" href="/#hero">ARDRE / PORTFOLIO</Link>
        </nav>
      </header>

      <article className="section-shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1 className="mt-5 max-w-5xl text-balance text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-foreground">
              {project.title}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-xl sm:leading-9">{project.description}</p>
          </div>
          {project.link && (
            <a className="focus-ring button-primary justify-center" href={project.link} target="_blank" rel="noreferrer">
              View repository <ExternalLink aria-hidden="true" size={15} />
            </a>
          )}
        </div>

        <div className="mt-20 grid gap-12 border-t border-border pt-12 lg:grid-cols-[16rem_1fr]">
          <aside>
            <p className="eyebrow">Technology</p>
            <ul className="mt-6 flex flex-wrap gap-2 lg:flex-col lg:items-start">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-muted">{tag}</li>
              ))}
            </ul>
          </aside>

          <section aria-labelledby="contributions-heading">
            <p className="eyebrow">What I built</p>
            <h2 id="contributions-heading" className="sr-only">Key contributions</h2>
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {project.details.map((item, index) => (
                <li key={item} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:py-9">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <p className="max-w-3xl text-lg leading-8 text-foreground sm:text-2xl sm:leading-10">{item}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="mt-16 flex justify-end">
          <Link className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-foreground hover:text-accent" href="/#work">
            Explore more projects <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </article>
    </main>
  );
}
