import { Instagram } from "lucide-react";
import { BRAND, instagramUrl } from "@/lib/brand";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-linen">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-linen/60">{BRAND.tagline}.</p>
        </div>

        <nav className="flex flex-col gap-3 text-sm md:items-center">
          <a
            href={BRAND.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-linen/70 transition-colors hover:text-accent"
          >
            Catálogo
          </a>
          <a href="#nosotros" className="text-linen/70 transition-colors hover:text-accent">
            Quiénes somos
          </a>
          <a href="#contacto" className="text-linen/70 transition-colors hover:text-accent">
            Contacto
          </a>
        </nav>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${BRAND.instagram}`}
            className="inline-flex items-center gap-2 text-sm text-linen/70 transition-colors hover:text-accent"
          >
            <Instagram className="h-5 w-5" />
            {BRAND.instagram}
          </a>
          <p className="text-xs text-linen/40">{BRAND.location}</p>
        </div>
      </div>

      <div className="border-t border-linen/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-linen/40 md:flex-row md:px-8">
          <p>
            Hecho con <span className="text-accent">♥</span> en {BRAND.location}
          </p>
          <p>
            © {year} {BRAND.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
