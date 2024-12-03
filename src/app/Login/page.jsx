"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignIn from "@/Components/SocialSignIn";
import Image from "next/image";
import Swal from "sweetalert2";
import { Suspense } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [path, setPath] = useState(null); // Redirect path
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectPath = searchParams.get("redirect");
    setPath(redirectPath);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect for error handling
    });

    setLoading(false);

    if (resp?.error) {
      // Handle different error scenarios
      const errorMessage = resp.error.includes("Google or GitHub")
        ? "This account is registered using Google or GitHub. Please log in with the appropriate method."
        : "Invalid email or password. Please try again.";

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    } else if (resp?.ok) {
      // Redirect after successful login
      router.push(path || "/");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex items-center">
      <div className="flex flex-wrap justify-center md:justify-between items-center w-full">
        {/* Illustration */}
        <Image
          src="/login.svg"
          alt="Login Illustration"
          width={600}
          height={650}
          className="hidden md:block w-[50%]"
        />

        {/* Form */}
        <div className="text-black border border-gray-400 w-full md:w-[600px] rounded-xl p-10 px-10 md:px-20">
          <h2 className="text-center text-4xl font-semibold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="pt-10">
              <p className="font-semibold pb-3">Email</p>
              <input
                type="email"
                placeholder="Type your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF3811]"
              } hover:bg-[#ff3911a9] mt-10 py-3 w-full text-white font-semibold rounded-xl`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center pt-6 font-semibold">Or Sign Up with</p>

          {/* Social Links */}
          <SocialSignIn />

          <p className="text-gray-500 text-center pt-5">
            {"Don't"} have an account?{" "}
            <Link
              href={"/SignUp"}
              className="text-[#FF3811] hover:text-[#ff3911a9] font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Wrap LoginPage with Suspense to avoid SSR issues with searchParams
const LoginPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoginPage />
  </Suspense>
);

export default LoginPageWrapper;
