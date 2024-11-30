import Form from "@/Components/Checkout/Form";
import { getSingleService } from "@/Services/getServices";
import Image from "next/image";

const Page = async ({ params }) => {
  const data = await getSingleService(params?._id);
  const serviceDetails = data?.service || {};

  return (
    <div className="text-black">
      {/* Banner */}
      <div className="relative">
        {/* Image with black overlay */}
        <div className="relative">
          <Image
            src={serviceDetails.img}
            alt={serviceDetails.title || "Default image"}
            width={2400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        {/* Centered text block */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary px-5 py-3 text-center font-semibold text-white w-[250px]">
            <p>Checkout / Checkout Form</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <Form serviceDetails={serviceDetails}></Form>
    </div>
  );
};

export default Page;
