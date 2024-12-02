import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const servicesCollection = db.collection("Services");
  try {
    const service = await servicesCollection.findOne({
      _id: new ObjectId(params._id),
    });
    return NextResponse.json({ service });
  } catch (error) {
    console.log(error);
  }
};
