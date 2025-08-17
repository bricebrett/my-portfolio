"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

type RevealProps = PropsWithChildren<{
  y?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
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

  const inView = useInView(ref, {
    once,
    amount,
    margin: "0px 0px -10% 0px",
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
