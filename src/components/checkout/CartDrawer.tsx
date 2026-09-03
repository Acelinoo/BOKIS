"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import confetti from "canvas-confetti";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [kecamatan, setKecamatan] = useState("Soreang");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCheckoutWA = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);

    // Kirim log ke API Prisma (Background save)
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerPhone: phone,
          deliveryAddress: address,
          notes: `Kecamatan: ${kecamatan}. Catatan: ${notes || "-"}`,
          items: items.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
            price: i.product.price,
          })),
        }),
      });
    } catch (err) {
      console.warn("Prisma background logging fallback", err);
    }

    // Efek Konfeti Selebrasi
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // ignore
    }

    // Format Pesan WhatsApp Terstruktur Formal Ala Toko Kue Profesional
    const itemDetails = items
      .map(
        (item, index) =>
          `${index + 1}. *${item.product.name}*%0A   Jumlah: ${item.quantity} box x Rp ${item.product.price.toLocaleString("id-ID")}%0A   Subtotal: Rp ${(item.product.price * item.quantity).toLocaleString("id-ID")}`
      )
      .join("%0A%0A");

    const message = `Halo Admin Bokis (Bolu Kiju Soreang)! 👋%0A%0ASaya ingin memesan bolu fresh oven dengan rincian berikut:%0A%0A*--- RINCIAN PESANAN ---*%0A${itemDetails}%0A%0A*--- TOTAL ESTIMASI ---*%0A*Total Produk: Rp ${totalPrice.toLocaleString("id-ID")}*%0A*(Belum termasuk ongkir kurir instant/sameday)*%0A%0A*--- DATA PENERIMA ---*%0A• *Nama:* ${encodeURIComponent(name)}%0A• *No. WhatsApp:* ${encodeURIComponent(phone)}%0A• *Wilayah:* ${encodeURIComponent(kecamatan)} (Kab. Bandung)%0A• *Alamat Lengkap:* ${encodeURIComponent(address)}%0A• *Catatan Tambahan:* ${encodeURIComponent(notes || "-")}%0A%0AMohon konfirmasi ketersediaan stok fresh dan estimasi waktu pengirimannya ya Admin, hatur nuhun! 🙏`;

    const waAdmin = process.env.NEXT_PUBLIC_WA_ADMIN || "6281234567890";
    const waUrl = `https://wa.me/${waAdmin}?text=${message}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSubmitting(false);
      clearCart();
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF7] shadow-2xl flex flex-col border-l border-[#F3E8D8]">
          
          {/* Header Keranjang */}
          <div className="p-5 bg-[#FFF8EE] border-b border-[#F3E8D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-24">
                <Image
                  src="/images/brand/logo-bokis.png"
                  alt="BOKIS Logo"
                  fill
                  sizes="96px"
                  className="object-contain object-left"
                />
              </div>
              <div className="border-l border-[#EADBCC] pl-2.5">
                <h3 className="font-heading font-black text-xs uppercase tracking-tight text-[#291E16]">
                  {t.cart.title}
                </h3>
                <p className="text-[10px] text-[#786C65]">
                  {t.cart.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-[#231815] hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: List Items & Form */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FFF8EE] text-[#F59E0B] mx-auto flex items-center justify-center border border-[#F3E8D8]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-heading font-black text-base text-[#231815]">
                  {t.cart.emptyTitle}
                </h4>
                <p className="text-xs text-[#786C65] max-w-xs mx-auto">
                  {t.cart.emptyDesc}
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-[#291E16] text-white text-xs font-heading font-bold hover:bg-[#F58A42] transition-colors cursor-pointer"
                >
                  {t.cart.exploreMenu}
                </button>
              </div>
            ) : (
              <>
                {/* Daftar Item dalam Keranjang */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-[#F3E8D8]">
                    <span className="text-[11px] font-heading font-black uppercase tracking-wider text-[#786C65]">
                      {t.cart.itemsCount} ({items.length})
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-[10px] text-red-500 hover:underline font-bold cursor-pointer"
                    >
                      Kosongkan
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-white rounded-2xl border border-[#F3E8D8] flex items-center gap-3 shadow-2xs"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#FAF5EB] p-1 shrink-0 relative overflow-hidden flex items-center justify-center border border-[#EADBCC]">
                        <Image
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-black text-xs text-[#291E16] truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] font-bold text-[#F58A42]">
                          Rp {item.product.price.toLocaleString("id-ID")}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-5 h-5 rounded-md bg-[#FAF5EB] text-[#291E16] flex items-center justify-center hover:bg-[#EADBCC] text-xs font-bold cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#291E16] w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-5 h-5 rounded-md bg-[#FAF5EB] text-[#291E16] flex items-center justify-center hover:bg-[#EADBCC] text-xs font-bold cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Form Data Pengiriman Langsung WA */}
                <form id="checkout-form" onSubmit={handleCheckoutWA} className="space-y-3 pt-2">
                  <span className="text-[11px] font-heading font-black uppercase tracking-wider text-[#786C65] block">
                    {t.cart.deliveryDetails}
                  </span>

                  <div>
                    <label className="block text-[11px] font-bold text-[#231815] mb-1">
                      {t.cart.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.cart.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D8] text-xs font-medium text-[#231815] focus:outline-none focus:border-[#F58A42]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#231815] mb-1">
                      {t.cart.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.cart.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D8] text-xs font-medium text-[#231815] focus:outline-none focus:border-[#F58A42]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#231815] mb-1">
                      {t.cart.districtLabel}
                    </label>
                    <select
                      value={kecamatan}
                      onChange={(e) => setKecamatan(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D8] text-xs font-medium text-[#231815] focus:outline-none focus:border-[#F58A42]"
                    >
                      <option value="Soreang">Soreang (Kab. Bandung)</option>
                      <option value="Kutawaringin">Kutawaringin</option>
                      <option value="Katapang">Katapang</option>
                      <option value="Banjaran">Banjaran</option>
                      <option value="Baleendah">Baleendah</option>
                      <option value="Dayeuhkolot">Dayeuhkolot</option>
                      <option value="Margahayu">Margahayu</option>
                      <option value="Ciwidey / Pasirjambu">Ciwidey / Pasirjambu</option>
                      <option value="Kota Bandung">Kota Bandung</option>
                      <option value="Cimahi">Kota Cimahi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#231815] mb-1">
                      {t.cart.addressLabel}
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={t.cart.addressPlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#F3E8D8] text-xs font-medium text-[#231815] focus:outline-none focus:border-[#F58A42]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#231815] mb-1">
                      {t.cart.notesLabel}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t.cart.notesPlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#F3E8D8] text-xs font-medium text-[#231815] focus:outline-none focus:border-[#F58A42]"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-5 bg-[#FFF8EE] border-t border-[#F3E8D8] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#786C65]">
                <span>{t.cart.subtotal}</span>
                <span className="font-bold text-[#231815]">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#786C65]">
                <span>{t.cart.deliveryFee}</span>
                <span className="text-[11px] italic text-[#F58A42] font-medium">
                  {t.cart.deliveryFeeNote}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-heading font-black text-[#291E16] pt-1 border-t border-[#F3E8D8]">
                <span>{t.cart.total}</span>
                <span className="text-base text-[#F58A42]">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-[#291E16] hover:bg-[#F58A42] text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 animate-spin" />
                    <span>{t.cart.submittingWa}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.cart.submitWa}</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-[#786C65]">
                {t.cart.footerNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
