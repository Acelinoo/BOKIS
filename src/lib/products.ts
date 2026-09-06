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
  { id: "dessert-cube", name: "Dessert Cube", slug: "dessert-cube" },
];

export const PRODUCTS: ProductItem[] = [
  // --- BOLU KEJU SABILULUNGAN: SERI KEJU ---
  {
    id: "bolu-keju-classic",
    slug: "bolu-keju-classic",
    name: "Keju Classic",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 37000,
    originalPrice: 42000,
    rating: 5.0,
    reviewCount: 410,
    badge: "SIGNATURE",
    description:
      "Bolu keju lembut khas Sabilulungan Soreang dengan cita rasa keju otentik dan taburan keju cheddar panggang gurih di bagian atasnya.",
    ingredients: ["Keju Cheddar Pilihan", "Susu Murni Segar", "Telur Segar", "Tepung Terigu", "Mentega Asli"],
    imageUrl: "/images/products/bolu-keju-classic.jpg",
    isPopular: true,
  },
  {
    id: "bolu-keju-double",
    slug: "bolu-keju-double",
    name: "Keju Double",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 49500,
    originalPrice: 55000,
    rating: 5.0,
    reviewCount: 380,
    badge: "BEST SELLER",
    description:
      "Bolu keju istimewa dengan kenikmatan ganda: taburan keju cheddar panggang renyah di atas plus potongan keju dadu gurih melimpah di dalam adonan.",
    ingredients: ["Potongan Keju Dadu", "Keju Cheddar Panggang", "Susu Murni Segar", "Telur Segar", "Mentega Asli"],
    imageUrl: "/images/products/bolu-keju-double.jpg",
    isPopular: true,
  },
  {
    id: "bolu-keju-extra",
    slug: "bolu-keju-extra",
    name: "Keju Extra",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 45000,
    originalPrice: 50000,
    rating: 5.0,
    reviewCount: 295,
    badge: "EXTRA CHEESE",
    description:
      "Bolu keju super lembut dengan limpahan taburan keju cheddar parut segar yang menggunung dan berlimpah di seluruh permukaan bolu.",
    ingredients: ["Taburan Keju Parut Melimpah", "Keju Cheddar Pilihan", "Susu Murni Segar", "Telur Segar", "Mentega Asli"],
    imageUrl: "/images/products/bolu-keju-extra.jpg",
    isPopular: true,
  },

  // --- BOLU KEJU SABILULUNGAN: SERI PANDAN ---
  {
    id: "bolu-pandan-classic",
    slug: "bolu-pandan-classic",
    name: "Pandan Classic",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 37000,
    originalPrice: 42000,
    rating: 4.9,
    reviewCount: 275,
    badge: "PANDAN ALAMI",
    description:
      "Bolu pandan lembut beraroma daun suji & pandan alami yang harum menyegarkan, disempurnakan taburan keju cheddar panggang gurih di atasnya.",
    ingredients: ["Ekstrak Daun Pandan & Suji", "Keju Cheddar Panggang", "Susu Murni Segar", "Telur Segar", "Mentega Asli"],
    imageUrl: "/images/products/bolu-pandan-classic.jpg",
    isPopular: false,
  },
  {
    id: "bolu-pandan-double",
    slug: "bolu-pandan-double",
    name: "Pandan Double",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 49500,
    originalPrice: 55000,
    rating: 5.0,
    reviewCount: 320,
    badge: "DOUBLE CHEESE",
    description:
      "Bolu pandan wangi alami dengan keistimewaan ganda: taburan keju cheddar panggang renyah di atas serta potongan keju dadu gurih melimpah di dalam adonan kue.",
    ingredients: [
      "Ekstrak Pandan Alami",
      "Potongan Keju Dadu",
      "Keju Cheddar Panggang",
      "Susu Murni Segar",
      "Telur Segar",
    ],
    imageUrl: "/images/products/bolu-pandan-double.jpg",
    isPopular: true,
  },
  {
    id: "bolu-pandan-extra",
    slug: "bolu-pandan-extra",
    name: "Pandan Extra",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 45000,
    originalPrice: 50000,
    rating: 5.0,
    reviewCount: 285,
    badge: "PANDAN EXTRA",
    description:
      "Bolu pandan lembut beraroma daun suji & pandan alami dengan limpahan taburan keju cheddar parut segar yang menggunung dan berlimpah di seluruh permukaannya.",
    ingredients: [
      "Taburan Keju Parut Melimpah",
      "Ekstrak Pandan & Suji Alami",
      "Keju Cheddar Pilihan",
      "Susu Murni Segar",
      "Telur Segar",
      "Mentega Asli",
    ],
    imageUrl: "/images/products/bolu-pandan-extra.jpg",
    isPopular: true,
  },

  // --- BOLU KEJU SABILULUNGAN: SERI CLASSIC LAINNYA ---
  {
    id: "bolu-cokelat-classic",
    slug: "bolu-cokelat-classic",
    name: "Cokelat Classic",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 40000,
    originalPrice: 45000,
    rating: 4.9,
    reviewCount: 290,
    badge: "FAVORIT",
    description:
      "Bolu chiffon cokelat empuk berpori halus khas Sabilulungan dengan cita rasa cokelat mantap, dilengkapi taburan keju panggang dan choco chips renyah di atasnya.",
    ingredients: [
      "Cokelat Pilihan",
      "Keju Cheddar Panggang",
      "Susu Murni Segar",
      "Telur Segar",
      "Mentega Asli",
    ],
    imageUrl: "/images/products/bolu-cokelat-classic.jpg",
    isPopular: true,
  },
  {
    id: "bolu-red-velvet-classic",
    slug: "bolu-red-velvet-classic",
    name: "Red Velvet Classic",
    category: "Bolu Kiju Soreang",
    categorySlug: "bolu-kiju",
    price: 42000,
    originalPrice: 48000,
    rating: 4.9,
    reviewCount: 265,
    badge: "NEW FLAVOR",
    description:
      "Bolu red velvet bertekstur moist dan lembut dengan aroma vanila-kakao yang elegan, disempurnakan taburan keju cheddar panggang gurih di bagian atasnya.",
    ingredients: [
      "Adonan Red Velvet Pilihan",
      "Keju Cheddar Panggang",
      "Susu Murni Segar",
      "Telur Segar",
      "Mentega Asli",
    ],
    imageUrl: "/images/products/bolu-red-velvet-classic.jpg",
    isPopular: true,
  },

  // --- DESSERT CUBE SABILULUNGAN ---
  {
    id: "dessert-cube-matcha",
    slug: "dessert-cube-matcha",
    name: "Dessert Cube Matcha",
    category: "Dessert Cube",
    categorySlug: "dessert-cube",
    price: 29000,
    originalPrice: 32000,
    rating: 5.0,
    reviewCount: 342,
    badge: "DESSERT CUBE",
    description:
      "Dessert Cube istimewa dengan susunan sponge cake lembut, krim susu gurih lumer, lelehan saus matcha wangi, dan taburan bubuk matcha pilihan otentik.",
    ingredients: [
      "Bolu Lembut Pilihan",
      "Krim Susu Gurih",
      "Saus Matcha Premium",
      "Bubuk Matcha Pilihan",
      "Susu Segar",
    ],
    imageUrl: "/images/products/dessert-cube-matcha.jpg",
    isPopular: true,
  },
  {
    id: "dessert-cube-strawberry",
    slug: "dessert-cube-strawberry",
    name: "Dessert Cube Strawberry",
    category: "Dessert Cube",
    categorySlug: "dessert-cube",
    price: 29000,
    originalPrice: 32000,
    rating: 4.9,
    reviewCount: 310,
    badge: "DESSERT CUBE",
    description:
      "Dessert Cube segar dengan layer bolu empuk, lumuran krim keju lembut gurih, siraman selai stroberi melimpah, dan sensasi asam manis menyegarkan.",
    ingredients: [
      "Bolu Lembut Pilihan",
      "Krim Keju Gurih",
      "Selai Stroberi Alami",
      "Buah Stroberi Segar",
      "Susu Murni",
    ],
    imageUrl: "/images/products/dessert-cube-strawberry.jpg",
    isPopular: true,
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
