"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

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
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
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

  // 1. Animasi transisi teks & kue saat berpindah slide varian
  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 26, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-cake-container",
        { opacity: 0, scale: 0.88, y: 18 },
        { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: "back.out(1.2)" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    },
    { scope: containerRef, dependencies: [currentIndex] }
  );

  // 2. Animasi ambient floating parutan keju & entrance tombol
  useGSAP(
    () => {
      gsap.to(".hero-cheese-accent", {
        y: -10,
        rotation: 52,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".hero-controls-enter", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        delay: 0.15,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`w-full max-w-full min-h-[100dvh] bg-gradient-to-b ${current.bgGradient} flex flex-col justify-between relative overflow-hidden select-none px-4 sm:px-12 md:px-16 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 transition-colors duration-700`}
    >
      {/* Ambient Radial Highlight di Fullscreen */}
      <div className="absolute top-0 right-0 sm:right-1/4 w-72 sm:w-[600px] h-72 sm:h-[600px] rounded-full bg-white/15 blur-2xl sm:blur-3xl pointer-events-none" />

      {/* --- 2. CENTER AREA: TEKS UTAMA DI ATAS KUE (z-30) & OBJEK KUE DI BAWAHNYA (z-20) --- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full my-auto py-2 sm:py-4">
        
        {/* TEKS UTAMA DI ATAS KUE (z-30): TIDAK TERHALANG DI SEMUA SLIDE & RESPONSIF MOBILE */}
        <h2 className="hero-title text-center font-heading font-black text-white uppercase tracking-[0.06em] sm:tracking-[0.12em] md:tracking-[0.16em] text-[13vw] sm:text-[85px] md:text-[120px] lg:text-[150px] xl:text-[170px] leading-none select-none drop-shadow-md z-30 pointer-events-none transition-all duration-500 mb-2 sm:mb-3 md:mb-4">
          {current.word}
        </h2>

        {/* OBJEK KUE DI LAYER (z-20): BERDIRI TEGAK GROUNDED TANPA MENGHALANGI TEKS */}
        <div className="hero-cake-container relative z-20 flex flex-col items-center justify-center">
          
          {/* Gambar Kue Menapak Anggun */}
          <div
            onClick={handleOrder}
            className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-[400px] lg:h-[400px] max-h-[44vh] cursor-pointer hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center"
            title={language === "id" ? "Klik untuk menambah ke keranjang!" : "Click to add to cart!"}
          >
            {current.id === "cheese" ? (
              <Image
                src="/images/products/hero-bolu-keju-hd-clean.png"
                alt="Bolu Keju Classic Ultra HD Bokis Soreang"
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 100vw, 400px"
                className="object-contain drop-shadow-xl select-none"
              />
            ) : (
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-76 md:h-76 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                <Image
                  src={current.image}
                  alt={current.word}
                  fill
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 100vw, 320px"
                  className="object-cover select-none"
                />
              </div>
            )}
          </div>

          {/* Bayangan Jatuh Kontak Realistis Tepat di Bawah Piring (Menempel Alami) */}
          <div className="w-44 sm:w-64 md:w-80 h-3.5 sm:h-5 -mt-2 sm:-mt-3 rounded-[50%] bg-black/20 blur-xs pointer-events-none" />
        </div>

        {/* Tombol Lihat Menu Khusus Mobile: Bersih, Rapi, Berdiri Bebas di Bawah Kue */}
        <div className="hero-controls-enter mt-4 sm:hidden flex justify-center w-full z-25">
          <button
            onClick={() => {
              const target = document.getElementById("katalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-2.5 rounded-full bg-[#18120E] text-white hover:bg-black font-heading font-black text-xs tracking-wider shadow-xl active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>{t.hero.viewMenu}</span>
          </button>
        </div>

        {/* Aksen Mikro Parutan Keju di Samping Kue (Persis Lemon Curl di Referensi) */}
        <div className="absolute right-[8%] sm:right-[18%] md:right-[22%] bottom-[18%] z-25 hidden sm:block pointer-events-none">
          <span className="hero-cheese-accent text-2xl sm:text-3xl transform rotate-45 inline-block opacity-90 drop-shadow-xs">
            🧀
          </span>
        </div>
      </div>

      {/* --- 3. BOTTOM BAR (RESPONSIF MOBILE & DESKTOP) --- */}
      <footer className="relative z-30 w-full flex items-center sm:items-end justify-between gap-3 pt-3 sm:pt-4">
        
        {/* Sisi Kiri Bawah: Teks 2 Baris Minimalis */}
        <div className="hero-subtitle max-w-[70%] sm:max-w-xs md:max-w-sm text-left">
          <p className="text-[11px] sm:text-xs md:text-[13px] text-[#291E16]/90 font-heading font-semibold leading-relaxed tracking-normal">
            {language === "id" ? current.subTitleId : current.subTitleEn}
          </p>
        </div>

        {/* Tengah Bawah: Tombol Kapsul Hitam Pekat "Lihat Menu" (Khusus Desktop agar persis Behance) */}
        <div className="hero-controls-enter hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10">
          <button
            onClick={() => {
              const target = document.getElementById("katalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 sm:px-11 py-2.5 sm:py-3 rounded-full bg-[#18120E] text-white hover:bg-black font-heading font-black text-xs sm:text-sm tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
          >
            <span>{t.hero.viewMenu}</span>
          </button>
        </div>

        {/* Sisi Kanan Bawah: 2 Tombol Panah Lingkaran Outline */}
        <div className="hero-controls-enter flex items-center gap-1.5 sm:gap-2 shrink-0">
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
