import { useRef } from "react";
import heroMaze from "../../assets/hero-maze.png";
import { useReveal } from "../../hooks/useReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef, "[data-reveal]", { y: 24, stagger: 0.1, start: "top 95%" });

  return (
    <section ref={sectionRef} id="top" className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      {/* Laberinto de fondo, imagen provista por el diseñador */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[60%] sm:w-[52%] md:w-[46%] lg:w-[42%]">
        <img
          src={heroMaze}
          alt=""
          className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain opacity-90"
        />
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
    </section>
  );
}