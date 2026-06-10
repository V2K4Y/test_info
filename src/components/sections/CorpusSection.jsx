"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { datasets, getDataset } from "./corpusData";
import { SectionShell, StatTile } from "./SectionPrimitives";

const badgeStyles = {
  blue: "bg-blue-950/50 text-blue-200 border-blue-500/25",
  green: "bg-emerald-950/50 text-emerald-200 border-emerald-500/25",
  amber: "bg-amber-950/50 text-amber-200 border-amber-500/25",
  rose: "bg-rose-950/50 text-rose-200 border-rose-500/25",
  indigo: "bg-indigo-950/50 text-indigo-200 border-indigo-500/25",
  violet: "bg-violet-950/50 text-violet-200 border-violet-500/25",
  fuchsia: "bg-fuchsia-950/50 text-fuchsia-200 border-fuchsia-500/25",
  lime: "bg-lime-950/50 text-lime-200 border-lime-500/25",
};

const modalityColors = {
  MRI: "bg-rose-950/60 text-rose-200 border-rose-500/30",
  CT: "bg-rose-950/60 text-rose-200 border-rose-500/30",
  "X-ray": "bg-rose-950/60 text-rose-200 border-rose-500/30",
  USG: "bg-rose-950/60 text-rose-200 border-rose-500/30",
  ECHO: "bg-rose-950/60 text-rose-200 border-rose-500/30",
  OPG: "bg-rose-950/60 text-rose-200 border-rose-500/30",
  Pathology: "bg-blue-950/60 text-blue-200 border-blue-500/30",
  IVF: "bg-amber-950/60 text-amber-200 border-amber-500/30",
  "HIV Therapy": "bg-indigo-950/60 text-indigo-200 border-indigo-500/30",
  Dermatology: "bg-red-950/60 text-red-200 border-red-500/30",
  Outpatient: "bg-emerald-950/60 text-emerald-200 border-emerald-500/30",
  "Multi-specialty": "bg-emerald-950/60 text-emerald-200 border-emerald-500/30",
};

function Badge({ children, color = "blue" }) {
  return (
    <span className={`rounded-md border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${badgeStyles[color]}`}>
      {children}
    </span>
  );
}

function Panel({ title, badge, badgeColor = "blue", children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.035]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <Badge color={badgeColor}>{badge}</Badge>
      </div>
      <div className="p-5">{children}</div>
    </motion.div>
  );
}

function ProgressRow({ label, meta, pct = 60, tag, color = "cyan" }) {
  const bar = {
    cyan: "bg-cyan-300",
    emerald: "bg-emerald-300",
    rose: "bg-rose-300",
    amber: "bg-amber-300",
    indigo: "bg-indigo-300",
    violet: "bg-violet-300",
  }[color];

  return (
    <div className="grid gap-2 border-b border-white/[0.06] py-3 last:border-none md:grid-cols-[170px_1fr_100px] md:items-center">
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-white">{label}</p>
        {tag ? <p className="mt-1 text-[10px] text-zinc-500">{tag}</p> : null}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.15, ease: "easeOut" }}
          className={`h-full rounded-full ${bar}`}
        />
      </div>
      <p className="text-right font-mono text-[10px] text-zinc-400">{meta}</p>
    </div>
  );
}

function LangBar({ name, code, pct, hrs, dual }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/[0.06] py-1.5 last:border-none">
      <span className="min-w-[140px] truncate text-[12px] font-light text-white">{name}</span>
      {code ? <span className="min-w-[44px] font-mono text-[9px] text-zinc-500">{code}</span> : null}
      <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.05, ease: "easeOut" }}
          className="h-full rounded-full bg-cyan-400/70"
        />
      </div>
      <span className="min-w-[70px] truncate text-right font-mono text-[10px] text-zinc-400">{hrs}</span>
      {dual ? (
        <span className="rounded-sm border border-cyan-400/20 bg-cyan-400/10 px-1.5 py-0.5 font-mono text-[8px] text-cyan-300">
          Dual
        </span>
      ) : null}
    </div>
  );
}

function SimpleRow({ label, meta, tag }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid gap-2 border-b border-white/[0.06] py-3 last:border-none md:grid-cols-[190px_1fr] md:items-start"
    >
      <div className="min-w-0">
        <p className="text-xs font-medium text-white">{label}</p>
        {tag ? <p className="mt-1 text-[10px] text-zinc-500">{tag}</p> : null}
      </div>
      <p className="font-mono text-[10px] leading-5 text-zinc-400">{meta}</p>
    </motion.div>
  );
}

