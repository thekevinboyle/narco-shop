"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: {
    handle: string;
    title: string;
    image: string;
    price?: number;
    status: "available" | "coming-soon" | "sold-out";
    tag?: string;
    variantId?: string; // Shopify variant ID
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, isLoading } = useCart();
  const isAvailable = product.status === "available";
  const isComingSoon = product.status === "coming-soon";

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Use variant ID if available, otherwise use a demo ID
    const variantId = product.variantId || `demo-${product.handle}`;
    await addItem(variantId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={isAvailable ? `/shop/${product.handle}` : "#"}
        className={`block group ${!isAvailable ? "cursor-default" : ""}`}
      >
        <div className="relative aspect-square bg-[var(--gray-light)] overflow-hidden">
          {/* Product image */}
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isAvailable ? "group-hover:scale-105" : "opacity-50"
            }`}
          />

          {/* Coming soon overlay */}
          {isComingSoon && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90">
              <div className="w-12 h-12 mb-4 opacity-30">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M16 24L32 24M24 16L24 32"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <span className="text-body-sm tracking-[0.2em] font-medium uppercase">
                COMING SOON
              </span>
              <p className="text-body-sm opacity-50 mt-2 text-center px-4 max-w-[200px]">
                this picture holds something that
                <br />
                could spark your excitement
              </p>
              <button className="mt-4 px-4 py-2 border border-black text-body-sm tracking-[0.1em] hover:bg-black hover:text-white transition-colors uppercase">
                STAY TUNED
              </button>
            </div>
          )}

          {/* Sold out overlay */}
          {product.status === "sold-out" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="text-white text-body-sm tracking-[0.2em] uppercase">
                SOLD OUT
              </span>
            </div>
          )}

          {/* Tag */}
          {product.tag && isAvailable && (
            <div className="absolute top-3 left-3">
              <span className="text-eyebrow bg-white px-2 py-1">
                {product.tag}
              </span>
            </div>
          )}

          {/* Add to cart button - only for available products */}
          {isAvailable && (
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full py-2 bg-black text-white text-body-sm tracking-[0.15em] hover:bg-black/80 transition-colors uppercase disabled:opacity-50"
              >
                {isLoading ? "ADDING..." : "ADD TO CART"}
              </button>
            </div>
          )}
        </div>

        {/* Product info */}
        {isAvailable && (
          <div className="mt-3">
            <h3 className="text-body-sm tracking-[0.1em] uppercase">
              {product.title}
            </h3>
            {product.price && (
              <p className="text-body-sm opacity-60 mt-1">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
