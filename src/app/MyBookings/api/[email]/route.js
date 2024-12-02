import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("Bookings");

  try {
    const { email } = params; // Ensure params contains the `email` key
    const MyBookings = await bookingsCollection.find({ email }).toArray();

    return new NextResponse(
      JSON.stringify({ success: true, bookings: MyBookings }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return new NextResponse(
      JSON.stringify({ success: false, message: "Failed to fetch bookings" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
