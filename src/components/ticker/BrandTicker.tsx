"use client";

import React from "react";

export default function BrandTicker() {
  const items = [
    "100% Keju Cheddar Panggang",
    "Susu Murni Peternakan Segar",
    "Freshly Baked Daily dari Soreang",
    "Pengiriman Instant & Sameday Bandung Raya",
    "Tanpa Pengawet Buatan",
    "Siap untuk Hampers & Hantaran",
  ];

  return (
    <div className="w-full bg-[#FFF8EE] border-y border-[#F3E8D8] py-4 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#231815]">
              {item}
            </span>
            <span className="text-[#EA580C] font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
