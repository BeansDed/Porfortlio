"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Smoother spring physics
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <main className="relative bg-background text-foreground selection:bg-accent-blue/20 selection:text-accent-blue overflow-x-hidden">
      {/* Mythic Atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-mythic-veil opacity-70" />
        <div className="absolute inset-0 bg-mythic-key opacity-25 mix-blend-multiply mask-vignette" />
        <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-mythic-glow opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-[36rem] w-[36rem] rounded-full bg-mythic-glow opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Vertical Scroll Layout - Mobile Friendly */}
        <div className="w-full">
          <Hero />
          <About />
          <BentoGrid />
          <Footer />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-roman-gold/15 z-50">
        <motion.div 
          className="h-full bg-roman-gold origin-left"
          style={{ scaleX: smoothProgress }}
        />
      </div>
    </main>
  );
}
