"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+",    label: "Medicine Products",  icon: "💊", numeric: 500,  suffix: "+" },
  { value: "20+",     label: "States Covered",      icon: "🗺️", numeric: 20,   suffix: "+" },
  { value: "2Cr+",    label: "Patients Annually",   icon: "🫀", numeric: 2,    suffix: "Cr+" },
  { value: "18",      label: "Therapy Areas",       icon: "🔬", numeric: 18,   suffix: "" },
  { value: "2005",    label: "Est. Founded",         icon: "🏛️", numeric: 2005, suffix: "" },
  { value: "WHO-GMP", label: "Certified",            icon: "🏆", numeric: null, suffix: "" },
];

function useCountUp(target: number | null, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({
  value, label, icon, numeric, suffix, index, visible,
}: typeof stats[0] & { index: number; visible: boolean }) {
  const count = useCountUp(numeric, 1600 + index * 100, visible);
  const [hovered, setHovered] = useState(false);
  const displayValue = numeric !== null ? count + suffix : value;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "28px 12px 24px",
        borderRadius: 16,
        background: hovered ? "#fff" : "#F0F9FF",
        border: `1.5px solid ${hovered ? "#38BDF8" : "#E0F2FE"}`,
        boxShadow: hovered
          ? "0 12px 32px rgba(12,74,110,0.14)"
          : "0 2px 10px rgba(0,0,0,0.05)",
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(28px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.45s cubic-bezier(.22,1,.36,1) ${index * 75}ms, opacity 0.45s ease ${index * 75}ms, box-shadow 0.25s, border-color 0.25s, background 0.25s`,
        cursor: "default",
      }}
    >
      <div style={{
        fontSize: 26,
        marginBottom: 12,
        lineHeight: 1,
        transform: visible ? "scale(1)" : "scale(0.5)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.5s cubic-bezier(.34,1.56,.64,1) ${index * 75 + 180}ms, opacity 0.4s ease ${index * 75 + 180}ms`,
      }}>
        {icon}
      </div>

      <p style={{
        fontSize: "clamp(24px, 2.8vw, 34px)",
        fontWeight: 900,
        color: "#0C4A6E",
        margin: 0,
        letterSpacing: "-0.4px",
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}>
        {displayValue}
      </p>

      <div style={{
        width: hovered ? 40 : 24,
        height: 2,
        borderRadius: 2,
        background: "#38BDF8",
        margin: "10px 0",
        transition: "width 0.3s ease",
        opacity: 0.6,
      }}/>

      <p style={{
        fontSize: 11.5,
        fontWeight: 600,
        color: "#888",
        margin: 0,
        textTransform: "uppercase",
        letterSpacing: "0.7px",
        textAlign: "center",
        lineHeight: 1.4,
      }}>
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#F0F9FF",
        padding: "64px 0 72px",
        fontFamily: "'Segoe UI', system-ui, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3,
        background: "linear-gradient(90deg, transparent 0%, #0C4A6E 30%, #38BDF8 50%, #0C4A6E 70%, transparent 100%)",
      }}/>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          textAlign: "center",
          marginBottom: 44,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.55s ease, opacity 0.55s ease",
        }}>
          <p style={{
            fontSize: 11,
            fontWeight: 800,
            color: "#0C4A6E",
            letterSpacing: "2px",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}>
            Our Strength in Numbers
          </p>
          <h2 style={{
            fontSize: "clamp(20px, 2.5vw, 30px)",
            fontWeight: 800,
            color: "#0C4A6E",
            margin: 0,
            letterSpacing: "-0.3px",
          }}>
            Trusted by Thousands, Proven by Results
          </h2>
        </div>

        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 14,
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}