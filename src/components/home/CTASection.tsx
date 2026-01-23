"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

const ctas = [
  {
    id: "sensory",
    label: "BOOK",
    title: "Sensory",
    titleLine2: "Experiences",
    description: "Installation • Event • Activation",
    href: "/book",
    linkText: "Explore",
  },
  {
    id: "nameless",
    label: "COLLAB",
    title: "Become",
    titleLine2: "Nameless",
    description: "Product • Space • Sight • Sound",
    href: "/collab",
    linkText: "Contact",
  },
];

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[var(--gray-light)]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--gray-medium)]">
          {ctas.map((cta, index) => (
            <motion.div
              key={cta.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--gray-light)] p-8 md:p-12 group"
            >
              {/* Label - Eyebrow style */}
              <span className="text-body-sm tracking-[0.2em] opacity-60 block mb-6 uppercase">
                {cta.label}
              </span>

              {/* Title - H2 style */}
              <h3 className="text-h2 mb-4">
                {cta.title}
                <br />
                {cta.titleLine2}
              </h3>

              {/* Description */}
              <p className="text-body-sm opacity-60 mb-8">{cta.description}</p>

              {/* Link with button style */}
              <Link href={cta.href}>
                <Button variant={index === 0 ? "primary" : "secondary"}>
                  {cta.linkText}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
