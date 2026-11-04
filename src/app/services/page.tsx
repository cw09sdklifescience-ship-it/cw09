import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Areas",
  description: "PharmaCore covers 18 therapy areas including Cardiology, Oncology, Diabetology, Neurology and more with certified pharmaceutical products.",
  alternates: { canonical: "https://www.yourpharmacompany.com/services" },
};

const therapies = [
  { name: "Cardiology",       desc: "ACE inhibitors, beta blockers, statins, antihypertensives and antiarrhythmics." },
  { name: "Diabetology",      desc: "Oral hypoglycemics, insulins, GLP-1 agonists and combination therapies." },
  { name: "Oncology",         desc: "Cytotoxics, targeted therapy, immunotherapy and supportive care." },
  { name: "Neurology",        desc: "Anti-epileptics, dopaminergics, neuroprotectives and migraine treatments." },
  { name: "Dermatology",      desc: "Topical corticosteroids, antifungals, retinoids and biologics." },
  { name: "Gastroenterology", desc: "PPIs, antispasmodics, laxatives and inflammatory bowel disease drugs." },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 sm:pt-24">
      

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {therapies.map(({ name, desc }) => (
            <div
              key={name}
              className="p-5 sm:p-7 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
            >
              <h2 className="text-base sm:text-lg font-display font-bold text-dark">
                {name}
              </h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}