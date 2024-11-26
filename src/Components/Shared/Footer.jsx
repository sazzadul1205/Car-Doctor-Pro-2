import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 px-20 bg-black text-white">
      <aside>
        <Link href="/">
          <Image src={"/logo.svg"} alt="Website Logo" width={100} height={50} />
        </Link>

        <p className="w-[280px]">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div className="flex gap-4">
          <p className="p-3 rounded-full bg-red-500 hover:scale-110 transition transform duration-200">
            <FaGoogle className="text-white text-xl" />
          </p>
          <p className="p-3 rounded-full bg-blue-400 hover:scale-110 transition transform duration-200">
            <FaTwitter className="text-white text-xl" />
          </p>
          <p className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition transform duration-200">
            <FaInstagram className="text-white text-xl" />
          </p>
          <p className="p-3 rounded-full bg-blue-700 hover:scale-110 transition transform duration-200">
            <FaLinkedin className="text-white text-xl" />
          </p>
        </div>
      </aside>
      <nav className="space-y-3">
        <h6 className="font-bold text-lg text-white">About</h6>
        <a className="link link-hover hover:text-[#FF3811]">Home</a>
        <a className="link link-hover hover:text-[#FF3811]">Services</a>
        <a className="link link-hover hover:text-[#FF3811]">Contact</a>
      </nav>
      <nav className="space-y-3">
        <h6 className="font-bold text-lg text-white">Company</h6>
        <a className="link link-hover hover:text-[#FF3811]">Why car Doctor</a>
        <a className="link link-hover hover:text-[#FF3811]">About</a>
      </nav>
      <nav className="space-y-3">
        <h6 className="font-bold text-lg text-white">Support</h6>
        <a className="link link-hover hover:text-[#FF3811]">Support Center</a>
        <a className="link link-hover hover:text-[#FF3811]">Feedback</a>
        <a className="link link-hover hover:text-[#FF3811]">Accessability</a>
      </nav>
    </footer>
  );
};

export default Footer;
