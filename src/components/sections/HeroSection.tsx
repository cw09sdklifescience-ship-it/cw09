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

const partners = [
  { name: "US FDA",            src: "/images/FDA.png",       width: 110, height: 46 },
  { name: "Council of Europe", src: "/images/Council.png",   width: 110, height: 46 },
  { name: "KFDA",               src: "/images/KFDA.jpeg",    width: 110, height: 46 },
  { name: "Cofepris",          src: "/images/Cofepris.jpeg", width: 110, height: 46 },
];

export default function HeroSection() {
  return (
    <section style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ── Hero ── */}
      <div className="hero-wrap">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/hero page.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-inner">

            <p className="eyebrow">
              <span className="eyebrow-line" />
              WHO-GMP Certified Pharmaceutical Company
            </p>

            <h1 className="headline">
              Creating
              <br />
              <span style={{ color: "#0C4A6E" }}>Healthier Smiles,</span>
              <br />
              Stronger Future
            </h1>

            <div className="rule" />

            <p className="subcopy">
              WHO-GMP Certified Pharmaceutical Company Manufacturing High-Quality Tablets, Capsules, Syrups and Injectables.
            </p>

            <div className="cta-row">
              <Link href="/products" className="btn btn-primary">
                Explore Products →
              </Link>
              <Link href="/franchise" className="btn btn-outline">
                Franchise / PCD Enquiry →
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Partners / Accreditations ── */}
      

      <style jsx>{`
        /* ===== HERO ===== */
        .hero-wrap {
          position: relative;
          min-height: 90vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.60) 55%, rgba(255,255,255,0.08) 100%);
          z-index: 1;
        }
     .hero-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 48px 80px;
  width: 100%;
}

.hero-inner {
  max-width: 560px;
  margin-top: 0;
}
        .eyebrow {
          font-size: 13px;
          font-weight: 600;
          color: #0C4A6E;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .eyebrow-line {
          width: 32px;
          height: 2px;
          background: #38BDF8;
          display: inline-block;
          flex-shrink: 0;
        }
        .headline {
          font-size: clamp(36px, 8vw, 64px);
          font-weight: 900;
          line-height: 1.08;
          color: #38BDF8;
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }
        .rule {
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #38BDF8, #0C4A6E);
          border-radius: 2px;
          margin: 20px 0 24px;
        }
        .subcopy {
          font-size: 16px;
          line-height: 1.75;
          color: #0C4A6E;
          max-width: 460px;
          margin: 0 0 36px;
        }
        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          font-weight: 700;
          font-size: 13.5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: #0C4A6E;
          color: #fff;
        }
        .btn-primary:hover {
          background: #38BDF8;
        }
        .btn-outline {
          background: transparent;
          color: #0C4A6E;
          border: 2px solid #0C4A6E;
        }
        .btn-outline:hover {
          background: #0C4A6E;
          color: #fff;
        }

        /* ===== PARTNERS ===== */
        .partners-wrap {
          background: linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%);
          border-top: 1px solid #E0F2FE;
          padding: 64px 48px;
        }
        .partners-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .section-heading {
          text-align: center;
          margin-bottom: 44px;
        }
        .section-eyebrow {
          font-size: 13px;
          font-weight: 600;
          color: #38BDF8;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .section-eyebrow-line {
          width: 24px;
          height: 2px;
          background: #38BDF8;
          display: inline-block;
        }
        .section-title {
          font-size: clamp(24px, 5vw, 34px);
          font-weight: 800;
          color: #0C4A6E;
          margin: 0 0 12px;
        }
        .section-sub {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          max-width: 640px;
          margin: 0 auto;
        }
        .logo-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 20px 28px;
          min-width: 160px;
          min-height: 96px;
          filter: grayscale(100%);
          opacity: 0.75;
          transition: filter 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .logo-card:hover {
          filter: grayscale(0%);
          opacity: 1;
          box-shadow: 0 8px 24px rgba(12,74,110,0.12);
          transform: translateY(-3px);
        }
        .logo-frame {
          width: 150px;
          height: 70px;
          position: relative;
        }
        .logo-card-badge {
          padding: 16px 24px;
        }
        .logo-card-who {
          min-width: 220px;
          min-height: 120px;
          padding: 20px 28px;
        }
        .office-strip {
          margin-top: 44px;
          padding-top: 28px;
          border-top: 1px solid #E2E8F0;
          text-align: center;
        }
        .office-line {
          font-size: 13.5px;
          color: #475569;
          margin: 0;
        }
        .office-line-bold {
          color: #0C4A6E;
          margin: 0 0 4px;
          font-weight: 600;
        }

        /* ===== TABLET ===== */
        @media (max-width: 900px) {
          .hero-content {
            padding: 80px 32px 60px;
          }
          .partners-wrap {
            padding: 48px 32px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 640px) {
          .hero-wrap {
            min-height: 100vh;
            align-items: flex-end;
          }
          .hero-overlay {
            background: linear-gradient(
              to top,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.85) 45%,
              rgba(255,255,255,0.55) 100%
            );
          }
          .hero-content {
            padding: 12px 20px 100px;
          }
          .hero-inner {
            max-width: 100%;
            margin-top: 0;
          }
          .headline {
            font-size: clamp(32px, 10vw, 44px);
          }
          .subcopy {
            font-size: 14.5px;
            max-width: 100%;
          }
          .cta-row {
            flex-direction: column;
            gap: 12px;
          }
          .btn {
            width: 100%;
            padding: 14px 20px;
          }

          .partners-wrap {
            padding: 40px 16px;
          }
          .section-title {
            padding: 0 8px;
          }
          .section-sub {
            padding: 0 8px;
          }
          .logo-grid {
            gap: 14px;
          }
          .logo-card {
            min-width: 130px;
            min-height: 80px;
            padding: 14px 18px;
            flex: 1 1 calc(50% - 14px);
          }
          .logo-frame {
            width: 110px;
            height: 50px;
          }
          .logo-card-who {
            min-width: 100%;
            flex-basis: 100%;
          }
          .office-line {
            padding: 0 8px;
          }
        }

        @media (max-width: 400px) {
          .logo-card {
            flex-basis: 100%;
          }
        }
      `}</style>
    </section>
  );
}