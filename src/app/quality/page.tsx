// @ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Factory,
  FlaskConical,
  ClipboardCheck,
  Award,
  HeartPulse,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Microscope,
  Thermometer,
  FileText,
  Search,
  GraduationCap,
  Users,
  Sparkles,
  Layers,
  Scale,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Brand tokens — consistent with the rest of the SDK site
   ──────────────────────────────────────────────────────────── */
const BRAND = {
  botanical: "#0C4A6E",   // hero / promise — deep sky
  green: "#0C4A6E",       // dark accent section, now deep sky
  teal: "#075985",        // secondary dark section, for rhythm — slightly lighter deep sky
  navy: "#0C4A6E",        // CTA, matches site-wide CTA convention
  gold: "#38BDF8",
  goldLight: "#7DD3FC",
  cream: "#F0F9FF",
  creamDeep: "#E0F2FE",
  ink: "#0C4A6E",
  slate: "#075985",
  border: "#BAE6FD",
};

const serif = { fontFamily: "serif,font-sans antialiased" };

/* ────────────────────────────────────────────────────────────
   Scroll reveal hook
   ──────────────────────────────────────────────────────────── */
function useReveal(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Checkpoint — the page's signature element.
   A sky-blue node + stage label, echoing the batch-record / audit
   trail language in the copy itself (traceability, documentation,
   review). Each major section is a "checkpoint" a product must
   clear, not a decorative step number.
   ──────────────────────────────────────────────────────────── */
function Checkpoint({ index, total, stage, dark = false }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="relative flex flex-col items-center">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ background: BRAND.gold, boxShadow: `0 0 0 4px ${dark ? "rgba(224,242,254,0.18)" : "rgba(12,74,110,0.12)"}` }}
        />
      </div>
      <span
        className="text-[11px] font-semibold tracking-[2.5px] uppercase"
        style={{ color: BRAND.gold }}
      >
        Checkpoint {index} of {total} — {stage}
      </span>
    </div>
  );
}

/* Vertical trail line rendered behind a section's checkpoint column (desktop only) */
function TrailLine({ dark = false }) {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block absolute left-[5px] top-2 bottom-2 w-px"
      style={{ background: dark ? "rgba(224,242,254,0.25)" : BRAND.border }}
    />
  );
}

/* ────────────────────────────────────────────────────────────
   Small building blocks
   ──────────────────────────────────────────────────────────── */
function Eyebrow({ children, tone = "gold" }) {
  const color = tone === "gold" ? BRAND.gold : BRAND.cream;
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-9" style={{ background: color, opacity: 0.6 }} />
      <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color }}>
        {children}
      </span>
    </div>
  );
}

function ListItem({ children, dark = false }) {
  return (
    <li className="flex items-start gap-2.5 py-1.5">
      <CheckCircle2
        size={17}
        className="shrink-0 mt-0.5"
        style={{ color: BRAND.gold }}
      />
      <span
        className="text-[14.5px] leading-relaxed"
        style={{ color: dark ? "rgba(240,249,255,0.92)" : BRAND.ink }}
      >
        {children}
      </span>
    </li>
  );
}

function IconTile({ Icon, label, dark = false }) {
  return (
    <div
      className="group flex items-start gap-3.5 p-5 rounded-lg border transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: dark ? "rgba(240,249,255,0.14)" : BRAND.border,
        background: dark ? "rgba(240,249,255,0.04)" : BRAND.cream,
      }}
    >
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 transition-colors duration-300"
        style={{
          background: dark ? "rgba(12,74,110,0.14)" : "rgba(12,74,110,0.10)",
          color: BRAND.gold,
        }}
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>
      <span
        className="text-[14px] font-medium leading-snug pt-1.5"
        style={{ color: dark ? BRAND.cream : BRAND.ink }}
      >
        {label}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */
