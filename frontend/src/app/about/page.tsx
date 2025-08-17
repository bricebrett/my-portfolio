import Title from "@/components/Title";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Formations from "@/components/Formations";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page__container">
        <div className="about-page__hero">
          <Title text="BRICE BRETTINGER" align="center" />
        </div>

        <section className="about-page__block about-page__block--about">
          <About showButton={false} />
        </section>

        <section className="about-page__block about-page__block--skills">
          <header className="section-head">
            <h2 className="section-head__title">compétences.</h2>
          </header>
          <Skills />
        </section>

        <section className="about-page__block about-page__block--formations">
          <header className="section-head">
            <h2 className="section-head__title">formations.</h2>
          </header>
          <Formations />
        </section>
      </div>
    </section>
  );
}
