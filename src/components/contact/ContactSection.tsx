"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBranch } from "@/context/BranchContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function ContactSection() {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".contact-heading-line", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".contact-image",
          {
            opacity: 0,
            scale: 0.94,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".contact-right",
          {
            opacity: 0,
            y: 35,
            duration: 0.75,
            ease: "back.out(1.2)",
          },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin ${branch.name}! 👋%0A%0ASaya ingin melakukan reservasi / pemesanan via website.%0A%0A*Cabang Tujuan:* ${encodeURIComponent(
      branch.name
    )}%0A*Nama:* ${encodeURIComponent(name)}%0A*No. WA:* ${encodeURIComponent(
      phone
    )}%0A*Email:* ${encodeURIComponent(
      email || "-"
    )}%0A*Pesan / Detail Kebutuhan:* ${encodeURIComponent(message)}%0A%0AMohon konfirmasinya ya Admin, terima kasih! 🙏`;

    window.open(`https://wa.me/${branch.whatsappAdmin}?text=${text}`, "_blank");
    setSent(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full"
    >
      {/* 2 Kolom Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Kolom Kiri: PESAN SEGAR + Info Outlet + Bread Basket Photo */}
        <div className="contact-left lg:col-span-6 space-y-5">
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-normal leading-[1.08] text-[#291E16]">
            <span className="contact-heading-line block">{t.contact.headingLine1}</span>
            <span className="contact-heading-line block">{t.contact.headingLine2}</span>
            <span className="contact-heading-line block">{t.contact.headingLine3}</span>
          </h2>

          {/* Bar Info Cabang & Tombol Lihat Lokasi */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#F1E5D1] shadow-2xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#F58A42] shrink-0 mt-0.5" />
              <div className="text-left">
                <div className="font-heading font-black text-xs sm:text-sm text-[#291E16]">{branch.name}</div>
                <div className="text-[11px] text-[#786C65] line-clamp-1">{branch.address}</div>
              </div>
            </div>
            <a
              href={branch.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#291E16] text-white hover:bg-[#F58A42] text-xs font-heading font-black transition-colors shrink-0 shadow-xs cursor-pointer group"
              title={`Buka Google Maps ${branch.name}`}
            >
              <span>Lihat Lokasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Foto Keranjang Roti & Bolu Artisan */}
          <div className="contact-image relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md group">
            <Image
              src="/images/brand/bread-basket-contact.jpg"
              alt="Artisan Bakery Basket Bokis"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Kolom Kanan: Card Oranye Formulir Pemesanan */}
        <div className="contact-right lg:col-span-6 bg-[#F58A42] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-lg text-[#291E16]">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#291E16] text-white text-[10px] font-heading font-black uppercase tracking-wider mb-2">
              {branch.badge}
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-normal text-[#291E16]">
              {t.contact.title}
            </h3>
          </div>

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
