export default function Education() {
  return (
    <section id="education" className="section-shell border-t border-border py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Still learning. Already building.</h2>
        </div>
        <article className="grid gap-6 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
          <div>
            <p className="text-lg font-semibold text-foreground">BS Information Technology</p>
            <p className="mt-2 text-sm text-muted">System Development · PHINMA University of Dagupan</p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Expected June 2027</p>
        </article>
      </div>
    </section>
  );
}
