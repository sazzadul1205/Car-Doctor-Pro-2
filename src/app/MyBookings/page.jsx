"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Swal from "sweetalert2";

const MyBookingsPage = () => {
  const { data: session } = useSession(); // Destructure `data` from `useSession`
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const loadData = async () => {
    try {
      const resp = await fetch(
        `http://localhost:3000/MyBookings/api/${session?.user?.email}`
      );
      const data = await resp.json();
      setBookings(data?.bookings || []); // Handle undefined data
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    } finally {
      setLoading(false); // Ensure loading stops after fetch
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      loadData();
    }
  }, [session]);

  const handleDelete = async (_id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // Send DELETE request
        const response = await fetch(
          `http://localhost:3000/MyBookings/api/Bookings/${_id}`,
          { method: "DELETE" }
        );

        const data = await response.json();

        if (response.ok) {
          // Show success alert
          Swal.fire("Deleted!", "Your booking has been deleted.", "success");
          // Refresh data
          loadData();
        } else {
          // Show error alert with server-provided message
          Swal.fire("Error!", data.error || "Something went wrong.", "error");
        }
      } catch (error) {
        // Show error alert for network or unexpected errors
        Swal.fire(
          "Error!",
          "Failed to delete booking. Please try again.",
          "error"
        );
        console.error("Error deleting booking:", error);
      }
    }
  };

  return (
    <div className="text-black">
      {/* Banner */}
      <div className="relative">
        <div className="relative">
          <img
            src="/DetailesImg.jpg"
            alt="Details Image"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary px-5 py-3 text-center font-semibold text-white w-[250px]">
            <p>Bookings / My Bookings</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-[1200px] mx-auto py-5">
        <p className="text-center font-bold text-2xl py-5">My Bookings</p>
        {loading ? ( // Show loading state while fetching data
          <p className="text-center text-gray-500">Loading bookings...</p>
        ) : bookings.length > 0 ? (
          <div className="overflow-x-auto border border-gray-400 p-4 rounded-2xl">
            <table className="table-auto w-full">
              {/* Table Head */}
              <thead>
                <tr className="border-b-2 border-black text-center">
                  <th className="py-4">Image</th>
                  <th className="py-4">Service Name</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Booking Date</th>
                  <th className="py-4">Status</th>
                  <th className="py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr
                    key={index}
                    className="border-b text-center hover:bg-gray-100"
                  >
                    <td className="py-4">
                      <Image
                        src={booking.serviceInfo.img}
                        alt={booking.serviceInfo.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </td>
                    <td className="py-4">{booking.serviceInfo.title}</td>
                    <td className="py-4">${booking.serviceInfo.price}</td>
                    <td className="py-4">{booking.bookingDate}</td>
                    <td className="py-4 text-yellow-600 font-semibold">
                      {booking.status || "Pending"}
                    </td>
                    <td className="py-4 space-x-3">
                      <button className="w-24 py-2 text-sm text-white bg-yellow-500 hover:bg-yellow-400 rounded">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="w-24 py-2 text-sm text-white bg-red-500 hover:bg-red-400 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No bookings found.</p> // Message for empty bookings
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
