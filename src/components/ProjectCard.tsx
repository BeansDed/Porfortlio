"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group relative h-full">
      {/* Card */}
      <div className="relative h-full p-5 sm:p-6 lg:p-8 border border-surface-dark bg-surface hover:border-roman-gold/30 transition-all duration-300 flex flex-col min-h-[320px] sm:min-h-[360px]">
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-roman-gold/50 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5 transition-all duration-300" />
        <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-roman-gold/50 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-roman-gold/50 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5 transition-all duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-roman-gold/50 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5 transition-all duration-300" />

        {/* Header */}
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">{project.icon}</span>
            <span className="text-xs font-serif tracking-[0.15em] sm:tracking-[0.2em] uppercase text-roman-red">
              {project.highlight}
            </span>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone-gray/30 text-stone-gray hover:text-white hover:bg-roman-gold hover:border-roman-gold transition-all duration-300"
              title="View Live Project"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col">
          <Link href={`/projects/${project.id}`} className="block mb-3 sm:mb-4 group/title">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display text-foreground group-hover:text-roman-gold transition-colors duration-300 flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover/title:opacity-100 transition-all duration-300" />
            </h3>
          </Link>

          <p className="text-stone-gray font-serif text-sm sm:text-base leading-relaxed line-clamp-3 mb-4 sm:mb-6 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-gray/80 font-sans border border-stone-gray/20 px-2 sm:px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
            
          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-surface-dark/50">
            <Link href={`/projects/${project.id}`}>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-serif uppercase tracking-wider text-roman-gold hover:text-roman-red transition-colors">
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                View Details
              </span>
            </Link>
            
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-serif uppercase tracking-wider text-stone-gray hover:text-roman-gold transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-roman-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}
