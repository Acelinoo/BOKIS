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
  { id: "all", name: "Semua Varian", slug: "semua" },
  { id: "signature", name: "Signature Chiffon", slug: "signature" },
  { id: "double-cheese", name: "Double Cheese", slug: "double-cheese" },
  { id: "flavor-twist", name: "Pandan & Cokelat", slug: "pandan-cokelat" },
  { id: "hampers", name: "Paket Hampers", slug: "hampers" },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "bokis-signature-keju",
    slug: "bolu-keju-susu-original",
    name: "Bolu Keju Susu Original",
    category: "Signature Chiffon",
    categorySlug: "signature",
    price: 45000,
    originalPrice: 55000,
    rating: 4.9,
    reviewCount: 384,
    badge: "BEST SELLER ⭐",
    description:
      "Bolu chiffon legendaris khas Soreang dengan tekstur spons selembut awan, diinfusi susu murni peternakan lokal, dan ditaburi keju cheddar panggang gurih kecokelatan.",
    ingredients: ["Susu Segar Soreang", "Keju Cheddar Pilihan", "Telur Segar", "Tepung Terigu Premium", "Mentega Asli"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
    isPopular: true,
  },
  {
    id: "bokis-double-cheese",
    slug: "double-cheese-chiffon-melt",
    name: "Double Cheese Chiffon Melt",
    category: "Double Cheese",
    categorySlug: "double-cheese",
    price: 52000,
    originalPrice: 65000,
    rating: 5.0,
    reviewCount: 249,
    badge: "EXTRA KEJU 🧀",
    description:
      "Untuk pecinta keju sejati! Potongan keju gurih di dalam adonan lembut berpadu dengan limpahan parutan keju panggang renyah di seluruh permukaan luar.",
    ingredients: ["Double Cheddar", "Cream Cheese", "Susu Murni", "Mentega Wisman", "Kuning Telur Pilihan"],
    imageUrl: "/images/products/bolu-keju-turnaround.jpg",
    isPopular: true,
  },
  {
    id: "bokis-pandan-keju",
    slug: "bolu-susu-pandan-keju",
    name: "Bolu Susu Pandan Keju Wangi",
    category: "Pandan & Cokelat",
    categorySlug: "pandan-cokelat",
    price: 48000,
    originalPrice: 58000,
    rating: 4.8,
    reviewCount: 192,
    badge: "AROMA KHAS 🌿",
    description:
      "Ekstrak daun pandan suji asli berpadu serasi dengan manis lembutnya susu murni dan gurihnya parutan keju panggang di atasnya.",
    ingredients: ["Ekstrak Pandan Asli", "Susu Murni", "Keju Cheddar", "Telur Segar", "Gula Tebu Alami"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
  },
  {
    id: "bokis-choco-cheese",
    slug: "bolu-cokelat-melted-cheese",
    name: "Bolu Cokelat Keju Lumer",
    category: "Pandan & Cokelat",
    categorySlug: "pandan-cokelat",
    price: 50000,
    originalPrice: 60000,
    rating: 4.9,
    reviewCount: 167,
    badge: "FAVORIT ANAK 🍫",
    description:
      "Kombinasi klasik yang tak pernah salah: kue spons cokelat pekat Belgia dengan lelehan cokelat di bagian dalam dan taburan keju cheddar gurih di luar.",
    ingredients: ["Dark Cocoa Powder", "Susu Segar", "Keju Cheddar", "Chocolate Ganache", "Mentega Asli"],
    imageUrl: "/images/products/bolu-keju-turnaround.jpg",
  },
  {
    id: "bokis-paket-duo",
    slug: "paket-duo-hemat-soreang",
    name: "Paket Duo Soreang (Hemat 20%)",
    category: "Paket Hampers",
    categorySlug: "hampers",
    price: 85000,
    originalPrice: 105000,
    rating: 5.0,
    reviewCount: 420,
    badge: "PROMO HEMAT 💥",
    description:
      "Paket bundel 2 box bolu (1x Original Keju Susu + 1x Double Cheese / Pandan). Pilihan pas untuk oleh-oleh dan dinikmati bersama seluruh keluarga!",
    ingredients: ["2 Box Bolu Pilihan", "Free Box Eksklusif", "Free Pisau Potong"],
    imageUrl: "/images/products/bolu-keju-original.jpg",
    isPopular: true,
  },
  {
    id: "bokis-hampers-eksklusif",
    slug: "paket-hampers-hantaran-spesial",
    name: "Hampers Hantaran Spesial Bokis",
    category: "Paket Hampers",
    categorySlug: "hampers",
    price: 145000,
    originalPrice: 175000,
    rating: 5.0,
    reviewCount: 153,
    badge: "GIFT BOX 🎁",
    description:
      "Kotak hantaran premium berbalut pita eksklusif berisi 3 varian bolu keju susu pilihan, lengkap dengan kartu ucapan custom untuk hajatan atau buah tangan kerabat.",
    ingredients: ["3 Box Bolu Varian Bebas", "Hardbox Eksklusif", "Kartu Ucapan Custom", "Pita Satin"],
    imageUrl: "/images/products/bolu-keju-turnaround.jpg",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Teh Neng Rina",
    location: "Soreang, Kab. Bandung",
    rating: 5,
    comment:
      "Juara pisan bolu keju Bokis! Teksturnya beneran selembut kapas dan kejunya ga pelit sama sekali, garing di luar tapi kuenya lumer di mulut. Tiap ada tamu keluarga pasti suguhin ini.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    variant: "Bolu Keju Susu Original",
  },
  {
    id: 2,
    name: "Kang Dedi Prasetyo",
    location: "Kutawaringin, Kab. Bandung",
    rating: 5,
    comment:
      "Order via WA gampang banget, respons adminnya cepet. Bolu sampai masih anget fresh from the oven. Double cheese-nya the best, kejunya kerasa gurih dan susunya wangi alami.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    variant: "Double Cheese Chiffon Melt",
  },
  {
    id: 3,
    name: "Ibu Maya Hartati",
    location: "Buahbatu, Bandung",
    rating: 5,
    comment:
      "Pesen hampers buat oleh-oleh mertua, packaging-nya mewah banget padahal harganya sangat terjangkau. Rasanya konsisten enak, ga bikin seret di tenggorokan.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    variant: "Hampers Hantaran Spesial",
  },
];

