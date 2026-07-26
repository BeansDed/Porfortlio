import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-meta">
        <p><span className="live-dot" /> Available for select work</p>
        <p>Urdaneta City / PH</p>
        <p>Local time · GMT+8</p>
      </div>
      <div className="hero-name-wrap" aria-label="Ardre Malonzo">
        <div className="hero-callout" aria-hidden="true"><span>NEW QUEST</span> BUILD THE IMPOSSIBLE!</div>
        <p className="hero-kicker">FULL-STACK CREATIVE DEVELOPER</p>
        <h1 className="hero-name">
          <span>ARDRE</span>
          <span className="hero-name-offset">MALONZO<span className="hero-asterisk">✦</span></span>
        </h1>
        <div className="orbit-badge" aria-hidden="true">
          <span className="orbit-text">DESIGN · CODE · REPEAT · </span>
          <span className="orbit-center">AM</span>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="hero-intro">
          I turn <em>ambitious ideas</em> into digital products people actually want to use—from
          interface to infrastructure.
        </p>
        <div className="hero-actions">
          <a className="focus-ring magnetic-button" href="#work">
            See the receipts <ArrowDownRight aria-hidden="true" size={19} />
          </a>
          <a className="focus-ring text-link" href="https://github.com/BeansDed" target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={17} /> GitHub <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
      <div className="hero-scroll-note"><span>Scroll to break the grid</span><span className="scribble-arrow">↘</span></div>
      <div className="hero-slash" aria-hidden="true">CODE / CREATE / REBEL</div>
      <div className="hero-ticker" aria-hidden="true">
        <div>
          <span>AI PRODUCTS ✦</span><span>WEB EXPERIENCES ✦</span><span>MOBILE APPS ✦</span>
          <span>BACKEND SYSTEMS ✦</span><span>AI PRODUCTS ✦</span><span>WEB EXPERIENCES ✦</span>
          <span>MOBILE APPS ✦</span><span>BACKEND SYSTEMS ✦</span>
        </div>
      </div>
    </section>
  );
}
