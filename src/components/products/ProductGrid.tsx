import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <h3 className="text-2xl font-bold text-gray-700">
          No Products Found
        </h3>

        <p className="mt-3 text-gray-500">
          Try another search or category.
        </p>
      </div>
    );
  }

  return (
    <section className="pb-20">

      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}