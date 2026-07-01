// Centralized brand configuration.
// Swap these values to rebrand the entire site without touching layout code.
export const BRAND = {
  name: "TU MARCA",
  tagline: "Moda femenina con estilo",
  primaryColor: "#1A1A1A", // dark/elegant — swap to client's brand color
  accentColor: "#C9A86C", // warm gold — elegant for fashion
  lightBg: "#FAF8F5", // off-white warm
  catalogUrl: "https://LINK-TIENDANUBE-AQUI.mitiendanube.com",
  whatsappNumber: "549XXXXXXXXXX",
  instagram: "@TU_MARCA",
  location: "Mar del Plata, Argentina",
} as const;

export const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}`;
export const instagramUrl = `https://instagram.com/${BRAND.instagram.replace(/^@/, "")}`;
