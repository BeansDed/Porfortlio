"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/BeansDed" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/beans_neow" },
  { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border/50">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400 text-sm">
              Open for collaborations and new opportunities.
            </p>
          </motion.div>

          {/* Right side - social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass-light hover:bg-surface-light transition-colors group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-accent-purple">♥</span> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
