import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();
  const db = connectDB();
  const bookingCollection = db.collection("Bookings");

  try {
    const newBooking = await bookingCollection.insertOne(booking);
    return Response.json({ message: "Service Booking Successfully" });
  } catch (error) {
    console.log(error);
  }
};
