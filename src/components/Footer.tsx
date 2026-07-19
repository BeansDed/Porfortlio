import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="section-shell py-20 sm:py-28">
        <p className="eyebrow">Contact</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-balance text-[clamp(2.8rem,7vw,6.7rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-foreground">
              Have a role or project in mind?
            </h2>
            <a className="focus-ring mt-8 inline-flex items-center gap-3 rounded-sm border-b border-accent pb-1 text-lg font-semibold text-accent sm:text-2xl" href="mailto:malonzoardre3@gmail.com?subject=Portfolio%20inquiry">
              malonzoardre3@gmail.com <ArrowUpRight aria-hidden="true" size={22} />
            </a>
          </div>

          <div className="space-y-3 text-sm">
            <a className="focus-ring flex items-center gap-3 rounded-sm text-muted hover:text-accent" href="tel:+639167562796"><Phone aria-hidden="true" size={15} /> +63 916 756 2796</a>
            <p className="flex items-center gap-3 text-muted"><MapPin aria-hidden="true" size={15} /> Urdaneta City, Pangasinan</p>
            <a className="focus-ring flex items-center gap-3 rounded-sm text-muted hover:text-accent" href="https://github.com/BeansDed" target="_blank" rel="noreferrer"><Github aria-hidden="true" size={15} /> github.com/BeansDed</a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ardre N. Malonzo</p>
          <p className="inline-flex items-center gap-2"><Mail aria-hidden="true" size={13} /> Open to internships, junior roles, and freelance work.</p>
        </div>
      </div>
    </footer>
  );
}
