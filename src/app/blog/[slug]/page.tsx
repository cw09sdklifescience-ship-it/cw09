import type { Metadata } from "next";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; tag: string; content: string }> = {
  "generic-vs-branded-medicines": {
    title: "Generic vs Branded: What Doctors Should Know",
    date: "2024-05-10",
    tag: "Medical Insights",
    content: "Generic medicines contain the same active ingredient, dosage form, strength, and route of administration as the branded original. Bioequivalence studies — mandated by CDSCO — ensure that generic drugs perform identically in the human body. For most conditions, evidence strongly supports generic prescribing as both clinically effective and cost-efficient for patients.",
  },
  "who-gmp-certification-importance": {
    title: "Why WHO-GMP Certification Matters for Patient Safety",
    date: "2024-04-22",
    tag: "Quality",
    content: "WHO-GMP (Good Manufacturing Practice) certification is the gold standard for pharmaceutical manufacturing quality. It covers everything from raw material sourcing and cleanroom environments to batch testing and packaging integrity. For prescribers and patients, a WHO-GMP certified manufacturer guarantees that every tablet, vial, or capsule meets stringent international quality benchmarks.",
  },
};

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 160),
    alternates: { canonical: "https://www.yourpharmacompany.com/blog/" + params.slug },
    openGraph: {
      type: "article",
      title: post.title,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: "PharmaCore Pharmaceuticals" },
    publisher: { "@type": "Organization", name: "PharmaCore Pharmaceuticals", logo: "https://www.yourpharmacompany.com/logo.png" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-24">
        <article className="section-padding bg-white">
          <div className="container-max max-w-3xl">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{post.tag}</span>
            <h1 className="mt-3 text-4xl font-display font-bold text-dark leading-tight">{post.title}</h1>
            <p className="mt-2 text-sm text-gray-400">
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · PharmaCore Team
            </p>
            <div className="mt-10 h-64 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50" />
            <div className="mt-10 prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed text-base">{post.content}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}
