import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerPhone, deliveryAddress, kecamatan, notes, totalAmount, items } = body;

    const orderNumber = `BOKIS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Coba simpan ke database Prisma (PostgreSQL Supabase)
    // Jika koneksi belum disetup oleh user, fallback tetap aman tanpa blocking order WA
    let savedOrder = null;
    try {
      savedOrder = await prisma.order.create({
        data: {
          orderNumber,
          customerName: customerName || "Pelanggan Bokis",
          customerPhone: customerPhone || "-",
          deliveryAddress: deliveryAddress || "-",
          kecamatan: kecamatan || "Soreang",
          notes: notes || "",
          totalAmount: totalAmount || 0,
          status: "PENDING_WA",
        },
      });
    } catch (dbError) {
      console.warn("Catatan: Database Prisma/Supabase belum terhubung atau offline. Pesanan tetap dialihkan ke WhatsApp.", dbError);
    }

    return NextResponse.json({
      success: true,
      orderNumber,
      savedToDb: !!savedOrder,
      message: "Pesanan siap diteruskan ke WhatsApp",
    });
  } catch (error) {
    console.error("Gagal memproses pesanan:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
