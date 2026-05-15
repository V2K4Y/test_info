"use client";

import { motion } from "framer-motion";
import { faqs } from "./homeData";
import { SectionShell, rise, stagger } from "./SectionPrimitives";

export default function FaqSection() {
  return (
    <SectionShell id="faq" eyebrow="Frequently Asked" title="What enterprise AI teams ask before procurement.">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 md:grid-cols-1">
        {faqs.map(([question, answer]) => (
          <motion.details key={question} variants={rise} className="group rounded-xl border border-white/10 bg-zinc-950 p-6 open:border-cyan-300/50">
            <summary className="cursor-pointer list-none text-base font-semibold text-white">
              {question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{answer}</p>
          </motion.details>
        ))}
      </motion.div>
    </SectionShell>
  );
}
