"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface CreationItem {
  id: number;
  titleId: string;
  titleEn: string;
  image: string;
}

// 12 Kreasi Spesial Bokis dengan gambar otentik 100% unik tanpa duplikasi
const ALL_CREATIONS: CreationItem[] = [
  {
    id: 1,
    titleId: "Keju Classic Taburan Panggang",
    titleEn: "Classic Cheese Toasted Cheddar",
    image: "/images/products/bolu-keju-classic.jpg",
  },
  {
    id: 2,
    titleId: "Keju Extra Parut Menggunung",
    titleEn: "Extra Cheese Shredded Mountain",
    image: "/images/products/bolu-keju-extra.jpg",
  },
  {
    id: 3,
    titleId: "Keju Original Chiffon Lembut",
    titleEn: "Original Soft Cheese Chiffon",
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: 4,
    titleId: "Pandan Classic Daun Suji",
    titleEn: "Fragrant Pandan & Fresh Suji",
    image: "/images/products/bolu-pandan-classic.jpg",
  },
  {
    id: 5,
    titleId: "Cokelat Classic Chocochips",
    titleEn: "Classic Chocolate & Chocochips",
    image: "/images/products/bolu-cokelat-classic.jpg",
  },
  {
    id: 6,
    titleId: "Red Velvet Velvet Cream Cheese",
    titleEn: "Red Velvet Velvety Cream Cheese",
    image: "/images/products/bolu-red-velvet-classic.jpg",
  },
  {
    id: 7,
    titleId: "Dessert Cube Matcha Lumer",
    titleEn: "Dessert Cube Melting Matcha",
    image: "/images/products/dessert-cube-matcha.jpg",
  },
  {
    id: 8,
    titleId: "Dessert Cube Strawberry Segar",
    titleEn: "Dessert Cube Fresh Strawberry",
    image: "/images/products/dessert-cube-strawberry.jpg",
  },
  {
    id: 9,
    titleId: "Boba Cheese Brulee Signature",
    titleEn: "Signature Boba Cheese Brulee",
    image: "/images/products/minuman-boba-cheese-brulee.jpg",
  },
  {
    id: 10,
    titleId: "Matcha Float Ice Cream",
    titleEn: "Matcha Float Creamy Scoop",
    image: "/images/products/minuman-matcha-float.jpg",
  },
  {
    id: 11,
    titleId: "Saika Breeze Citrus Segar",
    titleEn: "Saika Breeze Fresh Citrus",
    image: "/images/products/minuman-saika-breeze.jpg",
  },
  {
    id: 12,
    titleId: "Es Kopi Aren Gula Kawung",
    titleEn: "Palm Sugar Iced Coffee",
    image: "/images/products/minuman-es-kopi-aren.jpg",
  },
];

export default function CreationsGallery() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Dapatkan lebar pergeseran kartu (lebar kartu + gap)
  const getCardStep = () => {
    if (!sliderRef.current) return 300;
    const firstChild = sliderRef.current.firstElementChild as HTMLElement | null;
    if (!firstChild) return 300;
    return firstChild.offsetWidth + 16;
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const step = getCardStep();
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 12) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const step = getCardStep();
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft <= 12) {
      container.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const goToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const step = getCardStep();
    container.scrollTo({ left: index * step, behavior: "smooth" });
  };

  // Sinkronkan indeks aktif saat pengguna menggeser kartu secara manual
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const step = getCardStep();
    if (step <= 0) return;
    const idx = Math.round(container.scrollLeft / step);
    setActiveIndex(Math.min(idx, ALL_CREATIONS.length - 1));
  };

  // Gesture sentuh di layar ponsel (mobile touch swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Auto-play bergeser otomatis setiap 3.5 detik (pause saat kursor di atas slider)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // ScrollTrigger Initial Entrance dengan GSAP
  useGSAP(
    () => {
      gsap.from(".gallery-card-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 35,
        duration: 0.75,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="creations"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container Kuning Amber */}
      <div className="gallery-card-container relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#F7A633] pt-8 sm:pt-10 pb-8 px-5 sm:px-10 md:px-14 shadow-lg overflow-hidden">
        
        {/* Top Header Row: Judul, Panah Navigasi Slider, dan Tombol Lihat Menu */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#291E16]">
            {t.creations.title}
          </h2>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Tombol Panah Slider Geser (Kiri & Kanan) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFFDF7] hover:bg-[#291E16] text-[#291E16] hover:text-white flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer"
                aria-label="Kreasi Sebelumnya"
                title="Geser ke Kiri"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFFDF7] hover:bg-[#291E16] text-[#291E16] hover:text-white flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer"
                aria-label="Kreasi Berikutnya"
                title="Geser ke Kanan"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Button Kanan: See More Creations ↗ */}
            <button
              onClick={() => {
                const target = document.getElementById("katalog");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 pl-3.5 sm:pl-4 pr-1.5 py-1.5 rounded-xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white text-xs sm:text-sm font-heading font-black shadow-xs transition-all cursor-pointer group"
            >
              <span>{t.creations.seeMore}</span>
              <div className="w-6 h-6 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Carousel Track: Bisa di-swipe di mobile & digeser dengan tombol panah */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {ALL_CREATIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const target = document.getElementById("katalog");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="gallery-item relative w-[76%] sm:w-[46%] md:w-[31%] lg:w-[calc(25%-15px)] h-52 sm:h-60 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-amber-200/60 bg-white shrink-0 snap-start group cursor-pointer hover:shadow-lg transition-all duration-300"
              title={language === "id" ? item.titleId : item.titleEn}
            >
              <Image
                src={item.image}
                alt={language === "id" ? item.titleId : item.titleEn}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 76vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Caption Overlay on Hover & Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-3.5 sm:p-4">
                <span className="text-white font-heading font-black text-xs sm:text-sm leading-snug drop-shadow-xs">
                  {language === "id" ? item.titleId : item.titleEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pagination Dots (6 Indikator Langkah) */}
        <div className="flex items-center justify-center gap-2 mt-7">
          {[0, 1, 2, 3, 4, 5].map((dot) => {
            const isActive = Math.min(Math.floor(activeIndex / 2), 5) === dot;
            return (
              <button
                key={dot}
                onClick={() => goToIndex(dot * 2)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-7 h-2.5 bg-[#291E16] shadow-xs"
                    : "w-2.5 h-2.5 bg-[#291E16]/30 hover:bg-[#291E16]/70"
                }`}
                aria-label={`Slide Galeri ${dot + 1}`}
                title={`Lompat ke Slide ${dot + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
