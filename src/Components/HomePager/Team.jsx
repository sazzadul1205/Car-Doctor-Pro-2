"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const slides = [
  {
    image: "https://i.ibb.co/tx7VjTk/Team1.jpg",
    name: "Random Name 1",
    title: "Car Random Title 1",
    link: {
      facebook: "https://facebook.com/person3",
      twitter: "https://twitter.com/person3",
      linkedin: "https://linkedin.com/in/person3",
      instagram: "https://instagram.com/person3",
    },
  },
  {
    image: "https://i.ibb.co/cbzj36j/Team2.jpg",
    name: "Random Name 2",
    title: "Car Random Title 2",
    link: {
      facebook: "https://facebook.com/person3",
      twitter: "https://twitter.com/person3",
      linkedin: "https://linkedin.com/in/person3",
      instagram: "https://instagram.com/person3",
    },
  },
  {
    image: "https://i.ibb.co/j47ck3q/Team3.jpg",
    name: "Random Name 3",
    title: "Car Random Title 3",
    link: {
      facebook: "https://facebook.com/person3",
      twitter: "https://twitter.com/person3",
      linkedin: "https://linkedin.com/in/person3",
      instagram: "https://instagram.com/person3",
    },
  },
  {
    image: "https://i.ibb.co/9gXvgbF/Team4.jpg",
    name: "Random Name 4",
    title: "Car Random Title 4",
    link: {
      facebook: "https://facebook.com/person3",
      twitter: "https://twitter.com/person3",
      linkedin: "https://linkedin.com/in/person3",
      instagram: "https://instagram.com/person3",
    },
  },
  {
    image: "https://i.ibb.co/Cs1qWGP/Team5.jpg",
    name: "Random Name 5",
    title: "Car Random Title 5",
    link: {
      facebook: "https://facebook.com/person3",
      twitter: "https://twitter.com/person3",
      linkedin: "https://linkedin.com/in/person3",
      instagram: "https://instagram.com/person3",
    },
  },
  {
    image: "https://i.ibb.co/Wz2Psz1/Team6.jpg",
    name: "Random Name 6",
    title: "Car Random Title 6",
    link: {
      facebook: "https://facebook.com/person3",
      twitter: "https://twitter.com/person3",
      linkedin: "https://linkedin.com/in/person3",
      instagram: "https://instagram.com/person3",
    },
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate visible slides based on current index
  const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= slides.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto text-black">
      {/* Section Header */}
      <div className="w-[700px] text-center pt-28 mx-auto">
        <p className="text-primary text-xl font-semibold py-4">Team</p>
        <p className="text-4xl font-semibold">Meet Our Team</p>
        <p className="pt-3 text-gray-500 leading-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative pt-10">
        <div className="flex items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="btn btn-circle hover:bg-[#FF3811] border-none text-xl hover:text-white bg-opacity-50 absolute left-[-40px] z-10"
          >
            ❮
          </button>

          {/* Cards */}
          <div className="flex space-x-20 overflow-hidden">
            {visibleSlides.map((slide, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-5 shadow-md hover:shadow-lg transition-shadow w-[370px] flex-shrink-0 "
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <div className="text-center pt-4">
                  <p className="text-lg font-semibold">{slide.name}</p>
                  <p className="font-semibold text-md text-gray-500">
                    {slide.title}
                  </p>
                  {/* Link */}
                  <div className="flex gap-4 justify-center mt-5">
                    <a
                      href={slide.link.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#395185]"
                    >
                      <FaFacebookF className="text-white text-xl" />
                    </a>
                    <a
                      href={slide.link.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#55ACEE]"
                    >
                      <FaTwitter className="text-white text-xl" />
                    </a>
                    <a
                      href={slide.link.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#0A66C2]"
                    >
                      <FaLinkedin className="text-white text-xl" />
                    </a>
                    <a
                      href={slide.link.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    >
                      <FaInstagram className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="btn btn-circle hover:bg-[#FF3811] border-none text-xl hover:text-white bg-opacity-50 absolute right-[-40px] z-10"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
