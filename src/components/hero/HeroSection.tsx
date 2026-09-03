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
    productId: "bokis-signature-keju",
    titleId: ["DIPANGGANG SEGAR,", "SEMPURNA MANISNYA"],
    titleEn: ["FRESHLY MADE,", "PERFECTLY SWEET"],
    subId: "Bolu Chiffon Keju Susu Original Khas Soreang",
    subEn: "Artisanal Cheese Milk Chiffon Cake",
    price: "Rp 45K",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: "slide-2",
    productId: "bokis-double-cheese",
    titleId: ["EKSTRA KEJU,", "LUMER MELELEH"],
    titleEn: ["DOUBLE CHEESE,", "MELTED CRUST"],
    subId: "Double Cheese Chiffon Melt dengan Limpahan Keju Ganda",
    subEn: "Double Cheddar Melt with Oven-Baked Crust",
    price: "Rp 52K",
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: "slide-3",
    productId: "bokis-pandan-keju",
    titleId: ["PANDAN WANGI,", "SUSU MURNI SEGAR"],
    titleEn: ["AROMATIC PANDAN,", "PURE FRESH MILK"],
    subId: "Bolu Susu Pandan Alami Bertabur Keju Gurih",
    subEn: "Natural Pandan Extract Infused with Local Farm Milk",
    price: "Rp 48K",
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: "slide-4",
    productId: "bokis-choco-cheese",
    titleId: ["COKELAT PEKAT,", "TABURAN KEJU RENYAH"],
    titleEn: ["RICH CHOCOLATE,", "GOLDEN CHEDDAR"],
    subId: "Bolu Cokelat Ganache Belgia dengan Keju Panggang",
    subEn: "Belgian Cocoa Chiffon with Crisp Cheddar Topping",
    price: "Rp 50K",
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: "slide-5",
    productId: "bokis-hampers-eksklusif",
    titleId: ["PAKET HANTARAN,", "KOTAK EKSKLUSIF"],
    titleEn: ["SPECIAL GIFT,", "EXCLUSIVE BOX"],
    subId: "Hampers Hantaran Eksklusif Berbalut Pita Satin",
    subEn: "Handcrafted Gift Box with Satin Ribbon & Greeting Card",
    price: "Rp 145K",
    image: "/images/brand/bread-basket-contact.jpg",
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
      className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container Utama Hero Card: Kuning Amber Mustard Persis Gambar 1 */}
      <div className="relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#F7A633] pt-10 sm:pt-14 pb-8 sm:pb-10 px-6 sm:px-12 md:px-16 overflow-hidden shadow-md">
        
        {/* Headline Tengah Berubah Halus Sesuai Slide Aktif */}
        <div className="text-center max-w-4xl mx-auto relative z-10 transition-all duration-300">
          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] uppercase tracking-normal leading-[1.08] text-[#291E16]">
            {titleLines[0]} <br />
            {titleLines[1]}
          </h1>
          <p className="text-xs sm:text-sm font-heading font-bold text-[#291E16]/80 mt-2 uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        {/* Center Visual Area: Bolu Keju dengan Milk Cream Splash & Scalloped Price Badge */}
        <div className="relative z-20 my-3 sm:my-5 flex items-center justify-center">
          <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[540px] lg:h-[540px]">
            
            {/* Foto Produk Aktif */}
            <div className="relative w-full h-full transition-all duration-500 transform hover:scale-[1.02]">
              <Image
                key={current.id}
                src={current.image}
                alt={subtitle}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-contain drop-shadow-2xl rounded-3xl animate-in fade-in zoom-in-95 duration-300"
              />
            </div>

            {/* Scalloped Flower Badge Rp 45K / $10 dengan Pointer Line (Persis Gambar 1) */}
            <div className="absolute top-[28%] -right-2 sm:right-4 md:right-8 z-30 flex items-center group pointer-events-auto">
              
              {/* Garis Penunjuk ke Bolu */}
              <div className="hidden sm:flex items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFFDF7] shadow-xs" />
                <div className="w-10 sm:w-14 h-1.5 bg-[#FFFDF7] shadow-xs -ml-1 rounded-full" />
              </div>

              {/* Scalloped Cloud/Flower Badge Persis Gambar 1 */}
              <div className="relative -ml-2 bg-[#FFFDF7] text-[#291E16] px-5 sm:px-7 py-3 sm:py-4 rounded-[2rem] shadow-xl border border-amber-100 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#786C65] block leading-none">
                    {t.hero.from}
                  </span>
                  <span className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#291E16] leading-none mt-1 inline-block">
                    {current.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Row: Order Button (Kiri), Functional 5 Dots (Tengah), Satisfied Customers (Kanan) Sesuai Gambar 1 & 2 */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          
          {/* Pojok Kiri: Order Now Button */}
          <button
            onClick={handleOrder}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-3.5 pl-5 pr-2 py-2 rounded-2xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <span>{t.hero.orderNow}</span>
            <div className="w-8 h-8 rounded-xl bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>

          {/* Tengah: 5 Slider Pagination Dots Berfungsi Sempurna (Sesuai Gambar 2 dari User) */}
          <div className="flex items-center gap-2.5 bg-black/10 backdrop-blur-xs px-3.5 py-2 rounded-full">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? "w-3.5 h-3.5 bg-[#291E16] scale-110 shadow-xs"
                    : "w-2.5 h-2.5 bg-[#291E16]/40 hover:bg-[#291E16]/70"
                }`}
                aria-label={`Slide ${idx + 1}`}
                title={`Varian ${idx + 1}`}
              />
            ))}
          </div>

          {/* Pojok Kanan: 3 Avatar Pelanggan + 10K+ Satisfied Customers */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                alt="Customer"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Customer"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                alt="Customer"
              />
            </div>

            <div className="text-left">
              <p className="font-heading font-black text-lg text-[#291E16] leading-none">
                {t.hero.satisfiedCount}
              </p>
              <p className="text-[11px] font-semibold text-[#291E16]/80 mt-0.5 leading-none">
                {t.hero.satisfiedLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Statement Bar Formal ala Restoran Profesional */}
      <div className="mt-14 max-w-4xl mx-auto text-center px-4">
        <p className="font-heading font-black text-sm sm:text-lg md:text-xl uppercase tracking-normal text-[#291E16] leading-relaxed">
          {t.hero.brandStatement.pre}{" "}
          <span className="inline-block align-middle mx-1 px-2.5 py-0.5 rounded-lg bg-[#F58A42] text-white text-xs">
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
