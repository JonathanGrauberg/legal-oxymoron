import { useRef } from "react";
import { stats } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, "[data-reveal]", { y: 18, stagger: 0.08 });

  return (
    <div className="border-y border-line bg-paper">
      <div ref={ref} className="container-px grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 py-12 md:py-14">
        {stats.map((s) => (
          <div key={s.label} data-reveal>
            <div className="font-display text-4xl md:text-5xl font-semibold num-tabular">{s.value}</div>
            <div className="mt-1.5 text-[0.8rem] text-mute leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
