import React from "react";
import { TiWarning } from "react-icons/ti";

const Verify = () => {
  return (
    <div className="flex flex-row flex-wrap gap-3 border border-gray-200 rounded-lg shadow-md bg-white h-[26rem] md:h-[23rem] w-[21rem] items-start ">
      <span className="text-left p-1 bg-gray-300 w-full rounded-tr-md rounded-tl-md">
        <h1 className="text-cyan-900 capitalize font-bold text-[1.2rem] ">
          <TiWarning className="mr-2 inline" />
          Verify Account
        </h1>
      </span>
    </div>
  );
};

export default Verify;
