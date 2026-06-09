export const metadata = {
  title: "Data Labeling, Curation & LLM Factuality Services | InfoBay.AI",
  description:
    "InfoBay.AI offers enterprise data labeling, AI data curation, LLM factuality evaluation & NLP solutions. Human-in-the-loop annotation. RLHF-ready. HIPAA & GDPR compliant. Request an audit.",
  keywords: [
    "data labeling services",
    "AI data curation",
    "LLM factuality evaluation",
    "NLP solutions",
    "RLHF annotation",
    "human-in-the-loop labeling",
    "enterprise AI data",
  ],
  alternates: {
    canonical: "https://infobay.ai/services",
  },
  openGraph: {
    title: "AI Data Services — Labeling, Curation & LLM Factuality | InfoBay.AI",
    description:
      "Enterprise data labeling, AI data curation, LLM factuality evaluation & NLP solutions. RLHF-ready. HIPAA & GDPR compliant.",
    url: "https://infobay.ai/services",
    siteName: "InfoBay.AI",
    images: [
      {
        url: "https://infobay.ai/og-image-services.png",
        width: 1200,
        height: 630,
        alt: "InfoBay.AI — Enterprise AI Data Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@infobayai",
    title: "AI Data Services — Labeling, Curation & LLM Factuality | InfoBay.AI",
    description:
      "Enterprise data labeling, AI data curation, LLM factuality evaluation & NLP solutions. RLHF-ready. HIPAA & GDPR compliant.",
    images: ["https://infobay.ai/og-image-services.png"],
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      {/* FAQPage JSON-LD schema — generates rich results in Google SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of data labeling services does InfoBay.AI offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "InfoBay.AI provides end-to-end data labeling for images, video, audio, text, 3D data, and multimodal pipelines. All annotation is human-in-the-loop validated with multi-tier quality assurance, making outputs ready for vision, NLP, speech, and custom ML models.",
                },
              },
              {
                "@type": "Question",
                name: "How does InfoBay.AI handle RLHF and SFT dataset design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We build custom curation pipelines for post-training workflows including SFT instruction datasets with explicit reasoning traces, RLHF preference data annotated by domain experts, and benchmark-aligned evaluation datasets delivered in HuggingFace-compatible formats.",
                },
              },
              {
                "@type": "Question",
                name: "What is LLM factuality evaluation and why does it matter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "LLM factuality evaluation is the process of verifying, red-teaming, and fine-tuning language models to reduce hallucinations and harmful bias. InfoBay runs multi-layer fact-checking loops, cross-source accuracy checks, and continuous feedback cycles back into RLHF training.",
                },
              },
              {
                "@type": "Question",
                name: "Which languages does InfoBay.AI support for NLP and ASR services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "InfoBay supports 57+ languages including English, Arabic, French, Swahili, Nepali, Bengali, Bahasa Indonesia, Hindi, and 35+ additional languages. Our 2.1M+ hour multilingual audio corpus includes dual-channel call center data for ASR and speaker diarization training.",
                },
              },
              {
                "@type": "Question",
                name: "Is InfoBay.AI compliant with HIPAA, GDPR, and the EU AI Act?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All healthcare datasets are de-identified at source with automated PII detection. Audio data is collected via formal enterprise agreements with documented provenance chains. Every dataset ships with a Data Card in EU AI Act Article 10 format.",
                },
              },
              {
                "@type": "Question",
                name: "What delivery formats does InfoBay.AI support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Audio: WAV/FLAC + JSON transcripts + RTTM diarisation. Textbooks: JSONL + Parquet + HuggingFace-compatible. Healthcare: DICOM + PDF + anonymised metadata. Coding: JSONL per language + problem taxonomy JSON. All formats compatible with Megatron-LM, NeMo, LLaMA-Factory, and HuggingFace datasets.",
                },
              },
              {
                "@type": "Question",
                name: "Can we license specific language subsets or domain slices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The corpus is structured by language, domain, and category. Licenses can be scoped to any combination such as Arabic + Legal, Bahasa + Engineering, or Nepali + Call Center Audio. Contact us to discuss your specific requirements.",
                },
              },
            ],
          }),
        }}
      />

      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://infobay.ai",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://infobay.ai/services",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}