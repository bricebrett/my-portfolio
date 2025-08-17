import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <ScrollReveal>
        <div className="footer__top">
          <a href="https://www.linkedin.com/in/brice-brettinger-2539a5234/">
            Linkedin
          </a>
          <a href="https://github.com/bricebrett">GitHub</a>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="footer__middle">
          <h2 className="footer__middle-text">
            Que ce soit pour une question, un échange ou un futur projet, je
            suis disponible.
          </h2>
          <div className="footer__middle-actions">
            <Link href="/contact">
              <button>Contact</button>
            </Link>
            <div className="dot">Ouvert aux opportunités</div>
          </div>
        </div>
      </ScrollReveal>

      <div className="footer__bottom">
        <div className="footer__bottom-section">
          <span>+33 6 68 20 95 56</span>
        </div>
        <div className="footer__bottom-section">
          <span>Conçu & Développé</span>
          <span>par Brice Brettinger</span>
        </div>
        <div className="footer__bottom-section">
          <span>All rights reserved,</span>
          <span>PORTFOLIO ©2025</span>
        </div>
      </div>
    </footer>
  );
}
