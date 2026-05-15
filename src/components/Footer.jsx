"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  PhoneCall,
  Mail,
} from "@deemlol/next-icons";
import CookieSettings from "./CookieSettings";

const Footer = () => {
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Top Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex w-full justify-center md:w-auto md:justify-start">
            <Image
              src="/InfoBay.AI Logo-04.png"
              alt="InfoBay AI Logo"
              width={140}
              height={40}
              className="cursor-pointer"
            />
          </div>

          {/* Footer Links */}
          <div className="flex w-full flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-300 md:w-auto">
            <Link href="/sitemap.xml" className="hover:text-white transition">
              Sitemap
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>
            <button
              onClick={() => setIsCookieSettingsOpen(true)}
              className="hover:text-white transition cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex w-full justify-center gap-3 md:w-auto md:justify-end">
            {/* <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-400 text-xs hover:border-white hover:text-white transition"
              // target="_blank"
            >
              <Facebook size={12} />
            </a> */}
            <a
              href="https://x.com/infobayai"
              aria-label="Twitter (X)"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-400 text-xs hover:border-white hover:text-white transition"
              target="_blank"
            >
              <Twitter size={12} />
            </a>
            <a
              href="https://www.linkedin.com/company/edugorilla-pvt-ltd"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-400 text-xs hover:border-white hover:text-white transition"
              target="_blank"
            >
              <Linkedin size={12} />
            </a>
            <a
              href="https://www.instagram.com/infobay.ai/"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-400 text-xs hover:border-white hover:text-white transition"
              target="_blank"
            >
              <Instagram size={12} />
            </a>
          </div>
        </div>

        {/* Bottom Divider + Copyright */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col items-center gap-4 md:justify-between">
          <p className="text-center text-sm text-zinc-500">
            Copyright © 2025 INFOBAY AI LIMITED (Formerly known as EduGorilla Community Private Limited). All rights reserved.
          </p>

          {/* Contact Section */}
          <div className="flex flex-col items-center gap-2 text-sm text-zinc-500 md:flex-row md:gap-6">
            <span className="font-medium">Contact Us:</span>

            {/* <a
              href="tel:+918303174763"
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <PhoneCall size={16} />
              <span>(+91) 8303174763</span>
            </a> */}

            <a
              href="mailto:hello@infobay.ai"
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <Mail size={16} />
              <span>hello@infobay.ai</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettings
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />
    </footer>
  );
};

export default Footer;
