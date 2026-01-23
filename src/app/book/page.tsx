"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const experiences = [
  {
    id: "installation",
    title: "Installation",
    description:
      "Immersive coffee experiences that transform spaces. Custom installations for galleries, events, and brand activations.",
  },
  {
    id: "event",
    title: "Event",
    description:
      "Curated coffee ceremonies and tastings. Private events, corporate gatherings, and exclusive launches.",
  },
  {
    id: "activation",
    title: "Activation",
    description:
      "Pop-up experiences and brand collaborations. Bringing NARCOTIC to unexpected places.",
  },
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <span className="text-eyebrow block mb-6">BOOK</span>
          <h1 className="text-h1 mb-6">
            Sensory
            <br />
            Experiences
          </h1>
          <p className="text-body opacity-70 leading-relaxed">
            Installation. Event. Activation.
            <br />
            We create moments that transcend the ordinary.
          </p>
        </motion.div>
      </section>

      {/* Experiences grid */}
      <section className="py-24 px-6 md:px-12 bg-[var(--gray-light)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--gray-medium)]">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--gray-light)] p-8 md:p-12"
              >
                <span className="text-eyebrow block mb-4">0{index + 1}</span>
                <h2 className="text-h3 mb-4">{exp.title}</h2>
                <p className="text-body-sm opacity-70 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 mb-4">Get In Touch</h2>
            <p className="text-body opacity-70">
              Tell us about your vision. We&apos;ll make it happen.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <label className="text-body-sm tracking-[0.1em] block mb-2 uppercase">
                Name
              </label>
              <input
                type="text"
                className="w-full border-b border-black/20 py-3 bg-transparent focus:border-black outline-none transition-colors text-body"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-body-sm tracking-[0.1em] block mb-2 uppercase">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-black/20 py-3 bg-transparent focus:border-black outline-none transition-colors text-body"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-body-sm tracking-[0.1em] block mb-2 uppercase">
                Experience Type
              </label>
              <select className="w-full border-b border-black/20 py-3 bg-transparent focus:border-black outline-none transition-colors text-body">
                <option value="">Select an option</option>
                <option value="installation">Installation</option>
                <option value="event">Event</option>
                <option value="activation">Activation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-body-sm tracking-[0.1em] block mb-2 uppercase">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-black/20 py-3 bg-transparent focus:border-black outline-none transition-colors text-body resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="pt-6">
              <Button variant="primary" type="submit" className="w-full">
                SUBMIT INQUIRY
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
