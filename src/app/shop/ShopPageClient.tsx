"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import Image from "next/image";
import Link from "next/link";

interface ShopPageClientProps {
  products: {
    handle: string;
    title: string;
    image: string;
    price?: number;
    status: "available" | "coming-soon" | "sold-out";
    tag?: string;
  }[];
  categories: {
    handle: string;
    title: string;
    image: string;
  }[];
}

export default function ShopPageClient({
  products,
  categories,
}: ShopPageClientProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Category tiles row */}
      <section className="pt-24 px-4 md:px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {categories.map((category, index) => (
              <motion.div
                key={category.handle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/${category.handle}`} className="block group">
                  <div className="relative aspect-square bg-[var(--gray-light)] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-body-sm tracking-[0.2em] uppercase">
                        {category.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* E.CR.ERW special tile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/ecrerworldwide" className="block group">
                <div className="relative aspect-square bg-white border border-[#00A8E8] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-[#E63946] font-heading text-2xl md:text-3xl font-bold tracking-tight">
                      E.CR.ERW
                    </span>
                    <div className="mt-2 text-[8px] tracking-[0.1em] opacity-60 uppercase">
                      WORLDWIDE
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.handle}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Side navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40"
      >
        <Link
          href="/book"
          className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity uppercase writing-vertical"
          style={{ writingMode: "vertical-rl" }}
        >
          BOOK
        </Link>
      </motion.div>

      <Footer />
    </main>
  );
}
