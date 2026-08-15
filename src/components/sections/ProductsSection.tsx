"use client";
import { useEffect, useRef, useState } from "react";

// ── Fallback icons for logos you don't have image files for yet ──
const IconISO = () => (
  <svg width="46" height="46" viewBox="0 0 60 60" fill="none">
    <path
      d="M30 4 L50 12 L50 30 C50 42 40 50 30 54 C20 50 10 42 10 30 L10 12 Z"
      stroke="#0C4A6E"
      strokeWidth="2"
      fill="none"
    />
    <text x="30" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0C4A6E">
      100%
    </text>
    <text x="30" y="41" textAnchor="middle" fontSize="5.5" fontWeight="600" fill="#38BDF8">
      ISO CERTIFIED
    </text>
  </svg>
);

const IconWHO = () => (
  <svg width="46" height="46" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="24" r="15" stroke="#0C4A6E" strokeWidth="2" fill="none" />
    <path d="M17 24 Q30 13 43 24 Q30 35 17 24 Z" stroke="#0C4A6E" strokeWidth="1.2" fill="none" />
    <text x="30" y="46" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0C4A6E">
      World Health
    </text>
    <text x="30" y="54" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0C4A6E">
      Organization
    </text>
  </svg>
);

// ── Partner data — add / edit logos here ──────────────────────
interface Partner {
  name: string;
  img?: string;
  icon?: React.ReactNode;
}

const partners: Partner[] = [
  { name: "FDA", img: "/images/FDA.png" },
  { name: "Council of Europe", img: "/images/Council.png" },
  { name: "KFDA", img: "/images/KFDA.jpeg" },
  { name: "Cofepris", img: "/images/Cofepris.jpeg" },
  { name: "ISO 100% Certified", icon: <IconISO /> },
  { name: "World Health Organization", icon: <IconWHO /> },
];

// ── Intersection observer hook (same pattern as ProductsSection) ──
function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Partner Logo Card ───────────────────────────────────────────
function PartnerCard({ partner, index, visible }: { partner: Partner; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const delay = index * 70;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: hovered ? "#0C4A6E" : "#F0F9FF",
        boxShadow: hovered ? "0 16px 40px #0C4A6E20" : "0 4px 16px rgba(0,0,0,0.06)",
      }}
      className={`flex h-[110px] items-center justify-center rounded-[16px] border-[1.5px] bg-white px-5 transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        ${hovered ? "-translate-y-1" : ""}`}
      title={partner.name}
    >
      {partner.img ? (
        <img
          src={partner.img}
          alt={partner.name}
          className="max-h-12 max-w-[130px] object-contain"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement!;
            const label = document.createElement("p");
            label.textContent = partner.name;
            label.className = "text-[11px] font-bold text-[#0C4A6E] text-center";
            parent.appendChild(label);
          }}
        />
      ) : (
        partner.icon
      )}
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────
export default function PartnersSection() {
  const { ref, visible } = useIntersectionObserver(0.1);

  return (
    <section
      ref={ref}
      style={{ background: "linear-gradient(180deg, #FFF 0%, #F0F9FF 100%)" }}
      className="relative overflow-hidden py-20 font-sans"
    >
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-[350px] w-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, #0C4A6E12 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, #38BDF80A 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-8">

        {/* ── Banner strip ── */}
        <div
          style={{ background: "linear-gradient(135deg, #0C4A6E, #38BDF8)", boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}
          className={`mb-16 rounded-[20px] px-6 py-6 text-center transition-all duration-500
            ${visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
        >
          <p className="m-0 text-[15px] font-bold text-white md:text-[18px]">
            We Offer Quality Drugs from World Class Manufacturing Facility
          </p>
        </div>

        {/* ── Header ── */}
        <div
          className={`mb-[52px] flex flex-col items-center text-center transition-all duration-500
            ${visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
        >
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ background: "#0C4A6E15", border: "1px solid #0C4A6E40" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#0C4A6E" }} />
            <span className="text-[11px] font-extrabold uppercase tracking-[1.5px]" style={{ color: "#0C4A6E" }}>
              Our Company
            </span>
          </div>
          <h2 className="m-0 text-[clamp(26px,3.2vw,40px)] font-black leading-[1.2] tracking-[-0.5px] text-neutral-950">
            Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #0C4A6E, #38BDF8)" }}
            >
              Partners
            </span>{" "}
            Accreditation&apos;s
          </h2>
        </div>

        {/* ── Logo Grid ── */}
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-3 max-[600px]:grid-cols-2">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} visible={visible} />
          ))}
        </div>

        {/* ── Registered office footer strip ── */}
        <div
          style={{ background: "linear-gradient(135deg, #0C4A6E 0%, #0C4A6E 50%, #0C4A6E 100%)", boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}
          className={`mt-16 overflow-hidden rounded-[20px] px-6 py-8 text-center transition-all duration-700
            ${visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
        >
          <p className="m-0 text-[13.5px] leading-relaxed text-white/85">
            <span className="font-extrabold text-white">Regd. Office:</span> Galacus Healthcare
            Pvt. Ltd., Office no 201, CTS no 11/B, Phatak Park, Erandwane, Karve road, Pune - 411004
          </p>
          <p className="m-0 mt-2 text-[13.5px] text-white/85">
            Mob no – 9890288010 / 9049733276 &nbsp;|&nbsp; Email -{" "}
            <a href="mailto:ho@galacushealthcare.com" className="font-bold text-white hover:underline">
              ho@galacushealthcare.com
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}