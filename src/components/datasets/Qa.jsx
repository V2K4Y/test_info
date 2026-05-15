const QaSection = ({ setButton }) => {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      {/* Left: text */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Q&amp;A Collection
        </h3>
        <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
          A 6.5M+ question bank with explanations and interwoven images, built for
          SFT, RLHF and evaluation.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          <li>6.5M+ Q&A (4M+ English, 2.5M+ Indian vernacular).</li>
          <li>Detailed explanations with embedded images.</li>
          <li>Equation support with LaTeX and MathML.</li>
          <li>Comprehensive insights (~210 words per explanation).</li>
          <li>Available formats: PDF &amp; JSON.</li>
        </ul>
        <button
          className="mt-6 inline-flex w-full max-w-[420px] justify-center rounded-full bg-white px-8 py-3 text-xs md:text-sm font-semibold text-black
                     shadow-md hover:bg-zinc-200 transition"
          onClick={() => setButton(true)}
        >
          Download Q&A Sample PDF
        </button>
      </div>

      {/* Right: visual card */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl bg-zinc-900 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {/* Illustration / screenshot box */}
          <div className="relative rounded-2xl bg-sky-200/90 h-52 md:h-64 overflow-hidden flex items-center justify-center">
            {/* Replace this with your own image */}
            <video
              src="https://res.cloudinary.com/dxfduwgj4/video/upload/v1767078398/qna_s1u3j2.mp4"
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

          {/* Stats pill overlay */}
          <div className="absolute left-1/2 -bottom-6 w-[80%] -translate-x-1/2 rounded-2xl bg-black/95 px-6 py-4 flex justify-between text-white text-sm shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
            <div className="text-center">
              <div className="text-xl font-semibold">6.5M+</div>
              <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                Q&A
              </div>
            </div>
            <div className="h-10 w-px bg-white/20 self-center" />
            <div className="text-center">
              <div className="text-xl font-semibold">1.8B+</div>
              <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                Tokens
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QaSection;