export default function QualityPage() {
  return (
    <main style={{ background: BRAND.cream }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pt-40 pb-28"
        style={{ background: BRAND.botanical }}
      >
        {/* faint molecular-lattice texture, on-subject for a pharma brand */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          style={{ color: BRAND.gold }}
        >
          <pattern id="lattice" width="64" height="64" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2" fill="currentColor" />
            <circle cx="40" cy="24" r="2" fill="currentColor" />
            <circle cx="20" cy="48" r="2" fill="currentColor" />
            <line x1="8" y1="8" x2="40" y2="24" stroke="currentColor" strokeWidth="0.6" />
            <line x1="40" y1="24" x2="20" y2="48" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lattice)" />
        </svg>

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <Eyebrow tone="cream">Quality</Eyebrow>
            <h1
              className="text-[40px] sm:text-[54px] leading-[1.1] font-bold mb-6"
              style={{ ...serif, color: BRAND.cream }}
            >
              Excellence in <span style={{ color: "#FFFFFF" }}>Every Step</span>
            </h1>
            <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(240,249,255,0.82)" }}>
              At SDK Life Science Pvt. Ltd., quality is the foundation of everything we do. From
              sourcing premium raw materials to manufacturing and final product distribution, every
              stage follows strict quality standards to ensure the safety, efficacy, and reliability
              of our pharmaceutical products.
            </p>
            <p className="text-[14px] mt-4 font-medium" style={{ color: BRAND.goldLight }}>
              Medicines that healthcare professionals and patients can trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── QUALITY COMMITMENT ────────────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.cream }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 items-start">
          <Reveal className="relative pl-8 lg:pl-9">
            <TrailLine />
            <Checkpoint index={1} total={7} stage="Commitment" />
            <h2 className="text-[28px] sm:text-[32px] font-bold mb-4 leading-tight" style={{ ...serif, color: BRAND.ink }}>
              Our Quality Commitment
            </h2>
            <p className="text-[15px] leading-relaxed mb-3" style={{ color: BRAND.slate }}>
              We believe that quality is more than meeting standards. It is about consistently
              delivering products that improve lives.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: BRAND.slate }}>
              Every product undergoes multiple quality checks before reaching the market.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-[12px] font-semibold tracking-[2px] uppercase mb-3" style={{ color: BRAND.gold }}>
              Our quality management system ensures
            </p>
            <ul className="divide-y" style={{ borderColor: BRAND.border }}>
              <ListItem>High product safety</ListItem>
              <ListItem>Consistent product quality</ListItem>
              <ListItem>Regulatory compliance</ListItem>
              <ListItem>Customer satisfaction</ListItem>
              <ListItem>Continuous process improvement</ListItem>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── MANUFACTURING EXCELLENCE (deep sky) ───────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.green }}>
        <div className="max-w-6xl mx-auto relative pl-8 lg:pl-9">
          <TrailLine dark />
          <Reveal>
            <Checkpoint index={2} total={7} stage="Manufacturing" dark />
            <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 items-start">
              <div>
                <h2 className="text-[28px] sm:text-[32px] font-bold mb-4 leading-tight" style={{ ...serif, color: BRAND.cream }}>
                  Manufacturing Excellence
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(240,249,255,0.82)" }}>
                  Our manufacturing partners follow internationally recognized pharmaceutical
                  manufacturing practices to ensure consistent quality and safety across every batch.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <IconTile Icon={Factory} label="Modern manufacturing facilities" dark />
                <IconTile Icon={Sparkles} label="Advanced production technology" dark />
                <IconTile Icon={ShieldCheck} label="Hygienic manufacturing environment" dark />
                <IconTile Icon={Layers} label="Controlled production processes" dark />
                <IconTile Icon={Thermometer} label="Regular equipment calibration" dark />
                <IconTile Icon={ClipboardCheck} label="Process validation" dark />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── QUALITY CONTROL (pipeline) ────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.cream }}>
        <div className="max-w-6xl mx-auto relative pl-8 lg:pl-9">
          <TrailLine />
          <Reveal>
            <Checkpoint index={3} total={7} stage="Control" />
            <h2 className="text-[28px] sm:text-[32px] font-bold mb-3 leading-tight" style={{ ...serif, color: BRAND.ink }}>
              Quality Control
            </h2>
            <p className="text-[15px] leading-relaxed mb-10 max-w-2xl" style={{ color: BRAND.slate }}>
              Every batch is tested using advanced analytical methods before approval. Only products
              that successfully pass all quality parameters are released for distribution.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { Icon: FlaskConical, label: "Raw material testing" },
              { Icon: Search, label: "In-process quality monitoring" },
              { Icon: Microscope, label: "Finished product analysis" },
              { Icon: PackageCheck, label: "Packaging verification" },
              { Icon: Thermometer, label: "Stability testing" },
              { Icon: FileText, label: "Batch documentation review" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <IconTile Icon={item.Icon} label={item.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE (mid-deep sky, for rhythm) ──── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.teal }}>
        <div className="max-w-6xl mx-auto relative pl-8 lg:pl-9">
          <TrailLine dark />
          <Reveal>
            <Checkpoint index={4} total={7} stage="Assurance" dark />
            <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 items-start">
              <div>
                <h2 className="text-[28px] sm:text-[32px] font-bold mb-4 leading-tight" style={{ ...serif, color: BRAND.cream }}>
                  Quality Assurance
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(240,249,255,0.82)" }}>
                  Our Quality Assurance team ensures that every process follows approved procedures
                  and regulatory requirements — a systematic approach that keeps every batch
                  consistent and reliable.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8">
                <ListItem dark>Documentation management</ListItem>
                <ListItem dark>Batch record review</ListItem>
                <ListItem dark>Process validation</ListItem>
                <ListItem dark>Internal quality audits</ListItem>
                <ListItem dark>Supplier qualification</ListItem>
                <ListItem dark>Complaint handling</ListItem>
                <ListItem dark>Corrective &amp; Preventive Actions (CAPA)</ListItem>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REGULATORY COMPLIANCE ──────────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.cream }}>
        <div className="max-w-6xl mx-auto relative pl-8 lg:pl-9">
          <TrailLine />
          <Reveal>
            <Checkpoint index={5} total={7} stage="Compliance" />
            <h2 className="text-[28px] sm:text-[32px] font-bold mb-3 leading-tight" style={{ ...serif, color: BRAND.ink }}>
              Regulatory Compliance
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-2xl" style={{ color: BRAND.slate }}>
              We operate with a strong focus on compliance with pharmaceutical regulations and
              industry best practices.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "WHO-GMP Guidelines",
                "Good Manufacturing Practices (GMP)",
                "Standard Operating Procedures (SOPs)",
                "Good Documentation Practices (GDP)",
                "Quality Risk Management",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full border"
                  style={{ borderColor: BRAND.border, background: BRAND.creamDeep, color: BRAND.ink }}
                >
                  <ShieldCheck size={14} style={{ color: BRAND.gold }} />
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCT SAFETY (deep sky) ─────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.green }}>
        <div className="max-w-6xl mx-auto relative pl-8 lg:pl-9">
          <TrailLine dark />
          <Reveal>
            <Checkpoint index={6} total={7} stage="Safety" dark />
            <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 items-start">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <HeartPulse size={20} style={{ color: BRAND.goldLight }} />
                  <span className="text-[13px] font-semibold uppercase tracking-[1.5px]" style={{ color: BRAND.goldLight }}>
                    Highest priority
                  </span>
                </div>
                <h2 className="text-[28px] sm:text-[32px] font-bold mb-4 leading-tight" style={{ ...serif, color: BRAND.cream }}>
                  Product Safety
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(240,249,255,0.82)" }}>
                  Patient safety remains our highest priority. Our goal is to provide medicines that
                  healthcare professionals can prescribe with confidence.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {["Safety", "Effectiveness", "Stability", "Accurate labeling", "Secure packaging", "Traceability"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg border"
                    style={{ borderColor: "rgba(240,249,255,0.14)", background: "rgba(240,249,255,0.04)" }}
                  >
                    <CheckCircle2 size={15} style={{ color: BRAND.goldLight }} className="shrink-0" />
                    <span className="text-[13.5px] font-medium" style={{ color: BRAND.cream }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTINUOUS IMPROVEMENT ────────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.cream }}>
        <div className="max-w-6xl mx-auto relative pl-8 lg:pl-9">
          <TrailLine />
          <Reveal>
            <Checkpoint index={7} total={7} stage="Improvement" />
            <h2 className="text-[28px] sm:text-[32px] font-bold mb-3 leading-tight" style={{ ...serif, color: BRAND.ink }}>
              Continuous Improvement
            </h2>
            <p className="text-[15px] leading-relaxed mb-10 max-w-2xl" style={{ color: BRAND.slate }}>
              Quality is an ongoing journey. Continuous improvement enables us to consistently
              exceed customer expectations.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { Icon: GraduationCap, label: "Employee training" },
              { Icon: Sparkles, label: "Technology upgrades" },
              { Icon: RefreshCw, label: "Process optimization" },
              { Icon: ClipboardCheck, label: "Internal audits" },
              { Icon: Users, label: "Customer feedback analysis" },
              { Icon: Scale, label: "Performance monitoring" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <IconTile Icon={item.Icon} label={item.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.creamDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <Eyebrow tone="gold">Why SDK Life Science</Eyebrow>
            <h2 className="text-[28px] sm:text-[34px] font-bold" style={{ ...serif, color: BRAND.ink }}>
              A Partner You Can Rely On
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: Award, label: "Premium quality medicines" },
              { Icon: ShieldCheck, label: "Strict quality standards" },
              { Icon: Users, label: "Experienced pharmaceutical team" },
              { Icon: PackageCheck, label: "Reliable supply chain" },
              { Icon: Scale, label: "Ethical business practices" },
              { Icon: HeartPulse, label: "Customer-centric approach" },
              { Icon: CheckCircle2, label: "Trusted by healthcare professionals" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <IconTile Icon={item.Icon} label={item.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ────────────────────────────────────── */}
      <section className="relative px-6 py-28 overflow-hidden" style={{ background: BRAND.botanical }}>
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          style={{ color: BRAND.gold }}
        >
          <pattern id="lattice2" width="64" height="64" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2" fill="currentColor" />
            <circle cx="40" cy="24" r="2" fill="currentColor" />
            <circle cx="20" cy="48" r="2" fill="currentColor" />
            <line x1="8" y1="8" x2="40" y2="24" stroke="currentColor" strokeWidth="0.6" />
            <line x1="40" y1="24" x2="20" y2="48" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lattice2)" />
        </svg>
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <Eyebrow tone="cream">Our Promise</Eyebrow>
          <p
            className="text-[22px] sm:text-[26px] leading-relaxed font-medium"
            style={{ ...serif, color: BRAND.cream }}
          >
            "We are committed to delivering pharmaceutical products that meet the highest
            standards of quality, safety, and reliability — ensuring every product contributes
            to better healthcare outcomes across the nation."
          </p>
        </Reveal>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative px-6 py-24" style={{ background: BRAND.navy }}>
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-[26px] sm:text-[32px] font-bold mb-4 leading-tight" style={{ ...serif, color: BRAND.cream }}>
            Looking for a Trusted Pharmaceutical Partner?
          </h2>
          <p className="text-[15px] leading-relaxed mb-9 max-w-xl mx-auto" style={{ color: "rgba(240,249,255,0.78)" }}>
            Whether you are a healthcare professional, distributor, or business partner, SDK Life
            Science is committed to delivering quality you can rely on.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-[14px] font-bold tracking-wide transition-all duration-300 hover:brightness-110"
            style={{ background: BRAND.gold, color: BRAND.navy }}
          >
            Contact Us Today
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>
    </main>
  );
}