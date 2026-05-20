"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Cpu,
  Microscope,
  Network,
  ShieldCheck,
} from "lucide-react";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

const items = [
  ["GPU-Accelerated Processing", "Dedicated GPU infrastructure for ASR model runs, OCR pipelines, speaker diarization, MinHash deduplication at scale, and language classification across 176+ languages. Processing that would take weeks on CPU runs in hours.", "Compute", Cpu],
  ["Proprietary Annotation Platform", "Purpose-built annotation interfaces for each data type: audio waveform editors with word-level alignment review, DICOM image annotation tools with radiology report linking, and structured Q&A curation workflows with expert verification steps.", "Tooling", Bot],
  ["Corpus Research & Methodology", "Dedicated R&D function benchmarking against FineWeb-Edu, Dolma, Nemotron-CC, and production ASR baselines. Methodology papers, quality evaluation frameworks, and benchmark datasets published openly to establish technical credibility.", "Research", Microscope],
  ["Multi-Tier Quality Evaluation", "Automated quality gates (SNR, WER, perplexity, duplicate detection) run before any human review. Human QA operates in three tiers: general annotators, senior domain reviewers, and expert gold-set validators. IAA tracked per language per dataset.", "QA Systems", BrainCircuit],
  ["AI Act & Data Governance", "EU AI Act Article 10 documentation architecture built-in. ISO-aligned data management processes. PII detection and redaction pipelines. Data lineage tracking from raw source to delivered training file. Audit trail available for regulated clients.", "Compliance", ShieldCheck],
  ["Domain Expert Network", "12,000+ verified domain experts across legal, medical, financial, and engineering verticals. Computational linguists for 40+ languages. Radiologists, pathologists, and clinicians for healthcare annotation. Senior software engineers for code curation and review.", "Expertise", Network],
];
// const items = [
//   ["Quality pipelines", "Audio, video, healthcare, text, and code each run through modality-specific refinement checks."],
//   ["Human-in-the-loop ops", "Large annotation teams support labeling, review, localization, and evaluation workflows."],
//   ["Multimodal alignment", "Datasets support cross-modal grounding across text, image, video, speech, equations, and structured metadata."],
//   ["Enterprise delivery", "Formats and documentation are prepared for procurement, compliance, and model training teams."],
// ];

export default function InfrastructureSection() {
  return (
    <SectionShell
      id="infrastructure"
      dark
      eyebrow="Infrastructure & R&D"
      title="Not a labeling shop. A technical AI data infrastructure company."
      copy="InfoBay operates purpose-built annotation platforms, GPU-accelerated processing pipelines, and proprietary quality evaluation tooling. Our technical team includes NLP researchers, computational linguists, ML engineers, and domain experts — building infrastructure that no crowdsourcing marketplace can replicate."
    >
    {/* <SectionShell
      id="infrastructure"
      dark
      eyebrow="Infrastructure R&D"
      title="Robust in-house infrastructure for data production at speed."
      copy="InfoBay combines quality engineering, annotation operations, and multimodal processing capabilities across every major dataset family."
    > */}
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map(([title, copy, tag, Icon]) => (
          <motion.div key={title} variants={rise} className="rounded-xl border border-white/10 bg-black p-6">
            <div className="flex items-center gap-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 w-fit">
              <Icon className="h-5 w-5 text-cyan-300" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-100">{tag}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{copy}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
