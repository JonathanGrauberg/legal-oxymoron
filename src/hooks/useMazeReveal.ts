import { useEffect, type RefObject } from "react";
import { setupGsap } from "../lib/gsapSetup";

/**
 * Makes a labyrinth SVG path draw itself in as its container scrolls
 * through the viewport, using the classic stroke-dasharray reveal trick
 * driven by ScrollTrigger's scrub.
 */
export function useMazeReveal(
  pathRef: RefObject<SVGPathElement | null>,
  containerRef: RefObject<HTMLElement | null>,
  opts: { start?: string; end?: string; reverse?: boolean } = {}
) {
  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const { gsap } = setupGsap();
    const length = path.getTotalLength();
    const from = opts.reverse ? 0 : length;
    const to = opts.reverse ? length : 0;

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: from });

    const tween = gsap.to(path, {
      strokeDashoffset: to,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: opts.start ?? "top 85%",
        end: opts.end ?? "bottom 40%",
        scrub: 0.6,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pathRef, containerRef, opts.start, opts.end, opts.reverse]);
}
