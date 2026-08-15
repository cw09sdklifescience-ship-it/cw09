import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Top Accent */}
        <div
          className="h-1 w-full"
          style={{ background: product.color }}
        />

        {/* Image */}
        <div
          className="relative flex items-center justify-center h-72 p-8 transition-all duration-500"
          style={{ background: product.lightColor }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={260}
            height={260}
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#161C18]/80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

            <div className="text-center">

              <div className="w-14 h-14 rounded-full bg-[#7CC9A0] flex items-center justify-center mx-auto mb-4">

                <ArrowUpRight className="w-6 h-6 text-[#161C18]" />

              </div>

              <p className="text-white font-semibold tracking-wider uppercase text-sm">
                Open Product
              </p>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              background: product.lightColor,
              color: product.color,
            }}
          >
            {product.category}
          </span>

          <h3 className="text-xl font-bold text-[#161C18] line-clamp-2">
            {product.name}
          </h3>

          <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <span
              className="font-semibold transition-all duration-300 group-hover:translate-x-1"
              style={{ color: product.color }}
            >
              View Details →
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}