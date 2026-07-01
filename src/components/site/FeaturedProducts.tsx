import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Reveal } from "./Reveal";

// REPLACE with actual product images and prices from Tienda Nube.
const PRODUCTS = [
  { name: "Blusa Lino Oversize", price: "$XX.XXX", size: "S – XL", tone: "from-[#e8ded0] to-[#c9b89a]" },
  { name: "Jean Wide Leg Tiro Alto", price: "$XX.XXX", size: "36 – 44", tone: "from-[#d4c5b0] to-[#a89477]" },
  { name: "Vestido Midi Satén", price: "$XX.XXX", size: "S – L", tone: "from-[#efe4d2] to-[#c4a888]" },
  { name: "Sweater Trenza Wool", price: "$XX.XXX", size: "Único", tone: "from-[#dcd0bb] to-[#b09876]" },
];

export function FeaturedProducts() {
  return (
    <section id="destacados" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Destacados</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Novedades de la temporada
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <a
                href={BRAND.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-br ${p.tone} shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl`}
                >
                  {/* Placeholder — replace with <img src="..." alt={p.name} /> */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center text-6xl text-ink/10"
                  >
                    ✦
                  </span>
                  <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                    {p.size}
                  </span>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium text-ink">{p.name}</h3>
                  <p className="text-sm text-ink/60">{p.price}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a
            href={BRAND.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ink px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-linen"
          >
            Ver todos los productos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
