"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

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
    productId: "bolu-keju-classic",
    titleId: ["KEJU CLASSIC,", "BUKAN BOLU BIASA"],
    titleEn: ["CHEESE CLASSIC,", "AUTHENTIC FLAVOR"],
    subId: "Bolu Keju Lembut Khas Sabilulungan dengan Taburan Keju Panggang Di Atas",
    subEn: "Soft Authentic Cheese Chiffon with Savory Baked Cheddar Topping",
    price: "Rp 37.000",
    image: "/images/products/bolu-keju-classic.jpg",
  },
  {
    id: "slide-2",
    productId: "bolu-keju-extra",
    titleId: ["KEJU EXTRA,", "TABURAN MELIMPAH"],
    titleEn: ["EXTRA CHEESE,", "ABUNDANT SHREDDED"],
    subId: "Bolu Keju Lembut dengan Taburan Keju Parut Berlimpah Ruah",
    subEn: "Ultra Soft Chiffon Topped with a Generous Mountain of Grated Cheddar",
    price: "Rp 45.000",
    image: "/images/products/bolu-keju-extra.jpg",
  },
  {
    id: "slide-3",
    productId: "bolu-keju-double",
    titleId: ["KEJU DOUBLE,", "POTONGAN DADU"],
    titleEn: ["DOUBLE CHEESE,", "DICED & BAKED"],
    subId: "Taburan Keju Panggang Di Atas Plus Potongan Keju Di Dalam",
    subEn: "Baked Cheese Topping Plus Generous Diced Cheese Inside",
    price: "Rp 49.500",
    image: "/images/products/bolu-keju-double.jpg",
  },
  {
    id: "slide-4",
    productId: "bolu-pandan-double",
    titleId: ["PANDAN DOUBLE,", "AROMA ALAMI"],
    titleEn: ["PANDAN DOUBLE,", "NATURAL AROMA"],
    subId: "Taburan Keju Panggang Di Atas Plus Potongan Keju Di Dalam",
    subEn: "Fragrant Pandan Sponge with Diced Cheese & Baked Cheddar",
    price: "Rp 49.500",
    image: "/images/products/bolu-pandan-double.jpg",
  },
  {
    id: "slide-5",
    productId: "dessert-cube-matcha",
    titleId: ["DESSERT CUBE,", "MATCHA MELT"],
    titleEn: ["DESSERT CUBE,", "MATCHA MELT"],
    subId: "Layer Bolu Lembut, Krim Susu Lumer & Taburan Bubuk Matcha Pilihan",
    subEn: "Soft Sponge Layers with Velvety Cream & Authentic Matcha Powder",
    price: "Rp 29.000",
    image: "/images/products/dessert-cube-matcha.jpg",
  },
];

export default function HeroSection() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cakeImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Auto-play slider setiap 4.5 detik
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // GSAP Animations
  useGSAP(
    () => {
      // 1. Initial Entrance
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-card-container",
        { opacity: 0, scale: 0.96, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          badgeRef.current,
          { scale: 0, rotation: -8, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.65, ease: "back.out(1.8)" },
          "-=0.3"
        )
        .fromTo(
          ".hero-bottom-action",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-brand-statement",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );

      // 2. Continuous Floating Idle Effect on Cake
      if (cakeImageRef.current) {
        gsap.to(cakeImageRef.current, {
          y: -10,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: containerRef }
  );

  // Transisi GSAP Halus Saat Pergantian Slide
  useEffect(() => {
    if (cakeImageRef.current) {
      gsap.fromTo(
        cakeImageRef.current,
        { scale: 0.92, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" }
      );
    }
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { y: 8, opacity: 0.7 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { scale: 0.85 },
        { scale: 1, duration: 0.4, ease: "back.out(2)" }
      );
    }
  }, [activeSlide]);

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
      ref={containerRef}
      className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container Utama Hero Card: Kuning Amber Mustard - Cukup 1 Layar Penuh */}
      <div className="hero-card-container relative rounded-[2rem] sm:rounded-[2.75rem] bg-[#F7A633] py-6 sm:py-8 md:py-10 px-5 sm:px-10 md:px-12 overflow-hidden shadow-md flex flex-col justify-between">
        
        {/* Headline Tengah */}
        <div className="text-center max-w-4xl mx-auto relative z-10 transition-all duration-300">
          <h1
            ref={headlineRef}
            className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal leading-[1.08] text-[#291E16]"
          >
            {titleLines[0]} <br />
            {titleLines[1]}
          </h1>
          <p className="hero-subtitle text-[11px] sm:text-xs md:text-sm font-heading font-bold text-[#291E16]/80 mt-1 sm:mt-1.5 uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        {/* Center Visual Area: Foto Produk dengan Floating Animation & Scalloped Price Badge */}
        <div className="relative z-20 my-2 sm:my-3 md:my-4 flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 max-h-[36vh]">
            
            {/* Foto Produk Aktif dengan Floating Idle Effect */}
            <div
              ref={cakeImageRef}
              className="relative w-full h-full transform hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            >
              <Image
                key={current.id}
                src={current.image}
                alt={subtitle}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>

            {/* Scalloped Badge Harga dengan Pointer Line & GSAP Pop */}
            <div
              ref={badgeRef}
              className="absolute top-[20%] -right-2 sm:-right-4 md:right-0 z-30 flex items-center group pointer-events-auto"
            >
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

        {/* Bottom Action Row: Pesan Sekarang, 5 Slider Dots, & 5000+ Pesanan */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          
          {/* Pojok Kiri: Tombol Pesan Sekarang */}
          <button
            onClick={handleOrder}
            className="hero-bottom-action w-full sm:w-auto inline-flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 rounded-xl bg-[#FFFDF7] text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <span>{t.hero.orderNow}</span>
            <div className="w-7 h-7 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Tengah: 5 Slider Pagination Dots */}
          <div className="hero-bottom-action flex items-center gap-2 bg-black/10 backdrop-blur-xs px-3 py-1.5 rounded-full">
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

          {/* Pojok Kanan: 5000+ Pesanan */}
          <div className="hero-bottom-action flex items-center gap-2">
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

      {/* Brand Statement Bar Formal */}
      <div className="hero-brand-statement mt-3 max-w-4xl mx-auto text-center px-4">
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
