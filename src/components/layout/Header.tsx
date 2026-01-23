"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const itemCount = cart?.totalQuantity || 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-60 transition-opacity duration-300"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Logo size="sm" animate={false} />
          </motion.div>
        </Link>

        {/* Center nav */}
        <Link
          href="/about"
          className="text-body-sm tracking-[0.15em] hover:opacity-60 transition-opacity duration-300 uppercase link-underline"
        >
          ABOUT
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <Link
            href="/book"
            className="text-body-sm tracking-[0.15em] hover:opacity-60 transition-opacity duration-300 uppercase link-underline hidden sm:block"
          >
            BOOK
          </Link>
          <motion.button
            onClick={openCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-body-sm tracking-[0.15em] hover:opacity-60 transition-opacity duration-300 uppercase"
          >
            CART
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-4 w-5 h-5 bg-[var(--accent-orange)] text-white text-[10px] rounded-full flex items-center justify-center"
              >
                {itemCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
