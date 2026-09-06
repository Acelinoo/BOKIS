import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BOKIS | Freshly Made, Perfectly Sweet - Bolu Keju Susu Soreang",
  description:
    "Bolu chiffon keju susu premium khas Soreang, Kabupaten Bandung. Tekstur super lembut, aroma susu murni segar, dan taburan keju cheddar panggang melimpah. Fresh daily!",
  keywords: [
    "bolu keju",
    "bolu susu",
    "bolu soreang",
    "kuliner bandung",
    "kue bandung",
    "bokis",
    "sweet nest",
    "bolu chiffon",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${fredoka.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF5EB] text-[#291E16] font-sans selection:bg-[#F9A934] selection:text-[#291E16]">
        {children}
      </body>
    </html>
  );
}
