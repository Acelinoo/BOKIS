"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Award, Flame, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cakeContainerRef = useRef<HTMLDivElement>(null);
  const cakeImageRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const pillLeftRef = useRef<HTMLDivElement>(null);
  const pillRightRef = useRef<HTMLDivElement>(null);

  // Ambil data produk Bolu Keju Classic
  const classicProduct = PRODUCTS.find((p) => p.id === "bolu-keju-classic") || PRODUCTS[0];

  const handleOrder = () => {
    addToCart(classicProduct, 1);
  };

  // GSAP Entrance & Floating Animation
  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Initial Entrance
      tl.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 25 },
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
          cakeImageRef.current,
          { opacity: 0, scale: 0.85, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.4)" },
          "-=0.5"
        )
        .fromTo(
          badgeRef.current,
          { scale: 0, rotation: -10, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(1.8)" },
          "-=0.4"
        )
        .fromTo(
          [pillLeftRef.current, pillRightRef.current],
          { opacity: 0, scale: 0.7, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.6)" },
          "-=0.3"
        )
        .fromTo(
          ".hero-action-btn",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        );

      // 2. Continuous Floating Loop Animation pada Kue
      if (cakeImageRef.current) {
        gsap.to(cakeImageRef.current, {
          y: -18,
          rotation: 1.5,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // 3. Dynamic Soft Shadow Scale (sinkron dengan gerak melayang)
      if (shadowRef.current) {
        gsap.to(shadowRef.current, {
          scaleX: 0.82,
          scaleY: 0.75,
          opacity: 0.25,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // 4. Floating Micro-pills (berdenyut pelan dengan fase berbeda)
      if (pillLeftRef.current) {
        gsap.to(pillLeftRef.current, {
          y: -8,
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.4,
        });
      }

      if (pillRightRef.current) {
        gsap.to(pillRightRef.current, {
          y: -10,
          duration: 3.0,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.8,
        });
      }
    },
    { scope: containerRef }
  );

  // 5. Interactive Mouse Parallax (Tilt Effect saat kursor melintasi kartu)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cakeContainerRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cakeContainerRef.current, {
      x: x * 20,
      y: y * 15,
      rotationY: x * 10,
      rotationX: -y * 10,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cakeContainerRef.current) return;
    gsap.to(cakeContainerRef.current, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Container Utama Hero Card: Amber Warm Tone dengan Interactive Parallax */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hero-card-container relative rounded-[2.25rem] sm:rounded-[3rem] bg-gradient-to-b from-[#F9AA33] via-[#F7A633] to-[#F29A26] py-8 sm:py-10 md:py-12 px-5 sm:px-10 md:px-14 overflow-hidden shadow-xl border border-amber-300/30 flex flex-col justify-between"
      >
        {/* Subtle Ambient Background Highlights */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#EA580C]/15 blur-3xl pointer-events-none" />

        {/* 1. Headline Utama Tengah */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#291E16]/10 backdrop-blur-xs text-[#291E16] text-[10px] sm:text-xs font-heading font-black uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-[#291E16]" />
            <span>{language === "id" ? "Signature Bolu Kiju Soreang" : "Signature Cheese Chiffon"}</span>
          </div>

          <h1 className="hero-headline font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-[68px] uppercase tracking-normal leading-[1.05] text-[#291E16]">
            {language === "id" ? (
              <>
                KEJU CLASSIC, <br className="hidden xs:inline" />
                <span className="text-[#291E16]">BUKAN BOLU BIASA</span>
              </>
            ) : (
              <>
                CHEESE CLASSIC, <br className="hidden xs:inline" />
                <span className="text-[#291E16]">AUTHENTIC CHIFFON</span>
              </>
            )}
          </h1>

          <p className="hero-subtitle text-xs sm:text-sm md:text-base font-heading font-bold text-[#291E16]/85 mt-2 sm:mt-3 max-w-2xl mx-auto uppercase tracking-wide leading-relaxed">
            {language === "id"
              ? "Bolu keju super lembut khas Soreang dengan limpahan keju cheddar panggang gurih & sensasi lezat tak tertandingi."
              : "Authentic fluffy chiffon infused with real aged cheese, topped with toasted golden cheddar."}
          </p>
        </div>

        {/* 2. Center Visual Area: Bolu Keju Classic Melayang (Floating Hero Object) */}
        <div className="relative z-20 my-4 sm:my-6 md:my-8 flex items-center justify-center">
          <div
            ref={cakeContainerRef}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] max-h-[44vh] flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            {/* Bayangan Halus di Bawah Kue yang Membesar/Mengecil Dinamis */}
            <div
              ref={shadowRef}
              className="absolute bottom-2 sm:bottom-4 w-44 sm:w-60 md:w-72 h-8 sm:h-12 rounded-[50%] bg-[#291E16]/40 blur-lg pointer-events-none"
            />

            {/* Foto Bolu Keju Classic Splash yang Melayang Bebas */}
            <div
              ref={cakeImageRef}
              className="relative w-full h-full cursor-pointer transform transition-transform duration-300 hover:scale-[1.04]"
              onClick={handleOrder}
              title={language === "id" ? "Klik untuk menambah ke keranjang!" : "Click to add to cart!"}
            >
              <Image
                src="/images/products/hero-keju-classic-splash.png"
                alt="Bolu Keju Classic Bokis Soreang"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* Floating Pill Kiri: Keju Cheddar Asli */}
            <div
              ref={pillLeftRef}
              className="absolute -left-2 sm:-left-6 md:-left-10 top-[35%] z-30 hidden sm:flex items-center gap-2 bg-[#FFFDF7]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-amber-100/80 pointer-events-none"
            >
              <div className="w-6 h-6 rounded-lg bg-[#F58A42]/15 text-[#F58A42] flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-[11px] text-[#291E16] leading-none">
                  {language === "id" ? "Keju Pilihan" : "Real Cheddar"}
                </p>
                <p className="text-[9px] font-heading font-bold text-[#786C65] mt-0.5 leading-none">
                  {language === "id" ? "Taburan Panggang" : "Toasted Topping"}
                </p>
              </div>
            </div>

            {/* Floating Pill Kanan: Fresh Baked Daily */}
            <div
              ref={pillRightRef}
              className="absolute -right-2 sm:-right-6 md:-right-10 bottom-[28%] z-30 hidden sm:flex items-center gap-2 bg-[#FFFDF7]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-amber-100/80 pointer-events-none"
            >
              <div className="w-6 h-6 rounded-lg bg-[#F58A42]/15 text-[#F58A42] flex items-center justify-center">
                <Flame className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-[11px] text-[#291E16] leading-none">
                  {language === "id" ? "Fresh Daily" : "Fresh Daily"}
                </p>
                <p className="text-[9px] font-heading font-bold text-[#786C65] mt-0.5 leading-none">
                  {language === "id" ? "Dapur Soreang" : "Soreang Kitchen"}
                </p>
              </div>
            </div>

            {/* Scalloped Badge Harga Floating dengan Pointer Line */}
            <div
              ref={badgeRef}
              className="absolute top-[12%] -right-1 sm:-right-4 md:right-0 z-30 flex items-center group pointer-events-auto"
            >
              <div className="hidden sm:flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFFDF7] shadow-xs" />
                <div className="w-8 sm:w-10 h-1 bg-[#FFFDF7] shadow-xs -ml-1 rounded-full" />
              </div>

              <div className="relative sm:-ml-2 bg-[#FFFDF7] text-[#291E16] px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl sm:rounded-3xl shadow-xl border border-amber-100 flex flex-col items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                <span className="text-[8px] sm:text-[9px] font-heading font-extrabold uppercase tracking-widest text-[#F58A42] block leading-none">
                  SIGNATURE
                </span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-heading font-black text-base sm:text-xl md:text-2xl text-[#291E16] leading-none whitespace-nowrap">
                    Rp 37.000
                  </span>
                  <span className="font-heading font-bold text-[10px] sm:text-xs text-[#786C65] line-through leading-none">
                    42K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Action Row: Tombol Pesan & Eksplorasi, Rating & Order Stats */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 sm:pt-4 border-t border-[#291E16]/10">
          
          {/* Sisi Kiri: CTA Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <button
              onClick={handleOrder}
              className="hero-action-btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 pl-5 pr-2 py-2 rounded-2xl bg-[#291E16] text-white hover:bg-[#423125] font-heading font-black text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <span>{t.hero.orderNow}</span>
              <div className="w-8 h-8 rounded-xl bg-[#F58A42] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>

            <Link
              href="#katalog"
              className="hero-action-btn inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-2xl bg-[#FFFDF7]/90 hover:bg-white text-[#291E16] font-heading font-extrabold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200 border border-amber-200/60"
            >
              <ShoppingBag className="w-3.5 h-3.5 mr-1.5 text-[#F58A42]" />
              <span>{language === "id" ? "Lihat Menu" : "View Menu"}</span>
            </Link>
          </div>

          {/* Sisi Kanan: Rating Bintang & 5000+ Pesanan Terkirim */}
          <div className="hero-action-btn flex items-center gap-4 sm:gap-6 justify-center">
            {/* Rating Stars */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-xs text-[#291E16] leading-none">
                  5.0 / 5.0
                </p>
                <p className="text-[9px] font-heading font-bold text-[#291E16]/70 mt-0.5 leading-none">
                  {language === "id" ? "410+ Ulasan" : "410+ Reviews"}
                </p>
              </div>
            </div>

            <div className="h-7 w-px bg-[#291E16]/15" />

            {/* Total Pesanan */}
            <div className="text-left">
              <p className="font-heading font-black text-sm sm:text-base text-[#291E16] leading-none">
                {t.hero.satisfiedCount}
              </p>
              <p className="text-[9px] font-heading font-bold uppercase tracking-wider text-[#291E16]/75 mt-0.5 leading-none">
                {t.hero.satisfiedLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
