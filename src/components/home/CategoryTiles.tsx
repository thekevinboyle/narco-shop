"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "consume",
    title: "CONSUME",
    href: "/consume",
    bgColor: "bg-[#E8E4E0]",
    hasImage: false,
    // Yellow circles visual - matching the design
    visual: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--accent-yellow)] absolute left-[30%] top-1/2 -translate-y-1/2 shadow-lg" />
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--accent-yellow)] absolute left-[45%] top-1/2 -translate-y-1/2 shadow-lg" />
      </div>
    ),
  },
  {
    id: "shop",
    title: "SHOP",
    href: "/shop",
    bgColor: "bg-[#D4A574]",
    hasImage: true,
    image: "/images/coffee-glass.jpg",
  },
  {
    id: "listen",
    title: "LISTEN",
    href: "/listen",
    bgColor: "bg-[var(--gray-light)]",
    hasImage: false,
    // Vinyl record visual
    visual: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full border-[16px] border-black flex items-center justify-center bg-white relative">
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-3xl md:text-4xl tracking-[0.1em] font-bold">
              EKO
            </span>
          </div>
          {/* Inner rings */}
          <div className="absolute w-8 h-8 rounded-full border-2 border-black/20" />
        </div>
      </div>
    ),
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href} className="block group">
                <div
                  className={`relative aspect-square ${category.bgColor} overflow-hidden`}
                >
                  {/* Background image or visual */}
                  {category.hasImage ? (
                    <Image
                      src={category.image!}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    category.visual
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-body-sm tracking-[0.2em] inline-block group-hover:translate-x-2 transition-transform duration-300 uppercase">
                      {category.title}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
