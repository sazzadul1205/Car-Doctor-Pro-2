"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const SocialSignIn = () => {
  const searchParams = useSearchParams();

  const path = searchParams.get(`redirect`);

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };

  return (
    <div className="flex gap-4 justify-center mt-5">
      {/* Google */}
      <button
        onClick={() => handleSocialLogin("google")}
        className="p-4 rounded-full bg-[#F5F5F8] hover:bg-[#cacad4]"
      >
        <FcGoogle className="text-white text-xl" />
      </button>

      {/* GitHub */}
      <button
        onClick={() => handleSocialLogin("github")}
        className="p-4 rounded-full bg-[#F5F5F8] hover:bg-[#cacad4]"
      >
        <FaGithub className="text-black text-xl" />
      </button>
    </div>
  );
};

export default SocialSignIn;
