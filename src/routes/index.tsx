import { createFileRoute } from "@tanstack/react-router";
import { HeroScreen } from "@/components/site/HeroScreen";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Botbol Clothes · Moda femenina argentina — Mar del Plata" },
      {
        name: "description",
        content:
          "Botbol Clothes: moda femenina desde Mar del Plata. Prendas para la mujer real, diseño argentino y calidad atemporal. Comprá online.",
      },
      { property: "og:title", content: "Botbol Clothes · Moda femenina argentina" },
      {
        property: "og:description",
        content:
          "Prendas pensadas para la mujer real. Diseño argentino, calidad atemporal, estilo de todos los días.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return <HeroScreen />;
}
