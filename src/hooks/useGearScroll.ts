import { useEffect, type RefObject } from "react";
import { setupGsap } from "../lib/gsapSetup";

interface Options {
  /** total degrees to rotate across the full page scroll */
  degreesPerPage?: number;
  /** direction multiplier, -1 spins counter-clockwise */
  direction?: 1 | -1;
  /** slow idle spin (deg/sec) added on top of the scroll-driven rotation */
  idleSpeed?: number;
}

/**
 * Rotates an SVG gear in direct proportion to how far the page has been
 * scrolled, plus a subtle constant idle spin so the mechanism never looks
 * fully static. This is what makes "el engranaje se mueva con el scroll".
 */
export function useGearScroll(ref: RefObject<SVGSVGElement | null>, options: Options = {}) {
  const { degreesPerPage = 360, direction = 1, idleSpeed = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = setupGsap();

    const state = { scrollRot: 0, idleRot: 0 };
    const apply = () => {
      gsap.set(el, { rotate: state.scrollRot + state.idleRot });
    };

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      scrub: 0.4,
      onUpdate: (self) => {
        state.scrollRot = self.progress * degreesPerPage * direction;
        apply();
      },
    });

    let idleTween: gsap.core.Tween | null = null;
    if (idleSpeed !== 0) {
      idleTween = gsap.to(state, {
        idleRot: `+=${idleSpeed * 3600}`,
        duration: 3600,
        ease: "none",
        repeat: -1,
        onUpdate: apply,
      });
    }

    return () => {
      st.kill();
      idleTween?.kill();
    };
  }, [ref, degreesPerPage, direction, idleSpeed]);
}
