"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "left" | "right";

const DESIGN: string[] = [
  "/images/logo/canva.svg",
  "/images/logo/css.svg",
  "/images/logo/figma.svg",
  "/images/logo/framer.svg",
];

const DEV: string[] = [
  "/images/logo/html5.svg",
  "/images/logo/css.svg",
  "/images/logo/sass.svg",
  "/images/logo/react.svg",
  "/images/logo/typescript.svg",
  "/images/logo/javascript.svg",
  "/images/logo/mongodb.svg",
  "/images/logo/nextdotjs.svg",
  "/images/logo/nestjs.svg",
];

const OTHERS: string[] = [
  "RÉFÉRENCEMENT NATUREL (SEO)",
  "GIT",
  "ACCESSIBILITÉ WEB",
  "MÉTHODOLOGIE AGILE",
  "RESPONSIVE DESIGN",
];

function isIconPath(value: string) {
  return value.endsWith(".svg") || value.startsWith("/images/");
}

function labelFromPath(path: string) {
  const name = path.split("/").pop() || "";
  return name.replace(/\.(svg|png|jpg|jpeg|webp)$/i, "").replace(/-/g, " ");
}

function TickerRow({
  label,
  items,
  direction = "left",
  duration = 18,
}: {
  label: string;
  items: string[];
  direction?: Direction;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLUListElement>(null);

  // Nombre de copies identiques de la liste affichées côte à côte.
  // Recalculé pour que le contenu total fasse au moins 2x la largeur visible,
  // quel que soit le nombre de logos (ex. Design n'en a que 5).
  const [repeat, setRepeat] = useState(2);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;

    const compute = () => {
      const viewportWidth = viewport.clientWidth;
      const groupWidth = group.scrollWidth; // largeur d'une copie de la liste
      if (groupWidth === 0) return;
      // Au moins 2 copies, et assez pour couvrir 2x la largeur du conteneur.
      const needed = Math.max(2, Math.ceil((2 * viewportWidth) / groupWidth));
      setRepeat(needed);
    };

    compute();
    const observer = new ResizeObserver(compute);
    observer.observe(viewport);
    observer.observe(group);
    return () => observer.disconnect();
  }, [items]);

  // Le bouclage se fait sur une largeur de copie = -100/repeat % de la piste.
  const distance = 100 / repeat;
  const xFrames =
    direction === "right" ? [`-${distance}%`, "0%"] : ["0%", `-${distance}%`];

  return (
    <div className="skills__row">
      <span className="skills__label">{label}</span>

      <div className="skills__viewport" ref={viewportRef}>
        <motion.div
          className={`skills__track ${
            direction === "right" ? "is-right" : "is-left"
          }`}
          aria-hidden="true"
          animate={prefersReducedMotion ? {} : { x: xFrames }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {Array.from({ length: repeat }).map((_, copyIndex) => (
            <ul
              className="skills__group"
              key={copyIndex}
              ref={copyIndex === 0 ? groupRef : undefined}
            >
              {items.map((item, i) => {
                const showIcon = isIconPath(item);
                return (
                  <li className="skills__item" key={`${copyIndex}-${i}`}>
                    {showIcon ? (
                      <img
                        className="skills__icon"
                        src={item}
                        alt={labelFromPath(item)}
                        title={labelFromPath(item)}
                      />
                    ) : (
                      <span className="skills__text">{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </motion.div>
      </div>

      <div className="skills__fade" aria-hidden="true" />
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" aria-label="skills sections">
      <TickerRow label="Design" items={DESIGN} direction="left" duration={20} />
      <TickerRow
        label="Développement"
        items={DEV}
        direction="right"
        duration={18}
      />
      <TickerRow label="Autres" items={OTHERS} direction="left" duration={22} />
    </section>
  );
}
