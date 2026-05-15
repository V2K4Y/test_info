"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const pathname = usePathname() || "/";
  const router = useRouter();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const desktopLinkClasses = (href) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-white/10 text-white"
        : "text-zinc-300 hover:bg-white/5 hover:text-white"
    }`;

  const mobileLinkClasses = (href) =>
    `rounded-md px-2 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-white/10 text-white"
        : "text-zinc-200 hover:bg-white/5 hover:text-white"
    }`;

  const serviceLinks = [
    { title: "Data Labeling", href: "/services#data-collection" },
    { title: "Data Curation", href: "/services#data-annotation" },
    { title: "LLM Factuality", href: "/services#model-evaluation" },
    { title: "NLP Solutions", href: "/services#custom-solutions" },
  ];

  const sectionLinks = [
    { title: "Corpus", href: "/#corpus" },
    { title: "Dataset USPs", href: "/#dataset-usps" },
    { title: "Capabilities", href: "/#capabilities" },
    { title: "Use Cases", href: "/#use-cases" },
    { title: "Global Presence", href: "/#global-presence" },
    { title: "R&D", href: "/#infrastructure" },
    { title: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/82 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-2">
          <Image
            src="/InfoBay.AI Logo-04.png"
            alt="InfoBay AI Logo"
            width={140}
            height={40}
            className="h-8 w-auto object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {/* Home */}
            <li>
              <Link href="/" className={desktopLinkClasses("/")}>
                Home
              </Link>
            </li>

            {/* Home sections dropdown */}
            <li className="relative group">
              <button
                type="button"
                className="relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-zinc-300 outline-none transition-colors hover:bg-white/5 hover:text-white"
              >
                <span>Explore</span>
                <svg
                  className="h-3 w-3 translate-y-[1px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full pt-3 w-72 -translate-x-1/2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-150">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                  <ul className="grid grid-cols-2 gap-1">
                    {sectionLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* Services with dropdown */}
            <li className="relative group">
              <button
                type="button"
                onClick={() => router.push("/services")}
                className={`${desktopLinkClasses(
                  "/services"
                )} flex items-center gap-1 outline-none`}
              >
                <span>Services</span>
                <svg
                  className="h-3 w-3 translate-y-[1px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="pointer-events-none absolute left-1/2 top-full pt-3 w-64 -translate-x-1/2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-150">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                  <ul className="space-y-1">
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* Why InfoBay */}
            <li>
              <Link href="/#why-infobay" className={desktopLinkClasses("/aboutus")}>
                Why InfoBay AI
              </Link>
            </li>

            <li>
              <Link href="/#contact" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-100">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-2.5 py-2 text-zinc-200 md:hidden transition-colors hover:border-white hover:text-white"
          onClick={() => {
            setIsMobileOpen((prev) => !prev);
            if (isMobileOpen) setIsMobileServicesOpen(false);
          }}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-t border-zinc-800 bg-black/95 md:hidden transition-colors">
          <nav className="mx-auto flex max-w-7xl flex-col space-y-1 px-4 py-3">
            <Link
              href="/"
              className={mobileLinkClasses("/")}
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>

            <div className="grid grid-cols-2 gap-1">
              {sectionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:text-white transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Services dropdown */}
            <div className="mt-1">
              <button
                type="button"
                className="flex w-full items-center justify-between px-2 py-2 text-sm font-medium text-zinc-200 hover:text-white"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              >
                <span className={isActive("/services") ? "text-white" : ""}>
                  Services
                </span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <div className="mt-1 pl-3 space-y-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-2 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:text-white transition-colors"
                      onClick={() => {
                        setIsMobileOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#why-infobay"
              className={mobileLinkClasses("/aboutus")}
              onClick={() => setIsMobileOpen(false)}
            >
              Why InfoBay
            </Link>
            <Link
              href="/#contact"
              className="mt-2 rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black"
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-12 -top-12 h-20 rounded-full bg-cyan-300/10 blur-3xl" />
    </header>
  );
};

export default Header;
