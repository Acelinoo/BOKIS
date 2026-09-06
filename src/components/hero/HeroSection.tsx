"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS, ProductItem } from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface VariantSlide {
  id: string;
  word: string;
  subTitleId: string;
  subTitleEn: string;
  bgGradient: string;
  themeColor: string;
  image: string;
  productId: string;
}

const VARIANTS: VariantSlide[] = [
  {
    id: "cheese",
    word: "CHEESE",
    subTitleId: "Resep otentik! Bolu keju lembut khas Soreang, wangi cheddar panggang gurih, lumer di setiap gigitan.",
    subTitleEn: "Authentic recipe! Soft cheese chiffon from Soreang, rich baked cheddar aroma, melting in every bite.",
    bgGradient: "from-[#FAD64E] via-[#F7CF43] to-[#F0C22E]",
    themeColor: "#F7CF43",
    image: "/images/products/hero-bolu-keju-hd-clean.png",
    productId: "bolu-keju-classic",
  },
  {
    id: "pandan",
    word: "PANDAN",
    subTitleId: "Aroma alami! Daun suji & pandan segar berpadu taburan keju panggang renyah berlimpah.",
    subTitleEn: "Natural aroma! Fresh pandan & suji extract paired with abundant savory baked cheddar.",
    bgGradient: "from-[#8FD48A] via-[#7ECB78] to-[#68BA61]",
    themeColor: "#7ECB78",
    image: "/images/products/bolu-pandan-classic.jpg",
    productId: "bolu-pandan-classic",
  },
  {
    id: "choco",
    word: "CHOCO",
    subTitleId: "Cita rasa mantap! Chiffon cokelat empuk dengan keju cheddar panggang dan choco chips lezat.",
    subTitleEn: "Rich flavor! Fluffy chocolate chiffon with baked cheddar cheese and delicious choco chips.",
    bgGradient: "from-[#CE9B73] via-[#BE895E] to-[#AB764B]",
    themeColor: "#BE895E",
    image: "/images/products/bolu-cokelat-classic.jpg",
    productId: "bolu-cokelat-classic",
  },
  {
    id: "matcha",
    word: "MATCHA",
    subTitleId: "Matcha otentik! Sponge cake lembut berpadu krim susu lumer dan bubuk matcha harum.",
    subTitleEn: "Authentic matcha! Soft sponge cake with melting cream and aromatic premium matcha powder.",
    bgGradient: "from-[#A4D67E] via-[#92C968] to-[#7BB84F]",
    themeColor: "#92C968",
    image: "/images/products/dessert-cube-matcha.jpg",
    productId: "dessert-cube-matcha",
  },
];

