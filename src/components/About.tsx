const skillGroups = [
  {
    number: "01",
    title: "Build",
    description: "Interfaces and product flows that remain clear across screens.",
    items: ["React", "TypeScript", "Flutter", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Engineer",
    description: "APIs, services, and business logic for complete applications.",
    items: ["Python", "Django", "FastAPI", "Hono.js", "SQL"],
  },
  {
    number: "03",
    title: "Ship",
    description: "Practical delivery workflows with visibility after launch.",
    items: ["Docker", "CI/CD", "Nginx", "Prometheus", "Playwright"],
  },
  {
    number: "04",
    title: "Explore",
    description: "Applied AI, media automation, and interactive experiences.",
    items: ["LLM integrations", "Computer vision", "FFmpeg", "Unity"],
  },
];

export default function About() {
  return (
    <section id="skills" className="section-shell border-t border-border py-24 sm:py-32">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">A useful range.</h2>
        </div>
        <p className="section-intro">Broad enough to move across a product, focused around the tools I use to deliver working software.</p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.title} className="flex min-h-80 flex-col bg-surface p-6 sm:p-7">
            <span className="font-mono text-xs text-accent">{group.number}</span>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
            <ul className="mt-auto space-y-2 pt-8">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <span className="h-1 w-1 rounded-full bg-accent" /> {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
