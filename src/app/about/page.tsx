"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const collageImages = [
  {
    src: "/images/coffee-glass.jpg",
    alt: "Coffee glass",
    className: "left-[5%] top-[5%] w-[120px] md:w-[160px]",
    delay: 0.1,
  },
  {
    src: "/images/abstract-smoke-1.jpg",
    alt: "Abstract",
    className: "left-[35%] top-[2%] w-[100px] md:w-[140px]",
    delay: 0.2,
  },
  {
    src: "/images/abstract-ink.jpg",
    alt: "Texture",
    className: "right-[10%] top-[5%] w-[180px] md:w-[240px]",
    delay: 0.15,
  },
  {
    src: "/images/coffee-beans.jpg",
    alt: "Coffee beans",
    className: "left-[18%] top-[22%] w-[80px] md:w-[100px]",
    delay: 0.25,
  },
  {
    src: "/images/abstract-paint.jpg",
    alt: "Abstract paint",
    className: "right-[25%] top-[20%] w-[100px] md:w-[130px]",
    delay: 0.3,
  },
  {
    src: "/images/face-closeup.jpg",
    alt: "Portrait",
    className: "left-[3%] top-[45%] w-[100px] md:w-[120px]",
    delay: 0.35,
  },
  {
    src: "/images/abstract-smoke-1.jpg",
    alt: "Abstract",
    className: "left-[15%] bottom-[15%] w-[140px] md:w-[180px]",
    delay: 0.4,
  },
  {
    src: "/images/abstract-ink.jpg",
    alt: "Texture",
    className: "right-[5%] bottom-[20%] w-[160px] md:w-[200px]",
    delay: 0.45,
  },
  {
    src: "/images/abstract-paint.jpg",
    alt: "Abstract",
    className: "left-[40%] bottom-[8%] w-[180px] md:w-[220px]",
    delay: 0.5,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Collage section */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Scattered images */}
        {collageImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: image.delay }}
            className={`absolute ${image.className} aspect-square`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        ))}

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-xl px-6"
          >
            <h1 className="text-h2 mb-4">
              Nameless Folk. Making. Sustainable.
              <br />
              Practice. Weapon.
            </h1>
            <p className="text-body opacity-60 mb-8">
              You don&apos;t know us, but we know you.
            </p>
            <a
              href="mailto:attention@narco"
              className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity pointer-events-auto"
            >
              attention@narco
            </a>
          </motion.div>
        </div>

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-between px-6 md:px-12 z-20"
        >
          <Link
            href="/shop"
            className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity uppercase"
          >
            SHOP
          </Link>
          <Link
            href="/about"
            className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity uppercase"
          >
            ABOUT
          </Link>
          <Link
            href="/book"
            className="text-body-sm tracking-[0.2em] hover:opacity-60 transition-opacity uppercase"
          >
            BOOK
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
