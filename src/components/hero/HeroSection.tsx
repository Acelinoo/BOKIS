"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/products";

interface VariantSlide {
  id: string;
  word: string;
  subTitleId: string;
  subTitleEn: string;
  bgGradient: string;
  image: string;
  productId: string;
}

const VARIANTS: VariantSlide[] = [
  {
    id: "cheese",
    word: "CHEESE",
    subTitleId: "Resep otentik! Bolu keju lembut khas Soreang, wangi cheddar panggang gurih, lumer di setiap gigitan.",
    subTitleEn: "Authentic recipe! Soft cheese chiffon from Soreang, rich baked cheddar aroma, melting in every bite.",
    bgGradient: "from-[#FBD856] via-[#F7CF43] to-[#EEBD26]",
    image: "/images/products/hero-bolu-keju-hd-clean.png",
    productId: "bolu-keju-classic",
  },
  {
    id: "pandan",
    word: "PANDAN",
    subTitleId: "Aroma alami! Daun suji & pandan segar berpadu taburan keju panggang renyah berlimpah.",
    subTitleEn: "Natural aroma! Fresh pandan & suji extract paired with abundant savory baked cheddar.",
    bgGradient: "from-[#8FD48A] via-[#7ECB78] to-[#68BA61]",
    image: "/images/products/bolu-pandan-classic.jpg",
    productId: "bolu-pandan-classic",
  },
  {
    id: "choco",
    word: "CHOCO",
    subTitleId: "Cita rasa mantap! Chiffon cokelat empuk dengan keju cheddar panggang dan choco chips lezat.",
    subTitleEn: "Rich flavor! Fluffy chocolate chiffon with baked cheddar cheese and delicious choco chips.",
    bgGradient: "from-[#CE9B73] via-[#BE895E] to-[#AB764B]",
    image: "/images/products/bolu-cokelat-classic.jpg",
    productId: "bolu-cokelat-classic",
  },
  {
    id: "matcha",
    word: "MATCHA",
    subTitleId: "Matcha otentik! Sponge cake lembut berpadu krim susu lumer dan bubuk matcha harum.",
    subTitleEn: "Authentic matcha! Soft sponge cake with melting cream and aromatic premium matcha powder.",
    bgGradient: "from-[#A4D67E] via-[#92C968] to-[#7BB84F]",
    image: "/images/products/dessert-cube-matcha.jpg",
    productId: "dessert-cube-matcha",
  },
];

