"use client";

import {
  Pill,
  FlaskConical,
  ShoppingBag,
  Leaf,
  HeartPulse,
  Brain,
  Wind,
  Microscope,
} from "lucide-react";

interface ProductCategoriesProps {
  onSelect: (category: string) => void;
}

const categoryGroups = [
  {
    label: "Generic Medicines",
    desc: "Cost-effective, high-quality alternatives",
    icon: Pill,
    match: "All",
  },
  {
    label: "Specialty Drugs",
    desc: "Advanced, targeted formulations",
    icon: FlaskConical,
    match: "All",
  },
  {
    label: "OTC Products",
    desc: "Trusted over-the-counter range",
    icon: ShoppingBag,
    match: "All",
  },
  {
    label: "Nutraceuticals",
    desc: "Wellness & nutrition supplements",
    icon: Leaf,
    match: "All",
  },
  {
    label: "Cardiac Care",
    desc: "Heart & vascular health",
    icon: HeartPulse,
    match: "CARDIAC CARE",
  },
  {
    label: "Neurology",
    desc: "Neurological disorders",
    icon: Brain,
    match: "All",
  },
  {
    label: "Respiratory",
    desc: "Pulmonary & breathing care",
    icon: Wind,
    match: "RESPIRATORY",
  },
  {
    label: "Hematinic",
    desc: "Blood health & iron support",
    icon: Microscope,
    match: "HEMATINIC",
  },
];

export default function ProductCategories({ onSelect }: ProductCategoriesProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-[#38BDF8] bg-[#E0F2FE] px-4 py-1.5 rounded-full">
          Browse by Category
        </span>
        <h2 className="mt-4 text-3xl font-bold text-[#0C4A6E]">
          Explore Our Product Range
        </h2>
        <p className="mt-3 text-gray-500">
          From generics to specialty therapeutics, every category is
          manufactured under strict WHO-GMP quality standards.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categoryGroups.map((group) => {
          const Icon = group.icon;
          return (
            <button
              key={group.label}
              onClick={() => onSelect(group.match)}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7DD3FC] hover:shadow-xl"
            >
              <div className="rounded-xl bg-[#E0F2FE] p-3 text-[#38BDF8] transition-colors group-hover:bg-[#0C4A6E] group-hover:text-white">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0C4A6E]">
                  {group.label}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {group.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}