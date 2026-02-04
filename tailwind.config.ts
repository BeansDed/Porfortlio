import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        display: ["Cinzel", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: "#F6F0E6", // Parchment
        surface: "#FFF9F2",    // Ivory
        "surface-dark": "#EFE5D6",
        foreground: "#241B16", // Obsidian Ink
        "accent-blue": "#1E4E8C", // Lapis
        "border-subtle": "#E6DDCF",
        "roman-gold": "#C9A227",
        "roman-red": "#7A1E23",
        "stone-gray": "#776B5D",
      },
      backgroundImage: {
        // Removed marble pattern
      },
      animation: {
        "roam-float": "roamFloat 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
      },
      keyframes: {
        roamFloat: {
          "0%": { transform: "translateX(-15px)" },
          "100%": { transform: "translateX(15px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
