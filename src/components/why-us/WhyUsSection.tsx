"use client";

import React from "react";
import Image from "next/image";
import { Wheat, Clock, Heart, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container Besar Kuning Amber Persis Gambar 1 */}
      <div className="relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#F7A633] pt-12 pb-6 px-6 sm:px-10 md:px-14 shadow-lg overflow-hidden">
        
        {/* Title: WHY US (Chunky Typography Persis Gambar 1) */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
            {t.whyUs.title}
          </h2>
        </div>

        {/* Layout Tengah: 2 Card Kiri + Chef Tengah + 2 Card Kanan (Persis Gambar 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* 2 Card Kiri */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
            {/* Card 1: FRESH DAILY */}
            <div className="bg-[#FFFDF7] rounded-2xl p-5 shadow-sm border border-amber-100/60 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#F58A42] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[#291E16]">
                  {t.whyUs.features[0].title}
                </h3>
                <p className="text-xs text-[#786C65] mt-1 leading-relaxed font-medium">
                  {t.whyUs.features[0].description}
                </p>
              </div>
            </div>

            {/* Card 2: CRAFTED WITH CARE */}
            <div className="bg-[#FFFDF7] rounded-2xl p-5 shadow-sm border border-amber-100/60 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#F58A42] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[#291E16]">
                  {t.whyUs.features[1].title}
                </h3>
                <p className="text-xs text-[#786C65] mt-1 leading-relaxed font-medium">
                  {t.whyUs.features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Tengah: Foto Chef Baker Tersenyum dengan Croissant (Persis Gambar 1) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-[420px]">
              <Image
                src="/images/brand/baker-why-us.jpg"
                alt="Bokis Master Baker"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* 2 Card Kanan */}
          <div className="lg:col-span-4 space-y-5 order-3">
            {/* Card 3: PREMIUM INGREDIENTS (Menggunakan Wheat Icon, bukan Sparkles!) */}
            <div className="bg-[#FFFDF7] rounded-2xl p-5 shadow-sm border border-amber-100/60 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#F58A42] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Wheat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[#291E16]">
                  {t.whyUs.features[2].title}
                </h3>
                <p className="text-xs text-[#786C65] mt-1 leading-relaxed font-medium">
                  {t.whyUs.features[2].description}
                </p>
              </div>
            </div>

            {/* Card 4: FAST DELIVERY */}
            <div className="bg-[#FFFDF7] rounded-2xl p-5 shadow-sm border border-amber-100/60 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#F58A42] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[#291E16]">
                  {t.whyUs.features[3].title}
                </h3>
                <p className="text-xs text-[#786C65] mt-1 leading-relaxed font-medium">
                  {t.whyUs.features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
