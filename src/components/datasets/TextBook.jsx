const TextbookSection = ({ setButton }) => {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      {/* Left: text */}
      <div className="flex flex-col">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Textbooks
        </h3>
        <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
          Extensive textbook content with interwoven images spanning STEM and
          non-STEM domains, ideal for pre-training and reasoning tasks.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          <li>2.4B+ words across 5,000+ subjects.</li>
          <li>35,000+ books across 7 languages.</li>
          <li>Structured for long-context modeling and knowledge grounding.</li>
          <li>Interwoven images for clearer understanding</li>
        </ul>

        <button
          className="mt-6 inline-flex w-full max-w-[420px] justify-center rounded-full bg-white px-8 py-3 text-xs md:text-sm font-semibold text-black
                     shadow-md hover:bg-zinc-200 transition"
          onClick={() => setButton(true)}
        >
          Download STEM Textbook Sample
        </button>
      </div>

      {/* Right: Visual — now consistent with QA card */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-white/10 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {/* Replace with actual image later */}
          <div className="relative h-52 md:h-64 flex items-center justify-center rounded-2xl overflow-hidden bg-zinc-800">
            <video
              src="https://res.cloudinary.com/dxfduwgj4/video/upload/v1767078418/textbooks_uivkza.mp4"
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

          {/* Stats pill */}
          <div className="absolute left-1/2 -bottom-6 w-[80%] -translate-x-1/2 rounded-2xl bg-black/95 px-6 py-4 flex justify-between text-white text-sm shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
            <div className="text-center">
              <div className="text-xl font-semibold">2.4B+</div>
              <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                Words
              </div>
            </div>
            <div className="h-10 w-px bg-white/20 self-center" />
            <div className="text-center">
              <div className="text-sm font-semibold">Rich visuals</div>
              <div className="text-[11px] tracking-wide text-zinc-400">
                Interwoven images
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextbookSection;
