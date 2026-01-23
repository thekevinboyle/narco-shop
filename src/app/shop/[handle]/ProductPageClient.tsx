"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

interface ProductPageClientProps {
  product: {
    name: string;
    sku: string;
    description: string;
    heroImage: string;
    productImage: string;
    galleryImages: string[];
    tag: string;
    overview: string;
    origin: string;
    process: string;
    varietal: string;
    masl: string;
    notes: string;
    collabNo: string;
    batch: string;
    price: number;
    variantId?: string;
    handle?: string;
  };
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const { addItem, isLoading } = useCart();

  const handleAddToCart = async () => {
    const variantId = product.variantId || `demo-${product.handle || product.sku}`;
    await addItem(variantId);
  };
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Product header */}
      <section className="pt-28 pb-8 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-h1 mb-2">{product.name}</h1>
          <p className="text-body-sm opacity-60 mb-1">{product.sku}</p>
          <p className="text-body opacity-80">{product.description}</p>
        </motion.div>
      </section>

      {/* Hero image with side nav */}
      <section className="relative px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden"
          >
            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-body-sm tracking-[0.3em] uppercase">
                ABOUT
              </span>
            </div>
          </motion.div>
        </div>

        {/* Side navigation */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-8">
          <Link
            href="/shop"
            className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            SHOP
          </Link>
        </div>
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-8">
          <Link
            href="/book"
            className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            BOOK
          </Link>
        </div>
      </section>

      {/* Product details */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square"
            >
              <Image
                src={product.productImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Product info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <h2 className="text-h2 mb-4">{product.name}</h2>

              <div className="mb-6">
                <span className="text-eyebrow">TAG:</span>
                <span className="text-body-sm ml-2">{product.tag}</span>
              </div>

              <div className="mb-6">
                <h3 className="text-body-bold mb-2">Overview</h3>
                <p className="text-body opacity-80 leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-8">
                <div className="flex">
                  <span className="text-body-bold w-24">Origin:</span>
                  <span className="text-body">{product.origin}</span>
                </div>
                <div className="flex">
                  <span className="text-body-bold w-24">Process:</span>
                  <span className="text-body">{product.process}</span>
                </div>
                <div className="flex">
                  <span className="text-body-bold w-24">Varietal:</span>
                  <span className="text-body">{product.varietal}</span>
                </div>
                <div className="flex">
                  <span className="text-body-bold w-24">M.A.S.L.:</span>
                  <span className="text-body">{product.masl}</span>
                </div>
                <div className="flex">
                  <span className="text-body-bold w-24">Notes:</span>
                  <span className="text-body">{product.notes}</span>
                </div>
              </div>

              {/* Batch info */}
              <div className="border-t border-black/10 pt-6 mb-8 space-y-3">
                <div className="flex">
                  <span className="text-body-bold w-24">Collab No.:</span>
                  <span className="text-body">{product.collabNo}</span>
                </div>
                <div className="flex">
                  <span className="text-body-bold w-24">Batch:</span>
                  <span className="text-body">{product.batch}</span>
                </div>
                <div className="flex">
                  <span className="text-body-bold w-24">Cost:</span>
                  <span className="text-body">${product.price.toFixed(2)}</span>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full md:w-auto py-3 px-8 bg-[var(--accent-orange)] text-white text-body-sm tracking-[0.15em] hover:bg-[var(--accent-orange)]/90 transition-colors uppercase disabled:opacity-50"
              >
                {isLoading ? "ADDING..." : "ADD TO CART"}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {product.galleryImages.length > 0 && (
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {product.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-[3/2] md:aspect-[2/1] max-w-[600px] mx-auto"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
