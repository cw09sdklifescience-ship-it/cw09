"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Palette (single sky-blue color family only):
 *   sky        #0EA5E9  — primary, headings, icons, secondary text
 *   sky-light  #7DD3FC  — sparing accent: badge, underline, hover states
 *   sky-tint   #F0F9FF  — section background
 *   sky-panel  #E0F2FE  — panel background
 *   sky-deep   #0C4A6E  — body copy / dark headings (deep sky blue, not black)
 */

const whyChooseUs = [
  {
    title: "Quality You Can Trust",
    desc: "WHO-GMP certified with strict quality standards",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Wide Product Range",
    desc: "150+ Ayurvedic products across multiple categories",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Expertise & Experience",
    desc: "Backed by a team of experienced professionals",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
        <path d="M18 14.5 20 16l2-2" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    desc: "Building long-term relationships through trust & care",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const stats = [
  { target: 20, suffix: "+", label: "Years of Trust" },
  { target: 150, suffix: "+", label: "Quality Products" },
  { target: 500, suffix: "+", label: "Happy Clients" },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function StatBlock({
  target, suffix, label, visible, delay, reduced,
}: { target: number; suffix: string; label: string; visible: boolean; delay: number; reduced: boolean }) {
  const [count, setCount] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!visible) return;
    if (reduced) { setCount(target); return; }
    let raf: number;
    const duration = 1200;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, delay, reduced]);

  return (
    <div className="flex-1 text-center px-3 py-5 border-r border-[#0EA5E9]/15 last:border-r-0">
      <p className="text-2xl font-black text-[#0EA5E9] tabular-nums">
        {count}{suffix}
      </p>
      <p className="mt-1 text-[11px] font-semibold tracking-wide text-[#0EA5E9]">{label}</p>
    </div>
  );
}

function WhyItem({
  icon, title, desc, index, visible,
}: { icon: React.ReactNode; title: string; desc: string; index: number; visible: boolean }) {
  return (
    <div
      className="group flex items-start gap-4 rounded-xl px-3 py-3 transition-all duration-500 ease-out hover:bg-[#F0F9FF] motion-reduce:transition-none"
      style={{
        transitionDelay: `${index * 90}ms`,
        transform: visible ? "translateX(0)" : "translateX(16px)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0EA5E9]/8 text-[#0EA5E9] ring-1 ring-[#0EA5E9]/15 transition-colors duration-300 group-hover:bg-[#7DD3FC]/15 group-hover:text-[#7DD3FC] group-hover:ring-[#7DD3FC]/30">
        {icon}
      </div>
      <div>
        <p className="text-[14.5px] font-extrabold text-[#0C4A6E]">{title}</p>
        <p className="mt-0.5 text-[13px] leading-relaxed text-[#0EA5E9]">{desc}</p>
      </div>
    </div>
  );
}

export default function AboutUsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

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
      className="relative overflow-hidden bg-[#F0F9FF] py-20 md:py-24 font-sans"
    >
      {/* Faint watermark leaf */}
      <svg
        className="pointer-events-none absolute -right-14 -bottom-14 h-72 w-72 text-[#0EA5E9] opacity-[0.04]"
        viewBox="0 0 200 200" fill="currentColor"
      >
        <path d="M100 10 C60 10, 10 60, 10 100 C10 160, 80 190, 100 190 C100 190, 100 100, 100 10Z" />
        <path d="M100 10 C140 10, 190 60, 190 100 C190 160, 120 190, 100 190 C100 190, 100 100, 100 10Z" />
      </svg>

      {/* Signature: growing root/vine line down the page, sky-blue at the tips */}
      <svg
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px md:block"
        viewBox="0 0 2 800" preserveAspectRatio="none"
      >
        <path
          d="M1 0 C1 200, 1 200, 1 400 C1 600, 1 600, 1 800"
          stroke="#7DD3FC"
          strokeWidth="1.5"
          strokeDasharray="800"
          strokeDashoffset={visible || reduced ? 0 : 800}
          style={{ transition: reduced ? "none" : "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>

      <div className="relative mx-auto max-w-[1100px] px-7">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">

          {/* LEFT — text */}
          <div
            className="transition-all duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: visible ? "translateY(0)" : "translateY(24px)", opacity: visible ? 1 : 0 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/25 bg-[#0EA5E9]/[0.06] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#0EA5E9]">About Us</span>
            </div>

            <h2 className="font-serif text-[clamp(26px,3vw,40px)] font-black leading-[1.15] tracking-tight text-[#0C4A6E]">
              Transforming Healthcare
              <span className="mt-1 flex items-center gap-2.5">
                with Ancient Wisdom
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#7DD3FC" className="opacity-90 shrink-0">
                  <path d="M17 8C8 10 5.9 16.17 3.82 19.41a1 1 0 0 0 1.66 1.06 14 14 0 0 1 2.73-3.35A8.07 8.07 0 0 0 12 19c5 0 9-4 9-9a8.07 8.07 0 0 0-4-7z" />
                </svg>
              </span>
            </h2>

            <div className="my-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0EA5E9]" />

            <p className="text-[15px] leading-[1.8] text-[#0C4A6E]">
              SDK Life Science Private Limited is a trusted name in the pharmaceutical industry.
              We combine advanced technology with modern research and stringent quality standards
              to deliver safe, effective and high-quality products.
            </p>

            <div className="my-8 flex overflow-hidden rounded-2xl border border-[#0EA5E9]/15 bg-white">
              {stats.map((s, i) => (
                <StatBlock key={s.label} {...s} visible={visible} delay={i * 150} reduced={reduced} />
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0EA5E9] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C4A6E]"
            >
              Know More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* RIGHT — image + why choose us */}
          <div
            className="transition-all duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: visible ? "translateY(0)" : "translateY(24px)", opacity: visible ? 1 : 0, transitionDelay: "150ms" }}
          >
            <div
              className="relative mb-8 aspect-[16/10] overflow-hidden bg-[#E0F2FE]"
              style={{ borderRadius: "3rem 1rem 3rem 1rem" }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJYawrbIrV0NZOTV1zaYlsINkKLrRjYg9YM2Kd7NOYQ&s=10"
                alt="SDK Life Science laboratory scientist"
                className=""
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement!;
                  parent.classList.add("flex", "items-center", "justify-center", "min-h-[220px]");
                  const label = document.createElement("p");
                  label.textContent = "[ Lab Image — /images/about-lab.jpg ]";
                  label.className = "text-[#0EA5E9] text-sm font-semibold";
                  parent.appendChild(label);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/50 via-transparent to-transparent" />

              {/* Sky-blue badge — the one deliberate bright accent, "seal of quality" */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl bg-[#7DD3FC] px-4 py-2.5 text-white shadow-lg shadow-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <p className="text-[13px] font-extrabold leading-none">WHO-GMP Certified</p>
                  <p className="mt-1 text-[11px] leading-none opacity-90">Globally Recognised Standards</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#0EA5E9]/15 bg-white px-5 pb-3 pt-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[18px] w-[3px] rounded bg-[#0EA5E9]" />
                <p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#0EA5E9]">Why Choose Us</p>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                {whyChooseUs.map((item, i) => (
                  <WhyItem key={item.title} {...item} index={i} visible={visible} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}