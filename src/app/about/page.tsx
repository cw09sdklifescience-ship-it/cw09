import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Pharma Medicline",
  description:
    "Pharma Medicline — committed to providing high-quality, safe, and affordable pharmaceutical products across India. WHO-GMP compliant manufacturing with a patient-first approach.",
  alternates: { canonical: "https://www.pharmamedicline.com/about" },
};

const milestones = [
  { year: "2010", event: "Founded with a vision to make quality healthcare accessible to every patient across India." },
  { year: "2013", event: "Achieved WHO-GMP certification, setting the benchmark for manufacturing excellence." },
  { year: "2016", event: "Expanded product portfolio to include tablets, capsules, syrups, injections, and ointments." },
  { year: "2019", event: "Launched dedicated Research & Development division for advanced pharmaceutical formulations." },
  { year: "2022", event: "Entered nutraceutical segment, broadening our healthcare solutions portfolio." },
  { year: "2024", event: "Pan-India distribution network serving hospitals, distributors, and healthcare professionals." },
];

const values = [
  {
    icon: "◈",
    title: "Quality",
    desc: "Every product meets the highest standards of safety, efficacy, and reliability — no compromise.",
  },
  {
    icon: "◇",
    title: "Integrity",
    desc: "Honest, transparent, and ethical in every aspect of our business and partnerships.",
  },
  {
    icon: "◉",
    title: "Innovation",
    desc: "Continuous investment in R&D to create better, more effective healthcare solutions.",
  },
  {
    icon: "♡",
    title: "Patient First",
    desc: "Every decision begins and ends with patient safety and well-being as the highest priority.",
  },
  {
    icon: "◎",
    title: "Excellence",
    desc: "We strive for excellence across manufacturing, quality assurance, and customer service.",
  },
  {
    icon: "❋",
    title: "Sustainability",
    desc: "Environmentally responsible manufacturing practices for a healthier planet and future.",
  },
];

const whyUs = [
  "WHO-GMP compliant production standards",
  "Modern state-of-the-art manufacturing facilities",
  "Strict Quality Assurance & Quality Control",
  "Wide range of pharmaceutical formulations",
  "Experienced R&D and scientific team",
  "Trusted distribution network across India",
  "Patient-focused product development",
  "Ethical and transparent business practices",
];

const founderHighlights = [
  { label: "25+", sub: "Years in Pharma" },
  { label: "500+", sub: "Products Launched" },
  { label: "2010", sub: "Founded the Company" },
];

