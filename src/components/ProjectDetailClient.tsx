"use client";

import { Project } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-accent-blue/20 selection:text-accent-blue">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference">
        <Link 
          href="/#work"
          className="group flex items-center gap-2 text-stone-gray hover:text-roman-gold transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-serif tracking-widest uppercase text-sm">Back to Gallery</span>
        </Link>
        <div className="text-xl font-display font-bold tracking-[0.2em] text-foreground">ARDRE</div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        
        {/* Abstract Background */}
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.gradient} blur-3xl transform scale-150 animate-pulse-slow`} />

        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-roman-red font-serif tracking-[0.3em] uppercase text-sm md:text-base block mb-6">
              {project.highlight}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-wider text-foreground mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-stone-gray/80 font-serif italic text-lg">
              {project.tags.map((tag, i) => (
                <span key={tag}>
                  {tag} {i < project.tags.length - 1 && "\u{2022}"}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Description */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="prose prose-lg prose-stone max-w-none"
            >
              <h3 className="text-3xl font-display mb-6 text-foreground">Overview</h3>
              <p className="text-stone-gray font-serif text-lg leading-loose md:text-xl">
                {project.description}
              </p>
              
              {/* Additional mocked content for aesthetic completeness since data is limited */}
              <p className="text-stone-gray font-serif text-lg leading-loose md:text-xl mt-6">
                Designed with a focus on user experience and architectural elegance. 
                The interface balances functionality with visual harmony, ensuring that every interaction feels purposeful and refined.
              </p>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="p-8 border border-roman-gold/20 bg-surface/50 backdrop-blur-sm"
            >
              <h4 className="font-display text-xl mb-6 text-foreground">Project Details</h4>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-xs font-serif uppercase tracking-widest text-stone-gray mb-2">Platform</span>
                  <span className="text-foreground font-display">Web / Mobile</span>
                </div>
                <div>
                  <span className="block text-xs font-serif uppercase tracking-widest text-stone-gray mb-2">Year</span>
                  <span className="text-foreground font-display">2024</span>
                </div>
                <div>
                  <span className="block text-xs font-serif uppercase tracking-widest text-stone-gray mb-2">Role</span>
                  <span className="text-foreground font-display">Lead Developer & Designer</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-roman-gold/10 space-y-4">
                {project.link && (
                  <>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group w-full py-3 px-4 bg-foreground text-background hover:bg-roman-gold transition-colors duration-300"
                    >
                      <span className="font-serif tracking-widest uppercase text-xs">
                        {project.link.includes("github.com") ? "View Repository" : "View Project"}
                      </span>
                      {project.link.includes("github.com") ? <Github className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="border-t border-roman-gold/10 py-20 text-center">
        <Link 
          href="/#work"
          className="inline-block"
        >
          <span className="block text-xs font-serif tracking-[0.3em] uppercase text-roman-gold mb-4">Return</span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground hover:text-stone-gray transition-colors duration-300">
            View All Works
          </h2>
        </Link>
      </footer>
    </main>
  );
}

