"use client";

import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import QaSection from "./Qa";
import TextbookSection from "./TextBook";
import VideoSection from "./Video";
import AudioSection from "./Audio";
import HealthcareSection from "./Healthcare";
import CountryCodeSelect from "@/components/CountryCodeSelect";
import { downloadFromDropboxShareLink } from "@/lib/dropboxDownload";
import { datasetRequestSchema } from "@/lib/validation/datasetRequest";
import {
  datasetCategoryMap,
  datasetSampleLinks,
} from "@/lib/config/datasets";
import { buildPhone } from "@/lib/utils/phone";
import CodeSection from "./Coding";

const DatasetCatalogTabs = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [button, setButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("textbooks");
  const modalRef = useRef(null);
  const [errors, setErrors] = useState({});

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

  // Close dataset sample modal on Escape
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

  const tabs = [
    { id: "textbooks", label: "Textbooks" },
    { id: "qa", label: "Q&A Collection" },
    { id: "video", label: "Videos" },
    { id: "audio", label: "Audio" },
    { id: "healthcare", label: "Healthcare Medical Imaging" },
    { id: "coding", label: "Coding" },
  ];

  return (
    <section
      id="dataset-catalog"
      className="flex justify-center px-4 md:px-6 py-12 md:py-16 bg-black text-white"
    >
      <div className="w-full max-w-6xl relative">
        {/* Centered heading & description */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Dataset Catalogue
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
            Explore rigorously curated datasets designed to accelerate
            post-training research and integrate directly into your
            pre-training, SFT, and RLHF pipelines.
          </p>
        </div>

        {/* Centered tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === tab.id
                  ? "bg-white text-black shadow-lg shadow-white/40"
                  : "bg-transparent border border-white/20 text-zinc-200 hover:border-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Left aligned content */}
        <div className="mt-14 text-left">
          {active === "textbooks" && <TextbookSection setButton={setButton} />}
          {active === "qa" && <QaSection setButton={setButton} />}
          {active === "video" && <VideoSection setButton={setButton} />}
          {active === "audio" && <AudioSection setButton={setButton} />}
          {active === "healthcare" && (
            <HealthcareSection setButton={setButton} />
          )}
          {active === "coding" && <CodeSection setButton={setButton} />}
        </div>

        {/* Request sample modal */}
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
                Download{" "}
                {active === "qa"
                  ? "Q&A"
                  : active.charAt(0).toUpperCase() + active.slice(1)}{" "}
                Sample
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

                  const category = datasetCategoryMap[active];
                  const phone = buildPhone(countryCode, trimmed.phoneNumber);

                    const res = await fetch("/api/dataset-request", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        firstName: trimmed.firstName,
                        lastName: trimmed.lastName,
                        email: trimmed.email,
                        phone,
                        category,
                        kind: "sample",
                        source: "catalog",
                      }),
                    });

                    if (!res.ok) {
                      console.error("Sample request failed", await res.text());
                      toast.error(
                        "Something went wrong saving your request. Please try again later."
                      );
                      return; // do NOT download if API failed
                    }

                  const link = datasetSampleLinks[active];

                    if (link) {
                      downloadFromDropboxShareLink(link);
                      toast.success("Request saved. Starting download...");
                    } else {
                      console.error(
                        `Dropbox link not configured for: ${active}`
                      );
                      toast.error(
                        "Download link not configured. Please contact support."
                      );
                    }

                    handleCloseModal();
                  } catch (err) {
                    console.error("Sample request failed", err);
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
                      inputId="catalog-country-code"
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
                    {loading ? "Processing..." : "Request sample"}
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
      </div>
    </section>
  );
};

export default DatasetCatalogTabs;
