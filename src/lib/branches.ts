/**
 * Konfigurasi Terpusat Sistem Multi-Cabang BOKIS
 * Mendukung BOKIS Soreang dan BOKIS Arcamanik, serta scalable untuk cabang baru berikutnya.
 */

export type BranchId = "soreang" | "arcamanik";

export interface BranchConfig {
  id: BranchId;
  name: string;
  badge: string;
  city: string;
  taglineId: string;
  taglineEn: string;
  address: string;
  operatingHoursId: string;
  operatingHoursEn: string;
  whatsappAdmin: string;
  whatsappDisplay: string;
  googleMapsUrl: string;
  googleReviewUrl: string;
  popularDistricts: string[];
}

export const BRANCHES: Record<BranchId, BranchConfig> = {
  soreang: {
    id: "soreang",
    name: "BOKIS Soreang",
    badge: "Outlet Soreang (Pusat)",
    city: "Kabupaten Bandung",
    taglineId: "Dapur & Outlet Pusat Soreang, Kab. Bandung",
    taglineEn: "Central Kitchen & Outlet Soreang, Bandung Regency",
    address:
      "Jl. Raya Soreang - Banjaran, Sekarwangi, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40914",
    operatingHoursId: "Setiap Hari: 07.00 - 21.00 WIB",
    operatingHoursEn: "Daily: 07:00 AM - 09:00 PM WIB",
    whatsappAdmin: "6282129923727",
    whatsappDisplay: "0821-2992-3727",
    googleMapsUrl:
      "https://www.google.com/maps/place/Bokis+Soreang/@-7.0202874,107.5397411,12z/data=!4m12!1m2!2m1!1sbokis!3m8!1s0x2e68ed2eb16bc0a9:0x841e320fe9964b42!8m2!3d-7.020309!4d107.539479!9m1!1b1!15sCgVib2tpc1oHIgVib2tpc5IBCWNha2Vfc2hvcJoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVOQk1rMTFUMTlSUlJBQuABAPoBBAgAEEM!16s%2Fg%2F11rwjm2dlr?entry=ttu",
    googleReviewUrl:
      "https://www.google.com/search?hl=id-ID&gl=id&q=Bokis+Soreang,+jl.+Cagak,+RT.001/RW.005,+Sekarwangi,+Kec.+Soreang,+Kabupaten+Bandung,+Jawa+Barat+40914&ludocid=9520101706232646466&lsig=AB86z5UbCp89mgMdTZM5Q2yn_2xM#lrd=0x2e68ed2eb16bc0a9:0x841e320fe9964b42,3",
    popularDistricts: [
      "Soreang",
      "Kutawaringin",
      "Katapang",
      "Banjaran",
      "Cangkuang",
      "Pasirjambu",
      "Ciwidey",
      "Margahayu",
    ],
  },
  arcamanik: {
    id: "arcamanik",
    name: "BOKIS Arcamanik",
    badge: "Cabang Arcamanik",
    city: "Kota Bandung",
    taglineId: "Dapur & Outlet Cabang Arcamanik, Kota Bandung",
    taglineEn: "Kitchen & Branch Outlet Arcamanik, Bandung City",
    address:
      "Jl. Cisaranten Kulon No. 40, Arcamanik, Kota Bandung, Jawa Barat 40294",
    operatingHoursId: "Setiap Hari: 07.00 - 21.00 WIB",
    operatingHoursEn: "Daily: 07:00 AM - 09:00 PM WIB",
    whatsappAdmin: "6285117829842",
    whatsappDisplay: "0851-1782-9842",
    googleMapsUrl:
      "https://www.google.com/maps/place/BOKIS+ARCAMANIK/@-6.9312515,107.676943,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68c3006440c07d:0xcfe5fde26e371782!8m2!3d-6.9312568!4d107.6795179!16s%2Fg%2F11msdtfz7q",
    googleReviewUrl:
      "https://www.google.com/search?hl=id-ID&gl=id&q=BOKIS+ARCAMANIK&ludocid=14981258237378946946#lrd=0x2e68c3006440c07d:0xcfe5fde26e371782,3",
    popularDistricts: [
      "Arcamanik",
      "Antapani",
      "Cisaranten",
      "Cinambo",
      "Ujungberung",
      "Cibiru",
      "Gedebage",
      "Batununggal",
    ],
  },
};

export const BRANCH_LIST: BranchConfig[] = Object.values(BRANCHES);

export const DEFAULT_BRANCH_ID: BranchId = "soreang";

export function isValidBranchId(val: unknown): val is BranchId {
  return typeof val === "string" && (val === "soreang" || val === "arcamanik");
}
