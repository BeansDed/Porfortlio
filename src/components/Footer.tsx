import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/BeansDed", external: true },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", external: true },
];

const contactItems = [
  { label: "Email", value: "malonzoardre3@gmail.com", icon: Mail, href: "mailto:malonzoardre3@gmail.com" },
  { label: "Phone", value: "+63 916 756 2796", icon: Phone, href: "tel:+639167562796" },
  { label: "Location", value: "Urdaneta City, Pangasinan", icon: MapPin, href: undefined },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-background pt-16 sm:pt-20 pb-10 px-4 sm:px-6 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl border border-foreground/10 bg-surface/90 p-6 sm:p-8 md:p-10">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-blue mb-3">Contact</p>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Open to internships, junior roles, and freelance projects.
          </h2>
          <p className="text-base text-stone-gray mb-8 max-w-3xl">
            If your team is hiring a junior developer who can contribute across frontend, backend,
            and delivery pipelines, I would be glad to connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="rounded-md border border-foreground/15 px-4 py-3 h-full">
                  <p className="text-xs uppercase tracking-wide text-stone-gray mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-foreground inline-flex items-center gap-2">
                    <Icon size={16} />
                    {item.value}
                  </p>
                </div>
              );

              if (!item.href) {
                return <div key={item.label}>{content}</div>;
              }

              return (
                <a key={item.label} href={item.href} className="hover:text-accent-blue transition-colors">
                  {content}
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-4 py-2 text-sm font-medium text-stone-gray hover:text-accent-blue hover:border-accent-blue/40 transition-colors duration-200"
                >
                  <Icon size={18} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-stone-400">
          <p>{"\u00A9"} {new Date().getFullYear()} ARDRE. Portfolio built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

