"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function SpecialOffer() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".promo-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".promo-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 35,
        scale: 0.94,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.4)",
      });

      // Pulse badge
      gsap.to(".discount-badge", {
        scale: 1.08,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  const handleClaim = (
    id: string,
    name: string,
    promoPrice: number,
    imageUrl: string,
    desc: string
  ) => {
    addToCart(
      {
        id,
        slug: id,
        name,
        category: "Penawaran Spesial",
        categorySlug: "promo",
        price: promoPrice,
        rating: 5.0,
        reviewCount: 350,
        description: desc,
        ingredients: ["Bahan Premium Pilihan", "Dipanggang Segar"],
        imageUrl,
      },
      1
    );
  };

  return (
    <section
      id="promo"
      ref={sectionRef}
      className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Container Kuning Amber Besar */}
      <div className="relative rounded-[2rem] sm:rounded-[3rem] bg-[#F7A633] pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-10 md:px-14 shadow-lg overflow-hidden">
        
        {/* Title: PENAWARAN SPESIAL */}
        <div className="promo-title text-center mb-8 sm:mb-10">
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#291E16]">
            {t.specialOffer.title}
          </h2>
        </div>

        {/* 2 Promo Cards: 2 CARD DI MODE MOBILE (grid-cols-2) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 relative z-10">
          
          {/* Card 1: PANDAN DOUBLE */}
          <div className="promo-card relative rounded-2xl sm:rounded-3xl bg-[#FFFDF7] p-3 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm border border-amber-100 group hover:shadow-md transition-shadow">
            <div className="space-y-1.5 sm:space-y-2 text-left">
              <h3 className="font-heading font-black text-xs sm:text-xl md:text-2xl uppercase tracking-tight text-[#291E16] line-clamp-1 sm:line-clamp-none">
                {language === "id" ? "PANDAN DOUBLE" : "PANDAN DOUBLE CHEESE"}
              </h3>

              <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#F58A42]">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                <span>5.0</span>
                <span className="text-gray-400 font-normal hidden sm:inline">(Top Pick)</span>
              </div>

              <p className="text-[10px] sm:text-xs text-[#786C65] leading-relaxed font-medium pt-0.5 line-clamp-2 sm:line-clamp-3">
                {language === "id"
                  ? "Bolu pandan harum alami dengan taburan keju panggang di atas serta potongan dadu keju melimpah di dalam."
                  : "Fragrant pandan chiffon with baked cheese topping and rich diced cheese baked inside."}
              </p>
            </div>

            {/* Foto dengan Badge 25% OFF Melayang */}
            <div className="relative w-full h-24 sm:h-36 md:h-44 my-2 sm:my-3 shrink-0 flex items-center justify-center">
              <div className="discount-badge absolute top-0 right-0 z-20 bg-[#F58A42] text-white font-heading font-black text-[9px] sm:text-[11px] w-9 h-9 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center shadow-md border border-dashed border-white">
                <span className="leading-none">25%</span>
                <span className="text-[7px] sm:text-[8px] leading-none">{t.specialOffer.off}</span>
              </div>

              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/products/bolu-pandan-double.jpg"
                  alt="Pandan Double"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Tombol Klaim */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={() =>
                  handleClaim(
                    "promo-bolu-pandan-double",
                    "Pandan Double (Promo 25%)",
                    37125,
                    "/images/products/bolu-pandan-double.jpg",
                    "Penawaran Spesial: Pandan Double diskon 25%."
                  )
                }
                className="w-full sm:w-auto px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#F58A42] hover:bg-[#291E16] text-white font-heading font-bold text-[10px] sm:text-xs transition-colors cursor-pointer text-center"
              >
                {t.specialOffer.claim} 25%
              </button>
            </div>
          </div>

          {/* Card 2: DESSERT CUBE STRAWBERRY */}
          <div className="promo-card relative rounded-2xl sm:rounded-3xl bg-[#FFFDF7] p-3 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm border border-amber-100 group hover:shadow-md transition-shadow">
            <div className="space-y-1.5 sm:space-y-2 text-left">
              <h3 className="font-heading font-black text-xs sm:text-xl md:text-2xl uppercase tracking-tight text-[#291E16] line-clamp-1 sm:line-clamp-none">
                {language === "id" ? "DESSERT CUBE STRAWBERRY" : "DESSERT CUBE STRAWBERRY"}
              </h3>

              <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#F58A42]">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                <span>5.0</span>
                <span className="text-gray-400 font-normal hidden sm:inline">(Best Seller)</span>
              </div>

              <p className="text-[10px] sm:text-xs text-[#786C65] leading-relaxed font-medium pt-0.5 line-clamp-2 sm:line-clamp-3">
                {language === "id"
                  ? "Layer bolu lembut, lumuran krim keju manis gurih, dan limpahan selai buah stroberi segar pilihan."
                  : "Soft sponge cake layers, savory sweet cream cheese, and luscious fresh strawberry glaze."}
              </p>
            </div>

            {/* Foto dengan Badge 25% OFF Melayang */}
            <div className="relative w-full h-24 sm:h-36 md:h-44 my-2 sm:my-3 shrink-0 flex items-center justify-center">
              <div className="discount-badge absolute top-0 right-0 z-20 bg-[#F58A42] text-white font-heading font-black text-[9px] sm:text-[11px] w-9 h-9 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center shadow-md border border-dashed border-white">
                <span className="leading-none">25%</span>
                <span className="text-[7px] sm:text-[8px] leading-none">{t.specialOffer.off}</span>
              </div>

              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/products/dessert-cube-strawberry.jpg"
                  alt="Dessert Cube Strawberry"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Tombol Klaim */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={() =>
                  handleClaim(
                    "promo-dessert-cube-strawberry",
                    "Dessert Cube Strawberry (Promo 25%)",
                    21750,
                    "/images/products/dessert-cube-strawberry.jpg",
                    "Penawaran Spesial: Dessert Cube Strawberry diskon 25%."
                  )
                }
                className="w-full sm:w-auto px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#F58A42] hover:bg-[#291E16] text-white font-heading font-bold text-[10px] sm:text-xs transition-colors cursor-pointer text-center"
              >
                {t.specialOffer.claim} 25%
              </button>
            </div>
          </div>
        </div>

        {/* Explore More ↗ Button */}
        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={() => {
              const target = document.getElementById("katalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-md transition-all group cursor-pointer"
          >
            <span>{t.specialOffer.exploreMore}</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
