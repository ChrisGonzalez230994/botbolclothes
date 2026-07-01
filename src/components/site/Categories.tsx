import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  { name: "Remeras & Tops", count: "24 prendas", tone: "from-[#2a2320] to-[#0f0b09]" },
  { name: "Pantalones & Jeans", count: "18 prendas", tone: "from-[#241d18] to-[#0a0705]" },
  { name: "Vestidos & Faldas", count: "16 prendas", tone: "from-[#2f251c] to-[#120c07]" },
];

export function Categories() {
  return (
    <section id="categorias" className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Colecciones</span>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Comprá por categoría
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60">
            Elegí el estilo que va con vos. Cada pieza está seleccionada con atención al detalle.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.08}>
              <a
                href={BRAND.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-lg border border-transparent bg-gradient-to-br ${cat.tone} p-7 text-linen transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-2xl`}
              >
                <span className="text-xs uppercase tracking-[0.25em] text-linen/50">
                  {cat.count}
                </span>
                <div>
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">
                    {cat.name}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                    Explorar
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-4xl text-accent/20 transition-all duration-500 group-hover:text-accent/60"
                >
                  ✦
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
