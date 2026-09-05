"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/products";

interface HeroSlide {
  id: string;
  productId: string;
  titleId: [string, string];
  titleEn: [string, string];
  subId: string;
  subEn: string;
  price: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    productId: "bokis-original",
    titleId: ["BOKIS ORIGINAL,", "LEMBUT & GURIH"],
    titleEn: ["BOKIS ORIGINAL,", "SOFT & SAVORY"],
    subId: "Bolu Keju Lembut Khas Soreang, Terasa Nyata Kejunya",
    subEn: "Authentic Soreang Soft Cheese Chiffon Cake",
    price: "Rp 37.000",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: "slide-2",
    productId: "bokis-kiju-spesial",
    titleId: ["BOKIS KIJU SPESIAL,", "POTONGAN KEJU DADU"],
    titleEn: ["SPECIAL CHEESE,", "DICED CHEDDAR"],
    subId: "Bolu Keju Lembut & Gurih dengan Potongan Keju di Dalamnya",
    subEn: "Soft & Savory Cheese Chiffon with Rich Diced Cheese",
    price: "Rp 49.500",
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: "slide-3",
    productId: "chiramisu-triple-choco",
    titleId: ["CHIRAMISU,", "TRIPLE CHOCO"],
    titleEn: ["CHIRAMISU,", "TRIPLE CHOCO"],
    subId: "Bolu Cokelat Disiram Krim Cokelat & Taburan Crumble",
    subEn: "Chocolate Sponge Topped with Rich Cocoa Cream & Crumble",
    price: "Rp 29.000",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: "slide-4",
    productId: "bokis-coklat-spesial",
    titleId: ["BOKIS COKELAT SPESIAL,", "POTONGAN COKELAT"],
    titleEn: ["SPECIAL CHOCO,", "CHOCOLATE CHUNKS"],
    subId: "Bolu Keju Cokelat dengan Potongan Cokelat Kotak di Dalamnya",
    subEn: "Rich Chocolate Cheese Cake with Embedded Cocoa Chunks",
    price: "Rp 49.500",
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: "slide-5",
    productId: "chiramisu-strawberry-cheesecake",
    titleId: ["CHIRAMISU,", "STRAWBERRY CHEESE"],
    titleEn: ["CHIRAMISU,", "STRAWBERRY CHEESE"],
    subId: "Perpaduan Bolu Original Keju & Segarnya Buah Stroberi",
    subEn: "Harmonious Cheese Chiffon with Fresh Strawberry Glaze",
    price: "Rp 29.000",
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
];

export default function HeroSection() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slider setiap 4.5 detik
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = HERO_SLIDES[activeSlide];

  const handleOrder = () => {
    const product = PRODUCTS.find((p) => p.id === current.productId);
    if (product) {
      addToCart(product, 1);
    }
  };

  const titleLines = language === "id" ? current.titleId : current.titleEn;
  const subtitle = language === "id" ? current.subId : current.subEn;

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container Utama Hero Card: Kuning Amber Mustard - Cukup 1 Layar Penuh */}
      <div className="relative rounded-[2rem] sm:rounded-[2.75rem] bg-[#F7A633] py-6 sm:py-8 md:py-10 px-5 sm:px-10 md:px-12 overflow-hidden shadow-md flex flex-col justify-between">
        
        {/* Headline Tengah */}
        <div className="text-center max-w-4xl mx-auto relative z-10 transition-all duration-300">
          <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal leading-[1.08] text-[#291E16]">
            {titleLines[0]} <br />
            {titleLines[1]}
          </h1>
          <p className="text-[11px] sm:text-xs md:text-sm font-heading font-bold text-[#291E16]/80 mt-1 sm:mt-1.5 uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        {/* Center Visual Area: Foto Produk dengan Scalloped Price Badge */}
        <div className="relative z-20 my-2 sm:my-3 md:my-4 flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 max-h-[36vh]">
            {/* Foto Produk Aktif */}
            <div className="relative w-full h-full transition-all duration-500 transform hover:scale-[1.02]">
              <Image
                key={current.id}
                src={current.image}
                alt={subtitle}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain drop-shadow-2xl rounded-3xl animate-in fade-in zoom-in-95 duration-300"
              />
            </div>

            {/* Scalloped Badge Harga dengan Pointer Line */}
            <div className="absolute top-[20%] -right-2 sm:-right-4 md:right-0 z-30 flex items-center group pointer-events-auto">
              <div className="hidden sm:flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFFDF7] shadow-xs" />
                <div className="w-8 sm:w-10 h-1 bg-[#FFFDF7] shadow-xs -ml-1 rounded-full" />
              </div>

              <div className="relative sm:-ml-2 bg-[#FFFDF7] text-[#291E16] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-amber-100 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <span className="text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-wider text-[#786C65] block leading-none">
                    {t.hero.from}
                  </span>
                  <span className="font-heading font-black text-sm sm:text-lg md:text-xl text-[#291E16] leading-none mt-0.5 inline-block whitespace-nowrap">
                    {current.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Row: Pesan Sekarang, 5 Slider Dots, & 5000+ Pesanan (Gambar1 dihapus) */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          
          {/* Pojok Kiri: Tombol Pesan Sekarang */}
          <button
            onClick={handleOrder}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 rounded-xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <span>{t.hero.orderNow}</span>
            <div className="w-7 h-7 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Tengah: 5 Slider Pagination Dots */}
          <div className="flex items-center gap-2 bg-black/10 backdrop-blur-xs px-3 py-1.5 rounded-full">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? "w-3 h-3 bg-[#291E16] scale-110 shadow-xs"
                    : "w-2 h-2 bg-[#291E16]/40 hover:bg-[#291E16]/70"
                }`}
                aria-label={`Slide ${idx + 1}`}
                title={`Varian ${idx + 1}`}
              />
            ))}
          </div>

          {/* Pojok Kanan: 5000+ Pesanan (Gambar 1 avatar sudah dihapus) */}
          <div className="flex items-center gap-2">
            <div className="text-center sm:text-right">
              <p className="font-heading font-black text-xl sm:text-2xl text-[#291E16] leading-none tracking-tight">
                {t.hero.satisfiedCount}
              </p>
              <p className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#291E16]/80 mt-0.5 leading-none">
                {t.hero.satisfiedLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Statement Bar Formal ala Restoran Profesional (Kompak, Cukup 1 Layar) */}
      <div className="mt-3 max-w-4xl mx-auto text-center px-4">
        <p className="font-heading font-bold text-[11px] sm:text-xs md:text-[13px] uppercase tracking-normal text-[#291E16] leading-relaxed">
          {t.hero.brandStatement.pre}{" "}
          <span className="inline-block align-middle mx-1 px-2 py-0.5 rounded-md bg-[#F58A42] text-white text-[10px]">
            🧀 {t.hero.brandStatement.tag}
          </span>
          {t.hero.brandStatement.mid}{" "}
          <span className="text-[#786C65]">
            {t.hero.brandStatement.body}
          </span>
        </p>
      </div>
    </section>
  );
}
