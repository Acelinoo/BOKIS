"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBranch } from "@/context/BranchContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

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
  const { branch } = useBranch();
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });

      tl.from(".footer-col", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      }).from(
        ".footer-bottom",
        {
          opacity: 0,
          y: 15,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-[#231815] text-[#FFFDF7] pt-10 sm:pt-16 pb-8 sm:pb-12 border-t border-amber-900/30 overflow-hidden w-full max-w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          
          {/* 1. Brand Info */}
          <div className="footer-col lg:col-span-4 space-y-3 sm:space-y-4">
            {/* Logo Resmi Bokis - Presisi & Elegan */}
            <div className="inline-flex items-center justify-center bg-[#FAF5EB] px-3.5 py-1.5 rounded-2xl shadow-xs border border-[#F1E5D1]">
              <div className="relative h-10 sm:h-11 w-28 sm:w-32">
                <Image
                  src="/images/brand/logo-bokis.png"
                  alt="BOKIS - Bolu Kiju Soreang"
                  fill
                  sizes="128px"
                  className="object-contain object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-2.5 pt-0.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-[#EA580C] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Bokis"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${branch.whatsappAdmin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-[#22C55E] flex items-center justify-center text-white transition-colors"
                aria-label={`WhatsApp Admin ${branch.name}`}
                title={`Chat WhatsApp ${branch.name}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2 & 3. Navigasi Cepat & Menu Pilihan (Dibuat 2 Kolom Berdampingan di Mobile agar Rapi & Kompak) */}
          <div className="footer-col grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5 pt-1 sm:pt-0">
            {/* Quick Links */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {t.footer.quickNav}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link href="#hero" className="hover:text-amber-400 transition-colors">
                    {t.footer.navHome}
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
                  <Link href="#creations" className="hover:text-amber-400 transition-colors">
                    {t.nav.creations}
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-amber-400 transition-colors">
                    {t.footer.navFaq}
                  </Link>
                </li>
                <li>
                  <a
                    href={branch.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:text-amber-200 transition-colors inline-flex items-center gap-1 font-medium"
                    title={`Beri ulasan Google untuk ${branch.name}`}
                  >
                    <span>{t.testimonials.giveReview}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu Unggulan Ringkas */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {t.footer.featuredTitle}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                <li>{language === "id" ? "Keju Classic (37k)" : "Classic Cheese (37k)"}</li>
                <li>{language === "id" ? "Keju Double (49.5k)" : "Double Cheese (49.5k)"}</li>
                <li>{language === "id" ? "Keju Extra (45k)" : "Extra Cheese (45k)"}</li>
                <li>{language === "id" ? "Pandan Classic (37k)" : "Classic Pandan (37k)"}</li>
                <li>{language === "id" ? "Cokelat Classic (40k)" : "Chocolate (40k)"}</li>
                <li>{language === "id" ? "Dessert Cube (29k)" : "Dessert Cube (29k)"}</li>
              </ul>
            </div>
          </div>

          {/* 4. Jam & Alamat Outlet Dinamis */}
          <div className="footer-col lg:col-span-3 space-y-2 sm:space-y-3 pt-2 lg:pt-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {branch.name}
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <a
                href={branch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-300 transition-colors group"
                title={`Buka lokasi ${branch.name} di Google Maps`}
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">
                  {branch.address}
                </span>
              </a>

              {/* Tombol Lihat Lokasi Google Maps Dinamis */}
              <div>
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-amber-400 text-amber-300 hover:text-[#231815] font-heading font-black text-xs transition-colors group cursor-pointer"
                  title={`Lihat lokasi ${branch.name} di Google Maps`}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400 group-hover:text-[#231815]" />
                  <span>Lihat Lokasi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{language === "id" ? branch.operatingHoursId : branch.operatingHoursEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`https://wa.me/${branch.whatsappAdmin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  {branch.whatsappDisplay} (Layanan WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Buatan Gerobaklink */}
        <div className="footer-bottom pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-gray-400 text-center sm:text-left">
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
