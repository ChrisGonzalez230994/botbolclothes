import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BRAND, whatsappUrl } from "@/lib/brand";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-ink text-linen"
    >
      {/*
        Backdrop: elegant CSS gradient placeholder.
        REPLACE with client's editorial photo (e.g. <img> or bg-image on this div).
      */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 20%, #3a2a1e 0%, #1f1610 40%, #0d0906 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      {/* Decorative sparkle */}
      <div
        aria-hidden="true"
        className="absolute right-8 top-32 hidden text-[14rem] leading-none text-accent/10 md:block"
      >
        ✦
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-28">
        <Reveal>
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.35em] text-accent">
            Nueva colección 2026
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Moda que <em className="not-italic text-accent">te define</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-linen/75 md:text-lg">
            Prendas pensadas para la mujer real. Diseño argentino, calidad
            atemporal y un estilo que se lleva puesto todos los días.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={BRAND.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:-translate-y-0.5"
            >
              Ver catálogo completo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-linen/40 px-7 py-4 text-xs uppercase tracking-[0.2em] text-linen transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              Escribinos por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
