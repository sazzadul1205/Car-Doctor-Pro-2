import React from "react";

const About = () => {
  return (
    <div className="flex gap-5 py-32 text-black max-w-[1200px] mx-auto ">
      <div className="w-1/2 relative">
        {/* First Image */}
        <img
          src="https://i.ibb.co.com/kG6BdSS/person.jpg"
          alt="Person"
          className="w-[460px] h-[440px]"
        />
        {/* Second Image overlapping the first one */}
        <div className="absolute -bottom-44 right-5 p-2 bg-white rounded-md">
          <img
            src="https://i.ibb.co.com/ZxN0pbY/parts.jpg"
            alt="Car Parts"
            className="w-[327px] h-[332px] "
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="w-1/2 ">
        <div className="w-[370px]">
          <h2 className="text-lg font-semibold text-primary">About Us</h2>
          <p className="mt-4 text-[40px] font-semibold ">
            We are qualified & of experience in this field
          </p>
          <p className="font-thin text-gray-400 leading-7 mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="font-thin text-gray-400 leading-7 mt-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="px-7 py-3 bg-primary mt-5 text-white font-semibold rounded-md">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
