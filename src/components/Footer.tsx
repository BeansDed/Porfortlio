"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { useRef } from "react";

const socialLinks = [
  { name: "Github", icon: Github, href: "https://github.com/beansded" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/beans_neow" },
  { name: "Email", icon: Mail, href: "mailto:malonzoardre3@gmail.com" },
];

export default function Footer() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const driftReverse = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const reduceMotion = useReducedMotion();
  const xDrift = reduceMotion ? 0 : drift;
  const xReverse = reduceMotion ? 0 : driftReverse;

  return (
    <footer id="contact" ref={sectionRef} className="relative bg-background pt-20 sm:pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-mythic-key opacity-15 mask-vignette pointer-events-none" />
      <motion.div
        style={{ x: xDrift }}
        className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-roman-gold/10 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: xReverse }}
        className="absolute right-10 bottom-12 h-52 w-52 rounded-full border border-roman-gold/15 bg-surface/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Main Block */}
        <motion.div 
          className="bg-surface/90 border border-roman-gold/20 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm animate-roam-float text-center backdrop-blur-sm"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-stone-400">
            <span className="text-sm font-medium tracking-wide">[[Contact]]</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-foreground mb-6 sm:mb-8">
            Ready to <span className="text-accent-blue font-normal">[[collaborate]]</span>?
          </h2>

          <p className="text-base sm:text-lg text-stone-gray mb-8 sm:mb-10 max-w-xl mx-auto">
            Open for dialogue on networked systems, design engineering, and digital architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm sm:text-base text-stone-gray hover:text-accent-blue transition-colors"
                >
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">[[</span>
                  <span className="flex items-center gap-2">
                    <Icon size={20} />
                    {link.name}
                  </span>
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">]]</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-xs text-stone-400 font-mono">
          <p className="flex items-center justify-center gap-2">
             Made with <Heart className="w-3 h-3 text-red-500" /> by ARDRE
          </p>
          <p className="mt-2">{"\u00A9"} {new Date().getFullYear()} ARDRE. All nodes connected.</p>
        </div>
      </div>
    </footer>
  );
}

