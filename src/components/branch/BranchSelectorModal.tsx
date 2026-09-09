"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, ArrowRight, Check, X } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import { BRANCH_LIST, BranchId } from "@/lib/branches";

export default function BranchSelectorModal() {
  const { activeBranch, setBranch, isSelectorOpen, closeSelector, isInitialized } =
    useBranch();
  const [selectedId, setSelectedId] = useState<BranchId>(activeBranch);
  const [hasExistingChoice, setHasExistingChoice] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bokis_branch");
      setHasExistingChoice(Boolean(saved));
    } catch (e) {
      setHasExistingChoice(false);
    }
  }, [isSelectorOpen]);

  useEffect(() => {
    setSelectedId(activeBranch);
  }, [activeBranch, isSelectorOpen]);

  // Hindari flicker sebelum hydration/initialization selesai
  if (!isInitialized || !isSelectorOpen) return null;

  const handleSelectAndEnter = (branchId: BranchId) => {
    setBranch(branchId);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop Gelap Elegan */}
      <div
        className="fixed inset-0 bg-[#18120E]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={() => {
          if (hasExistingChoice) closeSelector();
        }}
      />

      {/* Container Modal */}
      <div className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-3xl sm:rounded-[2rem] shadow-2xl border border-[#F1E5D1] p-6 sm:p-10 my-auto z-10 text-[#291E16] animate-in zoom-in-95 fade-in duration-300">
        {/* Tombol Tutup (Hanya jika user sudah pernah memilih cabang sebelumnya) */}
        {hasExistingChoice && (
          <button
            onClick={closeSelector}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-xl text-neutral-400 hover:text-[#291E16] hover:bg-[#FAF5EB] transition-colors cursor-pointer"
            aria-label="Tutup Pilihan Cabang"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Header Modal */}
        <div className="text-center space-y-3 mb-8">
          {/* Logo BOKIS */}
          <div className="inline-flex items-center justify-center bg-[#FAF5EB] px-4 py-2 rounded-2xl border border-[#F1E5D1] shadow-xs">
            <div className="relative h-10 w-28 sm:h-11 sm:w-32">
              <Image
                src="/images/brand/logo-bokis.png"
                alt="BOKIS - Bolu Kiju Soreang"
                fill
                priority
                sizes="128px"
                className="object-contain object-center"
              />
            </div>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-normal text-[#291E16] pt-1">
            Selamat Datang di BOKIS
          </h2>
          <p className="text-xs sm:text-sm text-[#786C65] max-w-md mx-auto leading-relaxed">
            Silakan pilih cabang BOKIS yang ingin kamu kunjungi untuk melihat ketersediaan menu, ulasan, dan layanan terdekat.
          </p>
        </div>

        {/* Daftar 2 Pilihan Cabang */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
          {BRANCH_LIST.map((branch) => {
            const isSelected = selectedId === branch.id;
            const isCurrentActive = activeBranch === branch.id && hasExistingChoice;

            return (
              <div
                key={branch.id}
                onClick={() => setSelectedId(branch.id)}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between border-2 text-left group ${
                  isSelected
                    ? "bg-[#FFF8EE] border-[#F58A42] shadow-md ring-2 ring-[#F58A42]/20"
                    : "bg-white border-[#EADBCC] hover:border-[#F58A42]/50 hover:bg-[#FAF5EB] shadow-xs"
                }`}
              >
                {/* Status Indicator / Checkbox Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider ${
                      isSelected
                        ? "bg-[#F58A42] text-white"
                        : "bg-[#FAF5EB] text-[#786C65]"
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{branch.badge}</span>
                  </span>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? "bg-[#291E16] border-[#291E16] text-white"
                        : "border-[#D6C5B5] bg-white text-transparent"
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>

                {/* Nama & Info Cabang */}
                <div className="space-y-2 mb-4">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-[#291E16] group-hover:text-[#F58A42] transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-[#786C65] leading-relaxed line-clamp-2">
                    {branch.address}
                  </p>
                </div>

                {/* Jam Operasional & Label Aktif */}
                <div className="pt-3 border-t border-[#F1E5D1] flex items-center justify-between text-[11px] text-[#786C65]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F58A42]" />
                    <span>07.00 - 21.00 WIB</span>
                  </div>
                  {isCurrentActive && (
                    <span className="text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-md">
                      Aktif Sekarang
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tombol Aksi Konfirmasi */}
        <div className="space-y-2.5">
          <button
            onClick={() => handleSelectAndEnter(selectedId)}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#291E16] text-white hover:bg-[#F58A42] font-heading font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Masuk ke {BRANCH_LIST.find((b) => b.id === selectedId)?.name || "Cabang Terpilih"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-[11px] text-[#786C65]">
            *Anda dapat mengubah pilihan cabang kapan saja melalui menu di bagian atas website.
          </p>
        </div>
      </div>
    </div>
  );
}
