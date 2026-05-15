"use client";

import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ClientPortfolioSection from "@/components/sections/ClientPortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import CorpusSection from "@/components/sections/CorpusSection";
import DatasetUspsSection from "@/components/sections/DatasetUspsSection";
import FaqSection from "@/components/sections/FaqSection";
import GlobalPresenceSection from "@/components/sections/GlobalPresenceSection";
import HeroSection from "@/components/sections/HeroSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import WhyInfobaySection from "@/components/sections/WhyInfobaySection";

export default function HomeExperience() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ClientPortfolioSection />
      <ProblemSection />
      <SolutionSection />
      <CorpusSection />
      <DatasetUspsSection />
      <CapabilitiesSection />
      <WhyInfobaySection />
      <UseCasesSection />
      <GlobalPresenceSection />
      <InfrastructureSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