export default function HeroSection() {
  const { addToCart, totalItems, setIsOpen } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`w-full min-h-[100dvh] bg-gradient-to-b ${current.bgGradient} flex flex-col justify-between relative overflow-hidden select-none px-6 sm:px-12 md:px-16 pt-6 sm:pt-8 pb-8 sm:pb-10 transition-colors duration-700`}
    >
      {/* Subtle Ambient Radial Highlight di Fullscreen */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-white/15 blur-3xl pointer-events-none" />

      {/* --- 1. TOP BAR NAVBAR FULLSCREEN (TEMA BOKIS RESMI) --- */}
      <header className="relative z-30 w-full flex items-center justify-between">
        
        {/* Logo Bokis Resmi di Kiri */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 sm:h-12 w-28 sm:w-32 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/brand/logo-bokis.png"
              alt="BOKIS - Bolu Kiju Soreang"
              fill
              priority
              sizes="128px"
              className="object-contain object-left drop-shadow-xs"
            />
          </div>
        </Link>

        {/* Capsule Pill Menu Tengah Tema Bokis */}
        <nav className="hidden md:flex items-center gap-8 bg-white/60 backdrop-blur-md px-9 py-2.5 rounded-full border border-white/40 shadow-xs text-xs sm:text-[13px] font-heading font-black text-[#291E16]">
          <Link href="#hero" className="text-[#291E16] hover:opacity-75 transition-opacity">
            {t.nav.home}
          </Link>
          <Link href="#katalog" className="text-[#291E16]/80 hover:text-[#291E16] transition-colors">
            {t.nav.treats}
          </Link>
          <Link href="#why-us" className="text-[#291E16]/80 hover:text-[#291E16] transition-colors">
            {t.nav.about}
          </Link>
          <Link href="#creations" className="text-[#291E16]/80 hover:text-[#291E16] transition-colors">
            {t.nav.creations}
          </Link>
        </nav>

        {/* Action Kanan: Switcher ID/EN, Search & Cart Button */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Switcher ID/EN */}
          <div className="flex items-center bg-white/40 backdrop-blur-xs border border-white/30 rounded-xl p-0.5 text-xs font-heading font-black">
            <button
              onClick={() => setLanguage("id")}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                language === "id"
                  ? "bg-white text-[#291E16] shadow-xs"
                  : "text-[#291E16]/70 hover:text-[#291E16]"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                language === "en"
                  ? "bg-white text-[#291E16] shadow-xs"
                  : "text-[#291E16]/70 hover:text-[#291E16]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Search Button */}
          <button
            onClick={() => {
              const target = document.getElementById("katalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-2 sm:p-2.5 rounded-full hover:bg-white/25 transition-colors text-[#291E16] cursor-pointer"
            aria-label="Cari Menu"
            title="Cari Menu"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 sm:p-2.5 rounded-full hover:bg-white/25 transition-colors text-[#291E16] cursor-pointer"
            aria-label="Keranjang Belanja"
            title="Keranjang Belanja"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#EE6C20] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* --- 2. CENTER AREA: TEKS RAKSASA DI BELAKANG & KUE STATIS DI DEPAN --- */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full my-auto py-2 sm:py-4">
        
        {/* TEKS RAKSASA PUTIH DI LAYER BELAKANG (z-10) */}
        <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading font-black text-white uppercase tracking-[0.16em] sm:tracking-[0.20em] md:tracking-[0.22em] text-[18vw] sm:text-[140px] md:text-[190px] lg:text-[240px] leading-none select-none drop-shadow-xs z-10 pointer-events-none transition-all duration-500">
          {current.word}
        </h2>

        {/* OBJEK KUE DI LAYER DEPAN (z-20): BERDIRI TEGAK GROUNDED TANPA ANIMASI TERBANG */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          
          {/* Gambar Kue Menapak Anggun */}
          <div
            onClick={handleOrder}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] max-h-[48vh] cursor-pointer hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center"
            title={language === "id" ? "Klik untuk menambah ke keranjang!" : "Click to add to cart!"}
          >
            {current.id === "cheese" ? (
              <Image
                src="/images/products/hero-bolu-keju-hd-clean.png"
                alt="Bolu Keju Classic Ultra HD Bokis Soreang"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain drop-shadow-xl select-none"
              />
            ) : (
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
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

          {/* Bayangan Jatuh Kontak Realistis Tepat di Bawah Piring (Menempel Alami) */}
          <div className="w-52 sm:w-72 md:w-88 h-4 sm:h-5 -mt-2 sm:-mt-3 rounded-[50%] bg-black/20 blur-xs pointer-events-none" />
        </div>

        {/* Aksen Mikro Parutan Keju di Samping Kue (Persis Lemon Curl di Referensi) */}
        <div className="absolute right-[12%] sm:right-[18%] md:right-[22%] bottom-[18%] z-25 hidden sm:block pointer-events-none">
          <span className="text-2xl sm:text-3xl transform rotate-45 inline-block opacity-90 drop-shadow-xs">
            🧀
          </span>
        </div>
      </div>

      {/* --- 3. BOTTOM BAR (PERSIS SEPERTI GAMBAR REFERENSI) --- */}
      <footer className="relative z-30 w-full flex items-end justify-between gap-4 pt-4">
        
        {/* Sisi Kiri Bawah: Teks 2 Baris Minimalis */}
        <div className="max-w-[220px] sm:max-w-xs md:max-w-sm text-left">
          <p className="text-[11px] sm:text-xs md:text-[13px] text-[#291E16]/85 font-heading font-semibold leading-relaxed tracking-normal">
            {language === "id" ? current.subTitleId : current.subTitleEn}
          </p>
        </div>

        {/* Tengah Bawah: Tombol Kapsul Hitam Pekat "Order" */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10">
          <button
            onClick={handleOrder}
            className="px-9 sm:px-12 py-2.5 sm:py-3 rounded-full bg-[#18120E] text-white hover:bg-black font-heading font-black text-xs sm:text-sm tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Order
          </button>
        </div>

        {/* Sisi Kanan Bawah: 2 Tombol Panah Lingkaran Outline */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/80 hover:border-white hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-2xs"
            aria-label="Varian Sebelumnya"
            title="Varian Sebelumnya"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
          </button>
          <button
            onClick={handleNext}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/80 hover:border-white hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-2xs"
            aria-label="Varian Berikutnya"
            title="Varian Berikutnya"
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
          </button>
        </div>
      </footer>
    </section>
  );
}
