"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_DISPLAY = 4;

export default function BentoGrid() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const driftReverse = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const reduceMotion = useReducedMotion();
  const xDrift = reduceMotion ? 0 : drift;
  const xReverse = reduceMotion ? 0 : driftReverse;

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="relative min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-mythic-grain opacity-25 pointer-events-none" />
      <motion.div
        style={{ x: xDrift }}
        className="absolute -left-24 top-12 h-44 w-44 rounded-full bg-roman-gold/10 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: xReverse }}
        className="absolute right-6 bottom-16 h-60 w-60 rounded-full border border-roman-gold/15 bg-surface/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-roman-gold text-xs font-serif tracking-[0.2em] sm:tracking-[0.3em] uppercase block mb-4 sm:mb-6">
            Opus Magnum
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider text-foreground leading-tight mb-4 sm:mb-6">
            THE GALLERY
          </h2>
          
          <motion.div 
            className="w-16 sm:w-24 h-[1px] bg-roman-gold mx-auto mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          
          <p className="text-stone-gray font-serif italic text-sm sm:text-base md:text-lg max-w-md mx-auto">
            "A curation of digital artifacts and interactive experiences."
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > INITIAL_DISPLAY && (
          <motion.div 
            className="flex justify-center mt-10 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-roman-gold/30 text-roman-gold font-serif uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:bg-roman-gold hover:text-background transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  View All Projects ({projects.length})
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
