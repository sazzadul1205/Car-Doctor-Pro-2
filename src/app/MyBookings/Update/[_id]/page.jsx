"use client";

import BookingsUpdateForm from "@/Components/MyBookings/BookingsUpdateForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyBookingUpdatePage = ({ params }) => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    const loadBooking = async () => {
      try {
        const bookingDetails = await fetch(
          `http://localhost:3000/MyBookings/api/Bookings/${params?._id}`
        );
        if (!bookingDetails.ok) {
          throw new Error("Failed to fetch booking details");
        }
        const data = await bookingDetails.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    if (params) {
      loadBooking();
    }
  }, [params]); // Dependencies array includes 'params'

  if (!bookings) {
    return <div>Loading...</div>; // Show loading state until bookings are loaded
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        {/* Image with black overlay */}
        <div className="relative">
          <Image
            src={bookings?.serviceInfo?.img || "/DetailesImg.jpg"}
            alt={bookings?.serviceInfo?.title || "Default image"}
            width={1400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        {/* Centered text block */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary px-5 py-3 text-center font-semibold text-white w-[250px]">
            <p>Checkout / Checkout Form</p>
          </div>
        </div>
      </div>

      {/* Bookings Update Form */}
      <BookingsUpdateForm bookingData={bookings} />
    </div>
  );
};

export default MyBookingUpdatePage;
