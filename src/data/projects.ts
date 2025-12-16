export interface Project {
  id: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  size: "large" | "standard" | "compact";
  gradient: string;
  icon: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "petpal",
    title: "PetPal",
    description: "E-commerce & Booking Mobile App for pet services with full-stack implementation.",
    highlight: "Full Stack Mobile Solution",
    tags: ["React Native", "Node.js", "MongoDB", "E-commerce"],
    size: "large",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "🐾",
    link: "https://github.com/MarkKheanViari/PetPal-E-commerce-Booking-Mobile-",
  },
  {
    id: "qualichain",
    title: "QualiChain-AI",
    description: "AI-powered blockchain solution for credential verification and quality assurance.",
    highlight: "Next-Gen Tech",
    tags: ["AI/ML", "Blockchain", "Python", "Smart Contracts"],
    size: "large",
    gradient: "from-teal-500/20 to-cyan-500/20",
    icon: "⛓️",
    link: "https://github.com/BeansDed/QualiChain-AI",
  },
  {
    id: "lurk",
    title: "Lurk",
    description: "Atmospheric horror game with immersive sound design and psychological elements.",
    highlight: "Atmospheric Design & Game Dev",
    tags: ["Unity", "C#", "Game Design", "Horror"],
    size: "standard",
    gradient: "from-red-500/20 to-orange-500/20",
    icon: "👁️",
    link: "https://github.com/justinmcneal/Lurk",
  },
  {
    id: "arcane-conquest",
    title: "ArcaneConquest",
    description: "Strategic web-based game with real-time interactions and competitive gameplay.",
    highlight: "Strategy & Web Interaction",
    tags: ["React", "WebSocket", "Game Logic", "Strategy"],
    size: "standard",
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: "⚔️",
    link: "https://github.com/BeansDed/ArcaneConquestWebsite",
  },
  {
    id: "hoyoverse-lore",
    title: "Hoyoverse-Lore",
    description: "Comprehensive wiki and database for Hoyoverse game universes.",
    highlight: "Wiki/Database Architecture",
    tags: ["Next.js", "Database", "CMS", "API"],
    size: "standard",
    gradient: "from-blue-500/20 to-indigo-500/20",
    icon: "📚",
    link: "https://github.com/BeansDed/Hoyoverse-Lore",
  },
  {
    id: "weather-app",
    title: "Weather-App",
    description: "Real-time weather application with clean UI and API integration.",
    highlight: "API Integration",
    tags: ["React", "REST API", "Responsive"],
    size: "compact",
    gradient: "from-sky-500/20 to-blue-500/20",
    icon: "🌤️",
    link: "https://github.com/BeansDed/Weather-app",
  },
  {
    id: "lumina-sort",
    title: "LUMINA_SORT",
    description: "Visual sorting algorithm demonstration with interactive animations.",
    highlight: "Sorting Algorithms & Visualization",
    tags: ["JavaScript", "Algorithms", "Visualization"],
    size: "compact",
    gradient: "from-amber-500/20 to-yellow-500/20",
    icon: "✨",
    link: "https://github.com/BeansDed/LUMINA_SORT",
  },
  {
    id: "publico",
    title: "Publico_FrontEnd",
    description: "Modern public service interface with accessible design principles.",
    highlight: "Public Service UI",
    tags: ["React", "Accessibility", "UI/UX"],
    size: "compact",
    gradient: "from-emerald-500/20 to-green-500/20",
    icon: "🏛️",
    link: "https://github.com/chiyarrih/Publico_FrontEnd",
  },
];

export const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Unity", icon: "🎮" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎯" },
];
