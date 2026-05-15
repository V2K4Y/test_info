"use client";

import DatasetCatalogTabs from "@/components/datasets/DatasetsCatalouge";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import CountryCodeSelect from "@/components/CountryCodeSelect";
import { downloadFromDropboxShareLink } from "@/lib/dropboxDownload";
import { datasetRequestSchema } from "@/lib/validation/datasetRequest";
import { datasetPackLink } from "@/lib/config/datasets";
import { buildPhone } from "@/lib/utils/phone";

const DataSets = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [button, setButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleCloseModal = () => {
    setButton(false);
    setName("");
    setLastName("");
    setEmail("");
    setCountryCode("+91");
    setPhoneNumber("");
    setErrors({});
  };

  useEffect(() => {
    if (!button) return;

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
  }, [button]);

  // Close "Request Data Packs" modal on Escape
  useEffect(() => {
    if (!button) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [button]);

  return (
    <main className="min-h-screen bg-black text-white mt-5">
      <section className="relative flex justify-center px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Soft background gradient */}
        <div className="relative w-full max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 hover:text-white hover:border-white/30">
              Datasets
            </span>

            <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Access Curated{" "}
              <span className="text-zinc-100">Research Datasets</span>
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-zinc-300 leading-relaxed">
              Fuel your AI research with benchmark-grade datasets across
              reinforcement learning, multimodal tasks, vision, STEM, and
              specialized enterprise domains. Select ready-to-use packs or
              partner with us for fully custom data pipelines.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black
                     shadow-lg shadow-white/20 transition hover:bg-zinc-200 hover:shadow-xl
                     focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => setButton(true)}
              >
                Request Data Packs
              </button>
              <button
                className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white
                     hover:border-white/60 hover:bg-white/5 transition"
                onClick={() => {
                  if (typeof window === "undefined") return;
                  const el = document.getElementById("dataset-catalog");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                View Sample Collections
              </button>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Covering RL, code, STEM, biomedical, enterprise, and multilingual
              domains.
            </p>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/60 p-5 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
              <div className="relative rounded-2xl bg-black/60 border border-white/10 overflow-hidden aspect-video md:max-h-[420px]">
                <video
                  src="https://res.cloudinary.com/dxfduwgj4/video/upload/v1767078412/matrix_ajyvep.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                  <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                    Domains
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    STEM · Code · Vision
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
                  <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                    Quality
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    Benchmark-ready sets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 md:px-6 py-12 md:py-16 bg-black">
        <div className="w-full max-w-6xl">
          {/* Card wrapper */}
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 px-8 py-10 md:px-12 md:py-12 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
            <div className="grid gap-10 md:grid-cols-2 items-start">
              {/* Left: Main message */}
              <div className="space-y-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                  Strengthening Frontier-Scale LLMs
                </h2>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                  Improve your AI model with our pre-training, SFT, and
                  RLHF-ready resources, engineered to elevate reasoning, factual
                  accuracy, and benchmark performance.
                </p>
              </div>

              {/* Right: Trust + proof points */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-purple-300">
                  Trusted by global AI leaders
                </h3>

                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    <p>
                      Big Tech companies — enhanced MMLU, GAIA and AIME scores.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    <p>
                      AI labs and startups — using our datasets for SFT, RLHF
                      and pre-training.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    <p>
                      2 billion+ data samples across text, video, audio and
                      medical domains.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    <p>
                      Multilingual coverage — English, Hindi, Arabic, Bahasa and
                      Indic languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DatasetCatalogTabs />

      <section className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-black text-white overflow-hidden">
        {/* Soft radial glow behind text */}
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-5xl blur-[140px] opacity-20 bg-purple-700/40" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Why Choose Our Datasets?
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-zinc-300 text-sm md:text-base leading-relaxed">
            Purpose-built data that accelerates your AI from pre-training to
            real-world deployment — trusted by global leaders to push
            state-of-the-art performance.
          </p>

          {/* Bullet points */}
          <ul className="mt-10 grid gap-4 text-sm md:text-base text-zinc-200 max-w-3xl mx-auto text-left">
            <li className="flex gap-3 items-start">
              <span className="text-purple-400 text-lg">•</span>
              Proven to boost top benchmark performance including MMLU, GAIA,
              AIME, and Arena Hard.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-400 text-lg">•</span>
              Engineered for every stage: pre-training, SFT, RLHF, and DPO.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-400 text-lg">•</span>
              Deeply curated ecosystems ensuring readiness and reliability.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-400 text-lg">•</span>
              Trusted globally by Big Tech, AI labs, and frontier startups.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-400 text-lg">•</span>
              2B+ data samples across text, video, audio, and medical imaging.
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-purple-400 text-lg">•</span>
              Multilingual support: English, Hindi, Arabic, Bahasa, & Indic
              languages.
            </li>
          </ul>

          {/* CTA Button */}
          <button
            className="mt-12 inline-flex rounded-full bg-white text-black px-8 py-3 text-sm font-semibold
                     hover:bg-zinc-200 transition shadow-lg hover:shadow-xl"
            onClick={() => router.push("/?scroll=contact")}
          >
            Talk to Our Data Experts
          </button>
        </div>
      </section>

      {button && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 py-8"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            className="w-full max-w-sm md:max-w-md rounded-2xl bg-zinc-950 border border-white/10 p-5 md:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.9)] relative max-h-[80vh] md:max-h-[90vh] overflow-y-auto ios-scroll modal-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-4 top-4 text-zinc-500 hover:text-white text-sm"
            >
              ✕
            </button>

            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Download Dataset Package
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-300 leading-relaxed">
              Explore benchmark-ready samples curated for research, model
              training, and academic validation.
            </p>

            <form
              className="mt-6 space-y-4"
              noValidate
              onSubmit={async (e) => {
                e.preventDefault();
                if (loading) return;

                const trimmed = {
                  firstName: name.trim(),
                  lastName: lastName.trim(),
                  email: email.trim(),
                  phoneNumber: phoneNumber.trim(),
                };

                try {
                  await datasetRequestSchema
                    .omit(["category", "kind"])
                    .validate(trimmed, { abortEarly: false });
                } catch (validationError) {
                  if (
                    validationError &&
                    validationError.name === "ValidationError"
                  ) {
                    const fieldErrors = {};
                    validationError.inner.forEach((err) => {
                      if (err.path && !fieldErrors[err.path]) {
                        fieldErrors[err.path] = err.message;
                      }
                    });
                    setErrors(fieldErrors);
                  } else {
                    toast.error("Please check the form fields.");
                  }
                  return;
                }

                try {
                  setLoading(true);
                  setErrors({});

                  const res = await fetch("/api/dataset-request", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      firstName: trimmed.firstName,
                      lastName: trimmed.lastName,
                      email: trimmed.email,
                      phone: buildPhone(countryCode, trimmed.phoneNumber),
                      category: "packs",
                      kind: "pack",
                      source: "packs-modal",
                    }),
                  });

                  if (!res.ok) {
                    console.error("Data pack request failed", await res.text());
                    toast.error(
                        "Something went wrong saving your request. Please try again later."
                      );
                    return; // do NOT download if API failed
                  }

                  // Trigger download from Google Drive
                  if (typeof window !== "undefined") {

                    const dropBoxLink = datasetPackLink;

                    if (dropBoxLink) {
                      downloadFromDropboxShareLink(dropBoxLink);
                      toast.success("Request saved. Starting download...");
                    } else {
                      console.error(
                        `Dropbox link not configured for: ${active}`
                      );
                      toast.error(
                        "Download link not configured. Please contact support."
                      );
                    }
                  }

                  handleCloseModal();
                } catch (err) {
                  console.error("Data pack request failed", err);
                  toast.error(
                      "Something went wrong saving your request. Please try again later."
                    );
                } finally {
                  setLoading(false);
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-zinc-300 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg bg-zinc-900/80 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    placeholder="Jane"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-zinc-300 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="rounded-lg bg-zinc-900/80 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-300 mb-1">
                  Company email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg bg-zinc-900/80 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-zinc-300 mb-1">
                    Country code
                  </label>
                  <CountryCodeSelect
                    value={countryCode}
                    onChange={setCountryCode}
                    inputId="dataset-country-code"
                    ariaLabel="Select country code"
                  />
                </div>

                <div className="flex-1 flex flex-col min-w-0">
                  <label className="text-xs font-medium text-zinc-300 mb-1">
                    Phone number
                  </label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="rounded-lg bg-zinc-900/80 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    placeholder="1234567890"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto rounded-full bg-white px-6 py-3 text-xs md:text-sm font-semibold text-black shadow-md hover:bg-zinc-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Request Dataset Package"}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-xs md:text-sm text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default DataSets;
