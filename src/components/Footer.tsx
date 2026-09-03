import Logo from "./Logo";
import { contactInfo, practiceAreas } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper pt-20 pb-8">
      <div className="container-px grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <Logo size={17} color="var(--color-paper)" />
          <p className="mt-5 text-sm text-paper/50 max-w-xs leading-relaxed">
            Estudio jurídico integral. Asesoramiento legal preventivo para
            empresas, trabajadores y familias en Buenos Aires.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-paper/40 mb-4">Servicios</div>
          <ul className="space-y-2.5 text-sm text-paper/70">
            {practiceAreas.slice(0, 4).map((a) => (
              <li key={a.title}>{a.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-paper/40 mb-4">Contacto</div>
          <ul className="space-y-2.5 text-sm text-paper/70">
            <li>{contactInfo.address}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="container-px mt-16 pt-6 border-t border-paper/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-paper/40">
        <span>© {year} Oxymoron. Todos los derechos reservados.</span>
        <div className="flex gap-6">
          <span>Privacidad</span>
          <span>Términos</span>
        </div>
      </div>
    </footer>
  );
}
