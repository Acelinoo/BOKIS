"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function BrandStatementSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      <div
        ref={contentRef}
        className="rounded-3xl sm:rounded-[2.5rem] bg-[#FFFDF7] border border-[#F0E6D8] p-6 sm:p-10 md:p-14 shadow-sm text-center relative overflow-hidden"
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#F58A42]/5 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#F7A633]/5 blur-2xl pointer-events-none" />

        <p className="font-heading font-black text-base sm:text-2xl md:text-3xl lg:text-[32px] uppercase tracking-normal text-[#291E16] leading-relaxed sm:leading-snug max-w-5xl mx-auto">
          {t.hero.brandStatement.pre}{" "}
          <span className="inline-block align-baseline mx-1 px-3 sm:px-4 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-[#F58A42] text-white shadow-xs font-black text-sm sm:text-xl md:text-2xl lg:text-[28px]">
            {t.hero.brandStatement.tag}
          </span>
          {t.hero.brandStatement.mid}{" "}
          <span className="text-[#786C65]">
            {t.hero.brandStatement.body}
          </span>
        </p>
      </div>
    </section>
  );
}
