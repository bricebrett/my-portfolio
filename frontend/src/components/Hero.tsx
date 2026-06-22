"use client";

import ScrollReveal from "./ScrollReveal";
import Typewriter from "typewriter-effect";
import { PHONE_DISPLAY } from "@/constants/contact";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__row hero__row--top">
        <ScrollReveal>
          <h1 className="hero__title">
            <Typewriter
              options={{
                strings: ["BRICE<br>BRETTINGER", "DEVELOPPEUR<br>FULLSTACK"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </ScrollReveal>
      </div>

      <div className="hero__row hero__row--bottom">
        <ScrollReveal>
          <p className="hero__phone">{PHONE_DISPLAY}</p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="hero__description">
            Hello, je recherche une alternance de deux ans à partir de septembre
            2026 en fullstack, data ou IA. Si mon profil vous intéresse,
            n’hésitez pas à me contacter.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
