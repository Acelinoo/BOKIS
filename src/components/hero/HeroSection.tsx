"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
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
  const mainShadowRef = useRef<HTMLDivElement>(null);
  const floatingBerry1Ref = useRef<HTMLDivElement>(null);
  const floatingBerry2Ref = useRef<HTMLDivElement>(null);

  // Ambil data produk Bolu Keju Classic
  const classicProduct = PRODUCTS.find((p) => p.id === "bolu-keju-classic") || PRODUCTS[0];

  const handleOrder = () => {
    addToCart(classicProduct, 1);
  };

  // GSAP Entrance & Continuous Floating Loop
  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Initial Entrance
      tl.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.96, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".hero-text-anim",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          mainCakeRef.current,
          { opacity: 0, scale: 0.8, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "back.out(1.5)" },
          "-=0.6"
        )
        .fromTo(
          [secondaryCakeRef.current, tertiaryCakeRef.current],
          { opacity: 0, scale: 0.6, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "back.out(1.4)" },
          "-=0.7"
        )
        .fromTo(
          [floatingBerry1Ref.current, floatingBerry2Ref.current],
          { opacity: 0, scale: 0, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "back.out(1.8)" },
          "-=0.5"
        );

      // 2. Continuous Floating Loop pada Kue Utama (Bolu Keju HD)
      if (mainCakeRef.current) {
        gsap.to(mainCakeRef.current, {
          y: -16,
          rotation: 1.5,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // 3. Dynamic Soft Shadow Sync
      if (mainShadowRef.current) {
        gsap.to(mainShadowRef.current, {
          scaleX: 0.84,
          scaleY: 0.78,
          opacity: 0.35,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // 4. Floating Loop pada Kue Pendukung Kanan
      if (secondaryCakeRef.current) {
        gsap.to(secondaryCakeRef.current, {
          y: -12,
          rotation: -2,
          duration: 3.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.4,
        });
      }

      if (tertiaryCakeRef.current) {
        gsap.to(tertiaryCakeRef.current, {
          y: -10,
          rotation: 2,
          duration: 4.0,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.8,
        });
      }

      // 5. Floating Berries / Cheese Particles
      if (floatingBerry1Ref.current) {
        gsap.to(floatingBerry1Ref.current, {
          y: -8,
          rotation: 8,
          duration: 2.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (floatingBerry2Ref.current) {
        gsap.to(floatingBerry2Ref.current, {
          y: -10,
          rotation: -10,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.3,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Outer Rounded Hero Card: Vibrant Warm Sunset Orange (#E8461E) */}
      <div
        ref={cardRef}
        className="relative rounded-[2.5rem] sm:rounded-[3.25rem] bg-gradient-to-br from-[#F04E23] via-[#E8431A] to-[#D9340E] overflow-hidden shadow-2xl border border-[#F9704B]/30 flex flex-col justify-between min-h-[580px] sm:min-h-[640px] md:min-h-[680px]"
      >
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        {/* --- 1. Top Bar Inside Card: Logo, Capsule Pill Nav, & Icons --- */}
        <div className="relative z-30 pt-6 sm:pt-8 px-6 sm:px-10 md:px-12 flex items-center justify-between">
          {/* Logo Brand Kiri */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-white drop-shadow-xs">
              Bokis<span className="text-amber-200">.</span>
            </span>
          </Link>

          {/* Center Capsule Pill Menu (Persis Gambar Referensi) */}
          <nav className="hidden md:flex items-center gap-6 bg-white/95 backdrop-blur-md px-7 py-2.5 rounded-full shadow-md text-xs font-heading font-black text-[#291E16]">
            <Link
              href="#katalog"
              className="text-[#E8431A] hover:text-[#291E16] transition-colors"
            >
              {language === "id" ? "Varian Bolu" : "Flavors"}
            </Link>
            <Link
              href="#why-us"
              className="text-[#786C65] hover:text-[#E8431A] transition-colors"
            >
              {language === "id" ? "Keunggulan" : "About"}
            </Link>
            <Link
              href="#katalog"
              className="text-[#786C65] hover:text-[#E8431A] transition-colors"
            >
              {language === "id" ? "Minuman & Kopi" : "Beverages"}
            </Link>
            <Link
              href="#kontak"
              className="text-[#786C65] hover:text-[#E8431A] transition-colors"
            >
              {language === "id" ? "Kontak Kami" : "Contact"}
            </Link>
          </nav>

          {/* Right Action Icons: WhatsApp Order & Cart Drawer Button */}
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 rounded-full bg-white/20 hover:bg-white hover:text-[#E8431A] text-white transition-all backdrop-blur-xs cursor-pointer"
              aria-label="Keranjang"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- 2. Main Body Content: Text Kiri & Multi-layered Cakes Kanan --- */}
        <div className="relative z-20 px-6 sm:px-10 md:px-12 pt-4 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1">
          
          {/* Kolom Kiri: Headline, Subtitle, & Pill Button (Span 5) */}
          <div className="lg:col-span-5 text-left space-y-4 sm:space-y-6 pt-2 sm:pt-4">
            <h1 className="hero-text-anim font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[72px] leading-[1.02] text-white tracking-tight drop-shadow-xs">
              Delicious <br />
              <span className="text-white">Cheese Chiffon</span>
            </h1>

            <p className="hero-text-anim text-xs sm:text-sm md:text-base font-heading font-semibold text-white/90 max-w-md leading-relaxed tracking-wide">
              {language === "id"
                ? "Bolu keju lembut khas Soreang dengan cita rasa keju cheddar otentik panggang berlimpah dan lelehan saus istimewa."
                : "Amazing cheese chiffon made with the finest Soreang ingredients and generous toasted cheddar."}
            </p>

            <div className="hero-text-anim pt-1 sm:pt-2">
              <button
                onClick={handleOrder}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-[#291E16] hover:bg-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {language === "id" ? "Pesan Sekarang" : "Order Now"}
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Multi-Tiered Floating Cakes Showcase (Span 7) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] md:min-h-[480px]">
            
            {/* 1. KUE UTAMA DI TENGAH: Bolu Keju Classic Ultra HD Splash (Paling Besar & Jernih) */}
            <div className="relative z-30 flex items-center justify-center">
              {/* Dynamic Soft Shadow */}
              <div
                ref={mainShadowRef}
                className="absolute -bottom-6 sm:-bottom-8 w-56 sm:w-72 md:w-88 h-10 sm:h-14 rounded-[50%] bg-[#291E16]/50 blur-xl pointer-events-none"
              />

              {/* Bolu Keju Classic Ultra HD */}
              <div
                ref={mainCakeRef}
                onClick={handleOrder}
                className="relative w-64 h-64 sm:w-88 sm:h-88 md:w-[420px] md:h-[420px] cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                title={language === "id" ? "Klik untuk menambah ke keranjang!" : "Click to add to cart!"}
              >
                <Image
                  src="/images/products/hero-keju-classic-ultra-hd.png"
                  alt="Bolu Keju Classic Ultra HD Bokis Soreang"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain drop-shadow-2xl select-none"
                />
              </div>
            </div>

            {/* 2. KUE PENDUKUNG SEDANG DI KANAN: Bolu Pandan Classic (Persis Cup Kuning di Referensi) */}
            <div
              ref={secondaryCakeRef}
              className="absolute right-2 sm:right-6 md:right-10 top-[15%] z-20 hidden sm:block"
            >
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 opacity-95">
                <Image
                  src="/images/products/bolu-pandan-classic.jpg"
                  alt="Bolu Pandan Classic"
                  fill
                  sizes="220px"
                  className="object-contain rounded-full drop-shadow-xl border-4 border-white/20"
                />
              </div>
            </div>

            {/* 3. KUE PENDUKUNG KECIL DI KANAN JAUH: Dessert Cube Matcha (Persis Cup Hijau di Referensi) */}
            <div
              ref={tertiaryCakeRef}
              className="absolute right-0 top-[40%] z-10 hidden md:block"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 opacity-85">
                <Image
                  src="/images/products/dessert-cube-matcha.jpg"
                  alt="Dessert Cube Matcha"
                  fill
                  sizes="140px"
                  className="object-contain rounded-3xl drop-shadow-lg border-2 border-white/20"
                />
              </div>
            </div>

            {/* Partikel Stroberi / Keju Melayang 1 (Di dekat Kue Utama) */}
            <div
              ref={floatingBerry1Ref}
              className="absolute left-[15%] sm:left-[22%] bottom-[12%] z-40 hidden xs:block"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg">
                <Image
                  src="/images/products/dessert-cube-strawberry.jpg"
                  alt="Strawberry Treat"
                  fill
                  sizes="48px"
                  className="object-cover rounded-full border-2 border-white shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. Bottom Decorative Wavy Curve & Footer Bar (Persis Gambar Referensi) --- */}
        <div className="relative z-30 w-full">
          {/* Organic Curved SVG Wave Cutout */}
          <div className="w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-20 sm:h-28 md:h-32"
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
            >
              <path
                d="M0,120 C180,40 380,160 620,130 C860,100 1020,40 1200,90 L1200,160 L0,160 Z"
                fill="#FFFDF7"
              />
            </svg>
          </div>

          {/* Area Krem Bawah di Dalam Card: Testimonial Kiri & Arrow Pagination Kanan */}
          <div className="bg-[#FFFDF7] px-6 sm:px-10 md:px-12 pb-6 pt-1 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Kiri: Avatar & Social Proof (Persis Gambar Referensi) */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-amber-200 shadow-xs bg-amber-100 flex items-center justify-center text-xs font-black text-[#291E16]">
                BK
              </div>
              <div className="text-left">
                <p className="font-heading font-extrabold text-[11px] sm:text-xs text-[#291E16] leading-none">
                  {language === "id" ? "Lebih dari 5.000+ Pelanggan Puas" : "With over 5,000+ happy buyers"}
                </p>
                <Link
                  href="#katalog"
                  className="text-[10px] font-heading font-bold text-[#E8431A] hover:underline mt-1 inline-flex items-center gap-1 leading-none"
                >
                  <span>{language === "id" ? "Cerita kelezatan keluarga Soreang" : "Meet our bakery story"}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Partikel Stroberi Mengambang di Area Krem */}
            <div
              ref={floatingBerry2Ref}
              className="hidden lg:block absolute left-[58%] bottom-6 z-40"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-200/80 shadow-md">
                <Image
                  src="/images/products/dessert-cube-strawberry.jpg"
                  alt="Fresh Fruit"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Kanan: Navigasi Panah & Dots Indikator (Persis Gambar Referensi) */}
            <div className="flex items-center gap-6">
              {/* Bulat Panah Kiri-Kanan */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const target = document.getElementById("katalog");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#786C65] hover:text-[#291E16] hover:border-gray-400 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Kembali"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    const target = document.getElementById("katalog");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#786C65] hover:text-[#291E16] hover:border-gray-400 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Lanjut"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3 Minimalist Dots Indicator */}
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#291E16]" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
