import { ArrowUpRight } from "lucide-react";

const responsibilities = [
  "Build full-stack products with Python, Django, and modern TypeScript frameworks.",
  "Design REST APIs and connect third-party services for client workflows and MVPs.",
  "Create responsive interfaces that work consistently across desktop and mobile.",
  "Package and deliver maintainable solutions for international clients on deadline.",
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-title">
        <p className="eyebrow">02 / Social stats</p>
        <h2>I DON&apos;T JUST<br />MAKE IT <span>PRETTY.</span></h2>
        <p className="experience-deck">I make it ship.</p>
      </div>
      <article className="experience-card">
        <div className="experience-card-head">
          <div><p>2024—NOW / REMOTE</p><h3>Freelance<br />Full-stack Developer</h3></div>
          <span className="experience-stamp">REAL<br />WORLD<br />XP</span>
        </div>
        <div className="experience-card-body">
          <p className="experience-lead">Independent work from first messy brief to a working product in someone&apos;s hands.</p>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
            ))}
          </ul>
          <a className="focus-ring text-link experience-link" href="mailto:malonzoardre3@gmail.com?subject=Work%20opportunity">
            Ask me about the details <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </article>
    </section>
  );
}
