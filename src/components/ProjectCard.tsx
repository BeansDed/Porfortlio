import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

const symbols = ["◎", "◒", "↗", "▶", "✦", "⌘"];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <div className="project-card-top"><p>{project.category}</p><span>0{index + 1} / 06</span></div>
      <div className="project-visual" aria-hidden="true">
        <span className="visual-index">0{index + 1}</span>
        <span className="visual-symbol">{symbols[index]}</span>
        <div className="visual-grid" />
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul aria-label="Technologies">
          {project.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          <Link className="focus-ring" href={`/projects/${project.id}`}>
            Open case study <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          {project.link && (
            <a className="focus-ring project-external" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
              <ExternalLink aria-hidden="true" size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
