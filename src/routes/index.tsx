import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { About } from "@/components/site/About";
import { HowToBuy } from "@/components/site/HowToBuy";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-linen text-ink">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
        <HowToBuy />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
