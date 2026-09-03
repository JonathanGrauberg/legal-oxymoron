import { useRef, useState, type FormEvent } from "react";
import { contactInfo, interestAreas } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  useReveal(ref, "[data-reveal]", { y: 20, stagger: 0.08 });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar a un endpoint real (Formspree / API propia).
    // Por ahora solo confirmamos en la UI.
    setSent(true);
  }

  return (
    <section id="contacto" className="py-28 md:py-36">
      <div ref={ref} className="container-px grid lg:grid-cols-[0.85fr_1.15fr] gap-16">
        <div>
          <div data-reveal className="eyebrow mb-5">Contacto</div>
          <h2 data-reveal className="text-3xl sm:text-4xl md:text-[3.2rem] leading-[1.1] font-semibold">
            Empecemos a <em className="italic font-normal">prevenir.</em>
          </h2>
          <p data-reveal className="mt-6 text-mute leading-relaxed max-w-md">
            Ya sea que necesites resolver un conflicto puntual o mejorar tu
            estrategia legal preventiva, empresas y trabajadores por igual
            encuentran en Oxymoron la experiencia para acompañarlos.
          </p>

          <div data-reveal className="mt-10 space-y-6">
            <InfoRow label="Dirección" value={contactInfo.address} />
            <InfoRow label="Teléfono" value={contactInfo.phone} />
            <InfoRow label="Email" value={contactInfo.email} />
            <InfoRow label="Horarios" value={contactInfo.hours} />
          </div>
        </div>

        <div data-reveal>
          {sent ? (
            <div className="border border-line rounded-2xl p-10 md:p-14 text-center h-full flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center text-xl mb-5">✓</div>
              <h3 className="font-display text-2xl font-semibold">Consulta enviada</h3>
              <p className="mt-3 text-mute max-w-xs">
                Gracias por escribirnos. Te vamos a responder dentro de las próximas 48hs hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-line rounded-2xl p-7 md:p-10 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" name="firstName" required placeholder="Tu nombre" />
                <Field label="Apellido" name="lastName" required placeholder="Tu apellido" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" required placeholder="tu@email.com" />
                <Field label="Teléfono" name="phone" type="tel" placeholder="+54 9 11 0000 0000" />
              </div>

              <label className="block">
                <span className="text-xs font-semibold tracking-wide uppercase text-mute-2">Área de interés</span>
                <select
                  name="area"
                  className="mt-2 w-full border border-line rounded-lg bg-paper px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccioná un área
                  </option>
                  {interestAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold tracking-wide uppercase text-mute-2">Mensaje</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Contanos brevemente tu situación..."
                  className="mt-2 w-full border border-line rounded-lg bg-paper px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none"
                />
              </label>

              <label className="flex items-center gap-2.5 text-sm text-mute">
                <input type="checkbox" name="virtual" className="w-4 h-4 accent-black" />
                Prefiero entrevista virtual
              </label>

              <button type="submit" className="btn-ink justify-center mt-1">
                Enviar consulta
                <span aria-hidden>→</span>
              </button>
              <p className="text-[0.72rem] text-mute-2 text-center -mt-1">
                Respuesta garantizada dentro de las 48hs hábiles.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-5 pb-5 border-b border-line">
      <span className="w-24 shrink-0 text-xs font-semibold tracking-wide uppercase text-mute-2 pt-0.5">
        {label}
      </span>
      <span className="text-sm leading-relaxed">{value}</span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide uppercase text-mute-2">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-line rounded-lg bg-paper px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
      />
    </label>
  );
}
