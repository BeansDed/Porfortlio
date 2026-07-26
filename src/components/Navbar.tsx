import { ArrowUpRight, Menu } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <a href="#hero" className="brand-mark focus-ring">
          <span className="brand-dot">AM</span>
          <span className="brand-copy">ARDRE® / 26</span>
        </a>
        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a className="focus-ring nav-link" href={link.href}>{link.name}<span>↗</span></a>
            </li>
          ))}
        </ul>
        <a href="mailto:malonzoardre3@gmail.com?subject=Portfolio%20inquiry" className="nav-cta focus-ring">
          Start a project <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <details className="mobile-menu">
          <summary className="focus-ring mobile-menu-button">
            <span className="sr-only">Open navigation</span>
            <Menu aria-hidden="true" size={19} />
          </summary>
          <nav aria-label="Mobile navigation" className="mobile-menu-panel">
            {navLinks.map((link) => (
              <a key={link.name} className="focus-ring" href={link.href}>{link.name}<span>↗</span></a>
            ))}
          </nav>
        </details>
      </nav>
    </header>
  );
}
