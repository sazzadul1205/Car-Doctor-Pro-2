"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import SocialSignIn from "@/Components/SocialSignIn";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const newUser = {
      userName: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const resp = await fetch("http://localhost:3000/SignUp/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      });

      if (resp.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Sign Up Successful",
          text: "Your account has been created successfully!",
        });
        reset();
      } else {
        const responseData = await resp.json();
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: responseData.message || "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to connect to the server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex items-center">
      <div className="flex flex-wrap justify-center md:justify-between items-center w-full ">
        {/* Image */}
        <img
          src="/login.svg"
          alt="Login Illustration"
          className="hidden md:block w-[50%]"
        />

        {/* Form */}
        <div className="text-black border border-gray-400 w-full md:w-[600px] rounded-xl p-10 px-10 md:px-20">
          <h2 className="text-center text-4xl font-semibold">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name */}
            <div className="pt-10">
              <p className="font-semibold pb-3">Name</p>
              <input
                type="text"
                placeholder="Type your name"
                {...register("name", { required: "Name is required" })}
                className={`input input-bordered w-full ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="pt-10">
              <p className="font-semibold pb-3">Email</p>
              <input
                type="email"
                placeholder="Type your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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

            {/* Password */}
            <div className="pt-10">
              <p className="font-semibold pb-3">Password</p>
              <input
                type="password"
                placeholder="Type your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`input input-bordered w-full ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="pt-10">
              <p className="font-semibold pb-3">Confirm Password</p>
              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`input input-bordered w-full ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FF3811] hover:bg-[#ff3911a9]"
              } mt-10 py-3 w-full text-white font-semibold rounded-xl`}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center pt-6 font-semibold">Or Sign Up with</p>

          {/* Social Links */}
          <SocialSignIn />

          <p className="text-gray-500 text-center pt-5">
            Already have an account?{" "}
            <Link
              href={"/Login"}
              className="text-[#FF3811] hover:text-[#ff3911a9] font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
