"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Main logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <Logo size="hero" animate />
      </motion.div>

      {/* Tagline - using body text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-2xl"
      >
        <p className="text-body leading-[1.6]">
          Self Destructing Specialty Coffee. Roasted By Nameless Folk.
        </p>
        <p className="text-body leading-[1.6]">
          Consumed By Many. Featuring Seasonal Offerings
        </p>
        <p className="text-body leading-[1.6]">And One-Off Collabs.</p>
      </motion.div>

      {/* Year */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 text-body-sm tracking-[0.3em]"
      >
        2025
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-black/30"
        />
      </motion.div>
    </section>
  );
}
