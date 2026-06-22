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
          <h2 className="about__title">à propos.</h2>
        </ScrollReveal>
        {showButton && (
          <RedirectionButton href="/about" className="about__button">
            Afficher plus
          </RedirectionButton>
        )}
      </div>
      <ScrollReveal>
        <h3 className="about__headline">
          Actuellement en pré-Master of Science à Epitech Strasbourg, j’intègre
          le Master en septembre 2026 et je recherche une alternance de deux ans
          à partir de cette date, au rythme 4 semaines en entreprise / 2
          semaines en école. Mon parcours mêle développement front-end et
          back-end, avec un vrai intérêt pour la data et l’IA. Je n’aime pas me
          limiter à une seule couche technique : comprendre comment une
          application fonctionne dans son ensemble m’aide à proposer des
          solutions plus pertinentes.
        </h3>
      </ScrollReveal>
      <ScrollReveal>
        <div className="about__content">
          <p className="about__description">
            Je suis curieux et j’apprends vite, ce qui me permet de sortir de ma
            zone de confort technique quand un projet le demande. J’accorde de
            l’importance à la qualité du code et à l’expérience utilisateur,
            sans perdre de vue les contraintes concrètes comme les délais ou la
            maintenabilité. Disponible dès septembre, je reste ouvert à toute
            discussion sur une alternance qui correspondrait à mon profil.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
