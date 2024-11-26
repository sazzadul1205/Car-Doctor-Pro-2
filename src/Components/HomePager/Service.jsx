import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = [
  {
    image: "https://i.ibb.co/C28hxYM/Service1.jpg",
    title: "Electric System",
    price: 20.0,
  },
  {
    image: "https://i.ibb.co/RDBxR3R/Service2.jpg",
    title: "Engine Diagnostics",
    price: 30.0,
  },
  {
    image: "https://i.ibb.co/Q97nLmN/Service3.jpg",
    title: "Tire Replacement",
    price: 25.0,
  },
  {
    image: "https://i.ibb.co/p02qt1D/Service4.jpg",
    title: "Brake Repair",
    price: 35.0,
  },
  {
    image: "https://i.ibb.co/smtFJS6/Service5.jpg",
    title: "Battery Services",
    price: 15.0,
  },
  {
    image: "https://i.ibb.co/zrz8JmN/Service6.jpg",
    title: "Air Conditioning",
    price: 40.0,
  },
];

const Service = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-black">
      {/* Section Header */}
      <div className="w-[700px] text-center pt-28 mx-auto">
        <p className="text-primary text-xl font-semibold py-4">Service</p>
        <p className="text-4xl font-semibold">Our Service Area</p>
        <p className="pt-3 text-gray-500 leading-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {About.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-5 shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-[310px] mx-auto rounded-xl"
            />
            <p className="pt-5 text-xl font-semibold">{service.title}</p>
            <div className="flex justify-between text-primary items-center pt-3">
              <p className="text-lg font-semibold">
                Price: $ <span>{service.price.toFixed(2)}</span>
              </p>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>

      <div className="py-5 flex justify-center">
        <button className="px-7 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white font-semibold">More Services</button>
      </div>
    </div>
  );
};

export default Service;
