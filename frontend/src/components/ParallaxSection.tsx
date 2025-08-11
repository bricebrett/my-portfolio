"use client";

import { Parallax, Background } from "react-parallax";
import React from "react";

type Props = {
  /** image de fond (ou undefined si uni) */
  bgImage?: string;
  /** force du décalage vertical (+ fort = + parallax) */
  strength?: number; // ex : 200…600
  /** hauteur de la bande */
  height?: number; // en px
  /** voile sombre pour lisibilité (0‑1) */
  dark?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function ParallaxSection({
  bgImage,
  strength = 300,
  height = 600,
  dark = 0,
  className = "",
  children,
}: Props) {
  return (
    <Parallax strength={strength} className={className}>
      {bgImage && (
        <Background className="parallax__bg">
          {/* Next/Image n’est pas nécessaire ici */}
          <img src={bgImage} alt="" style={{ width: "100%" }} />
          {dark > 0 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `rgba(0,0,0,${dark})`,
              }}
            />
          )}
        </Background>
      )}

      <div
        style={{
          minHeight: height,
          display: "grid",
          placeItems: "center",
          padding: "80px 24px",
        }}
        className="parallax__content"
      >
        {children}
      </div>
    </Parallax>
  );
}
