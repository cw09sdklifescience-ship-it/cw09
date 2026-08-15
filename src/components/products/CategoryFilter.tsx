"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-5
              py-2.5
              rounded-full
              text-sm
              font-semibold
              transition-all
              duration-300
              border

              ${
                active
                  ? "bg-[#161C18] text-white border-[#161C18] shadow-lg"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#7CC9A0] hover:text-[#161C18] hover:shadow-md"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}