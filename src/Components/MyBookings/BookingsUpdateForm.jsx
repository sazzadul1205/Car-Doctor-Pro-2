"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookingsUpdateForm = ({ bookingData }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const updateBooking = {
      phoneNumber: data.phoneNumber,
      bookingDate: new Date().toLocaleDateString(),
      status: bookingData.status,
      message: data.message,
    };

    try {
      const resp = await fetch(
        `https://car-doctor-pro-1pbo.vercel.app//MyBookings/api/Bookings/${bookingData._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateBooking),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (resp.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Booking updated successfully.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        router.push("/MyBookings");
      } else {
        const errorData = await resp.json();
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: errorData.error || "Failed to update booking.",
          confirmButtonColor: "#d33",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="py-16 max-w-[1200px] mx-auto text-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-200 p-5 rounded-lg"
      >
        <div className="grid grid-cols-2 gap-3">
          {/* First Name */}
          <div className="pt-5">
            <p className="font-semibold pb-3">First Name</p>
            <input
              type="text"
              defaultValue={bookingData.firstName}
              readOnly
              className="input input-bordered w-full bg-gray-300 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Last Name */}
          <div className="pt-5">
            <p className="font-semibold pb-3">Last Name</p>
            <input
              type="text"
              defaultValue={bookingData.lastName}
              readOnly
              className="input input-bordered w-full bg-gray-300 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Phone Number */}
          <div className="pt-5">
            <p className="font-semibold pb-3">Phone Number</p>
            <input
              type="tel"
              defaultValue={bookingData.phoneNumber}
              placeholder="Type your phone number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Phone number must be 10-15 digits",
                },
              })}
              className={`input input-bordered w-full ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm pt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="pt-5">
            <p className="font-semibold pb-3">Email</p>
            <input
              type="email"
              defaultValue={bookingData.email}
              readOnly
              className="input input-bordered w-full bg-gray-300 cursor-not-allowed text-gray-600"
            />
          </div>
        </div>

        {/* Your Message */}
        <div className="pt-5">
          <p className="font-semibold pb-3">Your Message</p>
          <textarea
            placeholder="Type your message"
            {...register("message", {
              required: "Message is required",
            })}
            defaultValue={bookingData.message}
            className={`textarea textarea-bordered w-full ${
              errors.message ? "border-red-500" : ""
            }`}
            rows="5"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm pt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-primary text-white py-3 font-semibold rounded-md w-full mt-5 ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-primary-dark"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BookingsUpdateForm;
