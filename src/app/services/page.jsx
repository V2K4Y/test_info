// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const sectionMeta = [
//   { id: "data-collection", number: "1", label: "Data Labeling Services" },
//   { id: "data-annotation", number: "2", label: "AI Data Curation" },
//   { id: "model-evaluation", number: "3", label: "LLM Factuality Evaluation" },
//   { id: "custom-solutions", number: "4", label: "NLP & Speech Data" },
// ];

// const serviceFaqs = [
//   {
//     q: "What types of data labeling services does InfoBay.AI offer?",
//     a: "InfoBay.AI provides end-to-end data labeling for images, video, audio, text, 3D data, and multimodal pipelines. All annotation is human-in-the-loop validated with multi-tier quality assurance, making outputs ready for vision, NLP, speech, and custom ML models.",
//   },
//   {
//     q: "How does InfoBay.AI handle RLHF and SFT dataset design?",
//     a: "We build custom curation pipelines tailored to your post-training workflow — including SFT instruction datasets with explicit reasoning traces, RLHF preference data annotated by domain experts (attorneys, physicians, engineers), and benchmark-aligned evaluation datasets. Every dataset is delivered in HuggingFace-compatible formats.",
//   },
//   {
//     q: "What is LLM factuality evaluation and why does it matter?",
//     a: "LLM factuality evaluation is the process of verifying, red-teaming, and fine-tuning language models to reduce hallucinations and harmful bias. InfoBay runs multi-layer fact-checking loops, cross-source accuracy checks, and continuous feedback cycles back into RLHF training — ensuring your model outputs are accurate and production-ready.",
//   },
//   {
//     q: "Which languages does InfoBay.AI support for NLP and ASR services?",
//     a: "InfoBay supports 57+ languages including English, Arabic, French, Swahili, Nepali, Bengali, Bahasa Indonesia, Hindi, and 35+ additional languages. Our 2.1M+ hour multilingual audio corpus includes dual-channel call center data — the gold standard for ASR and speaker diarization training.",
//   },
//   {
//     q: "Is InfoBay.AI compliant with HIPAA, GDPR, and the EU AI Act?",
//     a: "Yes. All healthcare datasets are de-identified at source with automated PII detection. Audio data is collected via formal enterprise agreements with documented provenance chains. Every dataset ships with a Data Card in EU AI Act Article 10 format — covering data source, lineage, and compliance documentation.",
//   },
//   {
//     q: "How quickly can InfoBay.AI start a custom data project?",
//     a: "Standard annotation projects can begin within days of scope alignment. Custom corpus collection and curation timelines depend on language, domain, and volume — typically 2–6 weeks for initial delivery. Request a Model Quality Audit to get a precise timeline for your requirements.",
//   },
//   {
//     q: "What delivery formats does InfoBay.AI support?",
//     a: "Audio: WAV/FLAC + JSON transcripts + RTTM diarisation + Metadata CSV. Textbooks: JSONL (gzip) + Parquet metadata manifest + HuggingFace-compatible. Healthcare: DICOM + PDF + anonymised metadata. Coding: JSONL per language + problem taxonomy JSON. All formats are compatible with Megatron-LM, NeMo, LLaMA-Factory, and HuggingFace datasets.",
//   },
//   {
//     q: "Can we license specific language subsets or domain slices from InfoBay.AI?",
//     a: "Yes. The corpus is structured by language, domain, and category — licenses can be scoped to any combination such as Arabic + Legal, Bahasa + Engineering, or Nepali + Call Center Audio. Minimum license volumes apply. Contact us to discuss your specific requirements.",
//   },
// ];

// const Services = () => {
//   const [activeId, setActiveId] = useState(sectionMeta[0].id);

//   const router = useRouter();

//   const handleScrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.35 }
//     );

//     sectionMeta.forEach((s) => {
//       const el = document.getElementById(s.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <main className="min-h-screen bg-black text-white">
//       <section className="mx-auto flex max-w-6xl gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 py-12 md:py-16 lg:py-20">
//         {/* Left: vertical markers (desktop) */}
//         <div className="hidden md:block w-40">
//           <div className="sticky top-20">
//             <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
//               {sectionMeta.map((s, idx) => (
//                 <React.Fragment key={s.id}>
//                   <button
//                     type="button"
//                     onClick={() => handleScrollTo(s.id)}
//                     className="relative flex flex-col items-center group"
//                   >
//                     <span
//                       className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${activeId === s.id
//                         ? "bg-white text-black shadow-[0_0_18px_rgba(255,255,255,0.45)]"
//                         : "border border-zinc-500/80 text-zinc-300 group-hover:border-white group-hover:text-white"
//                         }`}
//                     >
//                       {s.number}
//                     </span>
//                     <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400 text-center">
//                       {s.label}
//                     </span>
//                   </button>

//                   {/* connecting line */}
//                   {idx < sectionMeta.length - 1 && (
//                     <div className="h-20 w-px bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800" />
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right: content sections */}
//         <div className="flex-1 space-y-16 md:space-y-20 lg:space-y-24">
//           {/* 1. Data Labeling */}
//           <section id="data-collection" className=" relative scroll-mt-24 ">
//             <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
//               {/* Section label */}
//               <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
//                 Data Labeling — AI Annotation Services
//               </p>

//               {/* Hero row */}
//               <div className="mt-2 grid gap-6 md:gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
//                 {/* Left: title + intro */}
//                 <div>
//                   <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
//                     Enterprise Data Labeling Services for AI & Machine Learning
//                   </h1>
//                   <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
//                     InfoBay's enterprise data
//                     labeling services combine
//                     AI-accelerated annotation
//                     with expert human
//                     oversight — delivering
//                     scalable, precise training
//                     data for machine learning,
//                     NLP, vision, and
//                     multimodal AI pipelines.
//                   </p>

