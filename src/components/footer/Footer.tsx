"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Heart } from "lucide-react";

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
  return (
    <footer className="bg-[#231815] text-[#FFFDF7] pt-16 pb-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Resmi Bokis */}
            <div className="bg-[#FAF5EB] px-3 py-2 rounded-2xl inline-block shadow-sm">
              <div className="relative h-12 w-36">
                <Image
                  src="/images/brand/logo-bokis.png"
                  alt="BOKIS - Bolu Kiju Soreang"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Menghadirkan kelezatan bolu chiffon keju susu legendaris dengan 100% susu murni lokal dan keju cheddar panggang melimpah. Freshly baked daily di Kabupaten Bandung.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#EA580C] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#22C55E] flex items-center justify-center text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="#hero" className="hover:text-amber-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#katalog" className="hover:text-amber-400 transition-colors">
                  Varian Bolu
                </Link>
              </li>
              <li>
                <Link href="#keunggulan" className="hover:text-amber-400 transition-colors">
                  Kenapa Kami
                </Link>
              </li>
              <li>
                <Link href="#promo" className="hover:text-amber-400 transition-colors">
                  Promo Spesial
                </Link>
              </li>
              <li>
                <Link href="#testimoni" className="hover:text-amber-400 transition-colors">
                  Ulasan Pelanggan
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategori Menu */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Varian Unggulan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Bolu Keju Susu Original (Signature)</li>
              <li>Double Cheese Chiffon Melt</li>
              <li>Bolu Susu Pandan Keju Wangi</li>
              <li>Bolu Cokelat Keju Lumer</li>
              <li>Paket Duo Hemat Soreang</li>
              <li>Hampers Hantaran Spesial</li>
            </ul>
          </div>

          {/* Jam & Alamat Outlet */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Dapur & Outlet Soreang
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Raya Soreang - Banjaran No. 88, Soreang, Kabupaten Bandung, Jawa Barat 40911
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Setiap Hari: 07.00 - 21.00 WIB</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>0812-3456-7890 (Direct WA)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Bokis Bakery. All rights reserved. Khas Soreang, Kabupaten Bandung.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for Bolu Keju Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
