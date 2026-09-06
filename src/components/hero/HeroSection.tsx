"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShoppingBag, ArrowLeft, ArrowRight, Sparkles, Heart, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const { addToCart, setIsOpen } = useCart();
  const { language } = useLanguage();

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mainCakeRef = useRef<HTMLDivElement>(null);
  const secondaryCakeRef = useRef<HTMLDivElement>(null);
  const tertiaryCakeRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, scale: 0.96, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power3.out" }
      )
        .fromTo(
          ".hero-anim-left",
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.65, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          mainCakeRef.current,
          { opacity: 0, scale: 0.85, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.5"
        )
        .fromTo(
          [secondaryCakeRef.current, tertiaryCakeRef.current],
          { opacity: 0, scale: 0.7, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "back.out(1.3)" },
          "-=0.6"
        );

      // 2. Floating Motion pada Kue Utama (Bolu Keju Classic Ultra HD)
      if (mainCakeRef.current) {
        gsap.to(mainCakeRef.current, {
          y: -14,
          duration: 3.0,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // 3. Floating Motion pada Kue Pendukung Kanan
      if (secondaryCakeRef.current) {
        gsap.to(secondaryCakeRef.current, {
          y: -10,
          duration: 3.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.3,
        });
      }

      if (tertiaryCakeRef.current) {
        gsap.to(tertiaryCakeRef.current, {
          y: -8,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.6,
        });
      }

      // 4. Floating Berry
      gsap.to(".floating-strawberry", {
        y: -6,
        rotation: 6,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="pt-6 sm:pt-10 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full select-none"
    >
      {/* CARD UTAMA (Persis seperti Gambar Referensi Cream Ice Cream) */}
      <div
        ref={cardRef}
        className="relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#E64415] overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between min-h-[560px] sm:min-h-[640px] md:min-h-[680px]"
      >
        {/* --- 1. TOP BAR NAVBAR DI DALAM CARD --- */}
        <div className="relative z-30 pt-6 sm:pt-8 px-6 sm:px-10 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Kiri: Bokis dengan ikon manis */}
          <Link href="/" className="flex items-center gap-1.5 text-white font-heading font-black text-2xl sm:text-[28px] tracking-tight group">
            <span>Bokis</span>
            <span className="text-amber-200 text-xs mt-1">🧀</span>
          </Link>

          {/* Floating White Capsule Pill Menu Tengah (Persis Referensi) */}
          <nav className="hidden md:flex items-center gap-6 bg-white px-7 py-2.5 rounded-full shadow-md text-xs font-heading font-black text-[#291E16]">
            <Link href="#katalog" className="text-[#E64415] hover:opacity-80 transition-opacity">
              {language === "id" ? "Varian" : "Flavors"}
            </Link>
            <Link href="#why-us" className="text-[#594B42] hover:text-[#E64415] transition-colors">
              {language === "id" ? "Tentang" : "About"}
            </Link>
            <Link href="#katalog" className="text-[#594B42] hover:text-[#E64415] transition-colors">
              {language === "id" ? "Minuman" : "Beverages"}
            </Link>
            <Link href="#kontak" className="text-[#594B42] hover:text-[#E64415] transition-colors">
              {language === "id" ? "Kontak" : "Contact"}
            </Link>
          </nav>

          {/* Icon Kanan: Telepon / Kontak & Keranjang Belanja */}
          <div className="flex items-center gap-3 text-white">
            <Link
              href="#kontak"
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
              aria-label="Kontak"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-white relative cursor-pointer"
              aria-label="Keranjang"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* 3 Floating Thin Badges di Kanan Atas (Persis Gambar Referensi) */}
        <div className="hidden lg:flex items-center gap-2.5 absolute top-20 right-12 z-20 pointer-events-none">
          <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white/80">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white/80">
            <Heart className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white/80">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* --- 2. MAIN BODY AREA: TEKS KIRI & PRODUK SHOWCASE KANAN --- */}
        <div className="relative z-20 px-6 sm:px-10 md:px-12 pt-6 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center flex-1">
          
          {/* Sisi Kiri: Headline & CTA Button (Span 5) */}
          <div className="lg:col-span-5 text-left space-y-3 sm:space-y-5 pb-8 sm:pb-16 z-20">
            <h1 className="hero-anim-left font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.98] text-white tracking-tight drop-shadow-xs">
              Delicious <br />
              <span className="text-white">Cheese Chiffon</span>
            </h1>

            <p className="hero-anim-left text-xs sm:text-sm md:text-[15px] font-heading font-medium text-white/95 max-w-sm leading-relaxed tracking-wide">
              {language === "id"
                ? "Bolu keju lembut khas Soreang dengan cita rasa keju cheddar otentik panggang berlimpah."
                : "Amazing cheese chiffon made with the finest Soreang ingredients."}
            </p>

            <div className="hero-anim-left pt-2">
              <button
                onClick={handleOrder}
                className="inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer border border-white/40"
              >
                {language === "id" ? "Pesan Sekarang" : "Order Now"}
              </button>
            </div>
          </div>

          {/* Sisi Kanan: 3 Objek Produk Bertingkat (Span 7) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] md:min-h-[440px] z-20">
            
            {/* 1. PRODUK UTAMA (Tengah, Paling Besar, Menembus Garis Ombak) - Bolu Keju Classic Ultra HD */}
            <div
              ref={mainCakeRef}
              onClick={handleOrder}
              className="relative z-30 w-64 h-64 sm:w-84 sm:h-84 md:w-96 md:h-96 lg:w-[410px] lg:h-[410px] cursor-pointer hover:scale-[1.03] transition-transform duration-300"
              title={language === "id" ? "Bolu Keju Classic Ultra HD" : "Cheese Chiffon Classic Ultra HD"}
            >
              <Image
                src="/images/products/hero-bolu-keju-hd-clean.png"
                alt="Bolu Keju Classic Ultra HD Bokis Soreang"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* 2. PRODUK KEDUA (Kanan Tengah, Sedang) - Bolu Keju Double / Panggang Emas (Persis Cup Kuning) */}
            <div
              ref={secondaryCakeRef}
              className="absolute right-3 sm:right-6 md:right-8 top-[14%] z-20 hidden sm:block pointer-events-none"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 drop-shadow-xl">
                <Image
                  src="/images/products/bolu-keju-double.jpg"
                  alt="Bolu Keju Double"
                  fill
                  sizes="220px"
                  className="object-contain rounded-full border-4 border-white/25"
                />
              </div>
            </div>

            {/* 3. PRODUK KETIGA (Kanan Jauh, Kecil) - Dessert Cube Matcha (Persis Cup Hijau) */}
            <div
              ref={tertiaryCakeRef}
              className="absolute right-0 top-[38%] z-10 hidden md:block pointer-events-none"
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 drop-shadow-lg opacity-90">
                <Image
                  src="/images/products/dessert-cube-matcha.jpg"
                  alt="Dessert Cube Matcha"
                  fill
                  sizes="130px"
                  className="object-contain rounded-2xl border-2 border-white/30"
                />
              </div>
            </div>

            {/* Strawberry Kecil Mengambang di dekat Kue Utama (Persis Gambar Referensi) */}
            <div className="floating-strawberry absolute left-[12%] sm:left-[18%] bottom-[15%] z-40 hidden xs:block">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md">
                <Image
                  src="/images/products/dessert-cube-strawberry.jpg"
                  alt="Strawberry"
                  fill
                  sizes="40px"
                  className="object-cover rounded-full border-2 border-white shadow-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. PEMBATAS GELOMBANG LENGKUNG ORGANIK & FOOTER KREM DI DALAM CARD --- */}
        <div className="relative z-10 w-full mt-auto">
          
          {/* Lengkungan Ombak SVG Krem (Persis Garis Gelombang Gambar Referensi) */}
          <div className="w-full overflow-hidden leading-none -mb-1">
            <svg
              className="w-full h-16 sm:h-24 md:h-28 block"
              viewBox="0 0 1200 180"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,110 C 260,60 420,160 680,140 C 940,120 1060,50 1200,95 L 1200,180 L 0,180 Z"
                fill="#FFFDF7"
              />
            </svg>
          </div>

          {/* Area Krem di Bawah Gelombang (Persis Gambar Referensi) */}
          <div className="bg-[#FFFDF7] px-6 sm:px-10 md:px-12 pb-6 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Kiri: Avatar & Text Social Proof */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F58A42]/20 border border-[#F58A42]/40 flex items-center justify-center text-xs font-black text-[#291E16]">
                BK
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-[11px] sm:text-xs text-[#291E16] leading-none">
                  {language === "id" ? "Lebih dari 5.000+ Pelanggan Puas" : "With over 5,000+ happy buyers"}
                </p>
                <Link
                  href="#katalog"
                  className="text-[10px] font-heading font-bold text-[#E64415] hover:underline mt-1 inline-flex items-center gap-1 leading-none"
                >
                  <span>{language === "id" ? "Cerita rasa keluarga Soreang" : "Meet our bakery story"}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Kanan: 2 Tombol Panah Bulat & 3 Dots Minimalis */}
            <div className="flex items-center gap-5 sm:gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const target = document.getElementById("katalog");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#291E16] hover:border-gray-400 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Kiri"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    const target = document.getElementById("katalog");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#291E16] hover:border-gray-400 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Kanan"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3 Dots Minimalis */}
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#291E16]" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partikel Strawberry di Luar Card (Persis Gambar Referensi!) */}
      <div className="relative w-full max-w-6xl mx-auto h-0 pointer-events-none hidden md:block">
        <div className="floating-strawberry absolute right-[38%] -top-4 z-40">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-200 shadow-md">
            <Image
              src="/images/products/dessert-cube-strawberry.jpg"
              alt="Fresh Treat"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
