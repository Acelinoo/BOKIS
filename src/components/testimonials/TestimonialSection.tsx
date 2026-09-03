"use client";

import React from "react";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
    name: "Rina Melati",
    initial: "R",
    roleId: "Pelanggan Soreang",
    roleEn: "Customer, Soreang",
    quoteId:
      "Cita rasa yang konsisten, tekstur bolunya sangat lembut dan keju parutnya gurih melimpah. Bokis telah menjadi suguhan akhir pekan wajib keluarga kami di Bandung.",
    quoteEn:
      "Fresh, delicious, and always consistent. Bokis has become our family's favorite weekend treat in Bandung!",
  },
  {
    id: 2,
    name: "Budi Santoso",
    initial: "B",
    roleId: "Pelanggan Korporat",
    roleEn: "Corporate Client, Bandung",
    quoteId:
      "Pastry dan bolu chiffon susunya tiba dalam kondisi segar dan harum. Pelayanan pengiriman ke kantor kami di Soreang selalu tepat waktu dan terkemas sangat rapi.",
    quoteEn:
      "The pastries and chiffon cake arrived fresh and fragrant. The delivery service to our office in Soreang is always punctual and nicely packaged!",
  },
  {
    id: 3,
    name: "Dewi Anggraeni",
    initial: "D",
    roleId: "Pelanggan Hantaran",
    roleEn: "Hampers Customer, Bandung",
    quoteId:
      "Presentasi kotak hantaran sangat elegan, rasa kue bolunya lumer dan kejunya renyah. Seluruh tamu keluarga memberikan pujian hangat atas hidangan manis ini.",
    quoteEn:
      "The gift box presentation was elegant, and the chiffon cake melted in the mouth with crispy cheddar on top. All our guests loved it!",
  },
];

export default function TestimonialSection() {
  const { language, t } = useLanguage();

  return (
    <section id="testimoni" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header Row: Title Kiri & Contact Us Kanan Persis Gambar 2 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.testimonials.title}
        </h2>

        {/* Contact Us ↗ Button di Pojok Kanan Persis Gambar 2 */}
        <Link
          href="#kontak"
          className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-xl bg-[#291E16] text-white hover:bg-[#423125] text-xs sm:text-sm font-bold transition-all shadow-xs group"
        >
          <span>{t.testimonials.contactUs}</span>
          <div className="w-6 h-6 rounded-lg bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </div>

      {/* 3 Kartu Testimoni Berlatar Oranye Coral Persis Gambar 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIAL_ITEMS.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-[#F58A42] p-5 sm:p-6 shadow-md flex flex-col justify-between"
          >
            {/* Area Putih / Cream Bagian Atas Berisi Rating & Quote */}
            <div className="bg-[#FFFDF7] rounded-2xl p-5 sm:p-6 shadow-xs border border-amber-100 flex-1 flex flex-col justify-between">
              {/* 5 Bintang Oranye */}
              <div className="flex items-center gap-1 text-[#F58A42] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Teks */}
              <p className="text-xs sm:text-[13px] text-[#291E16] font-medium leading-relaxed italic">
                "{language === "id" ? item.quoteId : item.quoteEn}"
              </p>
            </div>

            {/* Area Bawah: Avatar Huruf Inisial & Nama Pelanggan Indonesia */}
            <div className="pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFDF7] text-[#291E16] font-heading font-black text-sm flex items-center justify-center ring-2 ring-white/80 shadow-xs uppercase shrink-0">
                {item.initial}
              </div>
              <div className="text-left">
                <h4 className="font-heading font-black text-sm uppercase text-[#291E16] leading-none">
                  {item.name}
                </h4>
                <p className="text-[11px] font-bold text-white/90 mt-1 leading-none">
                  {language === "id" ? item.roleId : item.roleEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
