"use client";

import { motion } from "framer-motion";
import { Database, FileCheck2, Globe2, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { capabilities } from "./homeData";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

const icons = [Database, FileCheck2, Globe2, ShieldCheck, Workflow, Layers3];

export default function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      dark
      eyebrow="Capabilities"
      title="One accountability chain across the full post-training stack."
      copy="Pre-training through evaluation — one vendor, one quality standard, zero handoffs."
    >
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map(([title, copy], index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={title}
              variants={rise}
              whileHover={{ y: -6 }}
              className="group rounded-xl border border-white/10 bg-black p-6 transition hover:border-cyan-400/20"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-black">
                  <Icon size={20} />
                </div>
                <span className="text-sm text-white/20">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{copy}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
