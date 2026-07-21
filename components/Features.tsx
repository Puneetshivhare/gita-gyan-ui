"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

export default function Features() {
  return (
    <section className="border-b border-line bg-canvas px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-[13px] font-medium uppercase tracking-wide text-mute">
          What it does
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px -14px rgba(154,52,18,0.35)" }}
              className="rounded-xl border border-line bg-canvasAlt p-7 transition-colors hover:border-primary/40"
            >
              <p className="font-serif text-[16px] font-semibold text-ink">{f.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-mute">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
