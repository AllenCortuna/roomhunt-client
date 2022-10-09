import React from "react";

const Button = ({ text, color, onClick, txtClr }) => {
  return (
    <button
      className={`transition-all duration-300 ease-linear p-4 py-3 ${color} text-xs md:text-sm font-[500] shadow-md rounded-md text-gray-600 min-w-[5rem] hover:shadow md:text-sm ${txtClr} inline`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
