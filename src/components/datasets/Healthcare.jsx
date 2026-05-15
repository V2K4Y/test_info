const HealthcareSection = ({ setButton }) => {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Healthcare Medical Dataset
        </h3>
        <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed">
          High-fidelity medical imaging for clinical AI, diagnostic models, and
          vision-language healthcare systems.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          <li>40M+ datasets spanning 1.4M+ patients.</li>
          <li>MRI: 24.8M+ • CT Scan: 15.2M+ • X-ray: 273k+.</li>
          <li>Discharge Summaries: 407k+ • Prescriptions: 16k+.</li>
          <li>Pathology: 35,895 files • USG: 2,199 files • Echo: 104 files.</li>
          <li>Longitudinal HIV ART: 376k+ records.</li>
          <li>Ideal for fine-tuning medical LLMs, VLMs, and diagnostics models.</li>
        </ul>
        <button
          className="mt-6 inline-flex w-full max-w-[420px] justify-center rounded-full bg-white px-8 py-3 text-xs md:text-sm font-semibold text-black
                     shadow-md hover:bg-zinc-200 transition"
          onClick={() => setButton(true)}
        >
          Download Medical Imaging Sample
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl bg-zinc-900 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <div className="relative rounded-2xl bg-slate-800 h-52 md:h-64 overflow-hidden flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/dxfduwgj4/video/upload/v1767078415/medical_isr5nr.mp4"
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
              <div className="text-xl font-semibold">40M+</div>
              <div className="text-[11px] uppercase tracking-wide text-zinc-400">
                Datasets
              </div>
            </div>
            <div className="h-10 w-px bg-white/20 self-center" />
            <div className="text-center">
              <div className="text-sm font-semibold">Clinical</div>
              <div className="text-[11px] tracking-wide text-zinc-400">
                CT · MRI · X-ray · Pathology
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HealthcareSection;