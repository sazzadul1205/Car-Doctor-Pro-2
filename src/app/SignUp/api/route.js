import bcrypt from "bcryptjs"; // Import bcrypt for hashing
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    // Parse the incoming request body
    const newUser = await request.json();

    // Connect to the database
    const db = await connectDB();
    const userCollection = db.collection("Users");

    // Check if the user already exists
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return new NextResponse(
        JSON.stringify({ message: "User already exists" }),
        {
          status: 409, // Conflict
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Hash the user's password
    const saltRounds = 10; // Recommended number of salt rounds
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

    // Insert the new user into the collection
    await userCollection.insertOne({ ...newUser, password: hashedPassword });
    return new NextResponse(
      JSON.stringify({ message: "User created successfully" }),
      {
        status: 201, // Created
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);

    // Return a generic error message
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong",
        error: error.message, // Provide detailed error info for debugging
      }),
      {
        status: 500, // Internal Server Error
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
