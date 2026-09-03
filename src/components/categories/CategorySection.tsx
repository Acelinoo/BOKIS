"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryCardProps {
  keyId: "cakes" | "sweets" | "cookies" | "chocolates";
  image: string;
  filterSlug: string;
}

const CATEGORY_LIST: CategoryCardProps[] = [
  {
    keyId: "cakes",
    image: "/images/products/bolu-keju-original.jpg",
    filterSlug: "signature",
  },
  {
    keyId: "sweets",
    image: "/images/products/bolu-keju-turnaround.jpg",
    filterSlug: "double-cheese",
  },
  {
    keyId: "cookies",
    image: "/images/hero/bolu-hero-splash.jpg",
    filterSlug: "pandan-cokelat",
  },
  {
    keyId: "chocolates",
    image: "/images/products/bolu-keju-original.jpg",
    filterSlug: "hampers",
  },
];

export default function CategorySection({
  onSelectCategory,
}: {
  onSelectCategory?: (slug: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title: OUR CATEGORIES / KATEGORI MENU (Chunky Typography Persis Gambar 1) */}
      <div className="text-center mb-10">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.categories.title}
        </h2>
      </div>

      {/* Grid 4 Kartu Oranye Coral Persis Gambar 1 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {CATEGORY_LIST.map((cat, idx) => {
          const categoryTitle = t.categories[cat.keyId];

          return (
            <div
              key={idx}
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(cat.filterSlug);
                }
                const target = document.getElementById("katalog");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#F58A42] p-4 sm:p-5 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Foto Makanan Mengambang di Atas Kartu */}
              <div className="relative w-full h-32 sm:h-40 my-2 flex items-center justify-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={cat.image}
                    alt={categoryTitle}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Bar Bawah: Title Kiri & Arrow Button Kanan Persis Gambar 1 */}
              <div className="pt-3 flex items-center justify-between">
                <span className="font-heading font-black text-xs sm:text-sm md:text-base uppercase tracking-wide text-[#291E16] truncate mr-2">
                  {categoryTitle}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FAF5EB] text-[#291E16] group-hover:bg-[#291E16] group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
