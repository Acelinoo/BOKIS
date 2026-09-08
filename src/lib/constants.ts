/**
 * Konfigurasi Informasi Bisnis & Link Eksternal Bokis Soreang
 */

// Google Place ID resmi Bokis Soreang (ekstraksi dari CID: 0x2e68ed2eb16bc0a9:0x841e320fe9964b42)
export const GOOGLE_PLACE_ID = "ChIJqcBrsS7taC4RQkuW6Q8yHoQ";

/**
 * Universal Endpoint resmi Google Review.
 * Bekerja 100% kompatibel di Desktop (membuka pop-up rating dialog)
 * dan Mobile/HP (otomatis deep-link ke form ulasan Google Maps bintang 5).
 */
export const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

/**
 * Link navigasi Google Maps untuk lokasi fisik outlet Bokis Soreang.
 */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Bokis+Soreang/@-7.0202874,107.5397411,12z/data=!4m12!1m2!2m1!1sbokis!3m8!1s0x2e68ed2eb16bc0a9:0x841e320fe9964b42!8m2!3d-7.020309!4d107.539479!9m1!1b1!15sCgVib2tpc1oHIgVib2tpc5IBCWNha2Vfc2hvcJoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVOQk1rMTFUMTlSUlJBQuABAPoBBAgAEEM!16s%2Fg%2F11rwjm2dlr?entry=ttu";
