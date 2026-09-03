import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between h-[74px]">
        <a href="#top" className="flex items-center">
          <Logo size={17} withTagline={false} />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.83rem] font-semibold tracking-wide text-ink/70 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="hidden md:inline-flex btn-ink !py-2.5 !px-5 !text-[0.8rem]">
          Agendar consulta
        </a>

        <button
          aria-label="Abrir menú"
          className="md:hidden flex flex-col gap-1.5 w-8"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-[1.5px] bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <div className="container-px py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contacto" className="btn-ink justify-center" onClick={() => setOpen(false)}>
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
