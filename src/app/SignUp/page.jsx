"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, Suspense } from "react";
import Swal from "sweetalert2";
import SocialSignIn from "@/Components/SocialSignIn";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const route = useRouter();
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
      name: data.name,
      email: data.email,
      image: data.image,
      password: data.password,
    };

    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/SignUp/api`,
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (resp.status === 201) {
        // Automatically sign in the user
        const signInResponse = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false, // Prevent automatic redirection
        });
        route.push("/");

        if (signInResponse?.ok) {
          // Redirect or handle success
          Swal.fire({
            icon: "success",
            title: "Sign Up Successful",
            text: "Your account has been created successfully!",
          });
        } else {
          console.error("Sign-in failed:", signInResponse?.error);
          Swal.fire({
            icon: "error",
            title: "Sign-In Failed",
            text: signInResponse?.error || "Please log in manually.",
          });
        }

        reset(); // Reset the form
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-[1200px] mx-auto min-h-screen flex items-center">
        <div className="flex flex-wrap justify-center md:justify-between items-center w-full ">
          {/* Image */}
          <Image
            src="/login.svg"
            alt="Login Illustration"
            width={600}
            height={650}
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
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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

              {/* Image */}
              <div className="pt-10">
                <p className="font-semibold pb-3">Image</p>
                <input
                  type="text"
                  placeholder="Type your image URL"
                  {...register("image", { required: "Image is required" })}
                  className={`input input-bordered w-full ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.image.message}
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
    </Suspense>
  );
};

export default SignUpPage;
