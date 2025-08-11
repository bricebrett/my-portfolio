export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a href="https://linkedin.com">Linkedin</a>
        <a href="https://github.com">GitHub</a>
      </div>

      <div className="footer__middle">
        <h2 className="footer__middle-text">
          Lorem ipsum dolor sit amet , consectetur elit. <br />
          Integer vitae justo sapien.
        </h2>
        <div className="footer__middle-actions">
          <button>Contact</button>
          <div className="dot">Available For Work</div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-section">
          <span>+33 6 68 20 95 56</span>
          <span>hello@site.com</span>
        </div>
        <div className="footer__bottom-section">
          <span>Designed & Developed</span>
          <span>by Brice Brettinger</span>
        </div>
        <div className="footer__bottom-section">
          <span>All rights reserved,</span>
          <span>PORTFOLIO ©2025</span>
        </div>
      </div>
    </footer>
  );
}
