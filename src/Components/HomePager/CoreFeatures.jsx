import React from "react";
import { FaRegClock } from "react-icons/fa";

const CoreFeatures = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-black px-4">
      {/* Section Header */}
      <div className="w-[700px] text-center pt-28 mx-auto">
        <p className="text-primary text-xl font-semibold py-4">Core Features</p>
        <p className="text-4xl font-semibold">Why Choose Us</p>
        <p className="pt-3 text-gray-500 leading-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex gap-3 py-10">
        {/* Feature 1 */}
        <div className="border border-black rounded-lg p-8 text-center">
          <img
            src="/Icons/group.svg"
            alt="Expert Team"
            className="w-[75px] h-[50px] mx-auto"
          />
          <p className="font-semibold pt-4">Expert Team</p>
        </div>

        {/* Feature 2 */}
        <div className="border border-black rounded-lg p-8 text-center">
          <FaRegClock className="text-6xl mx-auto text-gray-700" />
          <p className="font-semibold pt-4">Timely Delivery</p>
        </div>

        {/* Feature 3 */}
        <div className="border border-black rounded-lg p-8 text-center">
          <img
            src="/Icons/person.svg"
            alt="24/7 Support"
            className="w-[75px] h-[50px] mx-auto"
          />
          <p className="font-semibold pt-4">24/7 Support</p>
        </div>

        {/* Feature 4 */}
        <div className="border border-black rounded-lg p-8 text-center">
          <img
            src="/Icons/Wrench.svg"
            alt="Best Equipment"
            className="w-[75px] h-[50px] mx-auto"
          />
          <p className="font-semibold pt-4">Best Equipment</p>
        </div>

        {/* Feature 5 */}
        <div className="border border-black rounded-lg p-8 text-center">
          <img
            src="/Icons/check.svg"
            alt="100% Guarantee"
            className="w-[75px] h-[50px] mx-auto"
          />
          <p className="font-semibold pt-4">100% Guarantee</p>
        </div>

        {/* Feature 6 */}
        <div className="border border-black rounded-lg p-8 text-center">
          <img
            src="/Icons/deliveryt.svg"
            alt="Fast Delivery"
            className="w-[75px] h-[50px] mx-auto"
          />
          <p className="font-semibold pt-4">Fast Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
