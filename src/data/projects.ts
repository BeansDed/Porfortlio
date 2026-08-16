export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  details: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "bimby",
    title: "Bimby — AI Scam Detector",
    category: "AI / Full-stack",
    description:
      "A chat-based fraud analysis system that reviews text and screenshots, scores risk, and explains the warning signs behind a result.",
    tags: ["Python", "Django", "TypeScript", "LLM", "Computer Vision"],
    details: [
      "Built a single analysis flow for both pasted messages and uploaded screenshots.",
      "Combined classification, feature extraction, and LLM-generated explanations in one pipeline.",
      "Returned a 0–100 risk score and surfaced urgency, reward, and manipulation signals for the user.",
    ],
  },
  {
    id: "lumina-sort",
    title: "LUMINA_SORT — Pixel Sorting Engine",
    category: "Image processing / Backend",
    description:
      "A deterministic image-processing engine that transforms photographs into glitch-style visuals by sorting pixel intervals using brightness and color data.",
    tags: ["Python", "Django", "NumPy", "Pillow", "Image Processing"],
    details: [
      "Implemented deterministic pixel sorting using luminosity, hue, saturation, and RGB-based sort keys.",
      "Added threshold masking so specific tonal ranges can be targeted instead of processing the entire image.",
      "Built the workflow as a Django application with reusable processing recipes and export-oriented image handling.",
    ],
    link: "https://github.com/BeansDed/LUMINA_SORT",
  },
  {
    id: "publico",
    title: "Publico — Transparency Dashboard",
    category: "Civic tech / Frontend",
    description:
      "A public-accountability dashboard that turns operational records into visible reporting, issue tracking, and follow-through workflows.",
    tags: ["TypeScript", "JavaScript", "Dashboard", "Data Visualization"],
    details: [
      "Developed the dashboard interface for oversight and accountability workflows.",
      "Built data-visualization modules for clearer operational reporting.",
      "Added issue tracking to support monitoring from discovery through resolution.",
    ],
    link: "https://github.com/chiyarrih/Publico_FrontEnd",
  },
  {
    id: "reddit-to-shorts",
    title: "Reddit-to-Shorts Pipeline",
    category: "Automation / Media",
    description:
      "An automated media pipeline that converts long-form Reddit stories into segmented, subtitled, short-form video content.",
    tags: ["Python", "JavaScript", "FFmpeg", "Automation"],
    details: [
      "Built the orchestration flow that transforms source text into rendered video.",
      "Implemented story segmentation and timed subtitle generation.",
      "Refined the processing sequence for faster output and more readable results.",
    ],
  },
  {
    id: "hoyoverse-lore",
    title: "Irminsul Lore Scholar",
    category: "AI / Knowledge interface",
    description:
      "An AI-assisted lore explorer that consolidates fragmented narrative sources and gives users a guided path to relevant answers.",
    tags: ["TypeScript", "JavaScript", "CSS", "AI Integration"],
    details: [
      "Built a lore aggregation layer for scattered narrative sources.",
      "Designed a focused question-and-answer interface for guided exploration.",
      "Created a faster discovery path than browsing multiple wiki pages manually.",
    ],
    link: "https://github.com/BeansDed/Hoyoverse-Lore",
  },
  {
    id: "identity-resolution-engine",
    title: "Company Identity Resolution Engine",
    category: "Backend / Data systems",
    description:
      "A TypeScript service for matching company identities at scale, consolidating duplicate records, and exposing the result through HTTP APIs.",
    tags: ["TypeScript", "Docker", "Prometheus", "HTTP APIs", "Observability"],
    details: [
      "Developed entity-matching logic for consolidating company records.",
      "Exposed HTTP endpoints so external systems could use the resolution service.",
      "Added Prometheus metrics and a Dockerized deployment for operational visibility.",
    ],
    link: "https://github.com/BeansDed/High-Scale-Company-Identity-Resolution-Engine",
  },
];
