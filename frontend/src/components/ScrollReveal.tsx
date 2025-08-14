"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

type RevealProps = PropsWithChildren<{
  y?: number; // distance verticale
  duration?: number; // en secondes
  delay?: number; // en secondes
  once?: boolean; // true = rejoue pas
  amount?: number; // fraction visible pour déclencher (0..1)
}>;

const variants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

export default function Reveal({
  children,
  y = 24,
  duration = 0.6,
  delay = 0,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  // useInView est évalué après hydratation → pas de flash d'opacité 0 bloquée
  const inView = useInView(ref, {
    once,
    amount, // ~20% de l’élément doit être visible
    margin: "0px 0px -10% 0px", // petit “boost” pour déclencher un poil plus tôt
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants(y)}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
