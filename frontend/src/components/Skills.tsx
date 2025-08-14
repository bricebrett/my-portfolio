"use client";
import React from "react";
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
  const dup = [...items, ...items];
  const prefersReducedMotion = useReducedMotion();

  type CSSVarStyle = React.CSSProperties & { ["--duration"]?: string };
  const style: CSSVarStyle = { ["--duration"]: `${duration}s` };

  const xFrames = direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"];

  return (
    <div className="skills__row" style={style}>
      <span className="skills__label">{label}</span>

      <div className="skills__viewport">
        <motion.ul
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
          {dup.map((item, i) => {
            const showIcon = isIconPath(item);
            return (
              <li className="skills__item" key={`${label}-${i}`}>
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
        </motion.ul>
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