export default function AboutPage() {
  return (
    <main className="font-sans antialiased">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0C4A6E] text-white">
        {/* decorative rings */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-[#38BDF8]/10" />
        <div className="pointer-events-none absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full border border-[#38BDF8]/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#38BDF8]/5 blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-5">
              Building Health · Delivering Trust
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Healing Lives,<br />
              <span className="text-[#38BDF8]">One Medicine</span><br />
              at a Time.
            </h1>
            <p className="mt-6 text-gray-400 leading-relaxed text-lg max-w-md">
              Pharma Medicline was built on a single belief — that every patient deserves safe, effective, and affordable medicines. That belief drives everything we do.
            </p>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Products</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">WHO</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">GMP Certified</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">Pan</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">India Reach</p>
              </div>
            </div>
          </div>

          {/* right side card */}
          <div className="hidden md:block relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <p className="text-xs uppercase tracking-widest text-[#38BDF8] font-semibold mb-4">Who We Are</p>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Pharma Medicline is a pharmaceutical manufacturing company focused on developing, manufacturing, and supplying a wide range of pharmaceutical formulations — tablets, capsules, syrups, injections, ointments, and nutraceuticals.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  We combine scientific innovation with modern technology to deliver medicines complying with national and international quality standards.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#38BDF8]/20 -z-10" />
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="bg-[#F0F9FF] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0C4A6E] text-white p-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#38BDF8]">Our Mission</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-snug">
                Safe, Effective &<br />Affordable Medicine for All
              </h2>
              <p className="mt-4 text-sky-100/80 leading-relaxed text-[15px]">
                To provide safe, effective, and affordable medicines that enhance the health and well-being of people while maintaining the highest standards of quality, innovation, and ethical business practices.
              </p>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0C4A6E] text-white p-10">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#38BDF8]">Our Vision</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-snug">
                India's Most Trusted<br />Pharmaceutical Company
              </h2>
              <p className="mt-4 text-sky-100/80 leading-relaxed text-[15px]">
                To become one of India's most trusted pharmaceutical companies by delivering innovative healthcare solutions, maintaining manufacturing excellence, and building long-term relationships based on trust, quality, and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">What Drives Us</span>
            <h2 className="mt-3 text-4xl font-bold text-[#0C4A6E]">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  i % 3 === 1
                    ? "bg-[#0C4A6E] text-white border-transparent"
                    : "bg-[#F0F9FF] text-[#0C4A6E] border-gray-100"
                }`}
              >
                <span
                  className={`text-2xl ${i % 3 === 1 ? "text-[#38BDF8]" : "text-[#0C4A6E]"}`}
                >
                  {icon}
                </span>
                <h3 className={`mt-4 text-lg font-bold ${i % 3 === 1 ? "text-white" : "text-[#0C4A6E]"}`}>
                  {title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${i % 3 === 1 ? "text-sky-100/70" : "text-gray-500"}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="bg-[#F0F9FF] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">Our Story</span>
            <h2 className="mt-3 text-4xl font-bold text-[#0C4A6E]">Our Journey</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0C4A6E] via-[#38BDF8] to-transparent hidden sm:block" />

            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-6 sm:gap-10 items-start group">
                  {/* year pill */}
                  <div className="shrink-0 w-[72px] sm:w-[76px] text-right">
                    <span className="inline-block text-sm font-bold text-[#0C4A6E] bg-[#E0F2FE] rounded-full px-3 py-1 group-hover:bg-[#0C4A6E] group-hover:text-white transition-colors duration-200">
                      {year}
                    </span>
                  </div>

                  {/* dot */}
                  <div className="relative hidden sm:flex shrink-0 w-4 items-center justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-[#38BDF8] ring-4 ring-[#F0F9FF] group-hover:scale-125 transition-transform duration-200" />
                  </div>

                  {/* content */}
                  <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                    <p className="text-[#0C4A6E] leading-relaxed text-[15px]">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR FOUNDER ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">Leadership</span>
            <h2 className="mt-3 text-4xl font-bold text-[#0C4A6E]">Meet Our Founder</h2>
          </div>

          <div className="grid md:grid-cols-[340px_1fr] gap-10 md:gap-14 items-start">
            {/* Photo */}
            <div className="mx-auto w-full max-w-[320px] md:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-[#E0F2FE] aspect-[4/5]">
               <Image
  src="/images/founder.png"
  alt="Founder"
  fill
  className="object-cover"
  priority
/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur-sm px-4 py-3">
                  <p className="text-[14px] font-bold text-[#0C4A6E] leading-tight">Dr. Suraj Nagargoje </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0C4A6E]/70 mt-0.5">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-between rounded-2xl border border-gray-100 bg-[#F0F9FF] px-4 py-5">
                {founderHighlights.map((h) => (
                  <div key={h.sub} className="text-center flex-1">
                    <p className="text-xl font-bold text-[#0C4A6E]">{h.label}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">{h.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="pt-1 md:pt-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#38BDF8" className="mb-4 opacity-90">
                <path d="M7.17 6C4.32 6 2 8.32 2 11.17c0 2.55 1.86 4.66 4.29 5.05-.14.63-.5 1.2-1.05 1.65-.24.2-.13.58.18.62 2.75.36 5-1.63 5.58-4.12.14-.6.2-1.24.2-1.9C11.2 8.32 8.88 6 6.03 6h1.14zm11 0C15.32 6 13 8.32 13 11.17c0 2.55 1.86 4.66 4.29 5.05-.14.63-.5 1.2-1.05 1.65-.24.2-.13.58.18.62 2.75.36 5-1.63 5.58-4.12.14-.6.2-1.24.2-1.9C22.2 8.32 19.88 6 17.03 6h1.14z" />
              </svg>

              <p className="text-[16px] md:text-[17px] font-semibold text-[#0C4A6E] leading-relaxed">
                "I started Pharma Medicline with one goal: make sure no patient has to choose
                between quality and affordability. Fifteen years later, that goal still shapes
                every decision we make."
              </p>

              <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-gray-600">
                <p>
                  Dr.Suraj Nagargoje founded Pharma Medicline in 2010 after more than a decade
                  working across formulation and quality control in India's pharmaceutical
                  sector. He saw firsthand how inconsistent quality and high costs kept
                  effective treatment out of reach for many patients — and set out to build a
                  company that would close that gap.
                </p>
                <p>
                  Under his leadership, Pharma Medicline earned WHO-GMP certification, opened a
                  dedicated R&amp;D division, and grew from a single production line into a
                  pan-India manufacturer serving hospitals, distributors, and healthcare
                  professionals nationwide. He continues to lead product strategy personally,
                  with a hands-on approach to quality that has defined the company since day one.
                </p>
              </div>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "M.Pharm, Pharmaceutical Sciences",
                  "25+ years in pharma manufacturing",
                  "Architect of our WHO-GMP program",
                  "Leads R&D & product strategy",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#0C4A6E]">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0C4A6E]">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-6">
                <a
                  href="mailto:founder@pharmamedicline.com"
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#0C4A6E] hover:text-[#38BDF8] transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  info@sdklifescience.com
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0C4A6E] px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-[#38BDF8] transition-colors duration-200"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING + QA ── */}
      <section className="bg-[#0C4A6E] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">Our Facilities</span>
              <h2 className="mt-3 text-4xl font-bold leading-snug">
                Manufacturing<br />
                <span className="text-[#38BDF8]">Excellence</span>
              </h2>
              <p className="mt-5 text-sky-100/70 leading-relaxed">
                Our state-of-the-art facilities operate under stringent quality control systems. Every stage — from raw material procurement to packaging and distribution — follows standardized operating procedures to ensure product consistency and safety.
              </p>
              <p className="mt-4 text-sky-100/70 leading-relaxed">
                Our facilities are designed to comply with WHO-GMP guidelines and industry best practices, ensuring every product delivered meets the highest quality standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Quality Assurance", sub: "Rigorous batch testing before every release" },
                { label: "Quality Control", sub: "Identity, purity, potency & safety verified" },
                { label: "WHO-GMP", sub: "Fully compliant manufacturing processes" },
                { label: "R&D Division", sub: "Advancing formulations for evolving medical needs" },
              ].map(({ label, sub }) => (
                <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors duration-200">
                  <p className="text-[#38BDF8] font-bold text-sm">{label}</p>
                  <p className="mt-2 text-gray-400 text-xs leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#F0F9FF] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">The Difference</span>
            <h2 className="mt-3 text-4xl font-bold text-[#0C4A6E]">Why Choose Pharma Medicline</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#0C4A6E]/20 transition-all duration-200"
              >
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0C4A6E]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm text-[#0C4A6E] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="bg-[#0C4A6E] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4">Looking Ahead</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Building a Healthier Tomorrow — Together.
          </h2>
          <p className="mt-5 text-sky-100/70 leading-relaxed">
            As we continue to grow, Pharma Medicline remains focused on expanding its product portfolio, embracing advanced technologies, strengthening research capabilities, and reaching more communities with trusted healthcare solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-block px-8 py-3 rounded-full bg-[#38BDF8] text-[#0C4A6E] font-semibold text-sm hover:bg-[#7DD3FC] transition-colors duration-200"
            >
              Explore Our Products
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}