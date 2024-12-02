import Image from "next/image";
import React from "react";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/jy7nBKS/1.jpg",
      title: "Expert Car Maintenance Services",
      description:
        "Experience top-notch car maintenance services tailored to keep your vehicle in perfect condition.",
    },
    {
      image: "https://i.ibb.co/Xs2rVkz/2.jpg",
      title: "Reliable Automotive Repairs",
      description:
        "Trust our skilled mechanics for reliable repairs that ensure your car's longevity and performance.",
    },
    {
      image: "https://i.ibb.co/D5QCH5Q/3.jpg",
      title: "Comprehensive Vehicle Inspections",
      description:
        "Get detailed vehicle inspections to identify and address potential issues before they become problems.",
    },
    {
      image: "https://i.ibb.co/PZrLhrY/4.jpg",
      title: "Affordable Car Wash Services",
      description:
        "Keep your car shining and spotless with our affordable and eco-friendly car wash packages.",
    },
    {
      image: "https://i.ibb.co/MSj1Q5B/5.jpg",
      title: "Premium Tire Services",
      description:
        "Upgrade your driving experience with our premium tire services, including alignment and balancing.",
    },
    {
      image: "https://i.ibb.co/71FqWVy/6.jpg",
      title: "Quality Auto Accessories",
      description:
        "Discover a wide range of quality auto accessories to enhance your car’s comfort and style.",
    },
  ];

  return (
    <div className="carousel w-full relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            width={1400}
            height={800}
            className="w-full h-[800px] object-cover"
            
          />
          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-gray-800 opacity-65"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-52 text-white">
            <h2 className="font-bold mb-3 w-[460px] text-[60px]">
              {slide.title}
            </h2>
            <p className="text-lg mb-5 w-[520px]">{slide.description}</p>
            <div className="flex gap-5">
              <button className="px-8 py-4 rounded-md bg-[#FF3811] hover:bg-[#ff3911b7]  font-semibold">
                Discover More
              </button>
              <button className="px-8 py-4 rounded-md border-2 border-white hover:bg-white hover:text-black font-semibold">
                Latest Project
              </button>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute bottom-5 right-32 flex space-x-3 px-52">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle hover:bg-[#FF3811] border-none text-xl hover:text-white bg-opacity-50"
            >
              ❮
            </a>
            <a
              href={`#slide${((index + 1) % slides.length) + 1}`}
              className="btn btn-circle hover:bg-[#FF3811] border-none text-xl hover:text-white bg-opacity-50"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
