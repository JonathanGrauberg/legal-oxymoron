import { useRef } from "react";
import { team } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, "[data-reveal]", { y: 20, stagger: 0.06 });

  return (
    <section id="equipo" className="py-28 md:py-36">
      <div className="container-px">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="eyebrow mb-5 justify-center flex">Equipo</div>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] leading-[1.1] font-semibold">
            Profesionales con <em className="italic font-normal">visión.</em>
          </h2>
          <p className="mt-5 text-mute leading-relaxed">
            Un equipo multidisciplinario que combina experiencia sólida,
            formación académica de excelencia y un enfoque humano en cada caso.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              data-reveal
              className="group border border-line p-7 rounded-2xl hover:border-ink transition-colors duration-400 bg-paper"
            >
              <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center text-[0.72rem] font-semibold tracking-wide">
                {member.initials}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{member.name}</h3>
              <div className="text-xs text-mute-2 mt-0.5">{member.role}</div>
              {member.description && (
                <p className="mt-4 text-[0.85rem] leading-relaxed text-mute">{member.description}</p>
              )}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {member.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.66rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-paper-2 text-mute"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
