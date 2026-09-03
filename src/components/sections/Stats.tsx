import { useRef } from "react";
import { stats } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, "[data-reveal]", { y: 18, stagger: 0.08 });

  return (
    <div className="bg-ink text-paper">
      <div ref={ref} className="container-px grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 py-16 md:py-20">
        {stats.map((s) => (
          <div key={s.label} data-reveal>
            <div className="font-display text-4xl md:text-5xl font-semibold num-tabular text-paper">{s.value}</div>
            <div className="mt-1.5 text-[0.8rem] text-paper/60 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}