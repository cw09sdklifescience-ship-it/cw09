"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
  </svg>
);
const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const LeafIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 014 13V6s7-2 11 4c1.5 2.2 1.5 5 0 7-1 1.3-2.5 2.3-4 3z"/>
    <path d="M4 6l7 7"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const TruckIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const benefits = [
  { Icon: LeafIcon, text: "WHO-GMP Certified Manufacturing" },
  { Icon: ShieldIcon, text: "Strict Quality Standards" },
  { Icon: TruckIcon, text: "Pan India Distribution" },
];

function useVisible() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function CTASection() {
  const { ref, visible } = useVisible();
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0C4A6E 0%, #0C4A6E 40%, #0C4A6E 100%)",
        padding: "0",
        fontFamily: "'Segoe UI', system-ui, Arial, sans-serif",
      }}
    >
      {/* ── Ambient glow blobs ── */}
      <div style={{
        position: "absolute", top: "-100px", left: "10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, #0C4A6E18 0%, transparent 65%)",
        pointerEvents: "none",
        animation: "pulse1 6s ease-in-out infinite",
      }}/>
      <div style={{
        position: "absolute", bottom: "-80px", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, #38BDF814 0%, transparent 65%)",
        pointerEvents: "none",
        animation: "pulse2 8s ease-in-out infinite",
      }}/>

      {/* ── Sky-blue top border ── */}
      <div style={{
        height: 3,
        background: "linear-gradient(90deg, transparent 0%, #0C4A6E 30%, #BAE6FD 50%, #0C4A6E 70%, transparent 100%)",
      }}/>

      {/* ── Main content ── */}
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "80px 32px 88px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}
        className="cta-grid"
      >
        {/* LEFT: Copy */}
        <div style={{
          transform: visible ? "translateX(0)" : "translateX(-40px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(.22,1,.36,1), opacity 0.7s ease",
        }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(12,74,110,0.12)",
            border: "1px solid rgba(12,74,110,0.35)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 24,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#38BDF8",
              boxShadow: "0 0 6px #38BDF8",
              display: "inline-block",
            }}/>
            <span style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#38BDF8",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}>
              Partner With Us
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            margin: "0 0 20px",
            color: "#fff",
          }}>
            Ready to{" "}
            <span style={{
              background: "linear-gradient(135deg, #38BDF8, #BAE6FD, #0C4A6E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Grow Together
            </span>
            <br />with SDK Life Science?
          </h2>

          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75,
            margin: "0 0 36px",
            maxWidth: 440,
          }}>
            Whether you're a hospital, distributor, or healthcare chain — we deliver WHO-GMP certified pharmaceutical solutions with Pan India reach and unmatched quality.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 100,
                background: hoverContact
                  ? "linear-gradient(135deg, #38BDF8, #BAE6FD)"
                  : "linear-gradient(135deg, #0C4A6E, #38BDF8)",
                color: "#0C4A6E",
                fontWeight: 800,
                fontSize: 14,
                textDecoration: "none",
                letterSpacing: "0.3px",
                boxShadow: hoverContact
                  ? "0 8px 28px rgba(12,74,110,0.55)"
                  : "0 4px 16px rgba(12,74,110,0.35)",
                transform: hoverContact ? "translateY(-2px)" : "translateY(0)",
                transition: "all 0.25s ease",
              }}
            >
              <PhoneIcon />
              Contact Our Team
            </Link>

            <Link
              href="/products"
              onMouseEnter={() => setHoverProducts(true)}
              onMouseLeave={() => setHoverProducts(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 100,
                background: "transparent",
                color: hoverProducts ? "#38BDF8" : "rgba(255,255,255,0.85)",
                border: `1.5px solid ${hoverProducts ? "#38BDF8" : "rgba(255,255,255,0.25)"}`,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                letterSpacing: "0.3px",
                transform: hoverProducts ? "translateY(-2px)" : "translateY(0)",
                transition: "all 0.25s ease",
              }}
            >
              <GridIcon />
              Browse Products <ArrowRight />
            </Link>
          </div>
        </div>

        {/* RIGHT: Benefits cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          transform: visible ? "translateX(0)" : "translateX(40px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(.22,1,.36,1) 0.15s, opacity 0.7s ease 0.15s",
        }}>
          {benefits.map(({ Icon, text }, i) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(12,74,110,0.18)",
                borderRadius: 16,
                padding: "22px 28px",
                transform: visible ? "translateY(0)" : "translateY(20px)",
                opacity: visible ? 1 : 0,
                transition: `transform 0.5s ease ${0.2 + i * 0.1}s, opacity 0.5s ease ${0.2 + i * 0.1}s`,
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "linear-gradient(135deg, rgba(12,74,110,0.2), rgba(12,74,110,0.08))",
                border: "1px solid rgba(12,74,110,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38BDF8",
                flexShrink: 0,
              }}>
                <Icon />
              </div>
              <div>
                <p style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}>
                  {text}
                </p>
                <p style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.45)",
                  margin: "4px 0 0",
                }}>
                  Trusted by 500+ healthcare partners across India
                </p>
              </div>
            </div>
          ))}

          {/* Trust badge */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 24px",
            borderRadius: 14,
            background: "linear-gradient(135deg, rgba(12,74,110,0.15), rgba(12,74,110,0.05))",
            border: "1px solid rgba(12,74,110,0.25)",
            marginTop: 4,
          }}>
            <div style={{
              fontSize: 28,
              lineHeight: 1,
              transform: visible ? "scale(1)" : "scale(0.5)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.5s cubic-bezier(.22,1,.36,1) 0.55s, opacity 0.5s ease 0.55s",
            }}>🏆</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#38BDF8", margin: 0 }}>
                AYUSH & FSSAI Licensed
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "3px 0 0" }}>
                Certified for safe & ethical Ayurvedic care
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sky-blue bottom border ── */}
      <div style={{
        height: 3,
        background: "linear-gradient(90deg, transparent 0%, #0C4A6E 30%, #BAE6FD 50%, #0C4A6E 70%, transparent 100%)",
      }}/>

      <style>{`
        @keyframes pulse1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        @keyframes pulse2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 15px) scale(1.08); }
        }
        @media (max-width: 860px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}