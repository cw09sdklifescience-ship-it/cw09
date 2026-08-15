import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | SDK Life Science Pvt. Ltd.",
  description:
    "Get in touch with SDK Life Science for product enquiries, distribution partnerships, or medical information.",
  alternates: { canonical: "https://www.sdklifescience.com/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact SDK Life Science",
  url: "https://www.sdklifescience.com/contact",
};

/* ────────────────────────────────────────────────────────────
   Brand tokens — sky-blue system, consistent with the rest of
   the SDK Life Science site
   ──────────────────────────────────────────────────────────── */
const BRAND = {
  deep: "#0C4A6E",        // dark sections, headline text
  sky: "#38BDF8",         // primary accent
  skyLight: "#7DD3FC",    // secondary accent
  cream: "#F0F9FF",       // page background
  creamDeep: "#E0F2FE",   // card / chip background
  ink: "#0C4A6E",
  slate: "#0369A1",       // body text
  border: "#BAE6FD",
};
const serif = { fontFamily: "Georgia, 'Times New Roman', serif" };

const contactDetails = [
  { Icon: Phone, label: "Phone", value: "+91 8805131888", href: "tel:+918805131888" },
  { Icon: Mail, label: "Email", value: "info@sdklifescience.com", href: "mailto:info@sdklifescience.com" },
  { Icon: MapPin, label: "Address", value: "SDK Life Science Pvt. Ltd., Latur, Maharashtra, India" },
  { Icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM IST" },
];

const enquiryPaths = [
  { label: "Product Enquiry", desc: "Availability, specs & pricing" },
  { label: "Distribution Partnership", desc: "Become a stockist or partner" },
  { label: "Medical Information", desc: "Clinical & dosage queries" },
  { label: "Pharmacovigilance", desc: "Report an adverse event" },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border text-[14px] bg-white outline-none transition-colors focus:ring-2";

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ background: BRAND.cream }}>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 pt-36 pb-20" style={{ background: BRAND.deep }}>
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full opacity-[0.07]"
            style={{ color: BRAND.sky }}
          >
            <pattern id="contact-lattice" width="64" height="64" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="2" fill="currentColor" />
              <circle cx="40" cy="24" r="2" fill="currentColor" />
              <circle cx="20" cy="48" r="2" fill="currentColor" />
              <line x1="8" y1="8" x2="40" y2="24" stroke="currentColor" strokeWidth="0.6" />
              <line x1="40" y1="24" x2="20" y2="48" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#contact-lattice)" />
          </svg>

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-9" style={{ background: BRAND.sky, opacity: 0.7 }} />
              <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color: BRAND.sky }}>
                Get In Touch
              </span>
              <span className="h-px w-9" style={{ background: BRAND.sky, opacity: 0.7 }} />
            </div>
            <h1
              className="text-[36px] sm:text-[50px] font-bold leading-[1.1] mb-5"
              style={{ ...serif, color: "#F0F9FF" }}
            >
              Let's Start a Conversation
            </h1>
            <p className="text-[15.5px] max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(224,242,254,0.82)" }}>
              Product enquiries, distribution partnerships, or medical information —
              our team typically responds within one business day.
            </p>

            {/* Quick-contact chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a
                href="tel:+918805131888"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 hover:brightness-110"
                style={{ background: BRAND.sky, color: BRAND.deep }}
              >
                <Phone size={15} /> +91 8805131888
              </a>
              <a
                href="mailto:info@sdklifescience.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold border transition-colors duration-300 hover:bg-white/5"
                style={{ borderColor: "rgba(224,242,254,0.3)", color: "#F0F9FF" }}
              >
                <Mail size={15} /> info@sdklifescience.com
              </a>
            </div>
          </div>
        </section>

        {/* ── ENQUIRY PATHS ───────────────────────────────── */}
        <section className="px-6 -mt-9 relative z-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {enquiryPaths.map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4 border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: BRAND.border }}
              >
                <p className="text-[13.5px] font-semibold" style={{ color: BRAND.ink }}>
                  {item.label}
                </p>
                <p className="mt-1 text-[12px] leading-snug" style={{ color: BRAND.slate }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FORM + INFO ────────────────────────────────── */}
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-6">

            {/* Form */}
            <div
              className="rounded-2xl p-7 sm:p-9 border bg-white shadow-sm"
              style={{ borderColor: BRAND.border }}
            >
              <h2 className="text-[20px] font-bold mb-1" style={{ ...serif, color: BRAND.ink }}>
                Send Us a Message
              </h2>
              <p className="text-[13.5px] mb-6" style={{ color: BRAND.slate }}>
                Fill in the details below and our team will get back to you shortly.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" placeholder="Dr. Rajesh Sharma" />
                  <Field label="Phone" placeholder="+91 XXXXXXXXXX" type="tel" />
                </div>
                <Field label="Email" placeholder="you@hospital.com" type="email" />
                <div>
                  <label className="text-[13px] font-medium block mb-1.5" style={{ color: BRAND.ink }}>
                    Enquiry Type
                  </label>
                  <select
                    className={inputClass}
                    style={{ borderColor: BRAND.border, color: BRAND.ink }}
                  >
                    <option>Product Enquiry</option>
                    <option>Distribution Partnership</option>
                    <option>Medical Information</option>
                    <option>Pharmacovigilance</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[13px] font-medium block mb-1.5" style={{ color: BRAND.ink }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your enquiry..."
                    className={`${inputClass} resize-none`}
                    style={{ borderColor: BRAND.border, color: BRAND.ink }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-[14px] transition-all duration-300 hover:brightness-110"
                  style={{ background: BRAND.deep, color: "#fff" }}
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ Icon, label, value, href }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href } : {})}
                    className="flex gap-4 items-start p-5 rounded-xl border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: BRAND.border }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: BRAND.creamDeep }}
                    >
                      <Icon size={17} style={{ color: BRAND.sky }} />
                    </div>
                    <div>
                      <p
                        className="text-[10.5px] font-semibold uppercase tracking-wider"
                        style={{ color: BRAND.slate }}
                      >
                        {label}
                      </p>
                      <p className="mt-0.5 text-[14px] font-medium" style={{ color: BRAND.ink }}>
                        {value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}

              {/* Response-time / trust card */}
              <div
                className="mt-1 rounded-xl p-6 relative overflow-hidden"
                style={{ background: BRAND.deep }}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <MessageCircle size={17} style={{ color: BRAND.skyLight }} />
                  <span className="text-[12px] font-semibold uppercase tracking-[1.5px]" style={{ color: BRAND.skyLight }}>
                    Fast Response
                  </span>
                </div>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(224,242,254,0.85)" }}>
                  Prefer to talk directly? Our team typically responds within one business day.
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: "rgba(224,242,254,0.14)" }}>
                  <ShieldCheck size={15} style={{ color: BRAND.skyLight }} />
                  <span className="text-[12px] font-medium" style={{ color: "rgba(224,242,254,0.85)" }}>
                    WHO-GMP certified team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-[13px] font-medium block mb-1.5" style={{ color: BRAND.ink }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
        style={{ borderColor: BRAND.border, color: BRAND.ink }}
      />
    </div>
  );
}