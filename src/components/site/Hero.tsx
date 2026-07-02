import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BRAND, whatsappUrl } from "@/lib/brand";
import { Reveal } from "./Reveal";
import heroVideo1 from "@/assets/hero-1.mp4.asset.json";
import heroVideo2 from "@/assets/hero-2.mp4.asset.json";

const HERO_VIDEOS = [heroVideo1.url, heroVideo2.url];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = HERO_VIDEOS[index];
    v.load();
    v.play().catch(() => {});
  }, [index]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-ink text-linen"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setIndex((i) => (i + 1) % HERO_VIDEOS.length)}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.8) 100%)",
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
