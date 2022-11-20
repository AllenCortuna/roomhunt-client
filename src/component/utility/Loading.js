import React from "react";
import wait from "../img/wait.svg";

const Loading = ({ text }) => {
  return (
    <div className="text-center grid  max-w-20 w-auto p-10 mx-auto my-auto">
      <img src={wait} alt="loading" className="mx-auto w-[40%]" />
      <span className="flex flex-wrap flex-row justify-center content-start flex-row mt-5 gap-3 ">
        <span className="border-2 rounded-md animate-spin bg-none border-zinc-500 w-7 h-7 my-auto"></span>
        <p className="text-center text-md text-gray-500 font-bold my-auto truncate ">{text}</p>
      </span>
    </div>
  );
};

export default Loading;
