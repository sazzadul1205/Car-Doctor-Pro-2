import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("Bookings");

    // Validate `params._id`
    if (!params?._id) {
      return new Response(JSON.stringify({ error: "Booking ID is required" }), {
        status: 400,
      });
    }

    // Fetch the booking by ID
    const booking = await bookingsCollection.findOne({
      _id: new ObjectId(params._id),
    });

    if (!booking) {
      return new Response(
        JSON.stringify({ error: "No booking found with the given ID" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(booking), { status: 200 });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch booking" }), {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("Bookings");

    // Validate `params._id`
    if (!params?._id) {
      return new Response(JSON.stringify({ error: "Booking ID is required" }), {
        status: 400,
      });
    }

    const result = await bookingsCollection.deleteOne({
      _id: new ObjectId(params._id),
    });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ error: "No booking found with the given ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Booking deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting booking:", error);
    return new Response(JSON.stringify({ error: "Failed to delete booking" }), {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("Bookings");

    // Validate `params._id`
    if (!params?._id) {
      return new Response(JSON.stringify({ error: "Booking ID is required" }), {
        status: 400,
      });
    }

    const body = await request.json();

    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(params._id) },
      { $set: body } // Updates with the provided fields
    );

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ error: "No booking found with the given ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Booking updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating booking:", error);
    return new Response(JSON.stringify({ error: "Failed to update booking" }), {
      status: 500,
    });
  }
};
