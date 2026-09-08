import { useRef } from "react";
import { countries, stats } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, "[data-reveal]", { y: 18, stagger: 0.08 });

  return (
    <div className="bg-ink text-paper">
      <div
        ref={ref}
        className="container-px flex flex-col md:flex-row md:items-center gap-10 md:gap-12 py-16 md:py-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 flex-1">
          {stats.map((s) => (
            <div key={s.label} data-reveal>
              <div className="font-display text-4xl md:text-5xl font-semibold num-tabular text-paper">{s.value}</div>
              <div className="mt-1.5 text-[0.8rem] text-paper/60 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        <div data-reveal className="md:pl-12 md:border-l md:border-paper/15">
          <div className="text-[0.66rem] font-semibold tracking-widest uppercase text-paper/40 mb-2">
            Presencia
          </div>
          <div className="text-sm text-paper/70 leading-relaxed">
            {countries.map((c, i) => (
              <span key={c}>
                {c}
                {i < countries.length - 1 && <span className="text-paper/30 mx-1.5">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}