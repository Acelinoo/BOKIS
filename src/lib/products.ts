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
  { id: "minuman", name: "Minuman & Kopi", slug: "minuman" },
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

  // --- MINUMAN & KOPI (SAIKA SERIES) ---
  {
    id: "minuman-es-kopi-aren",
    slug: "minuman-es-kopi-aren",
    name: "Es Kopi Aren",
    category: "Minuman & Kopi",
    categorySlug: "minuman",
    price: 20000,
    originalPrice: 23000,
    rating: 5.0,
    reviewCount: 198,
    badge: "BEST SELLER",
    description:
      "Es kopi susu signature dengan perpaduan espresso robusta-arabika mantap, susu murni segar peternakan, dan manis gurih gula aren murni berkualitas.",
    ingredients: [
      "Espresso Segar",
      "Gula Aren Alami",
      "Susu Murni Segar",
      "Es Batu Kristal",
    ],
    imageUrl: "/images/products/minuman-es-kopi-aren.jpg",
    isPopular: false,
  },
  {
    id: "minuman-boba-cheese-brulee",
    slug: "minuman-boba-cheese-brulee",
    name: "Fresh Milk Chiizu Boba Brulee",
    category: "Minuman & Kopi",
    categorySlug: "minuman",
    price: 19000,
    originalPrice: 22000,
    rating: 4.9,
    reviewCount: 165,
    badge: "FAVORIT",
    description:
      "Susu murni segar berpadu boba kenyal gula aren legit, disempurnakan lapisan krim keju (chiizu) panggang torched brulee yang harum dan gurih.",
    ingredients: [
      "Boba Gula Aren Kenyal",
      "Susu Murni Segar",
      "Krim Keju Chiizu Gurih",
      "Gula Karamel Torched",
    ],
    imageUrl: "/images/products/minuman-boba-cheese-brulee.jpg",
    isPopular: false,
  },
  {
    id: "minuman-saika-breeze",
    slug: "minuman-saika-breeze",
    name: "Saika Breeze (Sunset Fresh)",
    category: "Minuman & Kopi",
    categorySlug: "minuman",
    price: 22000,
    originalPrice: 25000,
    rating: 5.0,
    reviewCount: 142,
    badge: "REFRESHING",
    description:
      "Mocktail buah segar tropis bertingkat dengan sensasi rasa manis asam segar jeruk sunkist, sirup eksotis, soda dingin, dan daun mint pelepas dahaga.",
    ingredients: [
      "Sari Jeruk Sunkist Segar",
      "Blue Curacao Syrup",
      "Soda Dingin Menyegarkan",
      "Daun Mint Segar",
    ],
    imageUrl: "/images/products/minuman-saika-breeze.jpg",
    isPopular: false,
  },
  {
    id: "minuman-matcha-float",
    slug: "minuman-matcha-float",
    name: "Matcha Milkshake Float",
    category: "Minuman & Kopi",
    categorySlug: "minuman",
    price: 18000,
    originalPrice: 21000,
    rating: 4.9,
    reviewCount: 135,
    badge: "FLOAT SERIES",
    description:
      "Milkshake matcha Jepang premium dengan aroma teh hijau otentik yang harum, disajikan dengan topping satu scoop es krim vanila lembut lumer di atasnya.",
    ingredients: [
      "Bubuk Matcha Pilihan",
      "Susu Murni Segar",
      "Es Krim Vanila Lembut",
      "Gula Alami",
    ],
    imageUrl: "/images/products/minuman-matcha-float.jpg",
    isPopular: false,
  },
  {
    id: "minuman-clouds-lychee-yakult",
    slug: "minuman-clouds-lychee-yakult",
    name: "Clouds Lychee Yakult",
    category: "Minuman & Kopi",
    categorySlug: "minuman",
    price: 14000,
    originalPrice: 17000,
    rating: 4.9,
    reviewCount: 120,
    badge: "YAKULT SERIES",
    description:
      "Minuman probiotik Yakult dingin dipadukan dengan sirup buah leci manis menyegarkan dan potongan buah leci asli yang juicy.",
    ingredients: [
      "Yakult Probiotik Asli",
      "Buah Leci Segar",
      "Sirup Leci Pilihan",
      "Es Batu Kristal",
    ],
    imageUrl: "/images/products/minuman-yakult-series.jpg",
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

export const PRODUCT_TRANSLATIONS_EN: Record<
  string,
  { name: string; category: string; description: string; ingredients: string[] }
> = {
  "bolu-keju-classic": {
    name: "Classic Cheese",
    category: "Cheese Chiffon",
    description: "Authentic Soreang soft cheese chiffon cake with rich savory baked cheddar cheese topping on every slice.",
    ingredients: ["Selected Cheddar Cheese", "Pure Fresh Milk", "Fresh Farm Eggs", "Wheat Flour", "Pure Butter"],
  },
  "bolu-keju-double": {
    name: "Double Cheese",
    category: "Cheese Chiffon",
    description: "Special cheese chiffon with double indulgence: crispy baked cheddar on top plus rich savory cheese cubes inside the sponge.",
    ingredients: ["Savory Diced Cheese", "Baked Cheddar Cheese", "Pure Fresh Milk", "Fresh Eggs", "Pure Butter"],
  },
  "bolu-keju-extra": {
    name: "Extra Cheese",
    category: "Cheese Chiffon",
    description: "Super fluffy cheese chiffon crowned with mountains of freshly shredded savory cheddar cheese all over the surface.",
    ingredients: ["Abundant Shredded Cheddar", "Selected Cheese", "Pure Fresh Milk", "Fresh Eggs", "Pure Butter"],
  },
  "bolu-pandan-classic": {
    name: "Classic Pandan",
    category: "Cheese Chiffon",
    description: "Delicate pandan chiffon with natural suji & pandan extract aroma, topped with golden toasted cheddar cheese.",
    ingredients: ["Natural Pandan & Suji Extract", "Toasted Cheddar Cheese", "Pure Fresh Milk", "Fresh Eggs", "Pure Butter"],
  },
  "bolu-pandan-double": {
    name: "Double Pandan",
    category: "Cheese Chiffon",
    description: "Aromatic pandan chiffon with double delight: crispy baked cheddar topping and abundant savory cheese cubes baked inside.",
    ingredients: ["Natural Pandan Extract", "Diced Cheese Cubes", "Toasted Cheddar Cheese", "Fresh Milk", "Fresh Eggs"],
  },
  "bolu-pandan-extra": {
    name: "Extra Pandan",
    category: "Cheese Chiffon",
    description: "Fragrant soft pandan chiffon loaded with extra generous shredded cheddar cheese covering the entire cake.",
    ingredients: ["Abundant Shredded Cheese", "Natural Pandan Extract", "Selected Cheddar", "Fresh Milk", "Fresh Eggs"],
  },
  "bolu-cokelat-classic": {
    name: "Classic Chocolate",
    category: "Cheese Chiffon",
    description: "Fluffy chocolate chiffon with deep cocoa richness, topped with toasted cheddar cheese and crunchy choco chips.",
    ingredients: ["Selected Cocoa", "Toasted Cheddar Cheese", "Fresh Dairy Milk", "Fresh Eggs", "Pure Butter"],
  },
  "bolu-red-velvet-classic": {
    name: "Classic Red Velvet",
    category: "Cheese Chiffon",
    description: "Moist and tender red velvet cake with elegant vanilla-cocoa aroma, finished with savory toasted cheddar cheese.",
    ingredients: ["Selected Red Velvet Batter", "Toasted Cheddar Cheese", "Fresh Milk", "Fresh Eggs", "Pure Butter"],
  },
  "dessert-cube-matcha": {
    name: "Matcha Dessert Cube",
    category: "Dessert Cube",
    description: "Artisan dessert cube featuring soft sponge cake, melting sweet savory dairy cream, and premium Japanese matcha dust.",
    ingredients: ["Premium Japanese Matcha", "Soft Sponge Cake", "Melting Sweet Cream", "Pure Dairy Milk"],
  },
  "dessert-cube-strawberry": {
    name: "Strawberry Dessert Cube",
    category: "Dessert Cube",
    description: "Luscious dessert cube layered with tender sponge, melting cream cheese frosting, and luscious fresh strawberry compote.",
    ingredients: ["Fresh Strawberry Compote", "Cream Cheese Frosting", "Vanilla Sponge Cake", "Pure Dairy Milk"],
  },
  "minuman-es-kopi-aren": {
    name: "Palm Sugar Iced Coffee",
    category: "Drinks & Coffee",
    description: "Signature iced coffee blend with premium espresso, creamy fresh milk, and authentic Indonesian palm sugar.",
    ingredients: ["Arabica Espresso Shot", "Fresh Cow Milk", "Organic Palm Sugar", "Purified Ice"],
  },
  "minuman-boba-cheese-brulee": {
    name: "Boba Cheese Brulee",
    category: "Drinks & Coffee",
    description: "Chewy boba pearls paired with fresh milk, rich brown sugar, and a flame-torched savory cheese brulee crown.",
    ingredients: ["Chewy Tapioca Boba", "Torched Cream Cheese", "Brown Sugar Glaze", "Fresh Milk"],
  },
  "minuman-saika-breeze": {
    name: "Saika Breeze Mocktail",
    category: "Drinks & Coffee",
    description: "Refreshing citrus mocktail infused with crisp sparkling soda and cooling natural mint essence.",
    ingredients: ["Citrus Juice Extract", "Sparkling Soda", "Fresh Mint Leaves", "Crushed Ice"],
  },
  "minuman-yakult-series": {
    name: "Lychee Yakult Breeze",
    category: "Drinks & Coffee",
    description: "Sparkling probiotic Yakult infused with fragrant lychee fruit nectar, perfectly complementing your cheese cake.",
    ingredients: ["Probiotic Yakult", "Fragrant Lychee Fruit", "Sparkling Water", "Ice Cubes"],
  },
  "minuman-matcha-float": {
    name: "Matcha Float Ice Cream",
    category: "Drinks & Coffee",
    description: "Premium iced matcha green tea latte topped with a luxurious scoop of velvety artisanal vanilla ice cream.",
    ingredients: ["Pure Matcha Powder", "Artisanal Vanilla Ice Cream", "Fresh Milk", "Ice"],
  },
};

export function getLocalizedProduct(item: ProductItem, lang: "id" | "en"): ProductItem {
  if (lang === "id") return item;
  const trans = PRODUCT_TRANSLATIONS_EN[item.id];
  if (!trans) return item;
  return {
    ...item,
    name: trans.name,
    category: trans.category,
    description: trans.description,
    ingredients: trans.ingredients,
  };
}
