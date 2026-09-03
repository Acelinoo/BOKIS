"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import ProductOverviewModal, { ModalProduct } from "./ProductOverviewModal";

interface CatalogItem {
  id: string;
  nameId: string;
  nameEn: string;
  tagId: string;
  tagEn: string;
  price: number;
  originalPrice?: number;
  category: "pastries" | "donuts" | "cakes" | "sweets" | "cookies" | "chocolates" | "gift-boxes";
  descriptionId: string;
  descriptionEn: string;
  ingredientsId: string[];
  ingredientsEn: string[];
  image: string;
}

const TREAT_ITEMS: CatalogItem[] = [
  {
    id: "treat-1",
    nameId: "BOLU-KEJU-ORIGINAL",
    nameEn: "CRUNCHY-NUT-BAKED",
    tagId: "Signature Chiffon",
    tagEn: "Pastry",
    price: 45000,
    originalPrice: 55000,
    category: "pastries",
    descriptionId:
      "Bolu chiffon legendaris khas Soreang dengan tekstur selembut sutra, wangi susu murni peternakan lokal, dan taburan keju cheddar parut panggang gurih yang renyah.",
    descriptionEn:
      "Our iconic Soreang artisan chiffon cake, baked with locally sourced fresh dairy milk and crowned with an abundant golden toasted cheddar cheese crust.",
    ingredientsId: ["Susu Segar Soreang", "Keju Cheddar Pilihan", "Telur Segar", "Mentega Wisman"],
    ingredientsEn: ["Local Farm Fresh Milk", "Aged Cheddar Cheese", "Farm Eggs", "Pure Dairy Butter"],
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: "treat-2",
    nameId: "DONAT-GULA-KLASIK",
    nameEn: "SUGAR-DONUTS",
    tagId: "Donat",
    tagEn: "Donuts",
    price: 35000,
    category: "donuts",
    descriptionId:
      "Donat kentang empuk tradisional dengan taburan gula salju halus berkualitas, lumer dan ringan di mulut.",
    descriptionEn:
      "Tender, golden potato donuts gently dusted with refined confectioner's snow sugar for timeless sweet indulgence.",
    ingredientsId: ["Kentang Pilihan", "Tepung Terigu", "Susu Segar", "Gula Salju"],
    ingredientsEn: ["Select Potatoes", "Premium Flour", "Fresh Milk", "Snow Sugar"],
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: "treat-3",
    nameId: "BOLU-COKELAT-LUMER",
    nameEn: "CHOCOLATE-CAKE",
    tagId: "Bolu Cokelat",
    tagEn: "Cake",
    price: 50000,
    originalPrice: 60000,
    category: "cakes",
    descriptionId:
      "Kombinasi klasik chiffon cokelat pekat Belgia dengan lelehan ganache di bagian dalam serta taburan keju panggang di luar.",
    descriptionEn:
      "Rich Belgian cocoa chiffon infused with melted chocolate ganache and finished with a delicate savoury cheddar topping.",
    ingredientsId: ["Dark Cocoa Belgia", "Susu Segar", "Keju Cheddar", "Telur"],
    ingredientsEn: ["Belgian Dark Cocoa", "Fresh Milk", "Cheddar Cheese", "Eggs"],
    image: "/images/hero/bolu-hero-splash.jpg",
  },
  {
    id: "treat-4",
    nameId: "DOUBLE-CHEESE-MELT",
    nameEn: "EASTERN-SWEETS-TURKISH",
    tagId: "Double Keju",
    tagEn: "Sweet",
    price: 52000,
    originalPrice: 65000,
    category: "sweets",
    descriptionId:
      "Diciptakan khusus pecinta keju sejati. Potongan keju di dalam adonan spons berpadu dengan lapisan parutan keju ganda yang dipanggang keemasan.",
    descriptionEn:
      "Crafted for true cheese connoisseurs. Rich cheddar cubes folded into airy chiffon sponge, finished with a crisp double-baked cheese crust.",
    ingredientsId: ["Double Cheddar", "Cream Cheese", "Susu Murni", "Kuning Telur"],
    ingredientsEn: ["Double Cheddar", "Cream Cheese", "Fresh Milk", "Egg Yolks"],
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: "treat-5",
    nameId: "KUE-OATMEAL-MADU",
    nameEn: "HOMEMADE-OATMEAL",
    tagId: "Kue Kering",
    tagEn: "Cookies",
    price: 38000,
    category: "cookies",
    descriptionId:
      "Kue kering oatmeal renyah dengan sentuhan madu hutan alami dan potongan keju gurih, teman santai minum teh di sore hari.",
    descriptionEn:
      "Crispy artisanal rolled-oat cookies infused with wild forest honey and delicate savoury cheese flakes, ideal for afternoon tea.",
    ingredientsId: ["Rolled Oats", "Madu Alami", "Mentega", "Keju Cheddar"],
    ingredientsEn: ["Rolled Oats", "Wild Honey", "Pure Butter", "Cheddar Cheese"],
    image: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: "treat-6",
    nameId: "HAMPERS-HANTARAN-SOREANG",
    nameEn: "WRAPPED-GIFTS",
    tagId: "Paket Hantaran",
    tagEn: "Gift Box",
    price: 145000,
    originalPrice: 175000,
    category: "gift-boxes",
    descriptionId:
      "Kotak hantaran premium berbalut pita satin eksklusif berisi 3 varian bolu keju susu pilihan, lengkap dengan kartu ucapan kustom.",
    descriptionEn:
      "Luxury gift box wrapped in satin ribbon containing 3 signature artisan chiffon cakes, complete with a personalized bespoke card.",
    ingredientsId: ["3 Loyang Bolu Bebas Pilih", "Hardbox Eksklusif", "Kartu Ucapan"],
    ingredientsEn: ["3 Selected Chiffon Cakes", "Luxury Hardbox", "Greeting Card"],
    image: "/images/brand/bread-basket-contact.jpg",
  },
  {
    id: "treat-7",
    nameId: "BOLU-SUSU-PANDAN-KEJU",
    nameEn: "CUP-PASTRY",
    tagId: "Pandan Keju",
    tagEn: "Pastry",
    price: 48000,
    category: "pastries",
    descriptionId:
      "Ekstrak daun pandan suji alami berpadu harmonis dengan manisnya susu murni dan gurihnya parutan keju cheddar panggang.",
    descriptionEn:
      "Aromatic natural pandan leaf essence seamlessly harmonized with fresh dairy sweetness and savory toasted cheddar.",
    ingredientsId: ["Pandan Suji Alami", "Susu Murni Segar", "Keju Cheddar", "Telur"],
    ingredientsEn: ["Natural Pandan", "Fresh Dairy Milk", "Cheddar Cheese", "Eggs"],
    image: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: "treat-8",
    nameId: "COKELAT-BATANG-ARTISAN",
    nameEn: "TASTY-CHOCOLATE-BARS",
    tagId: "Cokelat",
    tagEn: "Chocolate",
    price: 52000,
    category: "chocolates",
    descriptionId:
      "Cokelat artisan panggang bertabur kacang panggang renyah dan keju cheddar kering khas dapur Bokis.",
    descriptionEn:
      "Artisan roasted chocolate bars sprinkled with roasted nuts and aged cheddar crunch from our master bakery.",
    ingredientsId: ["Cocoa Butter", "Dark Chocolate", "Roasted Nuts", "Cheese Crunch"],
    ingredientsEn: ["Cocoa Butter", "Dark Chocolate", "Roasted Nuts", "Cheese Crunch"],
    image: "/images/hero/bolu-hero-splash.jpg",
  },
];

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [overviewProduct, setOverviewProduct] = useState<ModalProduct | null>(null);

  const TABS = [
    { id: "all", label: t.treats.tabs.all },
    { id: "pastries", label: t.treats.tabs.pastries },
    { id: "donuts", label: t.treats.tabs.donuts },
    { id: "cakes", label: t.treats.tabs.cakes },
    { id: "sweets", label: t.treats.tabs.sweets },
    { id: "cookies", label: t.treats.tabs.cookies },
    { id: "chocolates", label: t.treats.tabs.chocolates },
    { id: "gift-boxes", label: t.treats.tabs.giftBoxes },
  ];

  const filteredItems =
    activeTab === "all"
      ? TREAT_ITEMS
      : TREAT_ITEMS.filter((item) => item.category === activeTab);

  const handleOpenOverview = (item: CatalogItem) => {
    setOverviewProduct({
      id: item.id,
      name: language === "id" ? item.nameId : item.nameEn,
      tag: language === "id" ? item.tagId : item.tagEn,
      price: item.price,
      originalPrice: item.originalPrice,
      rating: 4.9,
      reviewCount: 180,
      description: language === "id" ? item.descriptionId : item.descriptionEn,
      ingredients: language === "id" ? item.ingredientsId : item.ingredientsEn,
      image: item.image,
    });
  };

  const handleAddToCart = (e: React.MouseEvent, item: CatalogItem) => {
    e.stopPropagation();
    addToCart(
      {
        id: item.id,
        slug: item.nameEn.toLowerCase(),
        name: (language === "id" ? item.nameId : item.nameEn).replace(/-/g, " "),
        category: language === "id" ? item.tagId : item.tagEn,
        categorySlug: item.category,
        price: item.price,
        rating: 4.9,
        reviewCount: 180,
        description: language === "id" ? item.descriptionId : item.descriptionEn,
        ingredients: language === "id" ? item.ingredientsId : item.ingredientsEn,
        imageUrl: item.image,
      },
      1
    );
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="katalog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title: MOST LOVED TREATS / MENU PALING DIMINATI */}
      <div className="text-center mb-8">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-normal text-[#291E16]">
          {t.treats.title}
        </h2>

        {/* Filter Pills (All, Pastries, Donuts, Cakes, Sweets, Cookies, Chocolates, Gift Boxes) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer ${
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

      {/* Grid 8 Kartu Produk (Klik Kartu / Tombol Overview untuk Buka Modal Detail) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8">
        {filteredItems.map((item) => {
          const isAdded = addedId === item.id;
          const displayName = language === "id" ? item.nameId : item.nameEn;
          const displayTag = language === "id" ? item.tagId : item.tagEn;

          return (
            <div
              key={item.id}
              onClick={() => handleOpenOverview(item)}
              className="group rounded-3xl bg-[#FAF5EB] border border-[#EADBCC] p-3 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              title={t.treats.quickView}
            >
              {/* Foto Produk dengan Price Tag & Category Tag Persis Gambar 2 */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-white/70 flex items-center justify-center p-2 mb-3">
                
                {/* Price Tag Kiri Atas */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-[#FFFDF7]/95 backdrop-blur-xs px-2.5 py-1 rounded-lg shadow-xs border border-amber-100">
                  <span className="font-heading font-black text-xs text-[#291E16]">
                    Rp {(item.price / 1000).toFixed(0)}K
                  </span>
                </div>

                {/* Category Tag Kanan Bawah */}
                <div className="absolute bottom-2.5 right-2.5 z-10 bg-[#FAF5EB]/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md text-[10px] font-heading font-bold text-[#786C65] shadow-2xs border border-[#EADBCC]">
                  {displayTag}
                </div>

                {/* Quick View Hover Hint */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="px-3 py-1.5 rounded-xl bg-white/95 text-[#291E16] font-heading font-black text-xs shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#F58A42]" />
                    <span>{t.treats.quickView}</span>
                  </span>
                </div>

                {/* Image */}
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={displayName}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Orange Bar: Nama Produk & Tombol Aksi Persis Gambar 2 */}
              <div className="bg-[#F58A42] hover:bg-[#E57830] transition-colors rounded-xl px-3.5 py-2.5 flex items-center justify-between text-[#291E16]">
                <span className="font-heading font-black text-xs sm:text-[13px] tracking-tight uppercase truncate mr-2">
                  {displayName}
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

      {/* Show More ↗ Button di Bawah Grid Persis Gambar 2 */}
      <div className="text-center mt-12">
        <button
          onClick={() => {
            const target = document.getElementById("katalog");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#291E16] hover:bg-[#423125] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-md group cursor-pointer"
        >
          <span>{t.treats.showMore}</span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Modal Overview Keterangan Produk (Memenuhi Instruksi 2 dari User) */}
      <ProductOverviewModal
        product={overviewProduct}
        onClose={() => setOverviewProduct(null)}
      />
    </section>
  );
}
