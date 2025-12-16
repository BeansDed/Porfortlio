"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function BentoGrid() {
  return (
    <section id="work" className="relative py-24 px-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-teal text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A collection of projects spanning full-stack development, AI integration,
            and interactive experiences.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((project, index) => {
            const sizeClass = 
              project.size === "large" 
                ? "md:col-span-2 md:row-span-2" 
                : project.size === "standard" 
                  ? "md:col-span-1 md:row-span-2" 
                  : "md:col-span-1 md:row-span-1";
            
            const minHeight = 
              project.size === "large" 
                ? "min-h-[400px]" 
                : project.size === "standard" 
                  ? "min-h-[400px]" 
                  : "min-h-[180px]";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl glass ${sizeClass} ${minHeight}`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between z-10">
                  {/* Top section */}
                  <div>
                    {/* Icon and links */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{project.icon}</span>
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Highlight badge */}
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {project.highlight}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    {project.size !== "compact" && (
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, project.size === "compact" ? 2 : 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full card link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
