// import HomeExperience from "@/components/HomeExperience";

// export default function Home() {
//   return <HomeExperience />;
// }

import HomeExperience from "@/components/HomeExperience";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "AI Training Data & Annotation Services | InfoBay.AI",
  description:
    "Enterprise AI training data from InfoBay.AI — 2.1M+ hours multilingual audio, 53M+ medical images, 25M coding tokens. Expert-verified datasets for LLM pre-training, RLHF & alignment. EU AI Act compliant.",
  keywords: [
    "AI training data",
    "data annotation services",
    "LLM training datasets",
    "enterprise AI training data",
    "machine learning training data",
    "RLHF data provider",
    "multilingual speech dataset",
    "medical AI training data",
    "AI data annotation company",
    "Scale AI alternative",
  ],
  alternates: {
    canonical: "https://infobay.ai",
  },
  openGraph: {
    title: "AI Training Data & Annotation Services | InfoBay.AI",
    description:
      "InfoBay.AI engineers expert-verified training data — 2.1M+ audio hours, 53M+ medical images, 25M coding tokens across 57 languages. Reduce hallucinations. Improve benchmark scores.",
    url: "https://infobay.ai",
    siteName: "InfoBay.AI",
    images: [
      {
        url: "https://infobay.ai/og-image-homepage.png",
        width: 1200,
        height: 630,
        alt: "InfoBay.AI — Enterprise AI Training Data & Annotation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@infobayai",
    title: "AI Training Data & Annotation Services | InfoBay.AI",
    description:
      "Expert-verified AI training data — 2.1M+ audio hours, 53M+ medical images, 25M coding tokens across 57 languages.",
    images: ["https://infobay.ai/og-image-homepage.png"],
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Organization schema — triggers Google Knowledge Panel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InfoBay AI",
            url: "https://infobay.ai",
            logo: "https://infobay.ai/InfoBay.AI Logo-04.png",
            description:
              "Enterprise AI training data, annotation, and LLM evaluation services headquartered in Lucknow, India.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "contact@infobay.ai",
            },
            sameAs: [
              "https://x.com/infobayai",
              "https://www.linkedin.com/company/edugorilla-pvt-ltd",
              "https://www.instagram.com/infobay.ai/",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressCountry: "IN",
            },
          }),
        }}
      />

      {/* FAQPage schema — generates rich results in Google SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can we license specific language subsets or domain slices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The corpus is structured by language, domain, and category. Licenses can be scoped to Arabic + Legal, Bahasa + Engineering, or any combination. Minimum license volumes apply. Contact us to discuss your specific requirements.",
                },
              },
              {
                "@type": "Question",
                name: "How do you handle PII in healthcare and audio datasets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Automated PII detection runs across all datasets before delivery. Audio uses speaker anonymisation. Healthcare records are de-identified at source. Data lineage documentation is available for HIPAA, GDPR, and EU AI Act compliance review.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer sample packs before full licensing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. 10% sample packs are available for textbooks per language group and coding. Audio samples are available for specific language-industry combinations. Healthcare samples are available under NDA with IRB-equivalent institutional review.",
                },
              },
              {
                "@type": "Question",
                name: "Can you build custom datasets we don't see in the catalogue?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Custom corpus collection, annotation, and curation for domains or languages not in the standard catalogue. Minimum engagement sizes apply. Lead time depends on language, domain, and volume. The Model Quality Audit is the starting point for custom engagements.",
                },
              },
              {
                "@type": "Question",
                name: "What delivery formats are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Audio: WAV/FLAC + JSON transcripts + RTTM diarisation + Metadata CSV. Textbooks: JSONL (gzip) + Parquet metadata manifest + HuggingFace-compatible. Healthcare: DICOM + PDF + anonymised metadata. Coding: JSONL per language + problem taxonomy JSON. All formats compatible with Megatron-LM, NeMo, LLaMA-Factory, and HuggingFace datasets.",
                },
              },
              {
                "@type": "Question",
                name: "How do you document data provenance for EU AI Act compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every textbook carries its ISBN. Every audio hour carries its enterprise data agreement reference, language code, industry vertical, and channel configuration. Data Cards delivered with every dataset include provenance documentation in the EU AI Act Article 10 format.",
                },
              },
            ],
          }),
        }}
      />

      <HomeExperience />
    </>
  );
}