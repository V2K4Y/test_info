"use client";

import ContactForm from "@/components/ContactForm";
import { SectionHeader } from "./SectionPrimitives";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 px-4 py-20 md:px-8 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-22"
        style={{ backgroundImage: "url('/pexels-cottonbro-6153739.jpg')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(90deg,#000,#050505e8,#000000cc)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Start with a model quality audit."
            copy="Tell us what you are building, what data you need, and where your model is underperforming. InfoBay will respond with the right corpus, sample, or custom data path."
          />
          {/* <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm leading-7 text-zinc-300">
              5-business-day audit turnaround, enterprise NDA support, sample packs where available, and custom engagement scoping for domain-specific datasets.
            </p>
          </div> */}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
