export type Language = "id" | "en";

export interface I18nContent {
  nav: {
    home: string;
    categories: string;
    treats: string;
    about: string;
    creations: string;
    contactUs: string;
    cart: string;
  };
  hero: {
    badge: string;
    line1: string;
    line2: string;
    orderNow: string;
    from: string;
    satisfiedCount: string;
    satisfiedLabel: string;
    brandStatement: {
      pre: string;
      tag: string;
      mid: string;
      body: string;
    };
  };
  categories: {
    title: string;
    topPicks: string;
    boluKiju: string;
    dessertCube: string;
    chiramisu: string;
    allMenu: string;
  };
  whyUs: {
    title: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  treats: {
    title: string;
    tabs: {
      all: string;
      topPicks: string;
      boluKiju: string;
      dessertCube: string;
      chiramisu: string;
      minuman: string;
    };
    showMore: string;
    quickView: string;
    addToCart: string;
  };
  specialOffer: {
    title: string;
    off: string;
    exploreMore: string;
    claim: string;
  };
  testimonials: {
    title: string;
    contactUs: string;
  };
  creations: {
    title: string;
    seeMore: string;
  };
  faq: {
    title: string;
  };
  contact: {
    headingLine1: string;
    headingLine2: string;
    headingLine3: string;
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    numberLabel: string;
    numberPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sentButton: string;
  };
  modal: {
    quickView: string;
    ingredients: string;
    tasteProfile: string;
    tasteDesc: string;
    shelfLife: string;
    shelfLifeDesc: string;
    quantity: string;
    addToCart: string;
    orderWhatsApp: string;
    close: string;
  };
  cart: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyDesc: string;
    exploreMenu: string;
    itemsCount: string;
    deliveryDetails: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    districtLabel: string;
    addressLabel: string;
    addressPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    subtotal: string;
    deliveryFee: string;
    deliveryFeeNote: string;
    total: string;
    submitWa: string;
    submittingWa: string;
    footerNote: string;
  };
}

