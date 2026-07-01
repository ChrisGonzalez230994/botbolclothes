import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BRAND, whatsappUrl } from "@/lib/brand";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-28 text-linen md:py-36">
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[26rem] leading-none text-accent/[0.06]"
      >
        ✦
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Empezá hoy</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-6xl">
            ¿Lista para renovar tu armario?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={BRAND.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-transform hover:-translate-y-0.5"
            >
              Ver catálogo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-linen/50 px-8 py-4 text-xs uppercase tracking-[0.22em] text-linen transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
