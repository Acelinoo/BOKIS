"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface CreationItem {
  id: number;
  titleId: string;
  titleEn: string;
  image: string;
}

const ALL_CREATIONS: CreationItem[] = [
  {
    id: 1,
    titleId: "Keju Classic Taburan Panggang",
    titleEn: "Keju Classic Toasted Cheddar",
    image: "/images/products/bolu-keju-classic.jpg",
  },
  {
    id: 2,
    titleId: "Keju Double Potongan Dadu & Panggang",
    titleEn: "Keju Double Diced Cheddar & Baked",
    image: "/images/products/bolu-keju-double.jpg",
  },
  {
    id: 3,
    titleId: "Keju Extra Taburan Parut Berlimpah",
    titleEn: "Keju Extra Abundant Shredded Cheese",
    image: "/images/products/bolu-keju-extra.jpg",
  },
  {
    id: 4,
    titleId: "Pandan Classic Daun Suji & Keju",
    titleEn: "Pandan Classic Fragrant Suji & Cheese",
    image: "/images/products/bolu-pandan-classic.jpg",
  },
  {
    id: 5,
    titleId: "Pandan Double Keju Panggang & Dadu",
    titleEn: "Pandan Double Baked Cheese & Cubes",
    image: "/images/products/bolu-pandan-double.jpg",
  },
  {
    id: 6,
    titleId: "Pandan Extra Taburan Parut Berlimpah",
    titleEn: "Pandan Extra Abundant Shredded Cheese",
    image: "/images/products/bolu-pandan-extra.jpg",
  },
  {
    id: 7,
    titleId: "Cokelat Classic Manis & Gurih",
    titleEn: "Chocolate Classic Sweet & Savory",
    image: "/images/products/bolu-cokelat-classic.jpg",
  },
  {
    id: 8,
    titleId: "Red Velvet Classic Keju Panggang",
    titleEn: "Red Velvet Classic Baked Cheese",
    image: "/images/products/bolu-red-velvet-classic.jpg",
  },
  {
    id: 9,
    titleId: "Dessert Cube Matcha Lumer",
    titleEn: "Dessert Cube Matcha Melt",
    image: "/images/products/dessert-cube-matcha.jpg",
  },
  {
    id: 10,
    titleId: "Dessert Cube Strawberry Segar",
    titleEn: "Dessert Cube Fresh Strawberry",
    image: "/images/products/dessert-cube-strawberry.jpg",
  },
];

export default function CreationsGallery() {
  const { language, t } = useLanguage();
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Auto-play slider setiap 4 detik
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // ScrollTrigger Initial Entrance
  useGSAP(
    () => {
      gsap.from(".gallery-card-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 35,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  // Smooth fade-in when activeDot changes
  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".gallery-item");
      gsap.fromTo(
        items,
        { opacity: 0.4, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.45, stagger: 0.06, ease: "power2.out" }
      );
    }
  }, [activeDot]);

  // Dapatkan 4 foto yang tampil berdasarkan slide aktif (0 - 4)
  const visibleCreations = [0, 1, 2, 3].map((offset) => {
    const index = (activeDot + offset) % ALL_CREATIONS.length;
    return ALL_CREATIONS[index];
  });

  return (
    <section
      id="creations"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container Kuning Amber */}
      <div className="gallery-card-container relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#F7A633] pt-10 pb-8 px-6 sm:px-10 md:px-14 shadow-lg overflow-hidden">
        
        {/* Top Header Row */}
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
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {visibleCreations.map((item, idx) => (
            <div
              key={`${item.id}-${activeDot}-${idx}`}
              className="gallery-item relative w-full h-44 sm:h-52 md:h-60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-amber-200/60 bg-white group cursor-pointer"
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

        {/* 5 Pagination Dots */}
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
