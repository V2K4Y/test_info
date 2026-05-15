"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Twitter } from "@deemlol/next-icons";
import CookieSettings from "./CookieSettings";

const groups = [
  {
    title: "Platform",
    links: [
      ["Corpus", "/#corpus"],
      ["Dataset USPs", "/#dataset-usps"],
      ["Capabilities", "/#capabilities"],
      ["Use Cases", "/#use-cases"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/aboutus"],
      ["Why InfoBay", "/#why-infobay"],
      ["Global Presence", "/#global-presence"],
      ["Infrastructure R&D", "/#infrastructure"],
      ["FAQ", "/#faq"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Sitemap", "/sitemap.xml"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Service", "/terms-of-service"],
    ],
  },
];

export default function NewFooter() {
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_0.8fr]">
          <div>
            <Image
              src="/InfoBay.AI Logo-04.png"
              alt="InfoBay AI Logo"
              width={150}
              height={42}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Training intelligence infrastructure for production AI models.
            </p>
            <a href="mailto:hello@infobay.ai" className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
              <Mail size={16} />
              <span>hello@infobay.ai</span>
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{group.title}</h3>
                <div className="mt-4 grid gap-2">
                  {group.links.map(([label, href]) => (
                    <Link key={href} href={href} className="text-sm text-zinc-400 transition hover:text-white">
                      {label}
                    </Link>
                  ))}
                  {group.title === "Legal" ? (
                    <button type="button" onClick={() => setIsCookieSettingsOpen(true)} className="text-left text-sm text-zinc-400 transition hover:text-white">
                      Cookie Settings
                    </button>
                  ) : null}
                </div>
              </nav>
            ))}
          </div>

          <div className="lg:text-right">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Social</h3>
            <div className="mt-4 flex gap-3 lg:justify-end">
              <a href="https://x.com/infobayai" aria-label="Twitter (X)" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/40 hover:text-white" target="_blank">
                <Twitter size={13} />
              </a>
              <a href="https://www.linkedin.com/company/edugorilla-pvt-ltd" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/40 hover:text-white" target="_blank">
                <Linkedin size={13} />
              </a>
              <a href="https://www.instagram.com/infobay.ai/" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/40 hover:text-white" target="_blank">
                <Instagram size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-zinc-500">
          Copyright © 2026 INFOBAY AI LIMITED. All rights reserved.
        </div>
      </div>

      <CookieSettings
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />
    </footer>
  );
}