export const DICTIONARY: Record<Language, I18nContent> = {
  id: {
    nav: {
      home: "Beranda",
      categories: "Kategori",
      treats: "Menu",
      about: "Keunggulan",
      creations: "Kreasi",
      contactUs: "Hubungi Kami",
      cart: "Keranjang Belanja",
    },
    hero: {
      badge: "Khas Soreang, Kabupaten Bandung",
      line1: "DIPANGGANG SEGAR,",
      line2: "SEMPURNA MANISNYA",
      orderNow: "Pesan Sekarang",
      from: "Mulai",
      satisfiedCount: "5000+",
      satisfiedLabel: "Pesanan",
      brandStatement: {
        pre: "DI",
        tag: "BOKIS SOREANG",
        mid: ", KAMI MENGUTAMAKAN",
        body: "MUTU BAHAN DAN KUALITAS RASA. SETIAP BOLU KEJU DAN CHIRAMISU DIOLAH SECARA HIGIENIS DENGAN RESEP TRADISIONAL BERKUALITAS UNTUK MENGHADIRKAN KELEZATAN TERBAIK BAGI KELUARGA ANDA.",
      },
    },
    categories: {
      title: "KATEGORI MENU",
      topPicks: "PILIHAN RESTO",
      boluKiju: "BOLU KIJU SOREANG",
      dessertCube: "DESSERT CUBE",
      chiramisu: "ANEKA CHIRAMISU",
      allMenu: "SEMUA MENU",
    },
    whyUs: {
      title: "KEUNGGULAN KAMI",
      features: [
        {
          title: "DIPANGGANG SEGAR SETIAP HARI",
          description:
            "Seluruh produk dipanggang setiap hari di dapur kami di Soreang untuk menjamin kesegaran dan kelembutan tekstur.",
        },
        {
          title: "STANDAR HIGIENIS TERJAGA",
          description:
            "Proses pengolahan dikerjakan secara teliti dengan standar kebersihan dan sanitasi yang terjaga.",
        },
        {
          title: "BAHAN BAKU BERKUALITAS",
          description:
            "Menggunakan keju cheddar pilihan, susu segar, dan bahan-bahan bermutu tanpa bahan pengawet buatan.",
        },
        {
          title: "PENGIRIMAN AMAN & CEPAT",
          description:
            "Layanan kurir kilat menjangkau wilayah Soreang, Bandung Selatan, Kota Bandung, dan sekitarnya.",
        },
      ],
    },
    treats: {
      title: "DAFTAR MENU",
      tabs: {
        all: "Semua Menu",
        topPicks: "Pilihan Resto",
        boluKiju: "Bolu Kiju Soreang",
        dessertCube: "Dessert Cube",
        chiramisu: "Aneka Chiramisu",
        minuman: "Minuman & Kopi",
      },
      showMore: "Lihat Semua Menu",
      quickView: "Lihat Detail",
      addToCart: "Tambah",
    },
    specialOffer: {
      title: "PENAWARAN SPESIAL",
      off: "HEMAT",
      exploreMore: "Lihat Seluruh Menu",
      claim: "Pesan Promo",
    },
    testimonials: {
      title: "APRESIASI PELANGGAN",
      contactUs: "Hubungi Kami",
    },
    creations: {
      title: "GALERI KREASI KAMI",
      seeMore: "Lihat Semua Kreasi",
    },
    faq: {
      title: "PERTANYAAN UMUM",
    },
    contact: {
      headingLine1: "PESAN BOLU",
      headingLine2: "SEGAR SEKARANG",
      headingLine3: "DARI DAPUR KAMI",
      title: "FORMULIR PEMESANAN",
      nameLabel: "NAMA LENGKAP:",
      namePlaceholder: "Masukkan nama lengkap Anda",
      numberLabel: "NOMOR WHATSAPP:",
      numberPlaceholder: "Contoh: 081234567890",
      emailLabel: "ALAMAT EMAIL:",
      emailPlaceholder: "nama@email.com",
      messageLabel: "CATATAN / PESANAN KHUSUS:",
      messagePlaceholder: "Tuliskan kebutuhan acara, tanggal pengiriman, atau catatan khusus...",
      sendButton: "Kirim ke WhatsApp",
      sentButton: "Pesan Terkirim",
    },
    modal: {
      quickView: "Rincian Menu",
      ingredients: "Komposisi Bahan",
      tasteProfile: "Karakteristik Rasa",
      tasteDesc: "Tekstur bolu yang lembut berpadu dengan gurihnya keju pilihan yang kaya rasa di setiap potongan.",
      shelfLife: "Petunjuk Penyimpanan",
      shelfLifeDesc: "Daya tahan 3–4 hari pada suhu ruang sejuk, atau hingga 7–10 hari di lemari pendingin (chiller).",
      quantity: "Jumlah",
      addToCart: "Tambah ke Keranjang",
      orderWhatsApp: "Pesan via WhatsApp",
      close: "Tutup",
    },
    cart: {
      title: "Keranjang Pesanan",
      subtitle: "Bokis Soreang, Kab. Bandung",
      emptyTitle: "Keranjang Masih Kosong",
      emptyDesc: "Silakan pilih varian bolu atau chiramisu dari daftar menu kami untuk melanjutkan pemesanan.",
      exploreMenu: "Pilih Menu",
      itemsCount: "Daftar Pesanan",
      deliveryDetails: "Informasi Pengiriman (Soreang & Bandung)",
      nameLabel: "Nama Pemesan *",
      namePlaceholder: "Nama pemesan",
      phoneLabel: "Nomor WhatsApp *",
      phonePlaceholder: "081234567890",
      districtLabel: "Kecamatan / Wilayah *",
      addressLabel: "Alamat Lengkap *",
      addressPlaceholder: "Alamat lengkap pengiriman",
      notesLabel: "Catatan Tambahan (Opsional)",
      notesPlaceholder: "Contoh: ucapan khusus atau instruksi pengiriman",
      subtotal: "Subtotal",
      deliveryFee: "Biaya Pengiriman",
      deliveryFeeNote: "Dikonfirmasi langsung oleh Admin via WhatsApp",
      total: "Total Pembayaran",
      submitWa: "Kirim Pesanan ke WhatsApp",
      submittingWa: "Menghubungkan ke WhatsApp...",
      footerNote: "Pesanan Anda akan diproses langsung oleh staf dapur Bokis Soreang.",
    },
  },
  en: {
    nav: {
      home: "Home",
      categories: "Categories",
      treats: "Menu",
      about: "Why Us",
      creations: "Creations",
      contactUs: "Contact Us",
      cart: "Cart",
    },
    hero: {
      badge: "Soreang, Bandung Regency Specialty",
      line1: "FRESHLY BAKED,",
      line2: "AUTHENTIC TASTE",
      orderNow: "Order Now",
      from: "From",
      satisfiedCount: "5000+",
      satisfiedLabel: "Orders",
      brandStatement: {
        pre: "AT",
        tag: "BOKIS SOREANG",
        mid: ", WE PRIORITIZE",
        body: "PREMIUM INGREDIENTS AND CONSISTENT QUALITY. EACH CHEESE CHIFFON AND CHIRAMISU IS PREPARED WITH METICULOUS HYGIENE TO BRING THE FINEST FLAVORS TO YOUR FAMILY TABLE.",
      },
    },
    categories: {
      title: "MENU CATEGORIES",
      topPicks: "RESTO'S TOP PICKS",
      boluKiju: "SOREANG CHEESE CHIFFON",
      dessertCube: "DESSERT CUBE",
      chiramisu: "CHIRAMISU SELECTION",
      allMenu: "ALL MENUS",
    },
    whyUs: {
      title: "WHY CHOOSE US",
      features: [
        {
          title: "BAKED FRESH DAILY",
          description:
            "All products are freshly baked every day at our Soreang kitchen to ensure peak texture and flavor.",
        },
        {
          title: "STRICT HYGIENE STANDARDS",
          description:
            "Carefully prepared in compliance with rigorous food handling and sanitation practices.",
        },
        {
          title: "PREMIUM QUALITY INGREDIENTS",
          description:
            "Crafted with select aged cheddar, fresh dairy milk, and natural ingredients without artificial preservatives.",
        },
        {
          title: "FAST & SECURE DELIVERY",
          description:
            "Reliable courier delivery across Soreang, South Bandung, Bandung City, and surrounding areas.",
        },
      ],
    },
    treats: {
      title: "MENU SELECTIONS",
      tabs: {
        all: "All Menus",
        topPicks: "Resto's Top Picks",
        boluKiju: "Cheese Chiffon",
        dessertCube: "Dessert Cube",
        chiramisu: "Chiramisu",
        minuman: "Drinks & Coffee",
      },
      showMore: "View All Menus",
      quickView: "Details",
      addToCart: "Add",
    },
    specialOffer: {
      title: "SPECIAL OFFERS",
      off: "SAVE",
      exploreMore: "Explore All Menus",
      claim: "Claim Offer",
    },
    testimonials: {
      title: "CUSTOMER APPRECIATION",
      contactUs: "Contact Us",
    },
    creations: {
      title: "OUR GALLERY",
      seeMore: "View All Creations",
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
    },
    contact: {
      headingLine1: "ORDER FRESH",
      headingLine2: "CHEESE CHIFFON",
      headingLine3: "TODAY",
      title: "ORDER INQUIRY",
      nameLabel: "FULL NAME:",
      namePlaceholder: "Enter your full name",
      numberLabel: "WHATSAPP NUMBER:",
      numberPlaceholder: "e.g., 081234567890",
      emailLabel: "EMAIL ADDRESS:",
      emailPlaceholder: "name@email.com",
      messageLabel: "ORDER DETAILS / NOTES:",
      messagePlaceholder: "Specify quantities, delivery date, or custom requests...",
      sendButton: "Send via WhatsApp",
      sentButton: "Message Sent",
    },
    modal: {
      quickView: "Menu Details",
      ingredients: "Key Ingredients",
      tasteProfile: "Taste Profile",
      tasteDesc: "Soft and airy texture with savory authentic cheese richness in every slice.",
      shelfLife: "Storage Guide",
      shelfLifeDesc: "Lasts 3–4 days at cool room temperature, or up to 7–10 days refrigerated.",
      quantity: "Quantity",
      addToCart: "Add to Cart",
      orderWhatsApp: "Order via WhatsApp",
      close: "Close",
    },
    cart: {
      title: "Order Cart",
      subtitle: "Bokis Soreang, Kab. Bandung",
      emptyTitle: "Your Cart is Empty",
      emptyDesc: "Select your favorite chiffon or chiramisu from our menu to start your order.",
      exploreMenu: "Browse Menu",
      itemsCount: "Items in Cart",
      deliveryDetails: "Delivery Information (Soreang & Bandung)",
      nameLabel: "Customer Name *",
      namePlaceholder: "Full name",
      phoneLabel: "WhatsApp Number *",
      phonePlaceholder: "081234567890",
      districtLabel: "District / Region *",
      addressLabel: "Complete Address *",
      addressPlaceholder: "Delivery address",
      notesLabel: "Additional Notes (Optional)",
      notesPlaceholder: "e.g., specific instructions or greetings",
      subtotal: "Subtotal",
      deliveryFee: "Delivery Fee",
      deliveryFeeNote: "Confirmed directly by Admin via WhatsApp",
      total: "Total Payment",
      submitWa: "Send Order to WhatsApp",
      submittingWa: "Redirecting to WhatsApp...",
      footerNote: "Your order is prepared fresh at our Soreang kitchen.",
    },
  },
};
