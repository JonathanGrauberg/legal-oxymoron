import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { contactInfo } from "../data/content";

const SITE_URL = `https://${contactInfo.site}`;

const VARIANTS = {
  negro: { label: "Negro", bg: "#f6f5f1", fg: "#0a0a0a", logo: "/isotipo-negro.png" },
  blanco: { label: "Blanco", bg: "#0a0a0a", fg: "#f6f5f1", logo: "/isotipo-blanco.png" },
} as const;

type VariantKey = keyof typeof VARIANTS;

export default function ShareQR() {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<VariantKey>("negro");
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function handleDownload() {
    const canvas = canvasWrapRef.current?.querySelector("canvas");
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `oxymoron-qr-${variant}.png`;
    a.click();
  }

  const v = VARIANTS[variant];

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-wide text-ink/40 hover:text-ink/70 transition-colors"
      >
        <QrIcon className="w-3.5 h-3.5" />
        Compartir con QR
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-line bg-paper shadow-xl p-5 z-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[0.66rem] font-semibold tracking-widest uppercase text-mute-2">
              Compartir con QR
            </span>
            <div className="flex gap-1 rounded-full bg-paper-2 p-0.5">
              {(Object.keys(VARIANTS) as VariantKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setVariant(key)}
                  className={`text-[0.65rem] font-semibold px-2.5 py-1 rounded-full transition-colors ${
                    variant === key ? "bg-ink text-paper" : "text-mute hover:text-ink"
                  }`}
                >
                  {VARIANTS[key].label}
                </button>
              ))}
            </div>
          </div>

          <div
            ref={canvasWrapRef}
            className="flex items-center justify-center rounded-xl p-4"
            style={{ background: v.bg }}
          >
            <QRCodeCanvas
              value={SITE_URL}
              size={176}
              bgColor={v.bg}
              fgColor={v.fg}
              level="H"
              imageSettings={{
                src: v.logo,
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="mt-4 w-full btn-ink justify-center !py-2.5 !text-[0.8rem]"
          >
            Descargar PNG
          </button>
        </div>
      )}
    </div>
  );
}

function QrIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="14" width="3" height="3" fill="currentColor" />
      <rect x="18" y="18" width="3" height="3" fill="currentColor" />
      <rect x="14" y="18" width="3" height="3" fill="currentColor" />
      <rect x="18" y="14" width="3" height="3" fill="currentColor" />
    </svg>
  );
}
