import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Header() {
  return (
    <header className="main-header">
      <ScrollReveal>
        <div className="main-header__container">
          <Link href="/" className="main-header__logo">
            BRICE
          </Link>
          <nav className="main-header__nav">
            <Link href="/works" className="main-header__link">
              Works
            </Link>
            <Link href="/about" className="main-header__link">
              About
            </Link>
            <Link href="/contact" className="main-header__link">
              Contact
            </Link>
          </nav>
        </div>
      </ScrollReveal>
    </header>
  );
}
