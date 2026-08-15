import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourpharmacompany.com"),
  title: {
    default: "PharmaCore — Trusted Medicine, Trusted Care",
    template: "%s | PharmaCore Pharmaceuticals",
  },
  description:
    "PharmaCore Pharmaceuticals delivers high-quality, WHO-GMP certified medicines across India. Explore our range of generics, specialty drugs, and healthcare solutions.",
  keywords: [
    "pharmaceutical company",
    "medicines India",
    "generic drugs",
    "WHO GMP certified",
    "healthcare solutions",
    "pharma manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.yourpharmacompany.com",
    siteName: "PharmaCore Pharmaceuticals",
    title: "PharmaCore — Trusted Medicine, Trusted Care",
    description:
      "High-quality WHO-GMP certified medicines across India. Generics, specialty drugs & healthcare solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PharmaCore Pharmaceuticals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmaCore — Trusted Medicine, Trusted Care",
    description: "High-quality WHO-GMP certified medicines across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://www.yourpharmacompany.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