//                   {/* Quick highlight chips */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Human-in-the-Loop
//                       Annotation
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Multimodal Data Labeling
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Enterprise-Grade Quality
//                       Assurance
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => router.push("/#contact")}
//                     className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
//                   >
//                     Talk to Us About Data Labeling
//                   </button>
//                 </div>

//                 {/* Right: compact stats card */}
//                 <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
//                   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
//                     AI Data Labeling at
//                     Production Scale
//                   </p>
//                   <ul className="mt-3 space-y-2 text-sm text-zinc-200">
//                     <li>
//                       • Images, video, audio, text,
//                       3D
//                       data &amp; multimodal data.
//                     </li>
//                     <li>• AI-accelerated annotation
//                       pipelines with expert
//                       human reviewer</li>
//                     <li>
//                       • Ready for vision, NLP, speech &amp; custom models.
//                     </li>
//                   </ul>
//                   <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Quality
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         Multi-tier QA
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Human-in-the-loop validation
//                       </p>
//                     </div>
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Scale
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         Fast &amp; Cost-Effective
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Built for frontier model pipelines
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Why InfoBay as feature cards */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Why InfoBay Excels in Data Labeling
//                 </h3>
//                 <div className="mt-4 grid gap-4 md:grid-cols-2">
//                   {[
//                     {
//                       title: "AI-Augmented Data Annotation",
//                       body: "Harness advanced automation to speed up labeling while minimizing errors for superior data quality.",
//                     },
//                     {
//                       title: "Mutimodal & Text Data Labeling Support",
//                       body: "Support for images, video, audio, text, 3D, and complex multimodal labeling tasks.",
//                     },
//                     {
//                       title: "Training-Ready Annotation Outputs for ML Models",
//                       body: "Structured, high-fidelity annotations designed to boost accuracy, pattern recognition, and generalization.",
//                     },
//                     {
//                       title: "Seamless Integration with AI & ML pipelines",
//                       body: "Annotations are ready to plug into vision, NLP, speech, and custom AI pipelines.",
//                     },
//                     {
//                       title: "Massive Scale, Reliable Quality",
//                       body: "AI-powered workflows plus human-in-the-loop validation deliver fast, cost-effective scale.",
//                     },
//                     {
//                       title: "Enterprise-Grade Assurance",
//                       body: "Multi-tier quality checks ensure consistent reliability and compliance across all label sets.",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.title}
//                       className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]"
//                     >
//                       <h4 className="text-[13px] font-semibold text-white">
//                         {item.title}
//                       </h4>
//                       <p className="mt-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                         {item.body}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Workflow as a stepper */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Our Data Labeling Workflow
//                 </h3>

//                 <div className="mt-4 grid gap-4 md:grid-cols-4">
//                   {[
//                     {
//                       step: "01",
//                       title: "Define & Design",
//                       body: "Collaborate on scope, annotation guidelines, and workflow architecture.",
//                     },
//                     {
//                       step: "02",
//                       title: "Automate & Annotate",
//                       body: "Deploy AI tools to accelerate tagging with specialist reviewers.",
//                     },
//                     {
//                       step: "03",
//                       title: "Validate & Refine",
//                       body: "Multi-level quality assurance with layered validation protocols.",
//                     },
//                     {
//                       step: "04",
//                       title: "Scale & Deliver",
//                       body: "Adaptable automation and expert oversight for rapid, reliable delivery.",
//                     },
//                   ].map((item, idx) => (
//                     <div
//                       key={item.step}
//                       className="relative rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">
//                           {item.step}
//                         </span>
//                         <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                           {item.title}
//                         </span>
//                       </div>
//                       <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                         {item.body}
//                       </p>

//                       {idx < 3 && (
//                         <div className="hidden md:block absolute -right-4 top-6 h-px w-8 bg-zinc-700" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* 2. Data Curation */}
//           <section id="data-annotation" className="scroll-mt-24">
//             <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
//               {/* Section label */}
//               <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
//                 Service 2 · Data Curation — Custom AI Dataset Pipelines
//               </p>

//               {/* Hero row */}
//               <div className="mt-2 grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
//                 {/* Left: title + intro */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
//                     Custom AI Data Curation — SFT, RLHF & Benchmark Dataset
//                     Pipelines
//                   </h2>
//                   <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
//                     Build and scale custom AI
//                     data curation pipelines for
//                     post-training workflows —
//                     including SFT dataset
//                     design, RLHF training
//                     data, coding benchmarks,
//                     STEM reasoning
//                     datasets, and multimodal
//                     data collection.
//                   </p>

//                   {/* Highlight chips */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Custom Data Pipelines
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Human-in-the-loop (HITL) Validation
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Multimodal Dataset Ready
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => router.push("/?scroll=contact")}
//                     className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
//                   >
//                     Talk to Us About Data Curation
//                   </button>
//                 </div>

