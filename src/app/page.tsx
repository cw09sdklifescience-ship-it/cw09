import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TherapySection from "@/components/sections/TherapySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import AboutSection from "@/components/sections/AboutSection";
export const metadata: Metadata = {
  title: "PharmaCore — Trusted Medicine, Trusted Care",
  description:
    "India's trusted pharmaceutical company. WHO-GMP certified medicines, generic drugs, specialty pharma solutions. Serving 20+ states with 500+ products.",
  alternates: { canonical: "https://www.yourpharmacompany.com" },
};

// JSON-LD Structured Data for Home Page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PharmaCore Pharmaceuticals",
  url: "https://www.yourpharmacompany.com",
  logo: "https://www.yourpharmacompany.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Pharma Industrial Area",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/pharmacore",
    "https://twitter.com/pharmacore",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <AboutSection/>
      <TherapySection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
