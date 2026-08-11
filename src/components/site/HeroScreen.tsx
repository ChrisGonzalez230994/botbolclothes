import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/botbol-logo.png";
import video1 from "@/assets/hero-a.mp4";
import video2 from "@/assets/hero-b.mp4";

const CATALOG_URL = "https://botbolclothes.empretienda.com.ar/";
const WHATSAPP_URL = "https://wa.me/5492235013883";
const INSTAGRAM_URL = CATALOG_URL;

const NAV: { label: string; href: string }[] = [
  { label: "Contacto", href: WHATSAPP_URL },
];

export function HeroScreen() {
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const next = activeVideo === 1 ? v1.current : v2.current;
    if (next) {
      next.currentTime = 0;
      next.play().catch(() => {});
    }
  }, [activeVideo]);

  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden">
      <video
        ref={v1}
        src={video1}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => setActiveVideo(2)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
          activeVideo === 1 ? "opacity-100" : "opacity-0"
        }`}
      />
      <video
        ref={v2}
        src={video2}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => setActiveVideo(1)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
          activeVideo === 2 ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* Nav */}
      <header className="relative z-20 w-full px-5 py-4 sm:px-6 sm:py-5 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={logoAsset}
              alt="Botbol Clothes"
              className="h-8 w-auto sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass hidden rounded-full px-5 py-2 text-sm font-medium text-white md:inline-block"
          >
            Ver catálogo
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((o) => !o)}
            className="relative h-6 w-6 text-white md:hidden"
          >
            <Menu
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                menuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-400 md:hidden ${
            menuOpen ? "mt-4 max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="liquid-glass rounded-xl px-2 py-3 shadow-xl">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              Ver catálogo
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-start justify-center px-5 pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-3xl text-center">
          <span className="liquid-glass inline-block rounded-full px-4 py-1.5 text-xs text-white/80">
            Nueva colección 2026
          </span>
          <h1 className="mt-6 text-3xl leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Moda que
            <br />
            te define. Diseño real
            <br />
            para vos.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base md:text-lg">
            Prendas pensadas para la mujer real. Diseño argentino, calidad
            atemporal y un estilo que se lleva puesto todos los días.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-white/90 sm:px-6 sm:py-3"
            >
              Ver catálogo
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-10 z-10 flex w-full items-center justify-between px-5 py-4 text-xs text-white/60 sm:bottom-0 sm:px-6 md:px-12 lg:px-16">
        <span>Mar del Plata, Argentina</span>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          @botbolclothes
        </a>
      </footer>
    </section>
  );
}
