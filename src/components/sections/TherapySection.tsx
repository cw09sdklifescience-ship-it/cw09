"use client";
import { useEffect, useRef, useState } from "react";

const therapies = [
  { name: "Cardiology",       icon: "🫀", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Diabetology",      icon: "🩸", color: "#38BDF8", bg: "#F0F9FF" },
  { name: "Oncology",         icon: "🎗️", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Neurology",        icon: "🧠", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Dermatology",      icon: "✨", color: "#38BDF8", bg: "#F0F9FF" },
  { name: "Gynecology",       icon: "🌸", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Pediatrics",       icon: "👶", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Orthopedics",      icon: "🦴", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Gastroenterology", icon: "🫁", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Pulmonology",      icon: "💨", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Nephrology",       icon: "🫘", color: "#38BDF8", bg: "#F0F9FF" },
  { name: "Ophthalmology",    icon: "👁️", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "ENT",              icon: "👂", color: "#38BDF8", bg: "#F0F9FF" },
  { name: "Psychiatry",       icon: "🧘", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Urology",          icon: "🔵", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Rheumatology",     icon: "🦱", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Endocrinology",    icon: "⚗️", color: "#38BDF8", bg: "#E0F2FE" },
  { name: "Immunology",       icon: "🛡️", color: "#38BDF8", bg: "#E0F2FE" },
];

function TherapyCard({
  name, icon, color, bg, index, visible,
}: typeof therapies[0] & { index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "22px 14px 18px",
        borderRadius: 16,
        background: hovered ? bg : "#fff",
        border: `1.5px solid ${hovered ? color + "55" : "#E0F2FE"}`,
        boxShadow: hovered ? `0 10px 28px ${color}18` : "0 2px 8px rgba(0,0,0,0.04)",
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.4s cubic-bezier(.22,1,.36,1) ${index * 40}ms, opacity 0.4s ease ${index * 40}ms, box-shadow 0.25s, border-color 0.25s, background 0.25s`,
        cursor: "default",
        textAlign: "center",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: hovered ? color + "18" : "#F0F9FF",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
        transition: "background 0.25s, transform 0.3s",
        transform: hovered ? "scale(1.1) rotate(6deg)" : "scale(1) rotate(0deg)",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <p style={{
        fontSize: 12, fontWeight: 700,
        color: hovered ? color : "#0C4A6E",
        margin: 0, letterSpacing: "0.1px", lineHeight: 1.3,
        transition: "color 0.25s",
      }}>
        {name}
      </p>
      <div style={{
        width: hovered ? 24 : 0, height: 2, borderRadius: 2,
        background: color, transition: "width 0.3s ease", marginTop: -4,
      }}/>
    </div>
  );
}

export default function TherapySection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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
      }}
    >
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 200, fontWeight: 900,
        color: "rgba(12,74,110,0.03)",
        letterSpacing: -8, pointerEvents: "none",
        userSelect: "none", whiteSpace: "nowrap",
      }}>
        THERAPY
      </div>

      

      <style>{`
        @media (max-width: 1100px) { .therapy-grid { grid-template-columns: repeat(6, 1fr) !important; } }
        @media (max-width: 720px)  { .therapy-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 480px)  { .therapy-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
      `}</style>
    </section>
  );
}