//                 {/* Right: compact stats / overview card */}
//                 <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
//                   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
//                     Curation for Modern AI
//                   </p>
//                   <ul className="mt-3 space-y-2 text-sm text-zinc-200">
//                     <li>
//                       • Bespoke data pipelines for pre-training and
//                       post-training.
//                     </li>
//                     <li>
//                       • RL, coding, STEM, multimodal &amp; enterprise domains.
//                     </li>
//                     <li>
//                       • Continuous improvement with synthetic &amp; augmented
//                       data.
//                     </li>
//                   </ul>
//                   <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Formats
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         Text · Image · Video
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Audio, 3D &amp; domain content
//                       </p>
//                     </div>
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Use Cases
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         SFT · RLHF · RL
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Benchmarks &amp; eval datasets
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Why InfoBay as feature cards */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Why Choose InfoBay for Data Curation
//                 </h3>
//                 <div className="mt-4 grid gap-4 md:grid-cols-2">
//                   {[
//                     {
//                       title: "Custom-Tailored AI Data Curation Workflows",
//                       body: "Design data capture processes, annotation rubrics, and simulation environments aligned precisely with your AI objectives.",
//                     },
//                     {
//                       title: "Expert-Driven Data Validation & QA",
//                       body: "Blend AI automation with domain experts for rigorous data cleaning, labeling, and multi-layer quality assurance.",
//                     },
//                     {
//                       title: "Synthetic Data Augmentation & Automation",
//                       body: "Use synthetic generation and automation to expand rare cases, balance datasets, and improve robustness.",
//                     },
//                     {
//                       title: "Rapid Deployment & Scaling",
//                       body: "Launch adaptable data pipelines quickly and scale them to match evolving research requirements and volume.",
//                     },
//                     {
//                       title: "Diverse Data Formats",
//                       body: "Process images, video, audio, text, 3D, and specialized domain content within a unified curation framework.",
//                     },
//                     {
//                       title: "Research-Ready SFT & RLHF Dataset Outputs",
//                       body: "Deliver structured, benchmark-aligned datasets ready for fine-tuning, RLHF, and advanced reasoning tasks.",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.title}
//                       className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]"
//                     >
//                       <h4 className="text-[13px] font-semibold text-white">
//                         {item.title}
//                       </h4>
//                       <p className="mt-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                         {item.body}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Workflow as stepper */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Our Data Curation Process
//                 </h3>

//                 <div className="mt-4 grid gap-4 md:grid-cols-3">
//                   {[
//                     {
//                       step: "01",
//                       title: "Collaborate & Design",
//                       body: "Align on goals, benchmarks, and custom pipeline architecture tailored to your research roadmap.",
//                     },
//                     {
//                       step: "02",
//                       title: "Orchestrate & Validate",
//                       body: "Generate, annotate, and validate data using AI agents and human-in-the-loop checks for robust quality.",
//                     },
//                     {
//                       step: "03",
//                       title: "Scale & Optimize",
//                       body: "Automate workflows, enrich with synthetic data, and continuously refine dataset quality and model readiness.",
//                     },
//                   ].map((item, idx) => (
//                     <div
//                       key={item.step}
//                       className="relative rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">
//                           {item.step}
//                         </span>
//                         <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                           {item.title}
//                         </span>
//                       </div>
//                       <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                         {item.body}
//                       </p>

//                       {idx < 2 && (
//                         <div className="hidden md:block absolute -right-4 top-6 h-px w-8 bg-zinc-700" />
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl">
//                   Kickstart your AI initiatives with InfoBay’s high-quality
//                   curated datasets, optimized for supervised fine-tuning,
//                   reinforcement learning with human feedback, and advanced
//                   reasoning tasks.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* 3. LLM Factuality */}
//           <section id="model-evaluation" className="scroll-mt-24">
//             <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
//               {/* Section label */}
//               <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
//                 Service 3 · LLM Factuality Evaluation & Hallucination Reduction
//               </p>

//               {/* Hero row */}
//               <div className="mt-2 grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
//                 {/* Left: title + intro */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
//                     LLM Factuality Evaluation
//                     — Hallucination
//                     Reduction & Bias
//                     Mitigation Services
//                   </h2>
//                   <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
//                     Close the loop on LLM
//                     hallucination and bias.
//                     InfoBay's factuality
//                     evaluation services verify,
//                     red-team, and fine-tune
//                     large language models to
//                     ensure accurate,
//                     unbiased, production-
//                     ready outputs — with
//                     continuous feedback
//                     loops back into RLHF
//                     training.
//                   </p>

//                   {/* Highlight chips */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       LLM Fact-Checking Loops
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Bias Detection & Mitigation
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       LLM Production Monitoring
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => router.push("/?scroll=contact")}
//                     className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
//                   >
//                     Talk to Us About LLM Factuality
//                   </button>
//                 </div>

//                 {/* Right: compact stats / overview card */}
//                 <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
//                   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
//                     Guardrails for Large Language Models
//                   </p>
//                   <ul className="mt-3 space-y-2 text-sm text-zinc-200">
//                     <li>
//                       • Multi-layer factuality checks on critical workflows.
//                     </li>
//                     <li>
//                       • Bias and hallucination reduction for safer outputs.
//                     </li>
//                     <li>
//                       • Continuous feedback loops back into training and tuning.
//                     </li>
//                   </ul>
//                   <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Focus
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         Truthfulness &amp; Safety
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Reduce hallucinations and harmful bias
//                       </p>
//                     </div>
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Coverage
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         Pre · Post · Prod
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Eval, fine-tuning &amp; live monitoring
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Why InfoBay as feature cards */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Why Choose InfoBay for LLM Factuality Optimization
//                 </h3>
//                 <div className="mt-4 grid gap-4 md:grid-cols-2">
//                   {[
//                     {
//                       title: "Multi-Layered LLM Fact Verification",
//                       body: "Structured fact-checking loops rigorously validate AI-generated content across multiple passes and reviewers.",
//                     },
//                     {
//                       title: "LLM Bias & Misinformation Mitigation",
//                       body: "Detect and reduce harmful biases and misleading patterns to improve trustworthiness and safety.",
//                     },
//                     {
//                       title: "Cross-Source Accuracy Checks",
//                       body: "Leverage multiple trusted reference sources to verify consistency, correctness, and completeness.",
//                     },
//                     {
//                       title: "LLM Truthfulness & Groundedness Optimization",
//                       body: "Enhance reasoning quality, groundedness, and stability across diverse prompts and deployment contexts.",
//                     },
//                     {
//                       title: "Scalable Validation Pipelines",
//                       body: "Combine AI-assisted automation with human experts for high-precision, high-throughput factuality assurance.",
//                     },
//                     {
//                       title: "Enterprise-Grade LLM Safety & Integrity",
//                       body: "Uphold transparency, governance, and compliance standards that satisfy demanding enterprise requirements.",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.title}
//                       className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]"
//                     >
//                       <h4 className="text-[13px] font-semibold text-white">
//                         {item.title}
//                       </h4>
//                       <p className="mt-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                         {item.body}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Workflow as stepper */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Our Continuous Factuality Process
//                 </h3>

