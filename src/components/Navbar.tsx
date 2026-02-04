"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Philosophy", href: "#about" },
  { name: "Works", href: "#work" },
  { name: "Epistula", href: "#contact" }, // Latin for "Letter" or Contact
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(10px)"]);
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(246, 240, 230, 0)", "rgba(246, 240, 230, 0.85)"]);
  const borderColor = useTransform(scrollY, [0, 50], ["rgba(201, 162, 39, 0)", "rgba(201, 162, 39, 0.18)"]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    const headerOffset = 96; // matches h-24
    window.scrollTo({
      top: Math.max(element.offsetTop - headerOffset, 0),
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b"
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
          borderColor,
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-3xl font-display font-bold tracking-[0.2em] text-foreground hover:text-roman-gold transition-colors duration-300"
          >
            ARDRE
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-serif tracking-widest uppercase text-stone-gray hover:text-roman-red transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-roman-red transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-roman-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-32 px-6 md:hidden"
        >
          <ul className="flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl font-display tracking-widest text-foreground hover:text-roman-gold transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
