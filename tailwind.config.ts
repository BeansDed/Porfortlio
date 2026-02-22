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
        serif: ["Georgia", "serif"],
        display: ["Inter", "system-ui", "sans-serif"],
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
    },
  },
  plugins: [],
};
export default config;