//                 <div className="mt-4 grid gap-4 md:grid-cols-4">
//                   {[
//                     {
//                       step: "01",
//                       title: "Validate",
//                       body: "Run multi-level factual checks and bias screenings on model outputs across priority use cases.",
//                     },
//                     {
//                       step: "02",
//                       title: "Fine-Tune",
//                       body: "Feed verified data, red-team findings, and curated feedback back into training and alignment loops.",
//                     },
//                     {
//                       step: "03",
//                       title: "Deploy",
//                       body: "Ship updated, validated LLMs into production with stronger truthfulness and safety guarantees.",
//                     },
//                     {
//                       step: "04",
//                       title: "Monitor & Iterate",
//                       body: "Track factuality metrics and bias indicators, triggering continuous refinements as behavior drifts.",
//                     },
//                   ].map((item, idx) => (
//                     <div
//                       key={item.step}
//                       className="relative rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">
//                           {item.step}
//                         </span>
//                         <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                           {item.title}
//                         </span>
//                       </div>
//                       <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                         {item.body}
//                       </p>

//                       {idx < 3 && (
//                         <div className="hidden md:block absolute -right-4 top-6 h-px w-8 bg-zinc-700" />
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl">
//                   Start your journey to trustable, high-integrity models with
//                   InfoBay’s expert-driven factuality validation and optimization
//                   solutions.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* 4. NLP & Speech Solutions */}
//           <section id="custom-solutions" className="scroll-mt-24">
//             <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
//               {/* Section label */}
//               <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
//                 Service 4 · NLP &amp; Speech Data Solutions — ASR, TTS & NER
//               </p>

//               {/* Hero row */}
//               <div className="mt-2 grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
//                 {/* Left: title + intro */}
//                 <div>
//                   <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
//                     Natural Language Processing &amp; Voice Solutions
//                   </h2>
//                   <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
//                     Harness human language
//                     and voice data with
//                     InfoBay's NLP and speech
//                     data services — including
//                     ASR training data, TTS
//                     systems, named entity
//                     recognition, sentiment
//                     analysis, and multilingual
//                     chatbot development
//                     across Indic and global
//                     languages.
//                   </p>

//                   {/* Highlight chips */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Text Analytics & Intelligence
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Conversational AI & Chatbot Data
//                     </span>
//                     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
//                       Speech Recognition &amp; Voice AI
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => router.push("/?scroll=contact")}
//                     className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
//                   >
//                     Talk to Us About NLP &amp; Voice
//                   </button>
//                 </div>

//                 {/* Right: stack/overview card */}
//                 <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
//                   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
//                     End-to-End Language Stack
//                   </p>
//                   <ul className="mt-3 space-y-2 text-sm text-zinc-200">
//                     <li>
//                       • Text analytics, chatbots, translation, NER, TTS &amp;
//                       ASR.
//                     </li>
//                     <li>
//                       • Multilingual support across major global and Indic
//                       languages.
//                     </li>
//                     <li>
//                       • Built to plug into existing products, CRMs, and data
//                       platforms.
//                     </li>
//                   </ul>
//                   <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Channels
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         Web · App · Voice
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Chat, IVR, email, support desks
//                       </p>
//                     </div>
//                     <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
//                       <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
//                         Use Cases
//                       </div>
//                       <div className="mt-1 text-sm font-semibold text-white">
//                         CX · Analytics · Automation
//                       </div>
//                       <p className="mt-1 text-[11px] text-zinc-400">
//                         Insights, copilots &amp; assistants
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Text intelligence as feature cards */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Text Intelligence
//                 </h3>

//                 <div className="mt-4 grid gap-4 md:grid-cols-2">
//                   {/* Text & Sentiment Analysis */}
//                   <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
//                     <h4 className="text-[13px] font-semibold text-white">
//                       Text &amp; Sentiment Analysis Services
//                     </h4>
//                     <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                       <li>
//                         • Extract opinions, emotions, and trends from diverse
//                         textual sources.
//                       </li>
//                       <li>
//                         • Use advanced sentiment models to classify feedback as
//                         positive, negative, or neutral.
//                       </li>
//                       <li>
//                         • Identify patterns and topics that drive smarter,
//                         data-driven decisions.
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Chatbots / Assistants */}
//                   <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
//                     <h4 className="text-[13px] font-semibold text-white">
//                       Custom Chatbots &amp; Virtual Assistant Development
//                     </h4>
//                     <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                       <li>
//                         • Build intelligent agents that understand intent and
//                         respond with context-aware answers.
//                       </li>
//                       <li>
//                         • Tailor workflows, tone, and personality to your domain
//                         with ongoing optimization.
//                       </li>
//                       <li>
//                         • Automate support, reduce response times, and improve
//                         customer engagement.
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Translation */}
//                   <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
//                     <h4 className="text-[13px] font-semibold text-white">
//                       Multilingual Language Translation Services
//                     </h4>
//                     <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                       <li>
//                         • Deliver high-quality translations across languages and
//                         cultural contexts.
//                       </li>
//                       <li>
//                         • Use manual, automated, or hybrid approaches enhanced
//                         by advanced NLP.
//                       </li>
//                       <li>
//                         • Enable effective global communication and improved
//                         customer satisfaction.
//                       </li>
//                     </ul>
//                   </div>

