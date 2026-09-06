"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS, ProductItem, getLocalizedProduct } from "@/lib/products";
import ProductOverviewModal, { ModalProduct } from "./ProductOverviewModal";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface ProductCatalogProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function ProductCatalog({
  selectedCategory,
  onCategoryChange,
}: ProductCatalogProps) {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(selectedCategory || "all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [overviewProduct, setOverviewProduct] = useState<ModalProduct | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onCategoryChange) {
      onCategoryChange(tabId);
    }
  };

  const TABS = [
    { id: "all", label: t.treats.tabs.all },
    { id: "top-picks", label: t.treats.tabs.topPicks },
    { id: "bolu-kiju", label: t.treats.tabs.boluKiju },
    { id: "dessert-cube", label: t.treats.tabs.dessertCube },
    { id: "minuman", label: t.treats.tabs.minuman },
  ];

  const filteredItems = PRODUCTS.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "top-picks") {
      return item.isPopular;
    }
    if (activeTab === "chiramisu" || activeTab === "dessert-cube") {
      return item.categorySlug === "dessert-cube" || item.categorySlug === "chiramisu";
    }
    return item.categorySlug === activeTab;
  });

  // ScrollTrigger Initial Entrance
  useGSAP(
    () => {
      gsap.from(".catalog-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  // Stagger animation when changing category tab or initial render
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".product-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
      }
    }
  }, [activeTab]);

  const handleOpenOverview = (rawItem: ProductItem) => {
    const item = getLocalizedProduct(rawItem, language);
    setOverviewProduct({
      id: item.id,
      name: item.name,
      tag: item.category,
      price: item.price,
      originalPrice: item.originalPrice,
      rating: item.rating,
      reviewCount: item.reviewCount,
      description: item.description,
      ingredients: item.ingredients,
      image: item.imageUrl,
    });
  };

  const handleAddToCart = (e: React.MouseEvent, item: ProductItem) => {
    e.stopPropagation();
    addToCart(item, 1);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section
      id="katalog"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full"
    >
      {/* Title & Filter Tabs */}
      <div className="catalog-header text-center mb-8">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.treats.title}
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#F7A633] text-[#291E16] shadow-sm scale-105"
                    : "bg-[#EDE1CD] text-[#786C65] hover:bg-[#E3D4BC] hover:text-[#291E16]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Menu: 2 CARD DI MODE MOBILE & 4 CARD DI DESKTOP */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8"
      >
        {filteredItems.map((rawItem) => {
          const item = getLocalizedProduct(rawItem, language);
          const isAdded = addedId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleOpenOverview(item)}
              className="product-card group rounded-2xl sm:rounded-3xl bg-[#FAF5EB] border border-[#EADBCC] p-2.5 sm:p-3.5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              title={t.treats.quickView}
            >
              {/* Foto Produk dengan Tag Harga & Kategori */}
              <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white/70 flex items-center justify-center mb-2 sm:mb-3">
                
                {/* Price Tag Kiri Atas */}
                <div className="absolute top-2 left-2 z-10 bg-[#FFFDF7]/95 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg shadow-xs border border-amber-100">
                  <span className="font-heading font-black text-[11px] sm:text-xs text-[#291E16] whitespace-nowrap">
                    Rp {(item.price / 1000).toLocaleString("id-ID")}K
                  </span>
                </div>

                {/* Badge Tag Kanan Atas jika ada */}
                {item.badge && (
                  <div className="absolute top-2 right-2 z-10 bg-[#F58A42] text-white px-1.5 sm:px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-heading font-bold shadow-2xs">
                    {item.badge}
                  </div>
                )}

                {/* Category Tag Kanan Bawah */}
                <div className="absolute bottom-2 right-2 z-10 bg-[#FAF5EB]/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-heading font-bold text-[#786C65] shadow-2xs border border-[#EADBCC] hidden xs:block">
                  {item.category}
                </div>

                {/* Quick View Hover Hint */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/95 text-[#291E16] font-heading font-black text-[10px] sm:text-xs shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#F58A42]" />
                    <span>{t.treats.quickView}</span>
                  </span>
                </div>

                {/* Image */}
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Orange Bar: Nama Produk & Tombol Aksi */}
              <div className="bg-[#F58A42] hover:bg-[#E57830] transition-colors rounded-xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 flex items-center justify-between text-[#291E16]">
                <span className="font-heading font-black text-[11px] sm:text-xs md:text-[13px] tracking-tight uppercase truncate mr-1.5">
                  {item.name}
                </span>

                <button
                  onClick={(e) => handleAddToCart(e, item)}
                  className="w-6 h-6 rounded-lg bg-[#FAF5EB] hover:bg-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform cursor-pointer"
                  title={t.treats.addToCart}
                >
                  {isAdded ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#291E16]" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More ↗ Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            const target = document.getElementById("katalog");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#291E16] hover:bg-[#423125] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-md group cursor-pointer"
        >
          <span>{t.treats.showMore}</span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Modal Overview Detail Produk */}
      <ProductOverviewModal
        product={overviewProduct}
        onClose={() => setOverviewProduct(null)}
      />
    </section>
  );
}
