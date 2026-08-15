"use client";
import Link from "next/link";
import Image from "next/image";

// ── Stat icons (inline SVG) ───────────────────────────────────
const IconCertified = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="14" stroke="#0C4A6E" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="18" r="9"  stroke="#0C4A6E" strokeWidth="1.5" fill="none"/>
    <polyline points="13,18 16.5,21.5 23,14" stroke="#0C4A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 30 L8 34 L12 32 L18 34 L24 32 L28 34 L24 30" stroke="#0C4A6E" strokeWidth="1.2" fill="none"/>
  </svg>
);
const IconProducts = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="14" width="12" height="16" rx="2" stroke="#0C4A6E" strokeWidth="1.8" fill="none"/>
    <rect x="20" y="10" width="12" height="20" rx="2" stroke="#0C4A6E" strokeWidth="1.8" fill="none"/>
    <path d="M7 14 Q10 6 13 14" stroke="#0C4A6E" strokeWidth="1.5" fill="none"/>
    <path d="M23 10 Q26 2 29 10" stroke="#0C4A6E" strokeWidth="1.5" fill="none"/>
    <line x1="4" y1="20" x2="16" y2="20" stroke="#0C4A6E" strokeWidth="1.2"/>
  </svg>
);
const IconClients = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="13" cy="13" r="5" stroke="#0C4A6E" strokeWidth="1.8" fill="none"/>
    <circle cx="24" cy="13" r="5" stroke="#0C4A6E" strokeWidth="1.8" fill="none"/>
    <path d="M4 30 Q4 22 13 22 Q18 22 21 25" stroke="#0C4A6E" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M24 22 Q32 22 32 30" stroke="#0C4A6E" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
  </svg>
);
const IconIndia = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4 C10 8 6 14 7 20 C8 26 13 30 18 32 C23 30 28 26 29 20 C30 14 26 8 18 4Z" stroke="#0C4A6E" strokeWidth="1.8" fill="none"/>
    <circle cx="18" cy="18" r="3" stroke="#0C4A6E" strokeWidth="1.5" fill="none"/>
    <line x1="18" y1="10" x2="18" y2="14" stroke="#0C4A6E" strokeWidth="1.2"/>
    <line x1="18" y1="22" x2="18" y2="26" stroke="#0C4A6E" strokeWidth="1.2"/>
  </svg>
);
const IconEthical = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4 L30 9 L30 20 C30 26 24 31 18 33 C12 31 6 26 6 20 L6 9 Z" stroke="#0C4A6E" strokeWidth="1.8" fill="none"/>
    <polyline points="13,18 16.5,21.5 23,14" stroke="#0C4A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Fallback badges for accreditations that don't have a logo file yet ──
// Drop real files into /public/images and swap these for <Image /> the
// same way FDA / KFDA / Council / Cofepris are wired up below.
const IconQualitySeal = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="26" r="20" stroke="#0C4A6E" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="26" r="14" stroke="#38BDF8" strokeWidth="1.3" fill="none"/>
    <text x="32" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0C4A6E" fontFamily="'Segoe UI', Arial, sans-serif">100%</text>
    <text x="32" y="32" textAnchor="middle" fontSize="5.5" fontWeight="600" fill="#0C4A6E" fontFamily="'Segoe UI', Arial, sans-serif">QUALITY</text>
    <path d="M22 40 L16 50 L22 47 L27 52 L32 42" stroke="#0C4A6E" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
    <path d="M42 40 L48 50 L42 47 L37 52 L32 42" stroke="#0C4A6E" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
  </svg>
);
const IconWHO = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
    <circle cx="20" cy="20" r="15" stroke="#0C4A6E" strokeWidth="2" fill="none"/>
    <path d="M20 5 C13 10 10 16 11 22 C12 28 16 32 20 34" stroke="#0C4A6E" strokeWidth="1.2" fill="none"/>
    <path d="M20 5 C27 10 30 16 29 22 C28 28 24 32 20 34" stroke="#0C4A6E" strokeWidth="1.2" fill="none"/>
    <line x1="6" y1="20" x2="34" y2="20" stroke="#0C4A6E" strokeWidth="1.2"/>
    <text x="42" y="18" fontSize="10" fontWeight="700" fill="#0C4A6E" fontFamily="'Segoe UI', Arial, sans-serif">World Health</text>
    <text x="42" y="30" fontSize="10" fontWeight="700" fill="#0C4A6E" fontFamily="'Segoe UI', Arial, sans-serif">Organization</text>
  </svg>
);

// ── Partner / accreditation logo data ───────────────────────────
// Place matching files in /public/images. Update the "src" path once
// real artwork is available for entries currently using a fallback icon.
const partners = [
  { name: "US FDA",             src: "/images/FDA.png",      width: 110, height: 46 },
  { name: "Council of Europe",  src: "/images/Council.png",  width: 110, height: 46 },
  { name: "KFDA",                src: "/images/KFDA.jpeg",   width: 110, height: 46 },
  { name: "Cofepris",           src: "/images/Cofepris.jpeg", width: 110, height: 46 },
];

