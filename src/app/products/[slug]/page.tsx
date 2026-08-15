import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { products } from "@/data/products";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetails({ params }: PageProps) {
  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.slug !== product.slug
  );

  return (
    <main className="bg-[#F7FBF9] min-h-screen pt-24">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#161C18] font-medium hover:text-[#7CC9A0] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

          {/* Image */}

          <div
            className="rounded-3xl p-10 flex justify-center"
            style={{
              background: product.lightColor,
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              className="object-contain"
            />
          </div>

          {/* Content */}

          <div>

            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: product.lightColor,
                color: product.color,
              }}
            >
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-[#161C18] mt-6">
              {product.name}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              {product.description}
            </p>

            {/* Composition */}

            <div className="mt-10 rounded-2xl bg-white border border-gray-200 p-6">

              <h2 className="text-xl font-bold text-[#161C18] mb-4">
                Composition
              </h2>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>

            </div>

            {/* CTA */}

            <div className="mt-10 flex gap-4">

              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-[#161C18] text-white font-semibold hover:bg-[#202822] transition"
              >
                Enquire Now
              </Link>

              <Link
                href="/products"
                className="px-7 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                All Products
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Related Products */}

      {relatedProducts.length > 0 && (

        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-3xl font-bold text-[#161C18]">
              Related Products
            </h2>

            <Link
              href="/products"
              className="flex items-center gap-2 text-[#161C18] hover:text-[#7CC9A0]"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {relatedProducts.map((item) => (

              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group"
              >

                <div className="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition">

                  <div
                    className="p-6 flex justify-center"
                    style={{
                      background: item.lightColor,
                    }}
                  >

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={180}
                      height={180}
                      className="group-hover:scale-110 transition duration-500"
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="font-bold text-[#161C18]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {item.category}
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

      )}

    </main>
  );
}