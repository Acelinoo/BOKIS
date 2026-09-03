"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  questionId: string;
  questionEn: string;
  answerId: string;
  answerEn: string;
}

const BEHANCE_FAQS: FAQItem[] = [
  {
    questionId: "APAKAH BOKIS MENYEDIAKAN KUSTOMISASI DESAIN KUE?",
    questionEn: "DO YOU OFFER CUSTOM CAKE DESIGNS?",
    answerId:
      "Tentu saja. Kami melayani permintaan kustomisasi variasi keju, tingkat ketebalan lelehan keju panggang, potongan kue, hingga kartu ucapan hantaran khusus untuk perayaan ulang tahun, syukuran, atau hantaran pernikahan.",
    answerEn:
      "Yes, we do! You can request custom toppings, cheese density, custom slicing, and bespoke greeting cards for birthdays, family gatherings, or weddings.",
  },
  {
    questionId: "BERAPA LAMA SEBAIKNYA SAYA MEMESAN SEBELUM ACARA?",
    questionEn: "HOW FAR IN ADVANCE SHOULD I PLACE AN ORDER?",
    answerId:
      "Untuk pesanan reguler, Anda dapat memesan langsung pada hari yang sama. Untuk kebutuhan pesta atau pesanan di atas 15 kotak, kami sarankan memesan 24–48 jam sebelumnya agar kami dapat memanggangnya segar di pagi hari.",
    answerEn:
      "For standard orders, same-day delivery is available. For custom cakes and large party orders (above 15 boxes), we recommend placing your order at least 24–48 hours in advance to ensure fresh morning baking.",
  },
  {
    questionId: "APAKAH TERSEDIA PENGIRIMAN LANGSUNG KE ALAMAT RUMAH?",
    questionEn: "DO YOU PROVIDE HOME DELIVERY?",
    answerId:
      "Ya, kami menyediakan kurir kilat Instant (Gosend/GrabExpress) dan Sameday dengan jangkauan mencakup wilayah Soreang, Kutawaringin, Katapang, Banjaran, Baleendah, Kota Bandung, hingga Cimahi.",
    answerEn:
      "Yes, we provide instant delivery via Gosend / GrabExpress and sameday delivery across Soreang, Bandung Selatan, Bandung Kota, and Cimahi.",
  },
  {
    questionId: "APAKAH PRODUK DIPANGGANG SEGAR SETIAP HARI?",
    questionEn: "ARE YOUR PRODUCTS BAKED FRESH DAILY?",
    answerId:
      "Benar 100%. Dapur kami di Soreang mulai memanggang setiap pukul 05.00 WIB setiap pagi menggunakan 100% susu murni segar dan keju berkualitas, sehingga produk tiba dalam kondisi paling lembut dan harum.",
    answerEn:
      "100% yes! Our bakery in Soreang bakes every morning starting at 05:00 AM so your treats arrive at your doorstep in their freshest, softest, and most fragrant state.",
  },
  {
    questionId: "BAGAIMANA DAYA TAHAN & CARA PENYIMPANAN BOLU BOKIS?",
    questionEn: "CAN I CUSTOMIZE THE FLAVOR AND SIZE OF MY CAKE?",
    answerId:
      "Bolu chiffon keju kami bertahan 3–4 hari pada suhu ruang sejuk dan hingga 7–10 hari di dalam lemari pendingin (chiller). Kami tidak menggunakan bahan pengawet sintetis.",
    answerEn:
      "Our artisan chiffon cakes stay fresh for 3–4 days at ambient room temperature, and 7–10 days in the refrigerator. We strictly use no artificial preservatives.",
  },
];

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default terbuka index 1 seperti di Behance

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Title: FREQUENTLY ASKED QUESTION / PERTANYAAN UMUM */}
      <div className="text-center mb-10">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.faq.title}
        </h2>
      </div>

      {/* 5 Pill Accordions Persis Gambar 3 */}
      <div className="space-y-3 sm:space-y-3.5">
        {BEHANCE_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const question = language === "id" ? faq.questionId : faq.questionEn;
          const answer = language === "id" ? faq.answerId : faq.answerEn;

          return (
            <div
              key={idx}
              className="rounded-2xl sm:rounded-3xl bg-[#FFFDF7] border border-[#EADBCC] shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-4 sm:h-5 rounded-full bg-[#F58A42] shrink-0" />
                  <span className="font-heading font-black text-xs sm:text-sm md:text-base text-[#291E16] uppercase tracking-wide">
                    {question}
                  </span>
                </div>

                {/* Tombol Bulat Oranye + / - Persis Gambar 3 */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F58A42] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-7 pb-5 pt-1 pl-10 sm:pl-12 text-xs sm:text-sm text-[#786C65] leading-relaxed font-medium">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
