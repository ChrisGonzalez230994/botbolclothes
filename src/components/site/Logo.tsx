import { BRAND } from "@/lib/brand";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* ✦ sparkle mark — replace with client's logo SVG when available */}
      <span className="text-accent text-xl leading-none" aria-hidden="true">✦</span>
      <span className="font-display tracking-[0.2em] text-sm font-light uppercase">
        {BRAND.name}
      </span>
    </div>
  );
}
