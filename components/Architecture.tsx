"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

export default function Architecture() {
  return (
    <section className="border-b border-line bg-canvasDark px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-[13px] font-medium uppercase tracking-wide text-muteSoft">
          How it&apos;s built
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {content.architecture.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-[13px] font-medium text-canvas">
                {step}
              </div>
              {i < content.architecture.length - 1 && (
                <span className="hidden text-gold sm:inline">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
