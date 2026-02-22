import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isRepository = project.link?.includes("github.com");

  return (
    <article className="h-full rounded-xl border border-foreground/10 bg-surface/90 p-5 sm:p-6 lg:p-7 transition-colors duration-200 hover:border-accent-blue/40">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <span className="text-xs font-semibold tracking-wide uppercase text-accent-blue">{project.highlight}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-foreground/20 text-stone-gray hover:text-accent-blue hover:border-accent-blue transition-colors duration-200"
            title={isRepository ? "View repository" : "View live project"}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <Link href={`/projects/${project.id}`} className="block mb-3 sm:mb-4 group/title w-fit">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover/title:text-accent-blue transition-colors duration-200 flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity duration-200" />
          </h3>
        </Link>

        <p className="text-stone-gray text-sm sm:text-base leading-relaxed line-clamp-3 mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-stone-gray border border-foreground/15 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Details
          </Link>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-gray hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {isRepository ? "Repository" : "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
