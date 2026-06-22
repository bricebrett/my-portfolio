"use client";

import { useEffect } from "react";

// Vitesse du snap du footer (ms). Augmente pour un défilement plus lent/doux.
const SNAP_DURATION = 1100;
// Déclenche l'alignement quand le footer occupe déjà > (1 - ce ratio) du bas
// de l'écran. 0.6 => le footer entame son entrée sur ~40% de l'écran.
const TRIGGER_RATIO = 0.6;
// Délai après l'arrêt du scroll avant de décider de snapper (ms).
const SETTLE_DELAY = 150;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function FooterSnap() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const footer = document.querySelector<HTMLElement>(".footer");
    if (!footer) return;

    let lastY = window.scrollY;
    let goingDown = true;
    let animating = false;
    let raf = 0;
    let settleTimer: number | undefined;

    const stopAnimation = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      animating = false;
    };

    const animateTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 2) return;

      const startTime = performance.now();
      animating = true;

      const step = (now: number) => {
        if (!animating) return; // interrompu par l'utilisateur
        const progress = Math.min(1, (now - startTime) / SNAP_DURATION);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          animating = false;
        }
      };

      raf = requestAnimationFrame(step);
    };

    const maybeSnap = () => {
      if (animating || !goingDown) return;
      const rect = footer.getBoundingClientRect();
      const vh = window.innerHeight;
      // Le footer commence à entrer dans l'écran : on l'aligne en douceur.
      if (rect.top > 2 && rect.top < vh * TRIGGER_RATIO) {
        animateTo(window.scrollY + rect.top);
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      goingDown = y > lastY;
      lastY = y;
      if (animating) return; // l'animation pilote le scroll, on n'interfère pas
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(maybeSnap, SETTLE_DELAY);
    };

    // Toute action de scroll manuelle annule l'animation : jamais de combat.
    const onUserInput = () => {
      if (animating) stopAnimation();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onUserInput, { passive: true });
    window.addEventListener("touchstart", onUserInput, { passive: true });
    window.addEventListener("keydown", onUserInput);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onUserInput);
      window.removeEventListener("touchstart", onUserInput);
      window.removeEventListener("keydown", onUserInput);
      window.clearTimeout(settleTimer);
      stopAnimation();
    };
  }, []);

  return null;
}
