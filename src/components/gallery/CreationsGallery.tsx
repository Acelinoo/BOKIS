"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CreationItem {
  id: number;
  titleId: string;
  titleEn: string;
  image: string;
}

const ALL_CREATIONS: CreationItem[] = [
  {
    id: 1,
    titleId: "Bokis Original Khas Soreang",
    titleEn: "Authentic Soreang Bokis Original",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: 2,
    titleId: "Bokis Kiju Spesial Potongan Keju",
    titleEn: "Special Cheese Chiffon with Diced Cheddar",
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: 3,
    titleId: "Chiramisu Triple Choco & Crumble",
    titleEn: "Chiramisu Triple Choco with Crumble",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: 4,
    titleId: "Chiramisu Original Coffee Americano",
    titleEn: "Chiramisu Original Coffee Americano",
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: 5,
    titleId: "Kiju Pandan Aroma Alami",
    titleEn: "Natural Pandan Cheese Chiffon",
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: 6,
    titleId: "Bokis Cokelat Spesial",
    titleEn: "Special Chocolate Cheese Chiffon",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: 7,
    titleId: "Chiramisu Strawberry Cheesecake",
    titleEn: "Chiramisu Strawberry Cheesecake",
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: 8,
    titleId: "Bokis Kiju Pisang Lembut",
    titleEn: "Soft Banana Cheese Chiffon",
    image: "/images/products/bolu-keju-original.jpg",
  },
];

export default function CreationsGallery() {
  const { language, t } = useLanguage();
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slider setiap 4 detik
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Dapatkan 4 foto yang tampil berdasarkan slide aktif (0 - 4)
  const visibleCreations = [0, 1, 2, 3].map((offset) => {
    const index = (activeDot + offset) % ALL_CREATIONS.length;
    return ALL_CREATIONS[index];
  });

  return (
    <section
      id="creations"
      className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container Kuning Amber Sesuai Gambar 3 */}
      <div className="relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#F7A633] pt-10 pb-8 px-6 sm:px-10 md:px-14 shadow-lg overflow-hidden">
        
        {/* Top Header Row: Title Kiri & "See More Creations ↗" Kanan Persis Gambar 3 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#291E16]">
            {t.creations.title}
          </h2>

          {/* Button Kanan: See More Creations ↗ */}
          <button
            onClick={() => {
              const target = document.getElementById("katalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white text-xs sm:text-sm font-heading font-black shadow-xs transition-all cursor-pointer group"
          >
            <span>{t.creations.seeMore}</span>
            <div className="w-6 h-6 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* 4 Foto Grid Bergeser Sesuai Slide/Dot Aktif */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {visibleCreations.map((item, idx) => (
            <div
              key={`${item.id}-${activeDot}-${idx}`}
              className="relative w-full h-44 sm:h-52 md:h-60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-amber-200/60 bg-white group cursor-pointer animate-in fade-in zoom-in-95 duration-300"
            >
              <Image
                src={item.image}
                alt={language === "id" ? item.titleId : item.titleEn}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Caption Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white font-heading font-bold text-xs leading-tight">
                  {language === "id" ? item.titleId : item.titleEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 5 Pagination Dots Berfungsi Aktif (Sesuai Gambar 2 & 3) */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === dot
                  ? "w-3.5 h-3.5 bg-[#291E16] scale-110 shadow-xs"
                  : "w-2.5 h-2.5 bg-[#291E16]/30 hover:bg-[#291E16]/70"
              }`}
              aria-label={`Galeri Slide ${dot + 1}`}
              title={`Slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
