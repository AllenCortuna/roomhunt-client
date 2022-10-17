import React from "react";
import  {IoIosWarning}  from "react-icons/io";

const Error = ({ text }) => {
  return (
    <span className="flex flex-wrap justify-start items-center gap-2 border border-error rounded-md w-[18rem] my-2">
    <span className="flex flex-wrap justify-start w-full bg-error rounded-tr-sm rounded-tl-sm p-1">
      <IoIosWarning className="text-sm mr-2 mt-1 text-white inline" />

    <label className="text-white space-mono">WARN!</label>

    </span>

      <p className="m-1 text-center text-error text-xs md:text-sm">{text}</p>
    </span>
  );
};

export default Error;
