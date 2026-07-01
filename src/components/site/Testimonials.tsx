import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

// REPLACE with real customer testimonials.
const TESTIMONIALS = [
  {
    initials: "MF",
    name: "María Fernanda",
    quote:
      "Las prendas son hermosas y de excelente calidad. Se nota la atención al detalle en cada costura.",
  },
  {
    initials: "LR",
    name: "Lucía R.",
    quote:
      "Compré tres veces y siempre recibo todo impecable. La atención por WhatsApp es súper cercana.",
  },
  {
    initials: "AB",
    name: "Ana B.",
    quote:
      "Los talles son reales y las telas son de primera. Ya es mi marca favorita para renovar el armario.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Testimonios</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Lo que dicen nuestras clientas
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-lg border border-ink/10 bg-white p-8">
                <div>
                  <div className="mb-4 flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed text-ink/80">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-xs font-medium tracking-wider text-accent">
                    {t.initials}
                  </span>
                  <span className="text-sm font-medium text-ink">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
