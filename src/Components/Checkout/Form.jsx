"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Import SweetAlert2

const Form = ({ serviceDetails }) => {
  const session = useSession();
  const identity = session?.data?.user?.email;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const submitBooking = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: identity, // Access email from session
      bookingDate: new Date().toLocaleDateString(),
      serviceInfo: { ...serviceDetails },
    };

    try {
      const response = await fetch(
        "http://localhost:3000/Checkout/api/new-booking",
        {
          method: "POST",
          body: JSON.stringify(submitBooking),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Booking Successful",
          text: "Your booking has been submitted successfully!",
          confirmButtonText: "OK",
        });
        reset();
      } else {
        // Show error alert
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "There was an issue submitting your booking. Please try again.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // Handle network or other errors
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="py-16 max-w-[1200px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-5">
        <div className="grid grid-cols-2 gap-3">
          {/* First Name */}
          <div className="pt-5">
            <p className="font-semibold pb-3">First Name</p>
            <input
              type="text"
              placeholder="Type your first name"
              {...register("firstName", {
                required: "First Name is required",
              })}
              className={`input input-bordered w-full ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm pt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="pt-5">
            <p className="font-semibold pb-3">Last Name</p>
            <input
              type="text"
              placeholder="Type your last name"
              {...register("lastName", {
                required: "Last Name is required",
              })}
              className={`input input-bordered w-full ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm pt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="pt-5">
            <p className="font-semibold pb-3">Phone Number</p>
            <input
              type="tel"
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
              value={identity || ""}
              readOnly
              className="input input-bordered w-full bg-gray-500 cursor-not-allowed text-white"
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
          className="bg-primary hover:bg-red-300 text-white py-3 font-semibold rounded-md hover:bg-primary-dark w-full mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
