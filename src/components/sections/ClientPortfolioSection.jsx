"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "./homeData";
import { SectionShell } from "./SectionPrimitives";

export default function ClientPortfolioSection() {
  return (
    <SectionShell
      id="client-portfolio"
      eyebrow="Client portfolio"
      title="Trusted by Leaders in AI"
      copy="InfoBay's meticulously structured datasets helped us reduce hallucination rates and improve reasoning accuracy across STEM benchmarks."
    >
      <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white p-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-12"
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map(([src, name], index) => (
            <div key={`${name}-${index}`} className="flex h-16 w-44 items-center justify-center">
              <Image src={src} alt={name} width={150} height={48} className="max-h-12 w-auto object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
