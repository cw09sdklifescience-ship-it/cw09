import type { Metadata } from "next";
import { Heart, Activity, Dna, Brain, Sparkles, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Therapy Areas",
  description: "PharmaCore covers 18 therapy areas including Cardiology, Oncology, Diabetology, Neurology and more with certified pharmaceutical products.",
  alternates: { canonical: "https://www.yourpharmacompany.com/services" },
};

const therapies = [
  { name: "Cardiology",       desc: "ACE inhibitors, beta blockers, statins, antihypertensives and antiarrhythmics.", icon: Heart },
  { name: "Diabetology",      desc: "Oral hypoglycemics, insulins, GLP-1 agonists and combination therapies.", icon: Activity },
  { name: "Oncology",         desc: "Cytotoxics, targeted therapy, immunotherapy and supportive care.", icon: Dna },
  { name: "Neurology",        desc: "Anti-epileptics, dopaminergics, neuroprotectives and migraine treatments.", icon: Brain },
  { name: "Dermatology",      desc: "Topical corticosteroids, antifungals, retinoids and biologics.", icon: Sparkles },
  { name: "Gastroenterology", desc: "PPIs, antispasmodics, laxatives and inflammatory bowel disease drugs.", icon: Stethoscope },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="px-5 sm:px-6 lg:px-8 py-12 sm:py-16 bg-surface">
        <div className="container-max">
          <span className="text-xs font-semibold text-primary-600 tracking-widest uppercase">
            Coverage
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dark leading-tight">
            18 Therapy Areas
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl">
            Comprehensive pharmaceutical coverage for India&apos;s most critical disease categories.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {therapies.map(({ name, desc, icon: Icon }) => (
            <div
              key={name}
              className="p-5 sm:p-7 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h2 className="text-base sm:text-lg font-display font-bold text-dark">
                  {name}
                </h2>
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}