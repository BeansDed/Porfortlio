"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/projects";

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center gap-3 px-6 py-4 rounded-xl glass-light hover:bg-surface-light/80 transition-colors cursor-default"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-gray-200">{name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-purple/10 rounded-full blur-[150px]" />
      </div>

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent-purple text-sm font-medium uppercase tracking-widest">
            Technologies
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex gap-4 mb-4">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <TechItem key={`${tech.name}-${i}`} {...tech} />
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <TechItem key={`${tech.name}-dup-${i}`} {...tech} />
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="flex gap-4">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map(
              (tech, i) => (
                <TechItem key={`${tech.name}-rev-${i}`} {...tech} />
              )
            )}
          </motion.div>
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map(
              (tech, i) => (
                <TechItem key={`${tech.name}-rev-dup-${i}`} {...tech} />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