//                   {/* NER */}
//                   <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
//                     <h4 className="text-[13px] font-semibold text-white">
//                       Named Entity Recognition (NER) Services
//                     </h4>
//                     <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                       <li>
//                         • Extract people, organizations, locations, dates, and
//                         more from unstructured text.
//                       </li>
//                       <li>
//                         • Power information retrieval, summarization, and
//                         question-answering systems.
//                       </li>
//                       <li>
//                         • Customize models for domain-specific accuracy and
//                         relevance.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Speech & Voice as dedicated row */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                   Speech &amp; Voice Technologies
//                 </h3>

//                 <div className="mt-4 grid gap-4 md:grid-cols-2">
//                   {/* TTS */}
//                   <div className="rounded-2xl border border-white/10 bg-black/75 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
//                     <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                       Text-to-Speech (TTS) — Multilingual Voice Synthesis
//                     </h4>
//                     <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                       <li>
//                         • Convert written text into natural-sounding, expressive
//                         speech.
//                       </li>
//                       <li>
//                         • Support multiple languages, voices, and tones for
//                         assistants, media, and messaging.
//                       </li>
//                       <li>
//                         • Create engaging voice experiences that enhance
//                         accessibility and brand presence.
//                       </li>
//                     </ul>
//                   </div>

//                   {/* ASR */}
//                   <div className="rounded-2xl border border-white/10 bg-black/75 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
//                     <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
//                       Automatic Speech Recognition (ASR) — Multilingual & Accented Speech
//                     </h4>
//                     <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
//                       <li>
//                         • Accurately transcribe spoken language into text—even
//                         in noisy, real-world conditions.
//                       </li>
//                       <li>
//                         • Ideal for note-taking, transcription, voice commands,
//                         accessibility, and analytics.
//                       </li>
//                       <li>
//                         • Support real-time and batch transcription across
//                         languages and accents.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl">
//                   InfoBay partners closely with clients to craft tailored NLP
//                   and voice solutions that integrate seamlessly into existing
//                   workflows. From data collection and cleaning to deployment and
//                   continuous improvement, our end-to-end services empower your
//                   business with powerful language and speech intelligence.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Services;


"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ─── NAVIGATION META ──────────────────────────────────────────────────────────
const sectionMeta = [
  { id: "data-collection", number: "1", label: "Data Labeling Services" },
  { id: "data-annotation",  number: "2", label: "AI Data Curation" },
  { id: "model-evaluation", number: "3", label: "LLM Factuality Evaluation" },
  { id: "custom-solutions", number: "4", label: "NLP & Speech Data" },
  { id: "faq",              number: "5", label: "FAQs" },
];

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const serviceFaqs = [
  {
    q: "What types of data labeling services does InfoBay.AI offer?",
    a: "InfoBay.AI provides end-to-end data labeling for images, video, audio, text, 3D data, and multimodal pipelines. All annotation is human-in-the-loop validated with multi-tier quality assurance, making outputs ready for vision, NLP, speech, and custom ML models.",
  },
  {
    q: "How does InfoBay.AI handle RLHF and SFT dataset design?",
    a: "We build custom curation pipelines tailored to your post-training workflow — including SFT instruction datasets with explicit reasoning traces, RLHF preference data annotated by domain experts (attorneys, physicians, engineers), and benchmark-aligned evaluation datasets. Every dataset is delivered in HuggingFace-compatible formats.",
  },
  {
    q: "What is LLM factuality evaluation and why does it matter?",
    a: "LLM factuality evaluation is the process of verifying, red-teaming, and fine-tuning language models to reduce hallucinations and harmful bias. InfoBay runs multi-layer fact-checking loops, cross-source accuracy checks, and continuous feedback cycles back into RLHF training — ensuring your model outputs are accurate and production-ready.",
  },
  {
    q: "Which languages does InfoBay.AI support for NLP and ASR services?",
    a: "InfoBay supports 57+ languages including English, Arabic, French, Swahili, Nepali, Bengali, Bahasa Indonesia, Hindi, and 35+ additional languages. Our 2.1M+ hour multilingual audio corpus includes dual-channel call center data — the gold standard for ASR and speaker diarization training.",
  },
  {
    q: "Is InfoBay.AI compliant with HIPAA, GDPR, and the EU AI Act?",
    a: "Yes. All healthcare datasets are de-identified at source with automated PII detection. Audio data is collected via formal enterprise agreements with documented provenance chains. Every dataset ships with a Data Card in EU AI Act Article 10 format — covering data source, lineage, and compliance documentation.",
  },
  {
    q: "How quickly can InfoBay.AI start a custom data project?",
    a: "Standard annotation projects can begin within days of scope alignment. Custom corpus collection and curation timelines depend on language, domain, and volume — typically 2–6 weeks for initial delivery. Request a Model Quality Audit to get a precise timeline for your requirements.",
  },
  {
    q: "What delivery formats does InfoBay.AI support?",
    a: "Audio: WAV/FLAC + JSON transcripts + RTTM diarisation + Metadata CSV. Textbooks: JSONL (gzip) + Parquet metadata manifest + HuggingFace-compatible. Healthcare: DICOM + PDF + anonymised metadata. Coding: JSONL per language + problem taxonomy JSON. All formats are compatible with Megatron-LM, NeMo, LLaMA-Factory, and HuggingFace datasets.",
  },
  {
    q: "Can we license specific language subsets or domain slices from InfoBay.AI?",
    a: "Yes. The corpus is structured by language, domain, and category — licenses can be scoped to any combination such as Arabic + Legal, Bahasa + Engineering, or Nepali + Call Center Audio. Minimum license volumes apply. Contact us to discuss your specific requirements.",
  },
];

