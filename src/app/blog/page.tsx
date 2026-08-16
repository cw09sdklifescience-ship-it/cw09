import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "Latest pharmaceutical news, medical insights, therapy updates and company announcements from PharmaCore Pharmaceuticals.",
  alternates: { canonical: "https://www.yourpharmacompany.com/blog" },
};

const posts = [
  { slug: "generic-vs-branded-medicines", title: "Generic vs Branded: What Doctors Should Know", date: "2024-05-10", tag: "Medical Insights", excerpt: "A clinical comparison of generic and branded pharmaceutical efficacy, bioequivalence studies, and cost implications for prescribers." },
  { slug: "who-gmp-certification-importance", title: "Why WHO-GMP Certification Matters for Patient Safety", date: "2024-04-22", tag: "Quality", excerpt: "Understanding the rigorous standards behind WHO-GMP certification and what it means for the medicines you prescribe." },
  { slug: "cold-chain-logistics-india", title: "Cold Chain Pharma Logistics in India: Challenges & Solutions", date: "2024-03-15", tag: "Supply Chain", excerpt: "How pharmaceutical companies are solving temperature-sensitive drug delivery across India's diverse geography." },
];

export default function BlogPage() {
  return (
    <div>
      <section className="section-padding bg-surface">
        <div className="container-max">
          <h1 className="text-5xl font-display font-bold text-dark">Blog & News</h1>
          <p className="mt-3 text-gray-500">Medical insights, company news and pharmaceutical updates.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-max grid md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link key={post.slug} href={"/blog/" + post.slug} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50" />
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{post.tag}</span>
                <h2 className="mt-2 text-lg font-display font-bold text-dark group-hover:text-primary-600 transition-colors leading-snug">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                <p className="mt-4 text-xs text-gray-400">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}