"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

// Dynamic import dengan SSR false untuk WebGL Three.js Canvas
const Cake3DCanvas = dynamic(() => import("./Cake3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-pulse">
        <Image
          src="/images/products/bolu-keju-classic.jpg"
          alt="Bolu Keju Sabilulungan"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#D97706] bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
        <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping" />
        Memuat Studio 3D Bolu...
      </div>
    </div>
  ),
});

export default function Hero3DWrapper() {
  return (
    <div className="w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] relative">
      <Cake3DCanvas />
    </div>
  );
}
