import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className=" max-w-[1200px] mx-auto py-5 ">
      <div className="bg-black flex px-10 py-28 justify-between rounded-2xl">
        <div className="flex gap-4">
          <Image
            src={"/calendar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10"
          />
          <div>
            <p className="text-sm">We are open monday-friday</p>
            <p className="text-xl">7:00 am - 9:00 pm</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src={"/telephone.png"}
            alt=""
            width={40}
            height={40}
            className="w-10"
          />
          <div>
            <p className="text-sm">Have a question?</p>
            <p className="text-xl">+2546 251 2658</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src={"/location.png"}
            alt=""
            width={40}
            height={40}
            className="w-10"
          />
          <div>
            <p className="text-sm">Need a repair? our address</p>
            <p className="text-xl">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
