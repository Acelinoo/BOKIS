"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#231815] text-[#FFFDF7] pt-16 pb-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Resmi Bokis - Presisi & Elegan */}
            <div className="inline-flex items-center justify-center bg-[#FAF5EB] px-4 py-2 rounded-2xl shadow-xs border border-[#F1E5D1]">
              <div className="relative h-11 w-28 sm:w-32">
                <Image
                  src="/images/brand/logo-bokis.png"
                  alt="BOKIS - Bolu Kiju Soreang"
                  fill
                  sizes="128px"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#EA580C] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Bokis"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#22C55E] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp Admin Bokis"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.footer.quickNav}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="#hero" className="hover:text-amber-400 transition-colors">
                  {t.footer.navHome}
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-amber-400 transition-colors">
                  {t.footer.navCategories}
                </Link>
              </li>
              <li>
                <Link href="#katalog" className="hover:text-amber-400 transition-colors">
                  {t.footer.navMenu}
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-amber-400 transition-colors">
                  {t.footer.navWhyUs}
                </Link>
              </li>
              <li>
                <Link href="#promo" className="hover:text-amber-400 transition-colors">
                  {t.footer.navPromo}
                </Link>
              </li>
              <li>
                <Link href="#testimoni" className="hover:text-amber-400 transition-colors">
                  {t.footer.navTestimonials}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.footer.navFaq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Unggulan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.footer.featuredTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>{language === "id" ? "Keju Classic (Rp 37.000)" : "Classic Cheese (Rp 37,000)"}</li>
              <li>{language === "id" ? "Keju Double (Rp 49.500)" : "Double Cheese (Rp 49,500)"}</li>
              <li>{language === "id" ? "Keju Extra (Rp 45.000)" : "Extra Cheese (Rp 45,000)"}</li>
              <li>{language === "id" ? "Pandan Classic (Rp 37.000)" : "Classic Pandan (Rp 37,000)"}</li>
              <li>{language === "id" ? "Pandan Double (Rp 49.500)" : "Double Pandan (Rp 49,500)"}</li>
              <li>{language === "id" ? "Cokelat Classic (Rp 40.000)" : "Classic Chocolate (Rp 40,000)"}</li>
              <li>{language === "id" ? "Red Velvet Classic (Rp 42.000)" : "Classic Red Velvet (Rp 42,000)"}</li>
              <li>{language === "id" ? "Dessert Cube Matcha (Rp 29.000)" : "Matcha Dessert Cube (Rp 29,000)"}</li>
              <li>{language === "id" ? "Dessert Cube Strawberry (Rp 29.000)" : "Strawberry Dessert Cube (Rp 29,000)"}</li>
            </ul>
          </div>

          {/* Jam & Alamat Outlet */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.footer.outletTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {t.footer.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.whatsappService}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Buatan Gerobaklink */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} BOKIS - Bolu Kiju Soreang. {t.footer.copyright}</p>
          
          {/* Credit Gerobaklink */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-gray-300 hover:border-amber-400/40 transition-colors">
            <span>{t.footer.creditText}</span>
            <a
              href="https://www.gerobaklink.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Gerobaklink</span>
              <span className="text-amber-300/70 text-[11px] font-normal">(www.gerobaklink.my.id)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
