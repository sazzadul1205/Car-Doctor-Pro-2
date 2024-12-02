import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Animated Spinner */}
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        {/* Inner Ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-dashed border-blue-300 rounded-full animate-[spin_2s_linear_reverse_infinite]"></div>
      </div>
    </div>
  );
};

export default loading;
