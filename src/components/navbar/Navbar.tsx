"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF5EB]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#F1E5D1]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Resmi Bokis - Bolu Kiju Soreang */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 sm:h-14 w-32 sm:w-36 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/brand/logo-bokis.png"
                alt="BOKIS - Bolu Kiju Soreang"
                fill
                priority
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links: Sesuai Header dengan Terjemahan Bilingual */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-[#291E16]">
            <Link
              href="#hero"
              className="hover:text-[#F7A334] transition-colors py-1"
            >
              {t.nav.home}
            </Link>
            <Link
              href="#katalog"
              className="hover:text-[#F7A334] transition-colors py-1"
            >
              {t.nav.treats}
            </Link>
            <Link
              href="#why-us"
              className="hover:text-[#F7A334] transition-colors py-1"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#creations"
              className="hover:text-[#F7A334] transition-colors py-1"
            >
              {t.nav.creations}
            </Link>
          </nav>

          {/* Right Action: Language Switcher, Cart Button, & Contact Us Pill */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Language Switcher Formal Ala Restoran Profesional (ID / EN) */}
            <div className="flex items-center bg-white border border-[#F1E5D1] rounded-xl p-1 text-xs font-heading font-black shadow-2xs">
              <button
                onClick={() => setLanguage("id")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  language === "id"
                    ? "bg-[#F7A334] text-[#291E16] shadow-xs"
                    : "text-[#786C65] hover:text-[#291E16]"
                }`}
                title="Bahasa Indonesia Baku"
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[#F7A334] text-[#291E16] shadow-xs"
                    : "text-[#786C65] hover:text-[#291E16]"
                }`}
                title="Formal English"
              >
                EN
              </button>
            </div>

            {/* Tombol Keranjang Belanja */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 rounded-xl bg-white border border-[#F1E5D1] text-[#291E16] hover:bg-[#FFF8EE] transition-all shadow-2xs group cursor-pointer"
              aria-label={t.nav.cart}
            >
              <ShoppingBag className="w-5 h-5 text-[#291E16] group-hover:text-[#F7A334] transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#EE6C20] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Contact Us Button: Hitam Pekat dengan Kotak Panah (Persis Gambar 1 Behance) */}
            <Link
              href="#kontak"
              className="hidden sm:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-xl bg-[#291E16] text-white hover:bg-[#423125] text-xs sm:text-sm font-bold transition-all shadow-xs group"
            >
              <span>{t.nav.contactUs}</span>
              <div className="w-6 h-6 rounded-lg bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white border border-[#F1E5D1] text-[#291E16]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white border border-[#F1E5D1] shadow-lg flex flex-col gap-3 text-sm font-bold text-[#291E16]">
            <Link href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-1">
              {t.nav.home}
            </Link>
            <Link href="#katalog" onClick={() => setMobileMenuOpen(false)} className="py-1">
              {t.nav.treats}
            </Link>
            <Link href="#why-us" onClick={() => setMobileMenuOpen(false)} className="py-1">
              {t.nav.about}
            </Link>
            <Link href="#creations" onClick={() => setMobileMenuOpen(false)} className="py-1">
              {t.nav.creations}
            </Link>
            <Link href="#kontak" onClick={() => setMobileMenuOpen(false)} className="py-1">
              {t.nav.contactUs}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
