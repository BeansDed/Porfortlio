import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function BentoGrid() {
  return (
    <section id="work" className="section-shell border-t border-border py-24 sm:py-32">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Proof, not promises.</h2>
        </div>
        <p className="section-intro">
          Six projects across AI, civic technology, automation, and data systems. Open any case study for the engineering breakdown.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
