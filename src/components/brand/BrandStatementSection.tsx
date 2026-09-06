"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function BrandStatementSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
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
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center overflow-hidden"
    >
      <p
        ref={textRef}
        className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] uppercase tracking-normal text-[#291E16] leading-relaxed sm:leading-snug"
      >
        {t.hero.brandStatement.pre}{" "}
        <span className="inline-block align-baseline mx-1 px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl bg-[#F58A42] text-white shadow-xs font-black text-lg sm:text-xl md:text-2xl lg:text-[30px]">
          {t.hero.brandStatement.tag}
        </span>
        {t.hero.brandStatement.mid}{" "}
        <span className="text-[#786C65]">
          {t.hero.brandStatement.body}
        </span>
      </p>
    </section>
  );
}
