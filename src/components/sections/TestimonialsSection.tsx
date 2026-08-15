"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Their generic portfolio is our first choice. Consistent quality, competitive pricing, and zero supply disruptions in 5 years.",
    name: "Dr. Rajesh Kulkarni",
    role: "Cardiologist, Pune",
    initials: "RK",
    specialty: "Cardiology",
    rating: 5,
  },
  {
    quote: "Their cold-chain logistics are exemplary. Oncology drugs arrive on time, every time — critical for our patient care.",
    name: "Dr. Sunita Mehta",
    role: "Oncologist, Mumbai",
    initials: "SM",
    specialty: "Oncology",
    rating: 5,
  },
  {
    quote: "As a retail pharmacist, I trust SDK Life Science for both quality and availability. Their medical team is always responsive.",
    name: "Mr. Amit Sharma",
    role: "Pharmacist, Delhi",
    initials: "AS",
    specialty: "Pharmacy",
    rating: 5,
  },
];

// Single sky-blue palette matching the rest of the site
const ACCENT       = "#0C4A6E"; // deep sky
const ACCENT_LIGHT = "#E0F2FE"; // sky-50
const ACCENT_MID   = "#38BDF8"; // sky
const ACCENT_DARK  = "#0C4A6E"; // deep sky

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={ACCENT_MID}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill={ACCENT} opacity={0.1}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function TestimonialCard({
  quote, name, role, initials, specialty, rating, index, visible,
}: typeof testimonials[0] & { index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "30px 26px 26px",
        borderRadius: 16,
        background: "#fff",
        border: `1.5px solid ${hovered ? ACCENT + "55" : "#E0F2FE"}`,
        boxShadow: hovered
          ? `0 16px 40px ${ACCENT}22`
          : "0 2px 12px rgba(12,74,110,0.06)",
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.45s cubic-bezier(.22,1,.36,1) ${index * 100}ms, opacity 0.45s ease ${index * 100}ms, box-shadow 0.25s, border-color 0.25s`,
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Top sky-blue accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_MID})`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      {/* Background quote watermark */}
      <div style={{ position: "absolute", top: 14, right: 16 }}>
        <QuoteIcon />
      </div>

      {/* Stars */}
      <div style={{ marginBottom: 14 }}>
        <Stars count={rating} />
      </div>

      {/* Specialty tag */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: ACCENT_LIGHT,
        borderRadius: 100, padding: "3px 10px",
        marginBottom: 14, alignSelf: "flex-start",
      }}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
        <span style={{ fontSize: 10.5, fontWeight: 700, color: ACCENT_DARK, letterSpacing: "0.5px" }}>
          {specialty}
        </span>
      </div>

      {/* Quote */}
      <p style={{
        fontSize: 14,
        color: "#0C4A6E",
        lineHeight: 1.78,
        margin: "0 0 22px",
        fontStyle: "italic",
        flex: 1,
      }}>
        "{quote}"
      </p>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${ACCENT}30, transparent)`,
        marginBottom: 18,
      }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_MID})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 800, fontSize: 13.5,
          letterSpacing: "0.5px", flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <p style={{ fontSize: 13.5, fontWeight: 800, color: "#0C4A6E", margin: 0 }}>{name}</p>
          <p style={{ fontSize: 12, color: "#0C4A6E", margin: "3px 0 0" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
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

  return (
    <section
      ref={ref}
      style={{
        background: "#F0F9FF",
        padding: "72px 0 80px",
        fontFamily: "'Segoe UI', system-ui, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
        borderTop: `3px solid ${ACCENT}`,
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: -60, right: -80,
        width: 320, height: 320, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT}0F 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -60,
        width: 280, height: 280, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT_MID}0A 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 48,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.6s ease, opacity 0.6s ease",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: ACCENT_LIGHT,
            border: `1px solid ${ACCENT}40`,
            borderRadius: 100, padding: "5px 16px", marginBottom: 14,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT_DARK, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Testimonials
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 900, color: "#0C4A6E",
            margin: "0 0 10px", letterSpacing: "-0.3px",
          }}>
            Trusted by{" "}
            <span style={{ color: ACCENT_MID }}>Healthcare Professionals</span>
          </h2>
          <p style={{ fontSize: 15, color: "#0C4A6E", margin: "0 auto", maxWidth: 420, lineHeight: 1.65 }}>
            Real feedback from doctors, specialists, and pharmacists across India.
          </p>
        </div>

        {/* Cards */}
        <div
          className="testimonials-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} visible={visible} />
          ))}
        </div>

        {/* Trust bar */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: 28, marginTop: 52, flexWrap: "wrap",
          transform: visible ? "translateY(0)" : "translateY(16px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.5s ease 0.4s, opacity 0.5s ease 0.4s",
        }}>
          {["500+ Healthcare Partners", "Pan India Presence", "20+ Years of Trust"].map((item, i) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT_MID }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: ACCENT_DARK }}>{item}</span>
              {i < 2 && <div style={{ width: 1, height: 16, background: `${ACCENT}30`, marginLeft: 20 }} />}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 460px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
      `}</style>
    </section>
  );
}