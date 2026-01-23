import Hero from "@/components/home/Hero";
import IntroText from "@/components/home/IntroText";
import CategoryTiles from "@/components/home/CategoryTiles";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroText />
      <CategoryTiles />
      <FeaturedProduct />
      <CTASection />
    </>
  );
}
