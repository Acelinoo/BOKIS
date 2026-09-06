"use client";

import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

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
      "Benar 100%. Dapur kami di Soreang mulai memanggang setiap pagi menggunakan bahan-bahan segar berkualitas, sehingga produk tiba dalam kondisi paling lembut dan harum.",
    answerEn:
      "100% yes! Our bakery in Soreang bakes every morning starting at 05:00 AM so your treats arrive at your doorstep in their freshest and softest state.",
  },
  {
    questionId: "BAGAIMANA DAYA TAHAN & CARA PENYIMPANAN BOLU BOKIS?",
    questionEn: "WHAT IS THE SHELF LIFE AND STORAGE INSTRUCTION?",
    answerId:
      "Bolu keju kami bertahan 3–4 hari pada suhu ruang sejuk dan hingga 7–10 hari di dalam lemari pendingin (chiller). Seluruh produk dibuat tanpa bahan pengawet sintetis.",
    answerEn:
      "Our artisan chiffon cakes stay fresh for 3–4 days at ambient room temperature, and 7–10 days in the refrigerator. We strictly use no artificial preservatives.",
  },
];

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".faq-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        clearProps: "all",
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto overflow-hidden w-full"
    >
      {/* Title: PERTANYAAN UMUM */}
      <div className="faq-title text-center mb-10">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.faq.title}
        </h2>
      </div>

      {/* 5 Pill Accordions */}
      <div className="space-y-3 sm:space-y-3.5">
        {BEHANCE_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const question = language === "id" ? faq.questionId : faq.questionEn;
          const answer = language === "id" ? faq.answerId : faq.answerEn;

          return (
            <div
              key={idx}
              className={`faq-item rounded-2xl sm:rounded-3xl border shadow-xs overflow-hidden transition-all duration-200 ${
                isOpen
                  ? "bg-[#FFFDF7] border-[#F7A334]/60 shadow-sm"
                  : "bg-[#FFFDF7] border-[#EADBCC] hover:border-[#F7A334]/40"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-1.5 h-4 sm:h-5 rounded-full shrink-0 transition-colors ${
                      isOpen ? "bg-[#F7A334]" : "bg-[#F58A42]"
                    }`}
                  />
                  <span className="font-heading font-black text-xs sm:text-sm md:text-base text-[#291E16] uppercase tracking-wide">
                    {question}
                  </span>
                </div>

                {/* Tombol Bulat Oranye + / - */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F58A42] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-7 pb-5 pt-1 pl-9 sm:pl-11 text-xs sm:text-sm text-[#3D2E24] leading-relaxed font-medium animate-in fade-in duration-200">
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
