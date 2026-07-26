const skillGroups = [
  { number: "01", title: "Build", description: "Interfaces and product flows that remain clear across screens.", items: ["React", "TypeScript", "Flutter", "Tailwind CSS"] },
  { number: "02", title: "Engineer", description: "APIs, services, and business logic for complete applications.", items: ["Python", "Django", "FastAPI", "Hono.js", "SQL"] },
  { number: "03", title: "Ship", description: "Practical delivery workflows with visibility after launch.", items: ["Docker", "CI/CD", "Nginx", "Prometheus", "Playwright"] },
  { number: "04", title: "Explore", description: "Applied AI, media automation, and interactive experiences.", items: ["LLM integrations", "Computer vision", "FFmpeg", "Unity"] },
];

export default function About() {
  return (
    <section id="skills" className="capabilities">
      <div className="capabilities-heading">
        <p className="eyebrow">03 / Skill deck</p>
        <h2>FULL STACK.<br /><span>ZERO BEIGE.</span></h2>
        <p>Wide enough to own the product. Focused enough to finish it.</p>
      </div>
      <div className="capability-grid">
        {skillGroups.map((group) => (
          <article key={group.title}>
            <div className="capability-number">{group.number}</div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>{group.items.map((item) => <li key={item}>{item}<span>↗</span></li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
