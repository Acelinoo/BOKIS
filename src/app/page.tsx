"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import BrandStatementSection from "@/components/brand/BrandStatementSection";
import WhyUsSection from "@/components/why-us/WhyUsSection";
import ProductCatalog from "@/components/products/ProductCatalog";
import SpecialOffer from "@/components/promo/SpecialOffer";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import CreationsGallery from "@/components/gallery/CreationsGallery";
import FAQSection from "@/components/faq/FAQSection";
import ContactSection from "@/components/contact/ContactSection";
import CartDrawer from "@/components/checkout/CartDrawer";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-[#FAF5EB] text-[#291E16] overflow-x-hidden w-full max-w-full">
          {/* Navigasi Utama dengan Logo PNG & Switcher ID/EN */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            {/* 1. Hero Section dengan Seamless Crossfade Slider (Tanpa Jeda) */}
            <HeroSection />

            {/* 2. Brand Statement Section (Diperbesar, diletakkan tepat di bawah Hero) */}
            <BrandStatementSection />

            {/* 3. Why Us dengan Icon Gandum Murni (Wheat) tanpa Sparkles */}
            <WhyUsSection />

            {/* 4. Most Loved Treats dengan Filter Kategori & Modal Overview Lengkap */}
            <ProductCatalog
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* 5. Special Offer dengan 2 Split Cards 25% Off (Gambar 2) */}
            <SpecialOffer />

            {/* 6. Loved by Our Customers (Gambar 2) */}
            <TestimonialSection />

            {/* 7. Our Sweet Creations dengan Functional 5 Slider Dots (Gambar 3) */}
            <CreationsGallery />

            {/* 8. Frequently Asked Question (Gambar 3) */}
            <FAQSection />

            {/* 9. Let's Make Something Sweet Together / Contact Us (Gambar 3) */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Slide-over Drawer Keranjang & Checkout WhatsApp */}
          <CartDrawer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
