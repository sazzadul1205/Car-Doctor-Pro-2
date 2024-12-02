import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Discover who we are, our mission, and the values that drive us
            forward.
          </p>
        </div>
      </div>

      {/* Company Details Section */}
      <section className="py-16 ">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center max-w-[1200px]">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
            <p className="mt-4 text-gray-600">
              We are a team of passionate professionals dedicated to delivering
              high-quality solutions tailored to our {"clients'"} needs. With
              years of experience, we have become a trusted name in the
              industry.
            </p>
          </div>
          <Image
            src="https://via.placeholder.com/500x300"
            alt="Company Overview"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center max-w-[1200px]">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To empower individuals and organizations by providing innovative
              solutions that inspire progress and drive success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              To be a global leader in our field, known for our commitment to
              quality, integrity, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mt-4">
            The talented individuals behind our success.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {/* Team Member */}
            <div className="text-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member"
                width={150}
                height={150}
                className="w-32 h-32 mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Jane Doe
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Repeat for more members */}
            <div className="text-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member"
                width={150}
                height={150}
                className="w-32 h-32 mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                John Smith
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member"
                width={150}
                height={150}
                className="w-32 h-32 mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Sarah Johnson
              </h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Join Us on Our Journey</h2>
          <p className="mt-4 text-lg">
            Let’s work together to make great things happen. Get in touch with
            us today.
          </p>
          <div className="mt-6">
            <button className="bg-white text-primary font-semibold py-3 px-6 rounded-md hover:bg-gray-200">
              Contact Us
            </button>
            <button className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-md ml-4 hover:bg-white hover:text-primary">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
