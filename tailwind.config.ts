import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0D0C",
        surface: "#121512",
        "surface-light": "#171B17",
        foreground: "#F2F0E8",
        muted: "#A4A79D",
        border: "#293029",
        accent: "#C7FF4C",
        "accent-soft": "#D5FF78",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
