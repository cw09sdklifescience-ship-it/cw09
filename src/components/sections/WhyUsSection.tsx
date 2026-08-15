"use client";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, FlaskConical, Truck, Headset, ArrowRight, Award, Users, Globe } from "lucide-react";

const features = [
  {
    Icon: ShieldCheck,
    title: "WHO-GMP Certified",
    desc: "Manufacturing facilities meeting the highest global standards, audited annually by international bodies.",
    color: "#0C4A6E",
    bg: "#E0F2FE",
    border: "#7DD3FC",
  },
  {
    Icon: FlaskConical,
    title: "R&D Driven",
    desc: "Dedicated research wing developing next-generation formulations and advanced drug delivery systems.",
    color: "#0C4A6E",
    bg: "#E0F2FE",
    border: "#7DD3FC",
  },
  {
    Icon: Truck,
    title: "Pan-India Logistics",
    desc: "Cold-chain and ambient distribution network covering 20+ states with guaranteed 48-hour delivery.",
    color: "#0C4A6E",
    bg: "#F0F9FF",
    border: "#38BDF8",
  },
  {
    Icon: Headset,
    title: "Medical Support",
    desc: "Round-the-clock medical information helpline and a dedicated pharmacovigilance response team.",
    color: "#38BDF8",
    bg: "#E0F2FE",
    border: "#BAE6FD",
  },
];

const milestones = [
  { Icon: Award,  value: "20+", label: "Years of Excellence" },
  { Icon: Users,  value: "500+", label: "Healthcare Partners" },
  { Icon: Globe,  value: "20+", label: "States Covered" },
];

function FeatureCard({
  Icon, title, desc, color, bg, border, index, visible,
}: typeof features[0] & { index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "24px",
        borderRadius: 18,
        background: hovered ? bg : "#fff",
        border: `1.5px solid ${hovered ? border : "#E0F2FE"}`,
        boxShadow: hovered ? `0 12px 32px ${color}18` : "0 2px 10px rgba(0,0,0,0.05)",
        transform: visible
          ? hovered ? "translateY(-5px)" : "translateY(0)"
          : "translateY(28px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.4s cubic-bezier(.22,1,.36,1) ${index * 80}ms, opacity 0.4s ease ${index * 80}ms, box-shadow 0.25s, border-color 0.25s, background 0.25s`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 60, height: 60,
        background: `radial-gradient(circle at top right, ${color}14 0%, transparent 70%)`,
        pointerEvents: "none",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }}/>

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: hovered ? color + "18" : "#F0F9FF",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16,
        transition: "background 0.25s, transform 0.3s",
        transform: hovered ? "scale(1.08)" : "scale(1)",
        color: hovered ? color : "#888",
      }}>
        <Icon size={22} />
      </div>

      <h3 style={{
        fontSize: 15, fontWeight: 800,
        color: hovered ? color : "#0C4A6E",
        margin: "0 0 8px",
        transition: "color 0.25s",
        letterSpacing: "-0.2px",
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 13.5, color: "#777",
        margin: 0, lineHeight: 1.65,
      }}>
        {desc}
      </p>

      {/* Bottom color bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        height: 3, borderRadius: "0 0 18px 18px",
        background: `linear-gradient(90deg, ${color}, ${border})`,
        width: hovered ? "100%" : "0%",
        transition: "width 0.35s ease",
      }}/>
    </div>
  );
}

export default function WhyUsSection() {
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
        padding: "80px 0 88px",
        fontFamily: "'Segoe UI', system-ui, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(12,74,110,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* ── LEFT: Copy + milestones ── */}
          <div style={{
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            opacity: visible ? 1 : 0,
            transition: "transform 0.65s cubic-bezier(.22,1,.36,1), opacity 0.65s ease",
          }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(12,74,110,0.1)", border: "1px solid rgba(12,74,110,0.3)",
              borderRadius: 100, padding: "5px 16px", marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0C4A6E", display: "inline-block" }}/>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#0C4A6E", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Why Choose Us
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 900, lineHeight: 1.18,
              letterSpacing: "-0.5px",
              color: "#0C4A6E", margin: "0 0 18px",
            }}>
              Built on Science.{" "}
              <br />
              <span style={{
                background: "linear-gradient(135deg, #0C4A6E, #38BDF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Backed by Integrity.
              </span>
            </h2>

            <p style={{
              fontSize: 15.5, color: "#666",
              lineHeight: 1.75, margin: "0 0 36px",
              maxWidth: 420,
            }}>
              Two decades of pharmaceutical excellence — driven by patient safety,
              strict regulatory compliance, and relentless innovation across every therapy area.
            </p>

            {/* Milestone pills */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              {milestones.map(({ Icon, value, label }, i) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#fff", border: "1.5px solid #E0F2FE",
                  borderRadius: 14, padding: "12px 18px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.4s ease ${0.3 + i * 0.08}s, opacity 0.4s ease ${0.3 + i * 0.08}s`,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "#E0F2FE",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#0C4A6E", flexShrink: 0,
                  }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 900, color: "#0C4A6E", margin: 0, lineHeight: 1 }}>{value}</p>
                    <p style={{ fontSize: 11, color: "#999", margin: "3px 0 0", fontWeight: 600, letterSpacing: "0.3px" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/about"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "13px 26px", borderRadius: 100,
                background: "linear-gradient(135deg, #0C4A6E, #38BDF8)",
                color: "#fff", fontWeight: 800, fontSize: 13.5,
                textDecoration: "none", letterSpacing: "0.2px",
                boxShadow: "0 4px 16px rgba(12,74,110,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(12,74,110,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(12,74,110,0.3)";
              }}
            >
              Learn Our Story <ArrowRight size={16} />
            </a>
          </div>

          {/* ── RIGHT: Feature cards ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}>
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}