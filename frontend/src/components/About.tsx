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
        Je conçois des expériences web alliant esthétique et simplicité. Chaque
        projet est une occasion d’explorer, tester et trouver l’équilibre
        parfait entre design et fonctionnalité.
      </h3>

      <div className="about__content">
        {/* <div className="about__image-wrapper">
          <img src="" alt="" />
        </div> */}

        <p className="about__description">
          Curieux et toujours en veille, je m’inspire autant du design
          contemporain que des nouvelles tendances technologiques. Que ce soit à
          travers un code propre ou un visuel soigné, j’accorde de l’importance
          aux détails qui font la différence. Pour moi, un bon projet est celui
          qui parvient à combiner performance, clarté et identité forte.
        </p>
      </div>
    </section>
  );
}
