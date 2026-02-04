"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const driftReverse = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const float = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const reduceMotion = useReducedMotion();

  const xDrift = reduceMotion ? 0 : drift;
  const xReverse = reduceMotion ? 0 : driftReverse;
  const yFloat = reduceMotion ? 0 : float;

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 bg-background"
    >
      {/* Mythic Drift Ornaments */}
      <motion.div
        style={{ x: xDrift, y: yFloat }}
        className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-roman-gold/10 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: xReverse }}
        className="absolute -right-16 bottom-24 h-56 w-56 rounded-full border border-roman-gold/20 bg-surface/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full space-y-8 z-10">
        {/* Main Block */}
        <motion.div 
          className="bg-surface/90 border border-roman-gold/20 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm animate-roam-float hover:shadow-md transition-shadow duration-300 backdrop-blur-sm text-center md:text-left"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6 text-stone-gray">
            <div className="w-2 h-2 rounded-full bg-accent-blue" />
            <span className="text-sm font-medium tracking-wide">[[Home]]</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-light text-foreground tracking-tight leading-tight mb-6">
            Building digital <span className="text-accent-blue font-normal">[[systems]]</span> <br />
            for networked thought.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-gray leading-relaxed max-w-2xl mx-auto md:mx-0">
            A minimalist approach to engineering and design. Interconnecting ideas, 
            components, and user experiences into a cohesive whole.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start">
            <a 
              href="#work" 
              className="inline-flex items-center text-accent-blue hover:underline decoration-1 underline-offset-4 transition-all"
            >
              <span className="opacity-50 mr-1">[[</span>
              Explore Graph
              <span className="opacity-50 ml-1">]]</span>
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center text-stone-gray hover:text-foreground hover:underline decoration-1 underline-offset-4 transition-all"
            >
              <span className="opacity-50 mr-1">[[</span>
              Read Philosophy
              <span className="opacity-50 ml-1">]]</span>
            </a>
          </div>
        </motion.div>

        {/* Floating Abstract Blocks */}
        <div className="absolute top-1/4 -left-12 w-24 h-24 bg-surface border border-roman-gold/15 rounded-lg opacity-60 animate-roam-float [animation-delay:1s] hidden lg:block" />
        <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-surface border border-roman-gold/15 rounded-lg opacity-60 animate-roam-float [animation-delay:2s] hidden lg:block" />
      </div>
      
      {/* Mythic Pattern */}
      <div className="absolute inset-0 bg-mythic-key opacity-20 mask-vignette pointer-events-none" />
    </section>
  );
}
