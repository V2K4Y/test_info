"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { countryCodes } from "@/lib/countryCodes";

export default function CountryCodeSelect({
  value,
  onChange,
  inputId,
  ariaLabel,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return countryCodes.filter(({ code, country }) =>
      `${code} ${country}`.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (code) => {
    onChange(code);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        id={inputId}
        aria-label={ariaLabel}
        className="inline-flex items-center justify-center whitespace-nowrap min-w-[78px] sm:min-w-[84px] md:min-w-[92px] rounded-md border border-white/80 bg-zinc-900 px-3 py-2 text-sm text-white hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70"
        onClick={() => setOpen((prev) => !prev)}
      >
        {value || "Select"}
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-[210px] sm:w-[230px] rounded-lg border border-white/15 bg-zinc-950/95 shadow-xl backdrop-blur">
          <div className="p-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search code or country"
              className="w-full rounded-md bg-black/60 border border-white/15 px-2 py-1.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70"
            />
          </div>
          <div className="max-h-64 overflow-y-auto text-sm modal-scroll">
            {filtered.map(({ code, country }) => (
              <button
                key={`${country}-${code}`}
                type="button"
                onClick={() => handleSelect(code)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left hover:bg-white/10 ${value === code ? "bg-white/10" : ""
                  }`}
              >
                <span className="font-medium text-white">{code}</span>
                <span className="text-xs text-zinc-300">{country}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-3 py-2 text-xs text-zinc-400">
                No matches found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
