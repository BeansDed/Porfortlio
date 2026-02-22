"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_DISPLAY = 4;

export default function BentoGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY);

  return (
    <section id="work" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto mb-12 sm:mb-14">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-blue mb-3">
          Technical Projects
        </p>
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-3xl">
          Projects covering AI workflows, automation systems, and full-stack product development.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-stone-gray max-w-2xl">
          Each case study includes implementation details and engineering contributions aligned
          with real-world product requirements.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > INITIAL_DISPLAY && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 rounded-md border border-foreground/20 px-6 sm:px-8 py-3 text-sm font-semibold text-foreground hover:border-accent-blue hover:text-accent-blue transition-colors duration-200"
            >
              {showAll ? (
                <>
                  Show Fewer Projects
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Show All Projects ({projects.length})
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
