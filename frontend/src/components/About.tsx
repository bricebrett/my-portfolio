import RedirectionButton from "./RedirectionButton";
import ScrollReveal from "./ScrollReveal";

interface AboutProps {
  showButton?: boolean;
}

export default function About({ showButton = true }: AboutProps) {
  return (
    <section className="about">
      <div className="about__header">
        <ScrollReveal>
          <h2 className="about__title">about.</h2>
        </ScrollReveal>
        {showButton && (
          <RedirectionButton href="/about" className="about__button">
            Show More
          </RedirectionButton>
        )}
      </div>
      <ScrollReveal>
        <h3 className="about__headline">
          Je conçois des expériences web alliant esthétique et simplicité.
          Chaque projet est une occasion d’explorer, tester et trouver
          l’équilibre parfait entre design et fonctionnalité.
        </h3>
      </ScrollReveal>
      <ScrollReveal>
        <div className="about__content">
          <p className="about__description">
            Curieux et toujours en veille, je m’inspire autant du design
            contemporain que des nouvelles tendances technologiques. Que ce soit
            à travers un code propre ou un visuel soigné, j’accorde de
            l’importance aux détails qui font la différence. Pour moi, un bon
            projet est celui qui parvient à combiner performance, clarté et
            identité forte.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