export default function HeroSection() {
  return (
    <section style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", minHeight: "90vh", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* Background video */}
        <video
          autoPlay muted loop playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", zIndex: 0,
          }}
        >
          <source src="/hero page.mp4" type="video/mp4" />
        </video>

        {/* Light overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.60) 55%, rgba(255,255,255,0.08) 100%)",
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "100px 48px 80px",
          width: "100%",
        }}>
          <div style={{ maxWidth: 560, marginTop: "50px" }}>

            {/* Eyebrow */}
            <p style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0C4A6E",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ width: 32, height: 2, background: "#38BDF8", display: "inline-block" }} />
              WHO-GMP Certified Pharmaceutical Company
            </p>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.08,
              color: "#38BDF8",
              margin: "0 0 16px",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
            }}>
              Creating
              <br />
              <span style={{ color: "#0C4A6E" }}>Healthier Smiles,</span>
              <br />
              Stronger Future
            </h1>

            {/* Rule */}
            <div style={{
              width: 80, height: 3,
              background: "linear-gradient(to right, #38BDF8, #0C4A6E)",
              borderRadius: 2,
              margin: "20px 0 24px",
            }} />

            {/* Sub-copy */}
            <p style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "#0C4A6E",
              maxWidth: 460,
              margin: "0 0 36px",
            }}>
              WHO-GMP Certified Pharmaceutical Company Manufacturing High-Quality Tablets, Capsules, Syrups and Injectables.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <Link
                href="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "#0C4A6E",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#38BDF8")}
                onMouseLeave={e => (e.currentTarget.style.background = "#0C4A6E")}
              >
                Explore Products →
              </Link>

              <Link
                href="/franchise"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "transparent",
                  color: "#0C4A6E",
                  fontWeight: 700,
                  fontSize: 13.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  borderRadius: 6,
                  border: "2px solid #0C4A6E",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0C4A6E"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0C4A6E"; }}
              >
                Franchise / PCD Enquiry →
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Partners / Accreditations ── */}
      <div style={{
        background: "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)",
        borderTop: "1px solid #E0F2FE",
        padding: "64px 48px",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#38BDF8",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "#38BDF8", display: "inline-block" }} />
              About Our Standards
              <span style={{ width: 24, height: 2, background: "#38BDF8", display: "inline-block" }} />
            </p>
            <h2 style={{
              fontSize: "clamp(26px, 3vw, 34px)",
              fontWeight: 800,
              color: "#0C4A6E",
              margin: "0 0 12px",
            }}>
              We Offer Quality Drugs from a World-Class Manufacturing Facility
            </h2>
            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: 640,
              margin: "0 auto",
            }}>
              Every product we manufacture is backed by internationally recognised regulatory
              bodies and quality partners — our commitment to safety, compliance, and trust.
            </p>
          </div>

          {/* Logo grid */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}>
            {partners.map((partner) => (
              <div
                key={partner.name}
                title={partner.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "20px 28px",
                  minWidth: 160,
                  minHeight: 96,
                  filter: "grayscale(100%)",
                  opacity: 0.75,
                  transition: "filter 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(12,74,110,0.12)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.75";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
              <div
  style={{
    width: 150,
    height: 70,
    position: "relative",
  }}
>
  <Image
    src={partner.src}
    alt={partner.name}
    fill
    style={{
      objectFit: "contain",
    }}
  />
</div>
              </div>
            ))}

            {/* Fallback badges — swap for real logo files when available */}
            <div
              title="100% Quality Assured"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12,
                padding: "16px 24px", minWidth: 160, minHeight: 96,
                filter: "grayscale(100%)", opacity: 0.75,
                transition: "filter 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(12,74,110,0.12)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.75";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <IconQualitySeal />
            </div>

            <div
              title="World Health Organization"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12,
                padding: "20px 28px", minWidth: 220, minHeight: 120,
                filter: "grayscale(100%)", opacity: 0.75,
                transition: "filter 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(12,74,110,0.12)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.75";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <IconWHO />
            </div>
          </div>

          {/* Registered office strip */}
          <div style={{
            marginTop: 44,
            paddingTop: 28,
            borderTop: "1px solid #E2E8F0",
            textAlign: "center",
          }}>
            <p style={{ fontSize: 13.5, color: "#0C4A6E", margin: "0 0 4px", fontWeight: 600 }}>
              Regd. Office: Galacus Healthcare Pvt. Ltd., Office No. 201, CTS No. 11/B,
              Phatak Park, Erandwane, Karve Road, Pune – 411004
            </p>
            <p style={{ fontSize: 13.5, color: "#475569", margin: 0 }}>
              Mob: 9890288010 / 9049733276 &nbsp;•&nbsp; Email:{" "}
              <a href="mailto:ho@galacushealthcare.com" style={{ color: "#0C4A6E", fontWeight: 600, textDecoration: "none" }}>
                ho@galacushealthcare.com
              </a>
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}