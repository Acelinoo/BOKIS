"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface TestimonialItem {
  id: number;
  name: string;
  initial: string;
  roleId: string;
  roleEn: string;
  quoteId: string;
  quoteEn: string;
}

const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 1,
    name: "Ibu Rina Melati",
    initial: "R",
    roleId: "Pelanggan Soreang",
    roleEn: "Customer, Soreang",
    quoteId:
      "Bokis Original rasanya sangat konsisten. Tekstur bolu begitu lembut dan cita rasa keju gurihnya terasa alami di setiap potongan.",
    quoteEn:
      "The taste is consistently delightful. The cheese chiffon is exceptionally soft with authentic savory cheese in every slice.",
  },
  {
    id: 2,
    name: "Bapak Dedi Prasetyo",
    initial: "D",
    roleId: "Pelanggan Kutawaringin",
    roleEn: "Customer, Kutawaringin",
    quoteId:
      "Bokis Kiju Spesial dengan potongan keju di dalamnya sangat istimewa. Pesanan via WhatsApp ditanggapi cepat dan tiba tepat waktu.",
    quoteEn:
      "The special cheese cake with embedded cheese cubes is outstanding. Ordering via WhatsApp was fast and delivery was punctual.",
  },
  {
    id: 3,
    name: "Ibu Maya Hartati",
    initial: "M",
    roleId: "Pelanggan Buahbatu",
    roleEn: "Customer, Buahbatu",
    quoteId:
      "Chiramisu Triple Choco dan Original Coffee manisnya pas, tidak berlebihan, dan krim kejunya gurih lembut. Sangat direkomendasikan.",
    quoteEn:
      "Chiramisu Triple Choco and Coffee have the perfect level of sweetness, balanced by rich velvety cream cheese.",
  },
  {
    id: 4,
    name: "Bapak Hendra Kurnia",
    initial: "H",
    roleId: "Pelanggan Katapang",
    roleEn: "Customer, Katapang",
    quoteId:
      "Kiju Pandan memiliki aroma pandan yang wangi alami dan menyegarkan. Kemasannya rapi dan sangat cocok untuk oleh-oleh kerabat.",
    quoteEn:
      "The Pandan Cheese has a refreshing natural pandan aroma. Nicely packaged and ideal for gifts and family gatherings.",
  },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?hl=id-ID&gl=id&q=Dapurnya+via+Jl.+Raya+Gading+Tutuka+Soreang&ludocid=3309489240890674678&lsig=AB86z5V3R4n_example#lrd=0x2e68ed00587c25d7:0x2deda361c80e8df6,3";

export default function TestimonialSection() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 35,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.65,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="testimoni"
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full"
    >
      {/* Top Header Row: Title Kiri & Tombol Berikan Ulasan Kanan */}
      <div className="testimonial-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.testimonials.title}
        </h2>

        {/* Tombol Berikan Ulasan Google Review */}
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-xl bg-[#291E16] text-white hover:bg-[#F58A42] text-xs sm:text-sm font-heading font-black transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 group cursor-pointer"
        >
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>{t.testimonials.giveReview}</span>
          </div>
          <div className="w-6 h-6 rounded-lg bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </a>
      </div>

      {/* Kartu Testimoni: 2 CARD DI MODE MOBILE & 4 CARD DI DESKTOP */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {TESTIMONIAL_ITEMS.map((item) => (
          <div
            key={item.id}
            className="testimonial-card rounded-2xl sm:rounded-3xl bg-[#F58A42] p-3 sm:p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            {/* Area Putih / Cream Bagian Atas Berisi Rating & Quote */}
            <div className="bg-[#FFFDF7] rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xs border border-amber-100 flex-1 flex flex-col justify-between">
              {/* 5 Bintang Oranye */}
              <div className="flex items-center gap-0.5 sm:gap-1 text-[#F58A42] mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                ))}
              </div>

              {/* Quote Teks */}
              <p className="text-[10px] sm:text-xs md:text-[13px] text-[#291E16] font-medium leading-relaxed italic line-clamp-4 sm:line-clamp-none">
                "{language === "id" ? item.quoteId : item.quoteEn}"
              </p>
            </div>

            {/* Area Bawah: Avatar Inisial & Nama Pelanggan */}
            <div className="pt-2.5 sm:pt-3.5 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FFFDF7] text-[#291E16] font-heading font-black text-xs sm:text-sm flex items-center justify-center ring-2 ring-white/80 shadow-xs uppercase shrink-0">
                {item.initial}
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="font-heading font-black text-[11px] sm:text-xs md:text-sm uppercase text-[#291E16] leading-tight truncate">
                  {item.name}
                </h4>
                <p className="text-[9px] sm:text-[11px] font-bold text-white/90 mt-0.5 leading-tight truncate">
                  {language === "id" ? item.roleId : item.roleEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Callout Card: Ajak Pelanggan Memberi Ulasan Google */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FFFDF7] border border-[#EADBCC] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="font-heading font-black text-xs text-[#291E16] ml-1.5">
              5.0 / 5.0 Google Reviews
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#786C65] font-medium max-w-xl">
            {t.testimonials.reviewCallout}
          </p>
        </div>

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#F58A42] hover:bg-[#291E16] text-white font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          <span>{t.testimonials.giveReview}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
