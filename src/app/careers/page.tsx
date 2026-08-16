import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join PharmaCore Pharmaceuticals — explore career opportunities in pharmaceutical sales, R&D, quality assurance, and supply chain management.",
  alternates: { canonical: "https://www.yourpharmacompany.com/careers" },
};

const openings = [
  { title: "Medical Representative",   location: "Mumbai, Pune, Nashik", type: "Full-Time" },
  { title: "Quality Assurance Officer",location: "Mumbai HQ",            type: "Full-Time" },
  { title: "R&D Formulation Scientist",location: "Mumbai HQ",            type: "Full-Time" },
  { title: "Supply Chain Manager",     location: "Pan India",            type: "Full-Time" },
  { title: "Regulatory Affairs Executive", location: "Mumbai HQ",       type: "Full-Time" },
];

export default function CareersPage() {
  return (
    <div>
      <section className="section-padding bg-surface">
        <div className="container-max">
          <span className="text-xs font-semibold text-primary-600 tracking-widest uppercase">Join Our Team</span>
          <h1 className="mt-2 text-5xl font-display font-bold text-dark">Build Your Career in Pharma</h1>
          <p className="mt-3 text-gray-500 max-w-xl">Work with a WHO-GMP certified pharmaceutical company committed to patient care and professional growth.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-display font-bold text-dark mb-8">Current Openings</h2>
          <div className="space-y-4">
            {openings.map(({ title, location, type }) => (
              <div key={title} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all gap-4">
                <div>
                  <h3 className="font-semibold text-dark">{title}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary-50 text-primary-700 font-semibold">{type}</span>
                  <button className="px-5 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}