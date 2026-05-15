import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/aboutus.jpg"
            alt="AI visualization"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay + smooth fade into page background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black" />
        </div>

        {/* Content container */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Page marker chip (same style family as Datasets) */}
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 hover:text-white hover:border-white/30">
            About Us
          </span>

          <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Accelerating the Future of Artificial Intelligence
          </h1>
          <p className="mt-4 md:mt-5 max-w-3xl text-sm md:text-base text-zinc-300 leading-relaxed">
            InfoBay AI (formerly EduGorilla) partners with forward-thinking AI innovators to build the
            next generation of high-performance models. Our mission is to
            advance the frontier of artificial intelligence by delivering
            high-integrity knowledge systems, expertly curated datasets, and
            post-training intelligence frameworks that power reliable, scalable,
            and trustworthy AI.
          </p>
        </div>
      </section>

      {/* Exceptional models / Knowledge repository */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 via-black to-black px-6 md:px-10 py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] items-start">
            {/* Left: main copy */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                Exceptional models demand exceptional data.
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
                Why InfoBay AI? <br /> A continuously expanding global knowledge
                repository. InfoBay AI maintains one of the industry’s most
                extensive and rigorously validated knowledge collections. This
                ever-growing repository fuels more accurate, stable, and
                contextually aware AI systems.
              </p>
              <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
                Our content spans STEM, humanities, professional fields, and
                real-world knowledge domains—ensuring AI models remain aligned
                with the latest insights, standards, and global developments.
              </p>
            </div>

            {/* Right: trusted by industry leaders card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.9)] text-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Trusted by Industry Leaders
              </p>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Our knowledge collections power AI systems across:
              </p>
              <ul className="mt-2 space-y-1.5 text-[13px] text-zinc-300">
                <li>• STEM research and engineering domains.</li>
                <li>• Humanities, social sciences, and policy-relevant topics.</li>
                <li>• Professional fields such as law, finance, and healthcare.</li>
                <li>• Dynamic, real-world data and evolving global contexts.</li>
              </ul>
              <p className="mt-3 text-[11px] text-zinc-400">
                Designed for teams that can’t compromise on accuracy,
                robustness, or coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark performance section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-6 md:space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">
            Advancing Benchmark Performance with Precision-Engineered Data
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
            InfoBay AI’s datasets are crafted to move the needle on the world’s
            most demanding benchmarks—strengthening reasoning, retrieval, and
            generalization in real deployments, not just synthetic test suites.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* MMLU card */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-4 text-sm shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              MMLU
            </h3>
            <p className="mt-1 text-sm font-semibold text-white">
              Multitask Language Understanding
            </p>
            <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
              Cross-domain datasets strengthen a model’s ability to reason,
              generalize, and comprehend complex topics, enabling meaningful
              improvements on MMLU performance across subjects.
            </p>
          </div>

          {/* GAIA card */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-4 text-sm shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              GAIA
            </h3>
            <p className="mt-1 text-sm font-semibold text-white">
              General AI Assessment
            </p>
            <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
              Continuously updated, high-diversity datasets boost contextual
              understanding, adaptability, and stepwise problem-solving—
              capabilities that are critical for higher GAIA scores.
            </p>
          </div>

          {/* GPQA Diamond card */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-4 text-sm shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              GPQA DIAMOND
            </h3>
            <p className="mt-1 text-sm font-semibold text-white">
              Advanced Reasoning &amp; Retrieval
            </p>
            <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
              Structured, enriched data enhances logical reasoning, factual
              retrieval, and deep comprehension—helping models excel on
              high-stakes GPQA Diamond evaluations.
            </p>
          </div>
        </div>

        <p className="mt-2 max-w-3xl text-xs md:text-sm text-zinc-300 leading-relaxed">
          Together, these precision-engineered datasets establish a world-class
          foundation for enterprises seeking unmatched accuracy, generalization,
          and real-world reliability.
        </p>
      </section>

      {/* Pioneering AI innovation globally */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 px-5 md:px-8 py-7 md:py-8 shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Pioneering AI Innovation Globally
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl">
            Leading technology powerhouses worldwide are continually advancing
            AI by refining and optimizing their models to deliver smarter, more
            efficient solutions that address global challenges. InfoBay AI enables
            this progress with the data foundations required to safely scale.
          </p>
        </div>
      </section>

      {/* Advanced data infrastructure */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 via-black to-black px-6 md:px-10 py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.95)]">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] items-start">
            {/* Left: main narrative */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                Driving AI Innovation Through Advanced Data Infrastructure
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                We bridge cutting-edge research with practical deployment.
                InfoBay AI integrates human-in-the-loop intelligence, domain-expert
                validation, and advanced post-training optimization to elevate
                model factuality, reasoning quality, and truth alignment.
              </p>
              <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                With one of the largest pools of specialized contributors, we
                deliver clean, structured, and domain-accurate datasets for
                frontier AI development. Our scalable network ensures consistent
                excellence across high-volume, high-complexity data needs.
              </p>
            </div>

            {/* Right: bullets as compact feature blocks */}
            <div className="grid gap-3 text-xs text-zinc-300">
              <div className="rounded-2xl border border-white/12 bg-black/80 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                  Human-in-the-Loop Intelligence
                </div>
                <p className="mt-2 text-[13px] text-zinc-300 leading-relaxed">
                  Domain experts and reviewers are integrated directly into data
                  and evaluation pipelines to catch edge cases that automated
                  systems miss.
                </p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-black/80 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                  Post-Training Optimization
                </div>
                <p className="mt-2 text-[13px] text-zinc-300 leading-relaxed">
                  Data and feedback loops are engineered for SFT, RLHF, DPO, and
                  other post-training paradigms to steadily improve model
                  behavior over time.
                </p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-black/80 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                  Scale with Consistency
                </div>
                <p className="mt-2 text-[13px] text-zinc-300 leading-relaxed">
                  Our contributor network and infrastructure are built to handle
                  high-volume, high-complexity workloads without sacrificing
                  precision or reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
