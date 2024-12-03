import { getAllServices } from "@/Services/getServices";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Enable dynamic rendering
export const dynamic = "force-dynamic";

const ServicesPage = async () => {
  try {
    const Services = await getAllServices();
    const servicesData = Services.services;

    return (
      <div className="max-w-[1200px] mx-auto text-black min-h-screen">
        <div className="border-b-2 border-red-500 text-center p-2 text-2xl font-semibold">
          <p>Services</p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 py-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-5 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src={service?.img}
                  alt={service?.title}
                  className="object-cover w-full h-full"
                  layout="fill"
                />
              </div>
              {/* Title */}
              <p className="pt-5 text-xl font-semibold flex-grow">
                {service?.title}
              </p>
              {/* Price and Link */}
              <Link
                href={`/Services/${service?._id}`}
                className="flex justify-between text-[#FF3811] items-center pt-3 group mt-auto"
              >
                <p className="text-lg font-semibold">
                  Price: $ <span>{service?.price}</span>
                </p>
                <div className="flex items-center">
                  <FaArrowRight className="transition-transform transform group-hover:-translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return <div>Error loading services. Please try again later.</div>;
  }
};

export default ServicesPage;
