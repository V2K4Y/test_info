"use client";

import { motion } from "framer-motion";

export function SectionShell({ id, eyebrow, title, subtitle, copy, children, className = "", dark = false }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 26}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden px-4 py-20 md:px-8 md:py-24 ${dark ? "border-y border-white/10 bg-zinc-950" : "bg-black"} ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        {(eyebrow || title || copy) && (
          <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} copy={copy} />
        )}
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, copy, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-5xl text-center" : "max-w-4xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl max-w-5xl">
          {subtitle}
        </h2>
      ) : null}
      {copy ? (
        <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export function StatTile({ value, label, featured = false }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className={`rounded-lg border p-5 ${
        featured
          ? "border-cyan-300/60 bg-cyan-300 text-black shadow-[0_0_40px_rgba(103,232,249,0.25)]"
          : "border-white/10 bg-white/[0.04] text-white"
      }`}
    >
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className={`mt-2 text-xs uppercase tracking-[0.18em] ${featured ? "text-black/65" : "text-zinc-500"}`}>
        {label}
      </div>
    </motion.div>
  );
}

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const rise = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};