// ─── FAQ ACCORDION ITEM ───────────────────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white leading-snug">
          {q}
        </span>
        <span
          className={`shrink-0 flex items-center justify-center h-6 w-6 rounded-full border border-zinc-600 text-zinc-400 text-sm transition-transform duration-200 ${
            open ? "rotate-45 border-white text-white" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-zinc-300 leading-relaxed border-t border-white/10 pt-4">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── MAIN SERVICES PAGE ───────────────────────────────────────────────────────
const Services = () => {
  const [activeId, setActiveId] = useState(sectionMeta[0].id);
  const router = useRouter();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sectionMeta.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-6xl gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 py-12 md:py-16 lg:py-20">

        {/* ── Left sticky nav ── */}
        <div className="hidden md:block w-40">
          <div className="sticky top-20">
            <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
              {sectionMeta.map((s, idx) => (
                <React.Fragment key={s.id}>
                  <button
                    type="button"
                    onClick={() => handleScrollTo(s.id)}
                    className="relative flex flex-col items-center group"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                        activeId === s.id
                          ? "bg-white text-black shadow-[0_0_18px_rgba(255,255,255,0.45)]"
                          : "border border-zinc-500/80 text-zinc-300 group-hover:border-white group-hover:text-white"
                      }`}
                    >
                      {s.number}
                    </span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400 text-center">
                      {s.label}
                    </span>
                  </button>
                  {idx < sectionMeta.length - 1 && (
                    <div className="h-20 w-px bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right content ── */}
        <div className="flex-1 space-y-16 md:space-y-20 lg:space-y-24">

          {/* ════════════════════════════════════════
              1. DATA LABELING
          ════════════════════════════════════════ */}
          <section id="data-collection" className="relative scroll-mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
                Data Labeling — AI Annotation Services
              </p>

              <div className="mt-2 grid gap-6 md:gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Enterprise Data Labeling Services for AI & Machine Learning
                  </h1>
                  <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    InfoBay's enterprise data labeling services combine AI-accelerated annotation
                    with expert human oversight — delivering scalable, precise training data for
                    machine learning, NLP, vision, and multimodal AI pipelines.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Human-in-the-Loop Annotation", "Multimodal Data Labeling", "Enterprise-Grade Quality Assurance"].map((chip) => (
                      <span key={chip} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/#contact")}
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
                  >
                    Talk to Us About Data Labeling
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    AI Data Labeling at Production Scale
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                    <li>• Images, video, audio, text, 3D data &amp; multimodal data.</li>
                    <li>• AI-accelerated annotation pipelines with expert human reviewer.</li>
                    <li>• Ready for vision, NLP, speech &amp; custom models.</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Quality</div>
                      <div className="mt-1 text-sm font-semibold text-white">Multi-tier QA</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Human-in-the-loop validation</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Scale</div>
                      <div className="mt-1 text-sm font-semibold text-white">Fast &amp; Cost-Effective</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Built for frontier model pipelines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Why InfoBay Excels in Data Labeling
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    { title: "AI-Augmented Data Annotation", body: "Harness advanced automation to speed up labeling while minimizing errors for superior data quality." },
                    { title: "Multimodal & Text Data Labeling Support", body: "Support for images, video, audio, text, 3D, and complex multimodal labeling tasks." },
                    { title: "Training-Ready Annotation Outputs for ML Models", body: "Structured, high-fidelity annotations designed to boost accuracy, pattern recognition, and generalization." },
                    { title: "Seamless Integration with AI & ML Pipelines", body: "Annotations are ready to plug into vision, NLP, speech, and custom AI pipelines." },
                    { title: "Massive Scale, Reliable Quality", body: "AI-powered workflows plus human-in-the-loop validation deliver fast, cost-effective scale." },
                    { title: "Enterprise-Grade Assurance", body: "Multi-tier quality checks ensure consistent reliability and compliance across all label sets." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                      <h4 className="text-[13px] font-semibold text-white">{item.title}</h4>
                      <p className="mt-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Our Data Labeling Workflow
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-4">
                  {[
                    { step: "01", title: "Define & Design",    body: "Collaborate on scope, annotation guidelines, and workflow architecture." },
                    { step: "02", title: "Automate & Annotate", body: "Deploy AI tools to accelerate tagging with specialist reviewers." },
                    { step: "03", title: "Validate & Refine",  body: "Multi-level quality assurance with layered validation protocols." },
                    { step: "04", title: "Scale & Deliver",    body: "Adaptable automation and expert oversight for rapid, reliable delivery." },
                  ].map((item, idx) => (
                    <div key={item.step} className="relative rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.8)]">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">{item.step}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{item.title}</span>
                      </div>
                      <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">{item.body}</p>
                      {idx < 3 && <div className="hidden md:block absolute -right-4 top-6 h-px w-8 bg-zinc-700" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════
              2. DATA CURATION
          ════════════════════════════════════════ */}
          <section id="data-annotation" className="scroll-mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
                Service 2 · Data Curation — Custom AI Dataset Pipelines
              </p>

              <div className="mt-2 grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Custom AI Data Curation — SFT, RLHF & Benchmark Dataset Pipelines
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    Build and scale custom AI data curation pipelines for post-training workflows —
                    including SFT dataset design, RLHF training data, coding benchmarks, STEM
                    reasoning datasets, and multimodal data collection.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Custom Data Pipelines", "Human-in-the-loop (HITL) Validation", "Multimodal Dataset Ready"].map((chip) => (
                      <span key={chip} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/?scroll=contact")}
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
                  >
                    Talk to Us About Data Curation
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Curation for Modern AI</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                    <li>• Bespoke data pipelines for pre-training and post-training.</li>
                    <li>• RL, coding, STEM, multimodal &amp; enterprise domains.</li>
                    <li>• Continuous improvement with synthetic &amp; augmented data.</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Formats</div>
                      <div className="mt-1 text-sm font-semibold text-white">Text · Image · Video</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Audio, 3D &amp; domain content</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Use Cases</div>
                      <div className="mt-1 text-sm font-semibold text-white">SFT · RLHF · RL</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Benchmarks &amp; eval datasets</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Why Choose InfoBay for Data Curation
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    { title: "Custom-Tailored AI Data Curation Workflows",   body: "Design data capture processes, annotation rubrics, and simulation environments aligned precisely with your AI objectives." },
                    { title: "Expert-Driven Data Validation & QA",           body: "Blend AI automation with domain experts for rigorous data cleaning, labeling, and multi-layer quality assurance." },
                    { title: "Synthetic Data Augmentation & Automation",     body: "Use synthetic generation and automation to expand rare cases, balance datasets, and improve robustness." },
                    { title: "Rapid Deployment & Scaling",                   body: "Launch adaptable data pipelines quickly and scale them to match evolving research requirements and volume." },
                    { title: "Diverse Data Formats",                         body: "Process images, video, audio, text, 3D, and specialized domain content within a unified curation framework." },
                    { title: "Research-Ready SFT & RLHF Dataset Outputs",   body: "Deliver structured, benchmark-aligned datasets ready for fine-tuning, RLHF, and advanced reasoning tasks." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                      <h4 className="text-[13px] font-semibold text-white">{item.title}</h4>
                      <p className="mt-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Our Data Curation Process</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    { step: "01", title: "Collaborate & Design",   body: "Align on goals, benchmarks, and custom pipeline architecture tailored to your research roadmap." },
                    { step: "02", title: "Orchestrate & Validate", body: "Generate, annotate, and validate data using AI agents and human-in-the-loop checks for robust quality." },
                    { step: "03", title: "Scale & Optimize",       body: "Automate workflows, enrich with synthetic data, and continuously refine dataset quality and model readiness." },
                  ].map((item, idx) => (
                    <div key={item.step} className="relative rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.8)]">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">{item.step}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{item.title}</span>
                      </div>
                      <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">{item.body}</p>
                      {idx < 2 && <div className="hidden md:block absolute -right-4 top-6 h-px w-8 bg-zinc-700" />}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl">
                  Kickstart your AI initiatives with InfoBay's high-quality curated datasets,
                  optimized for supervised fine-tuning, reinforcement learning with human feedback,
                  and advanced reasoning tasks.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════
              3. LLM FACTUALITY
          ════════════════════════════════════════ */}
          <section id="model-evaluation" className="scroll-mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
                Service 3 · LLM Factuality Evaluation & Hallucination Reduction
              </p>

              <div className="mt-2 grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                    LLM Factuality Evaluation — Hallucination Reduction & Bias Mitigation Services
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    Close the loop on LLM hallucination and bias. InfoBay's factuality evaluation
                    services verify, red-team, and fine-tune large language models to ensure
                    accurate, unbiased, production-ready outputs — with continuous feedback loops
                    back into RLHF training.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["LLM Fact-Checking Loops", "Bias Detection & Mitigation", "LLM Production Monitoring"].map((chip) => (
                      <span key={chip} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/?scroll=contact")}
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
                  >
                    Talk to Us About LLM Factuality
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Guardrails for Large Language Models</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                    <li>• Multi-layer factuality checks on critical workflows.</li>
                    <li>• Bias and hallucination reduction for safer outputs.</li>
                    <li>• Continuous feedback loops back into training and tuning.</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Focus</div>
                      <div className="mt-1 text-sm font-semibold text-white">Truthfulness &amp; Safety</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Reduce hallucinations and harmful bias</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Coverage</div>
                      <div className="mt-1 text-sm font-semibold text-white">Pre · Post · Prod</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Eval, fine-tuning &amp; live monitoring</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Why Choose InfoBay for LLM Factuality Optimization
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    { title: "Multi-Layered LLM Fact Verification",          body: "Structured fact-checking loops rigorously validate AI-generated content across multiple passes and reviewers." },
                    { title: "LLM Bias & Misinformation Mitigation",         body: "Detect and reduce harmful biases and misleading patterns to improve trustworthiness and safety." },
                    { title: "Cross-Source Accuracy Checks",                 body: "Leverage multiple trusted reference sources to verify consistency, correctness, and completeness." },
                    { title: "LLM Truthfulness & Groundedness Optimization", body: "Enhance reasoning quality, groundedness, and stability across diverse prompts and deployment contexts." },
                    { title: "Scalable Validation Pipelines",                body: "Combine AI-assisted automation with human experts for high-precision, high-throughput factuality assurance." },
                    { title: "Enterprise-Grade LLM Safety & Integrity",      body: "Uphold transparency, governance, and compliance standards that satisfy demanding enterprise requirements." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                      <h4 className="text-[13px] font-semibold text-white">{item.title}</h4>
                      <p className="mt-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Our Continuous Factuality Process</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-4">
                  {[
                    { step: "01", title: "Validate",          body: "Run multi-level factual checks and bias screenings on model outputs across priority use cases." },
                    { step: "02", title: "Fine-Tune",         body: "Feed verified data, red-team findings, and curated feedback back into training and alignment loops." },
                    { step: "03", title: "Deploy",            body: "Ship updated, validated LLMs into production with stronger truthfulness and safety guarantees." },
                    { step: "04", title: "Monitor & Iterate", body: "Track factuality metrics and bias indicators, triggering continuous refinements as behavior drifts." },
                  ].map((item, idx) => (
                    <div key={item.step} className="relative rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.8)]">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">{item.step}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{item.title}</span>
                      </div>
                      <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">{item.body}</p>
                      {idx < 3 && <div className="hidden md:block absolute -right-4 top-6 h-px w-8 bg-zinc-700" />}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl">
                  Start your journey to trustable, high-integrity models with InfoBay's
                  expert-driven factuality validation and optimization solutions.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════
              4. NLP & SPEECH
          ════════════════════════════════════════ */}
          <section id="custom-solutions" className="scroll-mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
                Service 4 · NLP &amp; Speech Data Solutions — ASR, TTS &amp; NER
              </p>

              <div className="mt-2 grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                    NLP &amp; Speech Data Solutions — ASR, TTS, NER &amp; Conversational AI
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    Harness human language and voice data with InfoBay's NLP and speech data
                    services — including ASR training data, TTS systems, named entity recognition,
                    sentiment analysis, and multilingual chatbot development across Indic and
                    global languages.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Text Analytics & Intelligence", "Conversational AI & Chatbot Data", "Speech Recognition & Voice AI"].map((chip) => (
                      <span key={chip} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-200">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/?scroll=contact")}
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition"
                  >
                    Talk to Us About NLP &amp; Voice
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">End-to-End Language Stack</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                    <li>• Text analytics, chatbots, translation, NER, TTS &amp; ASR.</li>
                    <li>• Multilingual support across major global and Indic languages.</li>
                    <li>• Built to plug into existing products, CRMs, and data platforms.</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Channels</div>
                      <div className="mt-1 text-sm font-semibold text-white">Web · App · Voice</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Chat, IVR, email, support desks</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Use Cases</div>
                      <div className="mt-1 text-sm font-semibold text-white">CX · Analytics · Automation</div>
                      <p className="mt-1 text-[11px] text-zinc-400">Insights, copilots &amp; assistants</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Text Intelligence</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Text & Sentiment Analysis Services",
                      points: [
                        "Extract opinions, emotions, and trends from diverse textual sources.",
                        "Use advanced sentiment models to classify feedback as positive, negative, or neutral.",
                        "Identify patterns and topics that drive smarter, data-driven decisions.",
                      ],
                    },
                    {
                      title: "Custom Chatbots & Virtual Assistant Development",
                      points: [
                        "Build intelligent agents that understand intent and respond with context-aware answers.",
                        "Tailor workflows, tone, and personality to your domain with ongoing optimization.",
                        "Automate support, reduce response times, and improve customer engagement.",
                      ],
                    },
                    {
                      title: "Multilingual Language Translation Services",
                      points: [
                        "Deliver high-quality translations across languages and cultural contexts.",
                        "Use manual, automated, or hybrid approaches enhanced by advanced NLP.",
                        "Enable effective global communication and improved customer satisfaction.",
                      ],
                    },
                    {
                      title: "Named Entity Recognition (NER) Services",
                      points: [
                        "Extract people, organizations, locations, dates, and more from unstructured text.",
                        "Power information retrieval, summarization, and question-answering systems.",
                        "Customize models for domain-specific accuracy and relevance.",
                      ],
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                      <h4 className="text-[13px] font-semibold text-white">{item.title}</h4>
                      <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
                        {item.points.map((p) => <li key={p}>• {p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Speech &amp; Voice Technologies
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/75 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
                    <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Text-to-Speech (TTS) — Multilingual Voice Synthesis
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
                      <li>• Convert written text into natural-sounding, expressive speech.</li>
                      <li>• Support multiple languages, voices, and tones for assistants, media, and messaging.</li>
                      <li>• Create engaging voice experiences that enhance accessibility and brand presence.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/75 px-4 py-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
                    <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Automatic Speech Recognition (ASR) — Multilingual &amp; Accented Speech
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-300 leading-relaxed">
                      <li>• Accurately transcribe spoken language into text — even in noisy, real-world conditions.</li>
                      <li>• Ideal for note-taking, transcription, voice commands, accessibility, and analytics.</li>
                      <li>• Support real-time and batch transcription across languages and accents.</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl">
                  InfoBay partners closely with clients to craft tailored NLP and voice solutions
                  that integrate seamlessly into existing workflows. From data collection and
                  cleaning to deployment and continuous improvement, our end-to-end services
                  empower your business with powerful language and speech intelligence.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════
              5. FAQ
          ════════════════════════════════════════ */}
          <section id="faq" className="scroll-mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/80 px-5 md:px-8 py-8 md:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">

              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">
                Frequently Asked Questions
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                AI Data Services — Common Questions Answered
              </h2>
              <p className="mt-3 text-sm text-zinc-400 max-w-2xl">
                Everything you need to know about InfoBay.AI's data labeling, curation,
                LLM factuality, and NLP services.
              </p>

              <div className="mt-8 space-y-3">
                {serviceFaqs.map((faq, idx) => (
                  <FaqItem key={idx} q={faq.q} a={faq.a} />
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/60 px-5 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">Don't see your question here?</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Request a Model Quality Audit and we'll scope your exact requirements.
                  </p>
                </div>
                <button
                  onClick={() => router.push("/#contact")}
                  className="shrink-0 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black shadow-md hover:bg-zinc-200 transition"
                >
                  Request an Audit →
                </button>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
};

export default Services;