export default function HeroSection() {
  const { addToCart, setIsOpen } = useCart();
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cakeImageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);

  const current = VARIANTS[currentIndex];

  const handleOrder = () => {
    const product = PRODUCTS.find((p) => p.id === current.productId) || PRODUCTS[0];
    addToCart(product, 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? VARIANTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === VARIANTS.length - 1 ? 0 : prev + 1));
  };

  // GSAP Initial Entrance & Continuous Floating Animation
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
          wordRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          cakeImageRef.current,
          { opacity: 0, scale: 0.85, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.6"
        );

      // 2. Continuous Floating Loop pada Kue Tengah
      if (cakeImageRef.current) {
        gsap.to(cakeImageRef.current, {
          y: -14,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: containerRef }
  );

  // Smooth Crossfade when Switching Variants
  useGSAP(
    () => {
      if (cakeImageRef.current && wordRef.current) {
        gsap.fromTo(
          cakeImageRef.current,
          { scale: 0.94, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
        gsap.fromTo(
          wordRef.current,
          { y: 8, opacity: 0.6 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      }
    },
    { dependencies: [currentIndex], scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-[1180px] mx-auto w-full select-none"
    >
      {/* Outer Card: 100% Identik dengan Gambar Referensi (Warna Kuning Keju Bokis) */}
      <div
        ref={cardRef}
        className={`relative rounded-[2rem] sm:rounded-[2.75rem] bg-gradient-to-br ${current.bgGradient} p-5 sm:p-8 md:p-10 shadow-2xl border border-white/20 flex flex-col justify-between min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[680px] overflow-hidden transition-colors duration-700`}
      >
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full bg-white/15 blur-3xl pointer-events-none" />

        {/* --- 1. TOP BAR HEADER DI DALAM CARD (PERSIS REFERENSI) --- */}
        <div className="relative z-30 flex items-center justify-between">
          {/* Logo Bokis Kiri (Seperti Cream di Referensi) */}
          <Link href="/" className="flex items-center gap-1 text-white font-heading font-black text-xl sm:text-2xl tracking-tight group">
            <span>Bokis</span>
            <span className="text-amber-100 text-xs">🧀</span>
          </Link>

          {/* Floating Capsule Pill Menu Tengah (Persis Referensi) */}
          <nav className="hidden md:flex items-center gap-7 bg-white/35 backdrop-blur-md px-8 py-2 rounded-full border border-white/30 text-xs font-heading font-black text-[#291E16]">
            <Link href="#hero" className="text-[#291E16] hover:opacity-75 transition-opacity">
              Home
            </Link>
            <Link href="#katalog" className="text-[#291E16]/85 hover:text-[#291E16] transition-colors">
              Flavors
            </Link>
            <Link href="#why-us" className="text-[#291E16]/85 hover:text-[#291E16] transition-colors">
              About
            </Link>
            <Link href="#kontak" className="text-[#291E16]/85 hover:text-[#291E16] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icon Search & Cart Kanan (Persis Referensi) */}
          <div className="flex items-center gap-2 sm:gap-3 text-white">
            <button
              onClick={() => {
                const target = document.getElementById("katalog");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
              aria-label="Cari Menu"
              title="Cari Menu"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
              aria-label="Keranjang Belanja"
              title="Keranjang Belanja"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* --- 2. CENTER AREA: TEKS RAKSASA PUTIH DI BELAKANG & KUE HD DI DEPAN (PERSIS REFERENSI) --- */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-4 sm:my-6 md:my-8">
          
          {/* TEKS RAKSASA PUTIH DI LAYER BELAKANG (Persis Kata LEMON di Gambar Referensi) */}
          <h2
            ref={wordRef}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading font-black text-white uppercase tracking-[0.16em] sm:tracking-[0.20em] md:tracking-[0.22em] text-[19vw] sm:text-[130px] md:text-[180px] lg:text-[230px] leading-none select-none drop-shadow-xs z-10 pointer-events-none"
          >
            {current.word}
          </h2>

          {/* OBJEK KUE UTAMA DI LAYER DEPAN (Persis Cup Lemon di Gambar Referensi) */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            
            {/* Foto Bolu Keju HD Melayang di Depan Teks */}
            <div
              ref={cakeImageRef}
              onClick={handleOrder}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] max-h-[46vh] cursor-pointer hover:scale-[1.03] transition-transform duration-300 flex items-center justify-center"
              title={language === "id" ? "Klik untuk menambah ke keranjang!" : "Click to add to cart!"}
            >
              {current.id === "cheese" ? (
                <Image
                  src="/images/products/hero-bolu-keju-hd-clean.png"
                  alt="Bolu Keju Classic Ultra HD Bokis Soreang"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-contain drop-shadow-2xl select-none"
                />
              ) : (
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
                  <Image
                    src={current.image}
                    alt={current.word}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover select-none"
                  />
                </div>
              )}
            </div>

            {/* Bayangan Jatuh Realistis di Bawah Kue (Radial Gradient Murni - Bebas Kotak Hitam) */}
            <div className="w-48 sm:w-64 md:w-80 h-5 sm:h-6 -mt-3 sm:-mt-4 rounded-[50%] bg-black/15 blur-xs pointer-events-none" />
          </div>

          {/* Aksen Mikro Melengkung di Samping Kue (Persis Lemon Curl di Gambar Referensi) */}
          <div className="absolute right-[14%] sm:right-[20%] md:right-[24%] bottom-[20%] z-25 hidden sm:block pointer-events-none">
            <span className="text-2xl sm:text-3xl transform rotate-45 inline-block opacity-90 drop-shadow-xs">
              🧀
            </span>
          </div>
        </div>

        {/* --- 3. BOTTOM BAR DI DALAM CARD (PERSIS REFERENSI) --- */}
        <div className="relative z-30 flex items-end justify-between gap-4 pt-2">
          
          {/* Sisi Kiri Bawah: Deskripsi 2 Baris Minimalis (Persis Referensi) */}
          <div className="max-w-[200px] sm:max-w-xs md:max-w-sm text-left">
            <p className="text-[11px] sm:text-xs md:text-[13px] text-[#291E16]/80 font-heading font-semibold leading-relaxed tracking-normal">
              {language === "id" ? current.subTitleId : current.subTitleEn}
            </p>
          </div>

          {/* Tengah Bawah: Tombol Kapsul Hitam Pekat "Order" (Persis Referensi) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
            <button
              onClick={handleOrder}
              className="px-8 sm:px-11 py-2.5 sm:py-3 rounded-full bg-[#18120E] text-white hover:bg-black font-heading font-black text-xs sm:text-sm tracking-wide shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Order
            </button>
          </div>

          {/* Sisi Kanan Bawah: 2 Tombol Panah Lingkaran Outline (Persis Referensi) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/70 hover:border-white hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Varian Sebelumnya"
              title="Varian Sebelumnya"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </button>
            <button
              onClick={handleNext}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/70 hover:border-white hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Varian Berikutnya"
              title="Varian Berikutnya"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
