# 🧀 BOKIS — Bolu Keju Susu Khas Soreang, Kab. Bandung

Website toko kue modern, interaktif, dan berkelas untuk brand **Bokis** (Bolu Keju Susu khas Soreang, Kabupaten Bandung). Didesain dengan palet warna hangat (*honey, cheese gold, cream*), kanvas 3D interaktif di Hero section (*Three.js / React Three Fiber*), serta alur pemesanan *Direct WhatsApp Checkout* terintegrasi database Prisma (*PostgreSQL Supabase*).

---

## 🚀 Fitur Utama

1. **Interactive 3D Hero Section**
   * Geometri 3D bolu chiffon tube berlubang tengah dengan spons lembut keemasan, kerak panggang, parutan keju cheddar di atasnya, garnish daun mint, dan piring keramik putih.
   * Kontrol orbit 360° interaktif yang merespons mouse/sentuhan dan idle floating animation.
   * Floating price pill, badge kepuasan pelanggan, dan CTA direct order.
2. **Brand Ticker (Marquee)**
   * Teks berjalan dengan highlight keunggulan produk (100% susu segar, fresh daily Soreang, tanpa pengawet).
3. **Menu Categories (Our Categories)**
   * Kartu kategori bergaya Behance (*Sweet Nest*) yang otomatis memfilter katalog.
4. **Why Us (Keunggulan Bokis)**
   * 4 pilar kualitas: Fresh Daily, Premium Ingredients, Crafted with Care, Fast Delivery.
5. **Most Loved Treats (Katalog & Filter)**
   * Filter tab kategori instan, badge harga melayang, rating 4.9/5, detail bahan baku, dan tombol tambah ke keranjang.
6. **Special Offer (Promo Bundling)**
   * Paket Duo Soreang Hemat 20% & Hampers Hantaran Spesial dengan diskon menggiurkan.
7. **Customer Testimonials (Loved by Our Customers)**
   * Ulasan pembeli warga Soreang dan Bandung dengan rating bintang 5.
8. **FAQ Accordion**
   * Pertanyaan umum seputar masa simpan kue, jangkauan kurir pengiriman, dan pesanan partai besar.
9. **Outlet & Hubungi Kami**
   * Info jam operasional (07.00 - 21.00 WIB) dan alamat fisik di Soreang, Kab. Bandung.
10. **Direct WhatsApp Checkout Drawer**
    * Slide-over cart drawer dengan pengubah kuantitas.
    * Form identitas pemesan dan alamat pengiriman wilayah Soreang / Bandung Raya.
    * Otomatis menyimpan record pesanan ke PostgreSQL Supabase via Prisma ORM (`/api/orders`).
    * Format pesan WhatsApp siap kirim ke admin toko dengan total harga otomatis.
    * Efek selebrasi konfeti saat pesanan dikirim.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 16 (App Router, Turbopack, TypeScript)
* **Styling**: Tailwind CSS v4
* **3D Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`
* **Database & ORM**: Prisma ORM (`@prisma/client`) dengan PostgreSQL (Supabase)
* **Iconography**: Lucide React + Inline Brand SVG
* **Animation & FX**: Canvas Confetti, CSS Keyframe Marquee

---

## ⚙️ Menjalankan Proyek Secara Lokal

1. **Jalankan Dev Server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3000` di browser.

2. **Setup Database Supabase (Opsional):**
   * Salin file `.env.example` ke `.env`
   * Masukkan connection string PostgreSQL Supabase kamu pada `DATABASE_URL`
   * Sinkronkan skema ke database:
     ```bash
     npx prisma db push
     ```

3. **Build untuk Produksi:**
   ```bash
   npm run build
   npm run start
   ```
