"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();
  // console.log(session);

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/About" },
    { title: "Services", path: "/Services" },
    { title: "Blog", path: "/Blog" },
    { title: "Contact", path: "/Contact" },
  ];

  return (
    <div className="bg-white">
      <div className="navbar px-5 items-center flex justify-between">
        {/* Start */}
        <div className="flex items-center space-x-4">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <IoMdMenu />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="Website Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Center */}
        <div className="hidden lg:flex space-x-5 font-bold px-1 text-[16px] ">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className={
                pathName === link.path
                  ? "text-[#FF3811] "
                  : "hover:text-[#FF3811] text-black"
              }
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* End */}
        <div className="flex text-black gap-3">
          <IoBagOutline className="text-2xl font-bold" />
          <CiSearch className="text-2xl font-bold" />
          <button className="px-7 py-3 text-[#FF3811] hover:text-white hover:bg-[#FF3811] border border-[#FF3811] font-bold ">
            Appointment
          </button>

          {!session.data ? (
            // If the user is not logged in, show the Login link
            <Link
              href={"/Login"}
              className="px-7 py-3 hover:text-[#FF3811] text-white bg-[#FF3811] hover:bg-white border hover:border-[#FF3811] font-bold"
            >
              Login
            </Link>
          ) : (
            // If the user is logged in, show the Logout button
            <>
              <Image
                src={session?.data?.user?.image}
                alt={session?.data?.user?.image}
                width={50}
                height={50}
              />
              <button
                className="px-7 py-3 hover:text-[#FF3811] text-white bg-[#FF3811] hover:bg-white border hover:border-[#FF3811] font-bold"
                onClick={() => signOut()} // Trigger logout using NextAuth's signOut function
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
