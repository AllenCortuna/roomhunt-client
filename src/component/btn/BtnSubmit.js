import React from "react";

const BtnSubmit = ({ loading }) => {
  return (
    <button
      type="submit"
      className={`transition-all duration-200 ease-linear border-2 p-4 py-3 text-xs md:text-sm font-[500] shadow-md rounded-md mt-2 text-gray-600 mr-2 ml-auto ${
        loading
          ? "border-gray-500 text-gray-400 bg-none"
          : "bg-secondary border-secondary"
      } `}
      disabled={loading}
    >
      {loading ? "registering" : "Submit"}
    </button>
  );
};

export default BtnSubmit;
