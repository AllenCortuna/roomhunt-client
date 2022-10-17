import React from "react";
import wait from '../img/wait.svg'


const Loading = ({ text }) => {
  return (
    <div className="w-full p-10">
    <img src={wait} alt="loading" className="mx-auto w-[60%] animate-bounce"/>
      <p className="mx-auto text-gray-500 animate-pulse font-bold">{text}</p>
    </div>
  );
};

export default Loading;
