import React from "react";

const Contacts = () => {
  return (
    <div className="bg-black flex max-w-[1200px] mx-auto p-5">
      <div>
        <img src={"/calendar.png"} alt="" />
        <div>
          <p>We are open monday-friday</p>
          <p>7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div>
        <img src={"/telephone.png"} alt="" />
        <div>
          <p>Have a question?</p>
          <p>+2546 251 2658</p>
        </div>
      </div>
      <div>
        <img src={"/location.png"} alt="" />
        <div>
          <p>Need a repair? our address</p>
          <p>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
