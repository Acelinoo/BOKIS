/**
 * Konfigurasi Informasi Bisnis & Link Eksternal BOKIS
 * Nilai default merujuk ke data cabang default (BOKIS Soreang)
 */
import { BRANCHES, DEFAULT_BRANCH_ID } from "./branches";

export * from "./branches";

// Backward-compatibility exports
export const GOOGLE_PLACE_ID = "ChIJqcBrsS7taC4RQkuW6Q8yHoQ";
export const GOOGLE_REVIEW_URL = BRANCHES[DEFAULT_BRANCH_ID].googleReviewUrl;
export const GOOGLE_MAPS_URL = BRANCHES[DEFAULT_BRANCH_ID].googleMapsUrl;
