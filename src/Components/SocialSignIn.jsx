"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const SocialSignIn = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider);
    console.log(resp);
  };

  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex gap-4 justify-center mt-5">
      {/* Google */}
      <button
        onClick={() => handleSocialLogin("google")}
        className="p-4 rounded-full bg-[#F5F5F8] hover:bg-[#cacad4]"
      >
        <FcGoogle className="text-white text-xl" />
      </button>

      {/* Facebook */}
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
