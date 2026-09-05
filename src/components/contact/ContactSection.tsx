"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function ContactSection() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-left", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".contact-right", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 30,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin Bokis Soreang!%0A%0A*Nama:* ${encodeURIComponent(
      name
    )}%0A*No. WA:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(
      email
    )}%0A*Pesan:* ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* 2 Kolom Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Kolom Kiri: PESAN SEGAR + Bread Basket Photo */}
        <div className="contact-left lg:col-span-6 space-y-6">
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-normal leading-[1.08] text-[#291E16]">
            {t.contact.headingLine1} <br />
            {t.contact.headingLine2} <br />
            {t.contact.headingLine3}
          </h2>

          {/* Foto Keranjang Roti & Bolu Artisan */}
          <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md group">
            <Image
              src="/images/brand/bread-basket-contact.jpg"
              alt="Artisan Bakery Basket Bokis"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Kolom Kanan: Card Oranye Formulir Pemesanan */}
        <div className="contact-right lg:col-span-6 bg-[#F58A42] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-lg text-[#291E16]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-normal text-[#291E16] mb-6">
            {t.contact.title}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Name */}
            <div>
              <label className="block font-heading font-black text-[11px] uppercase tracking-wider text-[#291E16] mb-1">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF5EB] text-[#291E16] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#291E16] placeholder:text-[#786C65]/60 border border-[#EADBCC]"
              />
            </div>

            {/* Input Number */}
            <div>
              <label className="block font-heading font-black text-[11px] uppercase tracking-wider text-[#291E16] mb-1">
                {t.contact.numberLabel}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.contact.numberPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF5EB] text-[#291E16] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#291E16] placeholder:text-[#786C65]/60 border border-[#EADBCC]"
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block font-heading font-black text-[11px] uppercase tracking-wider text-[#291E16] mb-1">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF5EB] text-[#291E16] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#291E16] placeholder:text-[#786C65]/60 border border-[#EADBCC]"
              />
            </div>

            {/* Input Message */}
            <div>
              <label className="block font-heading font-black text-[11px] uppercase tracking-wider text-[#291E16] mb-1">
                {t.contact.messageLabel}
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF5EB] text-[#291E16] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#291E16] placeholder:text-[#786C65]/60 border border-[#EADBCC]"
              />
            </div>

            {/* Send Message Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-xl bg-[#FAF5EB] hover:bg-[#291E16] text-[#291E16] hover:text-white font-heading font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer group"
              >
                <span>{sent ? t.contact.sentButton : t.contact.sendButton}</span>
                <div className="w-7 h-7 rounded-lg bg-[#F58A42] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#291E16] transition-colors">
                  {sent ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
