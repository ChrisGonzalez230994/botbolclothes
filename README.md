# Botbol Clothes

Create a modern, elegant React + TypeScript + Tailwind CSS landing page for a 
women's fashion clothing brand based in Argentina. The brand name and logo are 
not yet defined — use a placeholder name "TU MARCA" and a sparkle ✦ as the 
logo icon, structured so both can be replaced in a single config object without 
touching layout code.

=== BRAND CONFIG (centralized, easy to swap) ===
const BRAND = {
  name: "TU MARCA",
  tagline: "Moda femenina con estilo",
  primaryColor: "#1A1A1A",       // dark/elegant — swap to client's brand color
  accentColor: "#C9A86C",        // warm gold — elegant for fashion
  lightBg: "#FAF8F5",            // off-white warm
  catalogUrl: "https://LINK-TIENDANUBE-AQUI.mitiendanube.com",
  whatsappNumber: "549XXXXXXXXXX",
  instagram: "@TU_MARCA",
  location: "Mar del Plata, Argentina"
}

=== ARCHITECTURE (build in this exact order) ===
1. Header (sticky, minimal)
2. Hero (full-screen, fashion-forward)
3. Categories section (shop by category)
4. Featured products teaser (3-4 cards, link to Tienda Nube catalog)
5. Brand story / about section ("Quiénes somos")
6. How to buy (3-step process)
7. Testimonials (placeholder, swappable)
8. Final CTA (link to catalog + WhatsApp)
9. Footer

=== HEADER ===
- Sticky, minimal, elegant. Black background (#1A1A1A) with gold accent on scroll.
- Left: brand logo mark (✦ sparkle icon + brand name in thin-weight elegant font).
- Center: nav links — Colecciones, Novedades, Quiénes somos, Contacto.
- Right: "Ver catálogo" button (outlined, gold border) that opens catalogUrl in new tab.
- Mobile: hamburger menu, full-screen dark overlay.

=== HERO ===
- Full-screen (100vh) with a fashion editorial feel.
- Background: dark overlay gradient over a placeholder image (use an elegant 
  CSS gradient: deep charcoal to warm dark brown, no external images needed 
  for the template — add a note in code comments saying "replace with client's 
  editorial photo").
- Content bottom-left positioned:
  - Small label: "Nueva colección 2026"
  - Headline: "Moda que te define" (large, elegant serif — use Playfair Display 
    or similar Google Font)
  - Subheadline: one short line about the brand's style/vibe
  - Two CTAs: primary "Ver catálogo completo" (opens catalogUrl), secondary 
    "Escribinos por WhatsApp" (opens WhatsApp link)

=== CATEGORIES SECTION ===
3 cards in a responsive grid representing clothing categories (e.g. Remeras & 
Tops / Pantalones & Jeans / Vestidos & Faldas). Each card: dark background, 
category name in large text, "Explorar" link pointing to catalogUrl. 
Hover effect: subtle scale + gold border reveal.

=== FEATURED PRODUCTS TEASER ===
4 product placeholder cards (image placeholder, product name, price placeholder 
like "$XX.XXX", size badge) with a clear note in code comments: "Replace with 
actual product images and prices from Tienda Nube". Below the grid: a large 
"Ver todos los productos →" button linking to catalogUrl. 
Cards with clean white background, minimal shadows, hover lift effect.

=== ABOUT / BRAND STORY ===
Two-column layout (image left, text right on desktop / stacked on mobile):
- Image: elegant placeholder with a note to replace with brand photo
- Text: short paragraph about the brand (placeholder: "Somos una marca de moda 
  femenina de Mar del Plata, Argentina. Creemos que vestirse bien es una forma 
  de expresión. Cada prenda que elegimos es pensada para la mujer real.")
- A small list of brand values: Calidad · Estilo · Cercanía

=== HOW TO BUY (3 steps) ===
Simple horizontal process (vertical on mobile) with icons and minimal text:
1. "Explorá el catálogo" — visitá nuestra tienda online y elegí lo que más te guste
2. "Elegí tu talle y color" — cada prenda tiene guía de talles detallada
3. "Pagá seguro y recibí" — pagos con tarjeta o transferencia, envíos a todo el país

=== TESTIMONIALS ===
3 placeholder testimonial cards (avatar initials, name, star rating, short quote 
about quality/service). Note in comments: "Replace with real customer testimonials".

=== FINAL CTA ===
Full-width dark section (#1A1A1A background):
- Headline: "¿Lista para renovar tu armario?"
- Two buttons side by side: "Ver catálogo" (gold filled) and "Contactar por 
  WhatsApp" (outlined white)

=== FOOTER ===
Minimal, dark background:
- Brand name + tagline
- Quick links: Catálogo, Quiénes somos, Contacto
- Social: Instagram icon linking to @TU_MARCA
- "Hecho con ♥ en Mar del Plata, Argentina"
- Copyright 2026

=== TECHNICAL REQUIREMENTS ===
- Mobile-first responsive design (375px base)
- Playfair Display (headings) + Inter (body) from Google Fonts
- All brand-specific content (name, colors, URLs, WhatsApp, Instagram) 
  centralized in the BRAND config object at the top of the main component
- Smooth scroll-triggered fade-in animations on section entry (subtle, 
  Intersection Observer or framer-motion if available)
- "Ver catálogo" CTA opens catalogUrl in a new tab (_blank)
- WhatsApp link format: https://wa.me/{whatsappNumber}
- Alt text on all images for accessibility
- Single H1 in hero, logical heading hierarchy throughout
- Clean component structure: Header, Hero, Categories, FeaturedProducts, 
  About, HowToBuy, Testimonials, FinalCTA, Footer — each in its own file

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://botbolclothes.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/75c5ec83-3952-474e-8708-9a6963bc6125).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
