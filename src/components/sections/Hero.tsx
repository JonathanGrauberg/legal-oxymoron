import { useRef } from "react";
import Gear from "../Gear";
import MazePattern from "../MazePattern";
import { mazeSquare } from "../../assets/mazePaths";
import { useGearScroll } from "../../hooks/useGearScroll";
import { useMazeReveal } from "../../hooks/useMazeReveal";
import { useReveal } from "../../hooks/useReveal";

export default function Hero() {
  const gearRef = useRef<SVGSVGElement>(null);
  const gearSmallRef = useRef<SVGSVGElement>(null);
  const mazePathRef = useRef<SVGPathElement>(null);
  const mazeWrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGearScroll(gearRef, { degreesPerPage: 220, direction: 1 });
  useGearScroll(gearSmallRef, { degreesPerPage: 220, direction: -1 });
  useMazeReveal(mazePathRef, mazeWrapRef, { start: "top 100%", end: "top 20%" });
  useReveal(sectionRef, "[data-reveal]", { y: 24, stagger: 0.1, start: "top 95%" });

  return (
    <section ref={sectionRef} id="top" className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      {/* Corner labyrinth, echoes the brand manual's diagonal maze motif */}
      <div
        ref={mazeWrapRef}
        className="pointer-events-none absolute -top-6 -right-16 w-[280px] h-[280px] md:w-[440px] md:h-[440px] opacity-[0.9]"
      >
        <MazePattern ref={mazePathRef} data={mazeSquare} color="var(--color-ink)" strokeWidth={11} className="w-full h-full" />
      </div>

      <div className="container-px relative">
        <div data-reveal className="eyebrow mb-7 flex items-center gap-3">
          <span className="w-8 h-px bg-ink/40" />
          Estudio Jurídico Integral · Buenos Aires
        </div>

        <h1
          data-reveal
          className="max-w-4xl text-[2.6rem] leading-[1.06] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.2rem] font-semibold tracking-tight"
        >
          El derecho, pensado
          <br />
          como un <em className="italic font-normal">mecanismo</em>
          <br />
          de precisión.
        </h1>

        <p data-reveal className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-mute">
          Más de 25 años anticipándonos a los conflictos. Asesoramiento legal
          preventivo para empresas, trabajadores y familias que prefieren
          pensar antes de que todo se complique.
        </p>

        <div data-reveal className="mt-11 flex flex-wrap items-center gap-4">
          <a href="#contacto" className="btn-ink">
            Agendar consulta
            <span aria-hidden>→</span>
          </a>
          <a href="#servicios" className="btn-ghost">
            Ver servicios
          </a>
        </div>
      </div>

      {/* Large idle+scroll driven gear, the mechanical heart of the hero */}
      <div className="pointer-events-none absolute right-[-50px] bottom-[-70px] sm:right-[-10px] sm:bottom-[-50px] md:right-6 md:bottom-[-90px] w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] opacity-[0.94]">
        <Gear ref={gearRef} color="var(--color-ink)" className="w-full h-full" />
      </div>
      <div className="pointer-events-none absolute right-[160px] bottom-[60px] hidden lg:block w-[130px] h-[130px] opacity-[0.5]">
        <Gear ref={gearSmallRef} color="var(--color-ink)" className="w-full h-full" />
      </div>
    </section>
  );
}
