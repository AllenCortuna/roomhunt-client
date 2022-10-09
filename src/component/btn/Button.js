import React from "react";

const Button = ({ text, color, onClick, txtColor }) => {
  return (
    <button
      className={`transition-all duration-300 ease-linear p-4 py-3 bg-${color} text-xs md:text-sm font-[500] shadow-lg rounded-md mt-2 text-gray-600 mr-2 ml-auto min-w-[5rem] hover:shadow hover:font-[800]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
