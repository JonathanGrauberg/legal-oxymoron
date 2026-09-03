import { useRef } from "react";
import { methodology } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";
import Gear from "../Gear";
import { useGearScroll } from "../../hooks/useGearScroll";

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const gearRef = useRef<SVGSVGElement>(null);
  useReveal(ref, "[data-reveal]", { y: 20, stagger: 0.07 });
  useGearScroll(gearRef, { degreesPerPage: 200 });

  return (
    <section className="relative py-28 md:py-36 bg-paper-2/60 overflow-hidden">
      <div className="pointer-events-none absolute -right-10 -top-10 w-[220px] h-[220px] opacity-[0.06]">
        <Gear ref={gearRef} color="var(--color-ink)" className="w-full h-full" />
      </div>

      <div className="container-px">
        <div className="max-w-xl mb-16">
          <div className="eyebrow mb-5">Metodología</div>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] leading-[1.1] font-semibold">
            Cómo <em className="italic font-normal">trabajamos.</em>
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((step) => (
            <div key={step.number} data-reveal className="relative pt-7 border-t-2 border-ink">
              <span className="font-display text-sm text-mute-2 num-tabular">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-[0.87rem] leading-relaxed text-mute">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
