import RedirectionButton from "./RedirectionButton";

interface AboutProps {
  showButton?: boolean; // par défaut true
}

export default function About({ showButton = true }: AboutProps) {
  return (
    <section className="about">
      <div className="about__header">
        <h2 className="about__title">about.</h2>
        {showButton && (
          <RedirectionButton href="/about" className="about__button">
            Show More
          </RedirectionButton>
        )}
      </div>

      <h3 className="about__headline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
        magna at justo porta ultrices.
      </h3>

      <div className="about__content">
        <div className="about__image-wrapper">
          <img src="" alt="" />
        </div>

        <p className="about__description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </section>
  );
}
