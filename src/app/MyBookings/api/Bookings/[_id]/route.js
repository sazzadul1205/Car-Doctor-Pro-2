import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("Bookings");

    // Validate `params._id`
    if (!params?._id) {
      return new NextResponse(
        JSON.stringify({ error: "Booking ID is required" }),
        {
          status: 400,
        }
      );
    }

    const result = await bookingsCollection.deleteOne({
      _id: new ObjectId(params._id),
    });

    if (result.deletedCount === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No booking found with the given ID" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Booking deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting booking:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to delete booking" }),
      {
        status: 500,
      }
    );
  }
};

export const GET = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("Bookings");

    // Validate `params._id`
    if (!params?._id) {
      return new NextResponse(
        JSON.stringify({ error: "Booking ID is required" }),
        {
          status: 400,
        }
      );
    }

    // Fetch the booking by ID
    const booking = await bookingsCollection.findOne({
      _id: new ObjectId(params._id),
    });

    if (!booking) {
      return new NextResponse(
        JSON.stringify({ error: "No booking found with the given ID" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(booking), { status: 200 });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch booking" }),
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("Bookings");

    // Validate `params._id`
    if (!params?._id) {
      return new NextResponse(
        JSON.stringify({ error: "Booking ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const bookingId = params._id;

    // Parse request body
    const updateDoc = await request.json();

    // Update the booking
    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(bookingId) },
      {
        $set: {
          ...updateDoc,
        },
      }
    );

    if (result.matchedCount === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No booking found with the given ID" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Booking updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating booking:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to update booking" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
