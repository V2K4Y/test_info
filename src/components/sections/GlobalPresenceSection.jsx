"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe2, MapPin, X } from "lucide-react";
import { globalCenters } from "./homeData";
import { SectionShell } from "./SectionPrimitives";

const centerOptionalDetails = {};

const imageMap = {
  Lucknow: "/global_presence/Lucknow.png",
  Kathmandu: "/global_presence/Kathmandu.png",
  Jakarta: "/global_presence/Jakarta.png",
};

globalCenters.forEach(([city]) => {
  if (!imageMap[city]) {
    imageMap[city] = `/global_presence/${city}.jpeg`;
  }
});

export default function GlobalPresenceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);

  const active = globalCenters[activeIndex];
  const modalCenter =
    modalIndex !== null ? globalCenters[modalIndex] : null;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % globalCenters.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <SectionShell
        id="global-presence"
        eyebrow="Global Presence"
        title="Built for global AI teams. Operating across four continents."
        copy="InfoBay maintains offices and annotation operations across North America, Europe, the Middle East, South Asia, and Southeast Asia — with language coverage spanning every major commercial AI market. Our distributed infrastructure means enterprise SLAs, regional data residency compliance, and 24-hour delivery windows."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">

          
          {/* MAIN CARD */}
          <button
            type="button"
            onClick={() => setModalIndex(activeIndex)}
            className="group relative min-h-[560px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active[0]}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${imageMap[active[0]]}")`,
                }}
              />
            </AnimatePresence>

            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/38 to-black/10" /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

            <div className="relative z-10 flex min-h-[560px] flex-col justify-end p-6 md:p-8">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">
                <Globe2 className="h-3.5 w-3.5" />
                {active[2]}
              </p>

              <h3 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl">
                {active[0]}
              </h3>

              <p className="mt-3 flex items-center gap-2 text-zinc-300">
                <MapPin className="h-4 w-4 text-cyan-300" />
                {active[1]}
              </p>
            </div>
          </button>

          {/* RIGHT LIST */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
            {globalCenters.map(([city, country, type], index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    setModalIndex(index);
                  }}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/5 via-cyan-300/20 to-cyan-500/5 text-white border border-white/10"
                      : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>
                    <span className={`block text-sm font-semibold ${isActive ? "text-white" : ""}`}>
                      {city}
                    </span>

                    <span
                      className={`mt-1 block text-xs ${
                        isActive
                          ? "text-white/75"
                          : "text-zinc-500"
                      }`}
                    >
                      {country}
                    </span>
                  </span>

                  <span
                    className={`shrink-0 text-[10px] uppercase tracking-[0.16em] ${
                      isActive
                        ? "text-cyan-200/70"
                        : "text-cyan-200/50"
                    }`}
                  >
                    {type}
                  </span>
                </button>
              );
            })}
          </div>

          
        </div>
      </SectionShell>

      {/* MODAL */}
<AnimatePresence>
  {modalCenter && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModalIndex(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
    >
      {/* STOP CLOSE ON INNER CLICK */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.96, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_30px_120px_rgba(0,0,0,0.85)]"
      >
        {/* IMAGE SECTION */}
        <div className="relative flex h-[520px] items-center justify-center bg-black">
          <img
            src={imageMap[modalCenter[0]]}
            alt={modalCenter[0]}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={() => setModalIndex(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur transition hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* SMALLER DETAILS SECTION */}
        <div className="relative p-5 md:p-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-100">
            <Globe2 className="h-3.5 w-3.5" />
            {modalCenter[2]}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {modalCenter[0]}
          </h2>

          <p className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
            <MapPin className="h-4 w-4 text-cyan-300" />
            {modalCenter[1]}
          </p>

          {centerOptionalDetails[modalCenter[0]] && (
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              {centerOptionalDetails[modalCenter[0]]}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}