import React from "react";
import wait from "../img/wait.svg";

const Loading = ({ text }) => {
  return (
    <div className="text-center flex flex-wrap flex-cols justify-center w-auto p-10 mx-auto my-auto">
      <img src={wait} alt="loading" className="mx-auto" />
      <span className="flex flex-row content-center justify-start">
    <span className="border-2 rounded-md animate-spin bg-none border-zinc-500 w-auto h-auto">
    </span>
        <p className="text-center text-gray-500 font-bold">{text}</p>
      </span>
    </div>
  );
};

export default Loading;
