import React from "react";
import animate from "../img/animate.svg";

const Button = ({ text, onClick, loading, color }) => {
  return (
    <button
      className={`transition-all duration-300 ease-linear p-5 py-3  text-xs md:text-sm font-[500] shadow-md rounded-lg min-w-[5rem] hover:shadow md:text-sm inline truncate flex flex-row border-2 h-auto ${
        loading
          ? "bg-none border-gray-500 text-gray-400 py-3 px-2 "
          : `${color}`
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

Button.defaultProps = {
  color: "bg-zinc-700 border-zinc-200 text-white"
}


export default Button;
