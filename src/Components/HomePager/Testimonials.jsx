"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Awlad Hossain",
    role: "Businessman",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    stars: 5,
  },
  {
    id: 2,
    name: "Jamal Uddin",
    role: "Engineer",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    stars: 4,
  },
  {
    id: 3,
    name: "Sara Khan",
    role: "Teacher",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    quote:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    stars: 5,
  },
  {
    id: 4,
    name: "Michael Smith",
    role: "Entrepreneur",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    stars: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 2 : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonialsData.length ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto text-black px-4">
      {/* Section Header */}
      <div className="text-center pt-28">
        <p className="text-[#FF3811] text-xl font-semibold py-4">Testimonial</p>
        <p className="text-4xl font-semibold">What Customer Says</p>
        <p className="pt-3 text-gray-500 leading-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which {"don't"} look even slightly
          believable.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative pt-10 py-5">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="btn btn-circle hover:bg-[#FF3811] border-none text-xl hover:text-white bg-opacity-50 absolute left-[-40px] z-10"
          >
            ❮
          </button>

          {/* Testimonials */}
          {testimonialsData
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="border border-gray-300 p-8 rounded-xl space-y-3 py-14 flex-1 h-[270px]"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-[60px]"
                    />
                    <div className="ml-5">
                      <p className="text-xl font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Image
                    src="Icons/quote.svg"
                    alt="Quote"
                    width={55}
                    height={55}
                    className="w-[55px]"
                  />
                </div>
                {/* Quote */}
                <p className="text-gray-500 leading-7">{testimonial.quote}</p>
                {/* Stars */}
                <div className="flex">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                </div>
              </div>
            ))}

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

export default Testimonials;
