import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#F2EDE3",
        surface: "#FFFCF5",
        "surface-light": "#E6E0D5",
        foreground: "#111111",
        muted: "#5D5A55",
        border: "#111111",
        accent: "#3657FF",
        "accent-soft": "#FF6B4A",
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
