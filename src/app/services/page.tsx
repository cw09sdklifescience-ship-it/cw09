import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Areas",
  description: "PharmaCore covers 18 therapy areas including Cardiology, Oncology, Diabetology, Neurology and more with certified pharmaceutical products.",
  alternates: { canonical: "https://www.yourpharmacompany.com/services" },
};

const therapies = [
  { name: "Cardiology",         desc: "ACE inhibitors, beta blockers, statins, antihypertensives and antiarrhythmics." },
  { name: "Diabetology",        desc: "Oral hypoglycemics, insulins, GLP-1 agonists and combination therapies." },
  { name: "Oncology",           desc: "Cytotoxics, targeted therapy, immunotherapy and supportive care." },
  { name: "Neurology",          desc: "Anti-epileptics, dopaminergics, neuroprotectives and migraine treatments." },
  { name: "Dermatology",        desc: "Topical corticosteroids, antifungals, retinoids and biologics." },
  { name: "Gastroenterology",   desc: "PPIs, antispasmodics, laxatives and inflammatory bowel disease drugs." },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-surface">
        <div className="container-max">
          <span className="text-xs font-semibold text-primary-600 tracking-widest uppercase">Coverage</span>
          <h1 className="mt-2 text-5xl font-display font-bold text-dark">18 Therapy Areas</h1>
          <p className="mt-3 text-gray-500 max-w-xl">Comprehensive pharmaceutical coverage for India's most critical disease categories.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-max grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map(({ name, desc }) => (
            <div key={name} className="p-7 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
              <h2 className="text-lg font-display font-bold text-dark">{name}</h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
