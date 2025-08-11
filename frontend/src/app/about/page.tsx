import Title from "@/components/Title";
import About from "@/components/About";
import Skills from "@/components/Skills";

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
            <h2 className="section-head__title">skills.</h2>
          </header>
          <Skills />
        </section>
      </div>
    </section>
  );
}
