import Hero from "@/components/home/Hero";
import IntroText from "@/components/home/IntroText";
import CategoryTiles from "@/components/home/CategoryTiles";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import CTASection from "@/components/home/CTASection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <IntroText />
      <CategoryTiles />
      <FeaturedProduct />
      <CTASection />
      <Footer />
    </main>
  );
}
