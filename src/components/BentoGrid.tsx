"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      section.style.setProperty("--rail-progress", progress.toFixed(4));
      frame = 0;
    };
    const onMove = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove);
      window.removeEventListener("resize", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work-rail" data-horizontal-rail>
      <div className="work-sticky">
        <div className="work-heading">
          <div>
            <p className="eyebrow">01 / Mission files</p>
            <h2>WORK THAT<br /><span>WORKS.</span></h2>
          </div>
          <div className="work-heading-copy">
            <p>Six builds. Different problems. One obsession: making complicated things feel obvious.</p>
            <span>Advance ↓ to move sideways →</span>
          </div>
        </div>
        <div className="project-viewport">
          <div className="project-track" aria-label="Selected project case studies">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            <aside className="rail-end">
              <p>That&apos;s the highlight reel.</p>
              <a href="#experience" className="focus-ring">Keep going ↓</a>
            </aside>
          </div>
        </div>
        <div className="rail-progress" aria-hidden="true"><span /><p>DRAGGING REALITY / 01—06</p></div>
      </div>
    </section>
  );
}
