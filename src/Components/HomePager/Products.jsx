import Image from "next/image";
import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const About = [
  {
    image: "https://i.ibb.co/swC7VN6/Product3.png",
    rating: 5,
    title: "Car Engine Plus",
    price: 20.0,
  },
  {
    image: "https://i.ibb.co/CtdJn6s/Product4.png",
    rating: 4,
    title: "Car Air Filter",
    price: 30.0,
  },
  {
    image: "https://i.ibb.co/4K8s8fg/Product5.png",
    rating: 3,
    title: "Cooler Led Light",
    price: 25.0,
  },
  {
    image: "https://i.ibb.co/sq0d4vg/Product6.png",
    rating: 5,
    title: "Cools Led Light",
    price: 35.0,
  },
  {
    image: "https://i.ibb.co/vJhdKTy/Product1.png",
    rating: 4,
    title: "Cools Led Lights",
    price: 15.0,
  },
  {
    image: "https://i.ibb.co/HNqmzc9/Product2.png",
    rating: 5,
    title: "Cools Led Lights",
    price: 40.0,
  },
];

const Products = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-black">
      {/* Section Header */}
      <div className="w-[700px] text-center pt-28 mx-auto">
        <p className="text-primary text-xl font-semibold py-4">
          Popular Products
        </p>
        <p className="text-4xl font-semibold">Browse Our Products</p>
        <p className="pt-3 text-gray-500 leading-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which {"don't"} look even slightly
          believable.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {About.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-5 shadow-sm hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="w-[300px] h-[200px] mx-auto rounded-xl object-cover"
            />
            <div className="flex flex-col items-center pt-5">
              {/* Rating Section */}
              <div className="flex items-center pt-2 text-yellow-500">
                {Array.from({ length: product.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-xl font-semibold">{product.title}</p>

              {/* Price Section */}
              <p className="pt-3 text-lg font-semibold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10 flex justify-center">
        <button className="px-7 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white font-semibold">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
