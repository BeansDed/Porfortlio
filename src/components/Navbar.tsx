import { ArrowUpRight, Menu } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#hero" className="focus-ring group inline-flex items-center gap-3 rounded-sm">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs font-black text-background">
            AM
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">Ardre Malonzo</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a className="focus-ring nav-link rounded-sm" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:malonzoardre3@gmail.com?subject=Portfolio%20inquiry"
          className="focus-ring hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent md:inline-flex"
        >
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={14} />
        </a>

        <details className="group relative md:hidden">
          <summary className="focus-ring grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-border text-foreground marker:content-none">
            <span className="sr-only">Open navigation</span>
            <Menu aria-hidden="true" size={18} />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 w-56 rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/40"
          >
            {navLinks.map((link) => (
              <a key={link.name} className="focus-ring block rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-surface-light hover:text-foreground" href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>
        </details>
      </nav>
    </header>
  );
}
