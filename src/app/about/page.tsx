import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Pharma Medicline",
  description:
    "Pharma Medicline is committed to providing high-quality, safe, and affordable pharmaceutical products across India.",
  alternates: {
    canonical: "https://www.pharmamedicline.com/about",
  },
};

const milestones = [
 { year: "2022", event: "Founded with a vision to make quality healthcare accessible to every patient across India." },
  { year: "2023", event: "Achieved WHO-GMP certification, setting the benchmark for manufacturing excellence." },
  { year: "2024", event: "Expanded product portfolio to include tablets, capsules, syrups, injections, and ointments." },
  { year: "2025", event: "Launched dedicated Research & Development division for advanced pharmaceutical formulations." },
  { year: "2026", event: "Pan-India distribution network serving hospitals, distributors, and healthcare professionals." },
];

const values = [
  {
    icon: "◈",
    title: "Quality",
    desc:
      "Every product meets high standards of safety, efficacy, and reliability.",
  },
  {
    icon: "◇",
    title: "Integrity",
    desc:
      "Honest, transparent, and ethical in every aspect of our business and partnerships.",
  },
  {
    icon: "◉",
    title: "Innovation",
    desc:
      "Continuous investment in research and development to create better healthcare solutions.",
  },
  {
    icon: "♡",
    title: "Patient First",
    desc:
      "Every decision begins and ends with patient safety and well-being.",
  },
  {
    icon: "◎",
    title: "Excellence",
    desc:
      "We strive for excellence in manufacturing, quality assurance, and customer service.",
  },
  {
    icon: "❋",
    title: "Sustainability",
    desc:
      "Environmentally responsible practices for a healthier planet and future.",
  },
];

const whyUs = [
  "WHO-GMP compliant production standards",
  "Modern manufacturing facilities",
  "Strict Quality Assurance and Quality Control",
  "Wide range of pharmaceutical formulations",
  "Experienced R&D and scientific team",
  "Distribution network across India",
  "Patient-focused product development",
  "Ethical and transparent business practices",
];

const founderHighlights = [
  { label: "06+", sub: "Years in Pharma" },
  { label: "2022", sub: "Year Founded" },
];

const facilities = [
  {
    label: "Quality Assurance",
    sub: "Rigorous batch testing before product release.",
  },
  {
    label: "Quality Control",
    sub: "Identity, purity, potency, and safety verification.",
  },
  {
    label: "WHO-GMP",
    sub: "Manufacturing processes aligned with applicable standards.",
  },
  {
    label: "R&D Division",
    sub: "Developing formulations for evolving healthcare needs.",
  },
];

function WorldMapIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-xl shadow-sky-900/5 sm:p-8"
      role="img"
      aria-label="Illustration showing global healthcare connections and India's location"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
            Our Reach
          </p>
          <h2 className="mt-2 text-xl font-bold text-sky-950 sm:text-2xl">
            Healthcare Without Borders
          </h2>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
          </svg>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-3 sm:p-5">
        <svg
          viewBox="0 0 520 330"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="mapDots"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#BAE6FD" />
            </pattern>

            <linearGradient id="indiaGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          <rect width="520" height="330" rx="16" fill="url(#mapDots)" />

          {/* North America */}
          <path
            d="M52 69L77 49L115 45L141 58L155 82L143 101L124 111L119 134L101 143L91 169L73 155L65 129L47 113L42 91Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          <path
            d="M104 171L122 181L135 211L150 229L144 252L130 237L119 210L105 193Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* South America */}
          <path
            d="M163 180L189 186L207 207L210 231L199 254L195 278L181 302L169 277L170 253L157 229L151 204Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* Europe */}
          <path
            d="M228 70L248 58L271 65L284 81L273 95L254 93L242 108L226 96Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* Africa */}
          <path
            d="M235 119L264 109L286 127L291 157L278 188L265 215L247 200L238 176L222 150Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* Asia */}
          <path
            d="M281 64L311 49L348 52L373 66L410 62L443 80L466 103L451 124L422 120L399 137L375 131L359 147L339 132L322 110L296 104L277 88Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* Southeast Asia */}
          <path
            d="M352 148L373 151L389 170L380 186L361 174Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* Australia */}
          <path
            d="M403 217L433 207L458 220L453 244L430 257L407 245L397 229Z"
            fill="#D1FAE5"
            stroke="#99D9C7"
            strokeWidth="1.5"
          />

          {/* Global connection lines */}
          <path
            d="M260 154 Q180 60 105 94"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.7"
          />

          <path
            d="M260 154 Q280 72 320 86"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.7"
          />

          <path
            d="M260 154 Q335 174 421 230"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.7"
          />

          {/* India location marker */}
          <circle cx="321" cy="139" r="27" fill="#38BDF8" opacity="0.13" />
          <circle cx="321" cy="139" r="18" fill="#38BDF8" opacity="0.2" />
          <circle cx="321" cy="139" r="8" fill="url(#indiaGlow)" />
          <circle cx="321" cy="139" r="3" fill="white" />

          <path
            d="M330 133L355 114"
            stroke="#0369A1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <rect
            x="350"
            y="91"
            width="105"
            height="30"
            rx="8"
            fill="#075985"
          />

          <text
            x="402"
            y="110"
            fontSize="11"
            fontWeight="700"
            fill="white"
            textAnchor="middle"
          >
            INDIA
          </text>
        </svg>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-white p-4 ring-1 ring-sky-100">
          <p className="text-2xl font-extrabold text-sky-900">Pan-India</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            Distribution Reach
          </p>
        </div>
      </div>

      <p className="relative mt-5 text-center text-xs leading-relaxed text-gray-500">
        Committed to connecting quality pharmaceutical solutions with
        healthcare professionals and communities.
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-14 text-center">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-500">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-bold text-sky-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 5l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="font-sans antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-20 -top-40 h-[600px] w-[600px] rounded-full bg-sky-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-32 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-500">
              Building Health · Delivering Trust
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
              The Visionary
              <br />
              Journey of
              <br />
              <span className="text-sky-500">Pharma Medicline</span>
            </h1>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-[1.85] text-gray-600 sm:text-[17px]">
              <p>
                A single belief, born from the mind of one determined
                pharmacist, holds the power to change lives: every patient
                deserves safe, effective, and affordable medicine.
              </p>

              <p>
                Back in{" "}
                <strong className="text-sky-950">2022</strong>, our founder
                turned that belief into a mission:{" "}
                <strong className="text-sky-950">
                  make quality healthcare accessible to all
                </strong>
                .
              </p>

              <p>
                Today, Pharma Medicline continues to focus on pharmaceutical
                products, quality, and healthcare solutions for hospitals,
                distributors, and healthcare professionals.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 sm:gap-8">
              <div>
              </div>

              <div className="hidden w-px bg-gray-200 sm:block" />

              <div>
                <p className="text-3xl font-bold text-sky-950">WHO-GMP</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                  Quality Standards
                </p>
              </div>

              <div className="hidden w-px bg-gray-200 sm:block" />

              <div>
                <p className="text-3xl font-bold text-sky-950">India</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                  Distribution Reach
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <WorldMapIllustration />
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-sky-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Our Purpose" title="Mission & Vision" />

          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-xl shadow-sky-900/5">
            <div className="grid md:grid-cols-2">
              {/* MISSION */}
              <div className="relative p-8 sm:p-12">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sky-100/70 blur-2xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>

                  <span className="mt-6 block text-[11px] font-bold uppercase tracking-[0.25em] text-sky-500">
                    Our Mission
                  </span>

                  <h3 className="mt-2 text-2xl font-bold leading-snug text-sky-950 sm:text-3xl">
                    Safe, Effective & Affordable Medicine for All
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                    To provide safe, effective, and affordable medicines that
                    enhance people's health and well-being while maintaining
                    strong standards of quality, innovation, and ethical
                    business practices.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Safety & efficacy",
                      "Affordability",
                      "Ethical practices",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-sky-950"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* VISION */}
              <div className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 p-8 text-white sm:p-12">
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-sky-400/10" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  <span className="mt-6 block text-[11px] font-bold uppercase tracking-[0.25em] text-sky-300">
                    Our Vision
                  </span>

                  <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
                    India's Most Trusted Pharmaceutical Company
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-sky-100/80">
                    To become a trusted pharmaceutical company by delivering
                    healthcare solutions, maintaining manufacturing
                    excellence, and building long-term relationships based on
                    trust, quality, and integrity.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Manufacturing excellence",
                      "Long-term trust",
                      "Healthcare solutions",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-white"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-300">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 5l2 2 4-4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Center connector badge (desktop only) */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-sky-500 text-white shadow-lg md:flex">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon, title, desc }, index) => (
              <div
                key={title}
                className={`group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index % 3 === 1
                    ? "border-transparent bg-sky-950 text-white"
                    : "border-gray-100 bg-sky-50 text-sky-950"
                }`}
              >
                <span
                  className={`text-2xl ${
                    index % 3 === 1 ? "text-sky-400" : "text-sky-800"
                  }`}
                >
                  {icon}
                </span>

                <h3 className="mt-4 text-lg font-bold">{title}</h3>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    index % 3 === 1 ? "text-sky-100/70" : "text-gray-500"
                  }`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY */}
      <section className="bg-sky-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Our Story" title="Our Journey" />

          <div className="relative">
            <div className="absolute bottom-0 left-[91px] top-0 hidden w-px bg-gradient-to-b from-sky-900 via-sky-400 to-transparent sm:block" />

            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div
                  key={year}
                  className="group flex items-start gap-5 sm:gap-8"
                >
                  <div className="w-[76px] shrink-0 text-right">
                    <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-950 transition-colors group-hover:bg-sky-950 group-hover:text-white">
                      {year}
                    </span>
                  </div>

                  <div className="relative mt-2 hidden w-4 shrink-0 items-center justify-center sm:flex">
                    <div className="h-3 w-3 rounded-full bg-sky-400 ring-4 ring-sky-50 transition-transform group-hover:scale-125" />
                  </div>

                  <div className="flex-1 border-b border-gray-200 pb-8 last:border-0">
                    <p className="text-[15px] leading-relaxed text-sky-950">
                      {event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Founder"
          />

          <div className="grid items-start gap-10 md:grid-cols-[340px_1fr] md:gap-14">
            <div className="mx-auto w-full max-w-[320px] md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sky-100">
                <Image
                  src="/images/surajsir.png"
                  alt="Founder of Pharma Medicline"
                  fill
                  sizes="(max-width: 768px) 90vw, 340px"
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-bold leading-tight text-sky-950">
                    Dr. Suraj Nagargoje
                  </p>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-sky-950/70">
                    Founder & Managing Director
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-between gap-2 rounded-2xl border border-gray-100 bg-sky-50 px-3 py-5 sm:px-4">
                {founderHighlights.map((highlight) => (
                  <div
                    key={highlight.sub}
                    className="flex-1 text-center"
                  >
                    <p className="text-lg font-bold text-sky-950 sm:text-xl">
                      {highlight.label}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-wider text-gray-500 sm:text-[10px]">
                      {highlight.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1 md:pt-4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#38BDF8"
                className="mb-4 opacity-90"
                aria-hidden="true"
              >
                <path d="M7.17 6C4.32 6 2 8.32 2 11.17c0 2.55 1.86 4.66 4.29 5.05-.14.63-.5 1.2-1.05 1.65-.24.2-.13.58.18.62 2.75.36 5-1.63 5.58-4.12.14-.6.2-1.24.2-1.9C11.2 8.32 8.88 6 6.03 6h1.14zm11 0C15.32 6 13 8.32 13 11.17c0 2.55 1.86 4.66 4.29 5.05-.14.63-.5 1.2-1.05 1.65-.24.2-.13.58.18.62 2.75.36 5-1.63 5.58-4.12.14-.6.2-1.24.2-1.9C22.2 8.32 19.88 6 17.03 6h1.14z" />
              </svg>

              <p className="text-base font-semibold leading-relaxed text-sky-950 sm:text-[17px]">
                "I started Pharma Medicline with one goal: make sure no
                patient has to choose between quality and affordability.
                That goal continues to guide our work."
              </p>

              <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-gray-600">
                <p>
                  Dr. Suraj Nagargoje founded Pharma Medicline in 2022 with
                  the aim of making quality medicines more accessible. His
                  focus on pharmaceutical manufacturing, quality control,
                  and patient needs continues to shape the company's mission.
                </p>

                <p>
                  The company focuses on pharmaceutical formulations,
                  quality assurance, research, and distribution to support
                  healthcare professionals and communities.
                </p>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Pharmaceutical sciences background",
                  "Experience in pharmaceutical manufacturing",
                  "Focus on quality and compliance",
                  "Product development and strategy",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[13px] font-medium text-sky-950 sm:text-[13.5px]"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-6">
                <a
                  href="mailto:info@sdklifescience.com"
                  className="inline-flex items-center gap-2 break-all text-[13px] font-bold text-sky-950 transition-colors hover:text-sky-500 sm:text-[13.5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>

                  info@sdklifescience.com
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-950 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-sky-600"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING AND QUALITY */}
      <section className="bg-sky-950 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
              Our Facilities
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
              Manufacturing
              <br />
              <span className="text-sky-400">Excellence</span>
            </h2>

            <p className="mt-5 leading-relaxed text-sky-100/70">
              Our approach to manufacturing emphasizes quality control,
              standardized operating procedures, and careful oversight
              throughout the production process.
            </p>

            <p className="mt-4 leading-relaxed text-sky-100/70">
              Quality assurance and applicable manufacturing standards
              are important parts of delivering reliable pharmaceutical
              products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facilities.map(({ label, sub }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <p className="text-sm font-bold text-sky-400">{label}</p>

                <p className="mt-2 text-xs leading-relaxed text-gray-300">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-sky-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The Difference"
            title="Why Choose Pharma Medicline"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-sky-200 hover:shadow-md"
              >
                <CheckIcon />

                <p className="text-sm leading-relaxed text-sky-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-sky-950 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
            Looking Ahead
          </p>

          <h2 className="text-3xl font-bold leading-snug text-white sm:text-4xl">
            Building a Healthier Tomorrow, Together.
          </h2>

          <p className="mt-5 leading-relaxed text-sky-100/70">
            We remain focused on developing healthcare solutions,
            strengthening product quality, and supporting healthcare
            professionals and communities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/products"
              className="inline-block rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-sky-950 transition-colors hover:bg-sky-300"
            >
              Explore Our Products
            </a>

            <a
              href="/contact"
              className="inline-block rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}