"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  
  const count = useSpring(0, { duration: 2000, bounce: 0 });
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v.toString().padStart(2, "0"));
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="text-center">
      <span className="block text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-1">
        {displayValue}{suffix}
      </span>
      <span className="text-stone-gray text-[10px] sm:text-xs font-serif tracking-[0.15em] sm:tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const driftReverse = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const reduceMotion = useReducedMotion();
  const xDrift = reduceMotion ? 0 : drift;
  const xReverse = reduceMotion ? 0 : driftReverse;

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 bg-surface overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute -right-16 sm:-right-24 -bottom-16 sm:-bottom-24 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 border border-roman-gold/5 rounded-full pointer-events-none" />
      <motion.div
        style={{ x: xDrift }}
        className="absolute -left-20 top-24 h-40 w-40 rounded-full bg-roman-gold/10 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: xReverse }}
        className="absolute right-10 bottom-16 h-56 w-56 rounded-full border border-roman-gold/15 bg-background/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-roman-gold text-xs font-serif tracking-[0.2em] sm:tracking-[0.3em] uppercase block mb-4 sm:mb-6">
              The Philosophy
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider text-foreground leading-tight mb-6 sm:mb-8">
              DIGITAL<br />ALCHEMY
            </h2>
            
            <motion.div 
              className="w-16 sm:w-24 h-[1px] bg-roman-gold mb-6 sm:mb-8 mx-auto lg:mx-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
            
            <p className="text-stone-gray font-serif text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              "We do not merely write code; we transmute abstract logic into tangible experiences. Every pixel is placed with intention, every interaction sculpted for impact."
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {[
              { label: "Years Exp.", value: "03+" },
              { label: "Projects", value: "18+" },
              { label: "Awards", value: "01" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="p-4 sm:p-6 border border-roman-gold/10 bg-background/50"
              >
                <Counter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
