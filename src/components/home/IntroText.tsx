"use client";

import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* SHOP column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-body-sm tracking-[0.2em] mb-6 opacity-60 uppercase">
              SHOP
            </h3>
            <p className="text-body leading-[1.6]">
              Narcotic is a collaborative brand of two individuals who partner
              with makers, artists and designers to create unique sensory
              experiences.
            </p>
          </motion.div>

          {/* ABOUT column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-body-sm tracking-[0.2em] mb-6 opacity-60 uppercase">
              ABOUT
            </h3>
            <p className="text-body leading-[1.6]">
              Lorem Ipsum dolor sit commodo ac felis ipsum molestie in curulus
              Duis aute irure dolor in reprehenderit in volup This is formatted
              text used as a placeholder because real text comes later. These
              sentences have no meaning, they describe nothing.
            </p>
          </motion.div>

          {/* BOOK column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-body-sm tracking-[0.2em] mb-6 opacity-60 uppercase">
              BOOK
            </h3>
            <p className="text-body leading-[1.6] opacity-0">
              {/* Empty for visual balance, matching the design */}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
