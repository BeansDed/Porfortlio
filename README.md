# Creative Technologist Portfolio

A high-impact, unique personal portfolio website showcasing Full Stack apps, AI integrations, and Game Development projects.

## Features

- 🎨 **Futuristic Utility Design** - Dark mode with glassmorphism and neon accents
- 🏗️ **Bento Grid Layout** - Trendy project showcase with varied card sizes
- ✨ **Smooth Animations** - Framer Motion powered entrance and hover effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🚀 **Next.js 14** - App Router for optimal performance

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter & Space Grotesk

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles & Tailwind
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main page
├── components/
│   ├── Hero.tsx       # Hero section
│   ├── BentoGrid.tsx  # Projects grid
│   ├── TechStack.tsx  # Tech marquee
│   ├── Navbar.tsx     # Navigation
│   └── Footer.tsx     # Footer
├── data/
│   └── projects.ts    # Project data
└── lib/
    └── utils.ts       # Utility functions
```

## Customization

Edit `src/data/projects.ts` to update the projects and tech stack displayed.

## License

MIT