export const FAQS = [
  {
    question: "Berapa lama daya tahan Bolu Keju Susu Bokis?",
    answer:
      "Karena dibuat tanpa pengawet buatan, bolu tahan 3-4 hari di suhu ruangan sejuk, dan tahan hingga 7-10 hari jika disimpan di dalam kulkas (chiller). Sebelum dinikmati dari kulkas, diamkan 15 menit atau hangatkan sebentar agar kembali lembut.",
  },
  {
    question: "Apakah bisa kirim ke luar area Soreang / seluruh Bandung?",
    answer:
      "Bisa banget! Kami melayani pengiriman Instant (Gosend/GrabExpress) & Sameday ke seluruh area Soreang, Ciwidey, Banjaran, Baleendah, Dayeuhkolot, hingga Kota Bandung dan Cimahi.",
  },
  {
    question: "Apakah bolu dipanggang setiap hari (Fresh Daily)?",
    answer:
      "Ya, 100%! Dapur kami di Soreang memanggang bolu setiap subuh untuk pesanan hari itu, sehingga bolu yang sampai ke tangan Anda selalu dalam kondisi paling segar dan beraroma harum.",
  },
  {
    question: "Bisa pesan untuk acara hajatan, arisan, atau syukuran?",
    answer:
      "Tentu saja! Untuk pemesanan jumlah besar (di atas 15 box), kami sarankan konfirmasi H-1 atau H-2 via WhatsApp agar dapur kami bisa menjadwalkan batch pemanggangan khusus untuk acara Anda.",
  },
  {
    question: "Bagaimana cara memesan lewat WhatsApp?",
    answer:
      "Cukup pilih varian bolu di katalog website ini, masukkan ke keranjang, lalu klik 'Kirim Pesanan ke WhatsApp'. Rincian pesanan dan total harga akan otomatis terformat rapi untuk admin kami.",
  },
];
