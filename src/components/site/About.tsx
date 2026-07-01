import { Reveal } from "./Reveal";

const VALUES = ["Calidad", "Estilo", "Cercanía"];

export function About() {
  return (
    <section id="nosotros" className="bg-linen py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8 md:items-center">
        <Reveal>
          {/* REPLACE with brand photo — atelier, founder portrait, or editorial shot */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-[#3a2a1e] via-[#251913] to-[#0f0906]">
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-[10rem] text-accent/20"
            >
              ✦
            </span>
            <div className="absolute bottom-6 left-6 text-linen">
              <p className="font-display text-2xl">Mar del Plata</p>
              <p className="text-xs uppercase tracking-[0.25em] text-linen/60">
                Diseño local
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Quiénes somos</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] md:text-5xl">
            Una marca hecha con intención.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
            Somos una marca de moda femenina de Mar del Plata, Argentina. Creemos
            que vestirse bien es una forma de expresión. Cada prenda que elegimos
            es pensada para la mujer real.
          </p>

          <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            {VALUES.map((v, i) => (
              <li key={v} className="flex items-center gap-4">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-ink">
                  {v}
                </span>
                {i < VALUES.length - 1 && (
                  <span className="text-accent" aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
