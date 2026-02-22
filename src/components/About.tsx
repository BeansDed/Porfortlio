export default function About() {
  const technicalSkills = [
    {
      category: "Languages",
      items: ["C#", "Python (Django, FastAPI)", "TypeScript", "JavaScript", "Rust", "PHP", "SQL"],
    },
    {
      category: "Web and Mobile",
      items: ["React.js", "Hono.js", "Flutter", "HTML5", "Tailwind CSS"],
    },
    {
      category: "Game Development",
      items: ["Unity", "Unreal Engine", "Blender"],
    },
    {
      category: "DevOps and Infrastructure",
      items: ["Docker", "CI/CD (GitHub Workflows)", "Nginx", "Prometheus"],
    },
    {
      category: "Testing and Tools",
      items: ["Playwright", "FFmpeg"],
    },
    {
      category: "Other",
      items: ["REST APIs", "Automation Pipelines", "Blockchain Integration", "Database Optimization"],
    },
  ];

  return (
    <section id="summary" className="px-4 sm:px-6 py-16 sm:py-20 bg-surface/70 border-y border-foreground/5">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-blue mb-3">
            Professional Summary
          </p>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Versatile junior full-stack developer with hands-on experience across web, mobile,
            AI-assisted systems, and game development.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-gray leading-relaxed">
            Strong foundation in scalable backend services, REST APIs, and responsive frontend
            development using Python, TypeScript, and React. Comfortable with Docker, CI/CD,
            Nginx, and engineering workflows that support fast and reliable product delivery.
          </p>
        </div>

        <div id="skills" className="mt-12">
          <h3 className="text-xl sm:text-3xl font-semibold text-foreground mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((group) => (
              <article key={group.category} className="rounded-xl border border-foreground/10 bg-background/80 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-accent-blue mb-3">
                  {group.category}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm sm:text-base text-stone-gray leading-relaxed flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Primary Focus", value: "Full-Stack Engineering" },
            { label: "Delivery Style", value: "MVP to Production" },
            { label: "Work Mode", value: "Remote / Hybrid Ready" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-foreground/10 bg-background/80 p-5">
              <p className="text-xs uppercase tracking-[0.08em] text-stone-gray mb-1">{item.label}</p>
              <p className="text-sm sm:text-base font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
