"use client";

import ScrollReveal from "./ScrollReveal";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__row hero__row--top">
        <ScrollReveal>
          <h1 className="hero__title">
            <Typewriter
              options={{
                strings: ["BRICE<br>BRETTINGER", "DEVELOPPEUR<br>WEB"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </ScrollReveal>
      </div>

      <div className="hero__row hero__row--bottom">
        <ScrollReveal>
          <p className="hero__phone">06 68 20 95 56</p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="hero__description">
            Hello, étant passionné par le web, je transforme des concepts en
            projets qui prennent vie à l’écran.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
