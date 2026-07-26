import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-topline"><p>05 / One last thing</p><p>Don&apos;t be shy. The internet is already weird.</p></div>
      <div className="footer-main">
        <h2>LET&apos;S MAKE<br /><span>SOMETHING</span><br />UNIGNORABLE.</h2>
        <a className="focus-ring footer-orbit" href="mailto:malonzoardre3@gmail.com?subject=Portfolio%20inquiry">
          <span>DROP ME A LINE · DROP ME A LINE · </span>
          <ArrowUpRight aria-hidden="true" size={38} />
        </a>
      </div>
      <div className="footer-contact">
        <a className="focus-ring" href="mailto:malonzoardre3@gmail.com?subject=Portfolio%20inquiry"><Mail aria-hidden="true" size={16} /> malonzoardre3@gmail.com</a>
        <a className="focus-ring" href="tel:+639167562796"><Phone aria-hidden="true" size={15} /> +63 916 756 2796</a>
        <p><MapPin aria-hidden="true" size={15} /> Urdaneta City, Pangasinan</p>
        <a className="focus-ring" href="https://github.com/BeansDed" target="_blank" rel="noreferrer"><Github aria-hidden="true" size={15} /> github.com/BeansDed</a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ARDRE N. MALONZO</p>
        <div><span className="live-dot" /> OPEN TO INTERNSHIPS, JUNIOR ROLES &amp; FREELANCE</div>
        <a href="#hero" className="focus-ring">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
