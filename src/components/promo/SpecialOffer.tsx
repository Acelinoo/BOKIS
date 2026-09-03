"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function SpecialOffer() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  const handleClaim = (name: string, price: number) => {
    addToCart(
      {
        id: `promo-${name.toLowerCase().replace(/\s+/g, "-")}`,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        category: "Special Promo",
        categorySlug: "promo",
        price,
        rating: 4.9,
        reviewCount: 350,
        description: `Special Offer: ${name} dengan diskon 25%.`,
        ingredients: ["Bahan Premium", "Freshly Baked"],
        imageUrl: "/images/hero/bolu-hero-splash.jpg",
      },
      1
    );
  };

  return (
    <section id="promo" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container Kuning Amber Besar Persis Gambar 2 */}
      <div className="relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#F7A633] pt-12 pb-10 px-6 sm:px-12 md:px-16 shadow-lg overflow-hidden">
        
        {/* Title: SPECIAL OFFER / PENAWARAN SPESIAL (Chunky Typography Persis Gambar 2) */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
            {t.specialOffer.title}
          </h2>
        </div>

        {/* 2 Split Promo Cards Sesuai Gambar 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          
          {/* Card 1: CLASSIC GLAZED DONUT */}
          <div className="relative rounded-3xl bg-[#FFFDF7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-amber-100 group">
            <div className="flex-1 space-y-2 text-left">
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-[#291E16]">
                {language === "id" ? "DONAT GULA KLASIK" : "CLASSIC GLAZED DONUT"}
              </h3>

              <div className="flex items-center gap-1 text-xs font-bold text-[#F58A42]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.9/5</span>
              </div>

              <p className="text-xs text-[#786C65] leading-relaxed font-medium pt-1">
                {language === "id"
                  ? "Donat kentang tradisional bertekstur lembut dan empuk, berbalut gula salju manis yang seimbang di setiap gigitan."
                  : "Soft, fluffy, and freshly baked, our Classic Glazed Donut is coated with a smooth sweet glaze for the perfect balance of sweetness in every bite."}
              </p>

              <div className="pt-2">
                <button
                  onClick={() =>
                    handleClaim(
                      language === "id" ? "Donat Gula Klasik" : "Classic Glazed Donut",
                      35000
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-[#F58A42] hover:bg-[#291E16] text-white font-heading font-bold text-xs transition-colors cursor-pointer"
                >
                  {t.specialOffer.claim} 25%
                </button>
              </div>
            </div>

            {/* Foto Kanan dengan Badge 25% OFF Melayang */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 shrink-0 flex items-center justify-center">
              <div className="absolute top-0 right-0 z-20 bg-[#F58A42] text-white font-heading font-black text-[11px] w-12 h-12 rounded-full flex flex-col items-center justify-center shadow-md border-2 border-dashed border-white">
                <span className="leading-none">25%</span>
                <span className="text-[8px] leading-none">{t.specialOffer.off}</span>
              </div>

              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/products/bolu-keju-turnaround.jpg"
                  alt="Classic Glazed Donut"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2: STRAWBERRY CREAM PASTRY */}
          <div className="relative rounded-3xl bg-[#FFFDF7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-amber-100 group">
            <div className="flex-1 space-y-2 text-left">
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-[#291E16]">
                {language === "id" ? "PASTRY KRIM STROBERI" : "STRAWBERRY CREAM PASTRY"}
              </h3>

              <div className="flex items-center gap-1 text-xs font-bold text-[#F58A42]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.9/5</span>
              </div>

              <p className="text-xs text-[#786C65] leading-relaxed font-medium pt-1">
                {language === "id"
                  ? "Lapisan spons lembut berpadu krim susu segar dan selai stroberi alami, ditaburi keju panggang renyah."
                  : "Light layers of soft sponge cake filled with fresh cream and sweet strawberry flavor, finished with a delicate topping for a perfectly refreshing treat."}
              </p>

              <div className="pt-2">
                <button
                  onClick={() =>
                    handleClaim(
                      language === "id" ? "Pastry Krim Stroberi" : "Strawberry Cream Pastry",
                      45000
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-[#F58A42] hover:bg-[#291E16] text-white font-heading font-bold text-xs transition-colors cursor-pointer"
                >
                  {t.specialOffer.claim} 25%
                </button>
              </div>
            </div>

            {/* Foto Kanan dengan Badge 25% OFF Melayang */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 shrink-0 flex items-center justify-center">
              <div className="absolute top-0 right-0 z-20 bg-[#F58A42] text-white font-heading font-black text-[11px] w-12 h-12 rounded-full flex flex-col items-center justify-center shadow-md border-2 border-dashed border-white">
                <span className="leading-none">25%</span>
                <span className="text-[8px] leading-none">{t.specialOffer.off}</span>
              </div>

              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/products/bolu-keju-original.jpg"
                  alt="Strawberry Cream Pastry"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Explore More ↗ Button Persis Gambar 2 */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              const target = document.getElementById("katalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-md transition-all group cursor-pointer"
          >
            <span>{t.specialOffer.exploreMore}</span>
            <div className="w-6 h-6 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
