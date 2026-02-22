export default function Experience() {
  const responsibilities = [
    "Built custom web and software solutions with Python (Django) and modern JavaScript/TypeScript frameworks, focusing on scalable architecture and clean API design.",
    "Developed RESTful APIs and integrated third-party services to automate client workflows and speed up MVP delivery.",
    "Implemented responsive frontend interfaces for cross-platform usability across desktop and mobile environments.",
    "Delivered maintainable solutions under strict deadlines for international clients.",
  ];

  return (
    <section id="experience" className="px-4 sm:px-6 py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-blue mb-3">
          Professional Experience
        </p>
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-8">
          Freelance Full-Stack Developer
        </h2>

        <article className="rounded-xl border border-foreground/10 bg-surface/90 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
            <p className="text-base sm:text-lg font-semibold text-foreground">Remote</p>
            <p className="text-sm font-medium text-stone-gray">2024 - Present</p>
          </div>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-stone-gray leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
