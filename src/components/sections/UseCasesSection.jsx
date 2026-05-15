"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  Languages,
  Stethoscope,
  Code2,
  ShieldCheck,
} from "lucide-react";

import { useCases } from "./homeData";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

const icons = [BrainCircuit, Building2, Languages, Stethoscope, Code2, ShieldCheck,];

export default function UseCasesSection() {
  return (
    <SectionShell
      id="use-cases"
      dark
      eyebrow="Use cases"
      title="Built for the deployments where correctness is non-negotiable."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid gap-5 md:grid-cols-2"
      >
        {useCases.map(([title, copy, label, summary], index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={title}
              variants={rise}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-6 transition-all duration-300 hover:border-cyan-400/20"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                {/* Tag with icon */}
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5">
                  <Icon className="h-3.5 w-3.5 text-cyan-300" />

                  <span className="text-xs font-medium tracking-wide text-cyan-100">
                    {label}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {copy}
              </p>

              {/* Summary */}
              <div className="mt-5">
                <div className="inline-flex items-center rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-100">
                  {summary}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}