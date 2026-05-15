"use client";

import { motion } from "framer-motion";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

/* ---------------------------------------
   DATA
--------------------------------------- */

const problemContent = {
  eyebrow: "The Problem",
  title: "Language models are fluent. They are not yet reliable.",
  copy:
    "Every hallucination, reasoning failure, and misaligned output in production traces to a training data problem — not model architecture. The solution is earlier and more structural than most teams realize.",
};

const problems = [
  {
    number: "01",
    title: "Hallucination at Scale",
    copy:
      "Confident, fluent, wrong. Models trained without factuality controls fail in ways that are expensive and invisible until deployment in high-stakes regulated environments.",
  },
  {
    number: "02",
    title: "Brittle Reasoning",
    copy:
      "SFT data without explicit reasoning traces patterns responses rather than teaching reasoning. The model sounds correct without being correct.",
  },
  {
    number: "03",
    title: "Misaligned Reward Signals",
    copy:
      "RLHF built on commodity crowdwork optimizes for apparent preference, not correct behavior. The model learns to sound good, not to be right.",
  },
];

/* ---------------------------------------
   COMPONENT
--------------------------------------- */

export default function ProblemSection() {
  return (
    <SectionShell
      id="problem"
      dark
      eyebrow={problemContent.eyebrow}
      title={problemContent.title}
      copy={problemContent.copy}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {problems.map((item) => (
          <motion.div
            key={item.title}
            variants={rise}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]"
          >
            {/* glow */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}

            {/* number */}
            <div className="absolute right-5 top-3 text-6xl font-semibold text-white/[0.05]">
              {item.number}
            </div>

            {/* top line */}
            <div className="mb-5 h-px w-12 bg-white/60" />

            <h3 className="relative text-xl font-semibold tracking-tight text-white">
              {item.title}
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-zinc-400">
              {item.copy}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}