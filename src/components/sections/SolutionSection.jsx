"use client";

import { motion } from "framer-motion";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

/* ---------------------------------------
   DATA
--------------------------------------- */

const solutionContent = {
  eyebrow: "The Solution",
  title: "We engineer the intelligence your model learns from.",
  copy:
    "InfoBay is the training intelligence layer — combining a proprietary multilingual corpus, verified domain expertise, structured annotation methodology, and rigorous evaluation design to give AI teams systematic control over what their models know, how they reason, and where they fail.",
  baseline:
    "Every engagement begins with a quality baseline. Every deliverable is measured against it — in benchmark deltas, factuality improvement percentages, and evaluation pass rates.",
};

const pipeline = [
  {
    title: "Pre-Training Data Curation",
    badge: "Corpus",
    copy:
      "ISBN-attributed textbooks · 15 languages · factuality-scored · not web-scraped.",
  },
  {
    title: "SFT Dataset Design",
    badge: "Expert-Created",
    copy:
      "Instruction datasets with explicit reasoning traces by domain SMEs.",
  },
  {
    title: "RLHF & Reward Modeling",
    badge: "Human-Verified",
    copy:
      "1.9M+ hours real industry audio · dual-channel · industry-tagged · WER-tracked.",
  },
  {
    title: "Medical AI Training Data",
    badge: "Healthcare",
    copy:
      "53M+ DICOM images · 1.6M+ patient records · 20 specialties · age-stratified.",
  },
  {
    title: "Code & Reasoning Datasets",
    badge: "Coding",
    copy:
      "64K+ DSA problems · 9 languages · 25M tokens · curated, not scraped.",
  },
  {
    title: "Factuality Auditing",
    badge: "Measurable",
    copy:
      "Systematic identification of hallucination-prone examples. Documented before and after.",
  },
];

/* ---------------------------------------
   COMPONENT
--------------------------------------- */

export default function SolutionSection() {
  return (
    <SectionShell
      id="solution"
      dark
      eyebrow={solutionContent.eyebrow}
      title={solutionContent.title}
      copy={solutionContent.copy}
      className="pb-0"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mt-5 max-w-3xl text-base leading-8 text-zinc-400"
      >
        {solutionContent.baseline}
      </motion.p>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
      >
        {pipeline.map((item) => (
          <motion.div
            key={item.title}
            variants={rise}
            className="flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-white/[0.02] md:flex-row md:items-start md:justify-between"
          >
            {/* Left */}
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-300">
                  {item.badge}
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.copy}
              </p>
            </div>

            {/* Right indicator */}
            <div className="hidden md:flex">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
