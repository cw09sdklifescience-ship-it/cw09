"use client";

import { useMemo, useState } from "react";

import ProductHero from "@/components/products/ProductHero";
import ProductCategories from "@/components/products/ProductCategories";
import SearchBar from "@/components/products/SearchBar";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";

import { products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryPick = (category: string) => {
    setSelectedCategory(category);
    const el = document.getElementById("product-grid");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(products.map((product) => product.category))),
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <main className="bg-[#F7FBF9] min-h-screen">

      {/* Hero */}
      <ProductHero />

      {/* Categories (replaces the old navbar dropdown) */}
      <ProductCategories onSelect={handleCategoryPick} />

      {/* Search + Filter */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="space-y-8">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

        </div>

      </section>

      {/* Products */}

      <section id="product-grid" className="max-w-7xl mx-auto px-6 pb-20 scroll-mt-28">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-[#161C18]">

            Our Products

          </h2>

          <span className="text-gray-500 font-medium">

            {filteredProducts.length} Products

          </span>

        </div>

        <ProductGrid products={filteredProducts} />

      </section>

    </main>
  );
}