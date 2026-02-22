"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Summary", href: "#summary" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    const headerOffset = window.innerWidth < 640 ? 72 : window.innerWidth < 1024 ? 80 : 96;
    window.scrollTo({
      top: Math.max(element.offsetTop - headerOffset, 0),
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-roman-gold/15 bg-background/90 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-lg sm:text-xl font-semibold tracking-wide text-foreground hover:text-accent-blue transition-colors duration-200"
          >
            ARDRE
          </a>

          <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs lg:text-sm font-medium text-stone-gray hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent-blue transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:malonzoardre3@gmail.com"
            className="hidden lg:inline-flex items-center rounded-md border border-accent-blue/30 px-4 py-2 text-sm font-medium text-accent-blue hover:bg-accent-blue hover:text-white transition-colors duration-200"
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 text-foreground hover:text-roman-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-y-auto">
          <ul className="relative flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-semibold text-foreground hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:malonzoardre3@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center rounded-md border border-accent-blue/30 px-4 py-2 text-sm font-medium text-accent-blue hover:bg-accent-blue hover:text-white transition-colors duration-200"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
