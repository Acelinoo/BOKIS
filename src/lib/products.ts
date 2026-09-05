export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
  ingredients: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export const CATEGORIES = [
  { id: "all", name: "Semua Menu", slug: "all" },
  { id: "top-picks", name: "Pilihan Resto", slug: "top-picks" },
  { id: "bolu-kiju", name: "Bolu Kiju Soreang", slug: "bolu-kiju" },
  { id: "chiramisu", name: "Aneka Chiramisu", slug: "chiramisu" },
];

export const PRODUCTS: ProductItem[] = [
  // --- RESTO'S TOP PICKS & BOKIS BOLU KIJU SOREANG ---
  {
    id: "bokis-original",
    slug: "bokis-original",
    name: "Bokis Original",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 37000,
    rating: 5.0,
    reviewCount: 384,
    badge: "TOP PICK ⭐",
    description:
      "Bolu keju lembut dan gurih dengan cita rasa keju khas yang otentik, diolah menggunakan resep tradisional pilihan.",
    ingredients: ["Keju Cheddar Pilihan", "Susu Murni Segar", "Telur Segar", "Tepung Terigu", "Mentega Asli"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
    isPopular: true,
  },
  {
    id: "bokis-kiju-spesial",
    slug: "bokis-kiju-spesial",
    name: "Bokis Kiju Spesial",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 49500,
    rating: 5.0,
    reviewCount: 295,
    badge: "TOP PICK 🧀",
    description:
      "Bolu keju bertekstur lembut dan gurih dengan tambahan potongan keju dadu di dalam adonan serta taburan keju melimpah di luar.",
    ingredients: ["Potongan Keju Dadu", "Keju Cheddar Pilihan", "Susu Murni", "Telur Segar", "Mentega"],
    imageUrl: "/images/products/bolu-keju-turnaround.jpg",
    isPopular: true,
  },
  {
    id: "bokis-coklat",
    slug: "bokis-coklat",
    name: "Bokis Cokelat",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 40000,
    rating: 4.9,
    reviewCount: 210,
    badge: "FAVORIT 🍫",
    description:
      "Bolu keju berpadu sempurna dengan kelezatan cokelat pilihan yang mantap dan seimbang di setiap gigitan.",
    ingredients: ["Cokelat Pilihan", "Keju Cheddar", "Susu Murni", "Telur Segar", "Mentega"],
    imageUrl: "/images/hero/bolu-hero-splash.jpg",
    isPopular: false,
  },
  {
    id: "bokis-kiju-pisang",
    slug: "bokis-kiju-pisang",
    name: "Bokis Kiju Pisang",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 40000,
    rating: 4.8,
    reviewCount: 178,
    badge: "AROMA KHAS 🍌",
    description:
      "Bolu keju lembut berpadu dengan aroma dan keharuman pisang pilihan yang manis alami dan lezat.",
    ingredients: ["Pisang Pilihan", "Keju Cheddar", "Susu Murni", "Telur Segar", "Tepung Terigu"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
    isPopular: false,
  },
  {
    id: "bokis-coklat-spesial",
    slug: "bokis-coklat-spesial",
    name: "Bokis Cokelat Spesial",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 49500,
    rating: 4.9,
    reviewCount: 240,
    badge: "SPESIAL 🍫",
    description:
      "Bolu keju cokelat lembut dengan isian potongan cokelat kotak di dalamnya yang lumer saat dinikmati.",
    ingredients: ["Potongan Cokelat Kotak", "Cokelat Premium", "Keju Cheddar", "Susu Segar", "Mentega"],
    imageUrl: "/images/hero/bolu-hero-splash.jpg",
    isPopular: false,
  },
  {
    id: "kiju-pandan",
    slug: "kiju-pandan",
    name: "Kiju Pandan",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 37000,
    rating: 4.9,
    reviewCount: 195,
    badge: "PANDAN ALAMI 🌿",
    description:
      "Bolu keju bertekstur lembut dengan aroma harum pandan alami yang menyegarkan dan gurihnya keju parut.",
    ingredients: ["Ekstrak Daun Pandan Alami", "Keju Cheddar", "Susu Murni", "Telur Segar", "Mentega"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
    isPopular: false,
  },

  // --- ANEKA CHIRAMISU ---
  {
    id: "chiramisu-triple-choco",
    slug: "chiramisu-triple-choco",
    name: "Chiramisu Triple Choco",
    category: "Aneka Chiramisu",
    categorySlug: "chiramisu",
    price: 29000,
    rating: 5.0,
    reviewCount: 312,
    badge: "BEST SELLER 🍫",
    description:
      "Bolu cokelat lembut yang disiram krim cokelat kental istimewa serta disempurnakan dengan taburan crumble cokelat renyah.",
    ingredients: ["Bolu Cokelat Pilihan", "Krim Cokelat Khusus", "Taburan Crumble", "Susu Segar"],
    imageUrl: "/images/hero/bolu-hero-splash.jpg",
    isPopular: true,
  },
  {
    id: "chiramisu-original-coffee",
    slug: "chiramisu-original-coffee",
    name: "Chiramisu Original Coffee",
    category: "Aneka Chiramisu",
    categorySlug: "chiramisu",
    price: 25000,
    rating: 4.9,
    reviewCount: 265,
    badge: "KLASIK KOPI ☕",
    description:
      "Cita rasa autentik bolu kopi berpadu americano, krim keju gurih lembut, dan taburan bubuk cokelat berkualitas.",
    ingredients: ["Bolu Kopi", "Kopi Americano", "Krim Keju Lembut", "Bubuk Kakao"],
    imageUrl: "/images/products/bolu-keju-turnaround.jpg",
    isPopular: true,
  },
  {
    id: "chiramisu-pandan-matcha",
    slug: "chiramisu-pandan-matcha",
    name: "Chiramisu Pandan Matcha",
    category: "Aneka Chiramisu",
    categorySlug: "chiramisu",
    price: 29000,
    rating: 4.8,
    reviewCount: 184,
    badge: "MATCHA MOCHI 🍵",
    description:
      "Bolu pandan lembut berpadu dengan siraman krim matcha, dilengkapi potongan mochi kenyal dan taburan bubuk matcha pilihan.",
    ingredients: ["Bolu Pandan Harum", "Krim Matcha Pilihan", "Mochi Kenyal", "Bubuk Matcha"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
    isPopular: false,
  },
  {
    id: "chiramisu-strawberry-cheesecake",
    slug: "chiramisu-strawberry-cheesecake",
    name: "Chiramisu Strawberry Cheesecake",
    category: "Aneka Chiramisu",
    categorySlug: "chiramisu",
    price: 29000,
    rating: 4.9,
    reviewCount: 220,
    badge: "SEGAR & GURIH 🍓",
    description:
      "Perpaduan bolu original keju dengan kesegaran stroberi serta lumuran krim keju yang menghasilkan harmoni rasa gurih dan segar.",
    ingredients: ["Bolu Keju Original", "Selai Stroberi Segar", "Krim Keju Pilihan", "Susu Murni"],
    imageUrl: "/images/products/bolu-keju-turnaround.jpg",
    isPopular: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ibu Rina Melati",
    location: "Soreang, Kab. Bandung",
    rating: 5,
    comment:
      "Tekstur bolu Bokis sangat lembut dan rasa kejunya terasa nyata di setiap gigitan. Menjadi hidangan favorit keluarga kami di Soreang.",
    avatar: "R",
    variant: "Bokis Original",
  },
  {
    id: 2,
    name: "Bapak Dedi Prasetyo",
    location: "Kutawaringin, Kab. Bandung",
    rating: 5,
    comment:
      "Bokis Kiju Spesial dengan potongan keju di dalamnya sangat memuaskan. Pesanan dikirim tepat waktu dan dikemas rapi.",
    avatar: "D",
    variant: "Bokis Kiju Spesial",
  },
  {
    id: 3,
    name: "Ibu Maya Hartati",
    location: "Buahbatu, Bandung",
    rating: 5,
    comment:
      "Chiramisu Triple Choco dan Original Coffee rasanya seimbang, tidak terlalu manis dan krim kejunya gurih lembut.",
    avatar: "M",
    variant: "Chiramisu Triple Choco",
  },
];

export const FAQS = [
  {
    question: "Berapa lama daya tahan Bolu Keju dan Chiramisu Bokis?",
    answer:
      "Bolu keju tahan 3–4 hari pada suhu ruangan yang sejuk dan tahan hingga 7–10 hari jika disimpan di dalam lemari pendingin (chiller). Untuk produk Chiramisu, disarankan disimpan dalam lemari pendingin dan dinikmati dalam 3–5 hari.",
  },
  {
    question: "Apakah melayani pengiriman ke seluruh wilayah Bandung?",
    answer:
      "Ya, kami melayani pengiriman Instant dan Sameday melalui kurir kilat untuk area Soreang, Banjaran, Baleendah, Katapang, Kutawaringin, Kota Bandung, hingga Cimahi.",
  },
  {
    question: "Apakah produk dipanggang segar setiap hari?",
    answer:
      "Seluruh produk dipanggang setiap hari di dapur Soreang menggunakan bahan berkualitas tinggi untuk memastikan produk yang Anda terima selalu segar dan harum.",
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Pilih menu yang Anda inginkan pada website ini, masukkan ke keranjang belanja, lalu klik tombol 'Kirim Pesanan ke WhatsApp'. Rincian pesanan Anda akan otomatis terkirim ke WhatsApp resmi kami.",
  },
  {
    question: "Apakah menerima pesanan dalam jumlah besar untuk acara?",
    answer:
      "Kami melayani pesanan untuk kebutuhan rapat, syukuran, arisan, dan acara keluarga. Untuk pemesanan dalam jumlah besar (di atas 15 kotak), disarankan melakukan konfirmasi 1–2 hari sebelumnya.",
  },
];
