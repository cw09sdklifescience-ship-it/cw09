"use client";
import Link from "next/link";

// ── Stat icons (inline SVG) — kept as-is, not currently rendered ──
const IconCertified = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="14" stroke="#0C4A6E" strokeWidth="2" fill="none" />
    <circle cx="18" cy="18" r="9" stroke="#0C4A6E" strokeWidth="1.5" fill="none" />
    <polyline
      points="13,18 16.5,21.5 23,14"
      stroke="#0C4A6E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 30 L8 34 L12 32 L18 34 L24 32 L28 34 L24 30"
      stroke="#0C4A6E"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);
const IconProducts = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="14" width="12" height="16" rx="2" stroke="#0C4A6E" strokeWidth="1.8" fill="none" />
    <rect x="20" y="10" width="12" height="20" rx="2" stroke="#0C4A6E" strokeWidth="1.8" fill="none" />
    <path d="M7 14 Q10 6 13 14" stroke="#0C4A6E" strokeWidth="1.5" fill="none" />
    <path d="M23 10 Q26 2 29 10" stroke="#0C4A6E" strokeWidth="1.5" fill="none" />
    <line x1="4" y1="20" x2="16" y2="20" stroke="#0C4A6E" strokeWidth="1.2" />
  </svg>
);
const IconClients = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="13" cy="13" r="5" stroke="#0C4A6E" strokeWidth="1.8" fill="none" />
    <circle cx="24" cy="13" r="5" stroke="#0C4A6E" strokeWidth="1.8" fill="none" />
    <path d="M4 30 Q4 22 13 22 Q18 22 21 25" stroke="#0C4A6E" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M24 22 Q32 22 32 30" stroke="#0C4A6E" strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </svg>
);
const IconIndia = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path
      d="M18 4 C10 8 6 14 7 20 C8 26 13 30 18 32 C23 30 28 26 29 20 C30 14 26 8 18 4Z"
      stroke="#0C4A6E"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="18" cy="18" r="3" stroke="#0C4A6E" strokeWidth="1.5" fill="none" />
    <line x1="18" y1="10" x2="18" y2="14" stroke="#0C4A6E" strokeWidth="1.2" />
    <line x1="18" y1="22" x2="18" y2="26" stroke="#0C4A6E" strokeWidth="1.2" />
  </svg>
);
const IconEthical = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path
      d="M18 4 L30 9 L30 20 C30 26 24 31 18 33 C12 31 6 26 6 20 L6 9 Z"
      stroke="#0C4A6E"
      strokeWidth="1.8"
      fill="none"
    />
    <polyline
      points="13,18 16.5,21.5 23,14"
      stroke="#0C4A6E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="font-['Segoe_UI',_Arial,_sans-serif]">
      {/* ── Hero ── */}
      <div className="relative flex min-h-screen items-end overflow-hidden sm:min-h-[90vh] sm:items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/hero page.mp4" type="video/mp4" />
        </video>

        {/* overlay: top-fade on mobile, side-fade on desktop */}
        <div
          className="absolute inset-0 z-10
            bg-[linear-gradient(to_top,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.85)_45%,rgba(255,255,255,0.55)_100%)]
            sm:bg-[linear-gradient(to_right,rgba(255,255,255,0.90)_0%,rgba(255,255,255,0.60)_55%,rgba(255,255,255,0.08)_100%)]"
        />

        <div className="relative z-20 mx-auto w-full max-w-[1280px] px-5 pb-[100px] pt-20 sm:px-8 sm:pb-[60px] sm:pt-20 lg:px-12 lg:pb-20 lg:pt-10">
          <div className="mt-0 max-w-full lg:max-w-[560px]">
            <p className="mb-5 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-[#0C4A6E]">
              <span className="inline-block h-0.5 w-8 shrink-0 bg-[#38BDF8]" />
              WHO-GMP Certified Pharmaceutical Company
            </p>

            <h1 className="mb-4 text-[clamp(32px,10vw,44px)] font-black uppercase leading-[1.08] tracking-tight text-[#38BDF8] sm:text-[clamp(36px,8vw,64px)]">
              Creating
              <br />
              <span className="text-[#0C4A6E]">Healthier Smiles,</span>
              <br />
              Stronger Future
            </h1>

            <div className="my-5 h-[3px] w-20 rounded-sm bg-gradient-to-r from-[#38BDF8] to-[#0C4A6E]" />

            <p className="mb-9 max-w-full text-[14.5px] leading-[1.75] text-[#0C4A6E] sm:max-w-[460px] sm:text-base">
              WHO-GMP Certified Pharmaceutical Company Manufacturing High-Quality Tablets, Capsules, Syrups and Injectables.
            </p>

            <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0C4A6E] px-5 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-white no-underline transition-all duration-200 hover:bg-[#38BDF8] sm:w-auto sm:px-7"
              >
                Explore Products →
              </Link>
              <Link
                href="/franchise"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-[#0C4A6E] bg-transparent px-5 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-[#0C4A6E] no-underline transition-all duration-200 hover:bg-[#0C4A6E] hover:text-white sm:w-auto sm:px-7"
              >
                Franchise / PCD Enquiry →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Partners / Accreditations ──
          (section was empty in the source file — left as a placeholder;
          drop back in with Tailwind classes when you have the content) */}
    </section>
  );
}