export const metadata = {
  title: "About InfoBay.AI — Enterprise AI Data Infrastructure Company",
  description:
    "InfoBay.AI is an enterprise AI training data company headquartered in Lucknow, India, with operations across 4 continents. Scale AI alternative with vendor-independent, EU AI Act compliant corpus.",
  keywords: [
    "AI data annotation company",
    "enterprise AI training data",
    "AI data annotation company India",
    "Scale AI alternative",
    "AI training data company Lucknow",
    "data annotation services India",
  ],
  alternates: {
    canonical: "https://infobay.ai/aboutus",
  },
  openGraph: {
    title: "About InfoBay.AI — Enterprise AI Data Infrastructure Company",
    description:
      "InfoBay.AI is an enterprise AI training data company headquartered in Lucknow, India, with operations across 4 continents. Scale AI alternative with vendor-independent, EU AI Act compliant corpus.",
    url: "https://infobay.ai/aboutus",
    siteName: "InfoBay.AI",
    images: [
      {
        url: "https://infobay.ai/og-image-about.png",
        width: 1200,
        height: 630,
        alt: "InfoBay.AI — Enterprise AI Data Infrastructure Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@infobayai",
    title: "About InfoBay.AI — Enterprise AI Data Infrastructure Company",
    description:
      "Enterprise AI training data company headquartered in Lucknow, India. Scale AI alternative with expert-verified datasets across 57+ languages.",
    images: ["https://infobay.ai/og-image-about.png"],
  },
};

export default function AboutUsLayout({ children }) {
  return (
    <>
      {/* JSON-LD: Organization schema */}
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
            foundingLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lucknow",
                addressCountry: "IN",
              },
            },
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
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
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
                name: "About InfoBay.AI",
                item: "https://infobay.ai/aboutus",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}