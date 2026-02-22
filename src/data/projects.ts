export interface Project {
  id: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  details: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "bimby",
    title: "Bimby (Scam Detector AI)",
    description:
      "AI-powered scam detection chat system that analyzes text and screenshots to detect fraud signals in real time.",
    highlight: "AI-assisted fraud detection",
    tags: ["Python", "Django", "TypeScript", "LLM", "Computer Vision"],
    details: [
      "Built a chat-driven scam detection workflow for text and screenshot analysis.",
      "Designed a neuro-semantic pipeline with classifier, feature extractor, and LLM-based explanation output.",
      "Generated risk scores from 0 to 100 and highlighted red-flag phrases such as urgency and reward-over-effort.",
    ],
  },
  {
    id: "skin-sense",
    title: "Skin Sense (AI Diagnostic Skin Platform)",
    description:
      "Computer vision platform for analyzing skin-related biological data with mobile capture and secure records.",
    highlight: "Computer vision and health workflow",
    tags: ["Python", "Hono.js", "Flutter", "Blockchain", "Computer Vision"],
    details: [
      "Architected a diagnostic workflow for skin-related classification tasks.",
      "Implemented blockchain-backed immutable record storage for diagnostic output.",
      "Built a cross-platform mobile flow for image capture, upload, and result processing.",
    ],
  },
  {
    id: "publico",
    title: "Publico (Transparency Dashboard)",
    description:
      "Web-based transparency dashboard that supports accountability workflows through data visibility and issue tracking.",
    highlight: "Data visibility and governance tooling",
    tags: ["TypeScript", "JavaScript", "Dashboard", "Data Visualization"],
    details: [
      "Developed a transparency dashboard for oversight and accountability workflows.",
      "Implemented data visualization modules for operational reporting.",
      "Added issue tracking features to improve monitoring and follow-through.",
    ],
    link: "https://github.com/chiyarrih/Publico_FrontEnd",
  },
  {
    id: "reddit-to-shorts",
    title: "Reddit-to-Shorts (Automation Pipeline)",
    description:
      "Automated media pipeline that converts long-form Reddit stories into short-form video content.",
    highlight: "Automation and media processing",
    tags: ["Python", "JavaScript", "FFmpeg", "Automation"],
    details: [
      "Built an end-to-end pipeline for transforming text stories into short videos.",
      "Implemented subtitle generation, story segmentation, and rendering orchestration.",
      "Optimized processing workflow to improve output speed and readability.",
    ],
  },
  {
    id: "hoyoverse-lore",
    title: "Hoyoverse Lore (Irminsul Lore Scholar)",
    description:
      "AI-powered lore exploration platform that synthesizes fragmented story content into guided answers.",
    highlight: "AI-powered knowledge interface",
    tags: ["TypeScript", "JavaScript", "CSS", "AI Integration"],
    details: [
      "Built a lore aggregation system that consolidates scattered narrative sources.",
      "Designed a user-facing interface for guided question answering.",
      "Improved information retrieval compared with traditional wiki-style browsing.",
    ],
    link: "https://github.com/BeansDed/Hoyoverse-Lore",
  },
  {
    id: "identity-resolution-engine",
    title: "High-Scale Company Identity Resolution Engine",
    description:
      "TypeScript-based service for high-scale entity matching and company record consolidation.",
    highlight: "High-scale backend service",
    tags: ["TypeScript", "Docker", "Prometheus", "HTTP APIs", "Observability"],
    details: [
      "Developed entity matching logic for company identity consolidation.",
      "Exposed HTTP APIs for integration with external systems.",
      "Added Prometheus metrics and Dockerized deployment for operational monitoring.",
    ],
  },
];
