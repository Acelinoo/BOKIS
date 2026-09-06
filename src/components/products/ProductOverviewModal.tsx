"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, Plus, Minus, ShoppingBag, Send, Check, ShieldCheck, Clock, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export interface ModalProduct {
  id: string;
  name: string;
  tag: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  description?: string;
  ingredients?: string[];
  image: string;
}

interface ProductOverviewModalProps {
  product: ModalProduct | null;
  onClose: () => void;
}

export default function ProductOverviewModal({
  product,
  onClose,
}: ProductOverviewModalProps) {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        slug: product.name.toLowerCase().replace(/\s+/g, "-"),
        name: product.name.replace(/-/g, " "),
        category: product.tag,
        categorySlug: "overview",
        price: product.price,
        rating: product.rating || 4.9,
        reviewCount: product.reviewCount || 180,
        description: product.description || "Freshly baked treat khas Bokis Soreang.",
        ingredients: product.ingredients || ["Susu Murni Segar", "Keju Cheddar", "Telur Segar", "Mentega"],
        imageUrl: product.image,
      },
      quantity
    );
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const handleDirectWA = () => {
    const message =
      language === "id"
        ? `Halo Admin Bokis Soreang, saya tertarik memesan:%0A• ${quantity}x ${product.name.replace(/-/g, " ")} (Total Rp ${(product.price * quantity).toLocaleString("id-ID")})%0AMohon info ketersediaan stok fresh hari ini, terima kasih!`
        : `Hello Admin Bokis Soreang, I would like to order:%0A• ${quantity}x ${product.name.replace(/-/g, " ")} (Total Rp ${(product.price * quantity).toLocaleString("id-ID")})%0APlease let me know about today's fresh stock availability, thank you!`;
    const waUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-[2rem] sm:rounded-[2.5rem] border border-[#EADBCC] shadow-2xl p-6 sm:p-8 text-left overflow-hidden transform transition-all">
          
          {/* Tombol Tutup Silang */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-[#FAF5EB] hover:bg-[#291E16] hover:text-white text-[#291E16] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            aria-label={t.modal.close}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Foto Produk Kiri */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square max-h-72 rounded-3xl overflow-hidden bg-[#FAF5EB] border border-[#EADBCC] flex items-center justify-center shadow-xs">
                <div className="absolute top-3 left-3 z-10 bg-[#F58A42] text-white font-heading font-black text-[11px] px-3 py-1 rounded-full shadow-xs">
                  {product.tag}
                </div>

                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Jaminan Kualitas */}
              <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-[#786C65] bg-[#FAF5EB] px-3 py-1.5 rounded-full border border-[#EADBCC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>100% Halal & Fresh Daily</span>
              </div>
            </div>

            {/* Keterangan & Detail Produk Kanan */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#F58A42]">
                  {t.modal.quickView}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#291E16] mt-0.5">
                  {product.name.replace(/-/g, " ")}
                </h3>

                {/* Rating & Review */}
                <div className="flex items-center gap-1.5 mt-1 text-xs text-[#F58A42] font-bold">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[#291E16]">{product.rating || 4.9}</span>
                  <span className="text-[#786C65] font-normal">
                    ({product.reviewCount || 180} {language === "id" ? "Ulasan" : "Reviews"})
                  </span>
                </div>
              </div>

              {/* Harga */}
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-black text-2xl sm:text-3xl text-[#291E16]">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )}
              </div>

              {/* Karakter Rasa & Tekstur */}
              <div className="p-3.5 rounded-2xl bg-[#FAF5EB] border border-[#EADBCC] text-xs text-[#291E16] space-y-1">
                <div className="flex items-center gap-1.5 font-heading font-black text-[11px] text-[#F58A42] uppercase">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>{t.modal.tasteProfile}</span>
                </div>
                <p className="text-[11px] text-[#786C65] leading-relaxed font-medium">
                  {product.description || t.modal.tasteDesc}
                </p>
              </div>

              {/* Petunjuk Penyimpanan */}
              <div className="flex items-start gap-2 text-[11px] text-[#786C65]">
                <Clock className="w-3.5 h-3.5 text-[#F58A42] shrink-0 mt-0.5" />
                <span>{t.modal.shelfLifeDesc}</span>
              </div>

              {/* Quantity Counter & Actions */}
              <div className="pt-2 space-y-2.5">
                {/* Counter + Tambah ke Keranjang */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <div className="flex items-center justify-between border border-[#EADBCC] bg-[#FAF5EB] rounded-xl p-1 w-full sm:w-28 shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#291E16] hover:bg-[#F58A42] hover:text-white transition-colors cursor-pointer shadow-2xs"
                      aria-label="Kurangi jumlah"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-heading font-black text-sm w-6 text-center text-[#291E16]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#291E16] hover:bg-[#F58A42] hover:text-white transition-colors cursor-pointer shadow-2xs"
                      aria-label="Tambah jumlah"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Tombol Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#291E16] hover:bg-[#F58A42] text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>{language === "id" ? "Berhasil Masuk!" : "Added to Cart!"}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>{t.modal.addToCart}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tombol Pesan via WhatsApp Langsung dengan Teks & Ikon Terbaca Jelas */}
                <button
                  onClick={handleDirectWA}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#22C55E]/10 hover:bg-[#22C55E] text-[#15803d] hover:text-white border border-[#22C55E]/30 font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-2xs group"
                >
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  <span>{t.modal.orderWhatsApp}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
