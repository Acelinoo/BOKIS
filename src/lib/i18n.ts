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
    cakes: string;
    sweets: string;
    cookies: string;
    chocolates: string;
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
      pastries: string;
      donuts: string;
      cakes: string;
      sweets: string;
      cookies: string;
      chocolates: string;
      giftBoxes: string;
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
      treats: "Menu Pilihan",
      about: "Tentang Kami",
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
      satisfiedCount: "10.000+",
      satisfiedLabel: "Pelanggan Terlayani",
      brandStatement: {
        pre: "DI",
        tag: "BOKIS SOREANG",
        mid: ", SENI MEMANGGANG",
        body: "ADALAH DEDIKASI KAMI DALAM MENGHADIRKAN KEHANGATAN DI SETIAP MEJA KELUARGA. SELURUH KUE DAN HIDANGAN MANIS DIOLAH DENGAN KETELITIAN TINGGI, MENGGUNAKAN BAHAN BERMUTU PREMIUM, SERTA CITA RASA TULUS YANG MENYATUKAN SETIAP MOMEN BERHARGA.",
      },
    },
    categories: {
      title: "KATEGORI MENU",
      cakes: "BOLU & CHIFFON",
      sweets: "PASTRY MANIS",
      cookies: "KUE KERING",
      chocolates: "COKELAT & KEJU",
    },
    whyUs: {
      title: "KEUNGGULAN KAMI",
      features: [
        {
          title: "DIPANGGANG SEGAR HARIAN",
          description:
            "Seluruh produk dipanggang setiap fajar di dapur Soreang untuk menjamin cita rasa, tekstur, dan kelembutan terbaik saat tiba di tangan Anda.",
        },
        {
          title: "DIPERSIAPKAN DENGAN PRESISI",
          description:
            "Setiap loyang bolu diolah dengan teknik kuliner terstandarisasi, higienitas terjaga, serta ketelitian penuh oleh tim baker berpengalaman.",
        },
        {
          title: "BAHAN BAKU PREMIUM",
          description:
            "Hanya menggunakan susu murni segar peternakan lokal Jawa Barat, mentega berkualitas tinggi, dan keju cheddar pilihan terbaik.",
        },
        {
          title: "PENGIRIMAN CEPAT & AMAN",
          description:
            "Layanan kurir kilat Instant dan Sameday menjangkau seluruh kawasan Soreang, Bandung Selatan, Kota Bandung, hingga Cimahi.",
        },
      ],
    },
    treats: {
      title: "MENU PALING DIMINATI",
      tabs: {
        all: "Semua",
        pastries: "Pastri",
        donuts: "Donat",
        cakes: "Bolu & Kue",
        sweets: "Manisan",
        cookies: "Kue Kering",
        chocolates: "Cokelat",
        giftBoxes: "Paket Hantaran",
      },
      showMore: "Lihat Menu Lengkap",
      quickView: "Lihat Detail",
      addToCart: "Tambah",
    },
    specialOffer: {
      title: "PENAWARAN SPESIAL",
      off: "HEMAT",
      exploreMore: "Jelajahi Menu Lainnya",
      claim: "Klaim Diskon",
    },
    testimonials: {
      title: "APRESIASI PELANGGAN",
      contactUs: "Hubungi Kami",
    },
    creations: {
      title: "GALERI KREASI KAMI",
      seeMore: "Lihat Galeri Lengkap",
    },
    faq: {
      title: "PERTANYAAN UMUM",
    },
    contact: {
      headingLine1: "MARI CIPTAKAN",
      headingLine2: "HIDANGAN ISTIMEWA",
      headingLine3: "BERSAMA KAMI",
      title: "LAYANAN PELANGGAN",
      nameLabel: "NAMA LENGKAP:",
      namePlaceholder: "Masukkan nama Anda",
      numberLabel: "NOMOR WHATSAPP:",
      numberPlaceholder: "Contoh: 081234567890",
      emailLabel: "ALAMAT EMAIL:",
      emailPlaceholder: "nama@domain.com",
      messageLabel: "PESAN / RINCIAN KEBUTUHAN:",
      messagePlaceholder: "Tuliskan kebutuhan acara, jumlah pesanan, atau pertanyaan khusus Anda...",
      sendButton: "Kirim Pesan ke WhatsApp",
      sentButton: "Pesan Terkirim!",
    },
    modal: {
      quickView: "Tinjauan Produk",
      ingredients: "Komposisi Bahan Pilihan",
      tasteProfile: "Karakteristik Rasa & Tekstur",
      tasteDesc: "Tekstur pori selembut awan, perpaduan wangi susu murni alami, dan gurihnya limpahan keju cheddar panggang yang renyah di bagian atas.",
      shelfLife: "Petunjuk Penyimpanan",
      shelfLifeDesc: "Daya tahan 3-4 hari pada suhu ruang sejuk, atau hingga 7-10 hari dalam lemari pendingin (chiller).",
      quantity: "Jumlah Pesanan",
      addToCart: "Tambah ke Keranjang",
      orderWhatsApp: "Pesan Langsung via WhatsApp",
      close: "Tutup",
    },
    cart: {
      title: "Keranjang Belanja",
      subtitle: "Bokis Soreang, Kab. Bandung",
      emptyTitle: "Keranjang Masih Kosong",
      emptyDesc: "Pilih varian bolu dan pastry favorit Anda dari katalog untuk memulai pesanan.",
      exploreMenu: "Lihat Menu Pilihan",
      itemsCount: "Daftar Pesanan",
      deliveryDetails: "Informasi Pengiriman (Soreang & Bandung Raya)",
      nameLabel: "Nama Pemesan *",
      namePlaceholder: "Nama pemesan",
      phoneLabel: "Nomor WhatsApp Aktif *",
      phonePlaceholder: "081234567890",
      districtLabel: "Kecamatan / Wilayah *",
      addressLabel: "Alamat Lengkap & Patokan *",
      addressPlaceholder: "Alamat pengiriman / patokan jalan",
      notesLabel: "Catatan Khusus (Opsional)",
      notesPlaceholder: "Misal: potong 16 bagian, tambah ucapan selamat",
      subtotal: "Subtotal Produk",
      deliveryFee: "Biaya Pengiriman",
      deliveryFeeNote: "Dihitung resmi oleh Admin via WhatsApp",
      total: "Total Pembayaran",
      submitWa: "Kirim Pesanan ke WhatsApp",
      submittingWa: "Meneruskan Pesanan...",
      footerNote: "Pesanan akan langsung dipersiapkan oleh staf dapur Bokis Soreang.",
    },
  },
  en: {
    nav: {
      home: "Home",
      categories: "Categories",
      treats: "Treats",
      about: "About",
      creations: "Creations",
      contactUs: "Contact Us",
      cart: "Shopping Cart",
    },
    hero: {
      badge: "Soreang, Bandung Regency Specialty",
      line1: "FRESHLY MADE,",
      line2: "PERFECTLY SWEET",
      orderNow: "Order Now",
      from: "From",
      satisfiedCount: "10K+",
      satisfiedLabel: "Satisfied Customers",
      brandStatement: {
        pre: "AT",
        tag: "BOKIS BAKERY",
        mid: ", BAKING",
        body: "IS MORE THAN A CRAFT—IT'S OUR WAY OF CREATING MOMENTS PEOPLE CAN ENJOY TOGETHER. EVERY CAKE, PASTRY, AND SWEET TREAT IS MADE WITH ATTENTION TO DETAIL, QUALITY INGREDIENTS, AND A GENUINE LOVE FOR BRINGING SMILES TO EVERY TABLE.",
      },
    },
    categories: {
      title: "OUR CATEGORIES",
      cakes: "CAKES",
      sweets: "SWEETS",
      cookies: "COOKIES",
      chocolates: "CHOCOLATES",
    },
    whyUs: {
      title: "WHY US",
      features: [
        {
          title: "FRESH DAILY",
          description:
            "Our products are baked fresh daily at our Soreang kitchen to ensure the best taste, texture, and highest quality.",
        },
        {
          title: "CRAFTED WITH CARE",
          description:
            "Every cake, pastry, and sweet treat is prepared with culinary passion, precise technique, and uncompromising hygiene.",
        },
        {
          title: "PREMIUM INGREDIENTS",
          description:
            "We exclusively utilize fresh local farm milk, premium dairy butter, and select aged cheddar cheese.",
        },
        {
          title: "FAST DELIVERY",
          description:
            "Enjoy your favorite treats delivered fresh, safe, and on time across Soreang and the greater Bandung area.",
        },
      ],
    },
    treats: {
      title: "MOST LOVED TREATS",
      tabs: {
        all: "All",
        pastries: "Pastries",
        donuts: "Donuts",
        cakes: "Cakes",
        sweets: "Sweets",
        cookies: "Cookies",
        chocolates: "Chocolates",
        giftBoxes: "Gift Boxes",
      },
      showMore: "Show More",
      quickView: "Quick View",
      addToCart: "Add",
    },
    specialOffer: {
      title: "SPECIAL OFFER",
      off: "OFF",
      exploreMore: "Explore More",
      claim: "Claim Offer",
    },
    testimonials: {
      title: "LOVED BY OUR CUSTOMERS",
      contactUs: "Contact Us",
    },
    creations: {
      title: "OUR SWEET CREATIONS",
      seeMore: "See More Creations",
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTION",
    },
    contact: {
      headingLine1: "LET'S MAKE",
      headingLine2: "SOMETHING SWEET",
      headingLine3: "TOGETHER",
      title: "CONTACT US",
      nameLabel: "NAME:",
      namePlaceholder: "Your Name",
      numberLabel: "NUMBER:",
      numberPlaceholder: "Your Number",
      emailLabel: "EMAIL:",
      emailPlaceholder: "Your Email",
      messageLabel: "MESSAGE:",
      messagePlaceholder: "Your message",
      sendButton: "Send Message",
      sentButton: "Message Sent!",
    },
    modal: {
      quickView: "Product Overview",
      ingredients: "Key Ingredients",
      tasteProfile: "Flavor & Texture Profile",
      tasteDesc: "Cloud-soft chiffon crumb, delicate balance of farm-fresh milk aroma, crowned with oven-toasted crispy cheddar shreds.",
      shelfLife: "Storage & Freshness Guide",
      shelfLifeDesc: "Stays optimal for 3–4 days at ambient room temperature, or 7–10 days when refrigerated.",
      quantity: "Quantity",
      addToCart: "Add to Cart",
      orderWhatsApp: "Order via WhatsApp",
      close: "Close",
    },
    cart: {
      title: "Order Cart",
      subtitle: "Bokis Soreang, Bandung",
      emptyTitle: "Your Cart is Empty",
      emptyDesc: "Select your favorite chiffon cakes and treats from our catalog to begin.",
      exploreMenu: "Browse Menu",
      itemsCount: "Selected Items",
      deliveryDetails: "Delivery Details (Soreang & Bandung)",
      nameLabel: "Full Name *",
      namePlaceholder: "Customer name",
      phoneLabel: "Active WhatsApp Number *",
      phonePlaceholder: "081234567890",
      districtLabel: "District / Region *",
      addressLabel: "Complete Address & Landmarks *",
      addressPlaceholder: "Delivery address & landmark",
      notesLabel: "Special Notes (Optional)",
      notesPlaceholder: "e.g., pre-sliced, birthday message",
      subtotal: "Product Subtotal",
      deliveryFee: "Delivery Courier Fee",
      deliveryFeeNote: "Calculated by Store Admin via WhatsApp",
      total: "Total Payment",
      submitWa: "Send Order to WhatsApp",
      submittingWa: "Connecting to WhatsApp...",
      footerNote: "Your order will be handcrafted and prepared fresh by our Soreang kitchen team.",
    },
  },
};
