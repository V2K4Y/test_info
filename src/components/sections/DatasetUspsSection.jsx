"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { uspTabs } from "./uspData";
import { getDatasetUsp, uspTabs } from "./corpusData";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

// ─── per-dataset colour tokens ────────────────────────────────────────────────
const tagColors = {
  cyan: {
    accent:    "text-cyan-400",
    proofBg:   "border-cyan-700/30 text-cyan-300/80", 
    // proofBg:   "bg-cyan-950/50 border-cyan-700/30 text-cyan-300/80", 
    proofDot:  "bg-cyan-400",
    nLabel:    "text-cyan-400",
    tabActive: "border-cyan-400/60 text-cyan-300 bg-cyan-950/40",
    featured:  "border-cyan-300/50 bg-cyan-300 text-black",
    featBody:  "text-black/70",
    icon:      "text-cyan-300",
  },
  amber: {
    accent:    "text-amber-400",
    proofBg:   "border-amber-700/30 text-amber-300/80",
    proofDot:  "bg-amber-400",
    nLabel:    "text-amber-400",
    tabActive: "border-amber-400/60 text-amber-300 bg-amber-950/40",
    featured:  "border-amber-300/50 bg-amber-300 text-black",
    featBody:  "text-black/70",
    icon:      "text-amber-300",
  },
  rose: {
    accent:    "text-rose-400",
    proofBg:   "border-rose-700/30 text-rose-300/80",
    proofDot:  "bg-rose-400",
    nLabel:    "text-rose-400",
    tabActive: "border-rose-400/60 text-rose-300 bg-rose-950/40",
    featured:  "border-rose-300/50 bg-rose-300 text-black",
    featBody:  "text-black/70",
    icon:      "text-rose-300",
  },
  indigo: {
    accent:    "text-indigo-400",
    proofBg:   "border-indigo-700/30 text-indigo-300/80",
    proofDot:  "bg-indigo-400",
    nLabel:    "text-indigo-400",
    tabActive: "border-indigo-400/60 text-indigo-300 bg-indigo-950/40",
    featured:  "border-indigo-300/50 bg-indigo-300 text-black",
    featBody:  "text-black/70",
    icon:      "text-indigo-300",
  },
  fuchsia: {
    accent:    "text-fuchsia-400",
    proofBg:   "border-fuchsia-700/30 text-fuchsia-300/80",
    proofDot:  "bg-fuchsia-400",
    nLabel:    "text-fuchsia-400",
    tabActive: "border-fuchsia-400/60 text-fuchsia-300 bg-fuchsia-950/40",
    featured:  "border-fuchsia-300/50 bg-fuchsia-300 text-black",
    featBody:  "text-black/70",
    icon:      "text-fuchsia-300",
  },
  lime: {
    accent:    "text-lime-400",
    proofBg:   "border-lime-700/30 text-lime-300/80",
    proofDot:  "bg-lime-400",
    nLabel:    "text-lime-400",
    tabActive: "border-lime-400/60 text-lime-300 bg-lime-950/40",
    featured:  "border-lime-300/50 bg-lime-300 text-black",
    featBody:  "text-black/70",
    icon:      "text-lime-300",
  },
};

// ─── single USP card ──────────────────────────────────────────────────────────
function UspCard({ usp, colors, index }) {
  // const isFeatured = index === 0 || index === 2;
  const isFeatured = false;

  return (
    <motion.article
      variants={rise}
      className={`relative overflow-hidden rounded-xl border p-6 flex flex-col ${
        isFeatured
          ? colors.featured
          : "border-white/10 bg-zinc-950 text-white"
      }`}
    >
      {/* decorative orb */}
      {/* <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-xl pointer-events-none" /> */}

      {/* header */}
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`font-mono text-[9px] uppercase tracking-[0.22em] ${
            isFeatured ? "text-black/50" : colors.nLabel
          }`}>
            {usp.n}
          </p>
          <h3 className="mt-2 text-[18px] font-semibold leading-snug">
            {usp.title}
          </h3>
        </div>
        {/* <ShieldCheck className={`h-5 w-5 shrink-0 mt-0.5 ${
          isFeatured ? "text-black/35" : colors.icon
        }`} /> */}
      </div>

      {/* body */}
      <p className={`relative mt-4 text-[13.5px] leading-relaxed font-light flex-1 ${
        isFeatured ? colors.featBody : "text-zinc-400"
      }`}>
        {usp.body}
      </p>

      {/* proof strip */}
      <div className={`relative mt-5 flex items-start gap-2 rounded-md border px-3 py-2.5  bg-black/30 ${
        isFeatured
          ? "bg-black/10 border-black/12 text-black/55"
          : colors.proofBg
      } bg-black/30`}>
        <span className={`w-[5px] h-[5px] rounded-full shrink-0 mt-[3px] ${
          isFeatured ? "bg-black/35" : colors.proofDot
        }`} />
        <span className="text-[10.5px] leading-relaxed" style={{ fontFamily: "'Space Mono', monospace" }}>{usp.proof}</span>
      </div>
    </motion.article>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────
export default function DatasetUspSection() {
  const [active, setActive] = useState(uspTabs[0].id);
  const current = getDatasetUsp(active);
  const colors = tagColors[current.tag];

  return (
    <SectionShell
      id="dataset-usps"
      eyebrow="Dataset USPs"
      title="What makes these datasets structurally different."
      copy="Benchmarked against leading providers. Every USP grounded in the actual dataset files."
    >
      {/* tab bar */}
      <div className="mt-9 flex flex-wrap gap-2">
        {uspTabs.map((tab) => {
          const c = tagColors[tab.tag];
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? c.tabActive
                  : "border-white/10 bg-black text-zinc-400 hover:border-white/25 hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* cards — flat grid, no wrapper container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          variants={stagger}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {current.usps.map((usp, i) => (
            <UspCard key={usp.n} usp={usp} colors={colors} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}