function DataTable({ title, rows, color = "cyan" }) {
  return (
    <Panel title={title} badge="Rich detail" badgeColor={color === "violet" ? "violet" : color === "rose" ? "rose" : "blue"}>
      <div className="space-y-0">
        {rows.map(([name, value], index) => (
          <ProgressRow
            key={`${name}-${value}`}
            label={name}
            meta={value}
            pct={Math.max(28, 92 - index * 7)}
            color={color}
          />
        ))}
      </div>
    </Panel>
  );
}

function ModalityTag({ label }) {
  const cls = modalityColors[label] ?? "bg-white/10 text-zinc-300 border-white/10";
  return <span className={`rounded-sm border px-1.5 py-0.5 font-mono text-[8px] ${cls}`}>{label}</span>;
}

function AudioDetail({ detail }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Panel title={detail.callCenter.title} badge={detail.callCenter.badge} badgeColor="blue">
        <p className="mb-3 font-mono text-[10px] leading-5 text-zinc-500">{detail.callCenter.subtitle}</p>
        <div className="space-y-0">
          {detail.callCenter.languages.map((item) => (
            <LangBar key={item.code + item.name} {...item} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {detail.callCenter.industries.map((industry) => (
            <span key={industry} className="rounded-sm border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] text-zinc-400">
              {industry}
            </span>
          ))}
        </div>
        <div className="mt-4 rounded-md border border-emerald-700/30 bg-emerald-950/40 p-3">
          <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-emerald-400">{detail.callCenter.usp.label}</p>
          <p className="text-[11.5px] font-light leading-relaxed text-emerald-200/70">{detail.callCenter.usp.text}</p>
        </div>
      </Panel>

      <Panel title={detail.podcast.title} badge={detail.podcast.badge} badgeColor="green">
        <p className="mb-3 text-[12.5px] font-light leading-relaxed text-zinc-300">{detail.podcast.description}</p>
        <div className="space-y-0">
          {detail.podcast.languages.map((item) => (
            <LangBar key={item.code + item.name} name={item.name} code={item.code} pct={item.pct} hrs={item.hrs} />
          ))}
        </div>
      </Panel>
    </div>
  );
}

function VideoDetail({ detail }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <Panel title={detail.use.title} badge={detail.use.badge} badgeColor="green">
        <p className="mb-4 text-[12px] leading-6 text-zinc-400">{detail.use.description}</p>
        {detail.use.rows.map((row) => (
          <SimpleRow key={row.source} label={row.source} tag={row.strength} meta={row.volume} />
        ))}
      </Panel>
      <Panel title={detail.pipeline.title} badge={detail.pipeline.badge} badgeColor="green">
        <div className="grid gap-2 sm:grid-cols-2">
          {detail.pipeline.steps.map((step) => (
            <div key={step.n} className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-emerald-300">{step.n}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-1 text-[11px] leading-5 text-zinc-500">{step.note}</p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function HealthcareDetail({ detail }) {
  const [radTab, setRadTab] = useState("ct");
  const radMap = { ct: detail.radTabs.ct, mri: detail.radTabs.mri, xray: detail.radTabs.xray };
  const activeRad = radMap[radTab];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={detail.radiology.title} badge={detail.radiology.badge} badgeColor="rose">
          <p className="mb-3 text-[12px] font-light leading-relaxed text-zinc-400">{detail.radiology.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr className="bg-white/5">
                  {["Record Category", "Modality", "Patients", "Images", "Format"].map((heading) => (
                    <th key={heading} className="px-3 py-2 text-left font-mono text-[8.5px] tracking-wide text-zinc-500">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {detail.radiology.rows.map((row, index) => (
                  <tr key={row.category} className={index % 2 === 1 ? "bg-white/[0.02]" : ""}>
                    <td className="px-3 py-2 text-zinc-300">{row.category}</td>
                    <td className="px-3 py-2"><ModalityTag label={row.modality} /></td>
                    <td className="px-3 py-2 font-mono text-[10px] text-emerald-400">{row.patients}</td>
                    <td className="px-3 py-2 font-mono text-[10px] text-emerald-400">{row.images}</td>
                    <td className="px-3 py-2 text-[10px] text-zinc-500">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title={detail.clinical.title} badge={detail.clinical.badge} badgeColor="green">
          <p className="mb-3 text-[12px] font-light leading-relaxed text-zinc-400">{detail.clinical.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr className="bg-white/5">
                  {["Record Category", "Specialty", "Patients", "Format"].map((heading) => (
                    <th key={heading} className="px-3 py-2 text-left font-mono text-[8.5px] tracking-wide text-zinc-500">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {detail.clinical.rows.map((row, index) => (
                  <tr key={row.category} className={index % 2 === 1 ? "bg-white/[0.02]" : ""}>
                    <td className="px-3 py-2 text-zinc-300">{row.category}</td>
                    <td className="px-3 py-2"><ModalityTag label={row.specialty} /></td>
                    <td className="px-3 py-2 font-mono text-[10px] text-emerald-400">{row.patients}</td>
                    <td className="px-3 py-2 text-[10px] text-zinc-500">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-zinc-500">IPD Specialties</p>
            <div className="flex flex-wrap gap-1.5">
              {detail.clinical.ipdSpecialties.map((specialty) => (
                <ModalityTag key={specialty} label={specialty} />
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-md border border-indigo-700/30 bg-indigo-950/40 p-3">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-indigo-400">HIV ART Longitudinal Fields</p>
            <p className="text-[11px] leading-relaxed text-indigo-300/70">{detail.clinical.hivFields}</p>
          </div>
        </Panel>
      </div>
      <Panel title={detail.radTabs.title} badge={detail.radTabs.badge} badgeColor="amber">
        <p className="mb-3 text-[12px] font-light leading-relaxed text-zinc-400">{detail.radTabs.description}</p>
        <div className="mb-3 flex flex-wrap gap-2">
          {["ct", "mri", "xray"].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setRadTab(key)}
              className={`rounded-sm border px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest transition-all ${
                radTab === key ? "border-white bg-white text-black" : "border-white/20 text-zinc-400 hover:border-white/40"
              }`}
            >
              {radMap[key].label}
            </button>
          ))}
        </div>
        <p className="mb-3 font-mono text-[9px] text-zinc-500">{activeRad.note}</p>
        <div className="grid max-h-64 grid-cols-2 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-3">
          {activeRad.items.map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex items-center justify-between gap-2 rounded-sm border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[10.5px]">
              <span className="leading-tight text-zinc-300">{item.name}</span>
              <span className="shrink-0 font-mono text-[8.5px] text-zinc-500">{item.count}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function TextbookDetail({ detail }) {
  const [activeCat, setActiveCat] = useState("all");
  const [activeLang, setActiveLang] = useState("all");
  const visible = detail.books.filter((book) => (activeCat === "all" || book.cat === activeCat) && (activeLang === "all" || book.lang === activeLang));

  return (
    <Panel title="Textbook Browser" badge={`${visible.length} samples shown`} badgeColor="amber">
      <FilterPills items={detail.subjectFilters} active={activeCat} onChange={setActiveCat} />
      <div className="mt-2">
        <FilterPills items={detail.langFilters} active={activeLang} onChange={setActiveLang} subtle />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((book) => (
          <div key={`${book.title}-${book.lang}`} className="rounded-lg border border-white/10 bg-black/35 p-3 transition hover:border-white/25">
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className={`h-[5px] w-[5px] rounded-full ${book.type === "STEM" ? "bg-emerald-300" : book.type === "Classical" ? "bg-amber-300" : "bg-rose-300"}`} />
              <span className="font-mono text-[9px] text-zinc-500">{book.langLabel} · {book.type}</span>
            </div>
            <p className="text-[11px] font-semibold text-zinc-200">{book.cat}</p>
            <p className="mt-1 text-[11px] leading-5 text-zinc-400">{book.title}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Badge color="blue">{book.words}</Badge>
              <Badge color="amber">{book.pages}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function QaDetail({ detail }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <Panel title={detail.use.title} badge={detail.use.badge} badgeColor="violet">
        <p className="mb-4 text-[12px] leading-6 text-zinc-400">{detail.use.description}</p>
        {detail.use.rows.map((row) => (
          <SimpleRow key={row.category} label={row.category} tag={row.note} meta={row.volume} />
        ))}
      </Panel>
      <Panel title={detail.schema.title} badge={detail.schema.badge} badgeColor="violet">
        <div className="grid gap-2">
          {detail.schema.fields.map((field) => (
            <div key={field.field} className="rounded-lg border border-white/10 bg-black/40 p-3">
              <p className="text-sm font-semibold text-white">{field.field}</p>
              <p className="mt-1 text-[11px] leading-5 text-zinc-500">{field.note}</p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function CodingDetail({ detail }) {
  return (
    <Panel title={detail.dsa.title} badge={detail.dsa.badge} badgeColor="indigo">
      <p className="mb-4 text-[12px] leading-6 text-zinc-400">{detail.dsa.description}</p>
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {detail.dsa.languages.map((language) => (
          <div key={language.lang} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
            <span className="block text-xl font-semibold text-indigo-300">{language.count}</span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-zinc-500">{language.lang}</span>
            <span className="mt-1 block text-[10px] text-zinc-500">{language.lines} · {language.tokens}</span>
          </div>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {detail.dsa.otherLangs.map((language) => (
          <span key={language} className="rounded-sm border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[9px] text-zinc-400">{language}</span>
        ))}
      </div>
      <div className="mb-4 grid grid-cols-3 gap-3">
        {detail.dsa.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
            <span className="block text-2xl font-semibold text-indigo-300">{stat.value}</span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </div>
      <Callout label={detail.dsa.usp.label} text={detail.dsa.usp.text} color="emerald" />
    </Panel>
  );
}

function VisionDetail({ detail, color = "fuchsia" }) {
  return (
    <div className="space-y-4">
      <Panel title={detail.type === "egocentric" ? "Egocentric Intelligence" : "Bunnies Mode Vision Infrastructure"} badge={detail.type === "egocentric" ? "POV Interaction Data" : "Production Vision"} badgeColor={color}>
        <p className="text-[12.5px] leading-6 text-zinc-400">{detail.intro}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {detail.capabilities.map((capability) => (
            <span key={capability} className="rounded-sm border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[9px] text-zinc-400">
              {capability}
            </span>
          ))}
        </div>
      </Panel>
      <Panel title="Category Detail" badge={`${detail.categories.length} groups`} badgeColor={color}>
        <div className="grid gap-3 md:grid-cols-2">
          {detail.categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="rounded-lg border border-white/10 bg-black/35 p-4"
            >
              <h5 className="text-sm font-semibold text-white">{category.name}</h5>
              <p className="mt-2 text-[11.5px] leading-6 text-zinc-400">{category.focus}</p>
              <p className="mt-3 border-t border-white/10 pt-3 font-mono text-[9.5px] leading-5 text-zinc-500">
                Best suited for: {category.bestFor}
              </p>
            </motion.div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function Callout({ label, text, color = "emerald" }) {
  const styles = {
    emerald: "border-emerald-500/25 bg-emerald-950/35 text-emerald-200/75",
    indigo: "border-indigo-500/25 bg-indigo-950/35 text-indigo-200/75",
  };
  return (
    <div className={`mt-4 rounded-lg border p-3 ${styles[color]}`}>
      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em]">{label}</p>
      <p className="text-[11.5px] leading-6">{text}</p>
    </div>
  );
}

function FilterPills({ items, active, onChange, subtle = false }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={`rounded-full border px-3 py-1 text-[11px] transition ${
            active === item.value
              ? subtle ? "border-white bg-white/80 text-black" : "border-white bg-white text-black"
              : "border-white/20 text-zinc-400 hover:border-white/40"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function CorpusDetail({ tab }) {
  if (!tab.detail) return <GenericDetail tab={tab} />;
  if (tab.detail.type === "audio") return <AudioDetail detail={tab.detail} />;
  if (tab.detail.type === "video") return <VideoDetail detail={tab.detail} />;
  if (tab.detail.type === "healthcare") return <HealthcareDetail detail={tab.detail} />;
  if (tab.detail.type === "textbook") return <TextbookDetail detail={tab.detail} />;
  if (tab.detail.type === "qa") return <QaDetail detail={tab.detail} />;
  if (tab.detail.type === "coding") return <CodingDetail detail={tab.detail} />;
  if (tab.detail.type === "image") return <VisionDetail detail={tab.detail} color="fuchsia" />;
  if (tab.detail.type === "egocentric") return <VisionDetail detail={tab.detail} color="lime" />;
  return <GenericDetail tab={tab} />;
}

function GenericDetail({ tab }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <DataTable title={tab.tableTitle} rows={tab.table} />
      <Panel title="Why it matters" badge="Notes">
        <ul className="space-y-4">
          {tab.notes.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-7 text-zinc-300">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export default function CorpusSection() {
  const [active, setActive] = useState(datasets[0].id);
  const current = getDataset(active);

  return (
    <SectionShell
      id="corpus"
      dark
      eyebrow="AI Training Data Corpus"
      title="Our AI Training Data Corpus — Audio, Medical, Coding & Textbook Datasets"
      copy="Eight proprietary corpus collections — audio, video, textbooks, healthcare, Q&A, coding, image, and egocentric data. Expert-curated, categorized, and available for enterprise AI training."
    >
      <div className="mt-9 flex flex-wrap gap-2">
          {datasets.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                active === tab.id
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-black text-zinc-300 hover:border-white/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black"
        >
          <div className={`bg-gradient-to-br ${current.accent} p-5 md:p-8`}>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                {/* <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">{current.label} corpus</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{current.title}</h3> */}
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">{current.label} corpus</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                 {current.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-zinc-200">{current.summary}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {current.metrics.map(([value, label], index) => (
                  <StatTile key={`${value}-${label}`} value={value} label={label} />
                  // <StatTile key={`${value}-${label}`} value={value} label={label} featured={index === 0} />
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 pb-8 pt-8 md:px-8">
            <CorpusDetail tab={current} />
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}
