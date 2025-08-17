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
          Passionné par le développement front-end, j’aime donner vie aux
          interfaces et transformer des maquettes en expériences fluides,
          interactives et accessibles. Le code côté client me permet d’exprimer
          ma créativité en travaillant directement sur ce que l’utilisateur
          perçoit et ressent. Cela dit, je reste curieux et ouvert à
          l’apprentissage du back-end, car comprendre l’ensemble d’une
          application permet d’imaginer des solutions plus cohérentes et
          performantes.
        </h3>
      </ScrollReveal>
      <ScrollReveal>
        <div className="about__content">
          <p className="about__description">
            Mon parcours dans le design m’a appris à porter une attention
            particulière à l’esthétique et à l’ergonomie. J’aime créer des
            visuels clairs, élégants et efficaces, mais aussi réfléchir à la
            manière dont ils s’intègrent dans une expérience plus large. Pour
            moi, le développement n’est pas qu’une affaire de code : c’est une
            façon de raconter une histoire à travers une interface, en trouvant
            l’équilibre entre créativité, technique et simplicité.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
