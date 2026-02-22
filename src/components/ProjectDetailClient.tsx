import { Project } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const isRepository = project.link?.includes("github.com");

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-blue/15 selection:text-accent-blue">
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-stone-gray hover:text-accent-blue transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <Link href="/#hero" className="text-sm sm:text-base font-semibold tracking-wide text-foreground">
            ARDRE
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="rounded-xl border border-foreground/10 bg-surface/85 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-blue mb-3">
            {project.highlight}
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground">{project.title}</h1>
          <p className="mt-5 text-base sm:text-lg text-stone-gray max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article className="lg:col-span-8 rounded-xl border border-foreground/10 bg-surface/85 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Key Contributions</h2>
            <ul className="space-y-3 mb-8">
              {project.details.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-stone-gray leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-foreground/15 px-3 py-1 text-xs sm:text-sm font-medium text-stone-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4 rounded-xl border border-foreground/10 bg-surface/85 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quick Info</h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-stone-gray">Project Focus</dt>
                <dd className="text-foreground font-medium mt-1">{project.highlight}</dd>
              </div>
              <div>
                <dt className="text-stone-gray">Tech Count</dt>
                <dd className="text-foreground font-medium mt-1">{project.tags.length} technologies listed</dd>
              </div>
              <div>
                <dt className="text-stone-gray">Deliverables</dt>
                <dd className="text-foreground font-medium mt-1">{project.details.length} key contributions</dd>
              </div>
            </dl>

            <div className="mt-6 pt-6 border-t border-foreground/10">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-blue/90 transition-colors"
                >
                  {isRepository ? "View Repository" : "View Project"}
                  {isRepository ? <Github className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </a>
              ) : (
                <p className="text-sm text-stone-gray">External link not available for this project.</p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

