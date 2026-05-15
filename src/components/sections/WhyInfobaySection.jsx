"use client";

import { motion } from "framer-motion";
import { whyItems } from "./homeData";
import { SectionShell } from "./SectionPrimitives";

export default function WhyInfobaySection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/pexels-markusspiske-1679719.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/50" />
    <SectionShell
      id="why-infobay"
      eyebrow="Why InfoBay"
      title="Three things most data infrastructure cannot offer."
      className="bg-transparent"
    >
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {whyItems.map(([title, copy, proof], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="grid gap-4 py-7 md:grid-cols-[120px_1fr]"
          >
            <span className="text-5xl font-semibold text-white/20">0{index + 1}</span>
            <div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-400">{copy}</p>
              {proof ? (
                <p className="mt-5 inline-flex max-w-4xl rounded-md border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-xs uppercase leading-6 tracking-[0.12em] text-emerald-100/80">
                  {proof}
                </p>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
    </section>
  );
}
