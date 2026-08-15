"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">

      <Search
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-gray-400
          w-5
          h-5
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search medicines..."
        className="
          w-full
          rounded-full
          border
          border-gray-200
          bg-white
          py-4
          pl-14
          pr-14
          text-gray-700
          shadow-sm
          outline-none
          transition-all
          duration-300
          focus:border-[#161C18]
          focus:ring-4
          focus:ring-[#7CC9A0]/20
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            hover:bg-gray-100
            transition
          "
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}
    </div>
  );
}