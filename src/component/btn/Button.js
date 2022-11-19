import React from "react";

const Button = ({ text, color, onClick, loading }) => {
  return (
    <button
      className={`transition-all duration-300 ease-linear p-4 py-3  text-xs md:text-sm font-[500] shadow-md rounded-md text-gray-600 min-w-[5rem] hover:shadow md:text-sm inline truncate flex flex-row gap-1 ${
        loading ? "bg-none border-2 border-gray-500 text-gray-400 " : color
      }`}
      onClick={onClick}
      disabled={loading}
    >
      {loading && (
        <span className="border-[.1rem] rounded-[.2rem] animate-spin bg-none border-zinc-500 w-4 h-4 my-auto"></span>
      )}

      {loading ? "Processing" : text}
    </button>
  );
};

export default Button;
