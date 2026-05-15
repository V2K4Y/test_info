"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent, heroStats } from "./homeData";
// ↑ move heroData.js into your @/lib/ folder and adjust the import path as needed

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.72, ease: "easeOut", delay },
});

// ─── STAT TILE ────────────────────────────────────────────────────────────────
// Mirrors .hstat / .hstat--w from the HTML exactly.
// bg: rgba(255,255,255,.04)  border: rgba(255,255,255,.09)  from CSS

function StatTile({ value, label, note, wide }) {
  return (
    <motion.div
      {...fadeUp(0.32)}
      className={`rounded-[3px] p-[1.35rem] ${wide ? "col-span-2" : ""}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        border:     "1px solid rgba(255,255,255,0.09)",
      }}
    >
      {/* .hv — Cormorant Garamond serif, sage colour */}
      <div
        className="leading-none mb-[0.3rem]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize:   "2.2rem",
          color:      "#a5f3fc",   // cyan-200
          fontWeight: 500,
        }}
      >
        {value}
      </div>

      {/* .hl — Space Mono, uppercase, muted white */}
      <div
        className="uppercase tracking-[0.07em]"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize:   "9px",
          color:      "rgba(255,255,255,0.3)",
        }}
      >
        {label}
      </div>

      {/* .hs — note text, only when present */}
      {note && (
        <p
          className="mt-[0.35rem] leading-[1.55] font-light"
          style={{
            fontSize: "11.5px",
            color:    "rgba(255,255,255,0.42)",
          }}
        >
          {note}
        </p>
      )}
    </motion.div>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const { eyebrow, headline, subtext, ctas, scripts } = heroContent;

  return (
    <section
      id="hero"
      // Full-viewport height, forest dark background, overflow hidden for the radial
      className="relative isolate overflow-hidden min-h-screen flex items-center"
      style={{ background: "#030a0f" }}   // deep cyan-tinted black
    >
      {/* ── Background image (same as provided component) ── */}
      <Image
        src="/finetune.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-45"
      />

      {/* ── Gradient overlay (same as provided component) ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 24% 18%, rgba(34,211,238,0.26), transparent 30%), " +
            "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(0,0,0,0.72), rgba(0,0,0,0.92))",
        }}
      />

      {/* ── Radial forest glow from HTML .hero::before ── */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 28% 50%, rgba(34,211,238,0.08), transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="w-full max-w-[1200px] mx-auto px-10 py-24">

        {/* .hgrid — 2-col: left copy + right stat panel */}
        <div className="grid gap-[5rem] lg:grid-cols-[1fr_0.9fr] lg:items-start">

          {/* ══ LEFT COLUMN ══ */}
          <div>

            {/* .htag — eyebrow */}
            <motion.p
              {...fadeUp(0)}
              className="uppercase tracking-[0.15em] mb-[1.75rem]"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize:   "10px",
                color:      "rgba(255,255,255,0.32)",
              }}
            >
              {eyebrow}
            </motion.p>

            {/* .hhl — main heading, Cormorant Garamond, sage italic on second line */}
            <motion.h1
              {...fadeUp(0.08)}
              className="mb-[1.5rem]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize:   "clamp(2.5rem, 5vw, 3.9rem)",
                lineHeight: 1.08,
                color:      "#ffffff",
                fontWeight: 500,
              }}
            >
              {headline[0]}
              <br />
              <em style={{ fontStyle: "italic", color: "#a5f3fc" }}>
                {headline[1]}
              </em>
            </motion.h1>

            {/* .hsub — subtext */}
            <motion.p
              {...fadeUp(0.16)}
              className="mb-[2.5rem] font-light"
              style={{
                fontSize:   "15px",
                color:      "rgba(255,255,255,0.55)",
                lineHeight: 1.82,
                maxWidth:   "52ch",
              }}
            >
              {subtext}
            </motion.p>

            {/* .hact — CTA buttons */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-4">
              {ctas.map((cta) =>
                cta.variant === "primary" ? (
                  // .btn.bp — forest3 bg
                  <a
                    key={cta.href}
                    href={cta.href}
                    className="inline-flex items-center gap-2 font-semibold tracking-[0.03em] transition-all duration-200"
                    style={{
                      fontFamily:   "'Outfit', sans-serif",
                      fontSize:     "13px",
                      padding:      "0.72rem 1.7rem",
                      borderRadius: "2px",
                      background:   "#0e4a5a",   // cyan-tinted dark
                      color:        "#ffffff",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0f6070")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0e4a5a")}
                  >
                    {cta.label}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  // .btn.bg — ghost / transparent
                  <a
                    key={cta.href}
                    href={cta.href}
                    className="inline-flex items-center font-semibold tracking-[0.03em] transition-all duration-200"
                    style={{
                      fontFamily:   "'Outfit', sans-serif",
                      fontSize:     "13px",
                      padding:      "0.72rem 1.7rem",
                      borderRadius: "2px",
                      background:   "transparent",
                      color:        "rgba(255,255,255,0.65)",
                      border:       "1px solid rgba(255,255,255,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                      e.currentTarget.style.color       = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color       = "rgba(255,255,255,0.65)";
                    }}
                  >
                    {cta.label}
                  </a>
                )
              )}
            </motion.div>

            {/* .hscripts — decorative language marquee */}
            <motion.p
              {...fadeUp(0.32)}
              className="mt-[0.85rem] leading-[1.9] select-none tracking-[0.07em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize:   "1rem",
                color:      "rgba(255,255,255,0.1)",
              }}
            >
              {scripts}
            </motion.p>
          </div>

          {/* ══ RIGHT COLUMN — stat panel ══ */}
          {/* .hpanel — 2-col grid of stat tiles */}
          <div className="grid grid-cols-2 gap-[0.85rem] pt-[0.5rem]">
            {heroStats.map((stat) => (
              <StatTile
                key={stat.label}
                value={stat.value}
                label={stat.label}
                note={stat.note}
                wide={stat.wide}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}