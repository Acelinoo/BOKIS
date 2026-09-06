"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface CategoryCardProps {
  keyId: "topPicks" | "boluKiju" | "dessertCube" | "allMenu";
  image: string;
  filterSlug: string;
}

const CATEGORY_LIST: CategoryCardProps[] = [
  {
    keyId: "topPicks",
    image: "/images/products/bolu-keju-double.jpg",
    filterSlug: "top-picks",
  },
  {
    keyId: "boluKiju",
    image: "/images/products/bolu-keju-extra.jpg",
    filterSlug: "bolu-kiju",
  },
  {
    keyId: "dessertCube",
    image: "/images/products/dessert-cube-strawberry.jpg",
    filterSlug: "dessert-cube",
  },
  {
    keyId: "allMenu",
    image: "/images/products/bolu-pandan-double.jpg",
    filterSlug: "all",
  },
];

export default function CategorySection({
  onSelectCategory,
}: {
  onSelectCategory?: (slug: string) => void;
}) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".category-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".category-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 35,
        scale: 0.94,
        stagger: 0.1,
        duration: 0.65,
        ease: "back.out(1.5)",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Title: KATEGORI MENU */}
      <div className="category-title text-center mb-8">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.categories.title}
        </h2>
      </div>

      {/* Grid 4 Kartu Oranye Coral */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
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
              className="category-card group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#F58A42] p-3.5 sm:p-5 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Foto Makanan Mengambang di Atas Kartu */}
              <div className="relative w-full h-28 sm:h-40 my-1 sm:my-2 flex items-center justify-center">
                <div className="relative w-24 h-24 sm:w-36 sm:h-36 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={cat.image}
                    alt={categoryTitle}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Bar Bawah: Title Kiri & Arrow Button Kanan */}
              <div className="pt-2 sm:pt-3 flex items-center justify-between">
                <span className="font-heading font-black text-xs sm:text-sm md:text-base uppercase tracking-wide text-[#291E16] truncate mr-1.5">
                  {categoryTitle}
                </span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#FAF5EB] text-[#291E16] group-hover:bg-[#291E16] group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
