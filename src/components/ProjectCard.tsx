import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex min-h-[25rem] flex-col bg-surface p-6 transition-colors hover:bg-surface-light sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{project.category}</p>
        <span className="font-mono text-xs text-muted">0{index + 1}</span>
      </div>

      <div className="my-auto py-10">
        <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">{project.description}</p>
      </div>

      <div>
        <ul aria-label="Technologies" className="mb-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-border pt-5">
          <Link className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-foreground transition group-hover:text-accent" href={`/projects/${project.id}`}>
            Read case study <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          {project.link && (
            <a className="focus-ring rounded-full border border-border p-2.5 text-muted transition hover:border-accent hover:text-accent" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
              <ExternalLink aria-hidden="true" size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
