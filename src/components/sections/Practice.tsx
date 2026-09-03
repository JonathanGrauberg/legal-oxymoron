import { useRef } from "react";
import { practiceAreas } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";
import Gear from "../Gear";

export default function Practice() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, "[data-reveal]", { y: 22, stagger: 0.05 });

  return (
    <section id="servicios" className="py-28 md:py-36 relative">
      <div className="container-px">
        <div ref={ref}>
          <div data-reveal className="eyebrow mb-5">Áreas de práctica</div>
          <h2 data-reveal className="max-w-2xl text-3xl sm:text-4xl md:text-[3.2rem] leading-[1.1] font-semibold">
            Soluciones legales para cada etapa de tu <em className="italic font-normal">vida y negocio.</em>
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {practiceAreas.map((area, i) => (
              <article
                key={area.title}
                data-reveal
                className="group bg-paper p-8 md:p-9 flex flex-col gap-5 hover:bg-ink transition-colors duration-500"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-mute-2 num-tabular group-hover:text-paper/50 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Gear
                    size={26}
                    color="currentColor"
                    className="text-ink/25 group-hover:text-paper/40 transition-all duration-500 group-hover:rotate-45"
                  />
                </div>
                <h3 className="text-lg font-semibold leading-snug group-hover:text-paper transition-colors duration-500">
                  {area.title}
                </h3>
                <p className="text-[0.87rem] leading-relaxed text-mute group-hover:text-paper/70 transition-colors duration-500">
                  {area.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {area.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.68rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border border-ink/15 text-mute group-hover:border-paper/25 group-hover:text-paper/70 transition-colors duration-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <div
              data-reveal
              className="sm:col-span-2 lg:col-span-2 bg-ink text-paper p-8 md:p-9 flex flex-col justify-center gap-4"
            >
              <Gear size={30} color="var(--color-paper)" className="opacity-70" />
              <h3 className="text-lg font-semibold leading-snug">
                ¿Tu situación no entra en una sola categoría?
              </h3>
              <p className="text-[0.87rem] leading-relaxed text-paper/65">
                La mayoría de los casos reales combinan más de un área. Contanos
                qué te pasa y armamos el equipo adecuado.
              </p>
              <a
                href="#contacto"
                className="btn-ghost !border-paper/35 !text-paper hover:!bg-paper hover:!text-ink w-fit mt-1"
              >
                Contactar
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
