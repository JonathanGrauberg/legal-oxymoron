import { useRef } from "react";
import { useParallax } from "../../hooks/useParallax";
import { useReveal } from "../../hooks/useReveal";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useReveal(sectionRef, "[data-reveal]", { y: 24, stagger: 0.08 });
  useParallax(bgRef, { distance: 30 });

  return (
    <section id="filosofia" className="relative bg-ink text-paper py-28 md:py-36">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgRef}
          src="/fondo-parallax-filosofia.jpeg"
          alt=""
          className="pointer-events-none absolute inset-x-0 -top-[25%] h-[150%] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/75" />
      </div>

      <div ref={sectionRef} className="container-px relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <div data-reveal className="eyebrow mb-5 text-paper/50">Nuestra filosofía</div>
          <h2 data-reveal className="text-3xl sm:text-4xl md:text-[3rem] leading-[1.12] font-semibold max-w-xl">
            Pensamos antes de que el <em className="italic font-normal">problema</em> empiece.
          </h2>

          <div data-reveal className="mt-9 space-y-5 max-w-lg text-paper/65 leading-relaxed text-[0.97rem]">
            <p>
              En la mayoría de las empresas, el derecho aparece tarde: cuando
              el problema ya explotó, cuando el contrato ya fue firmado, cuando
              el empleado ya reclamó, cuando el error ya fue.
            </p>
            <p>
              En Oxymoron pensamos distinto. Diseñamos asesoramiento legal
              preventivo desde donde identificar riesgos tempranamente,
              ordenar procesos y ofrecer soluciones antes de que los
              conflictos se conviertan en costos, juicios o crisis de
              gestión.
            </p>
            <p>
              No se trata solamente de tener un abogado disponible. Se trata
              de contar con una mirada estratégica, cercana y permanente,
              integrada a la toma de decisiones del negocio.
            </p>
          </div>

          <div data-reveal className="mt-10 flex gap-10">
            <div>
              <div className="font-display text-3xl font-semibold">98%</div>
              <div className="text-xs text-paper/50 mt-1">Casos resueltos<br />extrajudicialmente</div>
            </div>
            <div className="w-px bg-paper/15" />
            <div>
              <div className="font-display text-3xl font-semibold">48hs</div>
              <div className="text-xs text-paper/50 mt-1">Respuesta inicial<br />garantizada</div>
            </div>
          </div>
        </div>

        <div data-reveal className="lg:pt-16">
          <div className="border border-paper/15 bg-paper/[0.04] backdrop-blur-sm p-8 md:p-10 rounded-2xl">
            <span className="font-display text-5xl leading-none text-paper/25">&ldquo;</span>
            <p className="mt-3 text-xl md:text-2xl leading-snug font-medium">
              El mejor conflicto legal es el que nunca llega a existir.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-paper/10 flex items-center justify-center text-[0.65rem] font-semibold">
                SV
              </div>
              <div className="text-sm">
                <div className="font-semibold">Santiago Miguel Villa</div>
                <div className="text-paper/50 text-xs">Socio Fundador</div>
              </div>
            </div>
            <div className="mt-7 pt-6 border-t border-paper/10 flex items-center gap-2 text-xs text-paper/60">
              <span className="w-1.5 h-1.5 rounded-full bg-paper/60" />
              Consulta inicial gratuita
            </div>
          </div>
        </div>
      </div>

      <img
        src="/contorno-humano.png"
        alt=""
        className="pointer-events-none select-none absolute right-8 sm:right-16 md:right-24 top-full -translate-y-[79.9%] w-40 sm:w-52 md:w-64 z-10"
      />
    </section>
  );
}
