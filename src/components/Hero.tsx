export default function Hero() {
  const quickFacts = [
    { label: "Location", value: "Urdaneta City, Pangasinan" },
    { label: "Role Focus", value: "Junior Full-Stack Developer" },
    { label: "Availability", value: "Open for hiring" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 pt-24 sm:pt-28">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center rounded-full border border-accent-blue/25 bg-accent-blue/5 px-3 py-1 text-xs font-medium tracking-wide text-accent-blue mb-6">
              Ardre N. Malonzo
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-foreground">
              Full-Stack Developer building scalable products across web, mobile, and AI-assisted systems.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-stone-gray max-w-3xl leading-relaxed">
              Versatile developer with practical experience in backend services, REST APIs, responsive
              frontend engineering, and DevOps-enabled delivery using Python, TypeScript, React.js, and Docker.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:malonzoardre3@gmail.com"
                className="inline-flex items-center rounded-full border border-foreground/15 px-3 py-1.5 text-stone-gray hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
              >
                malonzoardre3@gmail.com
              </a>
              <a
                href="tel:+639167562796"
                className="inline-flex items-center rounded-full border border-foreground/15 px-3 py-1.5 text-stone-gray hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
              >
                +63 916 756 2796
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-white hover:bg-accent-blue/90 transition-colors"
              >
                View Technical Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/BeansDed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-foreground/10 bg-surface/80 p-6 sm:p-7">
              <h2 className="text-sm font-semibold text-foreground mb-5">Quick Snapshot</h2>
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between border-b border-foreground/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-sm text-stone-gray">{fact.label}</span>
                    <span className="text-sm font-semibold text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
