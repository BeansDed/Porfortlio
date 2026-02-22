export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 py-16 sm:py-20 bg-surface/60 border-y border-foreground/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-blue mb-3">Education</p>
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-8">
          Bachelor of Science in Information Technology
        </h2>

        <article className="rounded-xl border border-foreground/10 bg-background/80 p-6 sm:p-8">
          <p className="text-lg font-semibold text-foreground">PHINMA University of Dagupan</p>
          <p className="mt-2 text-sm sm:text-base text-stone-gray">
            Major in System Development
          </p>
          <p className="mt-4 inline-flex rounded-full border border-accent-blue/25 bg-accent-blue/5 px-3 py-1 text-xs font-semibold tracking-wide text-accent-blue">
            Expected Graduation: June 2027
          </p>
        </article>
      </div>
    </section>
  );
}
