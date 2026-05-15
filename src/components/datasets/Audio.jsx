const AudioSection = ({ setButton }) => {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Audio Dataset
        </h3>
        <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
          Large-scale audio dataset for ASR, speech analytics, sentiment and
          multilingual VLM training.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          <li>Total: 1.89M+ hours.</li>
          <li>Call-center: 1.83M+ hours.</li>
          <li>Podcasts: 57K+ hours.</li>
          <li>Formats: .wav, .ogg, .mp3 (8–48 kHz).</li>
        </ul>
        <button
          className="mt-6 inline-flex w-full max-w-[420px] justify-center rounded-full bg-white px-8 py-3 text-xs md:text-sm font-semibold text-black
                     shadow-md hover:bg-zinc-200 transition"
          onClick={() => setButton(true)}
        >
          Download Audio Sample
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl bg-zinc-900 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <div className="relative rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 h-52 md:h-64 overflow-hidden flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/dxfduwgj4/video/upload/v1767078408/audio_xxe3cj.mp4"
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
          <div className="absolute left-1/2 -bottom-6 w-[80%] -translate-x-1/2 rounded-2xl bg-black/95 px-6 py-4 flex justify-between text-white text-sm shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
            <div className="text-center">
              <div className="text-xl font-semibold">1.89M+</div>
              <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                Hours
              </div>
            </div>
            <div className="h-10 w-px bg-white/20 self-center" />
            <div className="text-center">
              <div className="text-sm font-semibold">Multilingual</div>
              <div className="text-[11px] tracking-wide text-zinc-400">
                Contact-center &amp; media
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AudioSection;
