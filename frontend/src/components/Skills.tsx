import React from "react";

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

function MarqueeRow({
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

  // ✅ typage propre pour la variable CSS
  type CSSVarStyle = React.CSSProperties & { ["--duration"]?: string };
  const style: CSSVarStyle = { ["--duration"]: `${duration}s` };

  return (
    <div className="skills__row" style={style}>
      <span className="skills__label">{label}</span>

      <div className="skills__viewport">
        <ul
          className={`skills__track ${
            direction === "right" ? "is-right" : "is-left"
          }`}
          aria-hidden="true"
        >
          {dup.map((item, i) => {
            const showIcon = isIconPath(item);
            return (
              <li className="skills__item" key={`${label}-${i}`}>
                {showIcon ? (
                  // ok pour <img>, l’avertissement eslint est juste un warning
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
      </div>

      <div className="skills__fade" aria-hidden="true" />
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" aria-label="skills sections">
      <MarqueeRow
        label="Design"
        items={DESIGN}
        direction="left"
        duration={20}
      />
      <MarqueeRow
        label="Développement"
        items={DEV}
        direction="right"
        duration={18}
      />
      <MarqueeRow
        label="Autres"
        items={OTHERS}
        direction="left"
        duration={22}
      />
    </section>
  );
}
