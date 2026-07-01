import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Logo } from "./Logo";

const NAV = [
  { label: "Colecciones", href: "#categorias" },
  { label: "Novedades", href: "#destacados" },
  { label: "Quiénes somos", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-accent/30"
          : "bg-ink/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-linen md:px-8">
        <a href="#top" className="text-linen">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs uppercase tracking-[0.18em] text-linen/80 transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={BRAND.catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-accent px-5 py-2 text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-ink md:inline-block"
        >
          Ver catálogo
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="md:hidden text-linen"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink text-linen">
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="text-linen"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-wide"
              >
                {n.label}
              </a>
            ))}
            <a
              href={BRAND.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent"
            >
              Ver catálogo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
