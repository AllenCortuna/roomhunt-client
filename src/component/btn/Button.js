import React from "react";
import animate from "../img/animate.svg";

const Button = ({ text, color, onClick, loading }) => {
  return (
    <button
      className={`transition-all duration-300 ease-linear p-4 py-3  text-xs md:text-sm font-[500] shadow-md rounded-md text-gray-600 min-w-[5rem] hover:shadow md:text-sm inline truncate flex flex-row gap-1 ${
        loading
          ? "bg-none border-2 border-gray-500 text-gray-400 py-3 px-2 "
          : color
      }`}
      onClick={onClick}
      disabled={loading}
      type="button"
    >
      {loading && (
        <img
          src={animate}
          alt={
            "https://loading.io/spinner/ellipsis/-speaking-discussion-text-ellipsis-typing-move"
          }
          className="w-6 h-4 my-auto"
        />
      )}
      {loading ? "Loading" : text}
    </button>
  );
};

export default Button;
