"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProduct() {
  return (
    <section className="py-12">
      <Link href="/shop/ethiopian-natural" className="block group">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] md:h-[70vh] overflow-hidden"
        >
          {/* Background image - abstract texture */}
          <Image
            src="/images/abstract-paint.jpg"
            alt="Ethiopian Natural Coffee"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale"
            priority
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            {/* Brand tag - Eyebrow style */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-eyebrow mb-6"
            >
              NARCOTIC
            </motion.span>

            {/* Product name - H1 style with Bricolage */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] text-center font-bold uppercase"
            >
              Ethiopian
              <br />
              Natural
            </motion.h2>

            {/* Decorative lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex gap-2 origin-center"
            >
              <div className="w-16 h-[3px] bg-[var(--accent-magenta)]" />
              <div className="w-8 h-[3px] bg-[#00FFFF]" />
              <div className="w-4 h-[3px] bg-white" />
            </motion.div>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 z-20" />
        </motion.div>
      </Link>
    </section>
  );
}
