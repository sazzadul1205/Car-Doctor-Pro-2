"use client";

import { getSingleService } from "@/Services/getServices";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const Page = async ({ params }) => {
  const data = await getSingleService(params._id);
  const serviceDetails = data?.service || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const submitCheckout ={
      
    }
    console.log("Form Submitted Data: ", data);
  };

  return (
    <div className="text-black">
      {/* Banner */}
      <div className="relative">
        {/* Image with black overlay */}
        <div className="relative">
          <Image
            src={serviceDetails.img}
            alt={serviceDetails.title}
            width={2400}
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

      <div className="pt-16 max-w-[1200px] mx-auto">
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
                placeholder="Type your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`input input-bordered w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.email.message}
                </p>
              )}
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
            className="bg-primary hover:bg-red-300 text-white  py-3 font-semibold rounded-md hover:bg-primary-dark w-full mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
