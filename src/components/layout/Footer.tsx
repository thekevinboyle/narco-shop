"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Masked figures section */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Left figure - industrial texture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 bottom-0 w-[40%] md:w-1/3 h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/abstract-smoke-1.jpg"
              alt="NARCOTIC"
              fill
              className="object-cover grayscale contrast-125"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
          </div>
        </motion.div>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Asterisk/star logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="text-white"
            >
              {/* 8-pointed star */}
              <path
                d="M24 0L24 48M0 24L48 24M7 7L41 41M41 7L7 41"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          {/* Brand text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body-sm tracking-[0.4em] mb-12 opacity-80 uppercase"
          >
            Specialty Coffee
          </motion.p>
        </div>

        {/* Right figure - decay texture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 bottom-0 w-[40%] md:w-1/3 h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/abstract-ink.jpg"
              alt="NARCOTIC"
              fill
              className="object-cover grayscale contrast-125"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50" />
          </div>
        </motion.div>
      </div>

      {/* NARCOTIC logo - white variant with stretch effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-8 overflow-hidden bg-black flex justify-center"
      >
        <div
          className="opacity-90"
          style={{
            transform: "scaleY(1.4)",
          }}
        >
          <Logo size="hero" variant="white" animate={false} />
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 py-6">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-body-sm tracking-[0.2em] opacity-50 uppercase">
            © 2026 NARCOTIC
          </span>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-body-sm tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity duration-300 uppercase"
            >
              INSTAGRAM
            </a>
            <a
              href="#"
              className="text-body-sm tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity duration-300 uppercase"
            >
              TWITTER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
