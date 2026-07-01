import { Search, Ruler, Package } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Search,
    title: "Explorá el catálogo",
    text: "Visitá nuestra tienda online y elegí lo que más te guste.",
  },
  {
    icon: Ruler,
    title: "Elegí tu talle y color",
    text: "Cada prenda tiene guía de talles detallada para acertar.",
  },
  {
    icon: Package,
    title: "Pagá seguro y recibí",
    text: "Pagos con tarjeta o transferencia. Envíos a todo el país.",
  },
];

export function HowToBuy() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Cómo comprar</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Tres pasos y listo
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative flex flex-col items-start gap-5 border-t border-ink/10 pt-8 md:pr-6">
                <span className="absolute -top-3 left-0 bg-white pr-4 font-display text-xs uppercase tracking-[0.3em] text-accent">
                  0{i + 1}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 text-accent">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
