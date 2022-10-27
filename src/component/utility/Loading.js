import React from "react";
import wait from '../img/wait.svg'


const Loading = ({ text }) => {
  return (
    <div className="w-full p-10 mx-auto my-auto">
    <img src={wait} alt="loading" className="mx-auto w-[80%] animate-bounce"/>
      <p className="mx-auto text-gray-500 animate-pulse font-bold w-[80%]">{text}</p>
    </div>
  );
};

export default Loading;
