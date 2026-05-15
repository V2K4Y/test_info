"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "@deemlol/next-icons";

const cards = [
    {
        title: "Knowledge Systems — Curated Q&A & Reasoning Datasets",
        subtitle:
            "Human-aligned Q&A, reasoning chains, and structured knowledge graphs",
        deliverables: [
            "Deep reasoning data that helps LLMs think, not autocomplete.",
            "Domain-grounded multistep reasoning for higher accuracy.",
            "Structured knowledge graphs for grounded, explainable outputs.",
        ],
        why: "Builds models that are more accurate, explainable, and resistant to hallucinations. Ideal for agents, tutoring systems, and enterprise AI needing reliable factual grounding.",
    },
    {
        title: "STEM Data — Academic & Mathematical Corpora",
        subtitle:
            "Verified, structured STEM-based learning and computational datasets",
        deliverables: [
            "Academic STEM content with equations, derivations, and step-by-step solutions.",
            "Problem sets, symbolic reasoning, and technical writing samples.",
            "Curated scientific datasets for analytical and computational depth.",
        ],
        why: "Supports research-grade models, education platforms, and AI built for mathematical reasoning, simulations, or scientific workloads. Ensures analytical precision and consistency.",
    },
    {
        title: "Multimodal Learning — Image, Video & Audio Intelligence",
        subtitle:
            "Cross-modal datasets for perception, understanding, and sensory AI models",
        deliverables: [
            "Labeled image, video, and audio datasets.",
            "Scene understanding, action recognition, and object detection.",
            "Speech corpora, audio transcription, and text-aligned multimodal data.",
        ],
        why: "Enables next-generation AI systems that interpret reality—not just language. Essential for computer vision, VLMs, speech-to-text, agents, autonomous systems, and robotics.",
    },
    {
        title: "Healthcare AI — Clinical Imaging & Diagnostic Data",
        subtitle:
            "Quality-controlled medical imaging, diagnostics, reports & health corpora",
        deliverables: [
            "Pathology and radiology datasets with diagnostic labels.",
            "Medical transcripts, reports, care protocols.",
            "Anonymized, structured patient data.",
        ],
        why: "Designed for regulated use cases: clinical AI, predictive modeling, medical diagnostics, and healthcare automation—with ethical sourcing and compliance support.",
    },
    {
        title: "Enterprise Domains — Finance, Legal & Education Intelligence",
        subtitle:
            "Domain-specific corpora for high-regulation and enterprise use cases",
        deliverables: [
            "Legal contracts, regulatory filings, financial documents.",
            "Academic frameworks, training materials, domain Q&A.",
            "Enterprise-aligned conversational and workflow data.",
        ],
        why: "Supports enterprise AI copilots, workflow automation, compliance modeling, and intelligent business agents trained on real-world industry-grade language.",
    },
    {
        title: "Benchmarks — Evaluation, Alignment & Factuality Scoring",
        subtitle:
            "Standardized evaluation datasets to measure performance, truthfulness, and robustness",
        deliverables: [
            "Benchmark suites for reasoning, alignment, and truthfulness.",
            "Factuality scoring, toxicity filtering, instruction-following tests.",
            "Evaluation workflows for enterprise-grade AI.",
        ],
        why: "Ensures your model performs reliably before deployment. Helps enterprises validate accuracy, safety, and governance across scalable applications.",
    },
];

export default function RequestDatasetSection() {
    const [active, setActive] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (!active) return;

        // Strong, cross-browser scroll lock:
        const scrollY = window.scrollY || window.pageYOffset;
        const originalStyles = {
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width,
        };
        const originalScrollBehavior =
            document.documentElement.style.scrollBehavior || null;

        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        return () => {
            document.body.style.position = originalStyles.position;
            document.body.style.top = originalStyles.top;
            document.body.style.width = originalStyles.width;
            window.scrollTo(0, scrollY);
            if (originalScrollBehavior === null) {
                document.documentElement.style.removeProperty("scroll-behavior");
            } else {
                document.documentElement.style.scrollBehavior = originalScrollBehavior;
            }
        };
    }, [active]);

    // Close "Request Dataset" modal on Escape
    useEffect(() => {
        if (!active) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setActive(false);
                setSelectedCard(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [active]);

    return (
        <section className="relative flex justify-center px-6 py-16 overflow-hidden">
            {/* Optional dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

            {/* Foreground content */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Request Dataset
                </h2>
                <div className="mt-3 h-1 w-24 rounded-full bg-white/30" />

                <div className="mt-10 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, idx) => (
                        <Card
                            onClick={() => {
                                setSelectedCard(card);
                                setActive(true);
                            }}
                            key={idx}
                            className="rounded-2xl border border-white/10 bg-black/70 px-6 py-6 
                   shadow-[0_0_40px_rgba(0,0,0,0.75)] transition-all 
                   hover:border-white/40 hover:-translate-y-1 border-b-4"
                        >
                            <p className="flex items-center justify-between text-sm font-medium leading-relaxed text-zinc-100">
                                <span>{card.title}</span>
                                <ArrowUpRight className="h-4 w-4 shrink-0" />
                            </p>
                        </Card>
                    ))}
                </div>

                {active && selectedCard && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 py-8"
                        onClick={() => {
                            setActive(false);
                            setSelectedCard(null);
                        }}
                    >
                        <div
                            ref={modalRef}
                            className="relative w-full max-w-lg md:max-w-3xl rounded-2xl bg-zinc-950 border border-white/10 p-5 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.9)] text-left max-h-[80vh] md:max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 ios-scroll"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setActive(false);
                                    setSelectedCard(null);
                                }}
                                className="absolute right-5 top-5 text-zinc-400 hover:text-white text-sm"
                            >
                                ✕
                            </button>
                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                {selectedCard.title}
                            </h3>
                            <p className="mt-2 text-sm text-zinc-300">
                                {selectedCard.subtitle}
                            </p>

                            <div className="mt-6">
                                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    What This Delivers
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                                    {selectedCard.deliverables.map((item) => (
                                        <li key={item} className="leading-relaxed">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 rounded-xl border border-white/10 bg-black/70 p-4">
                                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                    Why It Matters
                                </h4>
                                <p className="mt-2 text-sm text-zinc-200 leading-relaxed">
                                    {selectedCard.why}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
