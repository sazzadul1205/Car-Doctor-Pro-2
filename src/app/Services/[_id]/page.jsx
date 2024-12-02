import { getAllServices, getSingleService } from "@/Services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaRegPlayCircle } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";

export const metadata = {
  title: "Service Details",
  description: "Services Details",
};

const ServicesDetailPage = async ({ params }) => {
  const data = await getSingleService(params._id);
  const allServices = await getAllServices();

  const serviceDetails = data?.service || {};
  const allService = allServices.services;

  return (
    <div className="text-black">
      {/* Banner */}
      <div className="relative">
        {/* Image with black overlay */}
        <div className="relative">
          <Image
            src="/DetailesImg.jpg"
            alt="Details Image"
            width={1400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        {/* Centered text block */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary px-5 py-3 text-center font-semibold text-white w-[250px]">
            <p>Services / Services Details</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto flex py-20 gap-5">
        {/* Left Section */}
        <div className="w-2/3">
          {/* Main Image */}
          <Image
            src={serviceDetails.img}
            alt="Video Thumbnail"
            width={800}
            height={300}
          />

          {/* Service Details */}
          <div className="pt-2">
            <h2 className="text-4xl font-semibold py-4">
              {serviceDetails.title}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {serviceDetails.description}
            </p>
          </div>

          {/* Cards Section */}
          <div className="py-10 grid grid-cols-2 gap-5">
            {serviceDetails.facility.map((fac, i) => (
              <div
                key={i}
                className="bg-gray-200 py-8 p-10 rounded-xl border-t-4 border-primary"
              >
                <h4 className="text-xl font-semibold py-3">{fac.name}</h4>
                <p className="text-gray-500 leading-relaxed">{fac.details}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed">
            {serviceDetails.description}
          </p>

          {/* Process Steps */}
          <div className="py-4">
            <div className="pt-10">
              <h2 className="text-4xl font-semibold py-4">
                3 Simple Steps to Process
              </h2>
              <p className="text-gray-500 leading-relaxed">
                There are many variations of passages of Lorem Ipsum
                available...
              </p>
            </div>

            <div className="grid grid-cols-3 py-5 gap-5">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className="px-5 py-8 rounded border border-gray-400"
                >
                  <div className="bg-red-200 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                    <div className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center">
                      <p className="text-center font-semibold text-white">
                        0{step}
                      </p>
                    </div>
                  </div>
                  <h4 className="mt-4 text-center font-semibold text-xl">
                    Step {step}
                  </h4>
                  <p className="px-8 pt-3 text-gray-500 text-center">
                    It uses a dictionary of over 200.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video demo image */}
          <div className="relative group w-[800px] h-[300px] overflow-hidden">
            <Image
              src={serviceDetails.img}
              alt="Video Thumbnail"
              width={800}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <FaRegPlayCircle className="absolute inset-0 text-red-500 text-5xl m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3">
          {/* Services List */}
          <div className="bg-gray-200 py-10 px-12 rounded-xl">
            <p className="text-2xl font-bold">Services</p>
            {allService.map((service, i) => (
              <Link
                href={`/Services/${service?._id}`}
                key={i}
                className="mt-4 flex items-center justify-between bg-white hover:bg-primary hover:text-white font-semibold p-4 rounded-md"
              >
                <p>{service.title}</p>
                <FaArrowRight />
              </Link>
            ))}
          </div>

          {/* Downloads */}
          <div className="bg-black py-10 px-12 rounded-xl mt-4 text-white">
            <p className="text-2xl font-bold">Download</p>
            {[{ label: "Our Brochure" }, { label: "Company Details" }].map(
              (item, i) => (
                <div key={i} className="flex justify-between pt-5 items-center">
                  <div className="flex items-center">
                    <IoDocumentOutline className="text-3xl" />
                    <div className="ml-2">
                      <p className="font-semibold text-lg">{item.label}</p>
                      <p className="text-base font-normal text-gray-400">
                        Download
                      </p>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-red-400 px-4 rounded-xl py-4">
                    <FaArrowRight />
                  </button>
                </div>
              )
            )}
          </div>

          {/* Help Section */}
          <div className="bg-black py-10 px-12 rounded-xl mt-4 text-white">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="pt-5 font-bold text-xl px-5 text-center">
              Need Help? We Are Here To Help You
            </p>
            <div className="py-10 relative">
              <div className="bg-white text-black py-8 text-center rounded-xl">
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Car Doctor</span> Special
                </h3>
                <p className="font-bold pt-1 text-gray-400">
                  Save up to <span className="text-primary">60% off</span>
                </p>
              </div>
              <div className="absolute bottom-3  left-14">
                <button className="bg-primary hover:bg-red-300 px-10 py-4 font-semibold rounded-xl text-white shadow-lg">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>

          {/* Price and Checkout */}
          <div className="py-5">
            <p className="text-4xl font-bold">Price $ {serviceDetails.price}</p>
            <Link href={`/Checkout/${serviceDetails?._id}`}>
              <button className="my-4 py-3 w-full bg-primary hover:bg-red-300 text-white font-semibold">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailPage;
